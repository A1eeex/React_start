import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        post={props.store.getState().profilePageReducer.postData}
        newPostText={props.store.getState().profilePageReducer.newPostText}
        dispatch={props.dispatch}
      
      />
    </div>
  )
}
export default Profile