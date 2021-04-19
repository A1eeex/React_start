import React from 'react';
import css_mod_dialogs from '../Dialogs.module.css'
import css_mod_message from "./Message.module.css";
import { addMessageActionCreator, updateMessageActionCreator } from "../../../redux/state";


const Message = (props) => {
  let newMessageElement = React.createRef()
  
  return (
    <div className={css_mod_message.messageWrapper}>
      <div className={css_mod_message.messageMark}></div>
      <div className={css_mod_dialogs.message}>{props.message}</div>
     
    
    </div>
  );
};

export default Message;