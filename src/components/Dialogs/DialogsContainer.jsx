import React from 'react';
import css_mod_dialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesagge/Message";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPageReducer
 
  
  
  let addMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  
  let changeMessage = (message) => {
    props.store.dispatch(updateMessageActionCreator(message))
  }
  
  return (
   <Dialogs updateNewMessage={changeMessage}
            addMessage={addMessageClick}
            dialogsPageReducer={state}
   
   />
  )
}
export default DialogsContainer;