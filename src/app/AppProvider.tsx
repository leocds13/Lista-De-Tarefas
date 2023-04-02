"use client";
import { ReactNode } from "react";

import { ThemeProvider } from "@/Contexts/Theme";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
