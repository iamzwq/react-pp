import { Link, useMatches, useNavigate } from "react-router-dom";
import { setTheme, setToken, setUserInfo, useCommonStore } from "@/stores/common";
import { ThemeMode } from "@/types/public";

export default function Header() {
  return (
    <header className="fixed inset-x-0 z-1000 flex items-center px-4 w-full h-[60px] border-b-gray shadow-md bg-slate-50 dark:bg-slate-900 dark:text-slate-100">
      <Logo />
      <Nav />
      <ThemeToggle />
      <LogoutBtn />
    </header>
  );
}

const Logo = () => {
  return (
    <Link to="/">
      <div className="w-[160px] h-[40px] bg-slate-200 rounded flex-center text-xl uppercase text-indigo select-none cursor-pointer">
        😀 react app
      </div>
    </Link>
  );
};

const Nav = () => {
  const matches = useMatches();
  const pathname = matches.at(-1)?.pathname || "";
  return (
    <nav className="flex space-x-4 ml-4">
      {[
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "User", path: "/user" },
        { name: "Setting", path: "/setting" },
      ].map(item => {
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`no-underline ${
              pathname.includes(item.path)
                ? "text-purple-500 hover:text-purple-700 dark:text-purple-200 dark:hover:text-purple-100"
                : "text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-100"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

const ThemeToggle = () => {
  const theme = useCommonStore(state => state.theme);
  return (
    <button
      className="bg-transparent border-none outline-none ml-auto cursor-pointer text-xl"
      onClick={() => {
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
      }}
    >
      {theme === ThemeMode.Dark ? (
        <div className="i-lucide-sun text-slate-100" />
      ) : (
        <div className="i-lucide-moon text-slate-500" />
      )}
    </button>
  );
};

const LogoutBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="inline-flex cursor-pointer items-center bg-transparent rounded outline-none border-0 px-2 py-1 ml-4 text-slate-600 dark:text-slate-200 hover:text-slate-800 dark:hover:text-slate-100"
      onClick={() => {
        setUserInfo({});
        setToken("");
        navigate("/login");
      }}
    >
      <div className="i-lucide-log-out mr-1" />
      登出
    </button>
  );
};
