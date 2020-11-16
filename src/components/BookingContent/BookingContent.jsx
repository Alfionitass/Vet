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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function BookingContent() {
    const [token, setToken] = useState(localStorage.getItem("VetToken"));
    const [ bookingData, setBookingData] = useState();
    const [ bookImage, setBookImage] = useState();
    const [ clinicName, setClinicName] = useState();
    const [bookingDay, setBookingDay] = useState({
        indeks: null,
        hari:""
    });
    const [bookingTime, setBookingTime] = useState({
        indeks: null,
        jam:""
    });
    const [doctor, setDoctor] = useState();
    const [scheduleDoc, setScheduleDoc] = useState({
        iniId: "",
        name: ""
    });
    const [bookingDate, setBookingDate] = useState();
    const [animalss, setAnimalss] = useState({
        iniId: "",
        name: ""
    });
    //const [animalName, setAnimalName] =  useState('');
    const [animalData, setAnimalData]= useState();
    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    console.log("idnya", id);

    useEffect(()=>{
        reservation({
            method:'find',
            id: id
        }).then(res=>{
            setBookingData(res?.data?.data);
            setBookImage(res?.data?.data.clinic.image);
            setClinicName(res?.data?.data.clinic.name);
          //console.log("isi reservation",res?.data?.data)
        })
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
    
    let a = bookingData && bookingData;
    console.log("isi reservation", a);

    const data = qs.stringify({
        hourReservation: bookingTime.indeks,
        dateReservation: bookingDay.indeks
    })
    
    const checkUser = () => {
        const tokenn = token;
        return !!tokenn;
    }

    useEffect (() => {
        getDoctor()
    }, [bookingDay, bookingTime])

    const getDoctor = () => {
        if (bookingTime.indeks !== null && bookingDay.indeks !== null) {
            reservation({
                method:'show',
                data: data,
                access_token: token,
                id: id,
            }).then(res=>{
              setDoctor(res?.data?.data);
              setBookingDate(res?.data?.data.reservationDate);
              //console.log("tanggal",res?.data?.data.reservationDate)
            })
            console.log("fetch")
        }
    }

    const selectDay = (day, index) => {
        if (checkUser()) {
            setBookingDay({
                indeks: index,
                hari: day
            });
        } else {
            alert("Login dlu yaaa")
        }
    }
    console.log("bookingday", bookingDay)

    const selectTime = (time, index) => {
        if (checkUser()) {
            setBookingTime({
                indeks: index,
                jam: time
            });
        } else {
            alert("Login dlu yaaa")
        }
    }
    console.log("bookingtime", bookingTime)

    const selectDoc = (doc) => {
        setScheduleDoc({
            iniId: doc._id,
            name: doc.veterinary.name
        })
        console.log("fetch doc")
    }

    const selectAnimal = (pet) => {
        setAnimalss({
            iniId: pet._id,
            name: pet.name
        });
        console.log("fetch pet")
    }

    console.log("isi pet", animalss && animalss)

    const submit = () => {
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
                clinicName: clinicName
            }
        })
    }

    const bookTitle = (
        <div className="d-flex flex-row justify-content-between mb-3">
            <h1>{bookingData?.clinic.name || <Skeleton width={324.61} height={48} />}</h1>
            <button onClick={submit} className={styles.btn} >Booking Now</button>
        </div>
    )
    
    const bookSchedule = (
        <div className="d-flex flex-row mb-4">
            <Row>
                {bookingData ? (
                    <Image src= {bookingData.clinic.image} className={styles.img1}/>
                ) : (
                    <Skeleton width={480} height={320} />
                )}
            </Row>
            
            {/* <Image src={bookingData? bookingData.clinic.image : <Skeleton width={480} height={320} />} className={styles.img1} /> */}
            <div className="d-flex flex-column ml-5">
                <h3>Visit Information</h3>
                <div className="mb-4">
                    <p className={styles.font}>Day Visit</p>
                    <Row>
                    {bookingData ? (bookingData.dateBooking.map((day, index) => (
                        <Col md="4" className="mb-3">
                            <Card onClick={() => selectDay(day, index)} className={styles.cardDay} >
                                <Card.Body className={styles.cardBody} 
                                    style={{background: index === bookingDay.indeks ? "#FDCB5A" : "#fff"}} 
                                >
                                    <Card.Text className="p-0 m-0">
                                        {day}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    ) : [0,1,2,3,4,5,6].map((value) => (
                        <Col md="4" className="mb-3">
                            <Card className={styles.cardDay} >
                                <Card.Body className={styles.cardBody}>
                                    <Skeleton width={158} height={48} />
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
                        {bookingData? (bookingData.hour.map((time, index) => (
                            <Col md="4" >
                                <Card onClick={() => selectTime(time, index)} className={styles.cardTime}>
                                    <Card.Body className={styles.cardBody}
                                        style={{background: index === bookingTime.indeks ? "#FDCB5A" : "#fff"}}
                                    >
                                        <Card.Text className="p-0 m-0">
                                            {time}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        ) : [0,1,2].map((value) => (
                            <Col md="4" >
                                <Card className={styles.cardTime}>
                                    <Card.Body className={styles.cardBody}>
                                        <Skeleton width={130.5} height={24} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>
                </div>
            </div>
        </div>
    )

    const bookInfo = (
        <div className="d-flex flex-row mb-3">
            <div className={styles.about}>
                <h3>About</h3>
                {bookingData? 
                    <p className={styles.p}>{bookingData.clinic.clinic.about ? bookingData.clinic.clinic.about : "No Details Clinic Yet"} </p> :
                    <Skeleton width={376.34} height={24} />
                }
            </div>
            <div className={styles.facility}>
                <h5>Facility</h5>
                <Row className="d-flex justify-content-end">
                    
                    {bookingData? (bookingData.clinic.clinic.facilities.map((item) => (
                        <Col md="6">
                            <input type="radio" name="" id="" />
                            <label htmlFor="" className="ml-2">{item.name}</label>}
                            
                        </Col>
                    )) 
                    ) : [0,1].map((value) => (
                        <Col md="6">
                            <Skeleton width={147.83} height={56} />
                        </Col>
                    )) 
                }
                </Row>
            </div>
        </div>
    )

    const bookDoctor = (
        <div className="mb-4">
            <h3 className="mb-2">Choose a Doctor</h3>
            <Row>
                {doctor? (doctor.schedules.map((doc) => (
                    <Col md="4" className="mb-3" >
                        <Card onClick={() => selectDoc(doc)} className={styles.cardDoc} >
                            <Card.Body className="d-flex flex-row align-items-center justify-content-center"
                                //{doc.veterinary.name === bookingDoc ? <FaCheckCircle /> : ""}
                            >
                                <Image src={doc.veterinary.image ? doc.veterinary.image : ""} className={styles.img2} />
                                <Card.Text className="mr-3">
                                    {doc.veterinary.name ? doc.veterinary.name : "Veterinary's Schedule Not Found"}
                                </Card.Text>
                                {doc._id === scheduleDoc.iniId ? <FaCheckCircle /> : "" }
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                ) : [0].map((value) => (
                    <Col md="4" className="mb-3" >
                    <Card className={styles.cardDoc} >
                        <Card.Body className="d-flex flex-row align-items-center justify-content-center">
                            <Skeleton width={80} height={80} />
                            <Skeleton width={108.38} height={24} />
                        </Card.Body>
                    </Card>
                </Col>  
                ))
            }
            </Row>
        </div>
    )

    const bookPet = (
        <div className="pet">
            <h3>Choose Pet</h3>
            <Row>
                {animalData? (animalData.animals.map((pet) => (
                    <Col md="3">
                        <Card onClick={() => selectAnimal(pet)} className={styles.cardPet}>
                            <Card.Body className="d-flex align-items-center justify-content-center"
                                style={{background: pet.name === animalss.name ? "#FDCB5A" : "#fff" }}
                                // style={{background: pet._name === animalss.name ? "#FDCB5A" : "#fff"}}
                            >
                                <Card.Title>
                                    {pet.name || <Skeleton width={150} height={48} />}/ {pet.type}/ {pet.gender === true ? "Male" : "Female"}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
                ) : [0].map((value) => (
                    <Col md="3">
                        <Card className={styles.cardPet}>
                            <Card.Body className="d-flex align-items-center justify-content-center" >
                                <Skeleton width={150} height={48} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
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