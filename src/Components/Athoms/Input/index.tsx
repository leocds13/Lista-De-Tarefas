import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx([
        "border rounded-md p-1 bg-light-base-300 dark:bg-dark-base-300",
        className,
      ])}
      {...props}
    />
  );
};
