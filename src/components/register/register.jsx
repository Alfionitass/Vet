import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import imageFile from "../../assets/img/loginimage.jpg";

export default function register() {
  return (
    <Container className="d-flex bg-white justify-self-center align-self-center p-0 my-5">
      <Col  className="col-4 d-flex justify-content-start p-0">
        <Image style={{width:"inherit"}}src={imageFile} />
      </Col>
      <Col>
        <Row>
          <Nav variant="pills" className="d-flex align-items-center justify-content-end w-100 m-4">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Khusus Doctor</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Cari Klinik</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button variant="warning" className="font-weight-bold px-4">
                  Login
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col className="m-4" style={{width:"2vw",height:"15vw",border:"1px solid black"}}></Col>
          <Col className="m-4" style={{width:"2vw",height:"15vw",border:"1px solid black"}}></Col>
          <Col className="m-4" style={{width:"2vw",height:"15vw",border:"1px solid black"}}></Col>
        </Row>
        <Row></Row>
      </Col>
    </Container>
  );
}
