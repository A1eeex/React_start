import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  
  let postData = [
    {id: 1, message: 'Hi bro!', likesCount: '3'},
    {id: 2, message: 'Do you study React?', likesCount: '9'},
    {id: 3, message: 'Yes, I do!', likesCount: '100'},
  ]
  let postElement = postData.map(newPost => <Post message={newPost.message} likesCount={newPost.likesCount}/>)
  
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder="Hello"> </textarea>
        </div>
        <div className={cssMyPosts.posts}>
          <button>Add</button>
          <button>Delete</button>
        </div>
      
      </div>
      
      <div className={cssMyPosts.post}>
        {postElement}
      </div>
    </div>
  )
}
export default MyPosts 