import Link from "next/link";

export const ListLists = async () => {
  const lists = await globalThis.ListService.getAllLists();

  return (
    <div className="mt-4 p-2 border rounded-md w-full">
      {lists
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map(item => (
          <Link href={item.permalink} key={item.id}>
            <p>{item.name}</p>
            <p>{item.permalink}</p>
          </Link>
        ))}
    </div>
  );
};
