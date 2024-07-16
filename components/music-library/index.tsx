import { cache } from "react";
import { api } from "@/service/core/apiService";

// 将 fetchData 移到组件外部并使用 cache
const fetchData = cache(async () => {
  try {
    const response = await api().post("/v1/song/list");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching song list:", error);
    return null;
  }
});

export default async function MusicLibrary() {
  const songs = await fetchData();

  return (
    <div>
      <h1>Music Library</h1>
      {songs && songs.length > 0 ? (
        <ul>
          {songs.map((song: any) => (
            <li key={song.id}>{song.title}</li>
          ))}
        </ul>
      ) : (
        <p>No songs available or failed to load songs.</p>
      )}
    </div>
  );
}
