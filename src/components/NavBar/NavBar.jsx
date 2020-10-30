import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetLogoSymbol } from "../../assets/icons";
import NavMenu from './NavMenu'

export default function NavBar() {
  const userData = useState(JSON.parse(localStorage.getItem('userData')));
  const [state, setstate] = useState(window.location.pathname);
  useEffect(()=> {
    console.log(userData[0])
  })
  return (
    <Navbar expand="lg" className={styles.contain}>
      <Navbar.Brand>
        <Link to="/">
          <VetLogoSymbol color="#FDCB5A" />
        </Link>
      </Navbar.Brand>
      <span className={styles.span}>VET</span>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavMenu data={userData[0]}/>
      </Navbar.Collapse>
    </Navbar>
  );
}

// export default withRouter(NavBar);
