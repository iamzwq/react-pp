import { DatePicker, DatePickerProps } from "antd";
import { useUsers } from "./utils";
import { useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const { data: users, isLoading } = useUsers();

  return (
    <div className="flex-center flex-col">
      <h1>Home Page</h1>
      <DatePicker onChange={onChange} />
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
    </div>
  );
};

export default Home;

const SubComponent = () => {
  const queryClient = useQueryClient();
  const users = queryClient.getQueriesData({ queryKey: ["users"] });
  console.log("38->", users);
  return <div>Sub Component</div>;
};
