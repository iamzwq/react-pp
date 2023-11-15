import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-800 pt-[60px] min-h-screen text-slate-600 dark:text-slate-200">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default BasicLayout;
