import styles from "../../cadastrar.module.css";

export default function CriarUnidadeMedida(){
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Unidade de Medida</h1>
            <div className={styles.conteudo}>
                <label htmlFor="" className={styles.label}>Sigla</label>
                <input type="text" id="sigla" />

                <label htmlFor="" className={styles.label}>Fracionavel</label>
                <select name="" id=""  defaultValue="nao">
                    <option value="sim">Sim</option>
                    <option value="nao">Nao</option>
                </select>

                <label htmlFor="" className={styles.label}>Descrição</label>
                <textarea name="descricao"></textarea>

                <div>
                    Salvar
                </div>

                <div>
                    Excluir
                </div>
            </div>
        </div>
    )
}