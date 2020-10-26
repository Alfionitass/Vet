import React, { useEffect, useState } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import "./../register.css";
import { VetClinic, VetUser, VetDoctor } from "../../../assets/icons";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Role() {
  const [isLoading, setLoading] = useState(false);
  const [option, setOption] = useState(true);
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
    if(!isLoading && highlight ) console.log("gg")
  }, [highlight, isLoading]);
  

  const handleChoice = (num = 0) => {
    setHighlight(num);
    setOption(false);
  };

  const handleClick = () => {
    setLoading(true)
  };
  return (
    <>
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Pilih Role Kamu</p>
        <p className="vet-body-1 v-text-donker">
          Daftarkan dirimu untuk menggunakan Aplikasi Kami
        </p>
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
    </>
  );
}
