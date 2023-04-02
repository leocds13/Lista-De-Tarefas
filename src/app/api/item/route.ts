import { NextResponse } from "next/server";

import { Item } from "@/Types/Item";
import { PartialBy } from "@/Types/Utils";

export async function POST(request: Request) {
  const item: PartialBy<Omit<Item, "itens" | "order">, "id"> = (
    await request.json()
  ).item;

  const newItem = await globalThis.ListService.createItem(
    item.listId,
    item.parentId,
    item
  );

  return NextResponse.json(newItem);
}

export async function PUT(request: Request) {
  const item: Item = (await request.json()).item;

  const newItem = await globalThis.ListService.updateItem(
    item.listId,
    item.parentId,
    item
  );

  return NextResponse.json(newItem);
}

export async function DELETE(request: Request) {
  const item: Item = (await request.json()).item;

  await globalThis.ListService.deleteItembyId(item.listId, [
    ...item.parentId,
    item.id,
  ]);

  return new Response();
}
