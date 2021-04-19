import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom"

import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Navbar state={props.state.siteBar.users}/>
      
      <div className='app-wrapper-content'>
        
        <Route path="/dialogs"
               render={() => < Dialogs
                 
                 store={props.store}
                 dispatch={props.dispatch}
                 // dispatchDialogMessage={props.dispatchDialogMessage}
             
                 
               />}/>
        
        <Route path="/profile"
               render={() => < Profile
                 profilePage={props.state.profilePage}
                 dispatch={props.dispatch}
               
               />}/>
        <Route path="/news" render={(RoteNews)}/>
        <Route path="/music" render={(RoteMusic)}/>
        <Route path="/settings" render={(RoteSettings)}/>
      </div>
    </div>
  )
}

export default App;
