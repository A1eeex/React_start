import React from 'react';

import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState().dialogsPageReducer
        let addMessageClick = () => {
          store.dispatch(addMessageActionCreator())
        }
        
        let changeMessage = (message) => {
          store.dispatch(updateMessageActionCreator(message))
        }
        return <Dialogs updateNewMessage={changeMessage}
                        addMessage={addMessageClick}
                        dialogsPageReducer={state}
        
        />
      }
    }
    </StoreContext.Consumer>
  )
}
export default DialogsContainer;