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
import "./user.css";
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
                User Information
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-4" id="status">
                  <Form.Label>Status</Form.Label>
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
                      <CgSun size={"24px"}/><text className="mx-3">Available</text>
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
                      <CgUnavailable size={"24px"}/><text className="mx-3">Away</text>
                    </ToggleButton>
                  </ButtonGroup>
                  {/* <ToggleButtonGroup
                    type="radio"
                    value={value}
                    onChange={handleChange}
                    defaultValue={1}
                    name="options"
                  >
                    <ToggleButton value={0} name="radio">Available</ToggleButton>
                    <ToggleButton value={1} name="radio">Away</ToggleButton>
                  </ToggleButtonGroup> */}
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Waktu Aktif</Form.Label>
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
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="Alvin Mantovani"
                  />
                  <Form.Text className="text-muted">Doctor Name.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" id="gender">
                  <Form.Label>Gender</Form.Label>
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
                      <GiMale/> <text className={gender === "0" ? "text-white" : ""}>Male</text>
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
                      <GiFemale/><text className={gender === "1" ? "text-white" : ""}>Female</text>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Experience</Form.Label>
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
                  <Form.Label>Nomor Telefon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="It's my name"
                    value="+62 muted"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
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
