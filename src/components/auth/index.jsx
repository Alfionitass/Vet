import React, { useEffect, useState } from "react";
import { Col, Container, Image, Nav, Row, Button } from "react-bootstrap";
import imageFile from "../../assets/img/loginimage.jpg";
import "./register.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Role, Login, Register } from "./section/";
import { useHistory } from "react-router-dom";
import { user } from '../../database'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function Auth() {
  const [isLogin, setLogin] = useState(window.location.pathname === "/auth/login" ? true : false);
  const [token] = useState(localStorage.getItem('VetToken') || "");
  const history = useHistory();

  useEffect(()=>{
    user({
      method: "self",
      access_token: token
    }).then(res => localStorage.setItem('userData',JSON.stringify({...res.data.data})))
    token.length && history.push('/')
  },[token])
  useEffect(()=>{
    console.log(window.location.pathname)
  })
  const setStatusLogin = (condition) => {
    setLogin(condition);
  };
  return (
    <Container className="d-flex bg-white justify-self-center align-self-center p-0 my-5">
      <Col className="col-4 d-flex justify-content-start p-0 LoginSideImage">
        <Image style={{ width: "inherit" }} src={imageFile} />
      </Col>
      <Col>
        <Row>
          <Nav
            variant="pills"
            className="d-flex align-items-center justify-content-end w-100 mt-4 register-nav"
          >
            <Nav.Item>
              <Nav.Link href="/home" className="vet-title-2">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">
                Khusus Doctor
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="vet-title-2">
                Cari Klinik
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button className="vet-title-2 px-4 v-text-donker v-bg-mustard border-0">
                  Login
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Switch>
          <Route exact path="/auth" component={Role} />
          <Route exact path="/auth/register/:id" component={Register} />
          <Route exact path="/auth/login" component={Login} />
        </Switch>
        <Row className="justify-content-center my-2">
          {isLogin ? (
            <p className="vet-body-1 v-text-donker">
              Don't have an account? Please{" "}
              <Link
                to={`/auth`}
                onClick={() => setStatusLogin(false)}
                className="v-text-mustard"
              >
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="vet-body-1 v-text-donker">
              Already have account? Please{" "}
              <Link
                to={`/auth/login`}
                onClick={() => setStatusLogin(true)}
                className="v-text-mustard"
              >
                Sign In
              </Link>
            </p>
          )}
        </Row>
      </Col>
    </Container>
  );
}
