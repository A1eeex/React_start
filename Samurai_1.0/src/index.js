import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, message: 'Hi bro!', likesCount: '3'},
  {id: 2, message: 'Do you study React?', likesCount: '9'},
  {id: 3, message: 'Yes, I do!', likesCount: '100'},
]
let dialogs = [
  {id: 1, name: 'Dana'},
  {id: 2, name: 'Senia'},
  {id: 3, name: 'Monica'},
  {id: 4, name: 'Tom'},
  {id: 5, name: 'Robert'},
]
let messages = [
  {id: 1, message: 'WOoW'},
  {id: 2, message: 'Good luck!!'},
  {id: 3, message: 'Rect go to Top!'},
  {id: 4, message: '25!'},
]
ReactDOM.render(
  <React.StrictMode>
    
    <App postData={postData} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
