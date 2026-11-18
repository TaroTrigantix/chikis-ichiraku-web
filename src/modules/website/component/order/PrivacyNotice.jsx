import {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

const setReservedNoticeSpace = (height) => {
    document.body.style.setProperty('--privacy-notice-height', height + 'px')
}

const PrivacyNotice = ({isVisible, onDismiss}) => {
    const noticeRef = useRef(null)

    useEffect(() => {
        if (!isVisible || !noticeRef.current) {
            setReservedNoticeSpace(0)
            return undefined
        }

        const notice = noticeRef.current
        const reserveNoticeSpace = () => {
            setReservedNoticeSpace(notice.offsetHeight + 32)
        }
        const observer = new ResizeObserver(reserveNoticeSpace)
        observer.observe(notice)
        reserveNoticeSpace()

        return () => {
            observer.disconnect()
            setReservedNoticeSpace(0)
        }
    }, [isVisible])

    if (!isVisible) {
        return null
    }

    return (
        <aside
            ref={noticeRef}
            className="privacy-notice"
            aria-label="Datenschutzhinweis zur Onlinebestellung"
        >
            <p>
                <strong>Ihre Bestellung, direkt bei uns.</strong> Für die Onlinebestellung wird Foodbooking
                geladen. Dabei werden Daten an den Anbieter übertragen. Ihre Cookie-Auswahl treffen Sie im
                Bestellservice. <Link to="/datenschutz">Datenschutz</Link>
            </p>
            <button type="button" onClick={onDismiss} aria-label="Datenschutzhinweis schließen">
                Verstanden <span aria-hidden="true">×</span>
            </button>
        </aside>
    )
}

export default PrivacyNotice
