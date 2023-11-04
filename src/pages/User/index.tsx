import { FC } from "react";
import { useUsers } from "./utils";
import { useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
  },
];

const UserPage: FC = () => {
  const { data: users, isLoading } = useUsers();

  return (
    <div className="p-4">
      <Table
        rowKey="id"
        dataSource={users || []}
        columns={columns}
        size="small"
        loading={isLoading}
      />
      <SubComponent />
    </div>
  );
};

export default UserPage;

const SubComponent = () => {
  const queryClient = useQueryClient();
  const users = queryClient.getQueryData(["users"]);
  console.log("32->", users);
  return <div>Sub Component</div>;
};
