import { User } from "./types";

const baseUrl = "https://jsonplaceholder.typicode.com";

export enum apiUrl {
  users = "/users",
}

export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}${apiUrl.users}`);
  return res.json() as Promise<User[]>;
};
