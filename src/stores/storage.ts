import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  theme: "light" | "dark";
  token: string;
  user: object | null;
}

const initailState: State = {
  theme: "light",
  token: "",
  user: null,
};

export const useStorageStore = create<State>()(
  persist(() => initailState, {
    name: "storage",
  })
);

export const setToken = (token: State["token"]) => useStorageStore.setState({ token });

export const setTheme = (theme: State["theme"]) => useStorageStore.setState({ theme });
