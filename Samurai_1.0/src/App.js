import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from "react-router-dom"

import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => < Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
          <Route path="/profile" render={() => < Profile postData={props.postData} />}/>
          <Route path="/news" render={(RoteNews)}/>
          <Route path="/music" render={(RoteMusic)}/>
          <Route path="/settings" render={(RoteSettings)}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
