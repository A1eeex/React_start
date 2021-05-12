import React from 'react';

import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {compose} from "redux";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { sendMessageCreator } from "../../redux/dialogsPage-reduser";

let mapStateToProps = (state) => {
  return {
    dialogsPageReducer: state.dialogsPageReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);