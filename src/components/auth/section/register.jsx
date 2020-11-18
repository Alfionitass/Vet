import React, { useEffect, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import {
  VetEyeShow,
  VetEyeHidden,
  VetArrowRight,
  VetClinic,
  VetUser,
  VetDoctor,
  VetHospital,
} from "../../../assets/icons";
import { useParams } from "react-router-dom";
import { user } from "../../../database";
import { useHistory } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
export default function Register() {
  const [isLoading, setLoading] = useState(false);
  const [readyState, setReady] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("VetToken") || "");
  const [postData, setData] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    phone: "",
  });
  const [errorMsg, setError] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  });

  const [passvisibility, setPassVisibility] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id === "1") {
      setData({ ...postData, role: "clinic" });
    } else if (id === "2") {
      setData({ ...postData, role: "user" });
    } else if (id === "3") {
      setData({ ...postData, role: "veterinary" });
    }
  }, []);

  useEffect(() => {
    token.length && localStorage.setItem("VetToken", token);
    token.length &&
      user({
        method: "self",
        access_token: token,
      }).then((res) =>
        localStorage.setItem("userData", JSON.stringify({ ...res.data.data }))
      );
    token.length && history.push(`${process.env.PUBLIC_URL}/`);
  }, [token]);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    user({
      method: "register",
      data: { ...postData },
    }).then((res) => {
      if (res.status === 400) {
        setError(res.data.message);
      } else {
        setError("");
        setToken(res.data.access_token);
      }
    });
  };

  useEffect(() => {
    postData.email.length &&
      postData.password.length &&
      postData.role.length &&
      postData.phone.length &&
      postData.name.length &&
      setReady(false);
  }, [postData]);

  const handleInput = (input) => {
    console.log(postData);
    setData({ ...postData, [input.target.name]: input.target.value });
  };

  const setPass = (res) => {
    setPassVisibility(res);
  };

  return (
    <div style={{height:"85%"}} className="">
      <Row className="mx-4 justify-content-center flex-column">
        <VetArrowRight style={{position:"absolute",top:"20px",left:"20px"}}/>
        <p className="vet-heading v-text-donker">
          Register{" "}
          {id == 1
            ? "as Clinic"
            : id == 2
            ? "as Patient"
            : id == 3
            ? "as Veterinary"
            : "New Account"}
        </p>
        <p className="vet-body-1 v-text-donker">
          Register yourself to use our application
        </p>
        <div style={{ position: "absolute", right: "20px",top:"20px" }}>
          {id == 1 ? (
            <VetClinic />
          ) : id == 2 ? (
            <VetUser />
          ) : id == 3 ? (
            <VetDoctor />
          ) : (
            ""
          )}
        </div>
      </Row>
      <Row className="register-section mt-4 px-5 d-flex justify-content-center">
        <Form className="register-form w-100 mx-5 registerForm">
          <Form.Group className="form-register mb-1">
            <Form.Control
              onChange={(value) => handleInput(value)}
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Form.Text className="text-danger">
              {errorMsg.email || " "}
            </Form.Text>
          </Form.Group>
          <Form.Group className="form-register mb-1">
            <Form.Control
              onChange={(value) => handleInput(value)}
              name="name"
              type="text"
              placeholder="Your Username"
            />
            <Form.Text className="text-danger">
              {errorMsg.name || " "}
            </Form.Text>
          </Form.Group>
          <Form.Group className="form-register mb-1">
            <Form.Control
              onChange={(value) => handleInput(value)}
              name="password"
              type={passvisibility ? "text" : "password"}
              placeholder="Your Password"
            />
            <Form.Text className="text-danger">
              {errorMsg.password || " "}
            </Form.Text>
            {passvisibility ? (
              <div onClick={() => setPass(0)} className="eye-container">
                <VetEyeHidden className="register-eye" size={30} />
              </div>
            ) : (
              <div onClick={() => setPass(1)} className="eye-container">
                <VetEyeShow className="register-eye" size={30} />
              </div>
            )}
          </Form.Group>
          <Form.Group className="form-register mb-1">
            <Form.Control
              onChange={(value) => handleInput(value)}
              name="phone"
              type="text"
              placeholder="Your Phone Number"
            />
            <Form.Text className="text-danger">
              {errorMsg.phone || " "}
            </Form.Text>
          </Form.Group>
          <Row className="p-0 m-0 d-flex justify-content-center w-75" style={{position:"absolute",bottom:"15%"}}>
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100 py-3"
              disabled={isLoading || readyState}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading…" : "Register"}
            </Button>
          </Row>
        </Form>
      </Row>
    </div>
  );
}
