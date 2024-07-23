import LeftSideContent from "@/app/home/components/left-side-content";
import { Separator } from "@/components/ui/separator";
import useMediaMinWidth from "@/hooks/useMediaMinWidth";
import useUpdateUrl from "@/hooks/useUpdateUrl";
import { useHomeStore } from "@/store/global";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// 有左侧的sheet效果的时候才使用
const LeftSideSheet = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const isHomeShown = useHomeStore.use.isHomeShown();
  const showHome = useHomeStore.use.showHome();
  const hideHome = useHomeStore.use.hideHome();
  const router = useRouter();
  const searchParams = useSearchParams();

  const homeshown = searchParams.get("homeshown");
  useEffect(() => {
    if (homeshown === "true") {
      showHome();
    } else {
      hideHome();
    }
  }, [homeshown, showHome, hideHome]);

  const paramName = "homeshown";
  useUpdateUrl(paramName, isHomeShown ? "true" : null);
  const { matches } = useMediaMinWidth();

  return (
    <>
      <div className={className}>
        <div className="lg:hidden">{children}</div>
        {matches.lg && (
          <div className="flex gap-2">
            {/* NOTE：这个400可以任意修改 */}
            <div className="flex-grow my-2 max-w-[400px]">
              <LeftSideContent />
            </div>
            <Separator orientation="vertical" className=" h-screen mx-2" />
            {/* NOTE：这个5可以任意修改 */}
            <div className="grow-[5]">{children}</div>
          </div>
        )}
        {!matches.lg && isHomeShown && (
          <div
            className={`absolute inset-y-0 left-0 transform ${
              isHomeShown ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-500 ease-in-out bg-white w-full`}
          >
            <div className="p-4">
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={() => {
                  router.back();
                  hideHome();
                }}
              >
                <X />
              </button>
              <LeftSideContent />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default LeftSideSheet;
