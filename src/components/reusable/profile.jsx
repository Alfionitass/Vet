import React from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";
import styles from "./profile.module.css";

export default function Profile(props) {
  return (
    <>
      <Card className="p-4 my-5">
        <Card.Body>
          <Image
            style={{ width: "50px", height: "50px", flexDirection: "row" }}
            src={props.src}
            roundedCircle
          />
          <h4>Alexandria Raihan</h4>
          <Badge pill className="px-5 py-2" size="sm" variant="success">
            Doctor
          </Badge>
          <Row className="pt-4">
            <Col md={6} style={{ color: "green", fill: "green" }}>
              <IoMdWifi /> Online
            </Col>
            <Col md={6}>
              <IoIosBriefcase /> {props.years} {props.years > 1 ? "years" : "year"}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className={styles["card--footer"]}>
          <Button className="font-weight-bold" variant="warning" block>
            Edit Profile
          </Button>
        </Card.Footer>
      </Card>
      <Card className="justify-content-start">
        <Col className="px-4 py-2 d-flex align-items-center">
          <IoIosLogOut size={"2rem"} />{" "}
          <p
            className="m-0 px-3"
            style={{ fontSize: "1.2rem", lineHeight: "1.2rem" }}
          >
            Logout
          </p>
        </Col>
      </Card>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div className="form-check disabled">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          disabled
        />
        <label className="form-check-label" htmlFor="exampleRadios3">
          Disabled radio
        </label>
      </div>
    </>
  );
}
