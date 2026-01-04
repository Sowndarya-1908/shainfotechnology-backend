import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const css = `
/* ===== FOOTER ===== */
.sps-footer{
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding:90px 6vw 30px;
  font-family:Inter,system-ui;
  color:#e5e7eb;
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
  font-weight:900;
  margin-bottom:14px;
  color:#ffffff;
}

.sps-footer-brand p{
  font-size:14px;
  line-height:1.8;
  color:#cbd5f5;
  max-width:380px;
}

/* HEADINGS */
.sps-footer h4{
  font-size:16px;
  font-weight:800;
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
  color:#cbd5f5;
  transition:0.25s;
}

.sps-footer ul li a:hover{
  color:#ffffff;
}

/* CONTACT */
.sps-footer-contact p{
  font-size:14px;
  color:#cbd5f5;
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
  padding:10px 16px;
  border-radius:999px;
  font-size:14px;
  font-weight:800;
  text-decoration:none;
  color:#ffffff;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  box-shadow:0 12px 40px rgba(139,92,246,0.45);
  transition:all .3s ease;
}

.sps-footer-actions a:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 60px rgba(236,72,153,0.55);
}

/* BOTTOM */
.sps-footer-bottom{
  border-top:1px solid rgba(255,255,255,0.08);
  padding-top:18px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:12px;
  font-size:13px;
  color:#9ca3af;
}

/* ===== RESPONSIVE ===== */
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
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <footer className="sps-footer">
      {/* TOP GRID */}
      <div className="sps-footer-grid">

        {/* BRAND */}
        <div className="sps-footer-brand">
          <h3>SHA INFOTECHNOLOGY</h3>
          <p>
            SHA Infotechnology is a Chennai-based digital solutions company
            delivering result-driven strategies in digital marketing, web
            development, and brand growth. We help businesses build a strong,
            scalable, and future-ready online presence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services/digital-strategy">Digital Strategy</a></li>
            <li><a href="/services/web-development">Web Development</a></li>
            <li><a href="/services/ecommerce">Ecommerce Website</a></li>
            <li><a href="/services/seo">SEO</a></li>
            <li><a href="/services/social-media-marketing">Social Media Marketing</a></li>
            <li><a href="/services/content-design">Content Design</a></li>
            <li><a href="/services/business-analysis">Business Analysis</a></li>
            <li><a href="/services/creative-design">Creative Design</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="sps-footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 94457 47815</p>
          <p>📧 shainfotech05@gmail.com</p>
          <p>📍 Chennai, India</p>

          <div className="sps-footer-actions">
            <a href="tel:919445747815">Call Now</a>
            <a
              href="https://wa.me/919445747815"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
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
