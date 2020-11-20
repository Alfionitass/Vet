import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import Auth from "./pages/Auth";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import DemoIcon from "./demo/demoIcon";
import {} from "./assets/icons";
import VetNavbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ClinicChoose from "./components/Clinic/ClinicChoose/ClinicChoose";
import { user } from "./database";
import BookingDetail from "./pages/BookingDetail";
import BookingResume from "./pages/BookingResume";
import { Container, Navbar } from "react-bootstrap";
import Home from "./pages/Home";
import Users from "./pages/Users/";
import { useHistory, Redirect } from "react-router-dom";
import { VetPaw } from "./assets/icons";
import ClinicChooseFiltered from "./components/Clinic/ClinicChoose/ClinicChooseFiltered";
import ClinicSearch from "./components/Clinic/ClinicChoose/ClinicSearch";

import PageLoad from './components/reusable/utilities/pageLoad'
import Logout from './components/reusable/utilities/logout'
import { getUserData } from "./redux/actions/auth";
import { getAppointment, getHistory } from "./redux/actions/appointment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


function App(props) {
  // state declaration
  const [token, setToken] = useState(localStorage.getItem("VetToken") || "");
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [postData, setData] = useState({});
  const [errorMsg, setError] = useState();
  const [imgPreview, SetImgPreview] = useState(null);
  const [userData, SetUserData] = useState(
    localStorage.getItem("userData") || ""
  );
  const [passVisibility, setPassVisibility] = useState(0);
  const [userDatas, SetUserDatas] = useState(
    localStorage.getItem("userData2") || ""
  );
  const [barState, SetBarState] = useState({
    navbar: true,
    footer: true,
  });
  useEffect(() => {
    token.length && props.getUserData(token)
  }, [token]);

  useEffect(() => {
    if(Object.keys(props.AuthPayloads.user).length){
      props.getAppointment(props.AuthPayloads.access_token,props.AuthPayloads.user.role);
      props.getHistory(props.AuthPayloads.access_token,props.AuthPayloads.user.role);
    } 
  },[props.AuthPayloads.access_token])


  let history = useHistory();
  useEffect(() => {
    userDatas && setLogin(true);
  }, [userDatas]);
  // function declaration
  const HandleInput = (input) => {
    // input.preventDefault();
    console.log(input)
    let data = { ...postData, [input.target.name]: input.target.value };
    setData(data);
  };

  const HandleInputFile = (input) => {
    input.preventDefault();
    let data = { ...postData, [input.target.name]: input.target.files[0] };
    setData(data);
    SetImgPreview(input.target.files[0]);
  };

  const SetVisibility = (res) => {
    setPassVisibility(res);
  };

  const SubmitData = (option) => {
    setLoading(true);
    user({
      method: option,
      data: { ...postData },
    })
      .then((res) => {
        if (res.status === 400) {
          setError(res.data.message);
        } else {
          setError("");
          setToken(res.data.access_token);
          return res.data.access_token;
        }
      })
      .then((token) => {
        user({
          method: "self",
          access_token: token,
        }).then((res) => {
          localStorage.setItem(
            "userData2",
            JSON.stringify({ ...res.data.data.user })
          );
          //console.log("apicall apps", res.data.data.user);
          SetUserDatas({ ...res.data.data.user });
        });
      });
  };

  useEffect(() => {
    //console.log("CHEKC ISLOAD HOEME",props.AuthPayloads.isLoading)
  },[props])
  const handleFooter = (option) => {
    //console.log(option);
  };

 
  return (
     <>
      <div className="App">
        <Router>
          {/* {isLogin && <Redirect to={`${process.env.PUBLIC_URL}/`} />} */}
         {props.AuthPayloads.isLoading && <PageLoad data="CONNECTING"/>}
         {props.AuthPayloads.isLogout && <Logout data="LOGOUT"/>}
          
          <VetNavbar
            barState={barState}
            data={{
              isLogin: isLogin,
              userDatas: userDatas,
            }}
          />
          <Switch>
            <Route path={[`${process.env.PUBLIC_URL}/user/:role`,`${process.env.PUBLIC_URL}/user`]}>
              <Users function={{
                  HandleInput: HandleInput,
                  HandleInputFile: HandleInputFile,
                  SetVisibility: SetVisibility,
                  SubmitData: SubmitData,
                  setData : setData,
                }}
                data={{
                  postData: postData,
                  imgPreview: imgPreview,
                }}/>
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/auth`}> 
              <Auth
                SetBarState={SetBarState}
                function={{
                  HandleInput: HandleInput,
                  SetVisibility: SetVisibility,
                  SubmitData: SubmitData,
                  setLoading: setLoading,
                  SetUserData: SetUserData,
                }}
                data={{
                  token: token,
                  isLoading: isLoading,
                  postData: postData,
                  errorMsg: errorMsg,
                  passVisibility: passVisibility,
                  userData: userData,
                  isLogin: isLogin,
                }}
              />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/DemoIcon`}>
              <DemoIcon />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/resume`}>
              <BookingResume />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/:id`}>
              <BookingDetail />
            </Route>
            <Route
              path="/demo-Vet/booking/search/:search"
              component={ClinicSearch}
            />
            <Route
              path="/demo-Vet/booking/lokasi/:lokasi"
              component={ClinicChooseFiltered}
            />
            <Route path={`${process.env.PUBLIC_URL}/booking/:page`}>
              <ClinicChoose SetBarState={SetBarState} />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home SetBarState={SetBarState} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer handleFooter={handleFooter} data={"test"} barState={barState} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
    AppointmentPayloads: state.Appointment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUserData, getAppointment, getHistory }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
