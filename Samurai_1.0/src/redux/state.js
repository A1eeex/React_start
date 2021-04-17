import React from "react";
import { rerenderEntireThree } from "../render";

let state = {
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
}
export let addNewDialogMessage = () => {
  
  let newMessage = {
    id: 5,
    message: state.dialogsPage.firstMessage
  };
  state.dialogsPage.messages.push(newMessage);
  console.log(
    'NEW MESsAGE',
  );
  
  rerenderEntireThree(state)
}

export let updateNewDialogMessageText = (newMessageText) => {
  state.dialogsPage.firstMessage = newMessageText;
  rerenderEntireThree(state)
}

export let addMesagePosts = () => {
  let newPostMessage = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPostMessage)
  state.profilePage.newPostText = ""
  rerenderEntireThree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state)
}
export default state