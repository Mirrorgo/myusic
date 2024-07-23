"use client";
import { useHomeStore } from "@/store/global";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

export default function Page({ params }: { params: { slug: string } }) {
  const showHome = useHomeStore.use.showHome();

  return (
    <div>
      <div className="flex">
        <div className="lg:invisible" onClick={() => showHome()}>
          <Icon path={mdiMenu} size={1.2} />
        </div>
      </div>
      My Page: {params.slug}
    </div>
  );
}
