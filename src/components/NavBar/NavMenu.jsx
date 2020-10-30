import React from "react";
import {  NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavMenu(props) {
  return (
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
      <NavLink to="/ClinicChoose" className={styles.link}>
        <span>Find a Clinic</span>
      </NavLink>
      <NavLink to="/auth/" className={styles.link}>
        <span>Register</span>
      </NavLink>
      <NavLink to="/auth/login" className={styles.link}>
        <span>Login</span>
      </NavLink>
    </div>
  );
}
