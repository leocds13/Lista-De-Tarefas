import { useState } from "react";

import { Button } from "@/Components/Athoms/Button";
import { Input } from "@/Components/Athoms/Input";

type NewItemFormProps = {
  submit: (val: string) => void;
};

export const NewItemForm = ({ submit }: NewItemFormProps) => {
  const [itemName, setItemName] = useState("");

  return (
    <div className="p-2">
      <Input
        value={itemName}
        onChange={e => {
          setItemName(e.target.value);
        }}
      />
      <Button
        className="ml-2"
        onClick={() => {
          setItemName("");
          submit(itemName);
        }}
      >
        Adicionar
      </Button>
    </div>
  );
};
