import React from "react";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "../../reusable/profile";
import AppointmentBook from "./book";
import Approval from "./history";

import { Container, Row, Col, Card, Nav } from "react-bootstrap";

export default function Appointment(props) {
  {console.log()}
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile mode={props.mode}/>
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
                    <Link to={`${process.env.PUBLIC_URL}/user/patient/book`}>Book from Pasien</Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#approval">
                    <Link to={`${process.env.PUBLIC_URL}/user/patient/approval`}>Approval</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/user/patient/book`}>
                <AppointmentBook />
              </Route>
              <Route path={`${process.env.PUBLIC_URL}/user/patient/approval`} component={Approval} />
            </Switch>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
