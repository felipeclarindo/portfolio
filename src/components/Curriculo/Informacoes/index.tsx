import Link from "next/link";

function Informacoes() {
  return (
    <section className="flex justify-between h-[300px] mt-4">
      <h2 className="text-3xl font-bold w-[100%]">Informações</h2>
      <div className="relative flex flex-col gap-1 w-[80%] mt-6">
        <div className="flex gap-2 items-baseline ">
          <h3 className="text-xl font-bold">Nome: </h3>
          <p>Felipe Clarindo</p>
        </div>
        <div className="flex gap-2 items-baseline ">
          <h3 className="text-xl font-bold">Data de Nascimento: </h3>
          <p>13/02/2006</p>
        </div>
        <div className="flex gap-2 items-baseline ">
          <h3 className="text-xl font-bold">Telefone: </h3>
          <p>(11) 978590137</p>
        </div>
        <div className="flex gap-2 items-baseline ">
          <h3 className="text-xl font-bold">Portfolio: </h3>
          <Link
            target="_blank"
            className="transition-all duration-300 ease-in-out underline underline-offset-2 hover:opacity-75"
            href="https://github.com/felipeclarindo"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export { Informacoes };
