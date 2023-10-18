import { FC } from "react";
import { useUsers } from "./utils";
import { useQueryClient } from "@tanstack/react-query";

const UserPage: FC = () => {
  const { data: users, isLoading } = useUsers();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {users && users.length > 0 && (
        <ul className="flex flex-col gap-2">
          {users.map(user => {
            return (
              <li key={user.id} className="px-2 py-1 flex items-center text-lg">
                {user.name}: {user.email}
              </li>
            );
          })}
        </ul>
      )}
      <SubComponent />
    </>
  );
};

export default UserPage;

const SubComponent = () => {
  const queryClient = useQueryClient();
  const users = queryClient.getQueriesData({ queryKey: ["users"] });
  console.log("32->", users);
  return <div>Sub Component</div>;
};
