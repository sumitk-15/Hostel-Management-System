import React, {useState} from 'react'
import { Row, Form, Col, FloatingLabel } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.js';
import axios from 'axios';
function Message() {

  const url = "http://localhost:3001/api/users/message";

  const [data, setData] = useState({
    name: "",
    email: "",
    roomno: "",
    comment: ""
  });

  function submit(e) {

    e.preventDefault();
    axios.post(url, {
      name: data.name,
      email: data.email,
      roomno: data.roomno,
      comment: data.comment
    })
      .then(res => {
       
        if(res.status===200){
          window.alert("Message Sent to Rector");
        }
      })
      .catch(error => {
        console.log(error);
        window.alert("Please Enter Valid Data");

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
      <div className="message">
        <h4 style={{ paddingLeft: '150px', paddingBottom: '25px' }}>Post Your Queries</h4>
        <Form onSubmit={(e) => submit(e)}>
      <FloatingLabel  label="Email" className="mb-3">
        <Form.Control type="Email" id="email" value={data.email}
              onChange={(e) => handle(e)} placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel  label="Name" className="mb-3">
        <Form.Control type="text" id="name" value={data.name}
              onChange={(e) => handle(e)} placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel label="Room No" className="mb-3">
        <Form.Control type="number" id="room" value={data.room}
              onChange={(e) => handle(e)} placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel label="Enter Your Comment">
        <Form.Control
          as="textarea"
          id="comment"
          value={data.comment}
              onChange={(e) => handle(e)}
          placeholder="commentfhhfh"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <button type="submit" className="formFieldButton comment" >Send to Rector</button>{" "}
    </Form>
      </div >
    <Footer />
    </>
  )
}
export default Message;