const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  postData: [
    {id: 1, message: 'Hi bro!', likesCount: '3'},
    {id: 2, message: 'Do you study React?', likesCount: '9'},
    {id: 3, message: 'Yes, I do!', likesCount: '100'},
  ],
  newPostText: "My best page"
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPostMessage = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return{
        ...state,
        postData: [...state.postData, newPostMessage],
        newPostText: ""
        
      };
      // break;
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText:action.newText
      };
      // break;
    }
    default:
      return state;
  }
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