function Formacoes() {
  return (
    <section className="flex justify-between h-[400px] mt-4">
      <h2 className="text-3xl font-bold w-[100%]">Formações</h2>
      <div className="flex flex-col gap-5 mt-6 w-[80%]">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-1">Ciência de Dados</h3>
          <p>Universidade Presbitariana Mackenzie</p>
          <p>06/2024 - 12/2026</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-1">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <p>Faculdade de Informatica e Administração Paulista (Fiap)</p>
          <p>02/2024 - 12/2025</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-1">Técnico em Redes</h3>
          <p>Sesi - Senai</p>
          <p>02/2024 - 12/2026</p>
        </div>
      </div>
    </section>
  );
}

export { Formacoes };
