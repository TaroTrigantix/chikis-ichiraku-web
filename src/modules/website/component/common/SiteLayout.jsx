import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

const SiteLayout = ({children}) => {
    return (
        <>
            <SiteHeader/>
            {children}
            <SiteFooter/>
        </>
    )
}

export default SiteLayout
