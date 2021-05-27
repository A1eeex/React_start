import React from 'react'
import './App.css';
import { BrowserRouter, Route, withRouter } from "react-router-dom"
import { RoteNews, RoteMusic, RoteSettings } from "./components/AppVirables"
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import PreloaderSmall from "./components/common/Preloader/PreloaderSmall";
import { withSuspense } from "./components/Hoc/withSuspense";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized){
    return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavbarContainer/>
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
                 render={withSuspense(DialogsContainer)}
          />
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
}
const mapStateToProps =(state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter ,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJsApp