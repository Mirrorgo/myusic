import { Suspense } from "react";
import Back from "./components/back";
import Main from "./components/main";
import {
  ArrowDownToLine,
  EllipsisVertical,
  ListChecks,
  Play,
  Search,
} from "lucide-react";
import { IconSize } from "@/types/enums";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Back />
        <div> My Page: {params.slug}</div>
        <div className="flex gap-2">
          <Search size={IconSize.Small} />
          <EllipsisVertical size={IconSize.Small} />
        </div>
      </div>
      {/* My Page: {params.slug} */}
      <div className="flex justify-between items-baseline text-sm">
        <Button size="sm" variant="ghost">
          <Play size={IconSize.Tiny} className="mr-2" /> 全部播放
        </Button>
        <div className="flex space-x-4">
          <div>
            <Separator orientation="vertical" />
          </div>
          <ArrowDownToLine size={IconSize.Tiny} />
          <ListChecks size={IconSize.Tiny} />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </div>
  );
}
