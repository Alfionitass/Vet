import React from "react";

export default function catLoader(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "75vh",opacity:`${props.opacity}`,fontWeight:`${props.weight}` }}
    >
      <div className="cat-box">
        <div className="cat">
          <div className="cat__body" />
          <div className="cat__body" />
          <div className="cat__tail" />
          <div className="cat__head" />
        </div>
        <span style={{fontSize: "2.75rem"}} className="v-text-caramel">{props.text} is Empty</span>
      </div>
    </div>
  );
}
