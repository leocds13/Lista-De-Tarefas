import { LoadingAnimation } from "@/Components/Athoms/LoadingAnimation";

import { NewList } from "./NewList";

export default function HomePage() {
  return (
    <>
      <section className="text-center px-16 pb-6 mb-10 bg-slate-300">
        <h2 className="py-6 text-lg font-bold">Explicação de uso</h2>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col gap-2 flex-1 border rounded-lg p-4">
            <h3 className="font-bold">Manipulando as Listas</h3>
            <div className="w-40 h-40 flex justify-center items-center rounded-lg bg-blue-300">
              img 1
            </div>
            <div className="w-40 h-40 flex justify-center items-center rounded-lg bg-orange-300">
              img 2
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 border rounded-lg p-4">
            <h3 className="font-bold">Manipulando os Itens</h3>
            <div className="w-40 h-40 flex justify-center items-center rounded-lg bg-blue-300">
              img 1
            </div>
            <div className="w-40 h-40 flex justify-center items-center rounded-lg bg-orange-300">
              img 2
            </div>
          </div>
        </div>
      </section>
      <section className="text-center px-16">
        <h2 className="my-6 text-lg font-bold">Listas atuais</h2>
        <div className="flex flex-col items-start text-left">
          <NewList />
          <div className="m-4 h-96 border rounded-md w-full overflow-hidden">
            <LoadingAnimation />
          </div>
        </div>
      </section>
    </>
  );
}
