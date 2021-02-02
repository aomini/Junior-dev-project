import React from "react"
import { NavLink } from "react-router-dom"
import { menus } from "./menus"
import Style from "./navigation-menu.module.css"

const NavigationMenu = () => {
  return (
    <nav className={Style.navigationMenu}>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id} className={Style.navigationItem}>
            <NavLink activeClassName={Style.isActive} to={menu.to}>
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavigationMenu
