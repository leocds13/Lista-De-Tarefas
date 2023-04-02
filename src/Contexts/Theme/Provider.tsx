"use client";
import { ReactNode, useEffect, useState } from "react";

import { ThemeContext, Themes } from "./Context";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Themes>(() =>
    typeof window !== "undefined" && localStorage?.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const rootElement = window.document.documentElement;
    const currentTheme = theme;

    const prevTheme = currentTheme === "light" ? "dark" : "light";
    rootElement.classList.remove(prevTheme);
    rootElement.classList.add(currentTheme);

    localStorage.setItem("theme", currentTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
