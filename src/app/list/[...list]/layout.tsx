import { ReactNode } from "react";

import { BackLink } from "@/Components/Athoms/BackLink";

type ListPageProps = {
  params: {
    list: string[];
  };
  children: ReactNode;
};

const ListPage = ({ params: { list }, children }: ListPageProps) => {
  return (
    <div className="px-16 py-14">
      <div className="mb-4 p-2">
        <BackLink />
        <h1 className="text-2xl">
          Itens da lista: <strong>{list}</strong>
        </h1>
        <span>
          Aqui você pode adicionar, editar e remover itens desta lista
        </span>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default ListPage;
