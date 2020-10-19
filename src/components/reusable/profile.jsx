import React from "react";
import { Badge, Card, Image, Col, Row, Button } from "react-bootstrap";
import { IoIosBriefcase, IoMdWifi, IoIosLogOut } from "react-icons/io";

export default function Profile(props) {
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
          <Badge pill className="px-5 py-2" size="sm" variant="success">
            Doctor
          </Badge>
          <Row className="pt-4">
            <Col md={6} style={{color:"green",fill:"green"}}>
              <IoMdWifi/> Online
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
      <Card className="justify-content-start">
        <Col className="px-4 py-2 d-flex align-items-center">
          <IoIosLogOut size={"2rem"}/> <p className="m-0 px-3" style={{fontSize:"1.2rem",lineHeight:"1.2rem"}}>Logout</p>
        </Col>
      </Card>
    </>
  );
}
