import React, { useState } from 'react'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import profilePhoto from "../../../assets/img/profile_photo_.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  let [editMode, setEditMode] = useState(false)
  
  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit = (formData) => {
    saveProfile(formData)
    setEditMode(false)
  }
  
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.small || profilePhoto} alt="user_avatar"/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData goToEditMode={()=> {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  )
}

const ProfileData= ({profile,isOwner,goToEditMode}) =>{
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>_edit_</button></div>}
      <div className={styles.nickname}> {profile.fullName} </div>
      <div>
        <b>Locking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
      </div>
      {profile.lookingForAJob &&
      <div>
        <b>Description for Job</b>: {profile.lookingForAJobDescription}
      </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
    
      <div>
        <b className={styles.contentTitle}>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle} </b>:{contactValue}
    </div>
  );
};


export default ProfileInfo