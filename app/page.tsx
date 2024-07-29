"use client";
import { api } from "@/service/core/apiService";
import Link from "next/link";
import { useEffect } from "react";

function Page() {
  // 在组件中使用
  const fetchData = async () => {
    try {
      const response = await api().post("/v1/user/list");
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
      <Link href={"./home"}>点击听歌，当前页面暂未开发</Link>
    </div>
  );
}

export default Page;
