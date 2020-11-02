import React from 'react';
import { Container, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import rs from "../../assets/img/rs.png"
import styles from "./BookingResume.module.css";

export default function BookingResume() {
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
            <h3>Kalimanjaro Ruah Tanah Hospital</h3>
            <div className={styles.resume}>
                <Image src={rs} className={styles.img} />
                <div className="ml-5">
                    <h2 className="mb-4">Visit Information</h2>
                    <div className="mb-4">
                        <h5>Day and Time to Visit</h5>
                        <p className={styles.font}>Monday, October 12th, 12pm - 3pm</p>
                    </div>
                    <div className="mb-4">
                        <h5>A Doctor</h5>
                        <p className={styles.font}>Drh. Alizah</p>
                    </div>
                    <div className="pet">
                        <h5>Pet</h5>
                        <ol className={styles.list}>
                            <li className="mb-2">Ronald, Male</li>
                            <li>Kiano, Male</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={onClick} className={styles.btn}>Done</button>
            </div>
        </Container>
        
        
    )
}
