import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import './pages.css';
import './Rector.js';
import './Student.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


function Home(){
    return(
      <div className="backimg">
        <h1>Walchand College of Engineering Sangli</h1>
        <h3> An Autonomous Institute</h3>
      <Card className="maincard"  style={{ width: '19rem' }}>
          <Card.Body>
            <Card.Title>Hostel Allocation and Management System</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Select Your Role</Card.Subtitle>
            <Card.Text>
              
            </Card.Text>
            <NavLink className="link-rector" to="/Dashboard/home"> Rector</NavLink>
            <NavLink className="link-student" to="/Student"> Student</NavLink>
          
          </Card.Body>
      </Card>

      </div>

    );
}

export default Home;