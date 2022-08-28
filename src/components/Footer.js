import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        El solia
      </a>

      <ul className="parmalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100005546626485">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/abdelrahman-soliman-aa02931b6">
          <GrLinkedinOption />
        </a>
        <a href="https://iwtsp.com/201097054537">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abdelrahman Soliman. All Right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
