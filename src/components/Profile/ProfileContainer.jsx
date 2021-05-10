import React from 'react'
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUsersProfile, setUsersFullName, updateStatus } from "../../redux/profilePage-reduser";
import {  withRouter } from "react-router-dom";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 16842
    }
    
    this.props.getUsersProfile(userId)
    this.props.getStatus(userId)
  }
  
  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               fullName={this.props.fullName}
               status={ this.props.status}
               updateStatus={this.props.updateStatus}
      />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  fullName: state.profilePage.fullName,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status
})




export default compose(
  connect(mapStateToProps, {getUsersProfile, setUsersFullName, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)
(ProfileContainer)