import {Route, Routes} from 'react-router-dom'
import {routes} from '../../routes'

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({route, path, component}) => {
                const Component = component
                const routePath = route || path
                return <Route key={routePath} path={routePath} element={<Component/>}/>
            })}
        </Routes>
    )
}

export default AppRoutes
