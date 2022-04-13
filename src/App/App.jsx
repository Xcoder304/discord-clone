import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MessageWapper from "./components/messagewapper/MessageWapper";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MessageWapper />
    </div>
  );
};

export default App;
