import React from 'react';
import Navbar from "./Navbar";
import { connect } from "react-redux";

// const NavbarContainer = () => {
//
//   return (
//     <StoreContext.Consumer>{
//       (store)=> {
// let state = store.getState().siteBarReducer
//
//   return  <Navbar
//     siteBarReducer={store.getState().siteBarReducer}
//   />
//       }
//     }
//     </StoreContext.Consumer>
//   )
// }

const mapStateToProps = (state) => {
  return {
    siteBarReducer: state.siteBarReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  
  }
}
const NavbarContainer = connect (mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarContainer
