import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import UserProfile from "../../components/reusable/profile";
import UserPage from "../../components/reusable/profilePage";
import doctorImg from "../../assets/img/doctorProfile.png";
import ProfileForm from "../../components/reusable/profileForm";
import { Container, Row, Col } from "react-bootstrap";
import { user } from "../../database";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAppointment, getHistory } from "../../redux/actions/appointment";

function Users(props) {
  const { role } = useParams();
  const [passData, SetPassData] = useState(null);

  useEffect(() => {
    //console.log("PROFILE{AGE",props.AuthPayloads.user.role)
    if(Object.keys(props.AuthPayloads.user).length){
      props.getAppointment(props.AuthPayloads.access_token,props.AuthPayloads.user.role);
      props.getHistory(props.AuthPayloads.access_token,props.AuthPayloads.user.role);
    } 
  },[])

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <UserProfile data={props} src={doctorImg} mode={role} value={5} />
        </Col>
        <Col lg={8} className="my-5 text-left">
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/user/${role}/profile`}
              render={() => (
                <ProfileForm
                  config={{
                    mode: role,
                  }}
                  src={doctorImg}
                  {...props}
                />
              )}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/user/:role`}
              render={() => <UserPage data={passData} />}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
    AppointmentPayloads: state.Appointment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAppointment, getHistory }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)