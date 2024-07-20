import axios from "axios";
import { api } from "./core/apiService";
import { BaseResponse } from ".";

interface Song {
  id: number;
  title: string;
  url: string;
  artistId: number;
  albumId: number;
  createdAt: string;
  updatedAt: string;
}

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
