import AudioPlayer from "@/components/AudioPlayer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      {/* <Button>按钮</Button> */}
      {/* STAR: 先简化其他ui部分，把核心后端和播放的功能做出来 */}
      <AudioPlayer />
    </main>
  );
}
