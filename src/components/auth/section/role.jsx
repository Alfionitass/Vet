import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./../register.css";
import { VetClinic, VetUser, VetDoctor } from "../../../assets/icons";
import { Link, useHistory } from "react-router-dom";
// import { role } from "../../../database"

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
export default function Role() {
  const [isLoading, setLoading] = useState(false);
  const [option, setOption] = useState(true);
  const [highlight, setHighlight] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        history.push(`${process.env.PUBLIC_URL}/auth/register/${highlight}`);
      });
    }
  }, [highlight, isLoading]);

  const handleChoice = (num = 0) => {
    setHighlight(num);
    setOption(false);
  };

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div style={{ height: "85%" }} className="">
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Choose your Role</p>
        <p className="vet-body-1 v-text-donker">
          Register yourself to use our application
        </p>
        <i className="v-text-donker vet-title">Pets Health, Vet Passion <strong>'Your best paws deserves the best care'</strong></i>
      </Row>
      <Row
        className="m-2 d-flex justify-content-center align-items-center"
        style={{ height: "63%" }}
      >
        <Col lg={3} className="my-2 mx-3 p-0">
          <Col
            onClick={() => handleChoice(1)}
            style={{padding:"2.11rem 0"}} className={`m-0 border-0 register v-bg-donker rounded-lg ${
              highlight === 1 ? "selected-option" : ""
            }`}
          >
            <VetClinic size={"92"} color={"#FDCB5A"} />
          </Col>
          <Col>
            <label className="v-text-donker vet-heading">Clinic</label>
          </Col>
        </Col>
        <Col lg={3} className="m-2 p-0">
          <Col
            onClick={() => handleChoice(2)}
            style={{padding:"2.11rem 0"}} className={`m-0 border-0 register v-bg-donker rounded-lg ${
              highlight === 2 ? "selected-option" : ""
            }`}
          >
            <VetUser size={"86"} color={"#FDCB5A"} />
          </Col>
          <Col>
            <label className="v-text-donker vet-heading">User</label>
          </Col>
        </Col>
        <Col lg={3} className="m-2 p-0">
          <Col
            onClick={() => handleChoice(3)}
            style={{padding:"2.11rem 0"}} className={`m-0 border-0 register v-bg-donker rounded-lg ${
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
      <Row
        className="p-0 m-0 d-flex justify-content-center w-100"
        style={{ position: "absolute", bottom: "15%" }}
      >
        <Button
          className="v-bg-mustard border-0 w-50 rounded-lg v-text-donker font-weight-bold bg-transparent border-0 py-3"
          disabled={isLoading || option}
          onClick={!isLoading ? handleClick : null}
        >
          <span>{isLoading ? "Loading…" : "Next"}</span>
        </Button>
      </Row>
    </div>
  );
}
