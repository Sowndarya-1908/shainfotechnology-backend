import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Google Ads conversion function
  const gtag_report_conversion = (url) => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17853848982/-CWeCM_gkN0bEJa7sMFC",
        value: 1.0,
        currency: "INR",
        event_callback: function () {
          if (url) {
            window.location = url;
          }
        },
      });
    }
  };

  return (
    <header className="sf-header">
      <div className="sf-header-inner">
        {/* Logo */}
        <div className="sf-logo">
          <div className="mark">
            <Link to="/" aria-label="Go to Home">
              <img
                src="/LOGO.jpeg"
                alt="SHA Infotechnology Logo"
                className="logo-img"
              />
            </Link>
          </div>

          <div className="logo-text">
            <div className="title">SHA INFOTECHNOLOGY</div>
            <div className="subtitle">Digital Solutions</div>

            {/* Phone conversion tracking */}
            <div className="phone-line">
              <span className="phone-icon">📞</span>
              <a
                href="tel:9361046387"
                className="phone-number"
                onClick={() => gtag_report_conversion()}
              >
                94457 47815
              </a>
            </div>
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
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className="nav-btn"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="nav-btn"
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className="nav-btn"
          >
            Services
          </NavLink>

          {/* Contact conversion tracking */}
          <NavLink
            to="/contact"
            onClick={() => {
              gtag_report_conversion();
              setOpen(false);
            }}
            className="nav-btn"
          >
            Contact
          </NavLink>

          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="nav-btn"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
