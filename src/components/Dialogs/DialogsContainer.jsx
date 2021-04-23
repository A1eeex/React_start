import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPageReducer: state.dialogsPageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (message) => {
      dispatch(updateMessageActionCreator(message))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;