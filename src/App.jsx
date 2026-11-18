import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import RoutesContainer from './modules/router/component/RoutesContainer'
import ScrollRestoration from './modules/router/component/ScrollRestoration'
import {store} from './modules/store'
import './styles/bootstrap.less'
import './styles/site/base/tokens.css'
import './styles/site/base/reset.css'
import './styles/site/components/layout.css'
import './styles/site/components/buttons.css'
import './styles/site/components/privacy-notice.css'
import './styles/site/sections/hero.css'
import './styles/site/sections/kitchen.css'
import './styles/site/sections/menu.css'
import './styles/site/sections/gallery.css'
import './styles/site/sections/visit.css'
import './styles/site/pages/legal.css'
import './styles/site/pages/order.css'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollRestoration/>
                <RoutesContainer/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
