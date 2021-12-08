import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@restart/ui/esm/Button';




export default class Applications extends React.Component {

    state = {
        person: [],
    };
    // const [profileData, setProfileData] = useState({
    //     person: [],

    // }

    
    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/users/").then((response) => {
    //         setProfileData({person: response.data})
    //             console.log(response.data);

    //     });
    // })
    componentDidMount() {
        axios.get("http://localhost:3001/api/users/reclogin/allocated").then((response) => {
            this.setState({ person: response.data })
            console.log(response.data);
        });
}




    render() {
  
        return (
            <>
                {/* <Button type="submit">View Applications</Button> */}
                <ul>
               {this.state.person.map(person => {
                   <li key={person.id}>{person.fullname}</li>
               })}
                </ul>

            </>
        );
    }



}
