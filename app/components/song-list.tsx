"use client";

import SongItem from "@/app/components/song-item";
import { Song } from "@/service/song";
import { useCurrentSong } from "@/store/currentSong";
import { useState } from "react";

function SongList({ songs }: { songs: Song[] }) {
  const [selectedSongId, setSelectedSongId] = useState<number>();

  const setCurrentSong = useCurrentSong.use.setCurrentSong();

  const handleClick = (song: Song) => {
    setSelectedSongId(song.id);
    setCurrentSong(song);
  };

  return (
    <div className="flex flex-col gap-2">
      {songs.map((song, idx) => (
        <SongItem
          key={song.id}
          {...song}
          index={idx}
          onClick={() => handleClick(song)}
          isSelected={selectedSongId === song.id}
        />
      ))}
    </div>
  );
}

export default SongList;
