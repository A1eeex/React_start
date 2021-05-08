import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import { Route } from "react-router-dom"
import { RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
               render={() => < DialogsContainer/>} />
        <Route path='/profile/:userId?'
               render={() => < ProfileContainer/>}/>
        
        <Route path="/news" render={(RoteNews)}/>
        <Route path="/music" render={(RoteMusic)}/>
        <Route path="/settings" render={(RoteSettings)}/>
        
        <Route path='/users' render={() => < UsersContainer/>}/>
        <Route path='/login' render={() => < LoginPage/>}/>
      </div>
    </div>
  )
}

export default App;
