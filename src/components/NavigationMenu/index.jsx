import React from 'react'
import {Link} from "react-router-dom";
import {menus} from './menus'
import Style from './navigation-menu.module.css'

const NavigationMenu = () => {
    return (
        <nav className={Style.navigationMenu}>
            <ul>
                {menus.map(menu => 
                    <li className={Style.navigationItem}>
                        <Link to={menu.to}>{menu.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavigationMenu
