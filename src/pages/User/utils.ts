import { useQuery } from "@tanstack/react-query";
import { apiUrl, fetchUsers } from "./api";

export const useUsers = () => {
  return useQuery({
    queryKey: [apiUrl.users],
    queryFn: fetchUsers,
  });
};
