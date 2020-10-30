import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Nav, Row, Form } from "react-bootstrap";
import "../register.css";
import { VetEyeShow, VetEyeHidden } from "../../../assets/icons";
import { user } from '../../../database'
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [readyState, setReady] = useState(true);
  const [postData, setData] = useState({email:"",password:""});
  const [passvisibility, setPassVisibility] = useState(0);
  const [errorMsg, setError] = useState("");
  const [token,setToken] = useState(localStorage.getItem('VetToken') || "");
  const history = useHistory();

  useEffect(()=>{
    localStorage.setItem('VetToken',token)
    user({
      method: "self",
      access_token: token
    }).then(res => localStorage.setItem('userData',JSON.stringify({...res.data.data})))
    token.length && history.push('/')
  },[token])
  
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  useEffect(() => {
    (postData.email.length && postData.password.length) && setReady(false)
  },[postData])

  const setPass = (res) => {
    setPassVisibility(res);
  };

  const handleClick = () => {
    setLoading(true)
    user({
      method : "login",
      data : {...postData}
    }).then(res => {
      if(res.status === 400) {
        setError(res.data.message)
      }else {
        setError("")
        setToken(res.data.access_token)
      }
    })
  };

  const handleInput = (input) => {
    setData({...postData,[input.target.name]:input.target.value})
  }
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
            <Form.Control onChange={(value) => handleInput(value)} name="email" type="email" placeholder="Alamat Email Kamu" />
          </Form.Group>
          <Form.Group className="form-register">
            <Form.Control onChange={(value) => handleInput(value)} name="password" type={passvisibility ? "text" : "password" } placeholder="Password Kamu" />
            {passvisibility ? (
              <div onClick={() => setPass(0)}>
                <VetEyeHidden className="register-eye"size={30} />
              </div>
            ) : (
              <div onClick={() => setPass(1)}>
                <VetEyeShow className="register-eye" size={30}/>
              </div>
            )}
             <Form.Text className="text-danger">
              {errorMsg}
            </Form.Text>
          </Form.Group>
          
          <Row className="p-0 m-0 d-flex justify-content-center">
            <Button
              className="v-bg-mustard v-text-donker border-0 font-weight-bold w-100 py-3"
              disabled={isLoading || readyState}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading…" : "Daftarkan Saya"}
            </Button>
          </Row>
        </Form>
      </Row>
    </>
  );
}
