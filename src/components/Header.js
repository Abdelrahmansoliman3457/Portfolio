import React from "react";
import Cta from "./Cta";
import me from "../assets/solia.png";
import Headersocials from "./Headersocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abdelrahman</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <Cta />
        <Headersocials />

        <div className="me">
          <img src={me} alt="solia" />
        </div>

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
