"use client";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import Icon from "@mdi/react";
import { mdiSkipPrevious, mdiSkipNext, mdiPause, mdiPlay } from "@mdi/js";
import PlaySetting from "./play-setting";
import PlayList from "./play-list";
import { Separator } from "./ui/separator";
function AudioPlayer() {
  const [sound, setSound] = useState<Howl>();
  const [isPlay, setIsPlay] = useState<Boolean>(false);
  // TODO: 无歌时的处理: 播放按钮disable
  const [canUserM4a, setCanUserM4a] = useState<Boolean>(false);
  useEffect(() => {
    setCanUserM4a(Howler.codecs("m4a"));
    return () => {};
  }, []);

  useEffect(() => {
    const newSound = new Howl({
      // src: ["https://server.unimelb.top/public/music/myaudio.m4a"], // 替换为你的音频文件路径
      src: ["https://server.unimelb.top/public/music/test.webm"], // 替换为你的音频文件路径
      volume: 0.5,
      html5: true,
    });

    setSound(newSound);

    // 清理函数，在组件卸载时停止音频
    return () => {
      if (newSound) {
        newSound.unload();
      }
    };
  }, []);
  const playSound = () => {
    if (sound) {
      setIsPlay(true);
      sound.play();
    }
  };

  const pauseSound = () => {
    if (sound) {
      setIsPlay(false);
      sound.pause();
    }
  };

  const stopSound = () => {
    if (sound) {
      sound.stop();
    }
  };
  // TODO: chrome上外部的播放器按钮需要支持反控
  // FIXME: 在手机端edge上无法播放
  return (
    <div>
      <div className="flex justify-between items-center w-5/6 mx-auto">
        {/* <MyIcon src={"/repeat_one.svg"} size={1.3} /> */}
        <PlaySetting />
        <div className="flex justify-between items-center w-6/12">
          <div className=" cursor-pointer">
            <Icon path={mdiSkipPrevious} size={1.7} />
          </div>
          <div
            className=" cursor-pointer"
            onClick={() => (isPlay ? pauseSound() : playSound())}
          >
            {isPlay ? (
              <Icon path={mdiPause} size={2.3} />
            ) : (
              <Icon path={mdiPlay} size={2.3} />
            )}
          </div>
          <div className=" cursor-pointer">
            <Icon path={mdiSkipNext} size={1.7} />
          </div>
        </div>
        <PlayList />
      </div>
    </div>
  );
}

export default AudioPlayer;
