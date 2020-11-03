import React, { useState, useEffect } from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  VetSignal,
  VetBriefcase,
  VetPaw,
  VetSchedule,
  VetDoor,
} from "../../assets/icons";
import styles from "./profile.module.css";

export default function Profile(props) {
  const [userBadge, setUserBadge] = useState(null);
  console.log(props)
  useEffect(() => {
    props.mode === "patient"
      ? setUserBadge("user")
      : props.mode === "veterinary"
      ? setUserBadge("doctor")
      : setUserBadge(props.mode);
  }, []);
  return (
    <>
      {userBadge && (
        <Card className="p-4 my-5">
          <Card.Body>
            <Image
              style={{ width: "50px", height: "50px", flexDirection: "row" }}
              src={props.src}
              roundedCircle
            />
            <h4>Alexandria Raihan</h4>
            <Badge
              pill
              className="px-5 py-2"
              size="sm"
              variant={userBadge === "user" ? "info" : "success"}
            >
              {userBadge[0].toUpperCase()}
              {userBadge.slice(1)}
            </Badge>
            <Row className="pt-4">
              <Col md={6} style={{ color: "green", fill: "green" }}>
                {userBadge === "user" ? (
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
                {userBadge === "user" && props.value > 1 ? (
                  <>
                    <VetSchedule /> {props.value} times
                  </>
                ) : userBadge === "user" && props.value <= 1 ? (
                  <>
                    <VetSchedule /> {props.value} time
                  </>
                ) : userBadge === "doctor" && props.value > 1 ? (
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
            <Link to={`${process.env.PUBLIC_URL}/user/${props.mode}/profile`}>
              <Button className="font-weight-bold" variant="warning" block>
                Edit Profile
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      )}
      <Card className="justify-content-start">
        <Col className="px-4 py-2 d-flex align-items-center">
          <VetDoor />
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
