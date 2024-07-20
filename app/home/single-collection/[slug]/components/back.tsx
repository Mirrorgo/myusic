"use client";
import { useHomeStore } from "@/store/global";
import { IconSize } from "@/types/enums";
import { Menu } from "lucide-react";
function Back() {
  const { showHome } = useHomeStore();

  return (
    <div className="lg:invisible" onClick={() => showHome()}>
      {/* <Icon path={mdiMenu} size={1.2} /> */}
      <Menu size={IconSize.Medium} />
    </div>
  );
}

export default Back;
