import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiInstagram, SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ramasubramanyam-padmanabhan-404823256/"
        title="LinkedIn"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ram121606" title="GitHub" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/_.suryaa._/"
        title="Instagram"
        target="_blank"
      >
        <SiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
