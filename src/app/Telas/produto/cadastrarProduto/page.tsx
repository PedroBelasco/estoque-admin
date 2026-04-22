import "./cadastrar.css"

export default function CriarProduto() {
    return (
        <div className="container">
            <div className="imagem">
                <img src="https://redsilverpanelas.com/assets/img/produtos/panela_alta_20cm.jpg?v=3" alt="" />
                <input type="file" name="img" id="" className="file" />
            </div>
            <div className="informacao">
                <label htmlFor="Nome">Nome</label>
                <input type="text" name="nome" id="" />

                <label htmlFor="unidadeMedida">Unidade De Medida</label>
                <input type="text" name="unidade" id="" />

                <label htmlFor="categoria">Categoria</label>
                <input type="text" name="categoria" id="" />

                <label htmlFor="">Habilitado</label>
                <select name="" id="" defaultValue="nao">
                    <option value="sim">Sim</option>
                    <option value="nao">Nao</option>
                </select>

            </div>

            <div className="descricao">
                <label htmlFor="">Descrição</label>
                <textarea name="descricao" id=""></textarea>
            </div>


            <div>
                <button className="salvar">Salvar</button>
            </div>

        </div>
    )
}