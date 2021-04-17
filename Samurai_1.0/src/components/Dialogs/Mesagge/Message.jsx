import React from 'react';
import css_mod_dialogs from '../Dialogs.module.css'
import css_mod_message from "./Message.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef()
  let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message)
    let clear =  newMessageElement.current;
    clear.value =""
  }
  return (
    <div className={css_mod_message.messageWrapper}>
      <div className={css_mod_message.messageMark}> </div>
      <div className={css_mod_dialogs.message}>{props.message}</div>
      <input ref={newMessageElement} />
      <button onClick={addMessage}>+</button>
    </div>
  );
};

export default Message;