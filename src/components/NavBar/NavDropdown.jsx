import React, { useState } from "react";
import { Image, Col, Dropdown, DropdownButton} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { VetArrowDown, VetDoor } from "../../assets/icons";
import './custom.css'

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

  // useEffect(() => {
  //   localStorage.getItem("token") && setLogin(true);
  // }, [isLogin]);



  return (
    <>
      <Dropdown style={{ cursor: "pointer" }}>
        <Dropdown.Toggle
          drop="left"
          as={CustomToggle}
          id="dropdown-custom-components"
        >
          <VetArrowDown style={{ cursor: "pointer" }} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right custom-dropdown-menu">
            <div className="dropdown-item d-flex f-col align-items-center">
              <Col>
                <Image src={props.data.image}  height={50} width={50} roundedCircle/>
              </Col>
              <Col>
                <h5 className="m-0 v-text-donker">{props.data.name}</h5>
                <p className="m-0 v-text-donker">{props.data.phone}</p>
              </Col>
            </div>
            <Dropdown.Item className="dropdown-item" onClick={props.logout}><VetDoor/><span className="mx-2">Logout</span></Dropdown.Item>
            {/* <Link className="dropdown-item" to="/clinicChoose">Profile</Link> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
