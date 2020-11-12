import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom" ;
import { Container, Row, Col, Card, Modal, Form, Image } from "react-bootstrap";
import qs from "qs";
import rs from "../../assets/img/rs.png";
import dc from "../../assets/img/doctor.png";
import dog from "../../assets/img/dog.png";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { reservation, animal } from '../../database';
import styles from "./BookingContent.module.css";

export default function BookingContent() {
    const [token, setToken] = useState(localStorage.getItem("VetToken"));
    const [ bookingData, setBookingData] = useState();
    const [bookingDay, setBookingDay] = useState(null);
    const [bookingTime, setBookingTime] = useState(null);
    const [doctor, setDoctor] = useState();
    const [scheduleId, setScheduleId] = useState();
    const [bookingDate, setBookingDate] = useState();
    const [animalId, setAnimalId]= useState('');
    const [animalData, setAnimalData]= useState();
    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    console.log("idnya", id);

    const data = qs.stringify({
        hourReservation: bookingTime,
        dateReservation: bookingDay
    })

    useEffect(()=>{
        reservation({
            method:'find',
            id: id
        }).then(res=>(
          setBookingData(res?.data?.data),
          console.log("isi reservation",res?.data?.data)
        ))
      },[id] );

      useEffect(()=>{
        animal({
            method:'self',
            access_token: token
        }).then(res=>(
          setAnimalData(res?.data?.data)
          //console.log(res?.data?.data)
        ))
      },[] );

   // console.log("data booking", bookingData?.clinic?.clinic?.facilities);

    
    let a = bookingDate && bookingDate;
    console.log("tanggal", a);
    
    const checkUser = () => {
        const tokenn = token;
        return !!tokenn;
    }

    useEffect (() => {
        getDoctor()
    }, [bookingDay, bookingTime])

    const getDoctor = () => {
        if (bookingTime !== null && bookingDay !== null) {
            reservation({
                method:'show',
                data: data,
                access_token: token,
                id: id,
            }).then(res=>(
              setDoctor(res?.data?.data),
              setBookingDate(res?.data?.data.reservationDate)
              //console.log("tanggal",res?.data?.data.reservationDate)
            ))
            console.log("fetch")
        }
    }

    const selectDay = (day) => {
        if (checkUser()) {
            setBookingDay(day);
        } else {
            alert("Login dlu yaaa")
        }
    }

    const selectTime = (time) => {
        if (checkUser()) {
            setBookingTime(time);
        } else {
            alert("Login dlu yaaa")
        }
    }

    // useEffect (() => {
    //     getDoctorData()
    // }, [bookingDoc])

    // const getDoctorData = () => {
    //     if (bookingDoc) {
    //         console.log("fetch doc")
    //     }
    // }

    // const selectRes = () {
    //     setReservation()
    // }

    const selectDoc = (doc) => {
        setScheduleId(doc._id)
        console.log("fetch doc")
    }

    const selectAnimal = (pet) => {
        setAnimalId(pet._id)
        console.log("fetch pet")
    }

    const submit = () => {
        history.push({
            pathname: `${process.env.PUBLIC_URL}/booking/detail/resume`,
            state: {
                scheduleId: scheduleId,
                animalId: animalId,
                reservationDate: bookingDate
            }
        })
    }

    const bookTitle = (
        <div className="d-flex flex-row justify-content-between mb-3">
            <h1>{bookingData && bookingData.clinic.name}</h1>
            <button onClick={submit} className={styles.btn}>Booking Now</button>
        </div>
    )
    
    const bookSchedule = (
        <div className="d-flex flex-row mb-4">
            <Image src={bookingData && bookingData.clinic.image} className={styles.img1} />
            <div className="d-flex flex-column ml-5">
                <h3>Visit Information</h3>
                <div className="mb-4">
                    <p className={styles.font}>Day Visit</p>
                    <Row>
                    {bookingData?.dateBooking.map((day, index) => (
                        <Col md="4" className="mb-3">
                            <Card onClick={() => selectDay(index)} className={styles.cardDay} >
                                <Card.Body className={styles.cardBody} 
                                    style={{background: index === bookingDay ? "#FDCB5A" : "#fff"}} 
                                >
                                    <Card.Text className="p-0 m-0">
                                        {day}
                                    </Card.Text>
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
                            <Col md="4" >
                            <Card onClick={() => selectTime(index)} className={styles.cardTime}>
                                <Card.Body className={styles.cardBody}
                                    style={{background: index === bookingTime ? "#FDCB5A" : "#fff"}}
                                >
                                    <Card.Text className="p-0 m-0">
                                        {time}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )

    const bookInfo = (
        <div className="d-flex flex-row mb-3">
            <div className={styles.about}>
                <h3>About</h3>
                <p className={styles.p}>{bookingData && bookingData.clinic.clinic.about} </p>
            </div>
            <div className={styles.facility}>
                <h5>Facility</h5>
                <Row className="d-flex justify-content-end">
                    {bookingData?.clinic?.clinic?.facilities.map((item) => (
                        <Col md="6">
                            <input type="radio" name="" id="" />
                            <label htmlFor="" className="ml-2">{item.name}</label>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )

    const bookDoctor = (
        <div className="mb-4">
            <h3 className="mb-2">Choose a Doctor</h3>
            <Row>
                {doctor?.schedules.map((doc) => (
                    <Col md="4" className="mb-3" >
                        <Card onClick={() => selectDoc(doc)} className={styles.cardDoc} >
                            <Card.Body className="d-flex flex-row align-items-center justify-content-center"
                                //{doc.veterinary.name === bookingDoc ? <FaCheckCircle /> : ""}
                            >
                                <Image src={doc.veterinary.image} className={styles.img2} />
                                <Card.Text className="mr-3">
                                    {doc.veterinary.name}
                                </Card.Text>
                                {doc._id === scheduleId ? <FaCheckCircle /> : ""}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )

    const bookPet = (
        <div className="pet">
            <h3>Choose Pet</h3>
            <Row>
                {animalData?.animals.map((pet) => (
                    <Col md="3">
                        <Card onClick={() => selectAnimal(pet)} className={styles.cardPet}>
                            <Card.Body className="d-flex align-items-center justify-content-center"
                                style={{background: pet._id === animalId ? "#FDCB5A" : "#fff"}}
                            >
                                <Card.Title>
                                    {pet.name}/ {pet.gender === true ? "Male" : "Female"}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )

    return (
        <Container className="mt-5 mb-5">
            {bookTitle}
            <h3 className={styles.h3}>General Information</h3>
            {bookSchedule}
            {bookInfo}
            {bookDoctor}
            {bookPet}
        </Container>
    )
}