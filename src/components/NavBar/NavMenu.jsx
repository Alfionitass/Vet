import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetArrowDown } from "../../assets/icons";
import NavDropdown from "./NavDropdown";
export default function NavMenu(props) {
  const [isLogin, setLoginState] = useState(null);
  const [role] = useState(JSON.parse(localStorage.getItem('userData'))?.role || "doctor")
  const Logout = () => {
    localStorage.clear();
    setLoginState(false);
  }
  return (
    <div className="ml-auto d-flex flex-row align-items-center justify-content-between">
      <NavLink to={`${process.env.PUBLIC_URL}`} className={styles.link}>
        <span>Home</span>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/clinic`} className={styles.link}>
        <span>Clinic Chat</span>
      </NavLink>  
      <NavLink to={`${process.env.PUBLIC_URL}/user/${role}`} className={styles.link}>
      <span>{role[0].toUpperCase()}{role.slice(1)}</span>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/booking/1`} className={styles.link}>
        <span>Find Clinic</span>
      </NavLink>
      {props.data ? (
        <>
          <Image width={50} src={props.data.image} className="ml-3" />
          <NavLink to={`${process.env.PUBLIC_URL}/user/${props.data.role}`} className={styles.name}>
            <span>Hi, {props.data.name}</span>
          </NavLink>
          <NavDropdown data={props.data} logout={Logout}/>
        </>
      ) : (
        <>
          <NavLink to={`${process.env.PUBLIC_URL}/auth`} className={styles.link}>
            <span>Register</span>
          </NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/auth/login`} className={styles.link}>
            <span>Login</span>
          </NavLink>{" "}
        </>
      )}
    </div>
  );
}
