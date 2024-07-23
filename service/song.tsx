import axios from "axios";
import { api } from "./core/apiService";
import { BaseResponse } from ".";

type Song = {
  id: number;
  title: string;
  url: string;
  albumId: number | null;
  createdAt: string;
  updatedAt: string;
  artist: Array<{ id: number; name: string }>;
  album: null | object;
};

export async function querySongList() {
  try {
    const response = await api().post<BaseResponse<Song[]>>("/v1/song/list");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching song list:", error);
    return null;
  }
}

//   return axios.get<BaseResponse<Song[]>>("/v1/song/list", {
//     params,
//   });

export type { Song };
