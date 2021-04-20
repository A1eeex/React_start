const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.firstMessage
      };
      state.messages.push(newMessage);
      break;
    case UPDATE_MESSAGE:
      state.firstMessage = action.newMessageText;
      break;
    default: return state;
  }
  return state
}
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateMessageActionCreator = (message) => {
  return {
    type: UPDATE_MESSAGE, newMessageText: message
  }
}
export default dialogsPageReducer;