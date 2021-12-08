import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router';
import Dashboard from "./Dashboard";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import auth from "../auth";
import NavHome from "./Nav/NavHome";
// import Cookies from 'universal-cookie';
 
// const cookies = new Cookies();
// axios.defaults.withCredentials = true;



function StudentSignIn(){


  <Route path='/Dashboard/home' component={NavHome} />


  const url = "http://localhost:3001/api/users/login";

  const [data,setData] = useState({ 
    email:"",
    password:""
  });

const  submit = (e)=> {

    e.preventDefault(); 

    axios.post(url, {

    
    email : data.email,
    password : data.password
     
    })
    .then(res => {
     // localStorage.setItem('token', res.token);
      console.log(res);
      console.log(res.status);
     
      if(res.status===200){
        document.location.href = '/Dashboard/home';
      }
      else{
        window.alert("no")
      }
      
    })
    .catch(error => {
      console.log(error);
      window.alert("Invalid Credentials")
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
