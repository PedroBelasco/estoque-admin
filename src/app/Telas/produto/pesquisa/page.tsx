"use client"


import { useRouter } from "next/navigation";
import "./produto.css";

export default function PesquisaProduto() {
    const router = useRouter();
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
                        <tr onClick={() => router.push('/Telas/produto/cadastrarProduto')}>
                            <td>plastico</td>
                            <td>garrafa</td>
                            <td>20</td>
                        </tr>

                        <tr>
                            <td>aluminio</td>
                            <td>panela</td>
                            <td>12</td>
                        </tr>
                    </tbody>

                </table>

                <button onClick={() => router.push('/Telas/produto/cadastrarProduto')}>Criar Produto</button>


            </div>
        </div>
    )
}