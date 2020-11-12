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
<<<<<<< HEAD
import ClinicChooseFiltered from './components/Clinic/ClinicChoose/ClinicChooseFiltered'
import ClinicSearch from './components/Clinic/ClinicChoose/ClinicSearch'
=======
>>>>>>> e6681a954a936274bdc8574b6b021a4747414b34
import { user } from "./database";
import BookingDetail from "./pages/BookingDetail";
import BookingResume from "./pages/BookingResume";
import { Container, Navbar } from "react-bootstrap";
import Home from "./pages/Home";
import Users from "./pages/Users/";
import { useHistory, Redirect  } from "react-router-dom";
import {VetPaw} from './assets/icons'

const Success = (props) => {
  useEffect(()=>{
    props.SetBarState({
      footer: false,
      navbar: false
    })
  },[])
  return(
    <div className="vet-paws">
      {[0,1,2,3,4,5,6].map((item)=> 
        item%2 === 0 
          ? <VetPaw className="vet-paw" size={60} style={{display:"block",transform:"rotateZ(45deg)",position:"relative",left:"60px"}}/> 
          : <VetPaw className="vet-paw" size={60} style={{display:"block",transform:"rotateZ(-45deg)"}}/>
      )}
    </div>
  )
}

function App() {
  
  // state declaration
  const [token, setToken] = useState(localStorage.getItem("VetToken") || "");
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false)
  const [postData, setData] = useState({});
  const [errorMsg, setError] = useState();
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

  const history = useHistory();
  useEffect(() => {
    userDatas && setLogin(true)
  }, [userDatas]);
  // function declaration
  const HandleInput = (input) => {
    input.preventDefault();
    let data = { ...postData, [input.target.name]: input.target.value };
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
          console.log("apicall apps",res.data.data.user)
          SetUserDatas({ ...res.data.data.user });
        });
      });
  };

  const handleFooter = (option) => {
    //console.log(option);
  };
  return (
    <>
      
      <div className="App">
        <Router>
        {/* {isLogin && <Redirect to={`${process.env.PUBLIC_URL}/`} />} */}
          <VetNavbar barState={barState} data={{
            isLogin: isLogin,
            userDatas: userDatas,
          }}/>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/user/:role`}>
              <Users/>
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
            <Route exact path={`${process.env.PUBLIC_URL}/booking`}>
              <ClinicChoose SetBarState={SetBarState} />
            </Route>
<<<<<<< HEAD
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/:id`}>
=======
            <Route path={`${process.env.PUBLIC_URL}/booking/:id`}>
>>>>>>> e6681a954a936274bdc8574b6b021a4747414b34
              <BookingDetail />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/success`}>
              <Success data={userDatas} SetBarState={SetBarState} />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/booking/detail/resume`}>
              <BookingResume />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home SetBarState={SetBarState} />
            </Route>
<<<<<<< HEAD
            {/* <Route path="/doctor" component={Doctor} />             */}
            <Route path="/booking/lokasi/:lokasi" component={ClinicChooseFiltered} />
            <Route path="/booking/search/:search" component={ClinicSearch} />
            <Route path="/booking/:page" component={ClinicChoose} />
            <Route path="/auth" component={Auth} />
=======
>>>>>>> e6681a954a936274bdc8574b6b021a4747414b34
          </Switch>
        </Router>
      </div>
      <Footer handleFooter={handleFooter} data={"test"} barState={barState} />
    </>
  );
}

export default App;
