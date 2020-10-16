import React, { useState, useEffect } from "react";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
  InputGroup,
  Form,
} from "react-bootstrap";

import doctorImg from "../../assets/img/doctorProfile.png";
import './doctor.css'
import Swal from 'sweetalert2'

export default function index() {
  const handleClick = () => {
    Swal.fire({
      title : 'Update Sukses!',
      icon : 'success',
      background : '#1A3150',
      iconColor: 'yellow',
      customClass: {
        title: 'text-light',
      }
    })
  }
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card className="p-4 my-5">
            <Card.Body>
              <Image
                style={{ width: "50px", height: "50px", flexDirection: "row" }}
                src={doctorImg}
                roundedCircle
              />
              <h4>Alexandria Raihan</h4>
              <Badge pill className="px-5 py-2" size="sm" variant="success">
                Doctor
              </Badge>
              <Row>
                <Col md={6}>
                  <IoMdWifi /> Online
                </Col>
                <Col md={6}>
                  <IoIosBriefcase /> 10 years
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "unset" }}>
              <Button className="font-weight-bold" variant="warning" block>
                Edit Profile
              </Button>
            </Card.Footer>
          </Card>
          <Card className="m-5 justify-content-start">
            <Col>
              <IoIosLogOut /> Logout
            </Col>
          </Card>
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Card>
            <Form>
              <Card.Header style={{backgroundColor:"unset"}} className="font-weight-bold">Upload Photo</Card.Header>
              <Card.Body>DD</Card.Body>

              <Card.Header style={{backgroundColor:"unset"}} className="font-weight-bold">Doctor Information</Card.Header>
              <Card.Body>
                <Form.Group className="mb-4">
                  <Form.Label>Status</Form.Label>
                  <InputGroup>
                    <Form.Check
                      inline
                      label="Active"
                      type="radio"
                      id="doctor-active"
                    />
                    <Form.Check
                      inline
                      label="Offline"
                      type="radio"
                      id="doctor-active"
                    />
                  </InputGroup>
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

              <Card.Header style={{backgroundColor:"unset"}} className="font-weight-bold">Basic Information</Card.Header>
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
                <Form.Group className="mb-4">
                  <Form.Label>Gender</Form.Label>
                  <InputGroup>
                    <Form.Check
                      inline
                      label="Male"
                      type="radio"
                      id="doctor-gender"
                    />
                    <Form.Check
                      inline
                      label="Female"
                      type="radio"
                      id="doctor-gender"
                    />
                  </InputGroup>
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

              <Card.Header style={{backgroundColor:"unset"}} className="font-weight-bold">Contact Details</Card.Header>
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
          <Button className="font-weight-bold px-5 float-right my-3" onClick={handleClick} variant="warning">
            Simpan
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
