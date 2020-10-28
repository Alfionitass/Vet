import React from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
// import hospitalImage from "https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg"


const DetailsComp = () =>{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Resume Booking</h1>                    
                    </Col>
                    <Col>
                        <Button variant="warning">Book Now</Button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <h2>RS Kilimanjaro Ruah Tuah</h2>
                        <h3>Informasi Umum</h3>
                        <Image src="https://revcycleintelligence.com/images/site/article_headers/_normal/hospital%2C_green.jpg" />
                        <h2>Tentang</h2>
                        <p>Audy Dental merupakan klinik hewan yang memberikan pelayanan kesehatan hewan spesialistik di Indonesia. Saat ini, RS kalimanjaro merupakan klinik gigi spesialis terbesar yang telah memiliki 14 cabang di area Jabodetabek dan Bandung. Sebagai klinik hewan yang terdepan, memberikan pelayanan terbaik yang profesional, berkualitas dan up to date, serta di lengkapi dengan teknologi standar internasional                            
                        </p>
                    </Col>
                    <Col>
                        <h2>Informasi Kunjungan</h2>
                        <p>Hari Kunjungan</p>
                        <p>Waktu Kunjungan</p>
                        <Row>
                        <Col>
                            <p>Area Parkir</p>
                            <p>Ruang Tunggu</p>
                        </Col>
                        <Col>
                            <p>Area Parkir</p>
                            <p>Ruang Tunggu</p>
                        </Col>
                        </Row>
                    </Col>                    
                </Row>
                <h2>Pilih Dokter</h2>
                <Row>
                    <Col>Komponen dokter</Col>
                    <Col>Komponen dokter</Col>
                    <Col>Komponen dokter</Col>
                </Row>
                <Row>
                    <Col>Komponen dokter</Col>
                    <Col>Komponen dokter</Col>
                    <Col>Komponen dokter</Col>
                </Row>
                <h2>Masukkan Informasi Hewan Peliharaan</h2>
                <Container>
                    <div>komponen Hewan</div>
                    <div>komponen Hewan</div>
                    <div>komponen Hewan</div>
                    <div>komponen Hewan</div>
                </Container>
            </Container>
        </>
    )
}
export default DetailsComp