import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { URL } from "url";
import { create } from "zustand";

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

interface PlayerCardStoreState {
  currentPlayerCardType: "bottom" | "normal" | "full-screen";
  showBottomPlayerCard: () => void;
  showNormalPlayerCard: () => void;
  showFullScreenPlayerCard: () => void;
}

const usePlayerCardStore = create<PlayerCardStoreState>((set) => ({
  currentPlayerCardType: "normal",
  showNormalPlayerCard: () => set({ currentPlayerCardType: "normal" }),
  showBottomPlayerCard: () => set({ currentPlayerCardType: "bottom" }),
  showFullScreenPlayerCard: () => set({ currentPlayerCardType: "full-screen" }),
}));

interface HomeStoreState {
  isHomeShown: boolean;
  showHome: () => void;
  hideHome: () => void;
}

const useHomeStore = create<HomeStoreState>((set) => ({
  isHomeShown: false,
  showHome: () => {
    set({ isHomeShown: true });
    // // 更新 URL 查询参数
    // if (typeof window !== "undefined") {
    //   const url = new URL(window.location.href);
    //   url.searchParams.set("homeshown", "true");
    //   window.history.replaceState({}, "", url.toString()); // 更新 URL，不触发页面刷新
    // }
    // router.push(url.toString());

    // if (typeof window !== "undefined") {
    //   const router = useRouter();
    //   // const query = { ...router.query, homeshown: "true" };
    //   router.push({ pathname, homeshown: "true" }}
  },
  hideHome: () => {
    console.log("hide");
    set({ isHomeShown: false });
    // 更新 URL 查询参数
    // if (typeof window !== "undefined") {
    //   const router = useRouter();
    //   const query = { ...router.query };
    //   delete query.homeshown; // 移除 homeshown 参数
    //   router.push({ pathname: router.pathname, query }, undefined, {
    //     shallow: true,
    //   });
    // }
  },
}));

export { usePlayerCardStore, useHomeStore };
