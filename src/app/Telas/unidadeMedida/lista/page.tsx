import cards from "../../card.module.css";


export default function UnidadeMedida(){
    return(
        <div className={cards.cardsContainer}>
            <div className={cards.card}>Miligrama</div>
            <div className={cards.card}>Grama (g)</div>
            <div className={cards.card}>Quilograma (kg)</div>
            <div className={cards.card}>Mililitro (ml)</div>
            <div className={cards.card}>Litro (l)</div>
            <div className={cards.card}>Milimetro (mm)</div>
            <div className={cards.card}>Metro (m)</div>
            <div className={cards.card}>Unidade (un)</div>
        </div>
    )
}