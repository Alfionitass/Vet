import React,{useState} from "react";
import { ButtonGroup, Card, Form, ToggleButton, Button } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { GiFemale, GiMale } from "react-icons/gi";

export default function ProfileForm() {
  const [status, setStatus] = useState("1");
  const [gender, setGender] = useState("1");

  const handleClick = () => {
    console.log("dummy")
  }
  return (
    <>
      <Card>
        <Form>
          <Card.Header
            style={{ backgroundColor: "unset" }}
            className="font-weight-bold"
          >
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
                <Form.Control
                  type="file"
                  // value="Alvin Mantovani"
                />
              </Form.Group>
            </div>
          </Card.Body>

          <Card.Header
            style={{ backgroundColor: "unset" }}
            className="font-weight-bold"
          >
            Basic Information
          </Card.Header>
          <Card.Body>
            <Form.Group className="mb-4" id="status">
              <Form.Text>Username</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                // value="Alvin Mantovani"
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
                  <label className={gender === "0" ? "text-white" : ""}>
                    Male
                  </label>
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
                  <label className={gender === "1" ? "text-white" : ""}>
                    Female
                  </label>
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>
          </Card.Body>
          <Card.Header
            style={{ backgroundColor: "unset" }}
            className="font-weight-bold"
          >
            Contact Details
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Nomor Telefon</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                // value="+62 muted"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Text>Email</Form.Text>
              <Form.Control
                type="text"
                placeholder="It's my name"
                // value="alvin.ictn@gmail.com"
              />
            </Form.Group>
          </Card.Body>
          <Card.Header
            style={{ backgroundColor: "unset" }}
            className="font-weight-bold"
          >
            Pets Details
          </Card.Header>
          <Card.Body className="d-flex">
            <Card className="m-2">
              <Card.Body>Pet 1</Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body>Pet 1</Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Body>Pet 1</Card.Body>
            </Card>
          </Card.Body>
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
