import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesagge/Message";

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(newDialog => <DialogItem id={newDialog.id} name={newDialog.name}/>)
  let messageElement = props.state.messages.map(newMessage => <Message
    firstMessage={props.state.firstMessage}

    dispatchDialogMessage={props.dispatchDialogMessage}

    message={newMessage.message}/>)
  
  return (
    <div className={css_mod_dialogs.dialogsContainer}>
      <div className={css_mod_dialogs.dialogs}>
        {dialogsElement}
      </div>
      
      <div className={css_mod_dialogs.messages}>
        {messageElement}
      </div>
      
      
    </div>
  );
};
export default Dialogs;