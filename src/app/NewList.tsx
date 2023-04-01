"use client";
import { useRouter } from "next/navigation";

import { SingleInputForm } from "@/Components/Molecules/SingleInputForm";

export const NewList = () => {
  const router = useRouter();
  return (
    <SingleInputForm
      labelText="Criar uma lista nova:"
      buttonText="Criar nova lista"
      onClick={value => router.push(value)}
    />
  );
};
