import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Icon path={mdiMenu} size={2} />
      </SheetTrigger>
      <SheetContent side={"left"} className="text-4xl">
        <p>wow</p>
      </SheetContent>
    </Sheet>
  );
}

export default SideSheet;
