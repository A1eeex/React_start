import React from 'react';
import styles from "./ProfileInfo.module.css";
import { createFiled, Input, Textarea } from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit}) => {
  return (
    <form onSubmit= {handleSubmit}>
      <div><button >save</button></div>
      
      <div className={styles.nickname}> {createFiled("fullName", "fullName", Input, [],"text")} </div>
      <div>
        <b>Locking for a job</b>: {createFiled("", "lookingForAJob", Input, [], "checkbox")}
      </div>
      
      <div>
        <b>Description for job</b>: {createFiled("Description", "lookingForAJobDescription", Textarea, [], "text")}
      </div>
      
      <div>
        <b>About me</b>: {createFiled("About me", "aboutMe", Textarea, [], "text")}
      </div>
    
      {/*<div>*/}
      {/*  <b className={styles.contentTitle}>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
      {/*  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />*/}
      {/*})}*/}
      {/*</div>*/}
  
    </form>
  );
};
const  ProfileDataFormReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)
export default ProfileDataFormReduxForm;