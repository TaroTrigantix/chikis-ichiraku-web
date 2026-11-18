import {Link} from 'react-router-dom'
import PageMetadata from '../common/PageMetadata'
import SiteLayout from '../common/SiteLayout'

const LegalPage = ({title, description, children}) => {
    return (
        <SiteLayout>
            <PageMetadata title={title + ' – Asia & Sushi Hoppegarten'} description={description}/>
            <main id="inhalt" className="legal-page container">
                <Link className="text-link" to="/">← Zur Startseite</Link>
                <p className="eyebrow">ASIA &amp; SUSHI</p>
                <h1>{title}</h1>
                <div className="prose">{children}</div>
            </main>
        </SiteLayout>
    )
}

export default LegalPage
