import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const Dialogs = (props) => {
  return (
    <div className={css_mod_dialogs.dialogsContainer}>
      
      <div className={css_mod_dialogs.dialogs}>
        <div className={css_mod_dialogs.dialog}>
          <NavLink to="/dialogs/1" activeClassName={css_mod_dialogs.activeLinc}>Albert</NavLink>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <NavLink to="/dialogs/2" activeClassName={css_mod_dialogs.activeLinc}>Kris</NavLink>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <NavLink to="/dialogs/3" activeClassName={css_mod_dialogs.activeLinc}>Monica</NavLink>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <NavLink to="/dialogs/4" activeClassName={css_mod_dialogs.activeLinc}>Tom</NavLink>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <NavLink to="/dialogs/5" activeClassName={css_mod_dialogs.activeLinc} >Roma</NavLink>
        </div>
      </div>
      
      <div className={css_mod_dialogs.messages}>
        <div className={css_mod_dialogs.message}>Yo Valodia</div>
        <div className={css_mod_dialogs.message}>How are you?</div>
        <div className={css_mod_dialogs.message}>Good luck!</div>
      </div>
    
    </div>
  );
  
};

export default Dialogs;