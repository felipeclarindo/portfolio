import Image from "next/image";
import FelipeImage from "./assets/felipeclarindo.png";

function AboutMe() {
  return (
    <div className="w-[100vw] h-[724px] bg-[var(--second-bg-color)] text-[var(--second-text-color)]">
      <h1>Felipe</h1>
      <p>
        Meu nome é Felipe Clarindo, sou desenvolvedor Full Stack (Back-end &
        Front-end) e estou sempre em busca de novos desafios. Atualmente, estou
        estudando e me aprimorando em tecnologias como React, Next.js, Node.js,
        TypeScript, Docker, entre outras
      </p>
      <Image className="w-[300px] h-[300px] rounded-full"
        src={FelipeImage}
        alt="Imagem de uma pessoa com cabelo cacheado, sorrindo, com uma blusa preta, casaco vermelho de braços cruzados"
      />
    </div>
  );
}

export { AboutMe };
