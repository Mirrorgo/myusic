import { BaseResponse } from "@/service";
import { Song } from "@/service/song";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Play, SquareArrowOutUpRight } from "lucide-react";
import { timestampToLocalDate } from "@/utils/date";
import DateFormatter from "@/app/components/date-formatter";
import Link from "next/link";
import { Button } from "../ui/button";

async function MusicList() {
  const response = await fetch(
    "https://server.unimelb.top/wubian/api/v1/song/list",
    // "https://apifoxmock.com/m1/4758938-4412234-default/v1/song/list",
    {
      method: "POST", // specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // specify the content type
        // add any other headers if required (e.g., authentication)
      },
    }
  );
  const data: BaseResponse<Song[]> = await response.json();
  const musicList = data.data;
  // console.log(musicList, "list");

  return (
    <div className="flex flex-col justify-between items-center gap-2 w-3/4 mx-auto">
      {musicList.map((music) => {
        return (
          <Card key={music.id} className="w-full">
            <CardHeader>
              <CardTitle>{music.title}</CardTitle>
              <CardDescription>
                {music.artist.map((cur) => (
                  <span key={cur.id}>{cur.name}</span>
                ))}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[1fr_30px]">
                <div className="flex justify-between">
                  {/* https://b23.tv/BV14D4y1s7n5 */}
                  {/* TODO: update test的歌曲 */}
                  <a
                    href={"https://b23.tv/" + music.url}
                    target="_blank"
                    rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
                    className="flex gap-1 items-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  >
                    <div>{music.url}</div>
                    <SquareArrowOutUpRight size={9} />
                  </a>
                  {/* <DateFormatter timestamp={music.updatedAt}></DateFormatter> */}
                </div>
                <Button size="icon" variant="ghost" className="rounded-lg">
                  <Play size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default MusicList;
