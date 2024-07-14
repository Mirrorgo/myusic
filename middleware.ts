import { NextResponse } from "next/server";
import jwt, { Secret } from "jsonwebtoken";
import { parse } from "cookie";

const SECRET_KEY = process.env.SECRET_KEY as Secret;

export function middleware(request: {
  headers: { get: (arg0: string) => string | null };
  url: string | URL | undefined;
}) {
  // 解析 Cookie
  // cookie这部分只有next使用，后端是不用的
  const cookieHeader = request.headers.get("cookie");
  const cookies = cookieHeader ? parse(cookieHeader) : {};
  const token = cookies.token;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // TODO： 通过环境变量进行jwt next中间件的校验
    // jwt.verify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/home"], // 保护的路径
};
