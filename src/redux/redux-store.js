import { combineReducers } from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import siteBarReducer from "./siteBar-reduser";
import usersReducer from "./users-reduser";
const {createStore} = require("redux");

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPageReducer: dialogsPageReducer,
  sidebar: siteBarReducer,
  usersPage: usersReducer
});
let store = createStore(reducers)
window.store= store

export default store