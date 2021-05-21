import React from 'react'
import cssProfileInfo from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user2_.png";


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={cssProfileInfo.descriptionBlock}>
        <img src={profile.photos.small != null ? profile.photos.small: userPhoto} alt="user_avatar"/>
        <div> {profile.fullName} </div>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      
      </div>
    </div>
  )
}
export default ProfileInfo