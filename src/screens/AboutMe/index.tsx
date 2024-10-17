import Image from "next/image";
import FelipeImage from "./assets/felipeclarindo.png";
import { SocialMedia } from "../../components/SocialMedia";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex justify-center max-w-[100vw] items-center bg-[var(--second-bg-color)] h-[880px] text-[var(--second-text-color)] "
    >
      <div className="flex flex-col gap-3 max-w-[30%] mx-20 my-24">
        <h2 className="text-3xl font-bold">Sobre Mim</h2>
        <p className="text-lg flex-wrap">
          Meu nome é Felipe Clarindo, sou desenvolvedor Full Stack (Back-end &
          Front-end) e estou sempre em busca de novos desafios. Atualmente,
          estou estudando e me aprimorando em tecnologias como React, Next.js,
          Node.js, TypeScript, Docker, entre outras.
        </p>
        <SocialMedia />
      </div>
      <Image
        className="w-[480px] h-[480px] rounded-full mb-4"
        src={FelipeImage}
        alt="Imagem de uma pessoa com cabelo cacheado, sorrindo, com uma blusa preta, casaco vermelho de braços cruzados"
      />
    </section>
  );
}

export { AboutMe };
