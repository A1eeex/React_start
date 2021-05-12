import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  
  const postElement =
    props.post.map(newPost => <Post message={newPost.message} key={newPost.id} likesCount={newPost.likesCount}/>)
  
  let newPostElement = React.createRef()
  let onAddPost = (values) => {
    props.addPost(values.createNewPostMessage)
  }

  
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      {/*<form>*/}
      {/*  <div>*/}
      {/*    <textarea onChange={onPostChange}*/}
      {/*              ref={newPostElement}*/}
      {/*              value={props.newPostText}/>*/}
      {/*  </div>*/}
      {/*  <div className={cssMyPosts.posts}>*/}
      {/*    <button onClick={onAddPost}>Add</button>*/}
      {/*    */}
      {/*    <button>Delete</button>*/}
      {/*  </div>*/}
      {/*</form>*/}
      <MyPostsFormRedux onSubmit={onAddPost}/>
      <div className={cssMyPosts.post}>
        {postElement}
      </div>
    </div>
  )
}


const MyPostsForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field component={'textarea'}
                 name={'createNewPostMessage'}
                    />
      </div>
      <div className={cssMyPosts.posts}>
        <button >Add</button>
      
        <button>Delete</button>
      </div>
    </form>
  )
}
const MyPostsFormRedux = reduxForm({
  form: "myPostFormReducer"
})(MyPostsForm)

export default MyPosts 