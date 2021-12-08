import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Component, useState } from "react";
import { Row, Form, Col } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import * as CgIcons from 'react-icons/cg';
import { useHistory, withRouter } from "react-router-dom";
import { Redirect, Route } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';



function Profile() {



  const history = useHistory();

  const url = "http://localhost:3001/api/users/recprofile";


  const [data, setData] = useState({
    email: "",
    name: "",
    phoneno: "",
    caddress: ""
  });

  const submit = (e) => {

    e.preventDefault();
console.log("We r in submit");
    axios.post(url, {

      email: data.email,
      name: data.name,
      phoneno: data.phoneno,
      caddress: data.caddress

    })
      .then(res => {

        if (res.status === 200) {
          window.alert("Profile Updated Successfully")
        }
      })
      .catch(error => {
        console.log(error);
        window.alert("Invalid Credentials")
      })



  }

  function handle(e) {

    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);

  }



  ////////////////// fetching start///////////
  const [profileData, setProfileData] = useState([]);

  const getEmployees = () => {
    console.log("hello")
    axios.get("http://localhost:3001/update").then((response) => {
      setProfileData(response.data);
      console.log(response);
    });
  };



  ////////////////// fetching End///////////



  ////////////////image upload  Start/////////////



  // const [uploadStatus, setUploadStatus] = useState('');

  // const imageHandler = (event) => {

  //   const file = event.target.file[0];
  //   const formData = new formData()
  //   formData.append('image', file)

  //   fetch('http://localhost:3001/api/image', {
  //     method: 'POST',
  //     body: formData,
  //     headers: {
  //       'Accept': 'multipart/form-data',
  //     },
  //     credentials: 'include',
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     setUploadStatus(res.msg);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }


  // const [image, setImage] = useState('');

  // useEffect(() => {

  //   fetch('http://localhost:3001/api/image', {
  //     method: 'GET',
  //     headers: {
  //         "Content-Type": 'application/json, charset=UTF-8',
  //         'Accept': 'application/json, text/html',
  //     },
  //     credentials: 'include',
  //   })
  //   .then(data => data.json())
  //   .then((data) => {
  //     console.log(data)
  //     setImage('http://localhost:3001/' + data.image)
  //     console.log(image)
  //   });

  // })

  ////////////////image upload  End/////////////


  return (

    <>

      <div className="left">
        <div className='profile'>
          <h3 className="hello">Hello Admin</h3>

          <div className="prof-icon">
            <CgIcons.CgProfile />
            {/* {image && <img src={image} alt="img"/>} */}
          </div>
          {/* <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} /> */}
          {/* <h2> {uploadStatus} </h2> */}

        </div>
        <div className="prof-form">
          <Form onSubmit={(e) => submit(e)}>
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  //  id="email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                  placeholder="Email"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm="2">
                Full Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text"
                  //  id="name" 
                  value={data.name}
                  onChange={(e) => handle(e)}
                  placeholder="Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="phoneno">
              <Form.Label column sm="2">
                Phone No
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number"
                  //  id="phoneno"
                  value={data.phoneno}
                  onChange={(e) => handle(e)}
                  placeholder="PhoneNo"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="caddress">
              <Form.Label column sm="2">
                Current Address
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" input-type="textarea"
                  //  id="caddress"
                  value={data.caddress}
                  onChange={(e) => handle(e)}
                  placeholder="Current" />
              </Col>
            </Form.Group>

           
            <button className="formFieldButton update" type="submit">Update Profile</button>{" "}
          </Form>

         
          {/* <button className="formFieldButton update" onClick={getEmployees}  type="submit">Update user</button> */}



        </div>
      </div>
      <Footer />
      )



    </>
  )

}

export default Profile;
