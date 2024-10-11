
export type TechnologiesType = {
    id: number;
    nome: string;
    image: string;
  };

export type ProjectProps = {
    id: number;
    nome: string;
    descricao: string;
    image: string;
    categoria: string;
    tecnologias: Array<TechnologiesType>;
    status: string;
    dataInicio: string;
    dataFim: string;
};

