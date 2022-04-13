import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MessageWapper from "./components/messagewapper/MessageWapper";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./Redux/features/userSlice";
import "./styles/app.css";

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <MessageWapper />
        </>
      ) : (
        <>
          <Login />
          <Sidebar />
          <MessageWapper />
        </>
      )}
    </div>
  );
};

export default App;
