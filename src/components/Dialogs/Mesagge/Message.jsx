import React from 'react';
import css_mod_message from "./Message.module.css";


const Message = (props) => {
  return (
    <div className={css_mod_message.messageWrapper}>
      <div className={css_mod_message.messageMark}></div>
      <div >{props.message}</div>
    </div>
  );
};

export default Message;