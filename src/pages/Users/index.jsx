import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import UserProfile from "../../components/reusable/profile";
import UserPage from "../../components/reusable/profilePage";
import doctorImg from "../../assets/img/doctorProfile.png";
import ProfileForm from "../../components/reusable/profileForm";
import { Container, Row, Col } from "react-bootstrap";
import { user } from '../../database'

export default function Users() {
  const { role } = useParams();
  const [passData,SetPassData] = useState(null);
  
  useEffect(() => {
    user({
      method: "self",
      access_token : localStorage.getItem('VetToken')
    }).then(res => {
      res.status === 200 && SetPassData(res.data.data.user)
    })
  },[])

  useEffect(() => {
  },[passData])

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile src={doctorImg} mode={role} value={5}  data = {passData}/>
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/user/${role}/profile`}>
              <ProfileForm
                config={{
                  mode: role,
                }}
                src={doctorImg}
                data = {passData}
              />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/user/:role`}>
              <UserPage data = {passData}/>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
