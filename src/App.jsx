import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NavigationMenu from "./components/NavigationMenu"
import routes from "./routes"
import Style from "./app.module.scss"

const App = () => {
  return (
    <div className={Style.app}>
      <Router>
        <NavigationMenu />
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Switch>
            {routes &&
              routes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                >
                  {route.redirect ? <Redirect to={route.redirect} /> : null}
                </Route>
              ))}
          </Switch>
        </Suspense>
      </Router>
      <ToastContainer autoClose={8000} />
    </div>
  )
}

export default App
