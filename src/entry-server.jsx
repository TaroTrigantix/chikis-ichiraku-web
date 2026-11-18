import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'
import RoutesContainer from './modules/router/component/RoutesContainer'
import {store} from './modules/store'

export const render = (path) => {
    return renderToString(
        <Provider store={store}>
            <StaticRouter location={path}>
                <RoutesContainer/>
            </StaticRouter>
        </Provider>,
    )
}
