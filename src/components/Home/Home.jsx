import React from 'react';
import Dog from '../../assets/Dog.svg';
import Doctor from '../../assets/Doc.svg';
import Vector2 from '../../assets/Vector 2.svg';
import Cat from '../../assets/Cat.svg';
import Vector3 from '../../assets/Vector 3.svg';
import Vector4 from '../../assets/Vector 4.svg';
import './Home.css';
import { RiHospitalFill } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

//contoh foto klinik
import Klinik from '../../assets/klinik.png';


export default function Home() {
    //dummy array object data, setKlinik still not used 
    let [klinik, setKlinik] = React.useState([
        {
            name: "RS Kalimanjaro Ruah Tunah",
            lokasi: "Batam",
            time: "09:00 - 12:00",
            foto:Klinik
        }, {
            name: "RS  Ruah Tunah",
            lokasi: "Jakarta",
            time: "09:00 - 12:00",
            foto: Klinik
        }
    ]);
    //will be useEffect to fetch klinik data from API and will be setKlinik
    
    return (
        <div>
            <div className='header'>
                <div className='top-header'>
                    <div className='container'>
                        <div className='left-headera'>
                            <h4>Welcome to VET</h4>
                        </div>
                        <div className='right-header'>
                            <img src={Dog} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bottom-header'>
                    <div className="container">
                        <div className='left-headerb'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum beatae ipsa nesciunt, aspernatur, maxime sint voluptates tempora voluptatem neque minima eaque quasi maiores deserunt? Sunt voluptates labore dolorem dignissimos consequuntur.</p>
                            <button>Booking Now</button>
                        </div>

                    </div>
                    <div className="curve-div"></div>
                </div>
            </div>
            <div className='service'>
                <div className='top-service'>
                    <h4>OUR SERVICE</h4>
                </div>
                <div className='bottom-service'>
                    <div className='card-service'>

                        <div className='serviceBtn'>
                            <span ><RiHospitalFill /></span>
                            <img id="one" src={Vector2} alt="" />


                        </div>
                    </div>
                    <div className='card-service'>
                        <div className='serviceBtn'>
                            <span><BiCalendar /></span>
                            <img id="two" src={Vector2} alt="" />

                        </div >
                    </div>
                    <div className='card-service'>
                        <div className='serviceBtn'>
                            <img className='doctor' src={Doctor} alt="" />

                            <img id="three" src={Vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text">
                    <div className='card-service'> <h5>Klinik/Rumah Sakit</h5>
                        <p>Pilih Klinik atau rumah sakit yang terdekat dengan anda</p>
                    </div>
                    <div className='card-service'><h5>Tanggal Konsultasi</h5>
                        <p>Tentukan tanggal beserta jam konsultasi dengan dokter hewan</p>

                    </div>
                    <div className='card-service'> <h5>Bertemu Dokter</h5>
                        <p>Waktunya bertemu dengan dokter untuk berkonsultasi</p>
                    </div>
                </div>
            </div>
            <div className='choose'>
                <div className='left-chose'>
                    <div className='cat'> <img src={Cat} alt="" /></div>
                    <div className='blue'><img src={Vector3} alt="" /></div>
                    <div className='yellow'> <img src={Vector4} alt="" /></div>

                </div>
                <div className='right-choose'>
                    <h4>Why Choose Us?</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit qui velit, vero, ullam soluta, et obcaecati aliquam culpa necessitatibus nemo animi quis ab sapiente nesciunt ducimus? Explicabo dignissimos enim aspernatur.</p>
                </div>

            </div>
            <div className='klinik'>
                <div className='left-klinik'>
                    <h4>Pilih Klinik</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis molestiae deleniti vel asperiores dolor saepe alias, eum repudiandae aspernatur tempore. Placeat commodi repellendus nesciunt explicabo ea error perspiciatis odit unde!</p>
                </div>
                <div className='rightbox'>
                    <div className='right-klinik'>
                        {/* this div can onClick and go to Klinik page */}
                        {
                            klinik.map((item) =>
                                <div className='klinik-card'>

                                    <div className='image-box'>
                                        <img src={item.foto} alt="" />

                                    </div>
                                    <div className='textKlinik'>

                                        <button>{item.lokasi}</button>
                                        <h5>{item.name}</h5>
                                        <p>Buka {item.time}</p>
                                    </div>
                                    <button className='bookBtn'>Book Now</button>
                                </div>
                            )
                        }
                    </div>
                    <div className='pagination'>
                        <span 
                         onClick={() => {  }}
                         ><FaCaretSquareLeft /></span>
                        <span 
                        onClick={() => {  }}
                        ><FaCaretSquareRight /></span>
                    </div>
                </div>


            </div>

        </div>
    )
}
