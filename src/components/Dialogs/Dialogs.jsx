import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesagge/Message";
import { Redirect } from "react-router-dom";


const Dialogs = (props) => {
  let state = props.dialogsPageReducer
  let dialogsElement = state.dialogs.map(newDialog => <DialogItem
    id={newDialog.id}
    key={newDialog.id}
    name={newDialog.name}/>)
  let messageElement = state.messages.map(newMessage => <Message
    dispatch={props.dispatch}
    key={newMessage.id}
    message={newMessage.message}/>)
  
  let firstMessage = state.firstMessage
  
  let addMessageClick = () => {
    props.addMessage()
  }
  
  let changeMessage = (e) => {
    let message = e.target.value
    props.updateNewMessage(message)
  }
  
  if (!props.isAuth) return <Redirect to={'/login'}/>
  
  
  return (
    <div className={style.dialogsContainer}>
      <div className={style.dialogs}>
        {dialogsElement}
      </div>
      <div className={style.messageElement}>{messageElement}</div>
      <div className={style.messages}>
        <div>
          <input onChange={changeMessage}
                 type="text"
                 value={firstMessage}
                 placeholder="message"
          />
        </div>
        <div>
          <button onClick={addMessageClick}> Add message</button>
        </div>
      
      
      </div>
    
    
    </div>
  );
};
export default Dialogs;