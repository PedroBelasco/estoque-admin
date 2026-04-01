"use client";

import cards from "../../card.module.css";
import { useRouter } from "next/navigation";

export default function TelaListaCaretgoria() {
    const router = useRouter();
    return (
        
        <div  className={cards.principal}>
            <div className={cards.botoes}>
                <div className={cards.criar} onClick={() => router.push("/Telas/categoria/cadastro")}>Criar Produto+</div>
            </div>
            <div className={cards.cardsContainer}>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Canecas</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Chaleiras</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Colherzinha</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Colheroes</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Pratos rasos</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>Pratos fundos</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>garfos</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>saleiros</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>facoes</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>fufu</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>açucareiros</div>
                <div className={cards.card} onClick={() => router.push("/Telas/categoria/cadastro")}>panela de pressao</div>
            </div>
        </div>
    )
}