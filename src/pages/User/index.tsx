import { useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";
import { apiUrl, useUsers } from "./api";

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

export default function UserPage() {
  const { data: users, isLoading } = useUsers();
  return (
    <div className="flex p-4 space-x-4">
      <Table
        rowKey="id"
        dataSource={users || []}
        columns={columns}
        size="small"
        bordered
        loading={isLoading}
        className="flex-1"
      />
      <SubComponent />
    </div>
  );
}

const SubComponent = () => {
  const queryClient = useQueryClient();
  const users = queryClient.getQueryData([apiUrl.users]);
  return (
    <div className="h-[440px] overflow-y-auto flex-1 bg-slate-100">
      <pre>{JSON.stringify(users, undefined, 2)}</pre>
    </div>
  );
};
