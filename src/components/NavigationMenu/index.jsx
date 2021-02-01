import React from 'react'
import {Link} from "react-router-dom";
import Style from './style.module.css'

const NavigationMenu = ({menus}) => {
    return (
        <nav className={Style.navigationMenu}>
            <ul>
                {menus && menus.map(menu => 
                    <li className={Style.navigationItem}>
                        <Link to={menu.to}>{menu.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavigationMenu
