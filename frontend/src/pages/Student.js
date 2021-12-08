import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import StudentSignUp from "./StudentSignUp";
import StudentSignIn from "./StudentSignIn";
import "./LoginPage.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from "@restart/ui/esm/Button";
import Dashboards from "./Dashboards";


// import "./Temp.css";
// class Temp extends Component

function Student() {
  
    return (
        <>
        {/* basename="/react-auth-ui/" */}
        <Router>
   
        <div className="Temp">
        <div className="header">
         <h2 className="title">Hostel Allocation and Management System</h2>
         </div>
          <div className="appAside">
          
          <Card border="primary">
                  <Button className="notification">Notification</Button>
                  {/* <h4>It is {new Date().toLocaleTimeString()}.</h4> */}
                  <Card.Body className="mainpart">
                    <Card.Text style={{color:"black"}}>
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
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
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={StudentSignUp} />
            <Route path="/sign-in" component={StudentSignIn} />
            {/* <Route path="/Dashboard" component={Dashboards} /> */}
           
          </div>
          <div className="footer"><h5 className="footer-text">A Portal for Hostel Room Allocation and Management | Copyright@2021</h5></div>
     
        </div>
       
        </Router>
      </>
    );
  
}
export default Student;
