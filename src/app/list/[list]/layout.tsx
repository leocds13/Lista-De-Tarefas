import { ReactNode } from "react";

import { BackLink } from "@/Components/Athoms/BackLink";
import { Share } from "@/Components/Athoms/Share";

type ListPageProps = {
  params: {
    list: string;
  };
  children: ReactNode;
};

const ListPage = async ({ params: { list }, children }: ListPageProps) => {
  return (
    <div className="px-16 py-14 mx-auto w-fit min-w-full md:min-w-[80%] lg:min-w-[60%] md:p-4 lg:p-8">
      <div className="flex justify-between items-center mb-4 p-2">
        <div>
          <BackLink />
          <h1 className="text-2xl">
            Itens da lista: <strong>{list}</strong>
          </h1>
          <span>
            Aqui você pode adicionar, editar e remover itens desta lista
          </span>
        </div>

        <Share />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default ListPage;
