import React from 'react';
import classes from './Home.module.css';
import Doctor from '../../assets/Doc.svg';
import Vector2 from '../../assets/Vector 2.svg';
import { RiHospitalFill } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';

export default function Service() {
    return (
        <div className='container-fluid'>
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
                        <h5>Klinik/Rumah Sakit</h5>
                        <p>Pilih Klinik atau rumah sakit yang terdekat dengan anda</p>
                    </div>

                </div>
                <div className="col-md-4 col-xs-12">
                    <div className={classes.serviceIcon}>
                        <span><BiCalendar /></span>
                        <img id="two" src={Vector2} class="img-fluid" alt="" />
                    </div>


                    <div className={classes.serviceText}>
                        <h5>Tanggal Konsultasi</h5>
                        <p>Tentukan tanggal beserta jam konsultasi dengan dokter hewan</p>
                    </div>

                </div>
                <div className="col-md-4 col-xs-12" >

                    <div className={classes.serviceIcon}>
                        <img class="img-fluid doctor" src={Doctor} alt='doctor' style={{ position: 'absolute', zIndex: '3', marginTop: '2em', marginLeft: '4em' }} />
                        <img id="three" class="img-fluid" src={Vector2} alt='' style={{ transform: 'rotate(-54.83deg)', height: '100%', marginTop: '-1em' }} />
                    </div>
                    <div className={classes.serviceText}>
                        <h5>Bertemu Dokter</h5>
                        <p>Waktunya bertemu dengan dokter untuk berkonsultasi</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
