import { IListProvider } from "@/providers/IListProvider";
import { Item } from "@/Types/Item";
import { List } from "@/Types/List";
import { PartialBy } from "@/Types/Utils";

export class ListService {
  private listProvider: IListProvider;

  constructor(listProvider: IListProvider) {
    this.listProvider = listProvider;
  }

  async getAllLists(): Promise<List[]> {
    return await this.listProvider.getAllLists();
  }

  async getListByLink(listLink: string): Promise<List> {
    const lists = await this.listProvider.getAllLists();

    const foundedList = lists.find(list => list.permalink === listLink);

    if (!foundedList)
      throw new Error(`Lista com link ${listLink} não encontrada`);

    return foundedList;
  }

  async createList(
    list: PartialBy<Omit<List, "order" | "permalink" | "itens">, "id">
  ): Promise<List> {
    if (!list.id)
      list.id =
        (await this.getAllLists()).reduce(
          (prev, curr) => (prev < curr.id ? curr.id : prev),
          0
        ) + 1;

    return this.listProvider.createList({
      id: list.id,
      name: list.name,
    });
  }

  async getAllItens(listId: number, itemId: number[]): Promise<Item[]> {
    return await this.listProvider.getAllItens(listId, itemId);
  }

  async createItem(
    listId: number,
    itemId: number[],
    item: PartialBy<Omit<Item, "itens" | "order">, "id">
  ): Promise<Item> {
    if (!item.id)
      item.id =
        (await this.getAllItens(listId, itemId)).reduce(
          (prev, curr) => (prev < curr.id ? curr.id : prev),
          0
        ) + 1;

    return this.listProvider.createItem(listId, itemId, {
      id: item.id,
      listId: item.listId,
      parentId: item.parentId,
      item: item.item,
    });
  }

  async updateItem(
    listId: number,
    itemId: number[],
    item: Item
  ): Promise<Item> {
    return this.listProvider.updateItem(listId, itemId, item);
  }
}
