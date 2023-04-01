"use client";

import { useRouter } from "next/navigation";

export const BackLink = () => {
  const router = useRouter();

  return (
    <p className="text-blue-400 cursor-pointer" onClick={() => router.back()}>
      Voltar
    </p>
  );
};
