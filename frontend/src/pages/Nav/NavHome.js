import React from 'react';
import Button from "@restart/ui/esm/Button";
import { Card } from 'react-bootstrap';

function NavHome() {
  return (
    <>
    
      <div className='home'>
      </div>
      <div className="notify">

        <Card border="primary">
          <Button className="notification">Notification</Button>
          <Card.Body className="mainpart">
            <Card.Text style={{ color: "black" }}>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NavHome;
