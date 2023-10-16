import { App as AntdApp, ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";

const queryClient = new QueryClient();

function App() {
  // const theme = useStorageStore(state => state.theme);

  // useLayoutEffect(() => {
  //   const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  //   themeMedia.addEventListener("change", e => {
  //     setTheme(e.matches ? "dark" : "light");
  //   });
  // }, []);

  // useEffect(() => {
  //   document.documentElement.setAttribute("theme", theme);
  // }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN}>
        <AntdApp>
          <Router />
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
