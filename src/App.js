import { Details } from "@material-ui/icons";
import React from "react";
import "./App.css";
import ClinicChoose from "./components/Clinic/ClinicChoose/ClinicChoose";
import DetailsComp from "./components/Details/DetailsComp";
import Footer from "./components/Footer/Footer";
import UserAppointmentApproval from "./components/Users/appointment/UserAppointmentApproval";
import UserAppointmentBook from "./components/Users/appointment/UserAppointmentBook";
import ProfileUser from "./components/Users/ProfileUser";
// import NavBar from "./components/NavBar/NavBaratas.jsx";



function App() {
  return (
  <>
  	{/* <NavBar /> */}
    {/* <ClinicChoose /> */}
    <ProfileUser />
    {/* <UserAppointmentApproval /> */}
    {/* <UserAppointmentBook /> */}
    {/* <DetailsComp /> */}
    <Footer />
  </>

  );
}

export default App;
