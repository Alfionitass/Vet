/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import qs from "qs";
import Swal from "sweetalert2";
import { FaCheckCircle} from "react-icons/fa";
import { reservation, animal } from "../../database";
import styles from "./BookingContent.module.css";
import Skeleton from "react-loading-skeleton";

export default function BookingContent() {
  const [token] = useState(localStorage.getItem("VetToken"));
  const [bookingData, setBookingData] = useState();
  const [bookImage, setBookImage] = useState();
  const [clinicName, setClinicName] = useState();
  const [bookingDay, setBookingDay] = useState({
    indeks: null,
    hari: "",
  });
  const [bookingTime, setBookingTime] = useState({
    indeks: null,
    jam: "",
  });
  const [doctor, setDoctor] = useState();
  const [scheduleDoc, setScheduleDoc] = useState({
    iniId: "",
    name: "",
  });
  const [bookingDate, setBookingDate] = useState();
  const [animalss, setAnimalss] = useState({
    iniId: "",
    name: "",
  });
  //const [animalName, setAnimalName] =  useState('');
  const [animalData, setAnimalData] = useState();
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    reservation({
      method: "find",
      id: id,
    }).then((res) => {
      setBookingData(res?.data?.data);
      setBookImage(res?.data?.data.clinic.image);
      setClinicName(res?.data?.data.clinic.name);
    });
  }, [id]);

  useEffect(() => {
    animal({
      method: "self",
      access_token: token,
    }).then((res) => setAnimalData(res?.data?.data));
  }, [token]);

  let a = bookingData && bookingData;

  const data = qs.stringify({
    hourReservation: bookingTime.indeks,
    dateReservation: bookingDay.indeks,
  });

  const checkUser = () => {
    const tokenn = token;
    return !!tokenn;
  };

  const getData = () => {
    reservation({
      method: "find",
      id: id,
    }).then((res) => {
      setBookingData(res?.data?.data);
    });

    if (checkUser()) {
      selectDay(a, 0);
      selectTime(a, 0);
      //bookingTime(0);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getDoctor();
  }, [bookingDay, bookingTime]);

  const getDoctor = () => {
    if (bookingTime.indeks !== null && bookingDay.indeks !== null) {
      reservation({
        method: "show",
        data: data,
        access_token: token,
        id: id,
      }).then((res) => {
        setDoctor(res?.data?.data);
        setBookingDate(res?.data?.data.reservationDate);
      });
    }
  };

  const selectDay = (day, index) => {
    if (checkUser()) {
      setBookingDay({
        indeks: index,
        hari: day,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title:
          '<span style="color:#fff">You must register/ login first!</span>',
        iconColor: "#FDCB5A",
        background: "#1A3150",
        confirmButtonColor: "#FDCB5A",
        confirmButtonText:
          '<span style="color:#1A3150;font-weight:bold">OK</span>',
      });
    }
  };

  const selectTime = (time, index) => {
    if (checkUser()) {
      setBookingTime({
        indeks: index,
        jam: time,
      });
    } else {
      Swal.fire({
        icon: "warning",
        title:
          '<span style="color:#fff">You must register/ login first!</span>',
        iconColor: "#FDCB5A",
        background: "#1A3150",
        confirmButtonColor: "#FDCB5A",
        confirmButtonText:
          '<span style="color:#1A3150;font-weight:bold">OK</span>',
      });
    }
  };

  const selectDoc = (doc) => {
    setScheduleDoc({
      iniId: doc?._id,
      name: doc?.veterinary?.name,
    });
  };

  const selectAnimal = (pet) => {
    setAnimalss({
      iniId: pet._id,
      name: pet.name,
    });
  };

  const submit = () => {
    if (checkUser()) {
      history.push({
        pathname: `${process.env.PUBLIC_URL}/booking/detail/resume`,
        state: {
          scheduleId: scheduleDoc.iniId,
          animalId: animalss.iniId,
          reservationDate: bookingDate,
          clinicImage: bookImage,
          bookDay: bookingDay.hari,
          bookTime: bookingTime.jam,
          doctorName: scheduleDoc.name,
          animalsName: animalss.name,
          clinicName: clinicName,
        },
      });
    } else {
      Swal.fire({
        icon: "warning",
        title:
          '<span style="color:#fff">You must register/ login first!</span>',
        iconColor: "#FDCB5A",
        background: "#1A3150",
        confirmButtonColor: "#FDCB5A",
        confirmButtonText:
          '<span style="color:#1A3150;font-weight:bold">OK</span>',
      });
    }
  };

  const bookTitle = (
    <div className="d-flex flex-row justify-content-between mb-3">
      <h1>
        {bookingData?.clinic.name || <Skeleton width={324.61} height={48} />}
      </h1>
      <button onClick={submit} className={styles.btn}>
        Booking Now
      </button>
    </div>
  );

  const bookSchedule = (
    <div className="d-flex flex-row mb-4 mr-3">
      <Row>
        <Col md="6" xs="12">
          {bookingData ? (
            <Image src={bookingData.clinic.image} className={styles.img1} />
          ) : (
            <Skeleton width={480} height={320} />
          )}
        </Col>
        <Col md="6" xs="12">
          <h3>Visit Information</h3>
          <div className="mb-4">
            <p className={styles.font}>Day Visit</p>
            <Row>
              {bookingData
                ?.dateBooking.map((day, index) => (
                    <Col md="4" className="mb-3" key={index}>
                      <Card
                        onClick={() => selectDay(day, index)}
                        className={styles.cardDay}
                      >
                        <Card.Body
                          className={styles.cardBody}
                          style={{
                            background:
                              index === bookingDay.indeks ? "#FDCB5A" : "#fff",
                          }}
                        >
                          <Card.Text className={styles.fontDay}>
                            {day}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                }
            </Row>
          </div>
          <div className="d-flex flex-column ">
            <p className={styles.font}>Time Visit</p>
            <Row>
              {bookingData
                ?.hour.map((time, index) => (
                    <Col md="4" key={index}>
                      <Card
                        onClick={() => selectTime(time, index)}
                        className={styles.cardTime}
                      >
                        <Card.Body
                          className={styles.cardBody}
                          style={{
                            background:
                              index === bookingTime.indeks ? "#FDCB5A" : "#fff",
                          }}
                        >
                          <Card.Text className={styles.fontTime}>
                            {time}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );

  const bookInfo = (
    <div className="d-flex flex-row mb-3 mr-3">
      <Row>
        <Col md="6" xs="12">
          <div className={styles.about}>
            <h3>About</h3>
            {bookingData ? (
              <p className={styles.p}>
                {bookingData?.clinic?.clinic?.about}
              </p>
            ) : (
                "No Details Clinic Yet"
            )}
          </div>
        </Col>
        <Col md="6" xs="12">
          <div className={styles.facility}>
            <h5>Facility</h5>
            <Row className="d-flex justify-content-end pt-2">
              {bookingData
                ? bookingData?.clinic?.clinic?.facilities.map((item,index) => (
                    <Col md="6" key={index}>
                      <input type="radio" name="" id="" />
                      <label htmlFor="" className="ml-2">
                        {item.name}
                      </label>
                    </Col>
                  ))
                : "Clinic dosn't has a facility"}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );

  const bookDoctor = (
    <div className="mb-4">
      <h3 className="mb-2">Choose a Doctor</h3>
      <Row>
        {doctor
          ? doctor.schedules.map((doc,index) => (
              <Col md="4" className="mb-3" key={index}>
                <Card onClick={() => selectDoc(doc)} className={styles.cardDoc}>
                  <Card.Body
                    className="d-flex flex-row align-items-center justify-content-center"
                    //{doc?.veterinary?.name === bookingDoc ? <FaCheckCircle /> : ""}
                  >
                    <Image
                      src={doc?.veterinary?.image ? doc?.veterinary?.image : ""}
                      className={styles.img2}
                    />
                    <Card.Text >
                      {doc?.veterinary?.name
                        ? doc?.veterinary?.name
                        : "Veterinary's Schedule Not Found"}
                    </Card.Text>
                    {doc?._id === scheduleDoc.iniId ? <FaCheckCircle className="ml-3" /> : ""}
                  </Card.Body>
                </Card>
              </Col>
            ))
          : "Veterinary's Schedule Not Found" }
      </Row>
    </div>
  );

  const bookPet = (
    <div className="pet">
      <h3>Choose Pet</h3>
      <Row>
        {animalData
          ?.animals.map((pet,index) => (
              <Col md="3" key={index}>
                <Card
                  onClick={() => selectAnimal(pet)}
                  className={styles.cardPet}
                >
                  <Card.Body
                    className="d-flex flex-column align-items-center justify-content-center "
                    style={{ background: pet.name === animalss.name ? "#FDCB5A" : "#fff" }}
                  >
                    <Image src={animalData?.images} className={styles.img3} />
                    <Card.Title>
                      {pet.name}/ {pet.gender === true ? "Male" : "Female"}
                    </Card.Title>
                  </Card.Body>
                  {/* {pet.name === animalss.name ? <FaCheckCircle className="mr-4" /> : ""} */}
                </Card>
              </Col>
            ))}
      </Row>
    </div>
  );

  return (
    <Container fluid>
      <div className={styles.bookContent}>
        {bookTitle}
        <h3 className={styles.h3}>General Information</h3>
        {bookSchedule}
        {bookInfo}
        {bookDoctor}
        {bookPet}
      </div>
    </Container>
  );
}
