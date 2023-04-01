"use client";
import { clsx } from "clsx";
import { HTMLAttributes } from "react";

type LoadingAnimationProps = HTMLAttributes<HTMLDivElement>;

export const LoadingAnimation = ({
  className,
  ...props
}: LoadingAnimationProps) => {
  return (
    <div className={clsx(["w-full h-full top-0 left-0", className])} {...props}>
      <div className="w-full h-full top-0 left-0 relative overflow-hidden">
        <div className="absolute w-[300%] h-[300%] bg-gradient-to-br from-transparent from-35% via-slate-300 to-transparent to-60% animate-loading" />
      </div>
    </div>
  );
};
