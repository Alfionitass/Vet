/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Card,
  Form,
  ToggleButton,
  Button,
  Modal,
  InputGroup,
} from "react-bootstrap";

import {
  VetPlusBox,
  VetFemale,
  VetMale,
  VetUnavailable,
  VetSun,
  VetPDog,
  VetPCat,
  VetAddPets,
  VetArrowLeft,
  VetFlagID,
} from "../../assets/icons";

import styles from "../../assets/sass/reusable/profileForm.module.scss";
import "./profileForm.css";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { editUser, deleteAnimal } from "../../redux/actions/auth";

function ProfileForm({
  config: { mode },
  data: { postData, imgPreview },
  function: { HandleInput, HandleInputFile, setData },
  AuthPayloads,
  editUser,
  deleteAnimal,
}) {
  const [status, setStatus] = useState("0");
  const [gender, setGender] = useState(AuthPayloads?.user?.patient?.gender);
  const [modalShow, setModalShow] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const history = useHistory();

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const modalHandle = () => {
    setData({});
    setModalShow(false);
  };
  
  const PetModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex f-col">
          <Card
            name="type"
            // onClick={(e) => {
            //   setHighlight(1);
            //   HandleInput(e)
            // }}
            className={`m-3 ${highlight == 1 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Dog</Card.Title>
            <VetPDog className="m-3" size={"80"} />
          </Card>
          <Card
            onClick={() => setHighlight(2)}
            className={`m-3 ${highlight == 2 ? "selected-option" : ""}`}
          >
            <Card.Title className="text-center">Cat</Card.Title>
            <VetPCat className="m-3" size={"80"} />
          </Card>
        </Modal.Body>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter Pet Name" />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Label>Gender</Form.Label>
              <ButtonGroup toggle name="radiogroup">
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={gender == true ? "primary" : ""}
                  name="gender"
                  value={true}
                  checked={gender == true}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetMale />{" "}
                  <span className={gender == false ? "text-white" : ""}>
                    Male
                  </span>
                </ToggleButton>
                <ToggleButton
                  key={2}
                  type="radio"
                  variant={gender == false ? "pink" : ""}
                  name="gender"
                  value={false}
                  checked={gender == false}
                  onChange={(e) => setGender(e.currentTarget.value)}
                >
                  <VetFemale />
                  <span className={gender == true ? "text-white" : ""}>
                    Female
                  </span>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Add Pet</Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Card>
        <Form>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Upload Photo
            <span
              className="float-right d-flex"
              style={{ cursor: "pointer" }}
              onClick={() => history.goBack()}
            >
              <VetArrowLeft /> <strong className="mx-4">Back</strong>
            </span>
          </Card.Header>
          <Card.Body>
            <input
              style={{
                opacity: "0",
                position: "absolute",
                zIindex: "-1",
                cursor: "pointer",
                height: "187px",
                width: "187px",
                overflow: "hidden",
              }}
              type="file"
              name="image"
              onChange={(e) => HandleInputFile(e)}
            />
            {imgPreview ? (
              <img
                style={{ height: "187px", width: "187px" }}
                src={URL.createObjectURL(imgPreview)}
                alt={imgPreview.name}
              />
            ) : (
              <VetPlusBox size={187} />
            )}
          </Card.Body>
          {(mode == "veterinary" || mode == "clinic") && (
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
                  <Form.Label>Status</Form.Label>
                  <ButtonGroup
                    toggle
                    name="radiogroup"
                    className="d-flex align-items-center"
                  >
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={1}
                      type="radio"
                      variant={postData.status == "active" ? "success" : ""}
                      name="status"
                      value="active"
                      checked={postData.status == "active"}
                      onChange={(e) => HandleInput(e)}
                    >
                      <VetSun
                        size={"24px"}
                        color={postData.status == "active" && "white"}
                      />
                      <span
                        className={`mx-3 my-0 ${
                          postData.status == "offline" ? "text-white" : ""
                        }`}
                      >
                        {mode == "veterinary" ? "Active" : "Buka"}
                      </span>
                    </ToggleButton>
                    <ToggleButton
                      className="d-flex justify-content-center align-items-center"
                      key={2}
                      type="radio"
                      variant={postData.status == "offline" ? "danger" : ""}
                      name="status"
                      value="offline"
                      checked={postData.status == "offline"}
                      onChange={(e) => HandleInput(e)}
                    >
                      <VetUnavailable
                        size={"24px"}
                        color={postData.status == "offline" && "white"}
                      />
                      <span
                        className={`mx-3 my-0 ${
                          postData.status == "active" ? "text-white" : ""
                        }`}
                      >
                        {mode == "veterinary" ? "Offline" : "Tutup"}
                      </span>
                    </ToggleButton>
                  </ButtonGroup>
                </Form.Group>
              </Card.Body>
            </>
          )}
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Basic Information
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-4" id="status">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => HandleInput(e)}
                name="name"
                type="text"
                placeholder="It's my name"
                value={postData.name || AuthPayloads.user.name}
              />
            </Form.Group>
            <Form.Group className="mb-4" id="gender">
              <Form.Label>Gender</Form.Label>
              {AuthPayloads?.veterinary ? (
                <ButtonGroup toggle name="radiogroup">
                  <ToggleButton
                    key={1}
                    type="radio"
                    variant={postData.genderVet == "true" ? "primary" : ""}
                    name="genderVet"
                    value="true"
                    checked={postData.genderVet == "true"}
                    onChange={(e) => HandleInput(e)}
                  >
                    <VetMale
                      size={22}
                      color={postData.genderVet == "true" && "white"}
                    />
                    <span
                      className={`mx-3 ${
                        postData.genderVet == "false" ? "text-white" : ""
                      }`}
                    >
                      Male
                    </span>
                  </ToggleButton>
                  <ToggleButton
                    key={2}
                    type="radio"
                    variant={postData.genderVet == "false" ? "pink" : ""}
                    name="genderVet"
                    value="false"
                    checked={postData.genderVet == "false"}
                    onChange={(e) => HandleInput(e)}
                  >
                    <VetFemale
                      size={34}
                      color={postData.genderVet == "false" && "white"}
                    />
                    <span
                      className={`mx-3 ${
                        postData.genderVet == "true" ? "text-white" : ""
                      }`}
                    >
                      Female
                    </span>
                  </ToggleButton>
                </ButtonGroup>
              ) : (
                <ButtonGroup toggle name="radiogroup">
                  <ToggleButton
                    key={1}
                    type="radio"
                    variant={postData.gender == "true" ? "primary" : ""}
                    name="gender"
                    value="true"
                    checked={postData.gender == "true"}
                    onChange={(e) => HandleInput(e)}
                  >
                    <VetMale
                      size={22}
                      color={postData.gender == "true" && "white"}
                    />
                    <span
                      className={`mx-3 ${
                        postData.gender == "false" ? "text-white" : ""
                      }`}
                    >
                      Male
                    </span>
                  </ToggleButton>
                  <ToggleButton
                    key={2}
                    type="radio"
                    variant={postData.gender == "false" ? "pink" : ""}
                    name="gender"
                    value="false"
                    checked={postData.gender == "false"}
                    onChange={(e) => HandleInput(e)}
                  >
                    <VetFemale
                      size={34}
                      color={postData.gender == "false" && "white"}
                    />
                    <span
                      className={`mx-3 ${
                        postData.gender == "true" ? "text-white" : ""
                      }`}
                    >
                      Female
                    </span>
                  </ToggleButton>
                </ButtonGroup>
              )}
            </Form.Group>
            {mode == "veterinary" && (
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <InputGroup>
                  <Form.Control
                    onChange={(e) => HandleInput(e)}
                    type="number"
                    placeholder="It's my name"
                    name="experience"
                    value={
                      postData?.experience ||
                      (AuthPayloads.user?.veterinary?.experience !== null
                        ? AuthPayloads.user?.veterinary?.experience
                        : 0)
                    }
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                      Years
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>

                <Form.Label className="text-muted">
                  Doctor Experience.
                </Form.Label>
              </Form.Group>
            )}
          </Card.Body>
          <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
            Contact Details
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    <VetFlagID />{" "}
                    <span className="vet-title-2 v-text-donker mx-2">+62</span>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) => HandleInput(e)}
                  value={
                    postData?.phone ||
                    (AuthPayloads.user?.phone !== null
                      ? AuthPayloads.user?.phone
                      : 0)
                  }
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone number"
                name="email"
                onChange={(e) => HandleInput(e)}
                value={
                  postData?.email ||
                  (AuthPayloads.user?.email !== null
                    ? AuthPayloads.user?.email
                    : 0)
                }
              />
            </Form.Group>
            <Button
              className="font-weight-bold px-5 float-right my-3"
              onClick={() => editUser(postData, AuthPayloads.access_token)}
              variant="warning"
            >
              Simpan
            </Button>
          </Card.Body>
        </Form>

        {mode == "patient" && (
          <>
            <Card.Header className={`font-weight-bold ${styles["bg-unset"]}`}>
              Pets Details
            </Card.Header>
            <Card.Body className="d-flex overflow-auto">
              <div className="d-flex">
                <VetAddPets
                  className="mx-2"
                  onClick={() => setModalShow(true)}
                />
                {AuthPayloads.user.patient &&
                  AuthPayloads?.user?.patient?.animals.map((item) =>
                    item.type == "Dog" ? (
                      <Card
                        style={{ width: "206px" }}
                        className="d-flex align-items-center mx-2"
                      >
                        <span
                          aria-hidden="true"
                          className="vet-heading"
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            right: "10px",
                          }}
                          onClick={() =>
                            deleteAnimal(AuthPayloads.access_token, item._id)
                          }
                        >
                          ×
                        </span>
                        <VetPDog size={80} />
                        <Card.Text className="vet-title-2">
                          {item.name}/
                          {item.gender ? (
                            <>
                              <span className="mx-2">Male</span>
                            </>
                          ) : (
                            <>
                              <span className="mx-2">Female</span>
                            </>
                          )}
                        </Card.Text>
                      </Card>
                    ) : (
                      <Card
                        style={{ width: "206px" }}
                        className="d-flex align-items-center mx-2"
                      >
                        <span
                          aria-hidden="true"
                          className="vet-heading"
                          style={{
                            cursor: "pointer",
                            position: "absolute",
                            right: "10px",
                          }}
                          onClick={() =>
                            deleteAnimal(AuthPayloads.access_token, item._id)
                          }
                        >
                          ×
                        </span>
                        <VetPCat size={80} />
                        <Card.Text className="vet-title-2">
                          {item.name}/
                          {item.gender ? (
                            <>
                              <span className="mx-2">Male</span>
                            </>
                          ) : (
                            <>
                              <span className="mx-2">Female</span>
                            </>
                          )}
                        </Card.Text>
                      </Card>
                    )
                  )}
              </div>
            </Card.Body>
            <PetModal show={modalShow} onHide={() => modalHandle()} />
          </>
        )}
      </Card>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
    AppointmentPayloads: state.Appointment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ editUser, deleteAnimal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
