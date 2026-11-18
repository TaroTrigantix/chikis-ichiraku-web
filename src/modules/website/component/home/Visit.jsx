import {Link} from 'react-router-dom'

const Visit = () => {
    return (
        <section className="visit section" id="besuch" aria-labelledby="visit-title">
            <div className="container visit-grid">
                <div>
                    <p className="eyebrow">04 / WIR FREUEN UNS AUF SIE</p>
                    <h2 id="visit-title">Ihr nächster<br/><em>Lieblingsmoment.</em></h2>
                    <address>Asia &amp; Sushi<br/>Mahlsdorfer Str. 1<br/>15366 Hoppegarten</address>
                    <a
                        className="text-link"
                        href="https://www.google.com/maps/dir/?api=1&destination=Mahlsdorfer+Str.+1%2C+15366+Hoppegarten"
                        rel="noopener noreferrer"
                    >
                        Route planen <span aria-hidden="true">↗</span>
                    </a>
                </div>
                <div className="visit-info">
                    <h3>Hier ist Zeit für Genuss.</h3>
                    <dl className="hours">
                        <div>
                            <dt>Dienstag – Sonntag</dt>
                            <dd>12:00 – 15:00 Uhr<br/>17:00 – 21:30 Uhr</dd>
                        </div>
                        <div><dt>Montag</dt><dd>Ruhetag</dd></div>
                    </dl>
                    <div className="delivery">
                        <h3>Lieber zu Hause genießen?</h3>
                        <p>Unser Lieferservice bringt unsere köstlichen Gerichte zu Ihnen. Bestellungsannahme von 11:30 bis 21:00 Uhr.</p>
                    </div>
                    <div className="actions">
                        <Link className="button button-light" to="/bestellen">Online bestellen</Link>
                        <a className="phone-link" href="tel:+493054785101">030 547 85 101</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Visit
