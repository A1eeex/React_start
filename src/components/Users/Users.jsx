import React from 'react';
import styles from "./Users.module.css"

const Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1,
          photoUrl: "https://spy.com/wp-content/uploads/2019/06/shutterstock_132279857-e1561418851131.jpg",
          followed: false,
          fullName: 'Alex!',
          status: 'I m Front End developer',
          location: {city: 'Zbarazh', county: 'Ukraine'}
        },
        {
          id: 2,
          photoUrl: "https://www.calwellness.org/wp-content/uploads/2018/10/croppedalexphoto-480x480-c-center.jpg",
          followed: true,
          fullName: 'Egor!',
          status: 'I m Front End developer to',
          location: {city: 'Dniporo', county: 'Ukraine'}
        },
        {
          id: 3,
          photoUrl: "https://thoughtcatalog.com/wp-content/uploads/2018/05/questionstoaskagirl2.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all",
          followed: false,
          fullName: 'Andre!',
          status: 'I m locking for Alex',
          location: {city: 'Krakow', county: 'Poland'}
        }
      ]
    )
  }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={styles.userAvatar} src={u.photoUrl} alt="avatar_photo"/>
          </div>
          <div>
            {
              u.followed
                ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}> Follow</button>
            }
          </div>
        </span>
          
          <span>
            
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            
            <span>
              <div>{u.location.county}</div>
               <div>{u.location.city}</div>
            </span>
            
          </span>
        
        </div>)
      }
    </div>
  );
};

export default Users;