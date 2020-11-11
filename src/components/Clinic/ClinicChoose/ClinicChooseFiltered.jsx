import React, {useState,useEffect} from "react";
// import "./styles.css";
import { Dropdown,Card,Badge,Button, Container,Col,Row } from "react-bootstrap";
//import SearchIcon from '@material-ui/icons/Search';
// import styles from './App.module.css'
import { useParams } from 'react-router-dom'
import { clinic } from '../../../database'
import {Link} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function ClinicChooseFiltered() { 
  const [ clinicData, setClinicData] = useState()
  const [ isSearch, setIsSearch ] = useState(false)
  const [ inputSearch, setInputSearch ] = useState('')
  let history = useHistory();
  const {lokasi} = useParams()
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      history.push(`/booking/search/${inputSearch}`);
    }
  };
  const [linkUrl,setLinkUrl] = useState(`https://vet-booking.herokuapp.com/clinic/filter/?city=`+lokasi)
  useEffect(()=>{
    var axios = require('axios');

    var config = {
      method: 'get',
      url: linkUrl,
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setClinicData(response?.data?.data)
      console.log(response?.data?.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])
  
  const dropDownLokasi = (
    <Dropdown className="mr-4">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{borderColor:"#9C9C9C",color:"#9C9C9C",fontWeight:"bold"}}>
        Lokasi
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/booking/lokasi/Jakarta">Jakarta</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Medan">Medan</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Surabaya">Surabaya</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Pekanbaru">Pekanbaru</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Bandung">Bandung</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Denpasar">Denpasar</Dropdown.Item>
        <Dropdown.Item href="/booking/lokasi/Makasar">Makasar</Dropdown.Item>
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
    <Button variant="warning" className="mr-4" style={{backgroundColor:"#FDCB5A",fontWeight:"bold"}} onClick={()=>setIsSearch(true)}>        
    <AiOutlineSearch />
      {"  Cari Sekarang"}
    </Button>    
)

  const input = (
    <input 
    type="text"
    placeholder="Search Clinic"
    onChange={handleChange}
    onKeyUp={handleSubmit}    
    ></input>
  )
  
  console.log("ini clinic",clinicData)
  const r = clinicData && clinicData  
  const kartu = clinicData && clinicData.map((value)=>(            
    <Card style={{ width: '16rem'}} className="mt-4 mb-4 mr-3 ml-2">
    <Card.Img variant="top" src={value.image} style={{objectFit:"cover", width:"16rem", height:"13rem"}}/>
    <Card.Body>
      <h6><Badge variant="secondary" style={{backgroundColor:"#E0E9F5", color:'black', width:"4rem", height:"1.2rem"}}>
        {value.clinic.city}
      </Badge></h6>
      <Card.Title>        
        {value.name}
      </Card.Title>
      <Card.Text>
        Buka 09:00-12:00
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{backgroundColor:"white"}}>
      <Link to={`/booking/detail/${value._id}/`}>
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
    <Row className="justify-content-end" style={{marginTop:"0.5rem"}}>
      {dropDownLokasi}
      {/* {binatangPeliharaan}     */}
      {isSearch?
      input:
      buttonSearch}   
    </Row>
      <Row>
        {kartu}
      </Row>    
    </div>
    </>
  );
}