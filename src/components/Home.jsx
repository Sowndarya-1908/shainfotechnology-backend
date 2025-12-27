import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Contact from "./Contact";
const IMAGE_PATH = "/mnt/data/92ba21cc-3a67-4485-9340-6f030c1fb602.png";
const MOTION_IMAGE = "/mnt/data/278f7e19-0aa1-427e-ba91-87d7daf5ff35.png";
const PANEL_IMAGE = "/images/slide2.png";
const PARALLAX_BG = "/images/background/image copy.png";
// Contact details
// const CONTACT_PHONE = "+919361046387";
const CONTACT_PHONE_DISPLAY = "93610 46387";
// const CONTACT_EMAIL = "shainfotech05@gmail.com";
const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/13%C2%B005'38.5%22N+80%C2%B011'28.5%22E/@13.0940298,80.1886629,17z/data=!4m4!3m3!8m2!3d13.09403!4d80.1912417";
const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed";




 
function ProjectRunLeftImageSection() {
  return (
    <section className="projectrun-section">
      {/* HEADER */}
      <div className="projectrun-header">
        <h2 className="projectrun-title">
          <span className="projectrun-title-white">
            How a Project With
          </span>
          <span className="projectrun-title-gradient">
            Us Usually Runs
          </span>
        </h2>
        <div className="projectrun-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="projectrun-container">

        {/* IMAGE – LEFT */}
        <div className="projectrun-image">
          <div className="projectrun-image-glow">
            <img
              src="/images/projectrun.png"
              alt="Website Development"
            />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="projectrun-text">
          <p>
            SHA Infotechnology is a results-driven digital marketing and software development company helping businesses grow through powerful, technology-focused solutions. With strong industry experience and a passion for innovation, we empower brands to build a strong online presence and generate high-quality leads.
          </p>

          <p>
            Our expert team specializes in SEO, social media marketing, Google Ads, website design and development, branding, and complete digital marketing services. Whether you are a startup, small business, or growing enterprise, we deliver customized strategies that drive measurable growth.
          </p>

          <p>
            At SHA Infotechnology, we follow a data-driven approach to align digital strategies with your business goals—helping you grow faster, smarter, and more sustainably in the digital world.
          </p>
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .projectrun-section {
          padding: 100px 8vw;
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
        }

        .projectrun-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 70px;
        }

        .projectrun-title {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.2;
        }

        .projectrun-title-white {
          display: block;
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
          pointer-events: none;
        }

        .projectrun-title-gradient {
          display: block;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projectrun-divider {
          width: 90px;
          height: 3px;
          background: #8b5cf6;
          margin: 22px auto 0;
          border-radius: 2px;
        }

        .projectrun-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: center;
        }

        .projectrun-text p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 18px;
          color: #cbd5f5;
        }

        .projectrun-image {
          display: flex;
          justify-content: center;
        }

        .projectrun-image-glow {
          position: relative;
        }

        .projectrun-image-glow::before {
          content: "";
          position: absolute;
          inset: -70px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.6),
            rgba(236, 72, 153, 0.35),
            transparent 70%
          );
          filter: blur(65px);
          z-index: 0;
        }

        .projectrun-image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          border-radius: 18px;
          background: none;
          box-shadow: none;
        }

        @media (max-width: 900px) {
          .projectrun-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}



 function SeoMarketingSection() {
  return (
    <section className="seo-section">
      {/* HEADER */}
      <div className="seo-header">
        <h2 className="seo-title">
  <span className="seo-title-white">
    SEO Marketing Solutions
  </span>
  <span className="seo-title-gradient">
    That Deliver Real Growth
  </span>
</h2>

        <div className="seo-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="seo-container">
        {/* LEFT TEXT */}
        <div className="seo-text">
          <p>
            At SHA Infotechnology, we help businesses dominate search results with
            powerful SEO strategies and performance-driven marketing campaigns.
            Our focus is not just traffic—but attracting the right audience that
            converts into paying customers.
          </p>

          <p>
            From keyword research and on-page optimization to Google Ads and local
            SEO, our experts design campaigns that maximize ROI and increase brand
            visibility across all digital channels.
          </p>

          <p>
            Using data-driven insights, continuous monitoring, and optimization,
            we ensure your business stays ahead of competitors and achieves
            sustainable online growth.
          </p>
        </div>

        {/* RIGHT IMAGE (NO BOX) */}
        <div className="seo-image">
          <div className="image-glow">
            <img
              src="/images/seo.png"
              alt="SEO Marketing"
            />
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .seo-section {
          padding: 100px 8vw;
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: visible;
        }

        /* HEADER */
        .seo-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 70px;
          color: #red;
        }
.seo-title {
  text-align: center;
  font-size: clamp(34px, 4vw, 56px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

/* 🔒 WHITE TEXT – LOCKED (NO HOVER EFFECT EVER) */
.seo-title-white {
  display: block;
  color: #ffffff !important;
  background: none !important;
  -webkit-text-fill-color: #ffffff !important;
  pointer-events: none; /* prevents hover */
}

/* 🎨 GRADIENT TEXT */
.seo-title-gradient {
  display: block;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Optional: hover ONLY for gradient text */
.seo-title-gradient:hover {
  filter: brightness(1.15);
}


        .seo-header h2 {
          font-size: clamp(34px, 4vw, 50px);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
        }

        // .seo-header span {
        //   background: linear-gradient(90deg, #8b5cf6, #ec4899);
        //   -webkit-background-clip: text;
        //   -webkit-text-fill-color: transparent;
        // }

        .seo-divider {
          width: 90px;
          height: 3px;
          background: #8b5cf6;
          margin: 22px auto 0;
          border-radius: 2px;
        }

        /* GRID */
        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
          overflow: visible;
        }

        .seo-text p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 18px;
          color: #cbd5f5;
        }

        /* IMAGE + PURE GLOW */
        .seo-image {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }

        .image-glow {
          position: relative;
          background: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }

        .image-glow::before {
          content: "";
          position: absolute;
          inset: -70px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.6),
            rgba(236, 72, 153, 0.35),
            transparent 70%
          );
          filter: blur(65px);
          z-index: 0;
        }

        .image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          border-radius: 10px; /* only image rounding */
          background: none;
          box-shadow: none; /* ❌ removes box feel */
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .seo-container {
            grid-template-columns: 1fr;
          }

          .seo-text {
            text-align: center;
          }

          .seo-image {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}


 function SeoGrowthSectionleftimage() 
{
  return (
    <section className="seo-section">
      {/* HEADER */}
      <div className="seo-header">
        <h2 className="seo-title">
          <span className="seo-title-white">
            Website & Software Development
          </span>
          <span className="seo-title-gradient">
            for Modern Businesses
          </span>
        </h2>
        <div className="seo-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="seo-container">

        {/* IMAGE – LEFT (ONLY CHANGE) */}
        <div className="seo-image">
          <div className="image-glow">
            <img
              src="/images/websitehome.png"
              alt="SEO Marketing"
            />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="seo-text">
          <p>
            We design and develop high-performance websites and software solutions that combine stunning visuals with powerful functionality. Every project is built with speed, security, and scalability in mind.
          </p>

          <p>
           Whether you need a business website, e-commerce platform, or custom software application, our development team ensures seamless user experiences across all devices.
          </p>

          <p>
           By integrating modern technologies and best development practices, SHA Infotechnology helps businesses streamline operations and build a strong digital foundation for long-term success.
          </p>
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .seo-section {
          padding: 100px 8vw;
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
        }

        .seo-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 70px;
        }

        .seo-title {
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.2;
        }

        .seo-title-white {
          display: block;
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
          pointer-events: none;
        }

        .seo-title-gradient {
          display: block;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .seo-divider {
          width: 90px;
          height: 3px;
          background: #8b5cf6;
          margin: 22px auto 0;
          border-radius: 2px;
        }

        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr; /* IMAGE | TEXT */
          gap: 60px;
          align-items: center;
        }

        .seo-text p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 18px;
          color: #cbd5f5;
        }

        .seo-image {
          display: flex;
          justify-content: center;
        }

        .image-glow {
          position: relative;
        }

        .image-glow::before {
          content: "";
          position: absolute;
          inset: -70px;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.6),
            rgba(236, 72, 153, 0.35),
            transparent 70%
          );
          filter: blur(65px);
          z-index: 0;
        }

        .image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          border-radius: 18px;
          background: none;
          box-shadow: none;
        }

        @media (max-width: 900px) {
          .seo-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}



