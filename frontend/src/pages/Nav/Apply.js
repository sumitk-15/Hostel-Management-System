import React from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { Component, useState } from "react";

function Apply() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Prn, setPrn] = useState("");
  const [No, setNo] = useState("");
  const [Caddress, setCaddress] = useState("");
  const [Paddress, setPaddress] = useState("");
  const [Year, setYear] = useState("");
  const [Branch, setBranch] = useState("");
  const [PreExam, setPreExam] = useState("");
  const [Score, setScore] = useState("");
  const [Category, setCategory] = useState("");
  const [Bgroup, setBgroup] = useState("");
  const [Gender, setGender] = useState("");
  const [Handicap, setHandicap] = useState("");
  const [Allergy, setAllergy] = useState("");


  const Apply = () =>{
    Axios.post('http://localhost:3001/Apply',{
        name: Name,
        email: Email,
        prn:Prn,
        no:No,
        caddress:Caddress,
        paddress:Paddress,
        year:Year,
        branch:Branch,
        preexam:PreExam,
        score:Score,
        category: Category,
        bgroup:Bgroup,
        gender:Gender,
        handicap:Handicap,
        allergy:Allergy,
        
    }).then((response) => {
        console.log(response)
        alert("Logged in successfully")
    }).catch(error => {
      console.error(error)
    })
     
  };
  
  return (
    <div className='reports'>
   <div className="apply-form">
      <h2 style={{textAlign:'center'}}>Application Form</h2>
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="formFieldInput"
              placeholder="Enter your Full Name"
              name="fullname"
              required
              onChange={(e) => {
                setName(e.target.value);
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
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              PRN No
            </label>
            <input
              type="text"
              id="prn"
              className="formFieldInput"
              placeholder="Enter your PRN No"
              name="prn"
              required
              onChange={(e) => {
                setPrn(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Contact No
            </label>
            <input
              type="number"
              id="ContactNo"
              className="formFieldInput"
              placeholder="Enter your Contact No"
              name="ContactNo"
              required
              onChange={(e) => {
                setNo(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Current Address
            </label>
            <input
              type="text"
              id="caddress"
              className="formFieldInput"
              placeholder="Enter your Current Address"
              name="cAddress"
              required
              onChange={(e) => {
                setCaddress(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Permanant Address
            </label>
            <input
              type="text"
              id="paddress"
              className="formFieldInput"
              placeholder="Enter your Permanant Address"
              name="paddress"
              required
              onChange={(e) => {
                setPaddress(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Year of study
            </label>
            <input
              type="number"
              id="year"
              className="formFieldInput"
              placeholder="Enter your Year of study"
              name="year"
              required
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Branch 
            </label>
            <input
              type="text"
              id="branch"
              className="formFieldInput"
              placeholder="Enter your Branch "
              name="branch"
              required
              onChange={(e) => {
                setBranch(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Previous Examination
            </label>
            <input
              type="text"
              id="exam"
              className="formFieldInput"
              placeholder="Enter your Previous Examination "
              name="exam"
              required
              onChange={(e) => {
                setPreExam(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Score
            </label>
            <input
              type="text"
              id="score"
              className="formFieldInput"
              placeholder="Enter your Score "
              name="score"
              required
              onChange={(e) => {
                setScore(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Category of admission
            </label>
            <input
              type="text"
              id="category"
              className="formFieldInput"
              placeholder="Enter your Category of admission"
              name="category"
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
            Blood group (in case of medical enjury)
            </label>
            <input
              type="text"
              id="bgroup"
              className="formFieldInput"
              placeholder="Enter your Blood group (in case of medical enjury)"
              name="bgroup"
              required
              onChange={(e) => {
                setBgroup(e.target.value);
              }}
            />
          </div>
          <div className="radio">
            <p>gender</p>
          <label>
            <input
              type="radio"
              value="Male"
              name="gender"
              id="handicap"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              name="gender"
              id="handicap"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
        Female
          </label>
        </div>

          <div className="radio">
            <p style={{marginTop:'5px'}} >Are you handicap</p>
          <label>
            <input
              type="radio"
              value="Yes"
              name="handicap"
              id="handicap"
              onChange={(e) => {
                setHandicap(e.target.value);
              }}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="No"
              name="handicap"
              id="handicap"
              onChange={(e) => {
                setHandicap(e.target.value);
              }}
            />
            No
          </label>
        </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
            Any medical enjury or medical allergy 
            </label>
            <input
              type="text"
              id="allergy"
              className="formFieldInput"
              placeholder="Any medical enjury or medical allergy"
              name="allergy"
              onChange={(e) => {
                setAllergy(e.target.value);
              }}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton" onClick={Apply}>Sign In</button>{" "}
           
          </div>

        </form>
      </div>
    </div>
  );
}

export default Apply;
