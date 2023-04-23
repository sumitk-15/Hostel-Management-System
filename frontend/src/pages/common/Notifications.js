import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { Card } from 'react-bootstrap';
import { Card, Row } from 'react-bootstrap';

// import './Dashboard.css';
function Notifications() {


    const [comment, setcomment] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/user/notices_outside").then((response) => {
            console.log(response.data);
            setcomment(response.data.data)


        });
    }, [])


    return (
        <>
         
                {
                    comment.map(comment => (
                        <div className="row">
                        <div className="column">
                        <div className="mard">
                                <div>
                                    <Card.Body>
                                   
                                        <Card.Subtitle className="">{comment.title}</Card.Subtitle>
                                        <br/>
                                        <div className='bd'>
                                        <Card.Subtitle className="block">{comment.textarea}</Card.Subtitle>
                                      </div>

                                    </Card.Body>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
          
        </>
    )
}
export default Notifications;