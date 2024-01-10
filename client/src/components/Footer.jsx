import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with{" "}
        <span className="heart-icon" style={{ color: "red" }}>
          &#10084;
        </span>{" "}
        and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
