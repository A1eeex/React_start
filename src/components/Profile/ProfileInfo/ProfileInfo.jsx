import React from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import profilePhoto from "../../../assets/img/profile_photo_.png";


const ProfileInfo = ({profile, status, updateStatus,isOwner,savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected =(e) => {
  if (e.target.files.length) {
    savePhoto(e.target.files[0])
  }
  }
  
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.small != null ? profile.photos.small: profilePhoto} alt="user_avatar"/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
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