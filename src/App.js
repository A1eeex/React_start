import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom"

import { RoteDialog, RoteProfile, RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
  console.log('state', props.store.getState());
  return (

    <div className="app-wrapper">
      <Header />

      <Navbar siteBar={props.state.siteBar}
        store={props.store}

      />

      <div className='app-wrapper-content'>

        <Route path="/dialogs"
          render={() => < Dialogs

            store={props.store}
            dispatch={props.dispatch}
          />} />

        <Route path="/profile"
          render={() => < Profile
            store={props.store}
            dispatch={props.dispatch}

          />} />
        <Route path="/news" render={(RoteNews)} />
        <Route path="/music" render={(RoteMusic)} />
        <Route path="/settings" render={(RoteSettings)} />
      </div>
    </div>
  )
}


export default App;
