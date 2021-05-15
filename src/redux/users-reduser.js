import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGEL_IS_FETCHING = "TOGGEL_IS_FETCHING";
const TOGGEL_IS_FOLLOWING_PROGRESS = "TOGGEL_IS_FOLLOWING_PROGRESS";

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
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
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
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGEL_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGEL_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGEL_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGEL_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    
    usersAPI.getUsers(page, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        
      });
  }
  
}
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
      });
  }
}
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
      });
  }
}


export default usersReducer;