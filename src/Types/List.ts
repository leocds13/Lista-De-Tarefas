import { Item } from "./Item";

export type List = {
  id: number;
  name: string;
  permalink: string;
  itens: Item[];
  order?: number;
};
