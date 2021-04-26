import React from 'react';
import styles from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../assec/img/user_.png"

class UsersC extends React.Component {
  constructor(props) {
    super(props)
       axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items)
        })
  }
  
  render (){
    return (
      <div>
        <button onClick={this.getUsers}>Get users</button>
        {
          this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={styles.userAvatar} src={u.photos.samall != null ? u.photos.samall : userPhoto}
                 alt="avatar_photo"/>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {
                  this.props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
                }}> Follow</button>
            }
          </div>
        </span>
          
            <span>
            
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            
            <span>
              <div>{/*{u.location.country}*/}</div>
               <div>{/*{u.location.city}*/}</div>
            </span>
          </span>
          </div>)
        }
      </div>
    );
  }
}

export default UsersC;