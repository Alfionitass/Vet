import React from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import { VeterinaryApproval, VeterinaryBook } from './appointment'

import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "./doctor.css";

export default function Appointment() {
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
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/veterinary/appointment`} >
              Patient Book
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/veterinary/history`} >
            History
            </NavLink>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/veterinary/appointment`}>
          <VeterinaryApproval />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/veterinary/history`}
          component={VeterinaryBook}
        />
      </Switch>
    </Card>
  );
}
