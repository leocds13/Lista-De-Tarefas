import { redirect } from "next/navigation";

import { ListItens } from "@/Components/Molecules/ListItens";

type ListPageProps = {
  params: {
    list: string;
  };
};

const ListPage = async ({ params: { list: listLink } }: ListPageProps) => {
  try {
    const list = await globalThis.ListService.getListByLink(
      `/list/${listLink}`
    );

    return (
      <>
        {/* @ts-expect-error Server Component */}
        <ListItens list={list} />
      </>
    );
  } catch (error) {
    redirect(`/${listLink}`);
  }
};

export default ListPage;
