import axios from "axios";
const url = "http://cntlestoque.runasp.net/api/categoriaproduto"
import {ICategoria} from "@/app/Telas/interfaces/ICategoria"

export async function Listar(): Promise<ICategoria[]>{
    const resposta = await axios.get(url);
    return resposta.data;
}

export async function ObterPorId(id: string): Promise<ICategoria> {
    const resposta = await axios.get(url + "/" + id)
    return resposta.data;
}