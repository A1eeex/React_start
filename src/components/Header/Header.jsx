import React from 'react'
import style from "./Header.module.css"
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://www.logodesign.net/images/nature-logo.png"></img>
  
          <div className={style.loginBlock}>
            { props.isAuth ?  <div>{props.login} <button className={style.logOut} onClick={props.logout} >Log out</button> </div>
              : <NavLink to={'/login'}>Login</NavLink> }
          </div>
        </header>
    )
}
export default Header;
