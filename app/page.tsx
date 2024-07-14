"use client";
import Link from "next/link";
import { api } from "./store/authStore";
import { useEffect } from "react";

function Page() {
  // 在组件中使用
  const fetchData = async () => {
    try {
      const response = await api.post("/v1/user/list");
      // 处理响应
      console.log(response.data, "aha");
    } catch (error) {
      // 处理错误
    }
  };
  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  return (
    <div>
      <Link href={"./home"}>to home</Link>
    </div>
  );
}

export default Page;
