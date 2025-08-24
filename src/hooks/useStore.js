import { create } from "zustand";

const useStore = create((set) => ({
  hamburgerClick: false,
  changeHamburgerClick: () =>
    set((state) => ({ hamburgerClick: !state.hamburgerClick })),
}));

export default useStore;
