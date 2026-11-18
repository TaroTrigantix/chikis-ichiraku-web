import PageMetadata from '../common/PageMetadata'
import SiteLayout from '../common/SiteLayout'
import Gallery from './Gallery'
import Hero from './Hero'
import Kitchen from './Kitchen'
import MenuPreview from './MenuPreview'
import RestaurantStructuredData from './RestaurantStructuredData'
import Visit from './Visit'

const Home = () => {
    return (
        <SiteLayout>
            <PageMetadata
                title="Asia & Sushi – Asiatische Küche in Hoppegarten"
                description="Asiatische Spezialitäten und Sushi in Hoppegarten. Küche entdecken, online bestellen oder vorbeikommen. Mahlsdorfer Str. 1."
            />
            <main id="inhalt">
                <Hero/>
                <Kitchen/>
                <MenuPreview/>
                <Gallery/>
                <Visit/>
            </main>
            <RestaurantStructuredData/>
        </SiteLayout>
    )
}

export default Home
