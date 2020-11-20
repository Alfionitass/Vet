import React, {useState,useEffect} from "react";
import { Dropdown,Card,Badge,Button, Container,Col,Row } from "react-bootstrap";
import { clinic } from '../../../database'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import Pagination from './Pagination'
import { AiOutlineSearch } from "react-icons/ai";

export default function ClinicSearch(){
  const [ clinicData, setClinicData] = useState()  
  const { page } = useParams()  
  const [ isSearch, setIsSearch ] = useState(false)
  const [ inputSearch, setInputSearch ] = useState('')
  let history = useHistory();
  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      history.push(`${process.env.PUBLIC_URL}/booking/search/${inputSearch}`);
    }
  };
    const { search } = useParams()
    useEffect(()=>{
        var axios = require('axios');

        var config = {
          method: 'get',
          url: `https://vet-booking.herokuapp.com/clinic/filter-name/?name=${search}`,
          headers: { }
        };
        
        axios(config)
        .then(function (response) {
          console.log('search',response?.data?.data);
          setClinicData(response?.data?.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      },[search])              
    
      // useEffect(()=>{clinicData && console.log(clinicData)},[clinicData])
    
      const dropDownLokasi = (
        <Dropdown className="mr-4">
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{borderColor:"#9C9C9C",color:"#9C9C9C",fontWeight:"bold"}}>
            Lokasi
          </Dropdown.Toggle>
          <Dropdown.Menu className="mt-0">        
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Jakarta`}>Jakarta</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Medan`}>Medan</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Surabaya`}>Surabaya</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Pekanbaru`}>Pekanbaru</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Bandung`}>Bandung</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Denpasar`}>Denpasar</Dropdown.Item>
            <Dropdown.Item href={`${process.env.PUBLIC_URL}/booking/lokasi/Makasar`}>Makasar</Dropdown.Item>  
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
    
      const r = clinicData && clinicData
      // console.log(r)
      const kartu = clinicData && clinicData.map((value,index)=>(            
        <Card style={{ width: '16rem',marginRight:'2rem'}} className="mt-4 mb-4" key={index}>
        <Card.Img variant="top" src={value.image} style={{objectFit:"cover", width:"16rem", height:"13rem"}}/>
        <Card.Body>
          <h6><Badge variant="secondary" style={{backgroundColor:"#E0E9F5", color:'black', width:"4rem", height:"1.2rem"}}>
            {value?.clinic?.city}
          </Badge></h6>
          <Card.Title>        
            {value.name}
          </Card.Title>
          <Card.Text>
            Buka 09:00-12:00
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:"white"}}>
          <Link to={`${process.env.PUBLIC_URL}/booking/detail/${value._id}/`}>
            <Button style={{borderColor:"#FDCB5A",backgroundColor:"#FDCB5A", width:"14rem",borderRadius:"4px",color:"black"}}>
              Book now
            </Button>
          </Link>
        </Card.Footer>
      </Card>  
      ))

      const pageStatic =(
        <div className="d-flex justify-content-center">
        <ul className='pagination'>
                    <li className="page-item">                    
                        <a className='page-link' 
                        href={`${process.env.PUBLIC_URL}/booking/${search}`}>                        
                        1
                        </a>
                    </li>
        
        </ul>        
        </div>
      )
    
      return (
        
        <div style={{paddingLeft:'3rem', paddingRight:'3rem',minHeight:'100vh'}}>
          <Row className="justify-content-end" style={{marginTop:"0.5rem", marginBottom:"0.5rem"}}>
            {dropDownLokasi}            
            {isSearch?
            input:
            buttonSearch}              
          </Row>
          <Row className="justify-content-center">      
            {kartu}
          </Row>    
          {clinicData && clinicData!==[]?pageStatic:""}
        </div>    
      );
}