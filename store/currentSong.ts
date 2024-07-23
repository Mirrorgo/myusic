// 一个临时的state, 之后得合并到currentList中

import createSelectors from "@/lib/createSelectors";
import { Song } from "@/service/song";
import { create } from "zustand";

type CurrentSongType = {
  currentSong: Song;
  setCurrentSong: (newSong: Song) => void;
};

const useCurrentSongBase = create<CurrentSongType>((set) => ({
  currentSong: {
    id: 0,
    title: "",
    artist: [],
    url: "",
    albumId: null,
    createdAt: "",
    updatedAt: "",
    album: null,
  },
  setCurrentSong: (newSong: Song) => set({ currentSong: newSong }),
}));

const useCurrentSong = createSelectors(useCurrentSongBase);

export { useCurrentSong };
