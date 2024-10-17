"use client";

import { ProjectProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectPage({ params }: { params: { id: number } }) {
  const [projeto, setProjeto] = useState<ProjectProps>({
    id: 0,
    nome: "",
    descricao: "",
    image: "",
    categoria: "",
    tecnologias: [],
    status: "",
    dataInicio: "",
    dataFim: "",
  });

  useEffect(() => {
    async function getProjeto() {
      try {
        const response = await fetch(
          `https://localhost:3000/api/projetos/${params.id}`
        );
        const data = await response.json();
        setProjeto(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProjeto();
  }, [params.id, projeto]);

  return (
    <div>
      <h1>Projeto</h1>
      <div>
        <p>Id: {projeto.id}</p>
        <p>Nome: {projeto.nome}</p>
        <p>Descrição: {projeto.descricao}</p>
        <p>Imagem: {projeto.image}</p>
        <p>Categoria: {projeto.categoria}</p>
        <p>
          Teconologias:{" "}
          {projeto.tecnologias.map((tech) => (
            <div key={tech.id}>
              <Image src={tech.image} alt="" />
              <p>{tech.nome}</p>
            </div>
          ))}
        </p>
        <p>Status: {projeto.status}</p>
        <p>Data inicio: {projeto.dataInicio}</p>
        <p>Data fim: {projeto.dataFim}</p>
      </div>
    </div>
  );
}
