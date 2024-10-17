"use client";

import { Pesquisa } from "@/components/Pesquisa";
import { ProjectCard } from "@/components/Project/ProjectCard";
import { ProjectProps } from "@/types";
import { useEffect, useState } from "react";

export default function Projetos() {
  const [projetos, setProjetos] = useState<ProjectProps[]>([]);
  useEffect(() => {
    async function getProjetos() {
      try {
        const response = await fetch("http://localhost:3000/api/projetos");
        const data = await response.json();
        setProjetos(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProjetos();
  }, []);

  return (
    <main className="h-[1140px] bg-[var(--primary-bg-color)] text-[var(--primary-text-color)] py-10 px-20">
      <h1 className="font-bold text-[4rem] text-center">Projetos</h1>
      <Pesquisa />
      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <ProjectCard
            id={projeto.id}
            image={projeto.image}
            descricao={projeto.descricao}
          />
        </div>
      ))}
    </main>
  );
}
