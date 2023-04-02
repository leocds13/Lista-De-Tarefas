"use client";
import {
  CaretDown,
  CaretUp,
  Dot,
  Pencil,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Item } from "@/Types/Item";
import { PartialBy } from "@/Types/Utils";

import { ItemForm } from "../../Athoms/ItemForm";

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

  const deleteItem = () => {
    const content: { item: Item } = {
      item: item,
    };

    fetch("/api/item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }).then(_ => {
      router.refresh();
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 text-lg justify-between hover:bg-light-base-400 dark:hover:bg-dark-base-300 rounded p-2">
        <div className="flex items-center gap-2">
          {!item.itens || item.itens.length <= 0 ? (
            <Dot weight="fill" size={25} />
          ) : isOpen ? (
            <CaretUp
              weight="bold"
              size={25}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          ) : (
            <CaretDown
              weight="bold"
              size={25}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          )}
          {isEditing ? (
            <ItemForm
              buttonText="Editar"
              initialVal={item.item}
              submit={editItem}
            />
          ) : (
            <p>{item.item ? item.item : "Sem nome"}</p>
          )}
        </div>
        <div className="flex items-center gap-2 p-4">
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
          <Trash
            className="cursor-pointer"
            onClick={() => {
              if (
                confirm(
                  `Deseja deletar o Item ${item.item}?\nIsso não poderá ser desfeito!`
                )
              ) {
                deleteItem();
              }
            }}
          />
        </div>
      </div>
      <div className="pl-4">
        {isOpen &&
          item.itens &&
          item.itens.map(item => <ListItem item={item} key={item.id} />)}
        {isAdding && <ItemForm buttonText="Adicionar" submit={addItem} />}
      </div>
    </>
  );
};
