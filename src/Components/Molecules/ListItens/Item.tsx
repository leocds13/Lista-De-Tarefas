"use client";
import { CaretDown, CaretUp, Dot, Pencil, Plus } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Item } from "@/Types/Item";
import { PartialBy } from "@/Types/Utils";

import { NewItemForm } from "./NewItemForm";

type CreateItemBody = {
  item: PartialBy<Omit<Item, "itens" | "order">, "id">;
};

type ListItemProps = {
  item: Item;
};

export const ListItem = ({ item }: ListItemProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setIsOpen(val => !val);
  };

  const addItem = (itemName: string) => {
    const content: CreateItemBody = {
      item: {
        item: itemName,
        listId: item.listId,
        parentId: [...item.parentId, item.id],
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
      setIsOpen(true);
      router.refresh();
    });
  };

  const editItem = (itemName: string) => {
    item.item = itemName;

    const content: { item: Item } = {
      item: item,
    };

    fetch("/api/item", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }).then(_ => {
      setIsEditing(false);
      router.refresh();
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 text-lg justify-between hover:bg-slate-300">
        <div className="flex items-center gap-2">
          {item.itens && item.itens.length <= 0 ? (
            <Dot weight="fill" size={25} />
          ) : isOpen ? (
            <CaretDown
              weight="bold"
              size={25}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          ) : (
            <CaretUp
              weight="bold"
              size={25}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          )}
          {isEditing ? (
            <NewItemForm submit={editItem} />
          ) : (
            <p>{item.item ? item.item : "Sem nome"}</p>
          )}
        </div>
        <div className="flex items-center gap-2 pl-2">
          <Plus
            className="cursor-pointer"
            onClick={() => {
              setIsEditing(false);
              setIsAdding(val => !val);
            }}
          />
          <Pencil
            className="cursor-pointer"
            onClick={() => {
              setIsAdding(false);
              setIsEditing(val => !val);
            }}
          />
        </div>
      </div>
      <div className="pl-4">
        {isOpen &&
          item.itens &&
          item.itens.map(item => <ListItem item={item} key={item.id} />)}
        {isAdding && (
          <NewItemForm
            submit={addItem}
            // listId={item.listId}
            // itensIds={[...item.parentId, item.id]}
            // reset={() => setIsAdding(false)}
          />
        )}
      </div>
    </>
  );
};
