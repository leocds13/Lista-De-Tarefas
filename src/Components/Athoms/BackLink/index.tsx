"use client";

import { useRouter } from "next/navigation";

export const BackLink = () => {
  const router = useRouter();

  return (
    <p
      className="text-light-info dark:text-dark-info cursor-pointer"
      onClick={() => router.back()}
    >
      Voltar
    </p>
  );
};
