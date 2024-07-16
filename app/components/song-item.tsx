import { Song } from "@/service/song";

function SongItem(song: Partial<Song>) {
  console.log("song", song);
  return (
    <div className=" hover:bg-slate-400" key={song.id}>
      {song.title}
    </div>
  );
}

export default SongItem;
