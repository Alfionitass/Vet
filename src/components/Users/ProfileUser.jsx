import React, { useState, useEffect } from "react";
import { GiFemale, GiMale } from "react-icons/gi";
import { CgUnavailable, CgSun } from "react-icons/cg"

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import UserProfile from '../reusable/profile'
import doctorImg from "../../assets/img/doctorProfile.png";
import "./user.css"
import Swal from "sweetalert2";

export default function ProfileUser() {
  const [status, setStatus] = useState("1");
  const [gender, setGender] = useState("1");

  const handleClick = () => {
    Swal.fire({
      title: "Update Sukses!",
      icon: "success",
      background: "#1A3150",
      iconColor: "yellow",
      customClass: {
        title: "text-light",
      },
    });
  };

  const formGender = (
    <>
        <Form.Group className="mb-4" id="gender">
            <Form.Label>Gender</Form.Label>
            <ButtonGroup toggle name="radiogroup">
              <ToggleButton
                key={1}
                type="radio"
                // variant={gender === "1" ? "primary" : "outline-primary"}
                style={gender ==="0" ? {color:'white',backgroundColor:'grey',borderColor:'grey'}: {fontWeight:'bold',color:'white',backgroundColor:"blue",borderColor:'blue'}}
                name="gender"
                value="1"
                checked={gender === "1"}
                onChange={(e) => setGender(e.currentTarget.value)}
              >
                <GiMale/> <text className={gender === "0" ? "text-white" : ""}>Male</text>
              </ToggleButton>
              <ToggleButton
                key={2}
                type="radio"
                // variant={gender === "0" ? "pink" : ""}
                style={gender ==="0" ? {fontWeight:'bold',color:'white',backgroundColor:'red',borderColor:'red'}: {color:'white',backgroundColor:"grey",borderColor:'grey'}}
                name="gender"
                value="0"
                checked={gender === "0"}
                onChange={(e) => setGender(e.currentTarget.value)}
              >
                <GiFemale/><text className={gender === "1" ? "text-white" : ""}>Female</text>
              </ToggleButton>
            </ButtonGroup>
        </Form.Group>
    </>
  )
  
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile src={doctorImg}/>
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Card>
            <Form>
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Upload Photo
              </Card.Header>
              <Card.Body>DD</Card.Body>
      
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Basic Information
              </Card.Header>
              <Card.Body>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="username"                    
                    name="username"
                  />                  
                </Form.Group>
                {formGender}
              </Card.Body>
              

              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Contact Details
              </Card.Header>     
              <Card.Body>
                <Form.Group>
                    <Form.Label>No Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="+62"                    
                      name="noTelepon"
                    />                  
                  </Form.Group> 
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="example@mail.com"                    
                      name="email"
                    />                  
                </Form.Group>          
              </Card.Body>
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Informasi tentang hewan peliharaan
              </Card.Header>
              <Card.Body>
              <Form.Group>
                    <Form.Label>Jumlah Hewan Peliharaan</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"                    
                      name="jumlahHewan"
                    />                  
                  </Form.Group> 
                <Form.Group>
                    <Form.Label>Waktu berkunjung perawatan</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="tanggal"                    
                      name="waktuBerkunjung"
                    />                  
                </Form.Group> 
              </Card.Body>
          </Form>
          </Card>
          <Button
            className="font-weight-bold px-5 float-right my-3"
            onClick={handleClick}
            variant="warning"
          >
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
