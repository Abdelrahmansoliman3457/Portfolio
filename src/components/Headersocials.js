import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://iwtsp.com/201097054537" target="_blank">
        <RiWhatsappFill />
      </a>
      <a href="https://github.com/Abdelrahmansoliman3457" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100005546626485" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default Headersocials;
