import { useQueryClient } from "@tanstack/react-query";
import { Button, Table } from "antd";
import { apiUrl, useAddUser, useUsers } from "./api";

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
  const mutation = useAddUser();
  return (
    <>
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
      <Button
        onClick={() => {
          mutation.mutate({ name: "test", email: "test@qq.com" });
        }}
      >
        add
      </Button>
    </>
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
