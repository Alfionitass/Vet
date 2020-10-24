import React from "react";
import { Card } from "react-bootstrap";

import CardItem from "../../reusable/cardItem";

import doctorImg from "../../../assets/img/doctorProfile.png";

export default function AppointmentBook() {
  return (
    <Card.Body>
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
      <CardItem
        buttonMode={1}
        textMode={1}
        buttonText={"Approve"}
        date={"19.59"}
        name={"Alexandria"}
      />
    </Card.Body>
  );
}
