import React from "react";
import "../../styles/messagewapper/messagewapper.css";
import Header from "./Header";
import Messages from "./Messages";

const MessageWapper = () => {
  return (
    <div className="messageWapper">
      <Header />
      <Messages />
    </div>
  );
};

export default MessageWapper;
