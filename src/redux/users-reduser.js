const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://spy.com/wp-content/uploads/2019/06/shutterstock_132279857-e1561418851131.jpg",
    //   followed: false,
    //   fullName: 'Alex!',
    //   status: 'I m Front End developer',
    //   location: {city: 'Zbarazh', county: 'Ukraine'}
    // },
    // {
    //   id: 2,
    //   photoUrl: "https://www.calwellness.org/wp-content/uploads/2018/10/croppedalexphoto-480x480-c-center.jpg",
    //   followed: true,
    //   fullName: 'Egor!',
    //   status: 'I m Front End developer to',
    //   location: {city: 'Dniporo', county: 'Ukraine'}
    // },
    // {
    //   id: 3,
    //   photoUrl: "https://thoughtcatalog.com/wp-content/uploads/2018/05/questionstoaskagirl2.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all",
    //   followed: false,
    //   fullName: 'Andre!',
    //   status: 'I m locking for Alex',
    //   location: {city: 'Krakow', county: 'Poland'}
    // }
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, follow: true}
          }
          return u
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, follow: false}
          }
          return u
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    
    default:
      return state;
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW, userId
  }
}
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW, userId
  }
}
export const setUsersAC = (users) => {
  return {
    type: SET_USERS, users
  }
}

export default usersReducer