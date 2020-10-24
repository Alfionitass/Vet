import React, { useState, useEffect } from "react";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";
import { user } from "../../../database";

import {Switch, Route, Link} from 'react-router-dom'
import UserProfile from "../../reusable/profile";
import AppointmentBook from './book';
import Approval from './approval';

import {
  Container,
  Row,
  Col,
  Card,
  Nav,
} from "react-bootstrap";

import CardItem from "../../reusable/cardItem";

import doctorImg from "../../../assets/img/doctorProfile.png";
import Swal from "sweetalert2";

export default function Appointment() {
  const [form] = useState({
    nama: "Alvin",
    email: "alvin@mail.com",
    pass: "H*!#($#!JR",
  });
  const [token] = useState(localStorage.getItem("token"));
  useEffect(() => {});
  const handleClick = () => {
    Swal.fire({
      title: "Update Sukses!",
      icon: "success",
      background: "#1A3150",
      iconColor: "yellow",
      showConfirmButton: false,
      customClass: {
        title: "text-light",
      },
    });
  };
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile />
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Card>
            <Card.Header className="nav--menu">
              <Nav variant="tabs" defaultActiveKey="#book">
              <Link to={`/page2/book`}>
                <Nav.Item>
                  <Nav.Link href="#book" onClick={(e) => console.log(e)}>
                    Book from Pasien
                  </Nav.Link>
                </Nav.Item>
              </Link>
              <Link to={`/page2/approval`}>
                <Nav.Item>
                  <Nav.Link href="#approval" eventKey="link-1">
                    Approval
                  </Nav.Link>
                </Nav.Item>
              </Link>
              </Nav>
            </Card.Header>
            <Switch>
              <Route path={`/page2/book`}>
                <AppointmentBook/>
              </Route>
              <Route path={`/page2/approval`} component={Approval} />
            </Switch>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
