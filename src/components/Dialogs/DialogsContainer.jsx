import React from 'react';
import { addMessage, updateNewMessage } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPageReducer: state.dialogsPageReducer,
    isAuth: state.auth.isAuth
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewMessage: (message) => {
//       dispatch(updateNewMessageActionCreator(message))
//     },
//     addMessage: () => {
//       dispatch(addMessageActionCreator())
//     }
//   }
// }

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessage,
  addMessage,
})
(Dialogs)
export default DialogsContainer;