import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user2_.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const User = ({user, followingInProgress, unfollow, follow}) => {
  
  return (
    <div>
          <span>
          <div>
            <NavLink to={'/profile/' + user}>
            <img className={styles.userAvatar} src={user.photos.small != null ? user.photos.small : userPhoto}
                 alt="avatar_photo"/>
              </NavLink>
          </div>
          <div>
            {
              user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                            unfollow(user.id)
                          }}>Unfollow </button>
    
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                            follow(user.id)
                          }}> Follow </button>
            }
          </div>
        </span>
      
      <span>
            
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            
            <span>
              <div>{'user.location.country'}</div>
               <div>{'{user.location.city'}</div>
            </span>
          </span>
    </div>)
  
};

export default User;