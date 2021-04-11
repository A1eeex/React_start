import React from 'react';
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_item}>
        <NavLink to="/profile" activeClassName={classes.activeLinc}>Profile</NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLinc}>Messages</NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/news" activeClassName={classes.activeLinc}>News</NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="/music" activeClassName={classes.activeLinc}>Music</NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink to="settings" activeClassName={classes.activeLinc}>Settings</NavLink>
      </div>
    </nav>
  )
}
export default Navbar
