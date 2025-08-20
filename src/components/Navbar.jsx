import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/E-cell logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="ECell Logo" />
      </div>

      {/* Hamburger Toggle */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links desktop">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutus">About</NavLink></li>
        <li><NavLink to="/ourinitiatives">Our Vision</NavLink></li>
        <li><NavLink to="/ourteam">Our Team</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/membership">Membership</NavLink></li>
      </ul>

      {/* Desktop Button */}
      <div className="navbar-button">
        <a href="#">Get Started 🚀</a>
      </div>

      {/* Mobile Menu */}
      <ul className={`navbar-links mobile ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/ourinitiatives" onClick={() => setMenuOpen(false)}>Our Vision</NavLink></li>
        <li><NavLink to="/ourteam" onClick={() => setMenuOpen(false)}>Our Team</NavLink></li>
        <li><NavLink to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</NavLink></li>
        <li><NavLink to="/membership" onClick={() => setMenuOpen(false)}>Membership</NavLink></li>
      </ul>
    </nav>
  );
}
