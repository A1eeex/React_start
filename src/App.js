import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom"
import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import Profile from "./components/Profile/Profile";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


const App = (props) => {
  return (

    <div className="app-wrapper">
      <Header />

      <NavbarContainer

      />

      <div className='app-wrapper-content'>

        <Route path="/dialogs"
          render={() => < DialogsContainer
          />} />

        <Route path="/profile"
          render={() => < Profile
          

          />} />
        <Route path="/news" render={(RoteNews)} />
        <Route path="/music" render={(RoteMusic)} />
        <Route path="/settings" render={(RoteSettings)} />
      </div>
    </div>
  )
}


export default App;
