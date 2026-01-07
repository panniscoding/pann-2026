import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#Home" className="logo-holder">
          <div className="logo">
            <img src="images/logo.webp" alt="logo" width="48" />
          </div>
          <div className="logo-text">Pann's Portfolio</div>
        </a>

        {/* Hamburger Icon */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item contact-button">
            <a href="mailto:panneiphyu.ms@gmail.com" className="nav-link">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
