"use client";

const timestampToLocalDate = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid timestamp");
    }

    // 使用 toLocaleString 获取客户端的本地日期和时间
    const localDate = date.toLocaleString("en-CA", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // 由于 toLocaleString 可能返回包含时间的信息，我们只提取日期部分
    const formattedDate = localDate.split(",")[0];

    return formattedDate;
  } catch (error) {
    console.error("Error converting timestamp to local date:", error);
    throw error;
  }
};

export { timestampToLocalDate };
