import { setTheme, useCommonStore } from "@/stores/common";
import { useEffect, useLayoutEffect } from "react";

const useTheme = () => {
  const theme = useCommonStore(state => state.theme);

  useLayoutEffect(() => {
    const handleSetTheme = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };
    const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    themeMedia.addEventListener("change", handleSetTheme);
    return () => {
      themeMedia.removeEventListener("change", handleSetTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
};

export default useTheme;
