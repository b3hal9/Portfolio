import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="item">
        <div className="logo"></div>
        <button className="menu-toggler">
          <span>
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
