import { App as AntdApp, ConfigProvider, theme } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import StaticAntd from "@/utils/staticAntd";
import router from "./router";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import { useCommonStore } from "./stores/common";

const { darkAlgorithm, defaultAlgorithm } = theme;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

function App() {
  const theme = useCommonStore(state => state.theme);
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#a855f7",
          },
          algorithm: theme === "dark" ? darkAlgorithm : defaultAlgorithm,
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
