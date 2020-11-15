import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "../../reusable/profile";
import { PatientHistory, PatientBook } from './appointment'

import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "./doctor.css";

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
            <Nav.Link href="#book" onClick={(e) => console.log(e)}>
              <Link to={`${process.env.PUBLIC_URL}/user/patient/book`}>
                Book from Pasien
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#history">
              <Link to={`${process.env.PUBLIC_URL}/user/patient/history`}>
              history
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/patient/book`}>
          <PatientBook />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/patient/history`}
          component={PatientHistory}
        />
      </Switch>
    </Card>
  );
}