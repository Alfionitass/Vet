import React from "react";
import { Badge, Card, Col, Row, Button, Image } from "react-bootstrap";

export default function cardItem(props) {
  return (
    <Card style={{ boxShadow: "(0,0,0,0.3)" }} className="my-2 card--group">
      <Row className="align-items-center book--row m-3">
        <Col className="book--item col-1 mr-4">
          {props.src ? (
            <Image src={props.src} className="rounded" />
          ) : (
            <Badge variant="primary">
              <p className="p-0 m-0">12</p>Okt
            </Badge>
          )}
        </Col>
        <Col>{props.name || "Alvin Mantovani"}</Col>
        {props.textMode === 1 && <Col>99 Pets</Col>}
        <Col className="v-text-caramel">{props.clock ? props.clock : props.status}</Col>
        <Row>
          <Col className="button--action">
            <Button size="sm" variant="outline-warning">
              {props.buttonText && (props.buttonText || "blank")}
            </Button>
          </Col>
          {console.log(props.mode)}
          {props.buttonMode === 3 && (
            <Col className="button--action">
              <Button size="sm" variant="outline-danger">
                {props.buttonText[1]}
              </Button>
            </Col>
          )}
        </Row>
      </Row>
    </Card>
  );
}
