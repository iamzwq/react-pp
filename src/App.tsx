import { App as AntdApp, ConfigProvider } from "antd";
import Router from "./router";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";

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
    <ConfigProvider locale={zhCN}>
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
