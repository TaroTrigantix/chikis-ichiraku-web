import {Link} from 'react-router-dom'

const MenuPreview = () => {
    return (
        <section className="menu-section section" id="speisekarte" aria-labelledby="menu-title">
            <div className="container">
                <div className="menu-header">
                    <div>
                        <p className="eyebrow">02 / EIN VORGESCHMACK</p>
                        <h2 id="menu-title">Worauf haben Sie <em>Appetit?</em></h2>
                    </div>
                    <p>Ein kleiner Auszug aus unserer Speisekarte.<br/>Mehr Auswahl finden Sie im Bestellservice.</p>
                </div>
                <div className="menu-grid">
                    <div className="menu-image">
                        <img
                            src="/assets/images/maki-nigiri.webp"
                            width="800"
                            height="608"
                            alt="Lachs- und Thunfisch-Maki mit zwei Lachs-Nigiri"
                            loading="lazy"
                        />
                        <span className="image-label">Für Sushi-Liebhaber.</span>
                    </div>
                    <div className="dish-list">
                        <article className="dish">
                            <div><h3>Hako Sushi</h3><span>20,00 €</span></div>
                            <p>mit Lachs, Kanikama, Kaviar, Shiitake, Omelette, Seetang</p>
                        </article>
                        <article className="dish">
                            <div><h3>Osiki Nigiri Sushi</h3><span className="price-note">Preis bitte erfragen</span></div>
                            <p>Gebackener Reis mit Lachs und Cream Cheese</p>
                        </article>
                        <article className="dish">
                            <div><h3>Thai-Ente</h3><span>13,00 €</span></div>
                            <p>mit verschiedenem Gemüse, Champignons in Kokosmilch und rotem Curry (leicht scharf)</p>
                        </article>
                        <article className="dish">
                            <div><h3>Eierreis</h3><span>8,00 €</span></div>
                            <p>mit Hühnerfleisch, Gemüse</p>
                        </article>
                        <Link className="text-link" to="/bestellen">
                            Zur Online-Speisekarte <span aria-hidden="true">↗</span>
                        </Link>
                        <p className="menu-note">Preise und Verfügbarkeit bitte im Bestellservice.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuPreview
