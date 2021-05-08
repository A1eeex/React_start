import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_FULL_NAME = "SET_USERS_FULL_NAME";

let initialState = {
  postData: [
    {id: 1, message: 'Hi bro!', likesCount: '3'},
    {id: 2, message: 'Do you study React?', likesCount: '9'},
    {id: 3, message: 'Yes, I do!', likesCount: '100'},
  ],
  newPostText: "My best page",
  profile: null,
  fullName: null,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostMessage = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPostMessage],
        newPostText: ""
      };
      
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    
    case SET_USERS_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_USERS_FULL_NAME: {
      return {...state, fullName: action.fullName}
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const getUsersProfile = (userId) => (dispatch) =>{
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUsersProfile(response.data));
    });
}
export const setUsersFullName = (fullName) => ({type: SET_USERS_FULL_NAME, fullName})
export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}


export default profilePageReducer;