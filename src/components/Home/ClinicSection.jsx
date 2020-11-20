
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

import { clinic } from '../../database/index';
import React, { useState, useEffect } from "react";
import {  Card,  Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

import classes from './Home.module.css';

export default function ClinicSection() {

    const [clinicData, setClinicData] = useState()
    const [currentClinic, setCurrentClinic] = useState(1)
    const [maxItem, setMaxItem]=useState(3)
    const [first, setFirst]=useState()
    const [last, setLast]=useState()
        
    // var first = (currentClinic * maxItem) - maxItem
    // var last = currentClinic * maxItem
    
    

    const changePage = (direction) => {
        if (direction === 'next') {
            setCurrentClinic(currentClinic + 1)
        } else if (direction === 'back') {
            setCurrentClinic(currentClinic - 1)
        }
    }

    useEffect(() =>{
        setFirst((currentClinic * maxItem)-maxItem)
        setLast(currentClinic * maxItem)        
    },[currentClinic])

    useEffect(() => {
        clinic({ method: 'all' }).then(res => (
            setClinicData(res?.data?.data)
        ))
    }, []);
    
   

    const clinicList = clinicData && clinicData.slice(first, last).map((value, index) => (
        <Card style={{ width: '11em', height:'18rem', margin:'0 auto', overflowX:'hidden' }} key={index}>
            <div className={classes.mask}>
            <img src={value.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <p className="card-text">{value?.clinic?.city ? value?.clinic?.city : "Surabaya"}</p>
                    <h5 className="card-title mt-2" style={{fontSize: '14px'}} >{value.name}</h5>
                    <p className="card-text mb-2">Buka 09.00 - 12.00</p>
                </div>
                <Link to={`${process.env.PUBLIC_URL}/booking/detail/${value._id}/`}>
                    <Button className="btn btn-warning" style={{ background: '#FDCB5A', color: 'black', fontWeight: 'bold', bottom: '0', width: '100%', margin: '0 auto' }}>
                        Book now
                  </Button>
                </Link>
            </div>
        </Card>));
    const maxClinic = clinicData && clinicData.length -1
    


    return (
        <div className="container-fluid">


            <div className="row mt-3 pt-5" style={{ width: '80%', marginLeft: '10%', textAlign:'left' }}>
                <div className="col-md-6 col-xs-12">
                    <h4>Choose a Clinic</h4>
                    <p className={classes.par2}>Specialist website for reservations pets health, everyday in our website can communicate with dozens of patients and you can choose the nearest location of veterinary clinic to check your pets condition.</p>

                </div>
                <div className="col-md-6 col-xs-12 ">

                    <div className={classes.klinik}>
                        {clinicList}
                    </div>
                    <div className={classes.pagination}>

                        <div style={{ width: '2em', margin: '0 auto' }}>
                            {currentClinic > 1 ?
                                <span
                                    onClick={() => changePage('back')}
                                ><FaCaretSquareLeft /></span>
                                : <span

                                ><FaCaretSquareLeft /></span>}
                            {maxClinic > (currentClinic * maxItem) ?
                                <span
                                    onClick={() => changePage('next')}
                                ><FaCaretSquareRight /></span>
                                : <span

                                ><FaCaretSquareRight /></span>
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}