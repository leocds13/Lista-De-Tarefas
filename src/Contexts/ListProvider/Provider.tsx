"use client";
import { ReactNode } from "react";

import { ListService } from "@/Services/ListService";

import { ListContext } from "./Context";

type ListProviderProps = {
  children: ReactNode;
  provider: ListService;
};

export const ListContextProvider = ({
  children,
  provider,
}: ListProviderProps) => {
  return (
    <ListContext.Provider value={provider}>{children}</ListContext.Provider>
  );
};
