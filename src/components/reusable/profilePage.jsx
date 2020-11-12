import React,{useEffect} from "react";

import { Switch, Route, Link, useParams } from "react-router-dom";
import { Veterinary, Patient, Clinic } from "../users"
import { Container, Row, Col, Card, Nav } from "react-bootstrap";



export default function Appointment({data}) {
  const { role } = useParams();
  
  const renderComponent = role => {
    switch(role) {
      case 'veterinary':
        return <Veterinary/>;
      case 'patient':
        return <Patient/>;
      case 'clinic':
        return <Clinic/>
      default:
        return;
    }
  }

  return (
    renderComponent(role)
  );
}
