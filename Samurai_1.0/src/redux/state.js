const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let store = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: 'Hi bro!', likesCount: '3'},
        {id: 2, message: 'Do you study React?', likesCount: '9'},
        {id: 3, message: 'Yes, I do!', likesCount: '100'},
      ],
      newPostText: "My best page"
    },
    dialogsPage: {
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
    },
    
    siteBar: {
      users: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Olia'},
        {id: 3, name: 'Masha'},
      
      ]
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  
  _callSubscriber() {
    console.log("state was changed")
    
  },
  // dispatchDialogMessage(action) {
  //
  //   if (action.type === ADD_MESSAGE) {
  //     let newMessage = {
  //       id: 5,
  //       message: this._state.dialogsPage.firstMessage
  //     };
  //     this._state.dialogsPage.messages.push(newMessage);
  //     this._callSubscriber(this._state)
  //   } else {
  //     if (action.type === UPDATE_MESSAGE) {
  //       this._state.dialogsPage.firstMessage = action.newMessageText;
  //       this._callSubscriber(this._state)
  //     }
  //   }
  // },
  
  
  dispatch(action) {
    
    if (action.type === ADD_POST) {
      let newPostMessage = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(newPostMessage)
      this._state.profilePage.newPostText = ""
      this._callSubscriber(this._state)
      
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.firstMessage
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.dialogsPage.firstMessage = action.newMessageText;
      this._callSubscriber(this._state)
    }
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
export default store
window.store = store