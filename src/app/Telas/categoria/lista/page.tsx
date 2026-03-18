import cards from "../../card.module.css";

export default function TelaListaCaretgoria(){
    return(
        <div className={cards.cardsContainer}>
            <div className={cards.card}>Canecas</div>
            <div className={cards.card}>Chaleiras</div>
            <div className={cards.card}>Colherzinha</div>
            <div className={cards.card}>Colheroes</div>
            <div className={cards.card}>Pratos rasos</div>
            <div className={cards.card}>Pratos fundos</div>
            <div className={cards.card}>garfos</div>
            <div className={cards.card}>saleiros</div>
            <div className={cards.card}>facoes</div>
            <div className={cards.card}>fufu</div>
            <div className={cards.card}>açucareiros</div>
            <div className={cards.card}>panela de pressao</div>
        </div>
    )
}