import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
  
} from 'react-bootstrap'

import doctorImg from './assets/img/doctorProfile.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container>
        <Row>
        <Col lg={4}>
          <Card>
            <Image style={{width:"50px",height:"50px"}}src={doctorImg} roundedCircle />
            <h4>Alexandria Raihan</h4>
            <Badge variant="warning">Doctor</Badge>
          </Card>
          <Card>te</Card>
        </Col>
        <Col lg={8}>
          <Card>test</Card>
        </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
