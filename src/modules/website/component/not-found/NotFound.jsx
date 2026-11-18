import {Link} from 'react-router-dom'
import PageMetadata from '../common/PageMetadata'
import SiteLayout from '../common/SiteLayout'

const NotFound = () => {
    return (
        <SiteLayout>
            <PageMetadata
                title="Seite nicht gefunden – Asia & Sushi Hoppegarten"
                description="Die angeforderte Seite wurde nicht gefunden."
            />
            <main id="inhalt" className="legal-page container">
                <p className="eyebrow">ASIA &amp; SUSHI</p>
                <h1>Seite nicht gefunden</h1>
                <div className="prose">
                    <p>Die angeforderte Seite ist nicht verfügbar.</p>
                    <Link className="text-link" to="/">Zur Startseite</Link>
                </div>
            </main>
        </SiteLayout>
    )
}

export default NotFound
