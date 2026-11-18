const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Asia & Sushi',
    description: 'Asiatische Spezialitäten und Sushi',
    servesCuisine: ['Asiatisch', 'Sushi'],
    telephone: '+49 30 54785101',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mahlsdorfer Str. 1',
        postalCode: '15366',
        addressLocality: 'Hoppegarten',
        addressCountry: 'DE',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '12:00',
            closes: '15:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '17:00',
            closes: '21:30',
        },
    ],
}

const RestaurantStructuredData = () => {
    return <script type="application/ld+json">{JSON.stringify(restaurant)}</script>
}

export default RestaurantStructuredData
