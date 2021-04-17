import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import css_profile_module from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { updateNewPostText } from "../../redux/state";



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        post={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        addMesagePosts={props.addMesagePosts}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}
export default Profile