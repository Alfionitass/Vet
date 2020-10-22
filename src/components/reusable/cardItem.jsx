import React from "react";
import { Badge, Card, Col, Row, Button } from "react-bootstrap";

export default function cardItem() {
  return (
    <Card style={{ boxShadow: "(0,0,0,0.3)" }} className="my-2 card--group">
      <Row className="align-items-center book--row m-3">
        <Col className="book--item col-1 mr-4">
          <Badge variant="primary">
            <p className="p-0 m-0">12</p>Okt
          </Badge>
        </Col>
        <Col>Alvin Mantovani</Col>
        <Col>99 Pets</Col>
        <Col>19.20</Col>
        <Row>
          <Col className="button--action">
            <Button size="sm" variant="outline-warning">
              Approve
            </Button>
          </Col>
          <Col className="button--action">
            <Button size="sm" variant="outline-danger">
              Disapprove
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}
