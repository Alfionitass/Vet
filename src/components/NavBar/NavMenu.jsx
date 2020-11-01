import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetArrowDown } from "../../assets/icons";
import NavDropdown from "./NavDropdown";
export default function NavMenu(props) {
  const [isLogin, setLoginState] = useState(null);
  useEffect(()=>{

  },[isLogin])

  const Logout = () => {
    localStorage.clear();
    setLoginState(false);
  }

  useEffect(()=>{
    console.log(props)
  })
  return (
    <div className="ml-auto d-flex flex-row align-items-center justify-content-between">
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
      {console.log(props.data)}
      {props.data ? (
        <>
          <Image width={50} src={props.data.image} />
          <NavLink to={`/${props.data.role}`} className={styles.name}>
            <span>Hi, {props.data.name}</span>
          </NavLink>
          <NavDropdown data={props.data} logout={Logout}/>
        </>
      ) : (
        <>
          <NavLink to="/auth/" className={styles.link}>
            <span>Register</span>
          </NavLink>
          <NavLink to="/auth/login" className={styles.link}>
            <span>Login</span>
          </NavLink>{" "}
        </>
      )}
    </div>
  );
}
