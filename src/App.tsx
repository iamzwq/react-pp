import { App as AntdApp, ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import StaticAntd from "@/utils/staticAntd";
import router from "./router";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#a855f7",
          },
        }}
      >
        <AntdApp>
          <StaticAntd />
          <RouterProvider router={router} />
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
