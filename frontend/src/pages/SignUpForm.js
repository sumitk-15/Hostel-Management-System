import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
// import "./Rector.css";
function SignUpForm() {

  const [recUname, setRecUname] = useState("");
  const [recEmail, setRecEmail] = useState("");
  const [recPass, setRecPass] = useState("");
  const [recCpass, setRecCpass] = useState("");

  const Rector = () =>{
    Axios.post('http://localhost:3001/Rector',{
        uname: recUname,
        email: recEmail,
        pass: recPass,
        cpass: recCpass,
    }).then((response) => {
        console.log(response)
        
    }).catch(error => {
      console.error(error)
    })
   
  };

  return(
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              required
              onChange={(e) => {
                setRecUname(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              required
              onChange={(e) => {
                setRecEmail(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              required
              onChange={(e) => {
                setRecPass(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="formFieldInput"
              placeholder="Confirm Password"
              name="cpassword"
              required
              onChange={(e) => {
                setRecCpass(e.target.value);
              }}
            />
          </div>
       


          <div className="formField">
            <button  className="formFieldButton" onClick={Rector}>Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  
}
export default SignUpForm;