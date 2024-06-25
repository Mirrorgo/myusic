"use client";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Button } from "./ui/button";
import Icon from "@mdi/react";
import { Toggle } from "@radix-ui/react-toggle";
import {
  mdiSkipPrevious,
  mdiSkipNext,
  mdiPause,
  mdiPlay,
  mdiPlaylistMusic,
} from "@mdi/js";
import {} from "@mdi/js";
function AudioPlayer() {
  const [sound, setSound] = useState<Howl>();
  const [isPlay, setIsPlay] = useState<Boolean>(false);
  // TODO: 无歌时的处理: 播放按钮disable

  useEffect(() => {
    const newSound = new Howl({
      src: ["https://server.unimelb.top/public/music/myaudio.m4a"], // 替换为你的音频文件路径
      // src: ["/path/"], // 替换为你的音频文件路径
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
      <div>
        <audio
          controls
          src="https://server.unimelb.top/public/music/myaudio.m4a"
        ></audio>
        <div className="flex justify-between items-center">
          <Icon path={mdiPlay} size={1.3} />
          <div className="flex justify-between items-center w-48">
            <div className=" cursor-pointer">
              <Icon path={mdiSkipPrevious} size={1.7} />
            </div>
            <div
              className=" cursor-pointer"
              onClick={() => (isPlay ? pauseSound() : playSound())}
            >
              {isPlay ? (
                <Icon path={mdiPause} size={2} />
              ) : (
                <Icon path={mdiPlay} size={2} />
              )}
            </div>
            <div className=" cursor-pointer">
              <Icon path={mdiSkipNext} size={1.7} />
            </div>
          </div>
          <Icon path={mdiPlaylistMusic} size={1.3} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
