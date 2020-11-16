import React from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import { VeterinaryApproval, VeterinaryBook } from './appointment'

import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "./doctor.scss";

export default function Appointment() {
  return (
    <Card id="card-veterinary">
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
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/veterinary/book`} onClick={(e) => console.log(e)}>
                Book from Pasien
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/veterinary/approval`} onClick={(e) => console.log(e)}>
            Approval
            </NavLink>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/veterinary/book`}>
          <VeterinaryBook />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/veterinary/approval`}
          component={VeterinaryApproval}
        />
      </Switch>
    </Card>
  );
}