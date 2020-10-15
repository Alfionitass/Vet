import React from "react";
// import "./styles.css";
import { Dropdown,Card,Badge,Button } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
// import styles from './App.module.css'

export default function ClinicChoose() { 
  const dropDownLokasi =(
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="border-dark">
        Lokasi
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Jogja</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bandung</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Surabaya</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>)

  const binatangPeliharaan = (
    <Dropdown>
    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="border-dark">
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
      <Button variant="warning">
        <SearchIcon />
        {"  Cari Sekarang"}
      </Button>    
  )
  const r=[1,2,3,4,5,6,7,8,9,0]
  const kartu = r.map((value)=>(
    <Card style={{ width: '20rem'}}>
    <Card.Img variant="top" src="https://static.wikia.nocookie.net/bakemonogatari1645/images/0/04/Hitagi_Rendezvous_1.jpg/revision/latest?cb=20171229015129" />
    <Card.Body>
      <h6><Badge variant="secondary">
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
      <Button>
        Book now
      </Button>
    </Card.Footer>.
  </Card>
  ))

  return (
    <>
    {dropDownLokasi}
    {binatangPeliharaan}    
    {buttonSearch}
    <div>
      {kartu}
    </div>
    </>
  );
}