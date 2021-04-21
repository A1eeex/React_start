import { combineReducers } from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import siteBarReducer from "./siteBar-reduser";
const {createStore} = require("redux");

let reducers = combineReducers({
  profilePageReducer: profilePageReducer,
  dialogsPageReducer: dialogsPageReducer,
  siteBarReducer: siteBarReducer
});
let store = createStore(reducers)

export default store