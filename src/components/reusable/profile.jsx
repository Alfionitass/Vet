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
import Skeleton from "react-loading-skeleton";
export default function Profile(props) {
  const [userBadge, setUserBadge] = useState(null);

  useEffect(() => {
    props.mode === "patient"
      ? setUserBadge("user")
      : props.mode === "veterinary"
      ? setUserBadge("doctor")
      : setUserBadge(props.mode);
  }, []);

  useEffect(() => {
    console.log(props.data);
  });
  return (
    <>
      <Card className="p-4 my-5">
        <Card.Body>
          {props.data ? (
            <Image
              style={{ width: "50px", height: "50px", flexDirection: "row" }}
              src={props.data.image}
              roundedCircle
            />
          ) : (
            <Skeleton height={50} width={50} circle={true} />
          )}
          <h4>{props.data ? props.data.name : <Skeleton />}</h4>
          <Badge
            pill
            className="px-5 py-2"
            size="sm"
            variant={userBadge === "user" ? "info" : "success"}
          >
            {props.data ? `${userBadge[0].toUpperCase()}${userBadge.slice(1)} `: <Skeleton/>}
          </Badge>
          <Row className="pt-4">
            <Col
              md={6}
              className="d-flex align-items-center"
              style={{ color: "green", fill: "green" }}
            >
              {props.data ? (userBadge === "user" ? (
                <>
                  <VetPaw /> 3 Pets
                </>
              ) : (
                <>
                  <VetSignal color={"green"} /> <span className="mx-2">Online</span>
                </>
              )) : 
                <Skeleton width={100} />
              }
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
              {
                props.data ? 
                (userBadge === "user" && props.value) > 1 ? (
                  <>
                    <VetSchedule /> {props.value} times
                  </>
                ) : userBadge === "user" && props.value <= 1 ? (
                  <>
                    <VetSchedule /> {props.value} time
                  </>
                ) : userBadge === "doctor" && props.data.veterinary.experience > 1 ? (
                  <>
                    <VetBriefcase />
                    <span className="mx-2">{props.data.veterinary.experience} Years</span>
                  </>
                ) : (
                  <>
                    <VetBriefcase />
                    <span className="mx-2">{props.data.veterinary.experience} Year</span>
                  </>
                ) : <Skeleton width={100}/>}
              
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
