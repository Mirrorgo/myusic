import Icon from "@mdi/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { mdiHelpCircleOutline } from "@mdi/js";

function LeftSideContent() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div>歌单</div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon path={mdiHelpCircleOutline} size={0.6} />
            </TooltipTrigger>
            <TooltipContent>
              <p>真歌单, 为手动添加的固定曲目</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-center gap-2">
        <div>筛选集</div>
        {/* 或者叫做快捷搜索？ */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon path={mdiHelpCircleOutline} size={0.6} />
            </TooltipTrigger>
            <TooltipContent>
              <p>一组保存的筛选条件,每次都会重新筛选,所以是动态更新的</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}

export default LeftSideContent;
