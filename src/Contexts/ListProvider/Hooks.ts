"use client";
import { useContext } from "react";

import { ListContext } from "./Context";

export const useListProvider = () => {
  const provider = useContext(ListContext);

  return provider;
};
