import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    setIsDarkMode(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
