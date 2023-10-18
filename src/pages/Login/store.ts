import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginForm } from "./types";
import { fetchLogin } from "./api";

type Action = {
  login: (loginForm: LoginForm) => Promise<void>;
  reset: () => void;
};

const initailState = {
  token: "",
  user: {} as any,
};

export const useAuthStore = create<typeof initailState & Action>()(
  persist(
    set => ({
      ...initailState,
      login: async (loginForm: LoginForm) => {
        const data = await fetchLogin(loginForm);
        set({ user: data, token: data.token });
      },
      reset: () => set(initailState),
    }),
    {
      name: "auth",
    }
  )
);
