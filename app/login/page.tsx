"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";
import LoginPanel from "./components/login-panel";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* TODO: 改造成正式的form, 支持validate */
/* <LoginPanel /> */

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const isSuccess = await login(email, password);

    if (isSuccess) {
      router.push("/"); // 登录成功后重定向到 /
    } else {
      setError("Login failed");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <Card className=" w-96 h-min mx-auto">
        <CardHeader>
          <CardTitle>鱼乐 Myusic</CardTitle>
        </CardHeader>
        <div className=" mx-10 mb-4">
          <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <Button type="submit">登录</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
