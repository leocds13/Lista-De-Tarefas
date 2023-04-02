import { useState } from "react";

import { Button } from "@/Components/Athoms/Button";
import { Input } from "@/Components/Athoms/Input";

type ItemFormProps = {
  initialVal?: string;
  buttonText: string;
  submit: (val: string) => void;
};

export const ItemForm = ({
  buttonText,
  initialVal = "",
  submit,
}: ItemFormProps) => {
  const [itemName, setItemName] = useState(initialVal);

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
        {buttonText}
      </Button>
    </div>
  );
};
