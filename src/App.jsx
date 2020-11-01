import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import Doctor from "./components/doctor/profile";
import Doctor2 from "./components/doctor/appointment";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import User1 from "./components/user/profile";
import DemoIcon from "./demo/demoIcon";
import {} from "./assets/icons";
import VetNavbar from "./components/NavBar/NavBar";

import Footer from "./components/Footer/Footer";
import ClinicChoose from "./components/Clinic/ClinicChoose/ClinicChoose";
import { user } from "./database";
import BookingContent from "./components/BookingDetail/BookingContent";
import { Container, Navbar } from "react-bootstrap";
import Home from "./components/Home/Home";

function App() {
  // state declaration
  const [token, setToken] = useState(localStorage.getItem("VetToken") || "");
  const [isLoading, setLoading] = useState(false);
  const [postData, setData] = useState({});
  const [errorMsg, setError] = useState();
  const [passVisibility, setPassVisibility] = useState(0);

  // function declaration
  const HandleInput = (input) => {
    input.preventDefault()
    let data = { ...postData, [input.target.name]: input.target.value }
    setData(data);
  };

  const SetVisibility = (res) => {
    setPassVisibility(res);
  };

  const SubmitData = (option) => {
    setLoading(true);
    user({
      method: option,
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

  return (
    <>
      <div className="App">
        <Router>
          <VetNavbar />
          <Switch>
            <Route path="/page1">
              <Doctor />
            </Route>
            <Route path="/page2">
              <Doctor2 />
            </Route>
            <Route path="/page3">
              <User1 />
            </Route>
            <Route path="/auth">
              <Auth
                function={{
                  HandleInput: HandleInput,
                  SetVisibility: SetVisibility,
                  SubmitData: SubmitData,
                  setLoading: setLoading,
                }}
                data={{
                  token: token,
                  isLoading: isLoading,
                  postData: postData,
                  errorMsg: errorMsg,
                  passVisibility: passVisibility
                }}
              />
            </Route>
            <Route path="/DemoIcon">
              <DemoIcon />
            </Route>
            <Route path="/ClinicChoose">
              <ClinicChoose />
            </Route>
            <Route path="/BookingContent">
              <BookingContent />
            </Route>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
