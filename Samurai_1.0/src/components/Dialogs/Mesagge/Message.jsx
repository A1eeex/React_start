import React from 'react';
import css_mod_dialogs from '../Dialogs.module.css'
import css_mod_message from "./Message.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef()
  
  let addMessage = () => {
    let message = newMessageElement.current.value;
    props.dispatchDialogMessage({type: "ADD-MESSAGE"})
  }
  
  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatchDialogMessage({type: "UPDATE-MESSAGE", newMessageText: message})
    
  }
  return (
    <div className={css_mod_message.messageWrapper}>
      <div className={css_mod_message.messageMark}></div>
      <div className={css_mod_dialogs.message}>{props.message}</div>
      
      <input
        onChange={onMessageChange}
        ref={newMessageElement}
        value={props.firstMessage}/>
      
      <button onClick={addMessage}>+</button>
    
    </div>
  );
};

export default Message;