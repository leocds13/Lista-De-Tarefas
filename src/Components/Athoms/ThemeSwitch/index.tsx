"use client";

import { Moon, Sun } from "@phosphor-icons/react";

import { useTheme } from "@/Contexts/Theme";

export const ThemeSwitch = () => {
  const { theme, ToggleTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Moon size={30} onClick={ToggleTheme} />
      ) : (
        <Sun className="dark:text-dark-text" size={30} onClick={ToggleTheme} />
      )}
    </>
  );
};
