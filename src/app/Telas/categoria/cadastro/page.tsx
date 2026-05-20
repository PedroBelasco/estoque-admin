'use client'
import { useSearchParams } from "next/navigation";
import styles from "../../cadastrar.module.css";
import { ICategoria } from "../../interfaces/ICategoria";
import { useEffect, useState } from "react";
import { ObterPorId } from "../api";

export default function CriarUnidadeMedida() {
    const [categoria, setCategoria] = useState<ICategoria>();
    const parametros = useSearchParams();
    const id = parametros.get('id');
    
    async function CarregarDados() {
        if (id) {
            const dados = await ObterPorId(id);
            setCategoria(dados)
        }
    }

    useEffect(() => { CarregarDados(); }, []);

    <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastrar Categoria</h1>
        <div className={styles.conteudo}>

            <label htmlFor="" className={styles.label}>Nome</label>
            <input type="text" id="nome" />

            <label htmlFor="" className={styles.label} value={categoria.descricao || ""} >Descrição</label>
            <textarea name="descricao"></textarea>

            <div>
                Salvar
            </div>

            <div>
                Excluir
            </div>
        </div>
    </div>
}