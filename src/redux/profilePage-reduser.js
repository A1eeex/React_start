import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_FULL_NAME = "SET_USERS_FULL_NAME";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    {id: 1, message: 'Hi bro!', likesCount: '3'},
    {id: 2, message: 'Do you study React?', likesCount: '9'},
    {id: 3, message: 'Yes, I do!', likesCount: '100'},
  ],
  profile: null,
  fullName: null,
  status: "empty status"
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostMessage = {
        id: 5,
        message: action.createNewPostMessage,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPostMessage],
      };
      
    }
  
    
    case SET_USERS_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_USERS_FULL_NAME: {
      return {...state, fullName: action.fullName}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    
    default:
      return state;
  }
}

export const addPostActionCreator = (createNewPostMessage) => ({type: ADD_POST,createNewPostMessage})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const getUsersProfile = (userId) => (dispatch) =>{
  profileAPI.getProfile(userId)
    .then(response => {
      dispatch(setUsersProfile(response.data));
    });
}
export const setUsersFullName = (fullName) => ({type: SET_USERS_FULL_NAME, fullName})

export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => (dispatch) =>{
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) =>{
  profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }});
}

export default profilePageReducer;