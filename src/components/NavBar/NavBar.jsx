import React from 'react';
// import { withRouter } from "react-router";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom" ;
import logo from "../../assets/img/logo.png";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className={styles.contain}>
      <Navbar.Brand>
          <Link to="/">
            <Image src={logo} className={styles.img} />
          </Link>
        </Navbar.Brand>
        <span className={styles.span}>VET</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ml-auto d-flex flex-row">
            <NavLink to="/" className={styles.link}>
              <span>Home</span>
            </NavLink>
            <NavLink to="/" className={styles.link}>
              <span>Clinic Chat</span>
            </NavLink>
            <NavLink to="/" className={styles.link}>
              <span>Doctor</span>
            </NavLink>
            <NavLink to="/" className={styles.link}>
              <span>Find a Clinic</span>
            </NavLink>
            <NavLink to="/" className={styles.link}>
              <span>Register</span>
            </NavLink>
            <NavLink to="/" className={styles.link}>
              <span>Login</span>
            </NavLink>
          </div>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

// export default withRouter(NavBar);
