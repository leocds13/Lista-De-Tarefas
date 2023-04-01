import { List } from "@/Types/List";

import { ListItem } from "./Item";
import { NewItem } from "./newItem";

type ListItensProps = {
  list: List;
  itensIds: number[];
};

export const ListItens = async ({ list, itensIds }: ListItensProps) => {
  const itens = await globalThis.ListService.getAllItens(list.id, itensIds);

  return (
    <div className="mt-4 p-2 border rounded-md w-full">
      {itens
        .sort((a, b) => a.order - b.order)
        .map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      <NewItem listId={list.id} />
    </div>
  );
};
