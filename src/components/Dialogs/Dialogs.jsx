import React from 'react';
import style from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import Message from "./Mesagge/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators"

const MAX_LENGTH_100 = maxLengthCreator(100)

const Dialogs = (props) => {
  
  let state = props.dialogsPageReducer;
  
  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }
  
  if (!props.isAuth) return <Redirect to={"/login"} /> ;
  
  return (
    <div className={style.dialogsContainer}>
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        <div>{ messagesElements }</div>
      
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, MAX_LENGTH_100]}
               name="newMessageBody"
               placeholder="Enter your message" />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;












