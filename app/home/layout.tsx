"use client";

import { usePlayerCardStore } from "@/store/global";

import Player from "@/components/music-card/components/player";
import { SuperPanel } from "@/components/super-panel";
import { Separator } from "@/components/ui/separator";
import { Suspense, useEffect, useState } from "react";
import useMediaMinWidth from "@/hooks/useMediaMinWidth";
import LeftSideSheet from "./components/left-side-sheet";
import MusicCard from "@/components/music-card";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPlayerCardType = usePlayerCardStore.use.currentPlayerCardType();

  const { matches } = useMediaMinWidth();
  return (
    <>
      <div className="sm:flex">
        <Suspense fallback={<div>loading...</div>}>
          <LeftSideSheet className="hidden sm:block sm:flex-grow sm:px-2 relative">
            {children}
          </LeftSideSheet>
        </Suspense>

        {/* 当前音乐卡片界面 */}
        {currentPlayerCardType === "normal" || matches.sm ? (
          <MusicCard trueType="normal" />
        ) : (
          // sm:none, so 只考虑sm以下的情况
          <div className="flex justify-between flex-col h-screen">
            <div>
              <Suspense fallback={<div>loading...</div>}>
                <LeftSideSheet className="">{children}</LeftSideSheet>
              </Suspense>
            </div>
            <Player url="test" trueType="bottom" />
          </div>
        )}
      </div>
    </>
  );
}
