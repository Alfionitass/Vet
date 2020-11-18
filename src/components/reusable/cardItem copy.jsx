import React from "react";
import { Badge, Card, Col, Row, Button, Image } from "react-bootstrap";

export default function CardItem(props) {
  return (
    <Card style={{ boxShadow: "(0,0,0,0.3)" }} className="my-2 card--group">
      
        <Col className="book--item col-1 mr-4">
          {props.src ? (
            <Image src={props.src} className="rounded" />
          ) : (
            <Badge className="v-bg-donker v-text-white">
              <p className="p-0 m-0">{props.day || 12}</p>
              {props.month || "Okt"}
            </Badge>
          )}
        </Col>
        <Col>{props.name || "Alvin Mantovani"}</Col>
        {props.textMode === 1 && <Col>{props.pets || 99} Pets</Col>}
        <Col className="v-text-caramel">
          {props.date ? props.date : props.status}
        </Col>
        <Col className="d-flex">
          <Col className="button--action">
            {props.buttonMode === 1 || props.buttonMode === 3 ? (
              !props.history ? (
                <Button size="sm" className="px-4 py-2 v-btn-outline-sp-mustard">
                  {props.buttonText &&
                    (Array.isArray(props.buttonText)
                      ? props.buttonText[0]
                      : props.buttonText)}
                </Button>
              ) : (
                <Badge size="sm" className="px-4 py-2 v-badge-mustard">
                  {props.buttonText &&
                    (Array.isArray(props.buttonText)
                      ? props.buttonText[0]
                      : props.buttonText)}
                </Badge>
              )
            ) : (
              <Badge
                className="px-4 py-2 w-100"
                pill
                variant={
                  props.buttonText === "Approve"
                    ? "success"
                    : props.buttonText === "Rejected"
                    ? "warning"
                    : "danger"
                }
              >
                {" "}
                {props.buttonText}
              </Badge>
            )}
          </Col>
          {console.log(props.mode)}
          {props.buttonMode === 3 && (
            <Col className="button--action">
              <Button size="sm" className="px-4 py-2  v-btn-outline-sp-imperial">
                {props.buttonText[1]}
              </Button>
            </Col>
          )}
        </Col>

    </Card>
  );
}
