
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

import { clinic } from '../../database/index';
import React, { useState, useEffect } from "react";
import {  Card,  Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

import classes from './Home.module.css';

export default function ClinicSection() {

    const [clinicData, setClinicData] = useState()
    const [currentClinic, setCurrentClinic] = useState(1)
    const maxItem = 3
    
    var first = (currentClinic * maxItem) - maxItem
    var last = currentClinic * maxItem
    
    

    const changePage = (direction) => {
        if (direction === 'next') {
            setCurrentClinic(currentClinic + 1)
        } else if (direction === 'back') {
            setCurrentClinic(currentClinic - 1)
        }
    }
    useEffect(() => {

        clinic({ method: 'all' }).then(res => (
            setClinicData(res?.data?.data)
        ))
    }, []);
    
   

    const clinicList = clinicData && clinicData.slice(first, last).map((value, index) => (
        <Card style={{ width: '11em', height:'18rem', margin:'0 auto', overflowX:'hidden' }} key={index}>
            <div className={classes.mask}>
            <img src={value.image} class="card-img-top" alt="..." />
            </div>
            <div class="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <p class="card-text">{value.clinic.city}</p>
                    <h5 class="card-title">{value.name}</h5>
                    <p class="card-text">Buka 09.00 - 12.00</p>
                </div>
                <Link to={`${process.env.PUBLIC_URL}/booking/${value._id}/`}>
                    <Button class="btn btn-warning" style={{ background: '#FDCB5A', color: 'black', fontWeight: 'bold', bottom: '0', width: '100%', margin: '0 auto' }}>
                        Book now
                  </Button>
                </Link>
            </div>
        </Card>));
    const maxClinic = clinicData && clinicData.length -1
    


    return (
        <div className="container-fluid">


            <div className="row" style={{ width: '90%', margin: '3 auto', marginLeft: '10%', textAlign:'left' }}>
                <div className="col-md-6 col-xs-12">
                    <h4>Pilih Klinik</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis molestiae deleniti vel asperiores dolor saepe alias, eum repudiandae aspernatur tempore. Placeat commodi repellendus nesciunt explicabo ea error perspiciatis odit unde!</p>

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
