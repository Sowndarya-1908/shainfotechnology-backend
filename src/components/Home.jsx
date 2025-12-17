// src/components/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const IMAGE_PATH = "/mnt/data/92ba21cc-3a67-4485-9340-6f030c1fb602.png";
const MOTION_IMAGE = "/mnt/data/278f7e19-0aa1-427e-ba91-87d7daf5ff35.png";
const PANEL_IMAGE = "/images/slide2.png";
const PARALLAX_BG = "/images/background/image copy.png";

// Contact details
const CONTACT_PHONE = "+919361046387";
const CONTACT_PHONE_DISPLAY = "93610 46387";
const CONTACT_EMAIL = "shainfotech05@gmail.com";
const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/13%C2%B005'38.5%22N+80%C2%B011'28.5%22E/@13.0940298,80.1886629,17z/data=!4m4!3m3!8m2!3d13.09403!4d80.1912417";
const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed";

// ---------- SMALL CONTACT “FLOATING FORM” SECTION ----------
function Contactsection() {
  useEffect(() => {
    const css = `
      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
        --home-aqua:#6CC4C1;
      }

      .contact-wrapper{
        min-height:100vh;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:56px;
        padding:72px 84px;
        align-items:start;
        font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
        background:var(--home-grey);
        color:#111;
      }

      .contact-title{
        font-size:72px;
        font-weight:900;
        line-height:1.02;
        margin:0 0 36px 0;
        animation:floatHeadline 6s ease-in-out infinite;
      }

      @keyframes floatHeadline{
        0%{transform:translateY(0)}
        25%{transform:translateY(-8px)}
        50%{transform:translateY(0)}
        75%{transform:translateY(6px)}
        100%{transform:translateY(0)}
      }

      .contact-form{
        width:100%;
        background:#ffffff;
        border-radius:18px;
        padding:36px;
        box-shadow:0 24px 60px rgba(0,0,0,0.12);
        border:1px solid rgba(0,0,0,0.04);
        transition:transform 260ms ease, box-shadow 260ms ease;
      }

      .contact-form:hover{
        transform:translateY(-8px);
        box-shadow:0 32px 80px rgba(0,0,0,0.18);
      }

      .contact-form .form-row{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
        margin-bottom:18px;
      }

      .contact-form .form-field{margin-bottom:18px;}

      .contact-form input,
      .contact-form textarea{
        width:100%;
        padding:18px 20px;
        border-radius:12px;
        border:1px solid rgba(0,0,0,0.08);
        font-size:16px;
        color:#111;
        background:#ffffff;
        outline:none;
        box-shadow:0 0 0 rgba(0,0,0,0);
        transition:box-shadow 160ms ease, border-color 160ms ease, transform 160ms ease;
      }

      .contact-form input::placeholder,
      .contact-form textarea::placeholder{
        color:#777;
        font-weight:600;
      }

      .contact-form input:focus,
      .contact-form textarea:focus{
        border-color:var(--home-red);
        box-shadow:0 0 0 1px rgba(185,5,4,0.4);
        transform:translateY(-2px);
      }

      .contact-form textarea{
        min-height:150px;
        resize:vertical;
      }

      .fake-recaptcha{
        margin-top:8px;
        margin-bottom:20px;
        background:#ffffff;
        color:#111;
        padding:12px 14px;
        border-radius:10px;
        display:flex;
        align-items:center;
        gap:12px;
        border:1px solid rgba(0,0,0,0.1);
      }

      .fake-recaptcha .checkbox{
        width:20px;
        height:20px;
        border-radius:4px;
        border:2px solid #111;
      }

      .submit-btn{
        width:100%;
        background:var(--home-red);
        padding:18px;
        border-radius:12px;
        color:#fff;
        font-size:22px;
        font-weight:800;
        border:none;
        cursor:pointer;
        box-shadow:0 16px 40px rgba(185,5,4,0.4);
        transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
      }

      .submit-btn:hover{
        transform:translateY(-6px);
        background:#9b0403;
        box-shadow:0 26px 60px rgba(185,5,4,0.5);
      }

      @media(max-width:980px){
        .contact-wrapper{
          grid-template-columns:1fr;
          padding:40px;
          gap:28px;
        }
        .contact-title{font-size:44px;}
        .contact-form{padding:24px;}
        .contact-form .form-row{grid-template-columns:1fr;}
      }
    `;

    const old = document.getElementById("contactsection-spacing-styles");
    if (old) old.remove();
    const style = document.createElement("style");
    style.id = "contactsection-spacing-styles";
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => {
      const s = document.getElementById("contactsection-spacing-styles");
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="contact-wrapper">
      <div>
        <h1 className="contact-title">
          You’ve scrolled this far — let’s turn it into momentum.
        </h1>
      </div>

      <div className="contact-form" role="form" aria-label="Contact form">
        <div className="form-row">
          <div className="form-field">
            <input type="text" placeholder="Name" aria-label="Name" />
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder="Phone Number"
              aria-label="Phone number"
            />
          </div>
        </div>

        <div className="form-field">
          <input type="email" placeholder="Email" aria-label="Email" />
        </div>

        <div className="form-field">
          <input type="text" placeholder="Service" aria-label="Service" />
        </div>

        <div className="form-field">
          <textarea placeholder="Message" aria-label="Message" />
        </div>

        <div className="fake-recaptcha" role="checkbox" aria-checked="false">
          <div className="checkbox" aria-hidden="true" />
          <div>I'm not a robot</div>
        </div>

        <button className="submit-btn" type="button">
          LET'S CONNECT
        </button>
      </div>
    </div>
  );
}

// ---------- MAIN HOME COMPONENT ----------
export default function ShainfotechHome() {
  const headerRef = useRef(null);

  function ContactSection() {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <h2>Contact & Services</h2>
            <p className="contact-lead">
              Connect with us for Meta Ads, Google Ads, Web Design, GMB Access,
              Facebook Ads, Poster Design & Business Growth Analysis.
            </p>

            <div className="contact-cards">
              <div className="c-card">
                <strong>Location</strong>
                <a
                  href={CONTACT_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="c-card">
                <strong>Phone</strong>
                <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
              </div>

              <div className="c-card">
                <strong>Email</strong>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>

            <span className="services-label">Services</span>
            <div className="service-list">
              {[
                "Meta Ads",
                "Google Ads",
                "Web Design",
                "GMB Access",
                "Facebook Ads",
                "Poster Design",
                "Business Analysis Ideas",
              ].map((s) => (
                <div key={s} className="service-pill">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right" aria-hidden="false" title="Location map">
            <div className="map-card">
              <iframe
                src={CONTACT_MAP_EMBED}
                loading="lazy"
                title="Shainfotechnology Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-overlay">
              <div className="map-overlay-inner">
                <div className="overlay-phone">{CONTACT_PHONE_DISPLAY}</div>
                <div className="overlay-email">{CONTACT_EMAIL}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ---------- GLOBAL HOME STYLES ----------
  useEffect(() => {
    const css = `
      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
        --home-aqua:#6CC4C1;
        --header-height:88px;
      }

      *{box-sizing:border-box;}
      html,body,#root{min-height:100%;}
      body{margin:0;overflow:auto;-webkit-font-smoothing:antialiased;background:var(--home-grey);}

      .sf-wrap{
        min-height:100vh;
        background:var(--home-grey);
        color:#111;
        font-family:Inter, Roboto, Arial, sans-serif;
      }

      // .sf-header{
      //   position:sticky;
      //   top:0;
      //   z-index:100;
      //   width:100%;
      //   background:#ffffff;
      //   border-bottom:1px solid rgba(0,0,0,0.06);
      //   box-shadow:0 6px 18px rgba(0,0,0,0.06);
      //   transition:all 260ms cubic-bezier(.2,.9,.2,1);
      // }

      // .sf-header-inner{
      //   max-width:1400px;
      //   margin:0 auto;
      //   padding:14px 28px;
      //   display:flex;
      //   align-items:center;
      //   justify-content:space-between;
      //   position:relative;
      // }

      // .sf-nav{
      //   position:absolute;
      //   left:50%;
      //   transform:translateX(-50%);
      //   display:flex;
      //   gap:28px;
      //   align-items:center;
      // }

      // .sf-nav .nav-btn{
      //   background:none;
      //   border:none;
      //   color:#222;
      //   font-size:18px;
      //   font-weight:700;
      //   cursor:pointer;
      //   padding:6px 4px;
      //   transition:color 160ms ease, transform 160ms ease;
      //   text-decoration:none;
      // }

      // .sf-nav .nav-btn:hover{
      //   color:var(--home-red);
      //   transform:translateY(-2px);
      // }

      // .sf-logo{
      //   display:flex;
      //   align-items:center;
      //   gap:12px;
      //   margin-left:auto;
      // }

      // .mark{
      //   width:44px;
      //   height:44px;
      //   border-radius:50%;
      //   background:linear-gradient(135deg,var(--home-red),#7a0202);
      //   display:flex;
      //   align-items:center;
      //   justify-content:center;
      //   font-weight:700;
      //   color:#fff;
      //   box-shadow:0 10px 24px rgba(0,0,0,0.25);
      // }

      .fullpage-wrapper{
        width:100%;
        display:block;
        padding-top:var(--header-height);
      }

      .section{
        min-height:100vh;
        display:flex;
        align-items:stretch;
        transition:background 260ms ease;
      }

      .gif-slide{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#ffffff;
      }

      .content-slide{
        display:grid;
        grid-template-columns:1fr 1fr;
        width:100%;
        height:100%;
        background:#ffffff;
      }

      .content-left{
        padding:80px;
        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .content-left h2{
        font-size:56px;
        margin:0 0 18px 0;
        font-weight:800;
        color:#111;
        line-height:1.02;
      }

      .content-left p{
        color:#333;
        line-height:1.8;
        font-size:18px;
        max-width:720px;
      }

      .content-right{
        position:relative;
        padding:32px 20px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-left:6px solid var(--home-red);
        background:linear-gradient(135deg,#ffffff, #f6f6f6);
      }

      .content-right::before{
        content:"";
        position:absolute;
        inset:16px;
        border-radius:20px;
        border:1px dashed rgba(0,0,0,0.06);
        pointer-events:none;
      }

      .content-right .frame{
        z-index:2;
        width:92%;
        height:78%;
        background-image:url(${PANEL_IMAGE});
        background-size:cover;
        background-position:center;
        border-radius:18px;
        box-shadow:0 26px 70px rgba(0,0,0,0.25);
        transition:transform 260ms ease, box-shadow 260ms ease;
      }

      .content-right .frame:hover{
        transform:translateY(-10px) scale(1.03);
        box-shadow:0 34px 90px rgba(0,0,0,0.32);
      }

      .parallax-section{
        position:relative;
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        background:transparent;
      }

      .parallax-bg{
        position:absolute;
        inset:0;
        background-image:url('${PARALLAX_BG}');
        background-size:cover;
        background-position:center;
        opacity:1;
        pointer-events:none;
      }

      .parallax-content{
        position:relative;
        z-index:1;
        text-align:center;
        padding:120px 40px;
      }

      .parallax-title{
        font-size:44px;
        font-weight:800;
        color:#111;
        line-height:1.05;
        max-width:1100px;
        margin:0 auto;
      }

      .parallax-sub{
        display:block;
        margin-top:14px;
        font-size:20px;
        font-weight:700;
        color:var(--home-red);
      }

      /* Contact + map (bottom) */
      .contact-section{
        padding:60px 28px;
        background:var(--home-grey);
        color:#111;
        display:flex;
        justify-content:center;
      }

      .contact-inner{
        max-width:1200px;
        width:100%;
        display:grid;
        grid-template-columns:1.1fr 0.9fr;
        gap:28px;
        align-items:start;
      }

      .contact-left{
        background:#ffffff;
        padding:28px;
        border-radius:16px;
        box-shadow:0 20px 60px rgba(0,0,0,0.12);
        border:1px solid rgba(0,0,0,0.06);
      }

      .contact-left h2{
        margin:0 0 10px 0;
        font-size:28px;
        font-weight:800;
      }

      .contact-lead{
        color:#444;
        line-height:1.7;
        margin:0 0 18px 0;
      }

      .contact-cards{
        display:flex;
        flex-wrap:wrap;
        gap:14px;
        margin-bottom:20px;
      }

      .c-card{
        padding:14px 16px;
        border-radius:12px;
        border:1px solid rgba(0,0,0,0.06);
        background:#fdfdfd;
        min-width:160px;
        box-shadow:0 10px 26px rgba(0,0,0,0.06);
        transition:transform 200ms ease, box-shadow 200ms ease;
      }

      .c-card:hover{
        transform:translateY(-6px);
        box-shadow:0 16px 40px rgba(0,0,0,0.12);
      }

      .c-card strong{
        font-size:12px;
        opacity:0.9;
        display:block;
        margin-bottom:6px;
      }

      .c-card a{
        color:var(--home-red);
        text-decoration:none;
        font-weight:700;
      }

      .services-label{
        font-weight:800;
        margin-bottom:10px;
        display:block;
      }

      .service-list{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
      }

      .service-pill{
        padding:8px 12px;
        border-radius:999px;
        border:1px solid rgba(0,0,0,0.08);
        background:#ffffff;
        font-size:14px;
        color:#333;
        font-weight:600;
        box-shadow:0 8px 20px rgba(0,0,0,0.06);
        transition:transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
      }

      .service-pill:hover{
        transform:translateY(-4px);
        background:var(--home-aqua);
        color:#111;
        box-shadow:0 16px 36px rgba(0,0,0,0.16);
      }

      .contact-right{
        position:relative;
        min-height:320px;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .map-card{
        position:relative;
        width:100%;
        height:100%;
        border-radius:16px;
        overflow:hidden;
        border:1px solid rgba(0,0,0,0.06);
        box-shadow:0 22px 70px rgba(0,0,0,0.18);
        background:#ffffff;
        transition:transform 220ms ease, box-shadow 220ms ease;
      }

      .map-card iframe{
        width:100%;
        height:100%;
        min-height:320px;
        border:0;
        display:block;
      }

      .contact-right:hover .map-card{
        transform:translateY(-8px);
        box-shadow:0 32px 90px rgba(0,0,0,0.24);
      }

      .map-overlay{
        position:absolute;
        right:18px;
        bottom:18px;
        z-index:4;
      }

      .map-overlay-inner{
        background:var(--home-red);
        color:#fff;
        padding:10px 14px;
        border-radius:10px;
        box-shadow:0 16px 36px rgba(185,5,4,0.5);
        font-weight:700;
      }

      .overlay-phone{
        font-size:14px;
        letter-spacing:0.6px;
      }

      .overlay-email{
        font-size:12px;
        opacity:0.95;
        margin-top:4px;
      }

      @media(max-width:1000px){
        :root{--header-height:74px;}
        .fullpage-wrapper{padding-top:var(--header-height);}
        .content-left{padding:36px;}
        .content-left h2{font-size:34px;}
        .content-left p{font-size:15px;}
        .content-slide{grid-template-columns:1fr;}
        .contact-inner{grid-template-columns:1fr;}
      }
    `;

    const prev = document.getElementById("shainfotech-fullpage-styles");
    if (prev) prev.remove();
    const style = document.createElement("style");
    style.id = "shainfotech-fullpage-styles";
    style.innerHTML = css;
    document.head.appendChild(style);

    const setHeaderHeightVar = () => {
      const el = document.querySelector(".sf-header-inner");
      if (!el) return;
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--header-height",
        `${Math.ceil(h)}px`
      );
    };
    setHeaderHeightVar();
    window.addEventListener("resize", setHeaderHeightVar);

    return () => {
      const el = document.getElementById("shainfotech-fullpage-styles");
      if (el) el.remove();
      window.removeEventListener("resize", setHeaderHeightVar);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > 28) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".parallax-section");
    const bg = document.querySelector(".parallax-section .parallax-bg");
    if (!section || !bg) return;

    const applyBgTransform = (baseTranslateY = 0, pointerX = 0, pointerY = 0) => {
      bg.style.transform = `translate3d(${pointerX}px, ${
        baseTranslateY + pointerY
      }px, 0)`;
    };

    const handleParallax = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(1 - rect.top / vh, 0), 1);
      const translateY = (progress * 30 - 15) / 2;
      bg.dataset.baseTranslate = String(translateY);
      applyBgTransform(translateY, 0, 0);
    };

    const handlePointer = (e) => {
      const xx = (e.clientX / window.innerWidth - 0.5) * 12;
      const yy = (e.clientY / window.innerHeight - 0.5) * 8;
      const base = parseFloat(bg.dataset.baseTranslate || "0");
      applyBgTransform(base, xx, yy);
    };

    handleParallax();
    window.addEventListener("scroll", handleParallax, { passive: true });
    window.addEventListener("mousemove", handlePointer);
    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("mousemove", handlePointer);
    };
  }, []);

  return (
    <div className="sf-wrap">
      {/* <header ref={headerRef} className="sf-header">
        <div className="sf-header-inner">
          <div style={{ width: 120 }} /> */}
          {/* <nav className="sf-nav" aria-label="Main navigation">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            <Link to="/about" className="nav-btn">
              About Us
            </Link>
            <Link to="/services" className="nav-btn">
              Services
            </Link>
            
             <Link to="/contact" className="nav-btn">
              Contact
            </Link>
          </nav> */}
          {/* <div className="sf-logo">
            <div className="mark">S</div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800 }}>Shainfotechnology</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>
                Digital Marketing
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </header> */}

      <div className="fullpage-wrapper">
        {/* Section 1 - GIF + intro */}
        <section className="section gif-slide">
          <div
            style={{
              display: "flex",
              width: "85%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "45%", display: "flex", justifyContent: "center" }}>
              <img
                src="/logo.gif"
                alt="Shainfotech Intro Animation"
                style={{
                  width: "380px",
                  height: "380px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
                }}
              />
            </div>

            <div style={{ width: "50%", padding: "20px" }}>
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  marginBottom: "20px",
                  color: "#111",
                }}
              >
                Sha Infotechnology
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  color: "#333",
                }}
              >
                Sha Infotechnology is a modern Digital Marketing and Software
                Development agency helping businesses grow with technology-driven
                solutions. We specialize in SEO, website development, and mobile app
                development to boost your online presence and generate high-quality
                leads.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Content */}
        <section className="section content-slide">
          <div className="content-left">
            <h2 className="stagger-head">
              Leading Digital Marketing &amp; IT Solutions Company
            </h2>
            <p className="stagger-para">
              Backed by strong industry experience and a proven track record of
              delivering successful results, Sha Infotechnology is recognized as a
              trusted provider of Digital Marketing and IT services. We offer a
              complete suite of solutions including SEO, Social Media Marketing,
              Website Development, Mobile App Development, and Custom Software
              Development to help businesses grow online. At Sha Infotechnology, we
              believe in partnership over service — working together to build, scale,
              and achieve long-term digital success.
            </p>
          </div>

          <div className="content-right">
            <div className="frame" />
          </div>
        </section>

        {/* Section 3 - Parallax quote */}
        <section className="section parallax-section">
          <div className="parallax-bg" />
          <div className="parallax-content">
            <h1 className="parallax-title">
              Beautiful things happen in business when people come together, share
              their strengths, and build a future that no single person could create
              alone.
              <span className="parallax-sub">We grow when we grow together.</span>
            </h1>
          </div>
        </section>

        {/* Floating contact form section */}
        <Contactsection />

        {/* Contact + Map section (last) */}
        <ContactSection />
      </div>
    </div>
  );
}
