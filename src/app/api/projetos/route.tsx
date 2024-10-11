import { NextResponse } from "next/server";

type Tecnologia = {
  id: number;
  nome: string;
  image: string;
};

type ProjetoProps = {
  id: number;
  nome: string;
  descricao: string;
  image: string;
  categoria: string;
  tecnologias: Array<Tecnologia>;
  status: string;
  dataInicio: string;
  dataFim: string;
};

const projetos: Array<ProjetoProps> = [
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
