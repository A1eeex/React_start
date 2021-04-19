import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesagge/Message";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/state";


const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage
  let dialogsElement = state.dialogs.map(newDialog => <DialogItem id={newDialog.id} name={newDialog.name}/>)
  let messageElement = state.messages.map(newMessage => <Message
    // firstMessage={props.state.firstMessage}
    dispatch={props.dispatch}
    // dispatchDialogMessage={props.dispatchDialogMessage}
    message={newMessage.message}/>)
  
  let firstMessage = state.firstMessage
  
  let addMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  
  let changeMessage = (e) => {
  let message = e.target.value
    props.store.dispatch(updateMessageActionCreator(message))
  }
  
  return (
    <div className={css_mod_dialogs.dialogsContainer}>
      <div className={css_mod_dialogs.dialogs}>
        {dialogsElement}
      </div>
      
      <div className={css_mod_dialogs.messages}>
        <div>{messageElement}</div>
        
        <div><input onChange={changeMessage}
                    type="text"
                    value={firstMessage}
                    placeholder="message"/><
                    /div>
        <div>
          <button onClick={addMessageClick}> Add message</button>
        </div>
      
      
      </div>
    
    
    </div>
  );
};
export default Dialogs;