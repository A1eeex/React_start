import React from 'react'
import css_header_module from "./Header.module.css"
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return (
        <header className={css_header_module.header}>
            <img src="https://www.logodesign.net/images/nature-logo.png"></img>
  
          <div className={css_header_module.loginBlock}>
            { props.isAuth ? props.login
              : <NavLink to={'/login'}>Login</NavLink> }
          </div>
        </header>
    )
}
export default Header;
