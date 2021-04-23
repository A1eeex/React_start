import React from 'react'

import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profilePage-reduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    post: state.profilePageReducer.postData,
    newPostText: state.profilePageReducer.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText:(text) => {
      let action = onPostChangeActionCreator(text);
      dispatch(action)
    },
    addPost:()=> {
      dispatch(addPostActionCreator())
    }
    
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer