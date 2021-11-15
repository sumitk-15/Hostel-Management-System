import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router';
import Dashboard from "./Dashboard";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function StudentSignIn(){

  // const [Email, setEmail] = useState("");
  // const [Pass, setPass] = useState("");
  // const Login = () =>{
  //   Axios.post('http://localhost:3001/login',{
  //       email: Email,
  //       pass: Pass,
  //   }).then((response) => {
  //       console.log(response)
  //       alert("Logged in successfully")
  //   }).catch(error => {
  //     console.error(error)
  //   })
   
  // };

  const url = "http://localhost:3001/api/users/login";

  const [data,setData] = useState({ 
    email:"",
    password:""
  });

  function submit(e) {

    e.preventDefault();  
    axios.post(url,{

    email : data.email,
    password : data.password
     
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })

    

  }
 
  function handle(e) {

    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata);
    console.log(newdata);

  }


    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={(e) => submit(e)}>
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

              // required
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
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
              value={data.pass}
              required
              onChange={(e) => handle(e)}
              // required
              // onChange={(e) => {
              //   setPass(e.target.value);
              // }}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" type="submit">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>

        </form>
      </div>
    );
  }


export default StudentSignIn;
