import React from 'react';
import { addMessage, updateNewMessage } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state) => {
  return {
    dialogsPageReducer: state.dialogsPageReducer,
  }
}
const DialogsContainer = connect(mapStateToProps, {
  updateNewMessage,
  addMessage,
})
(AuthRedirectComponent)
export default DialogsContainer;