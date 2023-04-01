import { redirect } from "next/navigation";

import { List } from "@/Types/List";

type ValidatePageDontExistsProps = {
  params: {
    newList: string;
  };
};

const ValidatePageDontExists = async ({
  params: { newList },
}: ValidatePageDontExistsProps) => {
  let list: List | null = null;
  try {
    list = await globalThis.ListService.getListByLink(`/list/${newList}`);
  } catch (error) {}

  if (list) {
    redirect(list.permalink);
  }

  list = await globalThis.ListService.createList({
    name: newList,
  });

  redirect(list.permalink);
};

export default ValidatePageDontExists;
