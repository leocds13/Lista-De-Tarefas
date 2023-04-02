import { List } from "@/Types/List";

import { ListItem } from "./Item";
import { NewItem } from "./newItem";

type ListItensProps = {
  list: List;
};

export const ListItens = async ({ list }: ListItensProps) => {
  const itens = await globalThis.ListService.getAllItens(list.id, []);

  return (
    <div className="flex justify-center items-center">
      <div className="mt-4 p-2 border rounded-md w-full min-w-full md:min-w-[80%] lg:min-w-[60%] md:p-4 lg:p-8">
        {itens
          .sort((a, b) => a.order - b.order)
          .map(item => (
            <ListItem item={item} key={item.id} />
          ))}
        <NewItem listId={list.id} />
      </div>
    </div>
  );
};
