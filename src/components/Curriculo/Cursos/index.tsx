import Link from "next/link";

function Cursos() {
  return (
    <section className="flex justify-between h-[300px] mt-4">
      <h2 className="text-3xl font-bold w-[100%]">Cursos</h2>
      <div className="flex flex-col gap-1 w-[80%] mt-6">
        <h3 className="text-xl font-bold">Python Development - Fiap</h3>
        <p>Desenvolvimento de software com Python pela Fiap</p>
        <p></p>
        <Link
          className="underline underline-offset-2 transition-all duration-300 ease-in-out hover:opacity-75"
          target="_blank"
          href="certificacao"
        >
          Certificação
        </Link>
      </div>
    </section>
  );
}

export { Cursos };
