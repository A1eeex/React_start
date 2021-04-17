import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';
import { updateNewPostText } from "../../../redux/state";

const MyPosts = (props) => {
  
  const postElement =
    props.post.map(newPost => <Post message={newPost.message} likesCount={newPost.likesCount}/>)
  
  let newPostElement = React.createRef()
  const clearInp= ()=> newPostElement.current.value =""
  
  let addPost = () => {
  let text = newPostElement.current.value;
    props.addMesagePosts(text)
    props.updateNewPostText("")
  }
 let onPostChange = () => {
   let text = newPostElement.current.value;
   props.updateNewPostText(text)
 
 }
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    
                    value={props.newPostText} />
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