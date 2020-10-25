import React from "react";
import {  Container } from "react-bootstrap";
import { VetUser, VetClinic, VetDoctor, VetLogo, VetPaw, VetLogoBox } from '../assets/icons'
export default function DemoCard() {
  return (
    <Container>
            <VetUser bgcolor={"salmon"} size={"30"} color={"#FDCB5A"}/>
      <VetClinic size={"30"}/>
      <VetDoctor size={"30"}/>
      <VetLogo size={"30"} bgcolor={"green"}/>
      <VetPaw size={"300"} bgcolor={"salmon"}/>
    </Container>
  );
}
