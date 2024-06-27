import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@mdi/react";
import { mdiMenu, mdiHelpCircleOutline } from "@mdi/js";
import LeftSideContent from "./LeftSideContent";

function LeftSideSheet() {
  return (
    // TODO:支持类似pin的效果
    <Sheet>
      <SheetTrigger asChild>
        <Icon path={mdiMenu} size={1.3} className="sm:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col">
        <div className="text-xl font-bold">乐堂</div>
        <LeftSideContent />
      </SheetContent>
    </Sheet>
  );
}

export default LeftSideSheet;
