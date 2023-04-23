import React from "react";
import MultiSteps from "./Confirm/Steps";
import { useEffect, useState } from "react"
import axios from "axios";

function Confirm() {
  const [isOpen, setIsOpen] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/admin/secondformstatus").then((response) => {
      console.log(response.data.status);
      setIsOpen(response.data.status)
    });
  }, [])
  if (isOpen == 0) {
    return (
      <>
        <h2>This Form is not yet open</h2>
      </>
    )
  } else {
    return (
      <div className="App">
        <MultiSteps />
      </div>
    );
  }

}

export default Confirm;