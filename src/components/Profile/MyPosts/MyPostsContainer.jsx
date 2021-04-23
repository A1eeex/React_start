import React from 'react'

import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profilePage-reduser";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator())
          }
          let onPostChange = (text) => {
            let action = onPostChangeActionCreator(text);
            store.dispatch(action)
          }
          return <MyPosts updateNewPostText={onPostChange}
                          addPost={addPost}
                          post={state.profilePageReducer.postData}
                          newPostText={state.profilePageReducer.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer