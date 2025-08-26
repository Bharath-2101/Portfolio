"use client";
import { create } from "zustand";

const useStore = create((set) => ({
  hamburgerClick: false,
  changeHamburgerClick: () =>
    set((state) => ({ hamburgerClick: !state.hamburgerClick })),

  height: 0,
  width: 0,

  setDimensions: (height, width) => set({ height, width }),
}));

export default useStore;
