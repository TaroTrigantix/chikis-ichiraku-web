const Gallery = () => {
    return (
        <section className="gallery section" aria-labelledby="gallery-title">
            <div className="container gallery-heading">
                <div>
                    <p className="eyebrow">03 / AUS UNSERER KÜCHE</p>
                    <h2 id="gallery-title">Das Auge <em>isst mit.</em></h2>
                </div>
                <span>Ein paar gute Gründe für Appetit.</span>
            </div>
            <div className="container gallery-grid">
                <figure>
                    <img src="/assets/images/sushi-melone.webp" width="1024" height="640" loading="lazy" alt="Sushi mit Lachs und Maki, angerichtet in einer Wassermelone"/>
                    <figcaption>Sushi, liebevoll angerichtet.</figcaption>
                </figure>
                <figure>
                    <img src="/assets/images/garnelen-orchidee.webp" width="1024" height="640" loading="lazy" alt="Knusprige Garnelen mit Salat und Orchideenblüte"/>
                    <figcaption>Knusprig. Und voller Geschmack.</figcaption>
                </figure>
                <figure>
                    <img src="/assets/images/sushi-platte.webp" width="768" height="576" loading="lazy" alt="Gemischte Sushi-Platte mit Nigiri und Fischrogen"/>
                    <figcaption>Am besten gemeinsam genießen.</figcaption>
                </figure>
                <figure>
                    <img src="/assets/images/sushi-ananas.webp" width="1024" height="640" loading="lazy" alt="Maki und Nigiri mit Garnelen, Orange und Ananas"/>
                    <figcaption>Eine bunte Auswahl.</figcaption>
                </figure>
                <figure>
                    <img src="/assets/images/ente-fisch.webp" width="800" height="414" loading="lazy" alt="Knusprige Ente und panierte Stücke mit Gemüse, Cashewkernen und Reis"/>
                    <figcaption>Auch warm ein Genuss.</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Gallery
