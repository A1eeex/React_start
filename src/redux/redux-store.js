import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import siteBarReducer from "./siteBar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPageReducer: dialogsPageReducer,
  sidebar: siteBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.__store__ = store

export default store