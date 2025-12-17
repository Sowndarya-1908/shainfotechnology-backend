import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sf-header">
      <div className="sf-header-inner">

        {/* Logo */}
        <div className="sf-logo">
          <div className="mark">S</div>
          <div>
            <div className="title">SHA INFOTECHNOLOGY</div>
            <div className="subtitle">Digital Solutions</div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`sf-nav ${open ? "open" : ""}`}>
          <NavLink to="/" end className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
