import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_FULL_NAME = "SET_USERS_FULL_NAME";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
    case DELETE_POST: {
      return {...state, postData: state.postData.filter(p => p.id != action.postId)}
    }
    case SAVE_PHOTO_SUCCESS: {
      debugger
      return {...state, profile: {...state.profile, photos: action.photos} }
    }
    
    default:
      return state;
  }
}

export const addPostActionCreator = (createNewPostMessage) => ({type: ADD_POST,createNewPostMessage})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUsersProfile = (userId) => async (dispatch) =>{
  let response= await profileAPI.getProfile(userId)
      dispatch(setUsersProfile(response.data));
}
export const setUsersFullName = (fullName) => ({type: SET_USERS_FULL_NAME, fullName})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => async (dispatch) =>{
  let response= await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data));
}
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const updateStatus = (status) => async (dispatch) =>{
  let response= await profileAPI.updateStatus(status)
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) =>{
  let response= await profileAPI.savePhoto(file)
      if(response.data.resultCode === 0){
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profilePageReducer;