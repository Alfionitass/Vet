import React, { useState,useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Demo from "./Demo";
import UserProfile from "../../components/reusable/profile";
import UserPage from "../../components/reusable/profilePage"
// import doctorImg from "../../assets/img/doctorProfile.png";
import ProfileForm from "../../components/reusable/profileForm";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Users() {
  const { role } = useParams();
  const [componentRender,setComponentRender] = useState();
  useEffect(() => {
    setComponentRender(`${role[0].toUpperCase()}${role.slice(1)}`)  
  },[])

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
          <UserProfile src={"doctorImg"} mode={role} value={5} />
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Route path={`${process.env.PUBLIC_URL}/user/${role}/profile`}>
            <ProfileForm
              config={{
                mode: role,
              }}
            />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/user/:role`}>
            <UserPage/>
          </Route>
        </Col>
      </Row>
    </Container>
  );
}
