import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== FOOTER ===== */

.sps-footer{
  position:relative;
  padding:90px 6vw 30px;
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;

  background:
    linear-gradient(
      135deg,
      rgba(99,102,241,0.35),
      rgba(168,85,247,0.30),
      rgba(236,72,153,0.25)
    );

  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);

  border-top:1px solid rgba(255,255,255,0.18);
  overflow:hidden;
}

.sps-footer::before{
  content:"";
  position:absolute;
  inset:0;
  background:rgba(10,12,35,0.35);
  z-index:-1;
}

/* GRID */

.sps-footer-grid{
  display:grid;
  grid-template-columns:2fr 1.2fr 1.2fr 1.6fr;
  gap:48px;
  margin-bottom:40px;
}

/* BRAND */

.sps-footer-brand h3{
  font-size:26px;
  font-weight:800;
  margin-bottom:14px;
  color:#ffffff;
}

.sps-footer-brand p{
  font-size:15px;
  line-height:1.7;
  color:#dbeafe;
  max-width:380px;
}

/* HEADINGS */

.sps-footer h4{
  font-size:17px;
  font-weight:700;
  margin-bottom:16px;
  color:#ffffff;
}

/* LINKS */

.sps-footer ul{
  list-style:none;
  padding:0;
  margin:0;
}

.sps-footer ul li{
  margin-bottom:10px;
}

.sps-footer ul li a{
  text-decoration:none;
  font-size:14px;
  color:#c7d2fe;
  transition:.25s;
}

.sps-footer ul li a:hover{
  color:#ffffff;
}

/* CONTACT */

.sps-footer-contact p{
  font-size:14px;
  color:#dbeafe;
  margin-bottom:10px;
}

/* CTA BUTTONS */

.sps-footer-actions{
  display:flex;
  gap:12px;
  margin-top:16px;
  flex-wrap:wrap;
}

.sps-footer-actions a{
  padding:10px 18px;
  border-radius:999px;
  font-size:14px;
  font-weight:700;
  text-decoration:none;
  color:#ffffff;

  background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  box-shadow:0 12px 40px rgba(99,102,241,0.45);

  transition:all .3s ease;
}

.sps-footer-actions a:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 60px rgba(236,72,153,0.55);
}

/* BOTTOM */

.sps-footer-bottom{
  border-top:1px solid rgba(255,255,255,0.12);
  padding-top:18px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:12px;
  font-size:13px;
  color:#e0e7ff;
}

/* RESPONSIVE */

@media(max-width:1000px){
  .sps-footer-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:600px){

  .sps-footer{
    padding:70px 5vw 25px;
  }

  .sps-footer-grid{
    grid-template-columns:1fr;
    gap:36px;
  }

  .sps-footer-bottom{
    flex-direction:column;
    text-align:center;
  }

}

/* SOCIAL ICONS */

.sps-footer-social{
  display:flex;
  gap:14px;
  margin-top:20px;
}

.sps-footer-social a{
  width:42px;
  height:42px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  font-size:18px;
  color:#ffffff;

  background:linear-gradient(135deg,#6366f1,#a855f7,#ec4899);
  box-shadow:0 10px 30px rgba(99,102,241,0.4);

  transition:all .3s ease;
}

.sps-footer-social a:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:0 18px 50px rgba(236,72,153,0.6);
}
  /* LOGO */

.sps-footer-logo{
  width:120px;
  height:120px;
  object-fit:cover;

  border-radius:50%; /* makes it round */

  margin-bottom:16px;

  border:3px solid rgba(255,255,255,0.2); /* optional nice border */
  box-shadow:0 10px 30px rgba(0,0,0,0.3); /* premium look */
}

/* SOCIAL ICONS */

.sps-footer-social{
  display:flex;
  gap:14px;
  margin-top:18px;
  justify-content:flex-start;
}

.sps-footer-social a{
  width:42px;
  height:42px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  font-size:18px;
  color:#ffffff;

  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.15);

  transition:all .3s ease;
}

/* HOVER COLORS */

.sps-footer-social a:nth-child(1):hover{
  background:#1877f2;
  transform:translateY(-4px);
}

.sps-footer-social a:nth-child(2):hover{
  background:linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4);
  transform:translateY(-4px);
}

/* MOBILE CENTER ALIGN */

@media(max-width:600px){
  .sps-footer-social{
    justify-content:center;
  }

  .sps-footer-logo{
    display:block;
    margin:auto;
  }
}

`;

    const id = "footer-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

  }, []);

  return (
    <footer className="sps-footer">

      <div className="sps-footer-grid">

        <div className="sps-footer-brand">
  <img src="/LOGO.jpeg" alt="Shainfotechnology Logo" className="sps-footer-logo" />

  <p>
    SHA Infotechnology is a Chennai-based digital solutions company
    delivering result-driven strategies in digital marketing, web
    development, and brand growth.
  </p>
</div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services/digital-strategy">Digital Strategy</Link></li>
            <li><Link to="/services/web-development">Web Development</Link></li>
            <li><Link to="/services/ecommerce">Ecommerce Website</Link></li>
            <li><Link to="/services/seo">SEO</Link></li>
            <li><Link to="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link to="/services/ai-marketing">AI Marketing</Link></li>
            <li><Link to="/services/business-analysis">Business Analysis</Link></li>
            <li><Link to="/services/content-design">Content Design</Link></li>
            <li><Link to="/services/creative-design">Creative Design </Link></li>
            <li><Link to="/services/brand-consultancy">Brand Consultancy </Link></li>
          </ul>
        </div>

        <div className="sps-footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 93610 46387</p>
          <p>📧 shainfotech05@gmail.com</p>
          <p>📍 Chennai, India</p>

          <div className="sps-footer-actions">
            <a href="tel:919361046387">Call Now</a>
            <a href="https://wa.me/919361046387" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
<div className="sps-footer-social">
  <a href="https://www.facebook.com/profile.php?id=61584983202107" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/_shainfotechnology_/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>

        </div>

      </div>

      <div className="sps-footer-bottom">
        <span>
          © {new Date().getFullYear()} SHA INFOTECHNOLOGY. All rights reserved.
        </span>
        <span>
          Digital Strategy • Web Development • SEO • Ecommerce • Branding
        </span>
      </div>

    </footer>
  );
}