import { ProjectProps } from "@/types";

function ProjectCard({ params }: { params: ProjectProps }) {
  return (
    <div key={params.id}>
      <p>{params.nome}</p>
      <p>{params.descricao}</p>
      <p>{params.categoria}</p>
      <p>{params.dataFim}</p>
      <p>{params.dataInicio}</p>
      <p>{params.status}</p>
      <p>{params.image}</p>
    </div>
  );
}

export { ProjectCard };
