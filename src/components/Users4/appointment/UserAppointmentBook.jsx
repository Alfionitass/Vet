import React, { useState, useEffect } from "react";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";
import { user } from '../../../database'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
  Nav,
} from "react-bootstrap";

import doctorImg from "../../../assets/img/doctorProfile.png";
import "../user.css";
import Swal from "sweetalert2";

export default function UserAppointmentBook() {
  useEffect(()=> {
    user({
      token : "toke",
      method : "user"
    })
  })
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

  const cardProfile =(
  <>
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
  </>)

  const mainEdit = (    
      <Card>
            <Card.Header className="nav--menu">
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">Book from Pasien</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" eventKey="link-1">
                    Approval
                  </Nav.Link>
                </Nav.Item>
              </Nav>              
            </Card.Header>
            <Card.Body>
              <Card
                style={{ boxShadow: "(0,0,0,0.3)" }}
                className="my-2 card--group"
              >
                <Row className="align-items-center book--row m-3">
                  <Col className="book--item col-1 mr-4">
                    <Badge variant="primary">
                      <p className="p-0 m-0">12</p>Okt
                    </Badge>
                  </Col>
                  <Col>Alvin Mantovani</Col>
                  <Col>99 Pets</Col>
                  <Col>19.20</Col>
                  <Row>
                    <Col className="button--action">
                      <Button size="sm" variant="outline-warning">
                        Approve
                      </Button>
                    </Col>
                    <Col className="button--action">
                      <Button size="sm" variant="outline-danger">
                        Disapprove
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Card>
            </Card.Body>
          </Card>        
  )
  return (
    <Container>
      <Row>
        <Col lg={4}>
          {cardProfile}          
        </Col>
        <Col lg={8} className="my-5 text-left">
          {mainEdit}          
        </Col>
      </Row>
    </Container>
  );
}
