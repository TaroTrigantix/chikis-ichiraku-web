import {useEffect} from 'react'
import {useLocation, useNavigationType} from 'react-router-dom'

const ScrollRestoration = () => {
    const {pathname, hash} = useLocation()
    const navigationType = useNavigationType()
    useEffect(() => {
        if (hash) {
            document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
        } else if (navigationType !== 'POP') {
            window.scrollTo({top: 0, behavior: 'instant'})
        }
    }, [pathname, hash, navigationType])
    return null
}

export default ScrollRestoration
