import React from 'react';
import Dog from '../../assets/Dog.svg';
import Doctor from '../../assets/Doc.svg';
import Vector2 from '../../assets/Vector 2.svg';
import Cat from '../../assets/Cat.svg';
import Vector3 from '../../assets/Vector 3.svg';
import Vector4 from '../../assets/Vector 4.svg';
import { RiHospitalFill } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

import classes from './Home.module.css';


//contoh foto klinik
import Klinik from '../../assets/klinik.png';


export default function Home() {
    //dummy array object data, setKlinik still not used 
    let [klinik, setKlinik] = React.useState([
        {
            name: "RS Kalimanjaro Ruah Tunah",
            lokasi: "Batam",
            time: "09:00 - 12:00",
            foto: Klinik
        }, {
            name: "RS  Ruah Tunah",
            lokasi: "Jakarta",
            time: "09:00 - 12:00",
            foto: Klinik
        }, {
            name: "RS  mantul",
            lokasi: "Medan",
            time: "09:00 - 12:00",
            foto: Klinik
        }
    ]);
    //will be useEffect to fetch klinik data from API and will be setKlinik

    return (
        <div>
            <div className="container-fluid" style={{ background: '#1A3150', padding: '3em 0' }}>
                <div className="row" style={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="col-md-6 col-xs-12" >

                        <div className={classes.headerText}>
                            <h4>Welcome to VET</h4>
                            <p>VET aim to provide the highest standards of veterinary care. These are the terms on which we, Independent Vetcare Limited (trading as The Veterinary Clinic), supply veterinary services and related products to you. These Terms and Conditions shall apply to all supplies of Veterinary Services and Products by us to you to the exclusion of all other terms and conditions.</p>
                            <button type="button" class="btn btn-warning" style={{ background: '#FDCB5A', color: 'black', fontWeight: 'bold' }}>Booking Now</button>
                        </div>



                    </div>
                    <div class="col-md-6 col-xs-12" className={classes.dog}>
                        <img src={Dog} class="img-fluid " />
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{
                overflowX: 'hidden', display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div className="row" style={{ background: '#1A3150', width: '130%', height: '100px', zIndex: '-1', marginTop: '-50px', borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className={classes.serviceBox}>
                        <h4>OUR SERVICE</h4>
                    </div>

                </div>
                <div className="row" style={{ width: '80%', margin: '3em auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div className="col-md-4 col-xs-12">
                        <div className={classes.serviceIcon}>
                            <span ><RiHospitalFill /></span>
                            <img id="one" src={Vector2} class="img-fluid" alt="" style={{ transform: 'rotate(152.15deg)', height: '100%' }} />
                        </div>
                        <div className={classes.serviceText}>
                            <h5>Clinic/ Hospital</h5>
                            <p>Choose a clinic or hospital close to your home.</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-xs-12">
                        <div className={classes.serviceIcon}>
                            <span><BiCalendar /></span>
                            <img id="two" src={Vector2} class="img-fluid" alt="" />
                        </div>


                        <div className={classes.serviceText}>
                            <h5>Consultation Date</h5>
                            <p>Determine the date and time of consultation with the veterinary!</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-xs-12" >

                        <div className={classes.serviceIcon}>
                            <img class="img-fluid doctor" src={Doctor} style={{ position: 'absolute', zIndex: '3', marginTop: '2em', marginLeft: '4em' }} />
                            <img id="three" class="img-fluid" src={Vector2} style={{ transform: 'rotate(-54.83deg)', height: '100%', marginTop: '-1em' }} />
                        </div>
                        <div className={classes.serviceText}>
                            <h5>Meet The Doctor</h5>
                            <p>Time to see a doctor for a consultation!</p>
                        </div>


                    </div>
                </div>
                <div className="row" style={{ width: '80%', margin: '3em auto' }} >
                    <div className="col-md-6 col-xs-12" style={{ position: 'relative' }}>
                        <div className={classes.blue}><img class="img-fluid" src={Vector3} alt="" /></div>
                        <div className={classes.yellow}> <img class="img-fluid" src={Vector4} alt="" /></div>
                        <div className={classes.cat}> <img class="img-fluid" src={Cat} alt="" /></div>
                    </div>
                    <div className="col-md-6 col-xs-12" style={{ marginTop: '5em' }}>
                        <h4>Why Choose Us?</h4>
                        <p>With Vet app the owner can find the nearest location of the clinic veterinary and reservation for check up your pets health and condition.</p>

                    </div>
                </div>
                <div className="row" style={{ width: '90%', margin: '3 auto', marginLeft: '10%' }}>
                    <div className="col-md-6 col-xs-12">
                        <h4>Choose a Clinic</h4>
                        <p>You can choose the nearest location of veterinary clinic to check your pets condition.</p>

                    </div>
                    <div className="col-md-6 col-xs-12 ">
                        <div className={classes.klinik}>
                            {klinik.slice(0,2).map((item) =>
                                <div class="card" style={{ width: '18rem', margin: '0.5em' }}>
                                    <img src={item.foto} class="card-img-top" alt="..." />
                                    <div class="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <h5 class="card-title">{item.name}</h5>
                                            <p class="card-text">Buka {item.time}</p>
                                        </div>
                                        <div>
                                            <a href="#" class="btn btn-warning" style={{ background: '#FDCB5A', color: 'black', fontWeight: 'bold', bottom: '0', width: '100%', margin: '0 auto' }}>Book Now</a>

                                        </div>
                                    </div>
                                </div>)}
                        </div>
                        <div className={classes.pagination}>
                            {/* not worked yet */}
                            <div style={{ width:'2em', margin:'0 auto'}}>
                            <span
                                onClick={() => { }}
                            ><FaCaretSquareLeft /></span>
                            <span
                                onClick={() => { }}
                            ><FaCaretSquareRight /></span>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}