import React, { useState, useEffect } from "react";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
  InputGroup,
  Form,
} from "react-bootstrap";

import doctorImg from "../../../assets/img/doctorProfile.png";
import "../doctor.css";
import Swal from "sweetalert2";

export default function AppointmentApproval() {
  const handleClick = () => {
    Swal.fire({
      title: "Update Sukses!",
      icon: "success",
      background: "#1A3150",
      iconColor: "yellow",
      customClass: {
        title: "text-light",
      },
    });
  };
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card className="p-4 my-5">
            <Card.Body>
              <Image
                style={{ width: "50px", height: "50px", flexDirection: "row" }}
                src={doctorImg}
                roundedCircle
              />
              <h4>Alexandria Raihan</h4>
              <Badge pill className="px-5 py-2" size="sm" variant="success">
                Doctor
              </Badge>
              <Row>
                <Col md={6}>
                  <IoMdWifi /> Online
                </Col>
                <Col md={6}>
                  <IoIosBriefcase /> 10 years
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "unset" }}>
              <Button className="font-weight-bold" variant="warning" block>
                Edit Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="justify-content-start">
            <Col>
              <IoIosLogOut /> Logout
            </Col>
          </Card>
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Card>
            <Card.Header>Apointments</Card.Header>
            <Card.Body>
              <Card style={{boxShadow:"(0,0,0,0.3)"}}className="my-2">
                <Row className="align-items-center">
                  <Col>
                    <Badge variant="primary">12 Okt</Badge>
                  </Col>
                  <Col>Alvin Mantovani</Col>
                  <Col>1 wallet</Col>
                  <Col>19.20</Col>
                  <Col>
                    <Button variant="warning">Approve</Button>
                  </Col>
                </Row>
              </Card>
              <Card style={{boxShadow:"(0,0,0,0.3)"}}className="my-2">
                <Row className="align-items-center">
                  <Col>
                    <Badge variant="primary">12 Okt</Badge>
                  </Col>
                  <Col>Alvin Mantovani</Col>
                  <Col>1 wallet</Col>
                  <Col>19.20</Col>
                  <Col>
                    <Button variant="warning">Approve</Button>
                  </Col>
                </Row>
              </Card>
              <Card style={{boxShadow:"(0,0,0,0.3)"}}className="my-2">
                <Row className="align-items-center">
                  <Col>
                    <Badge variant="primary">12 Okt</Badge>
                  </Col>
                  <Col>Alvin Mantovani</Col>
                  <Col>1 wallet</Col>
                  <Col>19.20</Col>
                  <Col>
                    <Button variant="warning">Approve</Button>
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
