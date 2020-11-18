import React, { useEffect } from "react";

import { Switch, Route, Link, useParams } from "react-router-dom";
import { Veterinary, Patient, Clinic } from "../users";

function Appointment(props) {

  
  const { role } = useParams();
  useEffect(() => {
    // console.log(Auth)
  }, [role]);
  const renderComponent = (role) => {
    switch (role) {
      case "veterinary":
        return <Veterinary />;
      case "patient":
        return <Patient />;
      case "clinic":
        return <Clinic />;
      default:
        return;
    }
  };

  return renderComponent(role);
}

export default Appointment;