import React,{useState,useEffect} from 'react'
import {Container, Row, Col, Card,Form,InputGroup,FormGroup,Dropdown,FormControl,Button} from 'react-bootstrap'
import ModalUpdateSukses from './ModalUpdateSukses'

const DoctorEditProfile = () =>{
  const doctorCard = (
    <Card style={{ width: '12rem', color:'red' }}>
      <div>Alexandre Raihan</div>
    </Card>
  )

  const uploadPhoto = (
    <>
    <h5>Upload Photo</h5>
    <Form>
      <Form.Group>
        <Form.File id="formControlFile"/>
      </Form.Group>
    </Form>
    </>
  )

  const [isActive, setIsActive] = useState(false)
  // const [isActive, setIsActive] = useState(false)

  const doctorInformation =(
    <>
      <h5>Doctor Information</h5>
      <p>Status</p>
      <FormGroup tag="fieldset">            
        <Form.Check 
          type={'checkbox'}
          id={`default-radio`}
          label={`Active`}
          value={true}
          // onChange={() => setState(!state)}
        />      
        <Form.Check 
          type={'checkbox'}
          id={`default-radio`}
          label={`Offline`}
        />          
      </FormGroup>      
      <div>
        WaktuAktif
      </div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          15:00 - 17:00 Sore
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">15:00 - 17:00 Sore</Dropdown.Item>
          <Dropdown.Item href="#/action-1">15:00 - 17:00 Sore</Dropdown.Item>
          <Dropdown.Item href="#/action-1">15:00 - 17:00 Sore</Dropdown.Item>          
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
  const waktuAktif = (
    <>

    </>
  )

  const [name, setName]= useState('')
  const [data, setData] = useState({
    namaLengkap:'',
    experience:'',
    email:''
  })

  // useEffect(()=>{
  //   ,[data]
  // }


  const basicInformation = (
    <>
        <div>Nama Lengkap</div>
        <FormControl name="namaLengkap" onChange={(e)=>setData(e.target.value)}/>      
        <FormGroup tag="fieldset">            
          <Form.Check 
            type={'checkbox'}
            id={`default-radio`}
            label={`Male`}
            value={true}
            // onChange={() => setState(!state)}
          /> 
          <Form.Check 
            type={'checkbox'}
            id={`default-radio`}
            label={`Female`}
          />          
        </FormGroup> 
        <h5>Contact Details</h5>
        <div>Experience</div>
        <FormControl/>      
        <div>Email</div>
        <FormControl/>      
    </>
  )


  return(
    <Container>
      <Row>
        <Col xs="auto">
          {doctorCard}
        </Col>

        <Col>
          {uploadPhoto}
          {doctorInformation}    
          {basicInformation}                      
        </Col>
      </Row>  
      <ModalUpdateSukses />
    </Container>
  )
}

export default DoctorEditProfile