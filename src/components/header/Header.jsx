import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hello I'm</h1>
        <h1>Ramasubramanyam</h1>
        <h3 className="text-light">Software Developer</h3>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img
            className="me-image"
            
            src="https://cdn-icons-png.flaticon.com/512/5768/5768767.png"
            alt="me"
          />
        </div> */}

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
