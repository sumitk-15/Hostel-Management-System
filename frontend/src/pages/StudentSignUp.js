import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavHome from "./Nav/NavHome";
import axios from 'axios';
import Dashboards from "./Dashboards";
// import "./Rector.css";
import Student from "./Student";
import StudentSignIn from "./StudentSignIn";

function StudentSignUp(props) {

let history=useHistory();


  const url = "http://localhost:3001/api/users/";

  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: "",
    prn: ""
  });

  function submit(e) {

    e.preventDefault();
    axios.post(url, {
      name: data.name,
      email: data.email,
      prn: data.prn,
      password: data.pass,
      cpassword: data.cpass
    })
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          window.alert("Account Created Successfully... Log in to Continue!!");
          history.push('/sign-in')
        }
        
      })
      .catch(error => {
        window.alert("Email or Prn already in use")
        console.log(error);
      })



  }

  function handle(e) {

    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);

  }

  return (
    <>
      <div className="formCenter">
        <form className="formFields" onSubmit={(e) => submit(e)}>
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
              value={data.name}
              required
              onChange={(e) => handle(e)}


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
              value={data.email}
              required
              onChange={(e) => handle(e)}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              PRN No
            </label>
            <input
              type="text"
              id="prn"
              className="formFieldInput"
              placeholder="Enter your PRN No"
              name="prn"
              value={data.prn}
              required
              onChange={(e) => handle(e)}
            // onChange={(e) => {
            //   setPrn(e.target.value);
            // }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="pass"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              required
              value={data.pass}
              onChange={(e) => handle(e)}
            // onChange={(e) => {
            //   setPass(e.target.value);
            // }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpass"
              className="formFieldInput"
              placeholder="Confirm Password"
              name="cpassword"
              required
              value={data.cpass}
              onChange={(e) => handle(e)}
            // onChange={(e) => {
            //   setCpass(e.target.value);
            // }}
            />
          </div>



          <div className="formField">
            <button className="formFieldButton" type="submit">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
      <Route path="/sign-in" component={StudentSignIn} />


      </>
      );

}
      export default StudentSignUp;