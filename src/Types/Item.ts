export type Item = {
  id: number;
  listId: number;
  parentId: number[];
  item?: string;
  itens?: Item[];
  order: number;
};
