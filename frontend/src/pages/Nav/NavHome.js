import React, {useEffect, useState}from 'react';
import Button from "@restart/ui/esm/Button";
import { Card } from 'react-bootstrap';
import Footer from './Footer';
import axios from 'axios';
import {useHistory, BrowserRouter as Router, Route} from 'react-router-dom';
import Student from '../Student';


function NavHome() {

const history = useHistory();
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //       axios.get("http://localhost:3001/api/users/isloggedin")
  //       .then(res => {
  //         if (res.status===200){
  //           console.log("hello")
  //             history.push('/student/login')
  //         }
  //         else{

  //         }
  //       }) .catch(error => {
  //         console.log(error);
  //         // window.alert("Invalid Credentials")
  //       })
    
  // });
  return (
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
        <marquee ><p className="marquee">This is notification This is notification This is notification This is notification This is notification This is notification{'\n'}n This is notification </p></marquee>
    <Footer />
    <Route path="/student" component={Student}/>
    </>
  );
}

export default NavHome;
