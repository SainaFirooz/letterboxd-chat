import React from "react";
import logo from "../images/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Letterboxd" />
      </div>
    </header>
  );
};

export default Header;
