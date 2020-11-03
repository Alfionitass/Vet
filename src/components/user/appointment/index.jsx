import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "../../reusable/profile";
import AppointmentBook from "./book";
import Approval from "./approval";

import { Container, Row, Col, Card, Nav } from "react-bootstrap";

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
            <Nav.Link href="#book" onClick={(e) => console.log(e)}>
              <Link to={`${process.env.PUBLIC_URL}/user/veterinary/book`}>
                Book from Pasien
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#approval">
              <Link to={`${process.env.PUBLIC_URL}/user/veterinary/approval`}>
                Approval
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/veterinary/book`}>
          <AppointmentBook />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/veterinary/approval`}
          component={Approval}
        />
      </Switch>
    </Card>
  );
}
