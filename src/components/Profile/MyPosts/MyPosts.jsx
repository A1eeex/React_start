import React from 'react'
import cssMyPosts from "./MyPosts.module.css";
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MAX_LENGTH_10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
  let postElement =
    props.post.map(newPost => <Post message={newPost.message} key={newPost.id} likesCount={newPost.likesCount}/>)
  
  let newPostElement = React.createRef()
  let onAddPost = (values) => {
    props.addPost(values.createNewPostMessage)
  }
  
  return (
    <div className={cssMyPosts.postsBlock}>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={onAddPost}/>
      <div className={cssMyPosts.post}>
        {postElement}
      </div>
    </div>
  )
});

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               placeholder={'Post message'}
               name={'createNewPostMessage'}
               validate={[required, MAX_LENGTH_10]}
        />
      </div>
      <div className={cssMyPosts.posts}>
        <button>Add</button>
        <button>Delete</button>
      </div>
    </form>
  )
}
const MyPostsFormRedux = reduxForm({
  form: "myPostFormReducer"
})(MyPostsForm)

export default MyPosts 