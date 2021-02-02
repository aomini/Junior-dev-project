import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import NavigationMenu from "./components/NavigationMenu"
import ToastNotify from "./components/ToastNotify"
import routes from "./routes"
import Style from "./app.module.scss"

const App = () => {
  return (
    <div className={Style.app}>
      <ToastNotify
        toastList={[
          {
            id: 1,
            type: "success",
            title: "Success",
            description: "This is a success toast component",
            icon: "",
          },
        ]}
        position='topRight'
      />
      <h1>Furniture and Recliner </h1>
      <Router>
        <div className={Style.appContainer}>
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
        </div>
      </Router>
    </div>
  )
}

export default App
