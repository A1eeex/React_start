import { combineReducers , createStore } from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import siteBarReducer from "./siteBar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPageReducer: dialogsPageReducer,
  sidebar: siteBarReducer,
  usersPage: usersReducer,
  auth: authReducer
  
});
let store = createStore(reducers)
window.store = store

export default store