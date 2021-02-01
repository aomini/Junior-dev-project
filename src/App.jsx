import React,{Suspense} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Routes from './routes'
import {menus} from './menus'
import NavigationMenu from './components/NavigationMenu'
import Style from './app.module.scss'


const App = () => {
    return (
        <div className={Style.app}>
            <h1>Furniture and Recliner </h1>
            <Router>
                <div className={Style.appContainer}>
                    <NavigationMenu menus={menus} />
                    <div>
                        <Suspense fallback={<div>Page is Loading...</div>}>
                            <Switch>
                                {Routes && Routes.map(route => 
                                    <Route 
                                        path={route.path}
                                        component={route.component}
                                        exact={route.exact}
                                    >
                                        {route.redirect? <Redirect to={route.redirect} />:null}
                                    </Route>
                                )}
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
