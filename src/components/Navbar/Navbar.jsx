import React from 'react';
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import SiteBar from "./SiteBar/SiteBar";

const Navbar = (props) => {
  
  let state = props.sidebar
  let siteBarElement = state.users.map(newUser => < SiteBar users={newUser.name} key={newUser.id}/>)
  
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
        <NavLink to="users" activeClassName={classes.activeLinc}>Find users</NavLink>
      </div>
      
      <div className={classes.nav_item + ' ' + classes.nav_settings}>
        <NavLink to="settings" activeClassName={classes.activeLinc}>Settings</NavLink>
      </div>
      
      <div className={classes.siteBar}>
        <div className={classes.siteBarTitle}> Friends</div>
        <div>
          {siteBarElement}
        </div>
      
      
      </div>
    </nav>
  )
}
export default Navbar
