import loginApi, { type LoginForm } from "@/api/login";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initailState = {
  token: "",
  user: {} as any,
};

export const useStorageStore = create<typeof initailState>()(
  persist(
    set => ({
      ...initailState,
      login: async (loginForm: LoginForm) => {
        const data = await loginApi.fetchLogin(loginForm);
        set({ user: data, token: data.token });
      },
    }),
    {
      name: "auth",
    }
  )
);
