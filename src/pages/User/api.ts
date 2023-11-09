import { useQuery } from "@tanstack/react-query";
import { User } from "./types";

const baseUrl = "https://jsonplaceholder.typicode.com";

export enum apiUrl {
  users = "/users",
}

export const useUsers = () => {
  return useQuery({
    queryKey: [apiUrl.users],
    queryFn: async () => {
      const res = await fetch(`${baseUrl}${apiUrl.users}`);
      return res.json() as Promise<User[]>;
    },
  });
};
