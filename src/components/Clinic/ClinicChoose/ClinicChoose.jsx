import React from "react";
// import "./styles.css";
import { Dropdown,Card,Badge,Button, Container,Col,Row } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
// import styles from './App.module.css'

export default function ClinicChoose() { 
  const dropDownLokasi = (
    <Dropdown className="mr-4">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{borderColor:"#9C9C9C",color:"#9C9C9C",fontWeight:"bold"}}>
        Lokasi
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Jogja</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bandung</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Surabaya</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>)

  const binatangPeliharaan = (
    <Dropdown className="mr-4">
    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{borderColor:"#9C9C9C",color:"#9C9C9C",fontWeight:"bold"}}>
      Hewan Peliharaan
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Kucing</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Anjing</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Ular Kobra</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )

  const buttonSearch = (    
      <Button variant="warning" style={{backgroundColor:"#FDCB5A",fontWeight:"bold"}}>
        <SearchIcon />
        {"  Cari Sekarang"}
      </Button>    
  )
  const r=[1,2,3,4,5,6,7,8,9,2,1]
  const kartu = r.map((value)=>(    
    <Card style={{ width: '16rem'}} className="mt-4 mb-4 mr-3 ml-2">
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <h6><Badge variant="secondary" style={{backgroundColor:"#E0E9F5", color:'black', width:"4rem", height:"1.2rem"}}>
        Batam
      </Badge></h6>
      <Card.Title>
        RS Kalimanjaro Ruah Tunah
      </Card.Title>
      <Card.Text>
        Buka 09:00-12:00
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button style={{borderColor:"#FDCB5A",backgroundColor:"#FDCB5A", width:"14rem",borderRadius:"4px",color:"black"}}>
        Book now
      </Button>
    </Card.Footer>
  </Card>  
  ))

  return (
    <>
    <Container>
    <Row className="justify-content-end mr-4">
      {dropDownLokasi}
      {binatangPeliharaan}    
      {buttonSearch}
    </Row>
      <Row>
        {kartu}
      </Row>
    </Container>
    </>
  );
}