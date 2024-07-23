import createSelectors from "@/lib/createSelectors";
import { querySongList, Song } from "@/service/song";
import { create } from "zustand";

// 只有current list 需要, 普通list纯展示不要

type CurrentListStoreType = {
  songs: Song[];
  refreshSongs: () => Promise<void>;
};

const useCurrentListStoreBase = create<CurrentListStoreType>((set) => ({
  songs: [],
  refreshSongs: async () => {
    try {
      const songs = await querySongList();
      set({ songs: songs || [] }); // Handle potential null value
    } catch (error) {
      console.error("Error refreshing songs:", error);
    }
  },
}));

const useCurrentListStore = createSelectors(useCurrentListStoreBase);

export { useCurrentListStore };

/* 
import { useEffect } from 'react';
import { cache } from 'react';
import SongList from "@/app/components/song-list";
import { querySongList, Song } from "@/service/song";
import { useCurrentListStore } from './path-to-your-store';

// Cache the server-side data fetching
const fetchServerSideData = cache(querySongList);

// Client component to handle Zustand store
function ClientSongList({ initialSongs }: { initialSongs: Song[] }) {
  const songs = useCurrentListStore.use.songs();
  const refreshSongs = useCurrentListStore.use.refreshSongs();

  useEffect(() => {
    useCurrentListStore.setState({ songs: initialSongs });
  }, [initialSongs]);

  return (
    <div>
      {songs && songs.length > 0 ? (
        <div className="flex flex-col gap-2">
          <SongList songs={songs} />
        </div>
      ) : (
        <p>No songs available or failed to load songs.</p>
      )}
      <button onClick={refreshSongs}>Refresh Songs</button>
    </div>
  );
}

// Server component
async function Main() {
  const initialSongs = await fetchServerSideData();

  return <ClientSongList initialSongs={initialSongs || []} />;
}

export default Main;
*/
