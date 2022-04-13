import React from "react";
import "../../styles/sidebar.css";
import { BsChevronDown } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import SidebarOptions from "./SidebarOptions";
import { FaHashtag } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { BsHeadphones } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* header */}
      <div className="sidebar__top">
        <h3> kaifali </h3>
        <BsChevronDown className="icon" />
      </div>

      {/* sidebar chennels / sidebar options */}

      <div className="sidebar__addChennel">
        <span>
          <BsChevronDown className="icon" />
          <h4>Add Chennel</h4>
        </span>

        <span>
          <HiPlus className="addIcon" />
        </span>
      </div>

      <div className="sidebar__options">
        <SidebarOptions Icon={FaHashtag} name={"Youtube"} />
        <SidebarOptions Icon={FaHashtag} name={"Tiktok"} />
        <SidebarOptions Icon={FaHashtag} name={"Memems"} />
      </div>

      {/* sidebar footer */}
      <div className="sidebar__footer">
        <div className="footer__voice">
          <div className="xc2">
            <AiFillSignal className="signalicon" />
            <span>
              <h2>voice connected</h2>
              <span>audio</span>
            </span>
          </div>
          <IoIosCall className="icon" />
        </div>

        <div className="footer__user">
          <div className="userProfile">
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
            ></Avatar>
            <span>
              <h3>@kaifali</h3>
              <div className="userStates">
                <span></span>
                <p>online</p>
              </div>
            </span>
          </div>
          <div className="options">
            <BsFillMicFill className="icon" />
            <BsHeadphones className="icon" />
            <AiFillSetting className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
