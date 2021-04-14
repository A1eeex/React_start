import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesagge/Message";

const Dialogs = (props) => {
  
  let dialogs = [
    {id: 1, name: 'Dana'},
    {id: 2, name: 'Senia'},
    {id: 3, name: 'Monica'},
    {id: 4, name: 'Tom'},
    {id: 5, name: 'Robert'},
  ]
  let messages = [
    {id: 1, message: 'WOoW'},
    {id: 2, message: 'Good luck!!'},
    {id: 3, message: 'Rect go to Top!'},
    {id: 4, message: '25!'},
  ]
  
  let dialogsElement = dialogs.map(newDialog => <DialogItem id={newDialog.id} name={newDialog.name}/>)
  let messageElement = messages.map(newMessage => <Message message={newMessage.message}/>)
  
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