import { create } from "zustand";

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))

interface StoreState {
  currentPlayerCardType: "bottom" | "normal" | "full-screen";
  showBottomPlayerCard: () => void;
  showNormalPlayerCard: () => void;
  showFullScreenPlayerCard: () => void;
}

const usePlayerCardStore = create<StoreState>((set) => ({
  currentPlayerCardType: "normal",
  showNormalPlayerCard: () => set({ currentPlayerCardType: "normal" }),
  showBottomPlayerCard: () => set({ currentPlayerCardType: "bottom" }),
  showFullScreenPlayerCard: () => set({ currentPlayerCardType: "full-screen" }),
}));

// const useMainPageState
export { usePlayerCardStore };
