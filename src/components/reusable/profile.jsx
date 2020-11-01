import React from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { VetSignal, VetBriefcase, VetPaw, VetSchedule, VetDoor} from "../../assets/icons"
import styles from "./profile.module.css";

export default function Profile(props) {
  console.log(props);
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
          <Badge pill className="px-5 py-2" size="sm" variant={props.mode === "user" ? "info" : "success"}>
            {props.mode[0].toUpperCase()}{props.mode.slice(1)}
          </Badge>
          <Row className="pt-4">
            <Col md={6} style={{ color: "green", fill: "green" }}>
              {props.mode === "user" ? (
                <>
                  <VetPaw /> 3 Pets
                </>
              ) : (
                <>
                  <VetSignal color={"green"} /> Online
                </>
              )}
            </Col>
            <Col md={6}>
              {console.log(props.value)}
              {props.mode === "user" && props.value > 1 ? (
                <>
                  <VetSchedule /> {props.value} times
                </>
              ) : props.mode === "user" && props.value <= 1 ? (
                <>
                  <VetSchedule /> {props.value} time
                </>
              ) : props.mode === "doctor" && props.value > 1 ? (
                <>
                  <VetBriefcase />
                  {props.value} years
                </>
              ) : (
                <>
                  <VetBriefcase />
                  {props.value} year
                </>
              )}
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
          <VetDoor/>
          <p
            className="m-0 px-3"
            style={{ fontSize: "1.2rem", lineHeight: "1.2rem" }}
          >
            Logout
          </p>
        </Col>
      </Card>
    </>
  );
}
