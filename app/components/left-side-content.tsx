import Icon from "@mdi/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { mdiHelpCircleOutline } from "@mdi/js";
import MusicItem from "@/components/music-item";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function LeftSideContent() {
  return (
    <>
      <div className="text-xl font-bold px-2">乐馆</div>
      <div className="flex flex-col px-2">
        <div className="flex items-center gap-2 flex-wrap py-2">
          <Badge className="flex-none">歌单</Badge>
          <Badge className="flex-none">专辑</Badge>
          <Badge className="flex-none">歌手</Badge>
          <Badge className="flex-none">筛选集</Badge>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Icon path={mdiHelpCircleOutline} size={0.6} />
              </TooltipTrigger>
              <TooltipContent>
                <div>
                  <div>真歌单, 为手动添加的固定曲目</div>
                  <p>一组保存的筛选条件,每次都会重新筛选,所以是动态更新的</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* 或者叫做快捷搜索？ */}
      </div>
      <div>
        <Link href={"/home/artist/sun"}>
          <MusicItem />
        </Link>
        <Link href={"/home/artist/zhou"}>
          <MusicItem />
        </Link>
      </div>
    </>
  );
}

export default LeftSideContent;
