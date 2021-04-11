import React from 'react'
import css_profile_module from "./MyPosts.module.css";
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea placeholder="Hello"></textarea>
        <button>Add</button>
        <button>Ddlete</button>
      </div>

      <div className={css_profile_module.post}>
     <Post message="Hi Bro" likesCount="0" />
   
     <Post message="Alex car" likesCount="32" />
  
  
      </div>
    </div>
  )
}
export default MyPosts 