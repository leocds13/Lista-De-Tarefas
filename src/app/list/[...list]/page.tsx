import { ListItens } from "@/Components/Molecules/ListItens";

type ListPageProps = {
  params: {
    list: string[];
  };
};

const ListPage = async ({
  params: {
    list: [listLink, ...itensIds],
  },
}: ListPageProps) => {
  const list = await globalThis.ListService.getListByLink(`/list/${listLink}`);

  if (list.itens.length === 0) return null;

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ListItens list={list} itensIds={itensIds.map(str => parseInt(str))} />
    </>
  );
};

export default ListPage;
