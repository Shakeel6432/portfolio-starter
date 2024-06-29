import React, { useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Shakeel from "../../img/Shakeel (3).png";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`n-wrapper ${darkMode ? "dark-mode" : ""}`} id="Navbar">
      <div className="n-left">
        <img src={Shakeel} className="n-name" alt="Logo" />
        <Toggle className="toggle" onClick={toggleDarkMode} />
      </div>
      <div className="n-right">
        <div className={`n-list ${isMenuOpen ? "open" : ""}`}>
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Home" smooth={true} onClick={() => setIsMenuOpen(false)} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true} onClick={() => setIsMenuOpen(false)} activeClass="activeClass">
              <li>Services</li>
            </Link>
            <Link spy={true} to="Works" smooth={true} onClick={() => setIsMenuOpen(false)} activeClass="activeClass">
              <li>Works</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true} onClick={() => setIsMenuOpen(false)} activeClass="activeClass">
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true} onClick={() => setIsMenuOpen(false)} activeClass="activeClass">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link
          spy={true}
          to="Contact"
          smooth={true}
          onClick={() => setIsMenuOpen(false)}
          activeClass="activeClass"
          className="button n-button"
        >
          Contact
        </Link>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}

