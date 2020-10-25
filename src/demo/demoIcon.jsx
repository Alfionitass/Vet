import React from "react";
import { Container } from "react-bootstrap";
import {
  VetUser,
  VetClinic,
  VetDoctor,
  VetLogo,
  VetPaw,
  VetLogoBox,
  VetHospital,
  VetPCat,
  VetPHamster,
  VetPDog,
  VetPRabbit,
  VetPhone,
  VetLock,
  VetMail,
  VetFacebook,
  VetInstagram,
  VetTwitter,
  VetClock,
  VetSchedule,
  VetSignal,
  VetBriefcase,
  VetChat,
} from "../assets/icons";
export default function DemoCard() {
  return (
    <Container>
      <VetUser bgcolor={"salmon"} size={"30"} color={"#FDCB5A"} />
      <VetClinic size={"30"} />
      <VetDoctor size={"30"} />
      <VetLogo size={"30"} bgcolor={"green"} />
      <VetPaw size={"300"} bgcolor={"salmon"} />
      <VetLogoBox size={"30"} bgcolor={"salmon"} />
      <VetHospital size={"200"} bgcolor={"green"} color={"salmon"} />
      <VetPCat size={"100"} bgcolor={"salmon"} />
      <VetPHamster size={"100"} />
      <VetPDog size={"100"} />
      <VetPRabbit size={"100"} />
      <VetPhone size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetLock size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetMail size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetFacebook size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetInstagram size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetTwitter size={"100"} color={"lime"} bgcolor={"orange"} />
      <VetClock size={"100"} color={"salmon"} bgcolor={"black"} />
      <VetSchedule size={"100"} color={"salmon"} bgcolor={"black"} />
      <VetSignal size={"100"} color={"salmon"} bgcolor={"black"} />
      <VetBriefcase size={"100"} color={"salmon"} bgcolor={"black"} />
      <VetChat size={"100"} color={"salmon"} bgcolor={"black"} />
    </Container>
  );
}
