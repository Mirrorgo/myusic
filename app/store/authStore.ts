// app/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { cookies } from "next/headers";

type AuthState = {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<Boolean>;
  logout: () => void;
  isAuthenticated: () => boolean;
  //   checkAuth: () => Promise<boolean>;
};

const api = axios.create({
  baseURL: "http://localhost:30270/api",
});

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: async (email: string, password: string) => {
        const response = await fetch("http://localhost:30270/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const {
            data: { access_token },
          } = await response.json();
          set({ token: access_token, user: { email } });
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${access_token}`; // all request https://axios-http.com/docs/config_defaults
          //   NOTE: 用httpOnly目前不行，访问不到了
          //   研究下怎么更安全
          //   document.cookie = `token=${access_token}; path=/; secure; HttpOnly; SameSite=Strict`;
          document.cookie = `token=${access_token}; path=/; secure; SameSite=Strict`;
          //   👇是服务端用的
          // cookies().set({
          // 	name: 'token',
          // 	value: access_token,
          // 	path: '/',
          // 	secure: true,
          // 	sameSite: 'Strict'
          //   });

          return true;
        } else {
          return false;
        }
      },
      logout: () => {
        set({ user: null, token: null });
        delete api.defaults.headers.common["Authorization"];
      },
      isAuthenticated: () => !!get().token,
      //   checkAuth: async () => {
      //     const token = get().token;
      //     if (!token) return false;

      //     try {
      //       const response = await api.get("/auth/verify", {
      //         headers: { Authorization: `Bearer ${token}` },
      //       });
      //       return response.status === 200;
      //     } catch (error) {
      //       console.error("Auth check failed:", error);
      //       set({ user: null, token: null });
      //       return false;
      //     }
      //   },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export { useAuthStore, api };
