import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/messagewapper/messages.css";

const messages = () => {
  return (
    <div className="messages">
      <div className="message df-alc">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
        ></Avatar>
        <div className="message__info">
          <span className="df-alc">
            <h2>kaif ali</h2>
            <p>12 tue,2022,08:15:05 pm</p>
          </span>
          <div className="message__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messages;
