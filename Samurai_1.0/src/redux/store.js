import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import siteBarReducer from "./siteBar-reduser";

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
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);
    
    this._callSubscriber(this._state);
    
  }
}


export default store
window.store = store