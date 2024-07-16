// apiService.ts
import axios, { AxiosInstance } from "axios";

// const api = axios.create({
//   //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   //   baseURL: "http://localhost:30270/api",
//   baseURL: "http://server.unimelb.top:30270/api",
// });

let api: AxiosInstance;

// 创建一个返回当前的 api 实例或创建新的实例的函数
const getApiInstance = (): AxiosInstance => {
  if (api) {
    return api;
  }

  // api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://server.unimelb.top:30270/api",
  // });

  api = axios.create({
    //   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    // baseURL: "http://localhost:30270/api",
    baseURL: "http://server.unimelb.top:30270/api",
  });

  return api;
};

const apiLogin = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  if (response.status === 200 && response.data.success === true) {
    const {
      data: { access_token },
    } = response.data;
    return access_token;
  } else {
    throw new Error("Login failed");
  }
};

const setAuthToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeAuthToken = () => {
  delete api.defaults.headers.common["Authorization"];
};

export { apiLogin, setAuthToken, removeAuthToken, getApiInstance as api };
