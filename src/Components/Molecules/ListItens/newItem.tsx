"use client";

import { Plus } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/Components/Athoms/Button";
import { Item } from "@/Types/Item";
import { PartialBy } from "@/Types/Utils";

import { ItemForm } from "../../Athoms/ItemForm";

type CreateItemBody = {
  item: PartialBy<Omit<Item, "itens" | "order">, "id">;
};

type NewItemProps = {
  listId: number;
};

export const NewItem = ({ listId }: NewItemProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const router = useRouter();

  const addItem = (itemName: string) => {
    const content: CreateItemBody = {
      item: {
        item: itemName,
        listId: listId,
        parentId: [],
      },
    };

    fetch("/api/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }).then(_ => {
      setIsAdding(false);
      router.refresh();
    });
  };

  if (isAdding) {
    return <ItemForm buttonText="Adicionar" submit={addItem} />;
  }

  return (
    <div className="p-2">
      <Button className="ml-4" onClick={() => setIsAdding(true)}>
        <Plus size={18} />
      </Button>
    </div>
  );
};
