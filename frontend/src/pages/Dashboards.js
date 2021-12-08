import React, { useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from "@restart/ui/esm/Button";
import { HashRouter as Router, Route,NavLink } from "react-router-dom";

import NavHome from './Nav/NavHome';
import Apply from './Nav/Apply';
import Profile from './Nav/Profile';
import Allotment from './Nav/Allotment';
import Rooms from './Nav/Rooms';
import Message from './Nav/Message';
import About from './Nav/About';
import Contact from './Nav/contactus';
import Payment from './Nav/Payment';


// window.location.reload();

function Dashboards() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>

          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <NavLink className="nav-link" to="/Dashboard/home">Home</NavLink>
          <NavLink className="nav-link" to="/Dashboard/about">About</NavLink>
          <NavLink className="nav-link" to="/Dashboard/contacts">Contact US</NavLink>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button style={{marginLeft:'20px'}} variant="contained">Logout</Button>
          </Form>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <div className="footer"><h5 className="footer-text">A Portal for Hostel Room Allocation and Management | Copyright@2021</h5></div> */}
       
       
        <Route path="/Dashboard/home" component={NavHome} />
        <Route path='/Dashboard/profile' component={Profile} />
        <Route path='/Dashboard/apply' component={Apply} />
        <Route path='/Dashboard/allotment' component={Allotment} />
        <Route path='/Dashboard/rooms' component={Rooms} />
        <Route path='/Dashboard/message' component={Message} />
        <Route path='/Dashboard/about' component={About} />
        <Route path='/Dashboard/contacts' component={Contact} />
        <Route path='/Dashboard/payment' component={Payment} />
       


      </IconContext.Provider>
    </>
  );
}

export default Dashboards;
