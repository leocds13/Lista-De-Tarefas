import path from "path";

import { Item } from "@/Types/Item";
import { List } from "@/Types/List";

import { IListProvider } from "../IListProvider";

export class VibranneoProvider implements IListProvider {
  backendURL = process.env.VIBBRANEO_BACKEND_URL ?? "http://localhost:3000/api";

  async getAllLists(): Promise<List[]> {
    const request = await fetch(path.join(this.backendURL, "todo"), {
      headers: {
        authorization: "",
      },
    });
    const result: List[] = (await request.json()) as List[];

    return result;
  }

  async getListByLink(listLink: string): Promise<List> {
    const request = await fetch(path.join(this.backendURL, "todo"), {
      headers: {
        authorization: "",
      },
    });
    const lists: List[] = (await request.json()) as List[];

    const foundedLink = lists.find(list => list.permalink === listLink);

    if (!foundedLink) throw new Error("Falha achar lista " + listLink);

    return foundedLink;
  }

  async getListById(id: number): Promise<List> {
    const request = await fetch(path.join(this.backendURL, `todo/${id}`), {
      headers: {
        authorization: "",
      },
    });
    const result: List = (await request.json()) as List;

    return result;
  }

  async createList(
    list: Omit<List, "order" | "permalink" | "itens">
  ): Promise<List> {
    const request = await fetch(path.join(this.backendURL, "todo"), {
      method: "POST",
      headers: {
        authorization: "",
      },
      body: JSON.stringify(list),
    });
    const result: List = (await request.json()) as List;

    return result;
  }

  async updateList(list: List): Promise<List> {
    const request = await fetch(path.join(this.backendURL, `todo/${list.id}`), {
      method: "PUT",
      headers: {
        authorization: "",
      },
      body: JSON.stringify(list),
    });
    const result: List = (await request.json()) as List;

    return result;
  }

  async deleteListbyId(id: number): Promise<void> {
    const request = await fetch(path.join(this.backendURL, `todo/${id}`), {
      method: "DELETE",
      headers: {
        authorization: "",
      },
    });

    const deleted = request.status === 200;

    if (!deleted) throw new Error("Falha ao deletar a lista");

    return;
  }

  async getAllItens(listId: number, itemId: number[]): Promise<Item[]> {
    const request = await fetch(
      path.join(this.backendURL, `todo/itens/${listId}/${itemId.join("/")}`),
      {
        headers: {
          authorization: "",
        },
      }
    );
    const result: Item[] = (await request.json()) as Item[];

    return result;
  }

  async createItem(
    listId: number,
    itemId: number[],
    item: Omit<Item, "itens" | "order">
  ): Promise<Item> {
    const request = await fetch(
      path.join(this.backendURL, `todo/itens/${listId}/${itemId.join("/")}`),
      {
        method: "POST",
        headers: {
          authorization: "",
        },
        body: JSON.stringify(item),
      }
    );
    const result: Item = (await request.json()) as Item;

    return result;
  }

  async updateItem(
    listId: number,
    itemId: number[],
    item: Item
  ): Promise<Item> {
    const request = await fetch(
      path.join(this.backendURL, `todo/itens/${listId}/${itemId.join("/")}`),
      {
        method: "PUT",
        headers: {
          authorization: "",
        },
        body: JSON.stringify(item),
      }
    );
    const result: Item = (await request.json()) as Item;

    return result;
  }

  async deleteItembyId(listId: number, itemId: number[]): Promise<void> {
    const request = await fetch(
      path.join(this.backendURL, `todo/${listId}/${itemId.join("/")}`),
      {
        method: "DELETE",
        headers: {
          authorization: "",
        },
      }
    );

    const deleted = request.status === 200;

    if (!deleted) throw new Error("Falha ao deletar a lista");

    return;
  }
}
