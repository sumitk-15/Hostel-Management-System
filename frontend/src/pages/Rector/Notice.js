import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form } from 'react-bootstrap';
import Button from "@restart/ui/esm/Button";
import Footer from './Footer';
export default function Notice() {
    const url = "http://localhost:3001/api/users/notice";

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const submit = (e) => {

        e.preventDefault();

        axios.post(url, {

            email: data.email,
            password: data.password

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

    function handle(e) {

        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);

    }
    return (
        <>
        <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="enotice">
                            <Form className="enter-notice" onSubmit={(e) => {submit(e)}}>

                                <Form.Group className="mb-3" controlId="notice">
                                    <Form.Label>Enter Notice</Form.Label>
                                    <Form.Control 
                                    value={data.pass}
                                    required
                                    onChange={(e) => handle(e)}
                                    as="textarea" rows={3} />
                                </Form.Group>
                                <Button className="notification notice" type="submit">Post Notice</Button>
                            </Form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
