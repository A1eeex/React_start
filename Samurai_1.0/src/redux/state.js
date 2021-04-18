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
        {id: 4, message: 'Yo!!'},
      ],
      firstMessage: "YO Bro!"
    },
    
    siteBar: {
      users: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Olia'},
        {id: 3, name: 'Masha'},
      
      ]
    }
  },
  getState (){
   
  
    return  this._state
  },
  _callSubscriber() {
    console.log("state was changed")
    
  },
  addNewDialogMessage() {
    
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.firstMessage
    };
    this._state.dialogsPage.messages.push(newMessage);
    console.log(
      'NEW MESsAGE',
    );
    
    this._callSubscriber(this._state)
  },
  updateNewDialogMessageText(newMessageText) {
    this._state.dialogsPage.firstMessage = newMessageText;
    this._callSubscriber(this._state)
  },
  addMesagePosts() {
    
    let newPostMessage = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPostMessage)
    this._state.profilePage.newPostText = ""
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
   subscribe  (observer)  {
    this._callSubscriber = observer
  }
  
}




export default store
window.store = store