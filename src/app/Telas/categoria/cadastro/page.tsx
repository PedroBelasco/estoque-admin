
import styles from "../../cadastrar.module.css";

export default function CriarUnidadeMedida(){
  
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastrar Categoria</h1>
            <div className={styles.conteudo}>

                <label htmlFor="" className={styles.label}>Nome</label>
                <input type="text" id="nome" />

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