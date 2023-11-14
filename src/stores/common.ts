import { ThemeMode } from "@/types/public";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initailState = {
  theme: ThemeMode.Light,
  token: "",
  userInfo: {} as any,
};

export const useCommonStore = create<typeof initailState>()(
  persist(() => initailState, {
    name: "common-store",
  })
);

export const setTheme = (theme: ThemeMode) => useCommonStore.setState({ theme });

export const setToken = (token: string) => useCommonStore.setState({ token });

export const setUserInfo = (userInfo: any) => useCommonStore.setState({ userInfo });
