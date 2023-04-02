"use client";
import { createContext } from "react";

export type Themes = "light" | "dark";

type ThemeContextType = {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {
    return;
  },
});
