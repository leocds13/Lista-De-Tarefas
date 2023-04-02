import { NextResponse } from "next/server";

import { List } from "@/Types/List";

export async function PUT(request: Request) {
  const list: List = (await request.json()).list;

  const newList = await globalThis.ListService.updateList(list);

  return NextResponse.json(newList);
}

export async function DELETE(request: Request) {
  const list: List = (await request.json()).list;

  await globalThis.ListService.deleteListbyId(list);

  return new Response();
}
