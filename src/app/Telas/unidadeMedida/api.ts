const url = "http://cntlestoque.runasp.net/api/unidadeMedida"
import axios from "axios";
import {IUnidade} from "@/app/Telas/interfaces/IUnidade"

export async function Unidade(): Promise<IUnidade[]>{
    const resposta = await axios.get(url);
    return resposta.data;
}