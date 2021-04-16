import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  
  const postElement =
    props.post.map(newPost => <Post message={newPost.message} likesCount={newPost.likesCount}/>)
  
  let newPostElement = React.createRef()
  
  let addPost = () => {
  let text = newPostElement.current.value;
  alert(text)
    
    let cleaner = newPostElement.current
    cleaner.value =""
  }
 
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} placeholder="Hello"> </textarea>
        </div>
        <div className={cssMyPosts.posts}>
          <button onClick={addPost}>Add</button>
          
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