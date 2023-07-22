import React from "react";
import "../nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <a href="/services">Services</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Link to="/">
                <a href="#">About Us</a>
              </Link>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a href="#">Products</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a href="#">Contact</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a href="#">Careers</a>
            </Link>
          </li>
        </ul>
        <h1 className="logo" style={{ color: "white" }}>
          HirzIndia
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
