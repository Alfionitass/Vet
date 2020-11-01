import React, { useState, useEffect } from "react";
import { GiFemale, GiMale } from "react-icons/gi";
import { CgUnavailable, CgSun } from "react-icons/cg"
import { HiPlus } from "react-icons/hi"

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
          <Card>
            <Form>
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Upload Photo
              </Card.Header>
              <Card.Body>
                <div className="profile--upload p-3 d-flex justify-content-center align-items-center flex-column" style={{width:"180px",height:"180px",border:"1px solid black"}}>
                  <HiPlus size={40} className="font-weight-bold"/>
                  <p className="justify-self-end">Upload Image</p>
                </div>
     
              </Card.Body>

              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Doctor Information
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-4" id="status">
                  <Form.Text>Status</Form.Text>
                  <ButtonGroup toggle name="radiogroup">
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={1}
                      type="radio"
                      variant={status === "1" ? "success" : ""}
                      name="status"
                      value="1"
                      checked={status === "1"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <CgSun size={"24px"}/><label className="mx-3">Available</label>
                    </ToggleButton>
                    <ToggleButton 
                      className="d-flex justify-content-center align-items-center"
                      key={2}
                      type="radio"
                      variant={status === "0" ? "danger" : ""}
                      name="status"
                      value="0"
                      checked={status === "0"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <CgUnavailable size={"24px"}/><label className="mx-3">Away</label>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Text>Waktu Aktif</Form.Text>
                  <Form.Control as="select">
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                  </Form.Control>
                </Form.Group>
              </Card.Body>

              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Basic Information
              </Card.Header>
              <Card.Body>
                <Form.Group controlId="formBasicEmail">
                  <Form.Text>Nama Lengkap</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="Alvin Mantovani"
                  />
                  <Form.Text className="text-muted">Doctor Name.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" id="gender">
                  <Form.Text>Gender</Form.Text>
                  <ButtonGroup toggle name="radiogroup">
                    <ToggleButton
                      key={1}
                      type="radio"
                      variant={gender === "1" ? "primary" : ""}
                      name="gender"
                      value="1"
                      checked={gender === "1"}
                      onChange={(e) => setGender(e.currentTarget.value)}
                    >
                      <GiMale/> <label className={gender === "0" ? "text-white" : ""}>Male</label>
                    </ToggleButton>
                    <ToggleButton
                      key={2}
                      type="radio"
                      variant={gender === "0" ? "pink" : ""}
                      name="gender"
                      value="0"
                      checked={gender === "0"}
                      onChange={(e) => setGender(e.currentTarget.value)}
                    >
                      <GiFemale/><label className={gender === "1" ? "text-white" : ""}>Female</label>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Text>Experience</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="1 Days"
                  />
                  <Form.Text className="text-muted">
                    Doctor Experience.
                  </Form.Text>
                </Form.Group>
              </Card.Body>

              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                Contact Details
              </Card.Header>
              <Card.Body>
                <Form.Group controlId="formBasicEmail">
                  <Form.Text>Nomor Telefon</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="+62 muted"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Text>Email</Form.Text>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="alvin.ictn@gmail.com"
                  />
                </Form.Group>
              </Card.Body>
            </Form>
          </Card>
          <Button
            className="font-weight-bold px-5 float-right my-3 v-text-donker v-bg-mustard border-0"
            onClick={handleClick}
          >
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
