import {Link} from 'react-router-dom'

const Kitchen = () => {
    return (
        <section className="kitchen section container" id="kueche" aria-labelledby="kitchen-title">
            <div className="section-heading">
                <p className="eyebrow">01 / UNSERE KÜCHE</p>
                <h2 id="kitchen-title">Ein bisschen Fernost.<br/><em>Ganz nah.</em></h2>
            </div>
            <div className="kitchen-description">
                <p>
                    Genießen Sie bei uns erlesene Spezialitäten aus den verschiedensten Regionen Asiens, die wir
                    frisch und nach sorgfältig ausgewählten Rezepten für Sie zubereiten.
                </p>
                <Link className="text-link" to="/bestellen">Entdecken &amp; bestellen</Link>
            </div>
            <div className="kitchen-image">
                <img
                    src="/assets/images/ente-curry.webp"
                    width="900"
                    height="563"
                    alt="Knusprige Ente mit Gemüse in Currysauce und einer Portion Reis"
                    loading="lazy"
                />
                <span>Für den großen Appetit. Und die kleine Auszeit.</span>
            </div>
        </section>
    )
}

export default Kitchen
