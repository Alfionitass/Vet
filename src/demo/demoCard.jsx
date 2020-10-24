import React from "react";
import { Card, Container } from "react-bootstrap";
import CardItem from "../components/reusable/cardItem";
import doctorImg from "../../../assets/img/doctorProfile.png";

export default function DemoCard() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <CardItem
            buttonMode={1}
            textMode={0}
            buttonText={"Book Again"}
            status={"Finished"}
            name={"Klinik Hewan"}
            src={doctorImg}
          />
          <CardItem
            buttonMode={2}
            textMode={0}
            buttonText={"Approve"}
            date={"10.20"}
          />
          <CardItem
            textMode={0}
            buttonMode={2}
            buttonText={"Disapprove"}
            date={"14:10"}
          />
          <CardItem
            buttonMode={3}
            textMode={1}
            date={"14:10"}
            buttonText={["Approve", "Disapprove"]}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
