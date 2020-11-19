import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";
import { PatientHistory, PatientAppointment } from './appointment'

import { Card, Nav } from "react-bootstrap";
// import "./doctor.css";

export default function Appointment(props) {
  return (
    <Card>
      <Card.Header className="nav--menu">
        <Nav
          variant="tabs"
          defaultActiveKey={`#${
            window.location.pathname.split("/")[
              window.location.pathname.split("/").length - 1
            ]
          }`}
        >
          <Nav.Item>
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/patient/appointment`} onClick={(e) => console.log(e)}>
                Appointment
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/patient/history`} onClick={(e) => console.log(e)}>
                History
            </NavLink>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/patient/appointment`}>
          <PatientAppointment />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/patient/history`}
          component={PatientHistory}
        />
      </Switch>
    </Card>
  );
}
