import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUsersProfile, setUsersFullName, setUsersProfile } from "../../redux/profilePage-reduser";
import { withRouter } from "react-router-dom";

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
  fullName: state.profilePage.fullName
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUsersProfile, setUsersFullName})(WithUrlDataContainerComponent)