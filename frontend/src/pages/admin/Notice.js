import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form } from 'react-bootstrap';
import Button from "@restart/ui/esm/Button";
import { Row, Col } from 'react-bootstrap';
import {FloatingLabel } from 'react-bootstrap';




export default function Notice() {


    const url_users = "http://localhost:3001/api/admin/post_notice_user";
    const url_outsiders = "http://localhost:3001/api/admin/post_notice_outsiders";

    const [data, setData] = useState({
        date: "",
        title: "",
        comment: "",
        user: ""
        
    });

    const submit = (e) => {

        e.preventDefault();

        if(data.user == "users"){
            axios.post(url_users, {
                date: data.date,
                title: data.title,
                comment: data.comment,
                
    
            })
                .then(res => {
                    if (res.status === 200) {
                        window.alert("Notice Posted Successfully!!")
                    }
    
                })
                .catch(error => {
                    console.log(error);
                    window.alert("Theres Some Error while posting the notice")
                })
    
        }else if(data.user == "outsiders"){
            axios.post(url_outsiders, {
                date: data.date,
                title: data.title,
                comment: data.comment,
                
    
            })
                .then(res => {
                    if (res.status === 200) {
                        window.alert("Notice Posted Successfully!!")
                    }
    
                })
                .catch(error => {
                    console.log(error);
                    window.alert("Theres Some Error while posting the notice")
                })
    
        }
        


    }

    function handle(e) {

        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);

    }
    return (
        <>
            <div>
            </div>
            <div className="message">
        <h4 style={{ paddingLeft: '150px', paddingBottom: '25px' }}>Post Notice</h4>
        <Form onSubmit={(e) => submit(e)}>
      
      <FloatingLabel  label="Title of the Notice" className="mb-3">
        <Form.Control type="text" id="title"  required value={data.title}
              onChange={(e) => handle(e)} placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel label="Enter Your Comment">
        <Form.Control
          as="textarea"
          id="comment"
          required
          value={data.comment}
              onChange={(e) => handle(e)}
          placeholder="commentfhhfh"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div style={{"marginTop": "10px"}} className="formField">
          <label className="formFieldLabel" htmlFor="user">
            Post Notice For<br />
            <select
              className="drop"
              onChange={(e) => handle(e)}
              id="user"
              name="password"

            >
              <option select value="Select">Select</option>
              <option value="users">Users</option>
              <option value="outsiders">Outsiders</option>
              

            </select>
          </label>
        </div>
      <button type="submit" className="formFieldButton comment" >Post Notice</button>{" "}
    </Form>
      </div >
        </>
    )
}
