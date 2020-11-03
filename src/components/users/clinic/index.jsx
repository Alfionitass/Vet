import React from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";

import { ClinicApproval, ClinicBook } from "./appointment";

import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "./doctor.css";

export function Clinic() {
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
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/clinic/book`} onClick={(e) => console.log(e)}>
                Book from Pasien
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="vet-title-2 v-text-donker" to={`${process.env.PUBLIC_URL}/user/clinic/approval`} onClick={(e) => console.log(e)}>
            Approval
            </NavLink>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/user/clinic/book`}>
          <ClinicBook />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}/user/clinic/approval`}
          component={ClinicApproval}
        />
      </Switch>
    </Card>
  );
}
