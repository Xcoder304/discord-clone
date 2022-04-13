import React from "react";
import "../../styles/messagewapper/messagewapper.css";
import Header from "./Header";
import Messages from "./Messages";
import AddMessage from "./AddMessage";

const MessageWapper = () => {
  return (
    <div className="messageWapper">
      <Header />
      <Messages />
      <AddMessage />
    </div>
  );
};

export default MessageWapper;
