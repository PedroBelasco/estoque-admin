"use client"

import { useRouter } from "next/navigation";
import "./produto.css";
import { useEffect, useState } from "react";
import { IProduto } from "../../interfaces/IProduto";
import { Unidade } from "../api";

export default function PesquisaProduto() {

    const router = useRouter();

    const [produtos, setProduto] = useState<IProduto[]>([])
    async function CarregarDados(){
        setProduto(await Unidade())
    }

    useEffect(() => {CarregarDados()}, [])
    return (

        <div className="container">
            <div>
                <label htmlFor="">Categoria</label>

                <select name="categoria" id="">
                    <option value="aluminio">aluminio</option>
                    <option value="plastico">plastico</option>
                </select>

                <label htmlFor="">Nome ou Descrição:</label>

                <input type="text" name="nome" id="" />

                <button>Pesquisar</button>
            </div>

            <div className="tabela">

                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            produtos.map((produto) => (
                                <tr
                                    key={produto.id}
                                    onClick={() => router.push('/Telas/produto/cadastrarProduto?id=' + produto.id)}
                                >
                                    <td>{produto.categoria.nome}</td>
                                    <td>{produto.nome}</td>
                                    <td>{produto.quantidadeAtual}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

                <button
                    onClick={() => router.push('/Telas/produto/cadastrarProduto')}
                >
                    Criar Produto
                </button>

            </div>
        </div>
    )
}