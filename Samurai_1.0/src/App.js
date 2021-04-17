import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom"

import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { addNewDialogMessage, updateNewPostText } from "./redux/state";


const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Navbar state={props.state.siteBar.users}/>
      
      <div className='app-wrapper-content'>
        
        <Route path="/dialogs"
               render={() => < Dialogs
                 state={props.state.dialogsPage}
                 addNewDialogMessage={props.addNewDialogMessage}
                 updateNewDialogMessageText={props.updateNewDialogMessageText}
                 
               />}/>
        
        <Route path="/profile"
               render={() => < Profile
                 profilePage={props.state.profilePage}
                 addMesagePosts={props.addMesagePosts}
                 updateNewPostText={props.updateNewPostText}
               />}/>
        <Route path="/news" render={(RoteNews)}/>
        <Route path="/music" render={(RoteMusic)}/>
        <Route path="/settings" render={(RoteSettings)}/>
      </div>
    </div>
  )
}

export default App;
