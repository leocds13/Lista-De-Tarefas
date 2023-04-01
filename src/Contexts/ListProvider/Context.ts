"use client";
import { createContext } from "react";

import { IListProvider } from "@/providers/IListProvider";
import { MockedProvider } from "@/providers/Mocked/MockedProvider";
import { VibranneoProvider } from "@/providers/VibbraneoBackend/VibbraneoProvider";
import { ListService } from "@/Services/ListService";

const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const provider: IListProvider = development
  ? new MockedProvider()
  : new VibranneoProvider();

const listService = new ListService(provider);

export const ListContext = createContext<ListService>(listService);
