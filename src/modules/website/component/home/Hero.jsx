import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className="hero" aria-labelledby="hero-title">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            <span className="small-line"/> ASIATISCHE KÜCHE · HOPPEGARTEN
                        </p>
                        <h1 id="hero-title">Asia &amp; <em>Sushi</em></h1>
                        <p className="hero-description">
                            <span className="hero-description-desktop">
                                Von feinem Sushi bis zu warmen Asia-Klassikern. Entdecken Sie unsere Küche – bei
                                uns in Hoppegarten oder ganz entspannt zu Hause.
                            </span>
                            <span className="hero-description-mobile">
                                <strong>Ein Stück Asien. Ganz in Ihrer Nähe.</strong><br/>
                                Zum Hierbleiben, Mitnehmen oder Liefern.
                            </span>
                        </p>
                        <div className="actions hero-actions">
                            <Link className="button" to="/bestellen">Bestellen</Link>
                            <a className="button button-outline" href="tel:+493054785101">Anrufen</a>
                        </div>
                        <p className="hero-hours-note">Di–So: 12–15 &amp; 17–21:30 Uhr · Montag Ruhetag</p>
                        <div className="hero-location">
                            <a
                                className="text-link"
                                href="https://www.google.com/maps/dir/?api=1&destination=Mahlsdorfer+Str.+1%2C+15366+Hoppegarten"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Route planen <span aria-hidden="true">↗</span>
                            </a>
                            <p>Mahlsdorfer Str. 1 · Hoppegarten</p>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <span className="hero-ring" aria-hidden="true"/>
                        <span className="vertical-note" aria-hidden="true">MAKI · NIGIRI · ASIA-KLASSIKER</span>
                        <img
                            src="/assets/images/platte-gemischt.webp"
                            width="999"
                            height="868"
                            alt="Große Sushi-Platte mit Maki, Nigiri und frittierten Rollen"
                            fetchPriority="high"
                        />
                        <div className="hero-seal">
                            <span>MIT LIEBE</span>
                            <strong>frisch</strong>
                            <span>ZUBEREITET</span>
                        </div>
                    </div>
                </div>
                <div className="hero-caption container">
                    <span>Gutes Essen. Ganz in Ihrer Nähe.</span>
                    <a href="#besuch">Mahlsdorfer Straße 1, Hoppegarten</a>
                </div>
            </section>
            <div className="flavor-strip" aria-hidden="true">
                <span>SUSHI &amp; MEHR</span><i>✳</i><span>FRISCH ZUBEREITET</span>
                <i>✳</i><span>ASIATISCHE VIELFALT</span><i>✳</i><span>FÜR HIER &amp; ZU HAUSE</span>
            </div>
        </>
    )
}

export default Hero
