import { create } from "zustand";
import { persist } from "zustand/middleware";

const initailState = {
  theme: "light" as "light" | "dark",
};

export const useCommonStore = create<typeof initailState>()(
  persist(() => initailState, {
    name: "storage",
  })
);

export const setTheme = (theme: "light" | "dark") => useCommonStore.setState({ theme });
