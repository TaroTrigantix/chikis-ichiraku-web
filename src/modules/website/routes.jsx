import HomeContainer from './component/home/HomeContainer'
import ImprintContainer from './component/legal/ImprintContainer'
import PrivacyContainer from './component/legal/PrivacyContainer'
import NotFoundContainer from './component/not-found/NotFoundContainer'
import OrderContainer from './component/order/OrderContainer'

export default [
    {
        path: '/impressum.html', component: ImprintContainer, requiredRole: [],
        name: 'ImprintOriginal', parentName: null, title: 'Impressum', rank: 22,
    },
    {
        path: '/datenschutz.html', component: PrivacyContainer, requiredRole: [],
        name: 'PrivacyOriginal', parentName: null, title: 'Datenschutz', rank: 32,
    },
    {
        path: '/',
        component: HomeContainer,
        requiredRole: [],
        name: 'Home',
        parentName: null,
        title: 'Startseite',
        rank: 0,
    },
    {
        path: '/index.html',
        component: HomeContainer,
        requiredRole: [],
        name: 'HomeLegacy',
        parentName: null,
        title: 'Startseite',
        rank: 1,
    },
    {
        path: '/bestellen',
        component: OrderContainer,
        requiredRole: [],
        name: 'Order',
        parentName: null,
        title: 'Online bestellen',
        rank: 10,
    },
    {
        path: '/pages/bestellen.html',
        component: OrderContainer,
        requiredRole: [],
        name: 'OrderLegacy',
        parentName: null,
        title: 'Online bestellen',
        rank: 11,
    },
    {
        path: '/impressum',
        component: ImprintContainer,
        requiredRole: [],
        name: 'Imprint',
        parentName: null,
        title: 'Impressum',
        rank: 20,
    },
    {
        path: '/pages/impressum.html',
        component: ImprintContainer,
        requiredRole: [],
        name: 'ImprintLegacy',
        parentName: null,
        title: 'Impressum',
        rank: 21,
    },
    {
        path: '/datenschutz',
        component: PrivacyContainer,
        requiredRole: [],
        name: 'Privacy',
        parentName: null,
        title: 'Datenschutz',
        rank: 30,
    },
    {
        path: '/pages/datenschutz.html',
        component: PrivacyContainer,
        requiredRole: [],
        name: 'PrivacyLegacy',
        parentName: null,
        title: 'Datenschutz',
        rank: 31,
    },
    {
        path: '*',
        component: NotFoundContainer,
        requiredRole: [],
        name: 'NotFound',
        parentName: null,
        title: 'Seite nicht gefunden',
        rank: 100,
    },
]
