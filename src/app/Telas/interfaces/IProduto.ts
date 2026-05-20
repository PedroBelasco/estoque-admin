import { ICategoria } from "./ICategoria";
import { IUnidade } from "./IUnidade";

export interface IProduto{
    id: string | null;
    habilitado: boolean;
    categoriaId: ICategoria;
    categoria: ICategoria
    unidadeMedida: IUnidade;
    nome: string;
    descricao: string | null;
    quantidadeAtual: number;
}