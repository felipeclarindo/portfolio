import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 | Page not found",
};

export default function NotFound() {
  return (
    <div className="bg-[var(--primary-bg-color)] text-[var(--primary-text-color)] flex flex-col justify-center items-center h-[850px]">
      <Image
        src="public\assets\images\error.png"
        alt="Visualização de um computador com numeros 404 na tela apresentando erro"
      />
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-xl">Página não encontrada.</p>
    </div>
  );
}
