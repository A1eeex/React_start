import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Mesagge/Message";





const Dialogs = (props) => {
  return (
    <div className={css_mod_dialogs.dialogsContainer}>
      
      <div className={css_mod_dialogs.dialogs}>
        <div className={css_mod_dialogs.dialog}>
          <Dialog id="1" name="Senia"/>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <Dialog id="2" name="Kris"/>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <Dialog id="3" name="Monica"/>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <Dialog id="4" name="Tom"/>
        </div>
        <div className={css_mod_dialogs.dialog}>
          <Dialog id="5" name="Roma"/>
        </div>
      </div>
      
      <div className={css_mod_dialogs.messages}>
       <Message message="WoW!" />
       <Message message="How are you?!" />
       <Message message="Good luck!!" />
      </div>
    
    </div>
  );
  
};

export default Dialogs;