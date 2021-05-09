import React from 'react';
import { addMessage, updateNewMessage } from "../../redux/dialogsPage-reduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPageReducer: state.dialogsPageReducer,
  }
}


export default compose(
  connect(mapStateToProps, {updateNewMessage, addMessage}),
  withAuthRedirect
)
(Dialogs);