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

function PlaySetting() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MyIcon src={"/repeat_one.svg"} size={1.3} />
      </DrawerTrigger>
      <DrawerContent className="outline-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle asChild>
              <div>播放设置</div>
            </DrawerTitle>
          </DrawerHeader>
          <div className="h-10 text-sm">播放模式</div>
          <div className="flex justify-around h-12">
            <div className="flex flex-col items-center justify-between">
              <MyIcon src={"/repeat.svg"} size={1} />
              <div className="text-xs">自动连播</div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <MyIcon src={"/repeat_one.svg"} size={1} />
              <div className="text-xs">单集循环</div>
            </div>
          </div>
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

export default PlaySetting;
