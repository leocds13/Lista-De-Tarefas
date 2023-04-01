import { MockedProvider } from "@/providers/Mocked/MockedProvider";
import { VibranneoProvider } from "@/providers/VibbraneoBackend/VibbraneoProvider";

import { ListService } from "./ListService";

declare global {
  // eslint-disable-next-line no-var
  var ListService: ListService;
}

const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

const listProvider = development
  ? new MockedProvider()
  : new VibranneoProvider();

const listService: ListService =
  globalThis.ListService || new ListService(listProvider);

if (!globalThis.ListService) globalThis.ListService = listService;
