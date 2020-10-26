import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "../../reusable/profile";
import AppointmentBook from "./book";
import Approval from "./approval";

import { Container, Row, Col, Card, Nav } from "react-bootstrap";

export default function Appointment() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile value={5} mode="doctor"/>
        </Col>
        <Col lg={8} className="my-5 text-left">
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
                    <Link to={`/page2/book`}>Book from Pasien</Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#approval">
                    <Link to={`/page2/approval`}>Approval</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Switch>
              <Route path={`/page2/book`}>
                <AppointmentBook />
              </Route>
              <Route path={`/page2/approval`} component={Approval} />
            </Switch>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
