import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profilePage-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state  = props.store.getState();
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
    // props.updateNewPostText("")
  }
  let onPostChange = (text) => {
    let action = onPostChangeActionCreator(text);
    props.store.dispatch(action)
    
  }
  return (
    <MyPosts updateNewPostText = {onPostChange}
             addPost = {addPost}
             post={state.profilePageReducer.postData}
             newPostText={state.profilePageReducer.newPostText}
    />
  )
}
export default MyPostsContainer