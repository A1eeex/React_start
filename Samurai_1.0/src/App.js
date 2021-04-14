import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from "react-router-dom"
import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./AppVirables"


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={(RoteDialog)}/>
          <Route path="/profile" render={(RoteProfile)}/>
          <Route path="/news" render={(RoteNews)}/>
          <Route path="/music" render={(RoteMusic)}/>
          <Route path="/settings" render={(RoteSettings)}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
