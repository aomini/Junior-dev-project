import React from "react"
import { NavLink } from "react-router-dom"
import { menus } from "./menus"
import Style from "./navigation-menu.module.css"
import logo from "./logo2.png"

const NavigationMenu = () => {
  return (
    <nav className={Style.navigationMenu}>
      <img src={logo} alt='' width='123' />
      <ul className='mt-5'>
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
