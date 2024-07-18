import { Song } from "@/service/song";
import { Play } from "lucide-react";
import DateFormatter from "./date-formatter";

function SongItem(song: Partial<Song> & { index: number }) {
  console.log("song", song);
  // if song.update存在
  return (
    <div
      className="flex h-12 hover:bg-slate-400 rounded-sm bg-red-400 focus:bg-orange-600"
      key={song.id}
      tabIndex={song.index} //从1开始，因为0的会导致tab顺序错误，详见mdn
    >
      <div>{song.index}</div>
      <Play />
      <div>{song.title}</div>
      <div>
        <DateFormatter timestamp={song.updatedAt ?? ""} />
      </div>
    </div>
  );
}

export default SongItem;
