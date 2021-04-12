import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder="Hello"> </textarea>
        </div>
        <div  className={cssMyPosts.posts}>
          <button>Add</button>
          <button>Delete</button>
        </div>
      
      </div>
      
      <div className={cssMyPosts.post}>
        <Post message="Hi Bro" likesCount="0"/>
        
        <Post message="Alex car" likesCount="32"/>
      
      
      </div>
    </div>
  )
}
export default MyPosts 