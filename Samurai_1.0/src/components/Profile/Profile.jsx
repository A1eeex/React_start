import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import css_profile_module from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// let postData = [
//   {id: 1, message: 'Hi bro!', likesCount: '3'},
//   {id: 2, message: 'Do you study React?', likesCount: '9'},
//   {id: 3, message: 'Yes, I do!', likesCount: '100'},
// ]

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts post={props.postData}/>
    </div>
  )
}
export default Profile