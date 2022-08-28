import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";

function Nav() {
  const [avtiveNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={avtiveNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={avtiveNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#expeience')} className={avtiveNav === "#expeience" ? "active" : ""}>
        <BiBookBookmark />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={avtiveNav === "#portfolio" ? "active" : ""} >
        <RiServerLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={avtiveNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
