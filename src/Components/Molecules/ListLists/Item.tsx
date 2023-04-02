"use client";
import { Dot, Pencil, Trash } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ItemForm } from "@/Components/Athoms/ItemForm";
import { List } from "@/Types/List";

type ListItemProps = {
  list: List;
};

export const ListItem = ({ list }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const editItem = (itemName: string) => {
    list.name = itemName;

    const content: { list: List } = {
      list,
    };

    fetch("/api/list", {
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
    const content: { list: List } = {
      list,
    };

    fetch("/api/list", {
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
        {isEditing ? (
          <ItemForm
            buttonText="Editar"
            initialVal={list.name}
            submit={editItem}
          />
        ) : (
          <Link
            href={list.permalink}
            className="flex-1 flex items-center gap-2"
          >
            <Dot weight="fill" size={25} />
            <p>{list.name}</p>
          </Link>
        )}
        <div className="flex items-center gap-2 p-4">
          <Pencil
            className="cursor-pointer"
            onClick={() => {
              setIsEditing(val => !val);
            }}
          />
          <Trash
            className="cursor-pointer"
            onClick={() => {
              if (
                confirm(
                  `Deseja deletar o Item ${list.name}?\nIsso não poderá ser desfeito!`
                )
              ) {
                deleteItem();
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
