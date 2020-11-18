import React from 'react';
import Dog from '../../assets/Dog.svg';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import {   Button } from "react-bootstrap";



export default function Top() {
    return (
        <div>
           <div className="container-fluid" style={{ background: '#1A3150', padding: '3em 0' }}>
                <div className="row" style={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', textAlign:'left' }}>
                    <div className="col-md-6 col-xs-12" >

                        <div className={classes.headerText}>
                            <h4>Welcome to VET</h4>
                            <p className={classes.par} >VET aim to provide the highest standards of veterinary care. These are the terms on which we, Independent Vetcare Limited (trading as The Veterinary Clinic), supply veterinary services and related products to you. These Terms and Conditions shall apply to all supplies of Veterinary Services and Products by us to you to the exclusion of all other terms and conditions.</p>
                            <Link to={`${process.env.PUBLIC_URL}/booking/`}>
                    <Button class="btn btn-warning" style={{ background: '#FDCB5A', color: 'black', fontWeight: 'bold', bottom: '0', margin: '0 auto' }}>
                        Book now
                  </Button>
                </Link>
                        </div>

                    </div>
                    <div class="col-md-6 col-xs-12" className={classes.dog}>
                        <img src={Dog} class="img-fluid " alt='dog' />
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{
                overflowX: 'hidden', display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}>
                <div className="row" style={{ background: '#1A3150', width: '130%', height: '100px', zIndex: '2', marginTop: '-50px', borderBottomLeftRadius: '50% 50%', borderBottomRightRadius: '50% 50%' }}>

                </div>
            </div> 
        </div>
    )
}