import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

import "../../styles/messagewapper/addmessage.css";

const AddMessage = () => {
  return (
    <div className="addmessage">
      <form>
        <input type="text" placeholder="Enter your Message" />
        <span>
          <RiSendPlaneFill className="icon" />
        </span>
      </form>
    </div>
  );
};

export default AddMessage;
