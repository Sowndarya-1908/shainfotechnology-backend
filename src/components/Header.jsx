import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [courseOpen, setCourseOpen] = useState(false);

  useEffect(() => {
    const css = `

/* ================= COURSES DROPDOWN ONLY ================= */

.sf-dropdown{
  position:relative;
}

.sf-dropdown-menu{
  position:absolute;
  top:50px;
  left:0;
  min-width:280px;
  background:#ffffff;
  border-radius:14px;
  box-shadow:0 20px 50px rgba(0,0,0,0.15);
  display:none;
  flex-direction:column;
  overflow:hidden;
  z-index:9999;
}

.sf-dropdown-menu.show{
  display:flex;
}

.sf-dropdown-menu a{
  padding:18px 22px;
  text-decoration:none;
  color:#15304D;
  font-weight:600;
  border-bottom:1px solid #f1f1f1;
  transition:0.3s ease;
}

.sf-dropdown-menu a:last-child{
  border-bottom:none;
}

.sf-dropdown-menu a:hover{
  background:#f5f7fa;
}

/* Mobile dropdown support */

@media(max-width:900px){
  .sf-dropdown-menu{
    position:static;
    width:100%;
    margin-top:10px;
    border-radius:10px;
  }
}

    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  // Google Ads conversion
  const gtag_report_conversion = (url) => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17853848982/-CWeCM_gkN0bEJa7sMFC",
        value: 1.0,
        currency: "INR",
        event_callback: function () {
          if (url) window.location = url;
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
            <Link to="/">
              <img src="/LOGO.jpeg" alt="Logo" className="logo-img" />
            </Link>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => {
            setOpen(!open);
            // setCourseOpen(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`sf-nav ${open ? "open" : ""}`}>

          <NavLink to="/" end onClick={() => setOpen(false)} className="nav-btn">
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className="nav-btn">
            About
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className="nav-btn">
            Services
          </NavLink>


           <NavLink to="/courses" onClick={() => setOpen(false)} className="nav-btn">
            Courses
          </NavLink>

          {/* ============================ */}

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

          <Link to="/blog" onClick={() => setOpen(false)} className="nav-btn">
            Blog
          </Link>

        </nav>
      </div>
    </header>
  );
}