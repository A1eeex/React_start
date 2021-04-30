const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
  dialogs: [
    {id: 1, name: 'Dana'},
    {id: 2, name: 'Senia'},
    {id: 3, name: 'Monica'},
    {id: 4, name: 'Tom'},
    {id: 5, name: 'Robert'},
  ],
  messages: [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'Perfecto!'},
    {id: 3, message: 'Do you steady React?'},
  
  ],
  firstMessage: "Yo Bro!"
};

const dialogsPageReducer = (state= initialState, action) => {
  
  
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.firstMessage
      };
      return  {
        ...state,
        messages: [...state.messages, newMessage],
        firstMessage:""
      }
      // stateCopy.messages.push(newMessage);
      
    case UPDATE_MESSAGE:
      return{
        ...state,
        firstMessage: action.newMessageText,
      }
    default: return state;
  }
}

export const addMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessage = (message) => {
  return {
    type: UPDATE_MESSAGE, newMessageText: message
  }
}

export default dialogsPageReducer;