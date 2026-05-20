"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styleCards from "@/app/Telas/style.module.css";
import style from "@/app/Telas/style.module.css";
import styleTexts from "@/app/Telas/style.module.css";
import { useEffect, useState } from "react";
import { ICategoria } from "@/app/Telas/interfaces/ICategoria";
import { Listar } from "../api";

export default function TelaListaCategoria() {
    const router = useRouter();
    const [categorias, setcategorias] = useState<ICategoria[]>([])
    async function CarregarDados(){
        const CategoriaRecebida = await Listar()
        setcategorias(CategoriaRecebida);
    }

    useEffect(()=> {CarregarDados()}, [])
    return (
        <section className={style.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Categorias</h3>

            <div className={styleCards.cardsContainer}>
                
                <div onClick={() => router.push("/Telas/categoria/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>

                {
                    categorias.map((categoria) => (
                        <div
                            key={categoria.id}
                            className={styleCards.card}
                            onClick={() => router.push("/Telas/categoria/cadastro?id=" + categoria.id)}
                        >
                            {categoria.nome}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}