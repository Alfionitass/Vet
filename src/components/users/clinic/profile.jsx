import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import UserProfile from '../reusable/profile'
import doctorImg from "../../assets/img/doctorProfile.png";
import ProfileForm from '../reusable/profileForm'
// import "./doctor.css";
// import "../../assets/sass/doctor.scss";
import Swal from "sweetalert2";

export default function Profile() {
  const [status, setStatus] = useState("1");
  const [gender, setGender] = useState("1");

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
          <UserProfile src={doctorImg} mode="doctor" value={5}/>
        </Col>
        <Col lg={8} className="my-5 text-left">
          <ProfileForm config={{
            mode:"clinic"
          }}/>
        </Col>
      </Row>
    </Container>
  );
}