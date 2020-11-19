import React from "react";
import classes from "./Chat.module.css";
import Klinik from "../../assets/klinik.png";

export default function ChatList() {
  let [chat, setChat] = React.useState([
    {
      name: "RS Kalimanjaro Ruah Tunah",
      content: "halo kak ",
      time: 4,
      foto: Klinik,
    },
    {
      name: "RS  Ruah Tunah",
      content: "haiii kak",
      time: 3,
      foto: Klinik,
    },
    {
      name: "RS  mantul",
      content: "halo mas",
      time: 1,
      foto: Klinik,
    },
  ]);
  return (
    <div
      className="col-md-4 col-xs-12"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5em",
        minHeight: "80vh",
      }}
    >
      <div
        className="input-group mb-3"
        style={{
          marginTop: "1em",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Chat"
          style={{ background: "#F1F1F1" }}
        />
      </div>
      <div>
        {chat.map((item) => (
          <ul className={classes.chatList}>
            <li>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <div className={classes.avatarMask}>
                    <img src={item.foto} alt="" />
                  </div>
                  <div>
                    <h5>{item.name}</h5>
                    <p style={{ maxWidth: "10em" }}>{item.content}</p>
                  </div>
                </div>
                <div>
                  <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>{item.time}h</p>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
