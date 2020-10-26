import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import imageFile from "../../assets/img/loginimage.jpg";
import "./register.css";
import { VetClinic, VetUser, VetDoctor } from "../../assets/icons";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Register() {
  const [isLoading, setLoading] = useState(false);
  const [option, setOption] = useState(true);
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleChoice = (num = 0) => {
    setHighlight(num);
    setOption(false);
  };

  const handleClick = () => setLoading(true);
  return (
    <Container className="d-flex bg-white justify-self-center align-self-center p-0 my-5">
      <Col className="col-4 d-flex justify-content-start p-0 LoginSideImage">
        <Image style={{ width: "inherit" }} src={imageFile} />
      </Col>
      <Col>
        <Row>
          <Nav
            variant="pills"
            className="d-flex align-items-center justify-content-end w-100 m-4"
          >
            <Nav.Item>
              <Nav.Link href="/home" className="vet-title-2">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">Khusus Doctor</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">Cari Klinik</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button className="vet-title-2 px-4 v-text-donker v-bg-mustard border-0">
                  Login
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="m-4 d-flex justify-content-center">
          <Col lg={3} className="m-3 p-0">
            <Col
              onClick={() => handleChoice(1)}
              className={`m-0 border-0 register py-5 v-bg-donker rounded-lg ${
                highlight === 1 ? "selected-option" : ""
              }`}
            >
              <VetClinic size={"92"} color={"#FDCB5A"} />
            </Col>
            <Col>
              <label className="v-text-donker vet-heading">Clinic</label>
            </Col>
          </Col>
          <Col lg={3} className="m-3 p-0">
            <Col
              onClick={() => handleChoice(2)}
              className={`m-0 border-0 register py-5 v-bg-donker rounded-lg ${
                highlight === 2 ? "selected-option" : ""
              }`}
            >
              <VetUser size={"85"} color={"#FDCB5A"} />
            </Col>
            <Col>
              <label className="v-text-donker vet-heading">User</label>
            </Col>
          </Col>
          <Col lg={3} className="m-3 p-0">
            <Col
              onClick={() => handleChoice(3)}
              className={`m-0 border-0 register py-5 v-bg-donker rounded-lg ${
                highlight === 3 ? "selected-option" : ""
              }`}
            >
              <VetDoctor size={"95"} color={"#FDCB5A"} />
            </Col>
            <Col>
              <label className="v-text-donker vet-heading">Doctor</label>
            </Col>
          </Col>
        </Row>
        <Row className="p-0 m-0 d-flex justify-content-center">
          <Button
            className="v-bg-mustard v-text-donker border-0 font-weight-bold w-50"
            disabled={isLoading || option}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Loading…" : "Selanjutnya"}
          </Button>
        </Row>
      </Col>
    </Container>
  );
}
