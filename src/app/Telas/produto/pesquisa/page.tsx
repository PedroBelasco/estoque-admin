
import  "./produto.css";

export default function PesquisaProduto() {
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
                    <tr>
                        <th>Categoria</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                    </tr>
                    <tr>
                        <td>plastico</td>
                        <td>garrafa</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>aluminio</td>
                        <td>panela</td>
                        <td>12</td>
                    </tr>
                    
                </table>

            </div>
        </div>
    )
}