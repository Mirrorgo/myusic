import AudioPlayer from "@/components/AudioPlayer";
import SideSheet from "@/components/SideSheet";
import { SuperPanel } from "@/components/SuperPanel";
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

export default function Home() {
  const music = {
    name: "浓缩蓝鲸",
    singer: "裘德",
    album: "最后的水族馆",
  };
  return (
    <main className="flex flex-col justify-between h-screen">
      {/* 上半部分 */}
      <div className="flex flex-col justify-between">
        <div className="flex">
          {/* TODO: 纯自己开发，类似ob的侧边栏 */}
          <SideSheet />
        </div>
        {/* <Button>按钮</Button> */}
        {/* STAR: 先简化其他ui部分，把核心后端和播放的功能做出来 */}
        {/* <div className=" h-24">space</div> */}
        {/* <Card className="relative h-80"> */}
        <Card className="relative mx-5 mt-16">
          {/* 歌曲封面/歌词 */}
          <Image
            src="/studio.png"
            // TODO: 这里的数字是什么意思？
            width={500}
            height={500}
            alt="Picture of the author"
          />
          {/* <div className="absolute z-10 text-white  left-1/2 top-1/3 -translate-x-1/2 flex flex-col items-center gap-7"> */}
          <div className="absolute z-10 text-white top-1/3 flex flex-col items-center gap-7 w-full">
            <div className="text-5xl ">浓缩蓝鲸</div>
            <div className="text-4xl">裘德</div>
          </div>
        </Card>
        {/* 一个背景+大字歌曲名字&歌手名字也可以 */}
        <Card className="h-20">
          <div className="text-xl font-bold">{music.name}</div>
          <div className="text-base flex justify-between w-full ">
            <div className="cursor-pointer">{music.singer}</div>
            <Separator orientation="vertical" />
            <div className="cursor-pointer">{music.album}</div>
          </div>
        </Card>
      </div>
      {/* TODO: 仿照progress自己做一个进度条 */}
      <Card className="h-32">
        {/* <p>播放器卡片组件</p> */}
        <AudioPlayer />
      </Card>
      {/* <Separator />
      下面这些暂时没用
      <SuperPanel /> */}
    </main>
  );
}
