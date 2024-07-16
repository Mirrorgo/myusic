"use client";
import { useHomeStore } from "@/store/global";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { ArrowLeft, X } from "lucide-react";
import { Suspense, useEffect } from "react";
function Back() {
  const { isHomeShown, showHome, hideHome } = useHomeStore();

  return (
    <div className="flex">
      <div className="lg:invisible" onClick={() => showHome()}>
        <Icon path={mdiMenu} size={1.2} />
      </div>
    </div>
  );
}

export default Back;
