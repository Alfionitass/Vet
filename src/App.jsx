import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/sass/main.scss'
import Doctor from "./components/doctor/profile";
import Doctor2 from "./components/doctor/appointment";
import Auth from "./components/auth";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import User1 from './components/user/profile'
import DemoIcon from './demo/demoIcon'
import {  } from './assets/icons'
import NavBar from './components/NavBar/NavBar'



import Footer from './components/Footer/Footer'
import ClinicChoose from './components/Clinic/ClinicChoose/ClinicChoose';
import { user } from './database';
import BookingContent from './components/BookingDetail/BookingContent';
import { Container, Navbar } from 'react-bootstrap';
import Home from './components/Home/Home';


function App() {
  useEffect(() => {
    
    console.log("TEST")
  })
  const [data, setData] = useState();
  // axios.get('http://localhost:3000/names').then(res => setData(res)).catch(res => res.response)
  return (
    <>
    <div className="App">
      <Router>        
      <NavBar />
      {/* <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">user profile</Link>
      <Link to="/DemoIcon">DemoIcon</Link>
      <Link to="/register">Register</Link>
      <Link to='/chooseClinic'>Clinic Choose</Link>
      <Link to='/BookingContent'>BookingContent</Link> */}
        <Switch>
          <Route path="/page1">
            <>
            <Doctor/>
            {/* <ClinicChoose /> */}            
            {/* <UserProfile />             */}
            </>
          </Route>
          <Route path="/page2">
            <Doctor2 />
          </Route>
          <Route path="/page3">
            <User1 />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/DemoIcon">
            <DemoIcon />
          </Route>
          <Route path="/ClinicChoose">            
            <ClinicChoose />            
          </Route>
          <Route path='/BookingContent'>
            {/* <Container> */}
            <BookingContent />            
            {/* </Container> */}
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
