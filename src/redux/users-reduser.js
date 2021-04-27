const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    
    case SET_USERS: {
      return {...state, users: action.users}
    }
    
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count }
    }
    
    default:
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})

export default usersReducer;