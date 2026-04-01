"use client";

import Link from "next/link";
import cards from "../../card.module.css";
import { useRouter } from "next/navigation";


export default function UnidadeMedida() {
    const router = useRouter();
    return (
        <div className={cards.principal}>
            <div className={cards.botoes}>
                <div className={cards.criar} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>
                    Criar Unidade de Medida+
                </div>
            </div>
            <div className={cards.cardsContainer}>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Miligrama</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Grama (g)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Quilograma (kg)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Mililitro (ml)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Litro (l)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Milimetro (mm)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Metro (m)</div>
                <div className={cards.card} onClick={() => router.push("/Telas/unidadeMedida/cadastro")}>Unidade (un)</div>
            </div>
        </div>
    )
}