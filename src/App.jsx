import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import logo from "./logo.svg";
import Doctor from "./components/doctor/profile";
import Doctor2 from "./components/doctor/appointment";
import Auth from "./components/auth";
import User1 from './components/user/profile'
import DemoIcon from './demo/demoIcon'
import {  } from './assets/icons'
import NavBar from './components/NavBar/NavBar'
import NavBarLogin from './components/NavBar/NavBarLogin'
import Footer from './components/Footer/Footer'
import ClinicChoose from './components/Clinic/ClinicChoose/ClinicChoose';
import ClinicSearch from './components/Clinic/ClinicChoose/ClinicSearch';
import { user } from './database';
import BookingDetail from './pages/BookingDetail';
import BookingResume from './pages/BookingResume';
import ClinicChooseFiltered from './components/Clinic/ClinicChoose/ClinicChooseFiltered'
import { Container, Navbar } from 'react-bootstrap';
import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './assets/sass/main.scss'

function App() {
  const [data, setData] = useState();
  // axios.get('http://localhost:3000/names').then(res => setData(res)).catch(res => res.response)
  return (
      <Router>      
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/doctor" component={Doctor} />
          <Route path="/booking/detail/resume/:id" component={BookingResume} />
          <Route path="/booking/detail/:id" component={BookingDetail} />
          <Route path="/booking/lokasi/:lokasi" component={ClinicChooseFiltered} />
          <Route path="/booking/search/:search" component={ClinicSearch} />
          <Route path="/booking/:page" component={ClinicChoose} />
          <Route path="/auth" component={Auth} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
