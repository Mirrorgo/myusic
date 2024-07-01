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
  },
  hideHome: () => {
    console.log("hide");
    set({ isHomeShown: false });
  },
}));

export { usePlayerCardStore, useHomeStore };
