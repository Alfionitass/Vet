import React, { useState, useEffect } from 'react';
import { Container, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import qs from "qs";
import rs from "../../assets/img/rs.png"
import { reservation } from '../../database';
import styles from "./BookingResume.module.css";

export default function BookingResume() {
    const [token, setToken] = useState(localStorage.getItem("VetToken"));
    const [reservationData, setReservationData] = useState()
    const location = useLocation();
    console.log("location", location);

    const id = location.state.scheduleId;
    const data = qs.stringify({
        animalId: location.state.animalId,
        dateReservation: location.state.reservationDate
    })

    const date = reservationData && reservationData.date;
    const datee = new Date(date);
    console.log("date", datee)

    useEffect(() => {
        reservation({
            method: 'create',
            data: data,
            access_token: token,
            id: id
        }).then(res=>(
            setReservationData(res?.data?.data),
            console.log("data reservation",res?.data?.data)
        ))
    }, []);

    const onClick = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Successful Booking',
            iconColor: '#FDCB5A',
            background: '#1A3150',
            titleColor: 'white'
        })
    }
    return (
        <Container className="mt-5 mb-5">
            <h1 className={styles.title}>Booking Resume</h1>
            <h3>{reservationData?.schedule?.clinic.name}</h3>
            <div className={styles.resume}>
                <Image src={rs} className={styles.img} />
                <div className="ml-5">
                    <h2 className="mb-4">Visit Information</h2>
                    <div className="mb-4">
                        <h5>Day and Time to Visit</h5>
                        <p className={styles.font}>{datee.toString()}</p>
                    </div>
                    <div className="mb-4">
                        <h5>A Doctor</h5>
                        <p className={styles.font}>{reservationData?.schedule?.veterinary.name}</p>
                    </div>
                    <div className="pet">
                        <h5>Pet</h5>
                        {reservationData?.animals.map((pet) => (
                            <ol className={styles.list}>
                                <li className="mb-2">{pet.name}</li>
                            </ol>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={onClick} className={styles.btn}>Done</button>
            </div>
        </Container>
        
        
    )
}
