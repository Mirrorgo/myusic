"use client";

import { timestampToLocalDate } from "@/utils/date";

// 独立抽出一个组件确保被客户端调用

const DateFormatter = ({ timestamp }: { timestamp: string }) => {
  const formattedDate = timestampToLocalDate(timestamp);
  return <span>{formattedDate}</span>;
};

export default DateFormatter;
