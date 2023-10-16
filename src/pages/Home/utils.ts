import usersApi from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: usersApi.fetchUsers,
  });
};
