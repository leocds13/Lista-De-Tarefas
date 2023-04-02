import { Item } from "@/Types/Item";
import { List } from "@/Types/List";
import { MockedItems } from "@/utils/data";

import { IListProvider } from "../IListProvider";

export class MockedProvider implements IListProvider {
  data = MockedItems;

  async getAllLists(): Promise<List[]> {
    return this.data;
  }

  async getListById(id: number): Promise<List> {
    const list = this.data.find(val => val.id === id);

    if (!list) throw new Error("Lista não foi encontrada");

    return list;
  }

  async createList(
    list: Omit<List, "order" | "permalink" | "itens">
  ): Promise<List> {
    const newList: List = {
      id: list.id,
      name: list.name,
      permalink: "/list/" + list.name.replaceAll(" ", "-"),
      itens: [],
      order: this.data.length + 1,
    };

    this.data.push(newList);

    return newList;
  }

  async updateList(list: List): Promise<List> {
    let updatedList: List | null = null;
    this.data = this.data.map(val => {
      if (val.id === list.id) {
        if (list.name) val.name = list.name;
        if (list.order) val.order = list.order;
        if (list.permalink) val.permalink = list.permalink;
        if (list.itens) val.itens = list.itens;
        updatedList = val;
      }
      return val;
    });

    if (!updatedList) throw new Error("Lista não foi encontrada");

    return updatedList;
  }

  async deleteListbyId(id: number): Promise<void> {
    this.data = this.data.filter(val => val.id !== id);

    return;
  }

  async getAllItens(listId: number, itemId: number[]): Promise<Item[]> {
    let foundItens: Item[] =
      this.data.find(val => val.id === listId)?.itens || [];

    for (const id of itemId) {
      foundItens = foundItens.find(val => val.id === id)?.itens || [];
    }

    return foundItens as Item[];
  }

  async createItem(
    listId: number,
    itemId: number[],
    item: Omit<Item, "itens" | "order">
  ): Promise<Item> {
    let newItem: Item | null = null;

    this.data = this.data.map(list => {
      if (list.id === listId) {
        if (itemId.length > 0) {
          list.itens = this.loopThroughItems(list.itens, itemId, lastItem => {
            newItem = {
              id: item.id,
              listId: listId,
              parentId: itemId,
              item: item.item,
              itens: [],
              order: lastItem.itens ? lastItem.itens.length + 1 : 1,
            };

            if (lastItem.itens) {
              lastItem.itens.push(newItem);
            } else {
              lastItem.itens = [newItem];
            }

            return lastItem;
          });
        } else {
          newItem = {
            id: item.id,
            listId: listId,
            parentId: itemId,
            item: item.item,
            itens: [],
            order: list.itens.length + 1,
          };

          list.itens.push(newItem);
        }
      }
      return list;
    });

    if (!newItem) throw new Error("Item não foi encontrada");

    return newItem;
  }

  async updateItem(
    listId: number,
    itemId: number[],
    item: Item
  ): Promise<Item> {
    let updatedItem: Item | null = null;

    this.data = this.data.map(list => {
      if (list.id === listId) {
        list.itens = this.loopThroughItems(
          list.itens,
          [...itemId, item.id],
          _ => {
            updatedItem = item;

            return item;
          }
        );
      }
      return list;
    });

    if (!updatedItem) throw new Error("Item não foi encontrada");

    return updatedItem;
  }

  async deleteItembyId(listId: number, itemId: number[]): Promise<void> {
    this.data = this.data.map(list => {
      if (list.id === listId) {
        list.itens = this.deleteSubItem(list.itens, itemId);
      }
      return list;
    });

    return;
  }

  private loopThroughItems(
    itens: Item[],
    [id, ...nextIds]: number[],
    action: (item: Item) => Item
  ): Item[] {
    return itens.map(val => {
      if (val.id === id) {
        if (nextIds.length > 0) {
          val.itens = val.itens
            ? this.loopThroughItems(val.itens, nextIds, action)
            : [];

          return val;
        }

        return action(val);
      }
      return val;
    });
  }

  private deleteSubItem(itens: Item[], [id, ...nextIds]: number[]): Item[] {
    if (nextIds.length > 0) {
      return itens.map(item => {
        if (item.id === id) {
          if (nextIds.length > 0) {
            item.itens = item.itens
              ? this.deleteSubItem(item.itens, nextIds)
              : [];
            return item;
          }
          return item;
        }
        return item;
      });
    } else {
      return itens.filter(val => val.id !== id);
    }
  }
}
