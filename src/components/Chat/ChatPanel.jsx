import React from "react";
import classes from "./Chat.module.css";
import Klinik from "../../assets/klinik.png";

export default function ChatPanel() {
  return (
    <div
      className="col-md-8"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5em",
        minHeight: "80vh",
      }}
    >
      <h5 style={{ marginTop: "1em" }}>RS Kalimanjaro Ruah Tunah </h5>
      <hr />
      <div
        style={{
          display: "flex",
          marginTop: "1em ",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "70vh",
        }}
      >
        <div className="chatBody">
          <div className={classes.chatFrom} style={{ display: "flex" }}>
            <div className={classes.avatarMask}>
              <img src={Klinik} alt="" />
            </div>
            <div className={classes.chatFromText}>
              <p style={{ margin: "0 0.5em" }}>halo kak</p>
            </div>
          </div>
          <div className={classes.chatTo} style={{ display: "flex" }}>
            <div className={classes.chatToText}>
              <p style={{ margin: "0 0.5em" }}>ok kak</p>
            </div>
            <div className={classes.avatarMask}>
              <img src={Klinik} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.inputChat} style={{ marginBottom: "1em" }}>
          <input type="text" placeholder="Ketik Pesanmu di sini" />
          <button
            type="button"
            class="btn btn-warning"
            style={{
              background: "#FDCB5A",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
