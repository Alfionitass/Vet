import React, { useState, useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Modal, Form, Image } from "react-bootstrap";
import rs from "../../assets/img/rs.png";
import dc from "../../assets/img/doctor.png";
import dog from "../../assets/img/dog.png";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { reservation } from "../../database";
import styles from "./BookingContent.module.css";

export default function BookingContent() {
  const [token, setToken] = useState(localStorage.getItem("VetToken"));
  const [bookingData, setBookingData] = useState();
  //const [dateBooking, setDateBooking] = useState([...dateBooking.map(date => {return {...date, selected: false}})])
  // const [date, setDate] = useState();

  const { id } = useParams();
  console.log("idnya", id);

  useEffect(() => {
    reservation({
      method: "find",
      id: id,
    }).then((res) =>
      setBookingData(res?.data?.data)
      //console.log(res?.data?.data)
    );
  }, [id]);

  // useEffect(()=>{
  //     reservation({
  //         method:'find',
  //         id: id
  //     }).then(res=>(
  //       setDate(res?.data?.data?.dateBooking)
  //      // console.log("ini tanggal",res?.data?.data?.dateBooking)
  //     ))
  //   },[id] );

  // console.log("data booking", bookingData?.clinic?.clinic?.facilities);

  const [show, setShow] = useState(false);
  const [bookingDay, setBookingDay] = useState(null);
  const [bookingTime, setBookingTime] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function reducer(state, action) {
  //     switch (action.type) {
  //       case "select":

  //         const list = state.map((item, i) => {
  //           item.checked = false
  //           if(item[i] === action.item[i]){
  //             item.checked = !item.checked
  //           }
  //           return item;
  //         })
  //         return list;
  //       default:
  //         throw new Error();
  //     }
  //   }

  //   const [state1, dispatch] = useReducer(reducer, date);

  const bookTitle = (
    <div className="d-flex flex-row justify-content-between mb-3">
      <h1>Kalimanjaro Ruah Tunah Hospital</h1>
      <Link to="/booking/detail/resume">
        <button className={styles.btn}>Booking Now</button>
      </Link>
    </div>
  );

  //const {clinic} = bookingData
  let a = bookingData && bookingData;
  console.log("ini a", a);
  // const books = ({bookk}) => {
  //     <Image src={bookk.clinic.image} />
  // }

  const checkUser = () => {
    const token = "token";
    return !!token;
  };

  useEffect(() => {
      getDoctor();
  }, [bookingDay, bookingTime])

  const getDoctor = () => {
      if(bookingTime !== null && bookingDay !== null) {
          console.log('fetch');
      }
  };

  const selectDay = (day) => {
    if (checkUser()) {
      setBookingDay(day);
    } else {
      alert("Mohon Login Dulu Yaaa");
    }
  };

  const selectTime = (time) => {
    if (checkUser()) {
      setBookingTime(time);
    } else {
      alert("Mohon Login Dulu Yaaa");
    }
  };

  const bookSchedule = (
    <div className="d-flex flex-row mb-4">
      <Image src={bookingData && bookingData.clinic.image} />
      <div className="d-flex flex-column ml-5">
        <h3>Visit Information</h3>
        <div className="mb-4">
          <p className={styles.font}>Day Visit</p>
          <Row>
            {bookingData?.dateBooking.map((day, index) => (
              <Col md="4" className="mb-3">
                <Card
                  onClick={() => selectDay(index)}
                  className={styles.cardDay}
                >
                  <Card.Body
                    className={styles.cardBody}
                    style={{
                      background: index === bookingDay ? "#FDCB5A" : "#fff",
                    }}
                  >
                    <Card.Text className="p-0 m-0">{day}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-flex flex-column ">
          <p className={styles.font}>Time Visit</p>
          <Row>
            {bookingData?.hour.map((time, index) => (
              <Col md="4">
                <Card onClick={() => selectTime(index)} className={styles.cardTime}>
                  <Card.Body className={styles.cardBody} style={{
                      background: index === bookingTime ? "#FDCB5A" : "#fff",
                    }}>
                    <Card.Text className="p-0 m-0">{time}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );

  const bookInfo = (
    <div className="d-flex flex-row mb-3">
      <div className={styles.about}>
        <h3>About</h3>
        <p className={styles.p}>
          {bookingData && bookingData.clinic.clinic.about}{" "}
        </p>
      </div>
      <div className={styles.facility}>
        <h5>Facility</h5>
        <Row className="d-flex justify-content-end">
          {bookingData?.clinic?.clinic?.facilities.map((item) => (
            <Col md="6">
              <input type="radio" name="" id="" />
              <label htmlFor="" className="ml-2">
                {item.name}
              </label>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );

  const bookDoctor = (
    <div className="mb-4">
      <h3 className="mb-2">Choose a Doctor</h3>
      <Row>
        <Col md="4" className="mb-3">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4" className="mb-3">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className={styles.cardDoc}>
            <Card.Body className="d-flex flex-row align-items-center">
              <Image src={dc} className="mr-4" />
              <Card.Text className="ml-2 mr-4">Drh. Alizah</Card.Text>
              <FaCheckCircle />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const bookPet = (
    <div className="pet">
      <h3>Choose Pet</h3>
      <Row>
        <Col md="3">
          <Card className={styles.cardPet}>
            <Card.Body className="d-flex flex-column align-items-center">
              <FaPlusCircle onClick={handleShow} className={styles.icon} />
              <Card.Title className="mt-3">Add Pet</Card.Title>
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  Pet Information
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="">
                    <Form.Label className={styles.label}>
                      Your Pet Name
                    </Form.Label>
                    <Form.Control type="" placeholder="Pet Name" />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label className={styles.label}>
                      Choose Your Pet
                    </Form.Label>
                    <Form.Control as="select">
                      <option selected disabled className={styles.label}>
                        Choose Pet
                      </option>
                      <option>Cat</option>
                      <option>Dog</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label className={styles.label}>
                      Choose Your Pet Gender
                    </Form.Label>
                    <Form.Control as="select">
                      <option selected disabled>
                        Choose Pet Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center">
                <button className={styles.btnn}>Add</button>
              </Modal.Footer>
            </Modal>
          </Card>
        </Col>
        <Col md="3">
          <Card className={styles.cardPet}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Image src={dog} />
              <Card.Title className="mt-3">Ronald/Male</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card className={styles.cardPet}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Image src={dog} />
              <Card.Title className="mt-3">Ronald/Male</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card className={styles.cardPet}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Image src={dog} />
              <Card.Title className="mt-3">Ronald/Male</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  return (
    <Container className="mt-5 mb-5">
      {bookTitle}
      <h3 className={styles.h3}>General Information</h3>
      {bookSchedule}
      {bookInfo}
      {bookDoctor}
      {bookPet}
    </Container>
  );
}
