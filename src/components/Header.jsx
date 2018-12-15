import React from "react";
import logo from "../logo.svg";
import '../styles/header.sass'
const Header = () => (
  <div className="header-container">
    <img className="header-img" src={logo} alt="" />
    <p className="header-text" >Quizly</p>
  </div>
);

export default Header;
