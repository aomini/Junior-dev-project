import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Routes from './routes'
import NavigationMenu from './components/NavigationMenu'
import './App.css'

const App = () => {

    const menus =[
        {
            name :'Product View',
            to:'/product-view'
        },
        {
            name: 'Blogs',
            to:'/blogs'
        },
        {
            name:'Products',
            to:'/products'
        }
    ]
    return (
        <div className="app">
            <h1>Furniture and Recliner </h1>
            <Router>
                <div className="app-container">
                    <NavigationMenu menus={menus} />
                    <div>
                        <Switch>
                            {Routes && Routes.map(route => 
                                <Route 
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exact || false}
                                >
                                    {route.redirect? <Redirect to={route.redirect} />:''}
                                </Route>
                            )}
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
