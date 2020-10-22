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

import CardItem from '../../reusable/cardItem'

import doctorImg from "../../../assets/img/doctorProfile.png";
import "../doctor.css";
import Swal from "sweetalert2";

export default function AppointmentBook() {
  const [form] = useState({
    nama : "Alvin",
    email : "alvin@mail.com",
    pass : "H*!#($#!JR"
  })
  const [token] = useState(localStorage.getItem('token'))
  useEffect(()=> {

  
  })
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
            <Card.Header className="nav--menu">
              <Nav variant="tabs" defaultActiveKey="#book">
                <Nav.Item>
                  <Nav.Link href="#book" onClick={(e) => console.log(e)}>Book from Pasien</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#approval" eventKey="link-1">
                    Approval
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <CardItem/>
              <CardItem src={doctorImg}/>
              <CardItem 
                buttonMode={1}
                textMode={3}
                buttonText = {"Book Again"}
              />
              <CardItem 
                buttonMode={1}
                textMode={1}
                buttonText = {"Approve"}
              />
              <CardItem 
                textMode={2}
                buttonMode={2}
                buttonText = {["Approve","Disapprove"]}
              />
              <CardItem 
                buttonMode={3}
                textMode={1}
                buttonText = {["Approve","Disapprove"]}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
