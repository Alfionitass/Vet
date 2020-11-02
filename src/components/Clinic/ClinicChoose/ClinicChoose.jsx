import React, {useState,useEffect} from "react";
// import "./styles.css";
import { Dropdown,Card,Badge,Button, Container,Col,Row } from "react-bootstrap";
//import SearchIcon from '@material-ui/icons/Search';
// import styles from './App.module.css'
import { clinic } from '../../../database'
import {Link} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";

export default function ClinicChoose() { 
  const [ clinicData, setClinicData] = useState()
  useEffect(()=>{
    clinic({method:'all'}).then(res=>(
      setClinicData(res?.data?.data)
    ))
  },[])

  // useEffect(()=>{clinicData && console.log(clinicData)},[clinicData])

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
      <Button variant="warning" className="mr-4" style={{backgroundColor:"#FDCB5A",fontWeight:"bold"}}>        
      <AiOutlineSearch />
        {"  Cari Sekarang"}
      </Button>    
  )

  // const r=clinicData
  // const r = clinicData && clinicData
  console.log("ini clinic",clinicData)
  const r = clinicData && clinicData
  // console.log(r)
  const kartu = clinicData && clinicData.map((value)=>(            
    <Card style={{ width: '16rem'}} className="mt-4 mb-4 mr-3 ml-2">
    <Card.Img variant="top" src={value.image} />
    <Card.Body>
      <h6><Badge variant="secondary" style={{backgroundColor:"#E0E9F5", color:'black', width:"4rem", height:"1.2rem"}}>
        {value.clinic.city}
      </Badge></h6>
      <Card.Title>
        RS Kalimanjaro Ruah Tunah
        {value.name}
      </Card.Title>
      <Card.Text>
        Buka 09:00-12:00
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{backgroundColor:"white"}}>
      <Link to={`/booking/${value.id}/`}>
        <Button style={{borderColor:"#FDCB5A",backgroundColor:"#FDCB5A", width:"14rem",borderRadius:"4px",color:"black"}}>
          Book now
        </Button>
      </Link>
    </Card.Footer>
  </Card>  
  ))

  return (
    <>    
    <div style={{paddingLeft:'3rem', paddingRight:'3rem'}}>
    <Row className="justify-content-end">
      {dropDownLokasi}
      {binatangPeliharaan}    
      {buttonSearch}
    </Row>
      <Row>
        {kartu}
      </Row>    
    </div>
    </>
  );
}