import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useUpdateUrl = (paramName: string, paramValue: string | null) => {
  const router = useRouter();

  // TODO: 是否要改成由useSearchParams或者usePath来获取url
  useEffect(() => {
    const url = new URL(window.location.href);

    if (paramValue) {
      url.searchParams.set(paramName, paramValue);
    } else {
      url.searchParams.delete(paramName);
    }

    router.push(url.toString());
  }, [paramName, paramValue, router]);
};

export default useUpdateUrl;
