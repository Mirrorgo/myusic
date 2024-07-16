import SongItem from "@/app/components/song-item";
import { api } from "@/service/core/apiService";
import { querySongList } from "@/service/song";
import { cache } from "react";

// 将 fetchData 移到组件外部并使用 cache
// cache是实验性的,先放在这里
const fetchData = cache(querySongList);

async function Main() {
  const songs = await fetchData();
  return (
    <div>
      {songs && songs.length > 0 ? (
        <div className="flex flex-col">
          {songs.map((song) => (
            // <div key={song.id}>{song.title}</div>
            <SongItem {...song} />
          ))}
        </div>
      ) : (
        <p>No songs available or failed to load songs.</p>
      )}
    </div>
  );
}

export default Main;