import React from 'react'
import {Link} from "react-router-dom";
const index = ({menus}) => {
    return (
        <nav className="navigation-menu">
            <ul>
                {menus && menus.map(menu => 
                    <li className="navigation-item">
                        <Link to={menu.to}>{menu.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default index
