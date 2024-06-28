import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Shakeel from '../../img/Shakeel (3).png'

export default function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <img src={Shakeel} className="n-name" />
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Works"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Works</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link
          spy={true}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
          className="button n-button"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
