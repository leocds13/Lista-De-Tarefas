import { List } from "@/Types/List";

export const MockedItems: List[] = [
  {
    id: 1,
    name: "test",
    permalink: "/list/test",
    itens: [
      {
        id: 1,
        listId: 1,
        parentId: [],
        item: "todo",
        order: 2,
      },
      {
        id: 2,
        listId: 1,
        parentId: [],
        itens: [
          {
            id: 1,
            listId: 1,
            parentId: [2],
            item: "todo-1",
            order: 1,
          },
        ],
        order: 1,
      },
    ],
  },
  {
    id: 2,
    name: "test-2",
    permalink: "/list/test-2",
    itens: [],
  },
  {
    id: 3,
    name: "test-3",
    permalink: "/list/test-3",
    itens: [
      {
        id: 1,
        listId: 3,
        parentId: [],
        item: "todo",
        order: 1,
      },
    ],
    order: 1,
  },
];
