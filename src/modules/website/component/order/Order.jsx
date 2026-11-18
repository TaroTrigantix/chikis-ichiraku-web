import PageMetadata from '../common/PageMetadata'
import SiteLayout from '../common/SiteLayout'
import PrivacyNotice from './PrivacyNotice'

const FOODBOOKING_URL = 'https://www.foodbooking.com/ordering/?restaurant_uid=9aa9f237-abd2-4df4-8862-536ed3f0376d'

const Order = ({isPrivacyNoticeVisible, onDismissPrivacyNotice}) => {
    return (
        <SiteLayout>
            <PageMetadata
                title="Online bestellen – Asia & Sushi Hoppegarten"
                description="Asiatische Spezialitäten und Sushi bequem über unseren bestehenden GloriaFood-Bestellservice bestellen."
            />
            <main id="inhalt" className="order-page container">
                <div className="order-heading">
                    <div>
                        <p className="eyebrow">FRISCH AUF DEN TISCH</p>
                        <h1>Unsere <em>Speisekarte.</em></h1>
                    </div>
                    <p>Bestellungsannahme: 11:30–21:00 Uhr<br/>Montag ist Ruhetag.</p>
                </div>
                <section className="order-embed" aria-label="Speisekarte und Onlinebestellung">
                    <iframe
                        id="order-frame"
                        src={FOODBOOKING_URL}
                        title="Speisekarte und Bestellung bei Asia & Sushi"
                        allow="payment"
                    />
                </section>
                <p className="order-help">
                    Lieber telefonisch bestellen? <a href="tel:+493054785101">030 547 85 101</a>
                    <span>·</span>
                    <a href={FOODBOOKING_URL} target="_blank" rel="noopener noreferrer">
                        Bestellservice in neuem Tab öffnen
                    </a>
                </p>
            </main>
            <PrivacyNotice isVisible={isPrivacyNoticeVisible} onDismiss={onDismissPrivacyNotice}/>
        </SiteLayout>
    )
}

export default Order
