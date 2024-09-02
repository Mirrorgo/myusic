import createSelectors from "@/lib/createSelectors";
import { create } from "zustand";

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))
export type PlayerCardType = "bottom" | "normal" | "full-screen";

interface PlayerCardStoreState {
  currentPlayerCardType: PlayerCardType;
  showBottomPlayerCard: () => void;
  showNormalPlayerCard: () => void;
  showFullScreenPlayerCard: () => void;
}

const usePlayerCardStoreBase = create<PlayerCardStoreState>((set) => ({
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

const useHomeStoreBase = create<HomeStoreState>((set) => ({
  isHomeShown: false,
  showHome: () => {
    set({ isHomeShown: true });
  },
  hideHome: () => {
    // console.log("hide");
    set({ isHomeShown: false });
  },
}));

const useHomeStore = createSelectors(useHomeStoreBase);
const usePlayerCardStore = createSelectors(usePlayerCardStoreBase);

export { usePlayerCardStore, useHomeStore };
