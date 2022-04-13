import React from "react";

const SidebarOptions = ({ Icon, name }) => {
  return (
    <div className="option">
      <Icon className="icon" />
      <span>{name}</span>
    </div>
  );
};

export default SidebarOptions;
