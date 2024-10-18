function Pesquisa() {
  return (
    <section>
      <div>
        <label htmlFor="nome">Busca projeto</label>
        <input type="text" id="nome" placeholder="Digite o nome do projeto" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buscar
        </button>
      </div>
      <div>
        <input type="checkbox">Filtrar</input>
      </div>
    </section>
  );
}

export { Pesquisa };
