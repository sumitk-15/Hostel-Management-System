import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../css/pages.css';
import '../manager/Rector';
import './Login_page.js';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useHistory, withRouter } from "react-router-dom";
import Footer from './Footer';
import Button from "@restart/ui/esm/Button";
import { FaCreativeCommons } from 'react-icons/fa';
import '../css/common.css';
import axios from 'axios'

function Home(){


  const [notification, setnotification] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:3001/api/users/login/notify").then((response) => {
          console.log(response.data);
          setnotification(response.data.data)


      });
  }, [])


  const [sidebar, setSidebar] = useState(false);

  const history = useHistory();
  function student() {
    let path = `/student`;
    history.push(path);

  }
  function rector() {
    let path = `/rector`;
    history.push(path);
  }
  const showSidebar = () => setSidebar(!sidebar);


    return(

      <>
      <div className='home'>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="notify">
              <Card border="primary">
                <Button className="notification">About Walchand</Button>
                <Card.Body className="mainpart">
                  <Card.Text style={{ color: "black" }}>
                    <p style={{padding:'15px'}}>In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In 2001, added B.E. program in Information Technology with an intake of 60 students.It became autonomous in 2007. The college revamped its academic structure and contents, in consultation with few US and IIT academic experts.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="notify">
              <Card border="primary" className="col-lg-6 mb-4">
                <Button className="notification">About Hostel</Button>
                <Card.Body className="mainpart">
                  <Card.Text style={{ color: "black" }}>
                    <p>The college has an excellent hostel facility for boys since 1958 and for girls since 1987. There are 8 hostel blocks (D1 to D8) with a capacity to accommodate 738 students. In response to the recent trend of increasing number of girl students, two hostel blocks were suitably modified and converted into girls hostels. A total of 130 girl students are presently availing the facility of hostel accommodation. We intend to augment this by another 46 by the beginning of the next academic year.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div style={{float: 'left'}}>
      <Card className='upcomin' style={{ width:'350px' }}>
  <Card.Body>
    <Card.Title>Upcoming Events</Card.Title>
   {
     notification.map(notification =>(
    <Card.Subtitle className="mb-2 text-muted">{notification.Title}</Card.Subtitle>
       
     ))
   }
  </Card.Body>
</Card>
      </div>
      <div style={{float: 'right'}} className="hostel-detail">
                <br />
                <h2>Features of Hostel Management and Allocation System</h2><br />
                <p><strong>1. MANAGE HOSTEL DETAILS. </strong>
                    Hostel wardens can now easily record each detail about the hostel, like the hostel room information such as the warden in charge of a specific hostel, and types of hostel available. This also consists of maintenance applications for each hostel room. This module is perfect for every hostel. It offers a variety of reports such as block list, room allocation list, mess report, joining report, etc. All these to make sure there is a smooth daily operation of the hostel. Also, you can register the details of your employees along with your students on this system. This helps the institution to have first-hand information about each and everyone, and their allocated duty. It also makes contacting very easy for the institution.
                </p><br />
                <p><strong>2. MANAGE ROOM DETAILS.</strong>
                    The system also stores various records of each hostel room available in your institution. The information which includes the number of rooms in each hostel, the number of students that are in each room, the number of students a certain room can accommodate. For each room available, a certain fee is allocated to that room to be paid by interested students by the administration.
                </p><br />
                <p><strong> 3. ALLOCATE ROOM TO STUDENTS. </strong>
                    Room allocation to students is a very important aspect of hostel management for any institution. Students can be assigned rooms based on the number of available rooms in each hostel. Manual allocation of rooms can be tedious and takes time in large to a medium-sized hostel. But with an online system way of doing things, the task is easier, error-free, and efficient.
                </p><br />
                <p><strong>  4. STUDENTS’ FEES COLLECTION. </strong>
                    There is a tedious task of collection and calculation of hostel fee, and with this technology, the collection and calculation of hostel fee just got easier. There is no proper accounting for each fee paid by the student. As an institution owner, you will be delighted with this feature as it shows transparency within the administration.
                </p><br />
                {/* <p><strong>  5. CHECK HOSTEL FEES DEFAULTER. </strong>
                    The administrative staff can check on the students that have defaulted on their hostel fees. They can now forward their names to the institution board. All thanks to the Hostel Management System, it works by not only calculating the hostel fees, but it keeps a record of payment status on each student. An update is prompt when new payments are made, and it generates instant receipts for the payment made. It also helps institutions send automatic messages and emails to defaulters reminding them to renew their payments.
                </p><br /> */}
            </div>
      <div>



            {/* <div className="footer"><h5 className="footer-text">A Portal for Hostel Room Allocation and Management | Copyright@2021</h5></div> */}
        </div>
</>
    );
}

export default Home;










{/* <div className="walchand">

       <h2 style={{marginLeft:'25%', color:'white'}}>Walchand College of Engineering Sangli</h2>
        <h4 style={{marginLeft:'35%',paddingBottom:'10px'}}>An Autonomous Institute</h4>
        </div> */}
       

      {/* <div className="backimg">
      <img className="mainimage" src="../../images/mainimage.png" />
    
      </div> */}


     {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

        {/* <div className="footer"><h5 className="footer-text">A Portal for Hostel Room Allocation and Management | Copyright@2021</h5></div> */}
    