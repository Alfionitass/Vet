import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import { VetEyeShow, VetEyeHidden,VetPaw } from "../../../assets/icons";
import { user } from "../../../database";
import { useHistory } from "react-router-dom";
import { setLogin } from "../../../redux/actions/auth";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Login = (props) => {
  const [readyState, setReady] = useState(true);
  const history = useHistory();

  useEffect(() => {
    props.data.postData?.email?.length &&
      props.data.postData?.password?.length &&
      setReady(false);
  }, [props.data.postData]);

  const handleSubmit = () => {
    props.setLogin(props.data.postData);
  };
  return (
    <div style={{height:"85%"}} className="">
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Welcome Back</p>
        <p className="vet-body-1 v-text-donker">Log In to start your Journey</p>
        <i className="v-text-donker my-3">Pets Health, Vet Passion <strong>'Your best paws deserves the best care'</strong></i>
        {/* <div>
          {["V","E","T","F","O","R","P","E","T"].map(item => <VetPaw key={item} size={40}
              className="mx-2"
              style={{
                transform: `rotateZ(${Math.floor(Math.random() * 70) + 40}deg)`,
                position: "relative",
              
              }}>{item}</VetPaw>)}
        </div> */}
      </Row>
      <Row className="register-section mt-2 px-5 d-flex justify-content-center align-items-center" style={{height:"50%"}}>
        <Form className="register-form w-100 registerForm px-5">
          <Form.Group className="form-register my-5">
            <Form.Control
              onChange={(e) => props.function.HandleInput(e)}
              name="email"
              type="email"
              placeholder="Your Email Address"
            />
          </Form.Group>
          <Form.Group className="form-register my-5">
            <Form.Control
              onChange={(value) => props.function.HandleInput(value)}
              name="password"
              value={props.postData?.password}
              type={props.passVisibility ? "text" : "password"}
              placeholder="Your Password"
            />
            {props.passVisibility ? (
              <div onClick={() => props.function.SetVisibility(0)}>
                <VetEyeHidden className="register-eye login" size={30} />
              </div>
            ) : (
              <div onClick={() => props.function.SetVisibility(1)}>
                <VetEyeShow className="register-eye login" size={30} />
              </div>
            )}
            {console.log(props.AuthPayloads)}
            <Form.Text className="text-danger">
              {props.AuthPayloads.errorMsg && props.AuthPayloads.errorMsg}
            </Form.Text>
            <Form.Text className="text-success">
              {props.AuthPayloads.successMsg && props.AuthPayloads.successMsg}
            </Form.Text>
          </Form.Group>

          <Row className="p-0 m-0 d-flex justify-content-center w-75" style={{position:"absolute",bottom:"15%"}}>
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100 py-3"
              disabled={props.AuthPayloads.isLoading || readyState}
              onClick={
                !props.AuthPayloads.isLoading ? () => handleSubmit() : null
              }
            >
              {props.AuthPayloads.isLoading ? "Loading…" : "Login"}
            </Button>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setLogin }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
