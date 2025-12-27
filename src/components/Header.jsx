import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sf-header">
      <div className="sf-header-inner">
        {/* Logo */}
        <div className="sf-logo">
  <div className="mark">
    <img
      src="/LOGO.jpeg"
      alt="SHA Infotechnology Logo"
      className="logo-img"
    />
  </div>

  <div className="logo-text">
  <div className="title">SHA INFOTECHNOLOGY</div>
  <div className="subtitle">Digital Solutions</div>

  <div className="phone-line">
    <span className="phone-icon">📞</span>
    <a href="tel:9445747815" className="phone-number">
  94457 47815
</a>
    {/* <span className="phone-number">9445747815</span> */}
  </div>
</div>
</div>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`sf-nav ${open ? "open" : ""}`}>
          {["/", "/about", "/services", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              onClick={() => setOpen(false)}
              className="nav-btn"
            >
              {["Home", "About", "Services", "Contact"][i]}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}