import { ProjectProps } from "@/types";
import { NextResponse } from "next/server";


const projetos: Array<ProjectProps> = [
  {
    id: 1,
    nome: "Tech Mech",
    descricao: "Descrição do projeto 1",
    image: "https://via/.d.adakdj",
    categoria: "front-end",
    tecnologias: [{ id: 1, nome: "React", image: "https://via/.d.adakdj" }],
    status: "Concluido",
    dataInicio: "01/01/2021",
    dataFim: "01/01/2022",
  },
  {
    id: 1,
    nome: "Tech Mech",
    descricao: "Descrição do projeto 1",
    image: "https://via/.d.adakdj",
    categoria: "front-end",
    tecnologias: [{ id: 1, nome: "React", image: "https://via/.d.adakdj" }],
    status: "Concluido",
    dataInicio: "01/01/2021",
    dataFim: "01/01/2022",
  },
  {
    id: 1,
    nome: "Tech Mech",
    descricao: "Descrição do projeto 1",
    image: "https://via/.d.adakdj",
    categoria: "front-end",
    tecnologias: [{ id: 1, nome: "React", image: "https://via/.d.adakdj" }],
    status: "Concluido",
    dataInicio: "01/01/2021",
    dataFim: "01/01/2022",
  },
];

export async function GET() {
  return NextResponse.json(projetos);
}

export { projetos };
