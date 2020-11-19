import React, { useState, useEffect } from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  VetBriefcase,
  VetPaw,
  VetSchedule,
  VetDoor,
  VetClock,
  VetStatusOnline,
  VetStatusOffline,
} from "../../assets/icons";
import styles from "./profile.module.css";
import Skeleton from "react-loading-skeleton";

import { connect } from "react-redux";

function Profile(props) {
  useEffect(() => {
    props.data.data.postData = props.AuthPayloads?.user?.patient
      ? {
          gender: props.AuthPayloads?.user?.patient?.gender.toString(),
        }
      : props.AuthPayloads?.user?.veterinary
      ? {
          status: props.AuthPayloads?.user?.veterinary?.status,
          genderVet: props.AuthPayloads?.user?.veterinary?.genderVet.toString(),
        }
      : props.AuthPayloads?.user?.clinic
      ? {
          status: props.AuthPayloads?.user?.clinic?.status,
        }
      : {};
  }, [props.AuthPayloads.user]);

  return (
    <>
      <Card className="p-4 my-5">
        <Card.Body>
          {Object.keys(props.AuthPayloads.user).length ? (
            <Image
              style={{ width: "50px", height: "50px", flexDirection: "row" }}
              src={props.AuthPayloads.user.image}
              roundedCircle
            />
          ) : (
            <Skeleton height={50} width={50} circle={true} />
          )}
          <h4>
            {Object.keys(props.AuthPayloads.user).length ? (
              props.AuthPayloads.user.name
            ) : (
              <Skeleton />
            )}
          </h4>
          <Badge
            pill
            className="px-5 py-2"
            size="sm"
            variant={
              props.AuthPayloads.user.role === "user" ? "info" : "success"
            }
          >
            {Object.keys(props.AuthPayloads.user).length ? (
              `${props.AuthPayloads.user.role[0].toUpperCase()}${props.AuthPayloads.user.role.slice(
                1
              )} `
            ) : (
              <Skeleton />
            )}
          </Badge>
          <Row className="pt-4 vet-button">
            <Col
              md={4}
              className={`d-flex align-items-center m-0 p-0 ${props.AuthPayloads.user.role == "patient" ? "v-fill-donker" : "v-fill-grass"}`}
            >
              {Object.keys(props.AuthPayloads.user).length ? (
                props.AuthPayloads.user.role === "patient" ? (
                  props.AuthPayloads.user.patient.animals.length > 1 ?
                  <>
                    <span className="mx-2"><VetPaw/> {props.AuthPayloads.user.patient.animals.length} Pets</span>
                  </>
                  : <>
                  <span className="mx-2"><VetPaw/> {props.AuthPayloads.user.patient.animals.length || 0} Pet</span>
                </>
                ) : (
                  <>
                    <VetStatusOnline />
                    <span className="mx-2">Online</span>
                  </>
                )
              ) : (
                <Skeleton width={100} />
              )}
            </Col>
            <Col
              md={8}
              className="d-flex align-items-center justify-content-end m-0 p-0"
            >
              {Object.keys(props.AuthPayloads.user).length ? (
                (props.AuthPayloads.user.role === "patient" && props.value) >
                1 ? (
                  <>
                    <VetSchedule /> <span className="mx-2">{props.AppointmentPayloads.dataAppointment.length + props.AppointmentPayloads.dataHistory.length} times</span>
                  </>
                ) : props.AuthPayloads.user.role === "patient" &&
                  props.value <= 1 ? (
                  <>
                    <VetSchedule /> <span className="mx-2">{props.value || 0} time </span>
                  </>
                ) : props.AuthPayloads.user.role === "veterinary" &&
                  props.AuthPayloads.user.veterinary.experience > 1 ? (
                  <>
                    <VetBriefcase />
                    <span className="mx-2">
                      {props.AuthPayloads.user.veterinary.experience} Years
                    </span>
                  </>
                ) : props.AuthPayloads.user.role === "veterinary" &&
                  props.AuthPayloads.user.veterinary.experience <= 1 ? (
                  <>
                    <VetBriefcase />
                    <span className="mx-2">
                      {props.AuthPayloads.user?.veterinary?.experience || 0}{" "}
                      Year
                    </span>
                  </>
                ) : props.AuthPayloads.user.role === "clinic" ? (
                  <>
                    <VetClock />
                    <span className="mx-2">09.00 - 18.00</span>
                  </>
                ) : (
                  ""
                )
              ) : (
                <Skeleton width={100} />
              )}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className={styles["card--footer"]}>
          <Link
            to={`${process.env.PUBLIC_URL}/user/${props.mode}/profile`}
            className="text-decoration-none"
            onClick={() => {
              props.data.data.postData = props.AuthPayloads?.user?.patient
                ? {
                    gender: props.AuthPayloads?.user?.patient?.gender.toString(),
                  }
                : props.AuthPayloads?.user?.veterinary
                ? {
                    status: props.AuthPayloads?.user?.veterinary?.status,
                    genderVet: props.AuthPayloads?.user?.veterinary?.genderVet.toString(),
                  }
                : props.AuthPayloads?.user?.clinic
                ? {
                    status: props.AuthPayloads?.user?.clinic?.status,
                  }
                : {};
            }}
          >
            <Button className="font-weight-bold" variant="warning" block>
              <span>Edit Profile</span>
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

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
    AppointmentPayloads: state.Appointment
  };
};

export default connect(mapStateToProps, null)(Profile);
