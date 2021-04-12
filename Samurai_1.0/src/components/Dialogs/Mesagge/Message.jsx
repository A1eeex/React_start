import React from 'react';
import css_mod_dialogs from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={css_mod_dialogs.message}>{props.message}</div>
    </div>
  );
};

export default Message;