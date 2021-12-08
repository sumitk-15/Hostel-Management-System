import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { RecSideBar } from './RecSideBar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from "@restart/ui/esm/Button";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import RectHome from './Rector/RectHome';
import AllocRooms from './Rector/AllocRooms';
import About from './Nav/About';
import Contact from './Nav/contactus';
import Applications from './Rector/Applications';
import Profile from './Rector/Profile';
import Notice from './Rector/Notice';
 function RectorDash() {
    
        const [sidebar, setSidebar] = useState(false);

        const showSidebar = () => setSidebar(!sidebar);
      
        return (
            <>
            <IconContext.Provider value={{ color: '#fff' }}>
              <div className='navbar'>
      
                <Link to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <NavLink className="nav-link" to="/Dash/home">Home</NavLink>
                <NavLink className="nav-link" to="/Dash/about">About</NavLink>
                <NavLink className="nav-link" to="/Dash/contacts">Contact US</NavLink>
      
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
                  {RecSideBar.map((item, index) => {
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
             
             
              <Route path="/Dash/home" component={RectHome} />
              <Route path="/Dash/profile" component={Profile} />
              <Route path="/Dash/notice" component={Notice} />
              <Route path='/Dash/about' component={About} />
              <Route path='/Dash/contacts' component={Contact} />
              <Route path='/Dash/allocrooms' component={AllocRooms} />
              <Route path='/Dash/applications' component={Applications} />
              
             
      
      
            </IconContext.Provider>
          </>
    );
}
export default RectorDash;