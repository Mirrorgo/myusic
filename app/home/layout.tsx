"use client";

import { useHomeStore, usePlayerCardStore } from "@/store/global";

import Player from "@/components/player";
import LeftSideBar from "@/app/components/left-side-bar";
import LeftSideSheet from "@/app/components/left-side-sheet";
import { SuperPanel } from "@/components/super-panel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import LeftSideContent from "../components/left-side-content";
import useUpdateUrl from "@/hooks/useUpdateUrl";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useMediaMinWidth from "@/hooks/useMediaMinWidth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    currentPlayerCardType: currentMusicCardType,
    showNormalPlayerCard: showNormalMusicCard,
    showBottomPlayerCard: showBottomMusicCard,
  } = usePlayerCardStore();

  const { isHomeShown, showHome, hideHome } = useHomeStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  const homeshown = searchParams.get("homeshown");
  useEffect(() => {
    if (homeshown === "true") {
      showHome();
    } else {
      hideHome();
    }
  }, [homeshown, showHome, hideHome]);

  const paramName = "homeshown";
  useUpdateUrl(paramName, isHomeShown ? "true" : null);
  const music = {
    name: "浓缩蓝鲸",
    singer: "裘德",
    album: "最后的水族馆",
  };
  const { matches } = useMediaMinWidth();
  return (
    <>
      <div className="sm:flex">
        {/* <LeftSideBar /> */}
        {/* <LeftSideSheet /> */}
        <div className="hidden sm:block sm:flex-grow sm:p-2 relative">
          <>{children}</>
          {isHomeShown && (
            <div
              className={`absolute inset-y-0 left-0 transform ${
                isHomeShown ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500 ease-in-out bg-white w-full`}
            >
              <div className="p-4">
                <button
                  className="absolute top-0 right-0 mt-4 mr-4"
                  onClick={() => {
                    router.back();
                    hideHome();
                  }}
                >
                  <X />
                </button>
                <LeftSideContent />
              </div>
            </div>
          )}
        </div>

        {/* 当前音乐卡片界面 */}
        {currentMusicCardType === "normal" || matches.sm ? (
          <div className="flex flex-col justify-between h-screen sm:max-w-md ">
            <div className="flex flex-col justify-between">
              <div className="flex mx-2 mt-2 h-8 flex-row-reverse sm:hidden">
                <X onClick={() => showBottomMusicCard()} />
              </div>
              <Card className="relative mx-5 mt-16 ">
                {/* 歌曲封面/歌词 */}
                <Image
                  src="/studio.png"
                  // TODO: 这里的数字是什么意思？
                  width={640}
                  height={640}
                  alt="Picture of the author"
                  className="rounded-sm"
                />
                {/* <div className="absolute z-10 text-white  left-1/2 top-1/3 -translate-x-1/2 flex flex-col items-center gap-7"> */}
                <div className="absolute z-10 text-white top-1/3 flex flex-col items-center gap-7 w-full">
                  <div className="text-5xl ">{music.name}</div>
                  <div className="text-4xl">{music.singer}</div>
                </div>
              </Card>
              {/* 一个背景+大字歌曲名字&歌手名字也可以 */}
              <div className="h-20 mx-5 mt-2">
                <div className="text-xl font-bold">{music.name}</div>
                <div className="text-base flex justify-between w-full ">
                  <div className="cursor-pointer">{music.singer}</div>
                  <div className="cursor-pointer">{music.album}</div>
                </div>
              </div>
            </div>
            {/* TODO: 仿照progress自己做一个进度条 */}
            <Card className="h-32">
              {/* <p>播放器卡片组件</p> */}
              <Player />
            </Card>
            {/* <Separator />
      下面这些暂时没用
      <SuperPanel /> */}
          </div>
        ) : (
          <div className="flex justify-between flex-col h-screen">
            <div>
              {/* 试试 */}
              <div className="block sm:block sm:flex-grow sm:p-2 relative">
                <>{children}</>
                {isHomeShown && (
                  <div
                    className={`absolute inset-y-0 left-0 transform ${
                      isHomeShown ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-500 ease-in-out bg-white w-full`}
                  >
                    <div className="p-4">
                      <button
                        className="absolute top-0 right-0 mt-4 mr-4"
                        onClick={() => {
                          router.back();
                          hideHome();
                        }}
                      >
                        <X />
                      </button>
                      <LeftSideContent />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div onClick={() => showNormalMusicCard()}>bottom music bar</div>
          </div>
        )}
      </div>
    </>
  );
}
