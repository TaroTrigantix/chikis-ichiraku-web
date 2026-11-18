import {Link} from 'react-router-dom'

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <Link className="footer-brand" to="/">
                    Asia &amp; Sushi
                    <span>Asiatische Spezialitäten. In Hoppegarten.</span>
                </Link>
                <div className="footer-links">
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/datenschutz">Datenschutz</Link>
                    <a href="tel:+493054785101">030 547 85 101</a>
                </div>
            </div>
            <div className="container footer-bottom">
                Mahlsdorfer Str. 1 · 15366 Hoppegarten
                <span>Wir freuen uns auf Sie.</span>
            </div>
        </footer>
    )
}

export default SiteFooter
