import { useCommonStore } from "@/stores/common";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const BasicLayout = () => {
  const theme = useCommonStore(state => state.theme);
  return (
    <div className={theme}>
      <Header />
      <main className="bg-white dark:bg-slate-800 pt-[68px] min-h-screen text-slate-600 dark:text-slate-200">
        <Outlet />
      </main>
    </div>
  );
};

export default BasicLayout;
