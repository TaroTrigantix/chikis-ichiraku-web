import {Link} from 'react-router-dom'

const SiteHeader = () => {
    return (
        <>
            <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
            <header className="site-header">
                <div className="container header-inner">
                    <Link className="brand" to="/" aria-label="Asia und Sushi – Startseite">
                        <img
                            className="brand-logo"
                            src="/assets/images/logo-96.png"
                            srcSet="/assets/images/logo-192.png 2x"
                            width="56"
                            height="56"
                            alt=""
                        />
                        <span>ASIA &amp; SUSHI<small>HOPPEGARTEN</small></span>
                    </Link>
                    <nav aria-label="Hauptnavigation">
                        <a href="/#kueche">Unsere Küche</a>
                        <a href="/#speisekarte">Speisekarte</a>
                        <a href="/#besuch">Kontakt &amp; Anfahrt</a>
                    </nav>
                    <Link className="button button-small" to="/bestellen">Online bestellen</Link>
                </div>
            </header>
        </>
    )
}

export default SiteHeader
