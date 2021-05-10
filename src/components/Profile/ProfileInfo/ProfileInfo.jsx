import React from 'react'
import cssProfileInfo from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
  return <Preloader />
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5peH88WVg6YB75RUJo37XBWePy6xrGts5WW2QAoyRAXOh_BQ1diw7qDQ4eNsNoRck9s&usqp=CAU"*/}
      {/*    alt='Big_photo'/>*/}
      {/*</div>*/}
      
      <div className={cssProfileInfo.descriptionBlock}>
        <img src={props.profile.photos.small}  alt="user_avatar"/>
        <div> {props.profile.fullName} </div>
        <ProfileStatus status={'One life - one rules '}/>
       
      </div>
    </div>
  )
}
export default ProfileInfo