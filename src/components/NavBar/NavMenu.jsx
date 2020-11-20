import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetArrowDown } from "../../assets/icons";
import NavDropdown from "./NavDropdown";
import {setLogout} from "../../redux/actions/auth"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function NavMenu(props) {
  useEffect(() => {
    // console.log("ONNAVBAR",props.AuthPayloads)
  },[props])

  const [isLogin, setLoginState] = useState(null);
  const [role, setRole] = useState("")

  useEffect(() => {
    props.AuthPayloads.user.role && setRole(props.AuthPayloads.user.role)
  },[props])

  const history = useHistory();
  const LogoutAction = () => {
    localStorage.clear()
    props.setLogout()
    history.replace('/')
  }

  return (
    <div className="ml-auto d-flex flex-row align-items-center justify-content-between">
      <NavLink to={`${process.env.PUBLIC_URL}`} className={styles.link}>
        <span>Home</span>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/clinic`} className={styles.link}>
        <span>Clinic Chat</span>
      </NavLink>  
      {role && <NavLink to={`${process.env.PUBLIC_URL}/user/${role}`} className={styles.link}>
      <span>{role[0].toUpperCase()}{role.slice(1)}</span>
      </NavLink>}
      <NavLink to={`${process.env.PUBLIC_URL}/booking/1`} className={styles.link}>
        <span>Find a Clinic</span>
      </NavLink>
      {Object.keys(props.AuthPayloads.user).length ? (
        <>
          <Image height={50} width={50} src={props.AuthPayloads.user.image} roundedCircle className="ml-3" />
          <NavLink to={`${process.env.PUBLIC_URL}/${props.AuthPayloads.user.role}`} className={styles.name}>
            <span>Hi, {props.AuthPayloads.user.name}</span>
          </NavLink>
          <NavDropdown data={props.AuthPayloads.user} logout={LogoutAction}/>
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

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setLogout },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)