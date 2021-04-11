import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import css_profile_module from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5peH88WVg6YB75RUJo37XBWePy6xrGts5WW2QAoyRAXOh_BQ1diw7qDQ4eNsNoRck9s&usqp=CAU"></img>
      </div>

      <div> ava + description
        </div>

  <MyPosts />
    </div>
  )
}
export default Profile