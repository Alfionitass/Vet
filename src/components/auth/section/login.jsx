import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import { VetEyeShow, VetEyeHidden } from "../../../assets/icons";
import { user } from "../../../database";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Login = ({
  data: { token, isLoading, postData, passVisibility, errorMsg, userData },
  function: { setLoading, SetVisibility, SubmitData, HandleInput, SetUserData },
}) => {
  const [readyState, setReady] = useState(true);
  const history = useHistory();
  
  useEffect(() => {
    token.length && console.log("gg");
    token.length && localStorage.setItem("VetToken", token);
    token.length &&
      user({
        method: "self",
        access_token: token,
      }).then((res) =>
        localStorage.setItem("userData", JSON.stringify({ ...res.data.data.user }))
      );
    
  }, [token]);

  useEffect(() => {
    postData?.email?.length && postData?.password?.length && setReady(false);
  }, [postData]);
  
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
      <Row className="mx-4 justify-content-center flex-column">
        <p className="vet-heading v-text-donker">Buat Akun Baru</p>
        <p className="vet-body-1 v-text-donker">
          Daftarkan dirimu untuk menggunakan Aplikasi Kami
        </p>
      </Row>
      <Row className="register-section m-4 px-5 d-flex justify-content-center">
        <Form className="register-form w-100 mx-5 registerForm px-5">
          <Form.Group className="form-register">
            <Form.Control
              onChange={(e) => HandleInput(e)}
              name="email"
              type="email"
              placeholder="Alamat Email Kamu"
            />
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control
              onChange={(value) => HandleInput(value)}
              name="password"
              value={postData?.password}
              type={passVisibility ? "text" : "password"}
              placeholder="Password Kamu"
            />
            {passVisibility ? (
              <div onClick={() => SetVisibility(0)}>
                <VetEyeHidden className="register-eye" size={30} />
              </div>
            ) : (
              <div onClick={() => SetVisibility(1)}>
                <VetEyeShow className="register-eye" size={30} />
              </div>
            )}
            <Form.Text className="text-danger">
              {errorMsg && errorMsg}
            </Form.Text>
          </Form.Group>

          <Row className="p-0 m-0 d-flex justify-content-center">
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100 py-3"
              disabled={isLoading || readyState}
              onClick={!isLoading ? () => SubmitData("login") : null}
            >
              {isLoading ? "Loading…" : "Daftarkan Saya"}
            </Button>
          </Row>
        </Form>
      </Row>
    </>
  );
};

export default Login;
