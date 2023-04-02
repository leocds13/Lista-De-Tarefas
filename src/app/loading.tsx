import Image from "next/image";

import { LoadingAnimation } from "@/Components/Athoms/LoadingAnimation";

import { NewList } from "./NewList";

export default function HomePage() {
  return (
    <>
      <section className="text-center px-16 pb-6 mb-10 bg-light-base-400 dark:bg-dark-base-300">
        <h2 className="py-6 text-lg font-bold">Explicação de uso</h2>
        <div className="flex flex-col lg:flex-row justify-around gap-4 w-full">
          <div className="flex flex-col gap-2 flex-1 border rounded-lg p-4 border-light-contrast dark:border-dark-contrast">
            <h3 className="font-bold">Manipulando as Listas</h3>
            <div className="w-full h-40 flex justify-center items-center gap-2 rounded-lg overflow-hidden">
              <Image
                src="/criar-lista1.png"
                width={500}
                height={500}
                alt="Foto do form de criar nova lista"
              />
              <div className="text-start h-full flex flex-col justify-around">
                <p>Você pode começar criando lista abaixo.</p>
                <p>
                  Você também pode criar ao digitar o nome da lista no
                  navegador, logo depois do nome do site.
                </p>
              </div>
            </div>
            <div className="w-full h-40 flex justify-center items-center gap-2 rounded-lg overflow-hidden">
              <Image
                src="/abrir-lista1.png"
                width={500}
                height={500}
                alt="Foto exemplo de listas abaixo"
              />
              <div className="text-start h-full flex flex-col justify-around">
                <p>
                  Logo abaixo você pode clicar sobre o nome de uma lista para
                  ser redirecionado para seus itens.
                </p>
                <p>
                  Ao lado direito você encontrará botões para editar nome da
                  lista e excluir de desejar.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 border rounded-lg p-4 border-light-contrast dark:border-dark-contrast">
            <h3 className="font-bold">Manipulando os Itens</h3>
            <div className="w-full h-full flex justify-center items-center gap-2 rounded-lg overflow-hidden">
              <Image
                src="/tela-lista.png"
                width={500}
                height={500}
                alt="Foto exemplo de lista de itens"
              />
              <div className="text-start h-full flex flex-col justify-around">
                <p>
                  Na tela de uma lista você pode ver todos os seu itens e
                  subitens.
                </p>
                <p>Você poderá adicionar, editar e excluir-los.</p>
              </div>
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
