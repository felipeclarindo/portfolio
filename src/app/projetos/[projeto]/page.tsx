type ProjetoProps = {
  params: { projeto: string };
};
const projetos: Array<string> = ["joao", "cabo"];

export default function ProjetoPage({ params }: ProjetoProps) {
  return (
    <div>
      <h1>Projeto</h1>
      {params.projeto in projetos ? `${params.projeto}` : "Projeto not found"}
    </div>
  );
}
