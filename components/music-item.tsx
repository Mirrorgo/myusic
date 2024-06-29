import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type MusicItemProps = {
  title?: string;
  artist?: string;
  cover?: string;
  type?: "专辑" | "单曲集" | "筛选集" | "歌手";
  // type: "专辑" | "单曲集" | "筛选集" | "歌手";
};

// TODO: 重要区别:能否区分不同的类型是是否可以数出一共多少歌曲

const MusicItem = ({
  title = "string",
  artist = "孙燕姿",
  cover = "string",
  type = "歌手",
}: MusicItemProps) => {
  return (
    <div className="flex gap-3 rounded-lg hover:bg-gray-200 px-2 py-1 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div>{artist}</div>
        <div>{type}</div>
      </div>
    </div>
  );
};

export default MusicItem;
