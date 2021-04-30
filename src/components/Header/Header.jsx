import React from 'react'
import css_header_module from "./Header.module.css"
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={css_header_module.header}>
      <img src="https://www.logodesign.net/images/nature-logo.png" alt="header_logo"> </img>
      <div className={css_header_module.loginBlock}>
        <NavLink to="/login"> Login</NavLink>
      </div>
    </header>
  )
}
export default Header;
