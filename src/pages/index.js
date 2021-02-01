import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './app.css'

import Products from './Products'
import Blogs from './Blogs'
import ProductView from './ProductView'

function index() {
    return (
        <div className="app">
             <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/product-view">Product View</Link>
                            </li>
                            <li>
                            <Link to="/products">Products</Link>
                            </li>
                            <li>
                            <Link to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Switch>
                        <Route path="/product-view">
                            <ProductView />
                        </Route>
                        <Route path="/blogs">
                            <Blogs />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                    </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default index
