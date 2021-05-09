import React from 'react'
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile, setUsersFullName } from "../../redux/profilePage-reduser";
import {  withRouter } from "react-router-dom";
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    
    this.props.getUsersProfile(userId)
  }
  
  render() {
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               fullName={this.props.fullName}/>
    )
  }
}




let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  fullName: state.profilePage.fullName,
  isAuth: state.auth.isAuth
})




export default compose(
  connect(mapStateToProps, {getUsersProfile, setUsersFullName}),
  withRouter,
  withAuthRedirect
)
(ProfileContainer)