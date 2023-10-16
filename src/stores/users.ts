import usersApi, { type User } from "@/api/users";
import { create } from "zustand";

interface UsersState {
  users: User[];
  fetchUsers: () => void;
}

export const useUsersList = create<UsersState>()(set => ({
  users: [],
  fetchUsers: async () => {
    const data = await usersApi.fetchUsers();
    set({ users: data });
  },
}));
