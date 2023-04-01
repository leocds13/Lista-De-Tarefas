"use client";

import { useState } from "react";

import { Button } from "../../Athoms/Button";
import { Input } from "../../Athoms/Input";

type SingleInputFormProps = {
  labelText: string;
  buttonText: string;
  initialVal?: string;
  onClick?: (value: string) => void;
};

export const SingleInputForm = ({
  labelText,
  buttonText,
  initialVal,
  onClick,
}: SingleInputFormProps) => {
  const [value, setValue] = useState(initialVal || "");

  return (
    <form className="p-4" onSubmit={e => e.preventDefault()}>
      <label htmlFor="listName">{labelText}</label>
      <div className="flex gap-2">
        {/* <input type="text" /> */}
        <Input
          id="listName"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button
          onClick={() => {
            onClick && onClick(value);
            setValue("");
          }}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
