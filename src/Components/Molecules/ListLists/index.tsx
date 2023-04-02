import { ListItem } from "./Item";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const development: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const ListLists = async () => {
  if (development) await sleep(3000); // simulate latency

  const lists = await globalThis.ListService.getAllLists();

  return (
    <div className="flex justify-center items-center w-full">
      <div className="mt-4 p-2 border rounded-md w-full">
        {lists
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map(list => (
            <ListItem list={list} key={list.id} />
          ))}
      </div>
    </div>
  );
};
