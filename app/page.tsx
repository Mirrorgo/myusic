import MusicList from "@/components/simple-page/music-list";
import { Suspense } from "react";

function Page() {
  return (
    <div>
      <div className="w-4/5 mx-auto my-3">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl ">
          歌单
        </h1>
      </div>
      <Suspense fallback={<div>Loading feed...</div>}>
        {/* <MusicList /> */}
        <div>wow</div>
      </Suspense>
    </div>
  );
}

export default Page;
