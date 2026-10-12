function Ogloszenie({ogloszenie}) {
    return(
        <article className="karta">
            <h2>{ogloszenie.nazwa}</h2>
            <p>Cena: {ogloszenie.cena}PLN</p>
            <p>Kategoria: {ogloszenie.kategoria}</p>
            <p className={ogloszenie.dostepny ? "dostepny" : "niedostepny"}>{ogloszenie.dostepny ? "Dostepny" : "niedostepny"}</p>
            <p>Opis: {ogloszenie.opis}</p>
            <button>Zabacz szczegóły</button>
        </article>
    )
}

export default Ogloszenie;