function ProcessFlowSection() {
  useEffect(() => {
    const css = `
/* ================= PROCESS FLOW (GLOW + ANIMATION) ================= */

.process-wrap{
  padding:140px 40px;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  // overflow:hidden;

}
.process-wrap{
  overflow:hidden;
  position:relative;
}
.process-container{
  overflow:hidden;
}
.process-container{
  max-width:1200px;
  margin:auto;
  position:relative;
}

/* GRID */
.process-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  row-gap:160px;
  column-gap:80px;
  position:relative;
  z-index:2;
}

/* STEP */
.process-step{
  text-align:center;
  opacity:0;
  transform:translateY(40px);
  transition:all 0.8s ease;
}

.process-step.show{
  opacity:1;
  transform:translateY(0);
}

.process-step h3{
  font-size:22px;
  font-weight:800;
  margin:18px 0 10px;
  color:#ffffff;
}

.process-step p{
  font-size:15px;
  line-height:1.7;
  color:#cfcfcf;
}

/* ================= GLOWING DOTS ================= */

.step-circle{
  width:64px;
  height:64px;
  border-radius:50%;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  font-weight:900;
  color:#ffffff;
  position:relative;
}

/* Glow ring */
.step-circle::after{
  content:"";
  position:absolute;
  inset:-10px;
  border-radius:50%;
  filter:blur(18px);
  opacity:0.7;
  z-index:-1;
}

/* COLORS + GLOW */
.c1{background:linear-gradient(135deg,#9be15d,#00e3ae);}
.c1::after{background:#00e3ae;}

.c2{background:linear-gradient(135deg,#ff9a9e,#ff5e62);}
.c2::after{background:#ff5e62;}

.c3{background:linear-gradient(135deg,#36d1dc,#5b86e5);}
.c3::after{background:#5b86e5;}

.c4{background:linear-gradient(135deg,#ff758c,#ff7eb3);}
.c4::after{background:#ff7eb3;}

.c5{background:linear-gradient(135deg,#7f7fd5,#86a8e7);}
.c5::after{background:#86a8e7;}

.c6{background:linear-gradient(135deg,#84fab0,#8fd3f4);}
.c6::after{background:#8fd3f4;}

/* ================= ANIMATED PATH ================= */

.process-line{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  pointer-events:none;
  z-index:1;
}

.process-line path{
  fill:none;
  stroke:#9aa4bf;
  stroke-width:3;
  stroke-dasharray:6 10;
  stroke-dashoffset:0;
   animation: moveDots 6s linear infinite;
  opacity:0.6;
}
@keyframes moveDots{
  from{
    stroke-dashoffset:0;
  }
  to{
    stroke-dashoffset:-500;
  }
}
.process-line path{
  stroke:#c7d2fe;
  opacity:0.8;
}
@keyframes drawPath{
  to{stroke-dashoffset:0;}
}

/* ================= MOBILE ================= */
@media(max-width:900px){
  .process-grid{
    grid-template-columns:1fr;
    row-gap:80px;
  }
  .process-line{display:none;}
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    /* SCROLL REVEAL */
    const steps = document.querySelectorAll(".process-step");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach(step => observer.observe(step));

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="process-wrap">
      <div className="process-container">

        {/* DOTTED CURVE */}
        <svg className="process-line" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="
            M100 120
            C300 220, 500 20, 700 120
            C900 220, 1100 60, 1100 120
            C1100 360, 900 500, 700 420
            C500 340, 300 520, 100 420
          " />
        </svg>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-circle c1">1</div>
            <h3>Research</h3>
            <p>Understanding your business and audience</p>
          </div>

          <div className="process-step">
            <div className="step-circle c2">2</div>
            <h3>Strategy</h3>
            <p>Building a tailored digital roadmap </p>
          </div>

          <div className="process-step">
            <div className="step-circle c3">3</div>
            <h3>Execution</h3>
            <p>Launching campaigns and solutions </p>
          </div>

          

<div className="process-step">
            <div className="step-circle c6">6</div>
            <h3>Insights</h3>
            <p>Measuring performance and results </p>
          </div>
          
          <div className="process-step">
            <div className="step-circle c5">5</div>
            <h3>Optimization</h3>
            <p>Improving for better outcomes  </p>
          </div>
<div className="process-step">
            <div className="step-circle c4">4</div>
            <h3>Scaling</h3>
            <p>Growing sustainably over time</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}


function HomeFAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
/* ================= HOME FAQ (UPGRADED) ================= */

.home-faq-wrap{
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  padding:110px 6vw;
  color:#ffffff;
  font-family:Inter,system-ui;
}
/* ================= GAP / STRIP FIX ================= */

*{
  box-sizing:border-box;
}

html, body{
  margin:0;
  padding:0;
  overflow-x:hidden;
}

.home-faq-container{
  max-width:1100px;
  margin:auto;
}

.home-faq-title{
  text-align:center;
  font-size:42px;
  font-weight:900;
  margin-bottom:12px;
  color:#B90504;
}

.home-faq-sub{
  text-align:center;
  color:#cfcfcf;
  font-size:16px;
  margin-bottom:50px;
}

/* CARD */
.home-faq-card{
  // background:#141414;
  border-radius:26px;
  padding:36px;
  box-shadow:0 30px 90px rgba(185,5,4,0.35);
}

/* ITEM */
.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.1);
  padding:20px 8px;
  transition:background .25s ease, transform .25s ease;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.1);
}

.home-faq-item:hover{
  background:#1b1b1b;
  transform:translateY(-4px);
}

/* HEADER */
.home-faq-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  gap:16px;
}

/* QUESTION */
.home-faq-question{
  font-size:18px;
  font-weight:700;
  color:#ffffff;
  transition:color .25s ease;
}

.home-faq-item.open .home-faq-question{
  color:#B90504;
}

/* TOGGLE */
.home-faq-toggle{
  width:34px;
  height:34px;
  border-radius:50%;
  border:2px solid #B90504;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  font-weight:900;
  color:#B90504;
  transition:all .3s ease;
}

.home-faq-item.open .home-faq-toggle{
  background:#B90504;
  color:#ffffff;
  transform:rotate(180deg);
}

/* ANSWER – SMOOTH */
.home-faq-answer{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transform:translateY(-6px);
  transition:
    max-height .45s cubic-bezier(0.16,1,0.3,1),
    opacity .3s ease,
    transform .3s ease;
}

.home-faq-item.open .home-faq-answer{
  max-height:300px;
  opacity:1;
  transform:translateY(0);
}

.home-faq-answer p{
  margin-top:14px;
  font-size:15px;
  line-height:1.7;
  color:#cfcfcf;
}

/* CTA */
.home-faq-cta{
  margin-top:48px;
  padding:36px;
  border-radius:22px;
  background:linear-gradient(135deg,#B90504,#ff3b3b);
  text-align:center;
  box-shadow:0 30px 90px rgba(185,5,4,0.45);
}

.home-faq-cta h3{
  font-size:26px;
  font-weight:900;
  margin-bottom:12px;
  color:#ffffff;
}

.home-faq-cta p{
  font-size:16px;
  color:#ffffff;
  margin-bottom:22px;
}

.home-faq-cta button{
  padding:14px 36px;
  border-radius:999px;
  border:none;
  background:#ffffff;
  color:#000;
  font-size:15px;
  font-weight:800;
  cursor:pointer;
  transition:all .3s ease;
}

.home-faq-cta button:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:0 20px 60px rgba(0,0,0,0.4);
}

/* MOBILE */
@media(max-width:768px){
  .home-faq-wrap{padding:70px 20px;}
  .home-faq-title{font-size:28px;}
  .home-faq-question{font-size:16px;}
}


/* ----- FAQ TITLE ----- */
.home-faq-title{
  color:transparent !important;
  text-align:center;
}

/* White part */
.home-faq-title .faq-title-white{
  color:#ffffff !important;
}

/* Gradient part */
.home-faq-title .faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Disable hover on FAQ title */
.home-faq-title,
.home-faq-title *{
  pointer-events:none;
}

/* ----- FAQ QUESTIONS ----- */
.home-faq-question{
  color:#ffffff !important;
}

/* ----- FAQ ANSWERS ----- */
.home-faq-answer p{
  color:#ffffff !important;
}

/* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
.home-faq-toggle{
  border:none !important;
  background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
  color:#ffffff !important;
  box-shadow:0 0 20px rgba(139,92,246,0.6);
}

/* Minus state */
.home-faq-item.open .home-faq-toggle{
  background:linear-gradient(135deg,#7c3aed,#db2777) !important;
  color:#ffffff !important;
}

/* Remove red hover influence */
.home-faq-toggle:hover{
  background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
}


/* ================= FAQ CTA WHITE BOX FIX ================= */

/* White container */
.home-faq-cta{
  background:#ffffff !important;
  box-shadow:0 30px 90px rgba(0,0,0,0.25);
}

/* Heading inside CTA */
.home-faq-cta h3{
  color:#020617 !important;   /* dark text */
}

/* Subtitle text */
.home-faq-cta p{
  color:#475569 !important;   /* soft dark grey */
}
    `;

    const id = "home-faq-style-upgraded";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

  /* ================= AUTO-OPEN ON SCROLL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpenFaq(0); // open first FAQ automatically
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "Which service should I start with?",
      a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
    },
    {
      q: "Do you work with small businesses?",
      a: "Yes. We work with startups, small businesses, and growing companies, offering flexible and affordable solutions."
    },
    {
      q: "How long does it take to see results?",
      a: "SEO typically takes 2–3 months for visible results, while Google Ads and social media campaigns can generate leads much faster."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Absolutely. We offer continuous optimization, support, and performance tracking for all our services."
    },
    {
      q: "How do I get started?",
      a: "Simply contact us for a free consultation. We’ll analyze your business and recommend the best growth strategy."
    }
  ];

  /* ================= SEO SCHEMA ================= */
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="home-faq-wrap" ref={sectionRef}>
      <div className="home-faq-container">
        <h2 className="home-faq-title">
  <span className="faq-title-white">Frequently Asked</span>{" "}
  <span className="faq-title-gradient">Questions</span>
</h2>

        {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
        <p className="home-faq-sub">
          Clear answers to help you move forward with confidence.
        </p>

        <div className="home-faq-card">
          {faqs.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className={"home-faq-item" + (open ? " open" : "")}
              >
                <div
                  className="home-faq-header"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                >
                  <div className="home-faq-question">{item.q}</div>
                  <div className="home-faq-toggle">{open ? "−" : "+"}</div>
                </div>

                <div className="home-faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="home-faq-cta">
          <h3>Still have questions?</h3>
          <p>Talk directly with our experts and get a custom growth plan.</p>
         <Link to="/contact"><button>
            BOOK FREE CONSULTATION →
          </button></Link> 
        </div>
      </div>
    </section>
  );
}


function ServicesHighlightSection() {
  const navigate = useNavigate();

  useEffect(() => {
    const css = `
/* ================= SERVICES HIGHLIGHT ================= */

.sh-wrap{
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding:100px min(6vw, 24px);
  font-family:Inter,system-ui;
}

.sh-title{
  text-align:center;
  font-size:44px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:70px;
}

/* GRID */
.sh-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:34px;
  align-items:stretch;
}

/* CARD */
.sh-card{
  background:#ffffff;
  border-radius:26px;
  padding:28px;
  height:240px;
  text-align:center;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:12px;

  position:relative;
  overflow:hidden;

  box-shadow:0 30px 80px rgba(0,0,0,0.55);
  transition:transform .35s ease, box-shadow .35s ease;
}

.sh-card:hover{
  transform:translateY(-10px);
  box-shadow:0 45px 120px rgba(0,0,0,0.7);
}

/* ICON */
.sh-icon{
  width:58px;
  height:58px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  box-shadow:0 0 40px rgba(139,92,246,0.6);
}

/* TITLE */
.sh-card h3{
  font-size:20px;
  font-weight:800;
  color:#020617;
  margin:0;
}

/* HOVER TEXT */
.sh-hover-text{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  font-size:16px;
  line-height:1.6;
  color:#ffffff;
  opacity:0;
  transition:.3s;
  z-index:1;
  text-align:center;
}

/* OVERLAY */
.sh-card::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  opacity:0;
  transition:.3s;
}

/* HOVER ACTION */
.sh-card:hover::before{ opacity:1; }
.sh-card:hover .sh-hover-text{ opacity:1; }
.sh-card:hover h3,
.sh-card:hover .sh-icon{ opacity:0; }

/* SCROLL REVEAL */
.sh-reveal{
  opacity:0;
  transform:translateY(40px);
  transition:.8s cubic-bezier(0.16,1,0.3,1);
}

.sh-reveal.show{
  opacity:1;
  transform:translateY(0);
}

/* RESPONSIVE */
@media(max-width:1024px){
  .sh-grid{grid-template-columns:1fr 1fr;}
}

@media(max-width:640px){
  .sh-grid{grid-template-columns:1fr;}
  .sh-title{font-size:32px;}
}
    `;

    const id = "services-highlight-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".sh-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("show"), i * 120);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sh-wrap">
      <h2 className="sh-title sh-reveal">What We Do Best</h2>

      <div className="sh-grid">
        <div className="sh-card sh-reveal" onClick={() => navigate("/services/digital-strategy")}>
          <div className="sh-icon">🧠</div>
          <h3>Digital Strategy</h3>
          <div className="sh-hover-text">
            Data-driven strategies that align technology, marketing, and business goals.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/web-development")}>
          <div className="sh-icon">💻</div>
          <h3>Web Development</h3>
          <div className="sh-hover-text">
            High-performance, responsive websites built to convert visitors into customers.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/ecommerce-website")}>
          <div className="sh-icon">🛒</div>
          <h3>E-commerce Website</h3>
          <div className="sh-hover-text">
            Secure, scalable online stores designed for smooth shopping and higher sales.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/seo")}>
          <div className="sh-icon">🔍</div>
          <h3>Search Engine Optimization</h3>
          <div className="sh-hover-text">
            Improve rankings, organic traffic, and long-term online visibility.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/social-media-marketing")}>
          <div className="sh-icon">📣</div>
          <h3>Social Media Marketing</h3>
          <div className="sh-hover-text">
            Build brand awareness, engagement, and trust across social platforms.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/content-design")}>
          <div className="sh-icon">✍️</div>
          <h3>Content Design</h3>
          <div className="sh-hover-text">
            Compelling content that informs, engages, and converts your audience.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/business-analysis")}>
          <div className="sh-icon">📊</div>
          <h3>Business Analysis</h3>
          <div className="sh-hover-text">
            Insight-driven analysis to optimize processes, performance, and growth.
          </div>
        </div>

        <div className="sh-card sh-reveal" onClick={() => navigate("/services/creative-design")}>
          <div className="sh-icon">🎨</div>
          <h3>Creative Design</h3>
          <div className="sh-hover-text">
            Eye-catching visuals and branding that make your business stand out.
          </div>
        </div>
        <div
  className="sh-card sh-reveal"
  onClick={() => navigate("/services/brand-consultancy")}
>
  <div className="sh-icon">🏷️</div>
  <h3>Brand Consultancy</h3>
  <div className="sh-hover-text">
    Build a strong, consistent brand identity that connects with your audience
    and drives long-term trust and growth.
  </div>
</div>
      </div>
    </section>
  );
}





function CTASection() {
    const navigate = useNavigate();
  useEffect(() => {
    const css = `
      .cta-wrap{
        position:relative;
        min-height:60vh;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        // background:#000;
        background: transparent;
        font-family:Inter,system-ui;
      }

      .cta-bg{
       position:absolute;
  inset:0;
  width:100%;
  height:100%;
  overflow:hidden;
        // position:absolute;
        // inset:-20%;
        background:
          radial-gradient(circle at 20% 40%, #ff0000, transparent 40%),
          radial-gradient(circle at 60% 30%, #00e5ff, transparent 45%),
          radial-gradient(circle at 80% 70%, #7c3aed, transparent 45%);
        filter: blur(90px);
        animation: floatBg 14s ease-in-out infinite alternate;
        z-index:0;
      }

      @keyframes floatBg{
        0%{ transform:translateY(-20px) scale(1); }
        100%{ transform:translateY(20px) scale(1.1); }
      }

      .cta-overlay{
        position:absolute;
        inset:0;
        background:rgba(0,0,0,0.78);
        z-index:1;
      }

      .cta-content{
        position:relative;
        z-index:2;
        text-align:center;
        max-width:900px;
        padding:40px 20px;
        color:#fff;
      }

      .cta-title{
        font-size:42px;
        font-weight:900;
        margin-bottom:18px;
      }

      .cta-sub{
        font-size:20px;
        color:#e5e7eb;
        margin-bottom:36px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:12px;
      }

      .cta-dot{
        width:16px;
        height:16px;
        border-radius:50%;
        background:#2dd4bf;
        box-shadow:0 0 20px rgba(45,212,191,0.9);
        animation:pulse 1.6s infinite;
      }

      @keyframes pulse{
        0%{transform:scale(1);opacity:1}
        50%{transform:scale(1.4);opacity:.6}
        100%{transform:scale(1);opacity:1}
      }

      
.cta-btn{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:16px 36px;
  border-radius:999px;

  /* 🔥 GRADIENT BACKGROUND */
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  color:#ffffff;

  font-size:15px;
  font-weight:800;
  border:none;
  cursor:pointer;
  letter-spacing:0.12em;

  /* Gradient glow */
  box-shadow:
    0 20px 60px rgba(139,92,246,0.45),
    0 0 30px rgba(236,72,153,0.35);

  transition:all .3s ease;
}

/* Hover effect */
.cta-btn:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:
    0 30px 90px rgba(139,92,246,0.6),
    0 0 40px rgba(236,72,153,0.5);
}

      .cta-btn span{
        font-size:20px;
      }

      @media(max-width:768px){
        .cta-title{font-size:28px;}
        .cta-sub{font-size:16px;flex-direction:column;}
      }

      /* ===== FORCE REMOVE RED & APPLY GRADIENT ===== */

/* Neutralize h2 color completely */
.cta-title{
  color:transparent !important;
}

/* Gradient text */
.cta-gradient-text{
  background:linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-weight:800;
}

    `;

    const id = "cta-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="cta-wrap">
      <div className="cta-bg"></div>
      <div className="cta-overlay"></div>

      <div className="cta-content">
        {/* <h2 className="cta-title">Ready to transform your business?</h2> */}
<h2 className="cta-title">
  <span className="cta-gradient-text">
    Ready to transform your business?
  </span>
</h2>

        <div className="cta-sub">
          <span className="cta-dot"></span>
          Book an informal chat with one of our specialists
        </div>

        <button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>

          <span>→</span> GET IN TOUCH
        </button>
      </div>
    </section>
  );
}
 function HomeHerohead() {
  useEffect(() => {
    const css = `
      :root{
        --bg-dark:#020617;
        --bg-dark-2:#0b1220;
        --violet:#8b5cf6;
        --pink:#ec4899;
        --muted:#9ca3af;
        --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
      }

      *{
        box-sizing:border-box;
      }

      .home-hero{
        min-height:100vh;
        padding:90px 8vw;
        background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
        display:grid;
        grid-template-columns:1.1fr 1fr;
        align-items:center;
        gap:40px;
        font-family:Inter,system-ui,sans-serif;
        overflow:hidden;
      }

      /* LEFT CONTENT — NO INTERACTION */
      .hero-left{
        pointer-events:none; /* ❌ disables hover completely */
      }

      .hero-left small{
        font-size:24px;
        letter-spacing:3px;
        color:#ffffff;
        font-weight:900;
        display:block;
        margin-bottom:22px;
      }

      .hero-left h1{
        font-size:clamp(44px,6vw,74px);
        line-height:1.1;
        margin:0 0 18px;
        color:#ffffff;
        font-weight:900;
      }

      .gradient-text{
        background:var(--gradient);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-left p{
        max-width:520px;
        font-size:14.5px;
        line-height:1.65;
        color:var(--muted);
        margin-bottom:28px;
      }

      .hero-tags{
        display:flex;
        flex-wrap:wrap;
        gap:14px;
      }

      .hero-tags span{
        padding:10px 16px;
        border-radius:14px;
        background:rgba(139,92,246,0.12);
        color:#e5e7eb;
        font-size:14px;
        border:1px solid rgba(139,92,246,0.25);
      }

      /* RIGHT IMAGE — BIG, NO HOVER */
      .hero-right{
        display:flex;
        align-items:center;
        justify-content:center;
        pointer-events:none; /* ❌ disables hover */
      }

      .hero-image{
        width:100%;
        max-width:820px;
        height:auto;
        filter:drop-shadow(0 70px 180px rgba(139,92,246,0.45));
      }

      @media(max-width:900px){
        .home-hero{
          grid-template-columns:1fr;
          padding:80px 6vw;
          text-align:center;
        }

        .hero-left small{
          font-size:18px;
        }

        .hero-left p{
          margin-left:auto;
          margin-right:auto;
          font-size:14px;
        }

        .hero-tags{
          justify-content:center;
        }

        .hero-image{
          max-width:520px;
          margin-top:40px;
        }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="home-hero">
      {/* LEFT */}
      <div className="hero-left">
        <small>SHA INFOTECHNOLOGY</small>

        <h1>
          Turning Digital Strategy <br />
          with <span className="gradient-text">Into Real Business Growth</span>
        </h1>

        <p>
          We help businesses grow with high-performance websites, SEO, e-commerce solutions, and result-driven digital marketing strategies.  </p>

        {/* <div className="hero-tags">
          <span>Website Development</span>
          <span>Website Design</span>
          <span>SEO</span>
          <span>Google Ads</span>
          <span>E-commerce</span>
          <span>Social Media</span>
        </div> */}
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img
          src="/images/33d.png"
          alt="Digital Growth Illustration"
          className="hero-image"
          draggable="false"
        />
      </div>
    </section>
  );
}







export default function ShainfotechHome() {
  const headerRef = useRef(null);

  useEffect(() => {
    const css = `

    :root{
  --bg-dark:#020617;
  --bg-dark-2:#0b1220;

  --violet:#8b5cf6;
  --pink:#ec4899;

  --text-main:#ffffff;
  --text-muted:#9ca3af;

  --card-white:#ffffff;
}

      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
        --home-aqua:#6CC4C1;
        --header-height:88px;
      }
        /* =====================================================
   🔥 GLOBAL HOVER INTERACTIONS – DARK THEME
  //  ===================================================== */
/* ================= GLOBAL TEXT HOVER – RED + GRADIENT ================= */

/* Brand red */
:root{
  --brand-red:#B90504;
  --hover-grad:linear-gradient(90deg,#B90504,#ff4d4d,#ff7a7a);
}

/* Headings */
h1, h2, h3, h4, h5, h6{
  transition:
    transform 0.25s ease,
    text-shadow 0.25s ease;
}

/* Gradient hover for headings */
h1:hover,
h2:hover,
h3:hover,
h4:hover,
h5:hover,
h6:hover{
  background:var(--hover-grad);
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
  transform:translateY(-2px);
  text-shadow:0 0 10px rgba(185,5,4,0.35);
}

/* Paragraphs, spans, list items */
p,
span,
li,
small{
  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
}

/* Red hover for body text */
p:hover,
span:hover,
li:hover,
small:hover{
  color:var(--brand-red) !important;
  text-shadow:0 0 6px rgba(185,5,4,0.35);
}

/* Links – gradient */
a{
  transition:
    transform 0.25s ease,
    text-shadow 0.25s ease;
}

a:hover{
  background:var(--hover-grad);
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 0 8px rgba(185,5,4,0.45);
  transform:translateY(-1px);
}

/* Mobile safety – disable hover effects */
@media (hover:none){
  h1:hover,
  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover,
  p:hover,
  span:hover,
  li:hover,
  small:hover,
  a:hover{
    background:none !important;
    -webkit-text-fill-color:initial !important;
    color:inherit !important;
    transform:none !important;
    text-shadow:none !important;
  }
}

/* ===== GLOBAL BACKGROUND (GRADIENT ONLY) ===== */
html,
body,
#root,
.sf-wrap,
.section,
.gif-slide,
.content-slide,
.parallax-section,
.home-contact-section,
.final-contact-info {
  background: radial-gradient(circle at top, #0b1220, #020617 70%) !important;
}

/* ---------- HEADINGS HOVER ---------- */
h1, h2, h3, h4{
  transition: color 0.3s ease, transform 0.3s ease;
}

h1:hover,
h2:hover,
h3:hover{
  color: var(--red);
  transform: translateY(-2px);
}

/* ---------- PARAGRAPH HOVER (SUBTLE) ---------- */
p{
  transition: color 0.25s ease;
}

p:hover{
  color: #ffffff;
}

/* ---------- LINKS ---------- */
a{
  position: relative;
  transition: color 0.3s ease;
}

a:hover{
  color: var(--red);
}

a::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-4px;
  width:0;
  height:2px;
  background:var(--red);
  transition:width 0.3s ease;
}

a:hover::after{
  width:100%;
}

/* ---------- BUTTONS / CTA ---------- */
button,
.submit-btn,
.pre-contact-btn{
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

button:hover,
.submit-btn:hover,
.pre-contact-btn:hover{
  transform: translateY(-4px) scale(1.04);
  background: #a00403;
  box-shadow: 0 28px 75px rgba(185,5,4,0.65);
}

/* ---------- CARDS ---------- */
// .c-card,
// .final-card,
// .contact-left,
// .home-contact-form{
//   transition: transform 0.35s ease, box-shadow 0.35s ease;
// }
.c-card,
.final-card,
.contact-left,
.home-contact-form {
  background: rgba(20, 24, 40, 0.9);
  backdrop-filter: blur(8px);
}

.sf-wrap p,
.sf-wrap span,
.sf-wrap li {
  color: #cfcfcf;
}

.sf-wrap h1,
.sf-wrap h2,
.sf-wrap h3,
.sf-wrap h4 {
  color: #B90504;
}

.c-card:hover,
.final-card:hover,
.contact-left:hover{
  transform: scale(1.04);
  box-shadow: 0 30px 90px rgba(185,5,4,0.45);
}

/* ---------- SERVICE PILLS ---------- */
.service-pill{
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.service-pill:hover{
  transform: translateY(-4px);
  background: var(--red);
  color:#ffffff !important;
  box-shadow: 0 16px 40px rgba(185,5,4,0.55);
}

/* ---------- FORM INPUTS ---------- */
input,
textarea{
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

input:hover,
textarea:hover{
  transform: translateY(-2px);
}

input:focus,
textarea:focus{
  border-color: var(--red);
  box-shadow: 0 0 0 2px rgba(185,5,4,0.35),
              0 12px 30px rgba(185,5,4,0.25);
}

/* ---------- HERO IMAGE ---------- */
.hero-image{
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.hero-image:hover{
  transform: scale(1.06);
  box-shadow: 0 30px 80px rgba(185,5,4,0.45);
}

/* ---------- CONTENT FRAME ---------- */
.content-right .frame{
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.content-right .frame:hover{
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 40px 100px rgba(185,5,4,0.5);
}
/* ================= IMAGE REPLACEMENT ================= */

.content-right.image-replacement{
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px;
  border-left:6px solid var(--home-red);
}

.content-image{
  width:100%;
  max-width:520px;
  border-radius:18px;
  box-shadow:0 30px 90px rgba(185,5,4,0.45);
  transition:transform 0.4s ease, box-shadow 0.4s ease;
}

.content-image:hover{
  transform:scale(1.05);
  box-shadow:0 40px 120px rgba(185,5,4,0.65);
}

/* MOBILE */
@media(max-width:768px){
  .content-image{
    max-width:320px;
  }
}

/* ---------- FINAL CTA ---------- */
.final-contact-info:hover h2{
  color: var(--red);
  transform: scale(1.02);
}

        /* ================= GOOGLE FONTS ================= */
/* ================= GOOGLE FONTS ================= */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

/* ================= DARK THEME SYSTEM ================= */
:root{
  --bg-main:#0b0b0b;
  --bg-card:#141414;
  --red:#B90504;
  --text-main:#ffffff;
  --text-muted:#cfcfcf;
}


/* Force dark background */
body,
.sf-wrap{
  // background:var(--bg-main);
  color:var(--text-main);
  font-family:'Inter', system-ui, sans-serif;
}

/* ================= HEADLINES ================= */
h1, h2, h3{
  font-family:'Poppins', sans-serif;
  font-weight:800;
  color:var(--red);
}

/* ================= BODY TEXT ================= */
p, span, li{
  color:var(--text-muted);
  font-family:'Inter', sans-serif;
}


      *{box-sizing:border-box;}
      html,body,#root{min-height:100%;}
      // body{margin:0;overflow:auto;-webkit-font-smoothing:antialiased;background:var(--home-grey);}

     

      body,
.sf-wrap{
  margin:0;
  overflow:auto;
  // background:var(--bg-main);
  color:var(--text-main);
  font-family:'Open Sans', system-ui, sans-serif;
}

      

   
.gif-slide{
  margin-top: var(--header-height);
   background: radial-gradient(circle at top, #0b1220, #020617 70%);
}

      
      .section{
  min-height: calc(100vh - var(--header-height));
  display:flex;
  align-items:stretch;
}


      .gif-slide{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    //  background:var(--bg-card);
      }
        .gif-slide{
// background:var(--bg-card);
  margin:0;
}


      .content-slide{
        display:grid;
        grid-template-columns:1fr 1fr;
        width:100%;
        height:100%;
         background: radial-gradient(circle at top, #0b1220, #020617 70%);
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
        // color:#111;
        line-height:1.02;
      }

      .content-left p{
        // color:#333;
        line-height:1.8;
        font-size:18px;
        max-width:720px;
      }
        p,
.stagger-para,
.contact-lead,
.final-inline{
  color:var(--text-muted);
  font-family:'Open Sans', sans-serif;
  line-height:1.75;
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
        // min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        background:transparent;
      }

      .section,
.single-red-slide,
.process-wrap,
.pc-wrap,
.home-faq-wrap{
  padding:80px 6vw;
  margin:0;
}
@media(max-width:768px){
  .section,
  .single-red-slide,
  .process-wrap,
  .pc-wrap,
  .home-faq-wrap{
    padding:60px 20px;
  }
}

.c-card,
.final-card,
.contact-left,
.home-contact-form{
  // background:var(--bg-card);
  border-radius:22px;
  transition:transform 0.3s ease, box-shadow 0.3s ease;
}
.c-card,
.final-card,
.contact-left,
.home-contact-form {
  background: rgba(20, 20, 30, 0.9);
  backdrop-filter: blur(6px);
}

.c-card:hover,
.final-card:hover{
  transform:scale(1.03);
  box-shadow:0 30px 80px rgba(185,5,4,0.45);
}

button,
.submit-btn{
  background:var(--red);
  color:#fff;
  font-family:'Montserrat', sans-serif;
  font-weight:700;
  border:none;
  border-radius:14px;
  padding:16px 28px;
  cursor:pointer;
  transition:all 0.3s ease;
  box-shadow:0 18px 45px rgba(185,5,4,0.45);
}

button:hover,
.submit-btn:hover{
  transform:translateY(-4px);
  box-shadow:0 28px 75px rgba(185,5,4,0.65);
}
a{
  color:var(--red);
  font-weight:600;
  text-decoration:none;
  position:relative;
}

a::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-4px;
  width:0;
  height:2px;
  background:var(--red);
  transition:width 0.3s ease;
}

a:hover::after{
  width:100%;
}
input,
textarea{
  background:#0f0f0f;
  color:#ffffff;
  border:1px solid rgba(255,255,255,0.2);
}

input::placeholder,
textarea::placeholder{
  color:#9a9a9a;
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
        color:white;
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
h1, h2, h3, h4{
  font-family:'Montserrat', sans-serif;
  font-weight:800;
  color:var(--text-main);
  transition:color 0.3s ease;
}

h1:hover,
h2:hover{
  color:var(--red);
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
      // background:var(--bg-card);

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
        // background:var(--bg-card);
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
      //  background:var(--bg-card);
        transition:transform 220ms ease, box-shadow 220ms ease;
      }

      // .map-card iframe{
      //   width:100%;
      //   height:100%;
      //   min-height:320px;
      //   border:0;
      //   display:block;
      // }

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
        @media(max-width:768px){

  .contact-section{
    padding:40px 18px;
  }

  .contact-left{
    padding:22px;
    border-radius:14px;
  }

  .contact-left h2{
    font-size:22px;
  }

  .contact-lead{
    font-size:14px;
  }

  .contact-cards{
    gap:12px;
  }

  .c-card{
    width:100%;
  }

  .service-pill{
    font-size:13px;
    padding:7px 10px;
  }

  .contact-right{
    min-height:240px;
  }


  .map-overlay{
    right:12px;
    bottom:12px;
  }

  .map-overlay-inner{
    padding:8px 10px;
    font-size:12px;
  }
} /* ================= HOME CONTACT SLIDE ================= */

    

/* LEFT – FORM */
.home-contact-form{
// background:var(--bg-card);
  border-radius:24px;
  padding:40px;
  box-shadow:0 20px 60px rgba(0,0,0,0.12);
}

/* Improve form usability */
.home-contact-form input,
.home-contact-form textarea{
  width:100%;
  padding:16px 18px;
  border-radius:12px;
  border:1px solid rgba(0,0,0,0.15);
  font-size:16px;
}

.home-contact-form textarea{
  min-height:140px;
}

.home-contact-form button{
  margin-top:12px;
  padding:16px;
  font-size:18px;
  font-weight:800;
  border-radius:14px;
}

/* RIGHT – MAP ONLY */
.home-contact-map{
//  background:var(--bg-card);
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 18px 50px rgba(0,0,0,0.15);
}



  .home-contact-form{
    padding:28px;
    border-radius:18px;
  }

  .home-contact-form input,
  .home-contact-form textarea{
    font-size:15px;
    padding:14px 16px;
  }
svg{
  max-width:100%;
  overflow:hidden;
}
  /* ================= GLOBAL LAYOUT SAFETY FIX ================= */

html,
body,
#root,
.sf-wrap{
  width:100%;
  max-width:100%;
  overflow-x:hidden;
}

/* Prevent absolute elements causing overflow */
section,
.process-wrap,
.single-red-slide,
.cta-wrap{
  overflow:hidden;
}

/* SVG safety */
svg{
  max-width:100%;
  overflow:hidden;
}

/* Responsive padding clamp */
.hero-wrap,
.pc-wrap,
.process-wrap,
.home-faq-wrap,
.single-red-slide,
.contact-section{
  padding-left: min(6vw, 24px) !important;
  padding-right: min(6vw, 24px) !important;
}
/* ================= GLOBAL BACKGROUND FIX ================= */

html,
body,
#root,
.sf-wrap,
.fullpage-wrapper,
.section,
.gif-slide,
.single-red-slide,
.process-wrap,
.pc-wrap,
.home-faq-wrap,
.cta-wrap,
.parallax-section {
  background: radial-gradient(circle at top, #0b1220, #020617 70%) !important;
}

  
.home-contact-form{
  width:100%;
   padding:60px min(6vw, 24px);
  padding:80px 120px;   /* WIDE FORM */
//  background:var(--bg-card);
}
  .home-contact-form .contact-section{
  padding:0 !important;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100% !important;
}
@media(max-width:768px){
  // .home-contact-section{
  //   grid-template-columns:1fr;
  // }

  .home-contact-form{
    padding:40px 20px;
  }
}

.home-contact-form{
  width:100%;
  max-width:100%;
  padding:60px;
//  background:var(--bg-card);
  display:flex;
}

/* FORCE CONTACT FORM FULL WIDTH */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100%;
  grid-template-columns:1fr !important; /* REMOVE LEFT EMPTY COLUMN */
}

.home-contact-form .contact-right{
  width:100%;
  padding:0;
  box-shadow:none;
  border-radius:0;
}
  @media(max-width:768px){
  .home-contact-form{
    padding:24px 16px;
  }
}



.home-contact-form .map-card{
  display:none;
}


  .home-contact-form{
    padding:40px 20px;
  }



.final-contact-info{
  min-height:70vh;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  padding:90px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-family:Inter,system-ui;
}

.final-contact-info h2{
  font-size:42px;
  font-weight:900;
  margin-bottom:40px;
  color:#111;
  max-width:900px;
}

.final-cards{
  display:flex;
  gap:32px;
  justify-content:center;
  align-items:stretch;
  flex-wrap:wrap;
}

.final-card{
//  background:var(--bg-card);
  width:280px;
  padding:28px 24px;
  border-radius:18px;
  box-shadow:0 18px 50px rgba(185,5,4,0.28);
  text-align:center;
}

.final-card span{
  display:block;
  font-size:13px;
  opacity:0.7;
  margin-bottom:10px;
  letter-spacing:0.08em;
  text-transform:uppercase;
}

.final-card a{
  color:#B90504;
  font-weight:800;
  text-decoration:none;
  font-size:16px;
}

.final-card strong{
  font-size:16px;
  font-weight:800;
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .final-contact-info{
    padding:60px 20px;
  }

  .final-contact-info h2{
    font-size:28px;
    margin-bottom:28px;
  }

  .final-cards{
    flex-direction:column;
    gap:20px;
  }

  .final-card{
    width:100%;
    max-width:360px;
  }
}



/* LEFT — FORM FULL WIDTH */
.home-contact-form{
  padding:80px 90px;
//  background:var(--bg-card);
  display:flex;
  align-items:center;
}

/* FORCE CONTACT FORM FULL WIDTH */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100%;
  margin:0;
  display:block;
}

.home-contact-form .contact-right{
  width:100%;
  padding:0;
  box-shadow:none;
  border-radius:0;
}

/* HIDE MAP INSIDE CONTACT */
.home-contact-form .map-card{
  display:none;
}

/* RIGHT — MAP */
.home-contact-map{
  display:flex;
  align-items:center;
  justify-content:center;
}



/* MOBILE */
@media(max-width:768px){
 

  .home-contact-form{
    padding:40px 20px;
  }

 
}


/* ================= FORCE FULL-WIDTH CONTACT FORM (HOME ONLY) ================= */

/* Remove Contact.jsx width restriction */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;   /* 🔥 KEY FIX */
  width:100%;
  margin:0;
  display:block;               /* remove grid */
}

/* Make form fill entire left column */
.home-contact-form .contact-right{
  width:100%;
  padding:0;
  border-radius:0;
  box-shadow:none;
  background:transparent;
}

/* Form fields stretch edge to edge */
.home-contact-form .contact-form{
  width:500px;
}

.home-contact-form input,
.home-contact-form textarea{
  width:100%;
}

/* Hide internal map from Contact.jsx */
.home-contact-form .map-card{
  display:none;
}
  /* ================= HERO LAYOUT ================= */

.hero-wrap{
  width:100%;
  max-width:1400px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;   /* LEFT CONTENT | RIGHT IMAGE */
  align-items:center;
  gap:60px;
  // padding:80px 60px;
   padding:80px min(5vw, 24px);
}

.hero-content{
  order:1;
}

.hero-image-wrap{
  order:2;
  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-image{
  width:420px;
  max-width:100%;
  height:auto;
}

/* ================= MOBILE VIEW ================= */
@media (max-width:768px){

  .hero-wrap{
    grid-template-columns:1fr;   /* STACK */
    padding:40px 20px;
    text-align:center;
  }

  .hero-image-wrap{
    order:1;   /* IMAGE FIRST */
  }

  .hero-content{
    order:2;   /* CONTENT BELOW */
  }

  .hero-image{
    width:220px;
    margin-bottom:20px;
  }

  .hero-content h1{
    font-size:28px !important;
  }

  .hero-content p{
    font-size:15px;
    line-height:1.6;
  }
}
.mark{
  width:44px;
  height:44px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
//  background:var(--bg-card);
  overflow:hidden;
}

.logo-img{
  width:100%;
  height:100%;
  object-fit:contain;
}
@media(max-width:768px){
  .mark{
    width:38px;
    height:38px;
  }
}

/* ================= GLOBAL RED SHADOWS ================= */

/* Cards, forms, containers */
.home-contact-form,
.contact-right,
.contact-left,
.c-card,
.service-pill,
.final-card,
.svc-card,
.svc-plan-card,
.svc-step,
.svc-hero-card {
  box-shadow: 0 20px 60px rgba(185, 5, 4, 0.25) !important;
}

/* Hover stronger red shadow */
.home-contact-form:hover,
.c-card:hover,
.final-card:hover,
.svc-card:hover,
.svc-plan-card:hover,
.svc-step:hover {
  box-shadow: 0 30px 90px rgba(185, 5, 4, 0.45) !important;
}



/* ================= CLEAN HOME MAP (FINAL FIX) ================= */

.home-contact-section{
  display:grid;
  grid-template-columns:1.2fr 0.8fr;
  gap:48px;
  padding:80px 6vw;
   background: radial-gradient(circle at top, #0b1220, #020617 70%);

}

/* LEFT FORM */
.home-contact-form{
  // background:var(--bg-card);
  padding:60px;
  border-radius:24px;
}

/* RIGHT MAP */
.home-contact-map{
// background:var(--bg-card);
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(185,5,4,0.35);
}

.home-contact-map iframe{
  width:100%;
  height:100%;
  min-height:420px;
  border:0;
  display:block;
}

/* MOBILE */
@media(max-width:768px){
  .home-contact-section{
    grid-template-columns:1fr;
    padding:60px 20px;
  }

  .home-contact-map iframe{
    min-height:260px;
  }
}

/* Buttons */
button,
.submit-btn,
.pre-contact-btn {
  box-shadow: 0 16px 40px rgba(185, 5, 4, 0.45);
}

button:hover,
.submit-btn:hover,
.pre-contact-btn:hover {
  box-shadow: 0 26px 70px rgba(185, 5, 4, 0.6);
}

/* Inputs focus glow */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(185, 5, 4, 0.35),
              0 12px 30px rgba(185, 5, 4, 0.25);
  border-color: #B90504;
}

/* Header logo mark */
/* Header logo mark – NO SHADOW */
.mark{
  box-shadow:none !important;
}



/* ================= USER-FRIENDLY TYPOGRAPHY (HOME PAGE) ================= */

/* Base text */
.sf-wrap{
  font-size:16px;
  line-height:1.75;
  letter-spacing:0.2px;
}

/* Hero title */
.hero-content h1{
  font-weight:800;
}

/* Hero paragraph */
.hero-content p{
  font-weight:500;
}

/* Section headings */
.content-left h2,
.parallax-title,
.final-contact-info h2{
  font-weight:800;
}

/* Paragraphs */
.content-left p,
.stagger-para,
.parallax-title,
.final-inline{
  font-weight:500;
}

/* Contact form text */
.home-contact-form input,
.home-contact-form textarea{
  font-weight:500;
}

.home-contact-form button{
  font-weight:800;
}

/* Cards & labels */
.c-card strong,
.final-card strong{
  font-weight:700;
}

/* ================= MOBILE ================= */
@media(max-width:768px){

  .hero-content h1{
    font-weight:800;
  }

  .hero-content p,
  .content-left p{
    font-weight:500;
  }

}

/* ================= CTA BUTTONS ================= */
button,
.submit-btn,
.pre-contact-btn{
  background:var(--red);
  color:#ffffff;
  border:none;
  border-radius:14px;
  padding:16px 28px;
  font-family:'Poppins', sans-serif;
  font-weight:700;
  cursor:pointer;
  transition:all 0.3s ease;
  box-shadow:0 18px 45px rgba(185,5,4,0.45);
}

button:hover,
.submit-btn:hover,
.pre-contact-btn:hover{
  transform:translateY(-4px) scale(1.03);
  background:#a00403;
  box-shadow:0 28px 75px rgba(185,5,4,0.7);
}

/* ================= CARD HOVER ================= */
.c-card,
.final-card,
.contact-left,
.home-contact-form{
  // background:var(--bg-card);
  border-radius:22px;
  transition:all 0.3s ease;
}

.c-card:hover,
.final-card:hover{
  transform:translateY(-6px);
  box-shadow:0 30px 90px rgba(185,5,4,0.45);
}
/* =====================================================
   🔥 FINAL VISIBILITY FIX – DO NOT REMOVE
   ===================================================== */

/* Force all text visible on dark background */


/* Paragraph & secondary text */
.sf-wrap p,
.sf-wrap span,
.sf-wrap li,
.sf-wrap small{
  color:#cfcfcf;
}

/* Headings stay RED */
.sf-wrap h1,
.sf-wrap h2,
.sf-wrap h3,
.sf-wrap h4{
  color:#B90504;
}

/* Contact + card text */
.contact-left,
.contact-left *,
.c-card,
.c-card *,
.final-card,
.final-card *{
  color:#ffffff;
}

/* Muted labels */
.final-card span,
.c-card strong,
.contact-lead{
  color:#bdbdbd !important;
}

/* Service pills */
.service-pill{
  color:#ffffff !important;
  background:#1a1a1a !important;
}

/* Map link */
.final-card a{
  color:#B90504 !important;
}

/* Parallax text */
.parallax-title{
  color:#ffffff !important;
}
.parallax-sub{
  color:#B90504 !important;
}

/* Form text */
input,
textarea,
label{
  color:#ffffff !important;
}

/* Placeholders */
input::placeholder,
textarea::placeholder{
  color:#9a9a9a !important;
}

/* =====================================================
   🔥 MASTER DARK MODE VISIBILITY FIX (FINAL)
   ===================================================== */



/* FORCE ALL TEXT VISIBLE */


/* Paragraph & muted text */
  .sf-wrap p,
  .sf-wrap span,
  .sf-wrap li,
  .sf-wrap small{
    color:#cfcfcf !important;
  }

/* HEADLINES – RED */
.sf-wrap h1,
.sf-wrap h2,
.sf-wrap h3,
.sf-wrap h4{
  color:#B90504 !important;
  font-family:'Poppins', sans-serif;
}



/* Service pills */
.service-pill{
  background:#1b1b1b !important;
  color:#ffffff !important;
}

/* Links */
a{
  color:#B90504 !important;
}

/* Forms */
input,
textarea,
select{
  background:#0f0f0f !important;
  color:#ffffff !important;
  border:1px solid rgba(255,255,255,0.2) !important;
}

input::placeholder,
textarea::placeholder{
  color:#9a9a9a !important;
}

/* Parallax */
.parallax-title{
  color:#ffffff !important;
}
.parallax-sub{
  color:#B90504 !important;
}

.process-step{
  text-align:center;
  position:relative;
  z-index:2;
}

.process-step.bottom{
  transform:translateY(40px);
}

.process-step h3{
  margin:18px 0 10px;
  font-size:22px;
  font-weight:800;
  color:#ffffff;
}

.process-step p{
  font-size:15px;
  line-height:1.7;
  color:#cfcfcf;
}

/* Number circles */
.step-circle{
  width:64px;
  height:64px;
  border-radius:50%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  font-weight:900;
  color:#fff;
  box-shadow:0 16px 40px rgba(0,0,0,0.4);
}

/* Gradients */
.c1{background:linear-gradient(135deg,#9be15d,#00e3ae);}
.c2{background:linear-gradient(135deg,#ff9a9e,#ff5e62);}
.c3{background:linear-gradient(135deg,#36d1dc,#5b86e5);}
.c4{background:linear-gradient(135deg,#ff758c,#ff7eb3);}
.c5{background:linear-gradient(135deg,#7f7fd5,#86a8e7);}
.c6{background:linear-gradient(135deg,#84fab0,#8fd3f4);}

/* Dotted curve */
.process-line{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  pointer-events:none;
  z-index:1;
}

/* Mobile */
@media(max-width:900px){
  .process-grid{
    grid-template-columns:1fr;
    row-gap:80px;
  }
  .process-step.bottom{
    transform:none;
  }
  .process-line{
    display:none;
  }
}
/* ================= SINGLE RED SLIDE ================= */


.single-red-container{
  max-width:1300px;
  margin:auto;
}

.single-red-title{
  font-size:42px;
  font-weight:900;
  color:#ffffff;               /* WHITE */
  text-align:center;
  line-height:1.15;
}
/* FORCE OVERRIDE RED */
.single-red-title{
  font-size:42px;
  font-weight:900;
  text-align:center;
  line-height:1.15;
}

/* FIRST LINE — PURE WHITE (OVERRIDES RED) */
.single-red-title .title-white{
  color:#ffffff !important;
}

/* SECOND LINE — PURPLE → PINK GRADIENT */
.single-red-title .title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* PURPLE–PINK GRADIENT TEXT */
.gradient-text{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}


.single-red-title::after{
  content:"";
  width:120px;
  height:4px;
  background:#ffffff;
  display:block;
  margin:18px auto 0;
  opacity:0.7;
}

.single-red-content{
  display:grid;
  grid-template-columns:1fr 1.4fr;
  gap:60px;
  align-items:flex-start;
}

/* IMAGE */
.single-red-image img{
  width:100%;
  border-radius:18px;
  box-shadow:0 30px 90px rgba(0,0,0,0.45);
}

/* TEXT */
.single-red-text p{
  font-size:17px;
  line-height:1.9;
  color:#f1f1f1;
  margin-bottom:22px;
}

/* MOBILE */
@media(max-width:900px){
  .single-red-content{
    grid-template-columns:1fr;
  }

  .single-red-title{
    font-size:28px;
  }
}
  /* ================= SINGLE RED SLIDE (EXACT MATCH) ================= */

.single-red-slide{
  padding:120px 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  overflow:hidden;
}

/* ===== TOP RED OVERLAY (SUBTLE) ===== */
.single-red-slide::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:220px;
  background: linear-gradient(
    to bottom,
    rgba(185,5,4,0.35),
    rgba(185,5,4,0.12),
    rgba(185,5,4,0.0)
  );
  pointer-events:none;
  z-index:0;
}

/* Ensure content stays above overlay */
.single-red-container{
  position:relative;
  z-index:1;
}

/* Container */
.single-red-container{
  max-width:1300px;
  margin:auto;
}

/* Title */
.single-red-title{
  text-align:center;
  font-size:42px;
  font-weight:900;
  margin-bottom:60px;
  color:#ffffff;
  opacity:0;
  transform:translateY(30px);
  transition:all 0.9s cubic-bezier(0.16,1,0.3,1);
}

.single-red-title.show{
  opacity:1;
  transform:translateY(0);
}

.single-red-title::after{
  content:"";
  width:120px;
  height:4px;
  background:#ffffff;
  display:block;
  margin:18px auto 0;
  opacity:0.7;
}

/* Content */
.single-red-content{
  display:grid;
  grid-template-columns:1fr 1.4fr;
  gap:60px;
  align-items:flex-start;
}

/* IMAGE */
.single-red-image{
  opacity:0;
  transform:translateY(40px);
  transition:all 1s cubic-bezier(0.16,1,0.3,1);
}

.single-red-image.show{
  opacity:1;
  transform:translateY(0);
}

.single-red-image img{
  width:100%;
  border-radius:18px;
  box-shadow:0 30px 90px rgba(0,0,0,0.45);
}

/* ===== IMAGE RED GLOW ===== */
.single-red-image{
  position:relative;
}

.single-red-image::before{
  content:"";
  position:absolute;
  inset:-40px;
  background: radial-gradient(
    circle,
    rgba(185,5,4,0.45),
    rgba(185,5,4,0.15),
    transparent 70%
  );
  filter: blur(40px);
  z-index:-1;
}

/* TEXT */
.single-red-text{
  opacity:0;
  transform:translateY(40px);
  transition:all 1s cubic-bezier(0.16,1,0.3,1);
}

.single-red-text.show{
  opacity:1;
  transform:translateY(0);
}


.single-red-text p{
  opacity:0;
  transform:translateY(26px);
  transition:
    opacity 0.8s cubic-bezier(0.16,1,0.3,1),
    transform 0.8s cubic-bezier(0.16,1,0.3,1);
  margin-bottom:22px;
  font-size:17px;
  line-height:1.9;
  color:#f1f1f1;
}

/* When parent becomes visible */
.single-red-text.show p{
  opacity:1;
  transform:translateY(0);
}

/* Delays for each paragraph */
.single-red-text.show p:nth-child(1){ transition-delay:0.15s; }
.single-red-text.show p:nth-child(2){ transition-delay:0.3s; }
.single-red-text.show p:nth-child(3){ transition-delay:0.45s; }

/* MOBILE */
@media(max-width:900px){
  .single-red-content{
    grid-template-columns:1fr;
  }

  .single-red-title{
    font-size:28px;
  }
}
/* ===== LINE BY LINE TEXT ANIMATION ===== */

.single-red-text .line{
  display:block;
  opacity:0;
  transform:translateY(20px);
  margin-bottom:22px;
  font-size:17px;
  line-height:1.9;
  color:#f1f1f1;
  transition:
    opacity 0.7s cubic-bezier(0.16,1,0.3,1),
    transform 0.7s cubic-bezier(0.16,1,0.3,1);
}

/* ===== LINE SCROLL REVEAL ===== */

.single-red-text .line{
  opacity:0;
  transform:translateY(18px);
}

.single-red-text.show .line{
  opacity:1;
  transform:translateY(0);
}

/* Show lines */
.single-red-text.show .line{
  opacity:1;
  transform:translateY(0);
}

/* Stagger delays */
.single-red-text.show .line:nth-child(1){ transition-delay:0.15s; }
.single-red-text.show .line:nth-child(2){ transition-delay:0.3s; }
.single-red-text.show .line:nth-child(3){ transition-delay:0.45s; }
.single-red-text.show .line:nth-child(4){ transition-delay:0.6s; }


/* ================= MOBILE FIX – SINGLE RED SLIDE ================= */

@media (max-width: 768px) {

  .single-red-slide{
    padding:60px 20px;
  }

  .single-red-title{
    font-size:24px;
    line-height:1.3;
    margin-bottom:36px;
    text-align:center;
  }

  .single-red-content{
    grid-template-columns:1fr; /* stack image & text */
    gap:28px;
  }

  .single-red-image img{
    max-width:100%;
    border-radius:14px;
  }

  .single-red-text{
    text-align:left;
  }

  .single-red-text .line{
    font-size:15px;
    line-height:1.7;
    margin-bottom:16px;
  }
}
  /* ================= USER-FRIENDLY TEXT HOVER ================= */

/* Paragraphs & spans */
.sf-wrap p,
.sf-wrap span,
.sf-wrap li{
  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
}

/* Soft hover effect */
.sf-wrap p:hover,
.sf-wrap span:hover,
.sf-wrap li:hover{
  color:#ffffff;
  text-shadow:0 0 6px rgba(255,255,255,0.15);
}

/* Headings – premium hover */
.sf-wrap h1,
.sf-wrap h2,
.sf-wrap h3,
.sf-wrap h4{
  transition:
    color 0.25s ease,
    letter-spacing 0.25s ease;
}

.sf-wrap h1:hover,
.sf-wrap h2:hover,
.sf-wrap h3:hover{
  color:#ff3b3b;
  letter-spacing:0.5px;
}
/* ================= FASTER ANIMATION ON MOBILE ================= */

@media (max-width: 768px){

  /* Faster section reveal */
  .single-red-title,
  .single-red-image,
  .single-red-text{
    transition-duration:0.45s !important;
  }

  /* Faster line animation */
  .single-red-text .line{
    transition-duration:0.4s !important;
  }

  /* Reduce stagger delay */
  .single-red-text.show .line:nth-child(1){
    transition-delay:0.05s !important;
  }
  .single-red-text.show .line:nth-child(2){
    transition-delay:0.1s !important;
  }
  .single-red-text.show .line:nth-child(3){
    transition-delay:0.15s !important;
  }
}


/* ================= ANIMATED GRADIENT SLIDE ================= */

/* ================= VIDEO-LIKE GRADIENT PANEL ================= */
/* ================= FINAL TITLE COLOR OVERRIDE ================= */

/* Neutralize h2 color completely */
.single-red-title{
  color:transparent !important;
}

/* FIRST LINE — WHITE */
.single-red-title .title-white{
  color:#ffffff !important;
}

/* SECOND LINE — GRADIENT */
.single-red-title .title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ================= PROCESS FLOW TITLE COLOR FIX ================= */

/* Force process step titles to white */
.process-step h3{
  color:#ffffff !important;
}

/* Optional: brighter on hover */
.process-step:hover h3{
  color:#ffffff !important;
}

/* ================= SECTION HEADING: WHITE + GRADIENT ================= */

/* Neutralize forced red on h2 */
.single-red-title{
  color:transparent !important;
}

/* First line — WHITE */
.single-red-title .title-white{
  color:#ffffff !important;
}

/* Second line — PURPLE → PINK GRADIENT */
.single-red-title .title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
/* Neutralize forced red */
.single-red-title{
  color:transparent !important;
}

/* White text */
.single-red-title .title-white{
  color:#ffffff !important;
}

/* Gradient text */
.single-red-title .title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
/* ================= FAQ CTA GRADIENT BUTTON ================= */

/* Gradient button */
.home-faq-cta button{
  background:linear-gradient(90deg,#8b5cf6,#ec4899) !important;
  color:#ffffff !important;
  border:none;
  font-weight:800;
  letter-spacing:0.05em;
  box-shadow:0 20px 60px rgba(139,92,246,0.45);
}

/* Hover effect */
.home-faq-cta button:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:0 30px 90px rgba(236,72,153,0.55);
  background:linear-gradient(90deg,#7c3aed,#db2777) !important;
}

/* Focus / active */
.home-faq-cta button:active{
  transform:scale(0.98);
}
/* ================= DISABLE HOVER FOR THIS SECTION TITLE ================= */

/* Stop all hover effects on this title */
.single-red-title,
.single-red-title *{
  pointer-events:none;
}

/* Explicitly cancel hover animations */
.single-red-title:hover,
.single-red-title:hover *{
  background:none !important;
  -webkit-text-fill-color:inherit !important;
  color:inherit !important;
  transform:none !important;
  letter-spacing:normal !important;
  text-shadow:none !important;
}


/* ================= FAQ FINAL COLOR STYLING ================= */

/* ----- FAQ TITLE ----- */
.home-faq-title{
  color:transparent !important;
  text-align:center;
}

/* White part */
.home-faq-title .faq-title-white{
  color:#ffffff !important;
}

/* Gradient part */
.home-faq-title .faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Disable hover on FAQ title */
.home-faq-title,
.home-faq-title *{
  pointer-events:none;
}

/* ----- FAQ QUESTIONS ----- */
.home-faq-question{
  color:#ffffff !important;
}

/* ----- FAQ ANSWERS ----- */
.home-faq-answer p{
  color:#ffffff !important;
}

/* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
.home-faq-toggle{
  border:none !important;
  background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
  color:#ffffff !important;
  box-shadow:0 0 20px rgba(139,92,246,0.6);
}

/* Minus state */
.home-faq-item.open .home-faq-toggle{
  background:linear-gradient(135deg,#7c3aed,#db2777) !important;
  color:#ffffff !important;
}

/* Remove red hover influence */
.home-faq-toggle:hover{
  background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
}


/* ================= FAQ CTA WHITE BOX FIX ================= */

/* White container */
.home-faq-cta{
  background:#ffffff !important;
  box-shadow:0 30px 90px rgba(0,0,0,0.25);
}

/* Heading inside CTA */
.home-faq-cta h3{
  color:#020617 !important;   /* dark text */
}

/* Subtitle text */
.home-faq-cta p{
  color:#475569 !important;   /* soft dark grey */
}
/* ================= CTA SECTION FIX ================= */

// 
/* ===== CTA HEADING GRADIENT (REMOVE RED) ===== */

/* ===== STEP 2: REMOVE RED HOVER FROM CTA ===== */

.cta-btn{
  background:#ffffff !important;
  color:#000000 !important;
}

.cta-btn:hover{
  background:#ffffff !important;
  color:#000000 !important;
}

/* stop red hover coming from global styles */
.cta-wrap,
.cta-wrap *{
  --red: transparent;
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
  /* ===== FADE-UP SCROLL REVEAL (SINGLE RED SLIDE) ===== */
  useEffect(() => {
    const elements = document.querySelectorAll(
  ".single-red-title, .single-red-image, .single-red-text, .single-red-text .line"
);

const isMobile = window.innerWidth < 768;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: isMobile ? 0.12 : 0.25 }
);


    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


useEffect(() => {
  const sections = document.querySelectorAll(".reveal-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach(sec => observer.observe(sec));

  return () => observer.disconnect();
}, []);

  return (

    <>
    <HomeHerohead />
    
    <div className="sf-wrap">
     

      <div className="fullpage-wrapper">
       

     <ProjectRunLeftImageSection />
        <ProcessFlowSection />
        <SeoMarketingSection />
 <ServicesHighlightSection />

        <SeoGrowthSectionleftimage />
        <HomeFAQSection /> 
        
        {/* <CTASection /> */}
      </div>
    </div>
    </>
  );
}


