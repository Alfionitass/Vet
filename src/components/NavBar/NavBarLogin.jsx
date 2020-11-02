import React from 'react';
// import { withRouter } from "react-router";
import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom" ;
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/doctorProfile.png";
import styles from "./NavBar.module.css";

export default function NavBarLogin() {
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
            <Dropdown>
                <Dropdown.Toggle className={styles.linkk} id="dropdown-basic" >
                    Hi, Alex
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="mr-auto d-flex flex-row">
                        <Image src={profile} />
                        <Dropdown.Item className="v-text-donker">Alexandria Raihan
                            <p>+62 82184291235</p>
                            </Dropdown.Item>
                    </div>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <Link to="/">
                            Logout
                        </Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <NavDropdown title="Hi, Alex" className={styles.linkk} id="basic-nav-dropdown" >
                <div className="mr-auto d-flex flex-row">
                    <Image src={profile} />
                    <NavDropdown.Item className="v-text-donker">Alexandria Raihan
                        <p>+62 82184291235</p>
                    </NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/">
                        Logout
                    </Link>
                </NavDropdown.Item>
            </NavDropdown> */}
          </div>
        </Navbar.Collapse>
      
    </Navbar>
  )
}

// export default withRouter(NavBar);
