import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { Col, Container, Image, Nav, Row, Button } from "react-bootstrap";
import { Role, Login, Register } from "../components/auth/section";
import imageFile from "../assets/img/loginimage.jpg";
// import "../components/auth/register.css";
import { user } from '../database'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function Auth(props) {
  const [isLogin, setLogin] = useState(window.location.pathname === "/auth/login" ? true : false);
  const [token] = useState(localStorage.getItem('VetToken') || "");
  const history = useHistory();

  const setStatusLogin = (condition) => {
    setLogin(condition);
  };

  useEffect(() => {
    props.SetBarState({
      footer: false,
      navbar: true
    })
  },[])
  return (
    <Container style={{transform: "translateY(calc((100% / 4) - 86px))"}} className="d-flex bg-white justify-self-center align-self-center p-0">
      <Col className="col-4 d-flex justify-content-start p-0 LoginSideImage">
        <Image style={{ width: "inherit" }} src={imageFile} />
      </Col>
      <Col className="pt-4">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/auth`} component={Role} />
          <Route exact path={`${process.env.PUBLIC_URL}/auth/register/:id`} render={() => <Register {...props}/>} />
          <Route exact path={`${process.env.PUBLIC_URL}/auth/login`}  render={() => <Login {...props}/>} />
        </Switch>
        <Row className="justify-content-center my-2">
          {isLogin ? (
            <p className="vet-body-1 v-text-donker">
              Don't have an account? Please{" "}
              <Link
                to={`${process.env.PUBLIC_URL}/auth`}
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
                to={`${process.env.PUBLIC_URL}/auth/login`}
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
