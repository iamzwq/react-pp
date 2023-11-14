import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useCommonStore } from "@/stores/common";
import Header from "./Header";

const BasicLayout = () => {
  const theme = useCommonStore(state => state.theme);
  return (
    <div className={theme}>
      <Header />
      <main className="bg-white dark:bg-slate-800 pt-[60px] min-h-screen text-slate-600 dark:text-slate-200">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default BasicLayout;
