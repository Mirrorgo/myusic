import LeftSideContent from "@/app/components/left-side-content";
import useUpdateUrl from "@/hooks/useUpdateUrl";
import { useHomeStore } from "@/store/global";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const HomeSheet = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  const { isHomeShown, showHome, hideHome } = useHomeStore();
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

  return (
    <>
      <div className={className}>
        <>{children}</>
        {isHomeShown && (
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
export default HomeSheet;
