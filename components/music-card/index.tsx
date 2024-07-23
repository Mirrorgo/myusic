import { usePlayerCardStore } from "@/store/global";
import { X } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import Player from "./components/player";
import { use } from "react";

function MusicCard() {
  const showBottomPlayerCard = usePlayerCardStore.use.showBottomPlayerCard();
  const music = {
    name: "浓缩蓝鲸",
    singer: "裘德",
    album: "最后的水族馆",
  };
  return (
    <>
      <div className="flex flex-col justify-between h-screen sm:max-w-md ">
        <div className="flex flex-col justify-between">
          <div className="flex mx-2 mt-2 h-8 flex-row-reverse sm:hidden">
            <X onClick={() => showBottomPlayerCard()} />
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
          <Player />
        </Card>
        {/* <Separator />
      下面这些暂时没用
      <SuperPanel /> */}
      </div>
    </>
  );
}

export default MusicCard;
