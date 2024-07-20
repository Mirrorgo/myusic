"use client";

import SongItem from "@/app/components/song-item";
import { Song } from "@/service/song";
import { useState } from "react";

function SongList({ songs }: { songs: Song[] }) {
  const [selectedSongId, setSelectedSongId] = useState<number>();

  const handleClick = (songId: number) => {
    setSelectedSongId(songId);
    console.log(`Song clicked: ${songId}`);
    // You can add more complex logic here, like playing the song or navigating to a details page
  };

  return (
    <div className="flex flex-col gap-2">
      {songs.map((song, idx) => (
        <SongItem
          key={song.id}
          {...song}
          index={idx}
          onClick={() => handleClick(song.id)}
          isSelected={selectedSongId === song.id}
        />
      ))}
    </div>
  );
}

export default SongList;
