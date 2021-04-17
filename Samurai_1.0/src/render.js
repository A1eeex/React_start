import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMesagePosts, addNewDialogMessage, updateNewDialogMessageText, updateNewPostText } from "./redux/state"
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireThree = (state)=>{
  console.log('state ;', state);
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addMesagePosts={addMesagePosts}
          updateNewDialogMessageText={updateNewDialogMessageText}
          addNewDialogMessage={addNewDialogMessage}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


