"use client";

import { useRouter } from "next/navigation";
import styleCards from "@/app/Telas/style.module.css";
import style from "@/app/Telas/style.module.css";
import styleTexts from "@/app/Telas/style.module.css";
import { useEffect, useState } from "react";
import { IUnidade } from "@/app/Telas/interfaces/IUnidade";
import { Unidade } from "../api";




export default function TelaListaUnidadeMedida() {
    const router = useRouter();

    const [unidadesMedida, setUnidadeMedida] = useState<IUnidade[]>([])

    async function CarregarDados(){
        const unidadeRecebida = await Unidade();
        setUnidadeMedida(unidadeRecebida);
    }

    useEffect(() => {CarregarDados()}, [])

    return (
        <section className={style.conteudo}>

            <h3 className={styleTexts.titulo}>Lista de Unidades de Medida</h3>

            <div className={styleCards.cardsContainer}>
                <div onClick={() => router.push("/Telas/unidadeMedida/cadastro")} className={styleCards.cardCriar}>➕ Criar</div>

                {
                    unidadesMedida.map(unidade => (
                        <div
                            key={unidade.id}
                            className={styleCards.card}
                            onClick={() => router.push("/Telas/unidadeMedida/cadastro?id=" + unidade.id)}
                        >
                            {`${unidade.descricao} (${unidade.sigla})`}
                        </div>
                    ))
                }
            </div>

        </section>
    )
}