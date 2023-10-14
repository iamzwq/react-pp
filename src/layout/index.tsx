import { FC, PropsWithChildren } from "react";
import { useStorageStore } from "@/stores/storage";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useStorageStore(state => state.theme);
  return (
    <div className={theme}>
      <Header />
      <main className="bg-white dark:bg-slate-800 pt-[68px] min-h-screen text-slate-600 dark:text-slate-200">
        {children}
      </main>
    </div>
  );
};

export default Layout;
