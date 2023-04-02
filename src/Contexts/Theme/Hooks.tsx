import { useContext } from "react";

import { ThemeContext } from "./Context";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!theme) {
    throw new Error("UseTheme só pode ser usado dentro do ThemeProvider");
  }

  const ToggleTheme = () => {
    setTheme(t => {
      const nextTheme = t === "light" ? "dark" : "light";
      return nextTheme;
    });
  };

  return { theme, ToggleTheme };
};
