import { Cursos } from "@/components/Curriculo/Cursos";
import { Formacoes } from "@/components/Curriculo/Formacoes";
import { Informacoes } from "@/components/Curriculo/Informacoes";

export default function Curriculo() {
  return (
    <main className="bg-[var(--primary-bg-color)] h-[1400px] text-[var(--primary-text-color)]">
      <h1 className="font-bold text-[50px] text-center pt-12 pb-8">
        Curriculo
      </h1>
      <div className="flex flex-col gap-6 border-2 border-white mx-[8rem] my-12 py-16 px-16 rounded-md">
        <section className="flex flex-col justify-between">
          <Informacoes />
          <Formacoes />
          <Cursos />
        </section>
      </div>
    </main>
  );
}
