import { create } from "zustand";
import { persist } from "zustand/middleware";

const initailState = {
  theme: "light" as "light" | "dark",
  token: "",
  user: {} as any,
};

export const useCommonStore = create<typeof initailState>()(
  persist(() => initailState, {
    name: "common-store",
  })
);

export const setTheme = (theme: "light" | "dark") => useCommonStore.setState({ theme });

export const setToken = (token: string) => useCommonStore.setState({ token });

export const setUser = (user: any) => useCommonStore.setState({ user });
