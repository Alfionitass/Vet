import { Details } from "@material-ui/icons";
import React from "react";
import "./App.css";
import ClinicChoose from "./components/Clinic/ClinicChoose/ClinicChoose";
import DetailsComp from "./components/Details/DetailsComp";
import DoctorEditProfile from "./components/Doctor/DoctorEditProfile";
import Footer from "./components/Footer/Footer";
// import NavBar from "./components/NavBar/NavBaratas.jsx";



function App() {
  return (
  <div>
  	{/* <NavBar /> */}
    <ClinicChoose />
    {/* <DetailsComp /> */}
    <Footer />
  </div>

  );
}

export default App;
