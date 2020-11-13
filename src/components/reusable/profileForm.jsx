import React, { useState } from "react";
import { ButtonGroup, Card, Form, ToggleButton, Button } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { GiFemale, GiMale } from "react-icons/gi";
import { CgUnavailable, CgSun } from "react-icons/cg";
import { VetPDog, VetPRabbit, VetPHamster, VetPCat } from "../../assets/icons";

import styles from "../../assets/sass/reusable/profileForm.module.scss";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";

export default function ProfileForm({ config: { mode },data }) {
  const [status, setStatus] = useState("0");
  const [gender, setGender] = useState("1");
  
  const handleClick = () => {
    Swal.fire({
      title: "Update Sukses!",
      icon: "success",
      background: "#1A3150",
      iconColor: "yellow",
      showConfirmButton: false,

      customClass: {
        title: "text-light",
      },
    });
  };
  
  return (
    <>
      <Card>
        <Form>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Upload Photo
          </Card.Header>
          <Card.Body>
            <div
              className="profile--upload p-3 d-flex justify-content-center align-items-center flex-column"
              style={{
                width: "180px",
                height: "180px",
                border: "1px solid black",
              }}
            >
              <HiPlus size={40} className="font-weight-bold" />
              <p className="justify-self-end">Upload Image</p>
              <Form.Group className="mb-4" id="status">
                <Form.Text>Upload</Form.Text>
              </Form.Group>
            </div>
          </Card.Body>
          {(mode === "veterinary" || mode === "clinic") && (
            <>
              <Card.Header
                style={{ backgroundColor: "unset" }}
                className="font-weight-bold"
              >
                {mode[0].toUpperCase()}
                {mode.slice(1)} Information
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-4" id="status">
                  <Form.Text>Status</Form.Text>
                  <ButtonGroup
                    toggle
                    name="radiogroup"
                    className="d-flex align-items-center"
                  >
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={1}
                      type="radio"
                      variant={status === "1" ? "success" : ""}
                      name="status"
                      value="1"
                      checked={status === "1"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <CgSun size={"24px"} />
                      <span className="mx-3 my-0">
                        {mode === "veterinary" ? "Active" : "Buka"}
                      </span>
                    </ToggleButton>
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={2}
                      type="radio"
                      variant={status === "0" ? "danger" : ""}
                      name="status"
                      value="0"
                      checked={status === "0"}
                      onChange={(e) => setStatus(e.currentTarget.value)}
                    >
                      <CgUnavailable size={"24px"} />
                      <span className="mx-3 my-0">
                        {mode === "veterinary" ? "Offline" : "Tutup"}
                      </span>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Text>
                    Waktu {mode === "veterinary" ? "Aktif" : "Buka"}
                  </Form.Text>
                  <Form.Control as="select">
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                  </Form.Control>
                </Form.Group>
              </Card.Body>
            </>
          )}
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Basic Information
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-4" id="status">
              <Form.Text>Username</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                value="Alvin Mantovani"
              />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Text>Gender</Form.Text>
              <ButtonGroup toggle name="radiogroup">
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={gender === "1" ? "primary" : ""}
                  name="gender"
                  value="1"
                  checked={gender === "1"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <GiMale />{" "}
                  <span className={gender === "0" ? "text-white" : ""}>
                    Male
                  </span>
                </ToggleButton>
                <ToggleButton
                  key={2}
                  type="radio"
                  variant={gender === "0" ? "pink" : ""}
                  name="gender"
                  value="0"
                  checked={gender === "0"}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <GiFemale />
                  <span className={gender === "1" ? "text-white" : ""}>
                    Female
                  </span>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
            {mode === "veterinary" && <Form.Group controlId="formBasicEmail">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="It's my name"
                value="1 Days"
              />
              <Form.Text className="text-muted">Doctor Experience.</Form.Text>
            </Form.Group>}
          </Card.Body>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Contact Details
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Nomor Telefon</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                value="+628998844"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Email</Form.Text>
              <Form.Control
                type="text"
                placeholder="phone number"
                value="alvin@vet.com"
              />
            </Form.Group>
          </Card.Body>
          {mode === "patient" && (
            <>
              <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
                Pets Details
              </Card.Header>
              <Card.Body className="d-flex">
                <Card className="m-3">
                  <VetPDog className="m-3" size={"80"} />
                </Card>
                <Card className="m-3">
                  <VetPCat className="m-3" size={"80"} />
                </Card>
                <Card className="m-3">
                  <VetPRabbit className="m-3" size={"80"} />
                </Card>
                <Card className="m-3">
                  <VetPHamster className="m-3" size={"80"} />
                </Card>
              </Card.Body>
            </>
          )}
        </Form>
      </Card>
      <Button
        className="font-weight-bold px-5 float-right my-3"
        onClick={handleClick}
        variant="warning"
      >
        Simpan
      </Button>
    </>
  );
}
