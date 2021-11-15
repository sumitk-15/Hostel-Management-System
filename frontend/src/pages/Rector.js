import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import "./LoginPage.css";


// import "./Temp.css";
// class Temp extends Component

function Rector() {
 
    return (
      <>
      <Router basename="/react-auth-ui/">
         <div className="header">
         <h2 className="title">Hostel Allocation and Management System</h2>
         </div>
        <div className="Temp">
          
          <div className="rec-appAside">
           
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink to="/sign-in" activeClassName="formTitleLink-active" className="formTitleLink">
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink exact to="/" activeClassName="formTitleLink-active" className="formTitleLink">
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
        <div className="footer-rec"><h5 className="footer-text">A Portal for Hostel Room Allocation and Management | Copyright@2021</h5></div>
        
      </Router>
      </>
    );
}



export default Rector;
