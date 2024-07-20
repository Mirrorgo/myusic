// app/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { cookies } from "next/headers";
import {
  apiLogin,
  removeAuthToken,
  setAuthToken,
} from "@/service/core/apiService";

type AuthState = {
  user: any;
  token: string | null;
  login: (email: string, password: string) => Promise<Boolean>;
  logout: () => void;
  isAuthenticated: () => boolean;
  //   checkAuth: () => Promise<boolean>;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      login: async (email: string, password: string) => {
        try {
          const token = await apiLogin(email, password);
          set({ token, user: { email } });
          setAuthToken(token);
          // 目前不能用httpOnly, 考虑改下对应的后端然后用httpOnly
          document.cookie = `token=${token}; path=/; secure; SameSite=Strict`;
          return true;
        } catch (error) {
          console.error("Login error:", error);
          return false;
        }
      },
      logout: () => {
        set({ user: null, token: null });
        removeAuthToken();
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
      // getStorage: () => localStorage,
    }
  )
);

export { useAuthStore };
