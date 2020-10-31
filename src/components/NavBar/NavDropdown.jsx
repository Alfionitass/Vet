import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetArrowDown } from "../../assets/icons";

export default function NavDropdown(props) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <p
      style={{ marginBottom: 0 }}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </p>
  ));
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <>
      <Dropdown style={{ cursor: "pointer" }} menuAlign="left">
        <Dropdown.Toggle
          drop="left"
          as={CustomToggle}
          id="dropdown-custom-components"
          menuAlign="left"
        >
          <VetArrowDown style={{ cursor: "pointer" }} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">
          <Dropdown.Item onClick={""} href="#/edit">
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={""} href="#/delete">
            Logout
          </Dropdown.Item>
          <Dropdown.Item onClick={""} href="#/delete">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
