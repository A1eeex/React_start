import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import profilePhoto from "../../../assets/img/profile_photo_.png";


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.small != null ? profile.photos.small: profilePhoto} alt="user_avatar"/>
        <div className ={styles.nickname}> {profile.fullName} </div>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      
      </div>
    </div>
  )
}
export default ProfileInfo