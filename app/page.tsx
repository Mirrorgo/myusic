import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main className="">
      {/* STAR: 先简化其他ui部分，把核心后端和播放的功能做出来 */}
      {/* iconBar */}
      <div className=" flex">
        <div>鱼边</div>
        <div>icon</div>
      </div>
      {/* <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=403632306&bvid=BV1JV411K7V3&cid=1204559728&p=1"></iframe> */}
      <AudioPlayer />
    </main>
  );
}
