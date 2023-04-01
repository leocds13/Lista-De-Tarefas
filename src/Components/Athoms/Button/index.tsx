import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(["bg-green-500 p-2 rounded-xl", className])}
      {...props}
    >
      {children}
    </button>
  );
};
