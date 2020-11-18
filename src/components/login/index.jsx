import React, { useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

import { setLogin } from "../../redux/actions/auth";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoadingPage from "../reusable/utilities/pageLoad";
const Login = (props) => {

  const handleSubmit = () => {
    props.setLogin(props.postData);
  };
  return props.AuthPayloads.isLoading ? (
    <LoadingPage />
  ) : (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={props.handleInput}
            type="email"
            name="email"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={props.handleInput}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <div>{JSON.stringify(props.AuthPayloads.user) || "DATA"}</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    AuthPayloads: state.Auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setLogin }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
