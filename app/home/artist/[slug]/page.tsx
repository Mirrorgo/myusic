"use client";
import { useHomeStore } from "@/store/global";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { ArrowLeft, X } from "lucide-react";
import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const { isHomeShown, showHome, hideHome } = useHomeStore();

  return (
    <div>
      <div className="flex">
        <div onClick={() => showHome()}>
          <Icon path={mdiMenu} size={1.2} />
        </div>
      </div>
      My Page: {params.slug}
    </div>
  );
}
