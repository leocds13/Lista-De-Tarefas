"use client";
import { ReactNode } from "react";

import { ListContextProvider } from "@/Contexts/ListProvider";
import { ListService } from "@/Services/ListService";

type AppProviderProps = {
  children: ReactNode;
  listProvider: ListService;
};

export const AppProvider = ({ children, listProvider }: AppProviderProps) => {
  return (
    <>
      <ListContextProvider provider={listProvider}>
        {children}
      </ListContextProvider>
    </>
  );
};
