import { Item } from "@/Types/Item";
import { List } from "@/Types/List";

export interface IListProvider {
  getAllLists(): Promise<List[]>;
  getListById(id: number): Promise<List>;
  createList(list: Omit<List, "order" | "permalink" | "itens">): Promise<List>;
  updateList(list: List): Promise<List>;
  deleteListbyId(id: number): Promise<void>;
  getAllItens(listId: number, itemId: number[]): Promise<Item[]>;
  createItem(
    listId: number,
    itemId: number[],
    item: Omit<Item, "itens" | "order">
  ): Promise<Item>;
  updateItem(listId: number, itemId: number[], item: Item): Promise<Item>;
  deleteItembyId(listId: number, itemId: number[]): Promise<void>;
}
