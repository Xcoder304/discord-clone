import React from "react";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdEditLocation, MdPeopleAlt } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "../../styles/messagewapper/header.css";

const header = () => {
  return (
    <header className="messagewapper__header">
      <div className="header__left">
        <FaHashtag className="icon" />
        <span>youtube</span>
      </div>
      <div className="header__right">
        <IoMdNotifications className="icon" />
        <MdEditLocation className="icon" />
        <MdPeopleAlt className="icon" />
        <form>
          <input type="text" placeholder="search.." />
          <BiSearch className="Searchicon" />
        </form>
        <AiOutlineQuestionCircle className="icon" />
      </div>
    </header>
  );
};

export default header;
