const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const profilePageReducer = (state, action) => {
  

  switch (action.type) {
    case ADD_POST:
      let newPostMessage = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPostMessage)
      state.newPostText = ""
      break;
      
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default: return state;
  }
  return state
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}


export default profilePageReducer;