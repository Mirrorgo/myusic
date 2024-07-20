import { Song } from "@/service/song";
import { EllipsisVertical, Heart, ListPlus, Play } from "lucide-react";
import DateFormatter from "./date-formatter";
import { IconSize } from "@/types/enums";

type SongItemTypes = Song & {
  index: number;
  onClick: () => void;
  isSelected: boolean;
};

function SongItem(props: SongItemTypes) {
  console.log("song", props);
  // if song.update存在
  // 修改为选中的就会, 且一个灰色的背景 bg-slate-100
  // <AudioLines />
  return (
    <div
      className="flex justify-between items-center h-10 hover:bg-gray-50 rounded-sm focus:bg-slate-100 outline-none cursor-pointer"
      // key={props.id}
      tabIndex={props.index + 1} //从1开始，因为0的会导致tab顺序错误，详见mdn
      onClick={props.onClick}
    >
      <div className="grid grid-cols-[30px_1fr_20px] items-center">
        <div className="text-center">{props.index + 1}</div>
        <div className="flex flex-col text-sm">
          <div>{props.title}</div>
          <div>{props.artistId}</div>
        </div>
        {/* 超大屏才会显示,也才要渲染,暂时先隐藏 */}
        <div className="hidden">{props.albumId}</div>
        <div className="hidden">
          <DateFormatter timestamp={props.updatedAt} />
        </div>
      </div>
      <div className="flex gap-2 text-gray-500 px-2">
        <Heart size={IconSize.Tiny} />
        <ListPlus size={IconSize.Tiny} />
        <EllipsisVertical size={IconSize.Tiny} />
      </div>
    </div>
  );
}

export default SongItem;
