import { create } from "zustand";

type WindowStore = {
  windows: string[];
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  isWindowOpen: (id: string) => boolean;
};

const useWindowsStore = create<WindowStore>((set, get) => ({
  windows: [],
  openWindow: (id) =>
    set((state) => ({
      windows: state.windows.includes(id)
        ? state.windows
        : [...state.windows, id],
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w !== id),
    })),
  isWindowOpen: (id) => get().windows.includes(id),
}));

export { useWindowsStore };
