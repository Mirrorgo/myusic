"use client";
import { useHomeStore } from "@/store/global";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

export default function Home() {
  const { showHome } = useHomeStore();
  return (
    // TODO: 测试用背景颜色
    <>
      <div onClick={() => showHome()} className="lg:invisible">
        <Icon path={mdiMenu} size={1.2} />
      </div>

      <div>美好的一天</div>
    </>
  );
}
