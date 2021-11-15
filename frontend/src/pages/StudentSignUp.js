import React, { Component, useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import "./Rector.css";
function StudentSignUp() {


  const url = "http://localhost:3001/api/users/";

  const [data,setData] = useState({
    name:"",
    email:"",
    pass:"",
    cpass:"",
    prn:""
  });

  function submit(e) {

    e.preventDefault();  
    axios.post(url,{
      name : data.name,
      email: data.email,
      prn : data.prn,
      password : data.pass,
      cpassword : data.cpass
    })
    .then(res => {

      // if(res.status===200){
      //   <Redirect to="/Dashboard" />

      // }
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

  

  
  // const Student = async() => {

  //   try{

  //     const response= await axios.post('/signup', {
  //       uname: Uname,
  //       email: Email,
  //       pass: Pass,
  //       cpass: Cpass,
  //       prn: Prn,
  //     });
      
  //     if(response.status===201){
  //       window.alert("Successful");
  //     }
  //     else{
  //       const error=new Error(response.error);
  //       throw error;
  //     }
    
  //   }catch(error){
  //     console.log(error);
  //     window.alert("wrong Credentials");
  //   }
  

  // };

  return (
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
            value={data.pass}
            required
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
          <button className="formFieldButton"  type="submit">Sign Up</button>{" "}
          <Link to="/sign-in" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );

}
export default StudentSignUp;