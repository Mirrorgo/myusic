import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MyIcon from "./MyIcon";
import { Separator } from "./ui/separator";
import { mdiPlaylistMusic, mdiFormatListBulleted } from "@mdi/js";
import Icon from "@mdi/react";
import { ScrollArea } from "./ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

function PlayList() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Icon path={mdiPlaylistMusic} size={1.3} />
      </DrawerTrigger>
      <DrawerContent className="outline-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle asChild>
              <div className="flex justify-between items-center">
                <div>当前播放列表</div>
                <div className="flex items-center gap-1">
                  <MyIcon src={"/repeat.svg"} size={0.8} />
                  <div className="text-xs">自动连播</div>
                  {/* <div> | </div> */}
                  <Separator orientation="vertical" />
                  {/* FIXME：这个Separator为什么显示不出来？？？ */}
                  <Icon path={mdiFormatListBulleted} size={0.8} />
                </div>
              </div>
            </DrawerTitle>
          </DrawerHeader>

          <ScrollArea className="h-72 w-full px-4">
            <div>
              {tags.map((tag) => (
                <div className="flex gap-4 items-baseline w-full">
                  <div className="text-gray-200">·</div>
                  <div key={tag} className="text-sm h-7">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DrawerFooter>
            <Separator />
            <DrawerClose>
              <div>关闭</div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default PlayList;
