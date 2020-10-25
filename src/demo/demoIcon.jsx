import React from "react";
import { Container } from "react-bootstrap";
import {
  VetUser,
  VetClinic,
  VetDoctor,
  VetLogo,
  VetPaw,
  VetLogoBox, VetHospital, VetPCat, VetPHamster, VetPDog, VetPRabbit
} from "../assets/icons";
export default function DemoCard() {
  return (
    <Container>
      <VetUser bgcolor={"salmon"} size={"30"} color={"#FDCB5A"} />
      <VetClinic size={"30"} />
      <VetDoctor size={"30"} />
      <VetLogo size={"30"} bgcolor={"green"} />
      <VetPaw size={"300"} bgcolor={"salmon"} />
      <VetLogoBox size={"30"} bgcolor={"salmon"}/>
      <VetHospital size={"200"} bgcolor={"green"} color={"salmon"}/>
      <VetPCat size={"100"} bgcolor={"salmon"}/>
      <VetPHamster size={"100"}/>
      <VetPDog size={"100"}/>
      <VetPRabbit size={"100"}/> 
    </Container>
  );
}
