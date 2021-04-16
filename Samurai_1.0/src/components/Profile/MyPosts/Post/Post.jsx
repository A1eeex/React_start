import React from 'react'
import css_profile_module from "./Post.module.css";

const Post = (props) => {
  
  return (
    <div className={css_profile_module.post_item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU" alt="post_avatar"/>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    
    </div>
  )
}
export default Post