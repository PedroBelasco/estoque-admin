const url = "http://cntlestoque.runasp.net/api/Produto"
import axios from "axios";
import {IProduto} from "@/app/Telas/interfaces/IProduto"

export async function Unidade(): Promise<IProduto[]>{
    const resposta = await axios.get(url);
    return resposta.data;
}