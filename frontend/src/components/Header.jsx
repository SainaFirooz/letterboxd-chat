import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
// import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header fixed top-0 left-0 right-0 bg-form text-white p-2 h-18 z-10">
      <div className="logo flex items-center">
        <Link to="/">
          <img src={logo} alt="Letterboxd" className="w-64 h-auto ml-60" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
