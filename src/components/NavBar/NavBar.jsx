import React, { useEffect, useState } from "react";
// import { withRouter } from "react-router";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import styles from "./NavBar.module.css";
import { VetLogoSymbol } from "../../assets/icons";

export default function NavBar() {
  const [state, setstate] = useState(window.location.pathname);

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
        <div className="ml-auto d-flex flex-row">
          <NavLink to="/" className={styles.link}>
            <span>Home</span>
          </NavLink>
          <NavLink to="/clinic" className={styles.link}>
            <span>Clinic Chat</span>
          </NavLink>
          <NavLink to="/doctor" className={styles.link}>
            <span>Doctor</span>
          </NavLink>
          <NavLink to="/booking/" className={styles.link}>
            <span>Find a Clinic</span>
          </NavLink>
          <NavLink to="/auth/" className={styles.link}>
            <span>Register</span>
          </NavLink>
          <NavLink to="/auth/login" className={styles.link}>
            <span>Login</span>
          </NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

// export default withRouter(NavBar);
