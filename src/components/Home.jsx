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
              alt="Project workflow"
            />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="projectrun-text">
          <p>
            SHA Infotechnology is a results-driven digital marketing and software
            development company helping businesses grow through powerful,
            technology-focused solutions.
          </p>

          <p>
            Our expert team specializes in SEO, social media marketing, Google Ads,
            website design and development, branding, and complete digital
            marketing services.
          </p>

          <p>
            We follow a data-driven approach to align digital strategies with your
            business goals—helping you grow faster, smarter, and more sustainably.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* SECTION */
        .projectrun-section {
          padding: clamp(48px, 6vw, 80px) clamp(5vw, 8vw, 9vw);
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

        /* HEADER */
        .projectrun-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto clamp(30px, 5vw, 50px);
        }

        .projectrun-title {
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
        }

        .projectrun-title-white {
          display: block;
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
          pointer-events: none;
        }

        .projectrun-title-gradient {
          display: block;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projectrun-divider {
          width: clamp(60px, 8vw, 90px);
          height: 3px;
          background: #8b5cf6;
          margin: clamp(14px, 3vw, 22px) auto 0;
          border-radius: 2px;
        }

        /* GRID */
        .projectrun-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        /* TEXT */
        .projectrun-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: clamp(10px, 2vw, 16px);
          color: #cbd5f5;
        }

        /* IMAGE */
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
          inset: clamp(-40px, -6vw, -65px);
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 70%
          );
          filter: blur(clamp(45px, 6vw, 65px));
          z-index: 0;
        }

        .projectrun-image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: clamp(340px, 40vw, 520px);
          border-radius: 18px;
          background: none;
          box-shadow: none;
        }

        /* MOBILE STACK */
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
          </p>

          <p>
            From keyword research and on-page optimization to Google Ads and local
            SEO, our experts design campaigns that maximize ROI and increase brand
            visibility.
          </p>

          <p>
            Using data-driven insights and continuous optimization, we ensure
            sustainable online growth and long-term success.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="seo-image">
          <div className="image-glow">
            <img src="/images/seo.png" alt="SEO Marketing" />
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* SECTION */
        .seo-section {
          padding: clamp(48px, 6vw, 80px) clamp(5vw, 8vw, 9vw);
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

        /* HEADER */
        .seo-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto clamp(28px, 4vw, 50px);
        }

        .seo-title {
          text-align: center;
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: clamp(14px, 2vw, 20px);
        }

        .seo-title-white {
          display: block;
          color: #ffffff !important;
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
          width: clamp(60px, 8vw, 90px);
          height: 3px;
          background: #8b5cf6;
          margin: clamp(14px, 2.5vw, 22px) auto 0;
          border-radius: 2px;
        }

        /* GRID */
        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        /* TEXT */
        .seo-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: clamp(10px, 2vw, 16px);
          color: #cbd5f5;
        }

        /* IMAGE */
        .seo-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-glow {
          position: relative;
        }

        .image-glow::before {
          content: "";
          position: absolute;
          inset: clamp(-40px, -6vw, -65px);
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 70%
          );
          filter: blur(clamp(45px, 6vw, 65px));
          z-index: 0;
        }

        .image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: clamp(320px, 42vw, 520px);
          border-radius: 10px;
          background: none;
          box-shadow: none;
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
            margin-top: clamp(20px, 4vw, 32px);
          }
        }
      `}</style>
    </section>
  );
}



function SeoGrowthSectionleftimage() {
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
        {/* IMAGE – LEFT */}
        <div className="seo-image">
          <div className="image-glow">
            <img src="/images/websitehome.png" alt="Website Development" />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="seo-text">
          <p>
            We design and develop high-performance websites and software
            solutions that combine stunning visuals with powerful functionality.
          </p>

          <p>
            Whether you need a business website, e-commerce platform, or custom
            software application, our team ensures seamless user experiences.
          </p>

          <p>
            By integrating modern technologies and best practices, SHA
            Infotechnology helps businesses build a strong digital foundation
            for long-term success.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* SECTION */
        .seo-section {
          padding: clamp(48px, 6vw, 80px) clamp(5vw, 8vw, 9vw);
          background: radial-gradient(circle at top, #0b1220, #020617 70%);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

        /* HEADER */
        .seo-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto clamp(30px, 4vw, 50px);
        }

        .seo-title {
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
        }

        .seo-title-white {
          display: block;
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
          pointer-events: none;
        }

        .seo-title-gradient {
          display: block;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .seo-divider {
          width: clamp(60px, 8vw, 90px);
          height: 3px;
          background: #8b5cf6;
          margin: clamp(14px, 2.5vw, 22px) auto 0;
          border-radius: 2px;
        }

        /* GRID */
        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        /* TEXT */
        .seo-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: clamp(10px, 2vw, 16px);
          color: #cbd5f5;
        }

        /* IMAGE */
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
          inset: clamp(-40px, -6vw, -65px);
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 70%
          );
          filter: blur(clamp(45px, 6vw, 65px));
          z-index: 0;
        }

        .image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: clamp(320px, 42vw, 520px);
          border-radius: 18px;
          background: none;
          box-shadow: none;
        }

        /* MOBILE */
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
/* ================= PROCESS FLOW ================= */

.process-wrap{
  padding: clamp(60px, 8vw, 100px) 40px;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  position: relative;
  overflow: hidden;
}

.process-container{
  max-width: 1200px;
  margin: auto;
  position: relative;
}

/* GRID */
.process-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: clamp(60px, 10vw, 120px);
  column-gap: clamp(30px, 6vw, 80px);
  position: relative;
  z-index: 2;
}

/* STEP */
.process-step{
  text-align: center;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.process-step.show{
  opacity: 1;
  transform: translateY(0);
}

.process-step h3{
  font-size: 22px;
  font-weight: 800;
  margin: 16px 0 8px;
  color: #ffffff;
}

.process-step p{
  font-size: 15px;
  line-height: 1.6;
  color: #cfcfcf;
}

/* ================= GLOWING DOTS ================= */

.step-circle{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  color: #ffffff;
  position: relative;
}

/* Glow ring */
.step-circle::after{
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  filter: blur(16px);
  opacity: 0.7;
  z-index: -1;
}

/* COLORS */
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
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.process-line path{
  fill: none;
  stroke: #c7d2fe;
  stroke-width: 3;
  stroke-dasharray: 6 10;
  animation: moveDots 6s linear infinite;
  opacity: 0.7;
}

@keyframes moveDots{
  from{ stroke-dashoffset: 0; }
  to{ stroke-dashoffset: -500; }
}

/* ================= MOBILE ================= */

@media(max-width: 900px){
  .process-wrap{
    padding: clamp(50px, 10vw, 70px) 20px;
  }

  .process-grid{
    grid-template-columns: 1fr;
    row-gap: clamp(40px, 8vw, 70px);
  }

  .process-line{
    display: none;
  }
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
            }, i * 120);
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
            <p>Building a tailored digital roadmap</p>
          </div>

          <div className="process-step">
            <div className="step-circle c3">3</div>
            <h3>Execution</h3>
            <p>Launching campaigns and solutions</p>
          </div>

          <div className="process-step">
            <div className="step-circle c4">4</div>
            <h3>Scaling</h3>
            <p>Growing sustainably over time</p>
          </div>

          <div className="process-step">
            <div className="step-circle c5">5</div>
            <h3>Optimization</h3>
            <p>Improving for better outcomes</p>
          </div>

          <div className="process-step">
            <div className="step-circle c6">6</div>
            <h3>Insights</h3>
            <p>Measuring performance and results</p>
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
/* ================= HOME FAQ (SPACING FIXED) ================= */

.home-faq-wrap{
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  padding: clamp(56px, 7vw, 90px) clamp(5vw, 6vw, 7vw);
  color:#ffffff;
  font-family:Inter,system-ui;
}

/* RESET */
*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; overflow-x:hidden; }

/* CONTAINER */
.home-faq-container{
  max-width:1100px;
  margin:auto;
}

/* TITLE */
.home-faq-title{
  text-align:center;
  font-size: clamp(28px, 4vw, 42px);
  font-weight:900;
  margin-bottom: clamp(8px, 2vw, 14px);
}

/* SUBTITLE */
.home-faq-sub{
  text-align:center;
  color:#cfcfcf;
  font-size:16px;
  margin-bottom: clamp(24px, 4vw, 40px);
}

/* CARD */
.home-faq-card{
  border-radius:26px;
  padding: clamp(22px, 4vw, 32px);
  box-shadow:0 24px 70px rgba(185,5,4,0.28);
}

/* ITEM */
.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.1);
  padding: clamp(14px, 2vw, 20px) 8px;
  transition:background .25s ease, transform .25s ease;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.1);
}

.home-faq-item:hover{
  background:#1b1b1b;
  transform:translateY(-2px);
}

/* HEADER */
.home-faq-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  gap:14px;
}

/* QUESTION */
.home-faq-question{
  font-size: clamp(15px, 2vw, 18px);
  font-weight:700;
  color:#ffffff;
}

.home-faq-item.open .home-faq-question{
  color:#8b5cf6;
}

/* TOGGLE */
.home-faq-toggle{
  width:32px;
  height:32px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  font-weight:900;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  color:#ffffff;
  box-shadow:0 0 16px rgba(139,92,246,0.55);
  transition:all .25s ease;
}

.home-faq-item.open .home-faq-toggle{
  transform:rotate(180deg);
}

/* ANSWER */
.home-faq-answer{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transform:translateY(-4px);
  transition:
    max-height .4s ease,
    opacity .25s ease,
    transform .25s ease;
}

.home-faq-item.open .home-faq-answer{
  max-height:220px;
  opacity:1;
  transform:translateY(0);
}

.home-faq-answer p{
  margin-top:10px;
  font-size:15px;
  line-height:1.6;
  color:#e5e7eb;
}

/* CTA */
.home-faq-cta{
  margin-top: clamp(30px, 5vw, 44px);
  padding: clamp(22px, 4vw, 32px);
  border-radius:22px;
  background:#ffffff;
  text-align:center;
  box-shadow:0 20px 60px rgba(0,0,0,0.25);
}

.home-faq-cta h3{
  font-size: clamp(20px, 3vw, 26px);
  font-weight:900;
  margin-bottom:8px;
  color:#020617;
}

.home-faq-cta p{
  font-size:16px;
  color:#475569;
  margin-bottom:18px;
}

.home-faq-cta button{
  padding:12px 32px;
  border-radius:999px;
  border:none;
  background:#020617;
  color:#ffffff;
  font-size:14px;
  font-weight:800;
  cursor:pointer;
  transition:all .3s ease;
}

.home-faq-cta button:hover{
  transform:translateY(-2px);
  box-shadow:0 16px 40px rgba(0,0,0,0.35);
}

/* MOBILE */
@media(max-width:768px){
  .home-faq-wrap{
    padding: clamp(48px, 10vw, 64px) 18px;
  }
}
  `;

  const id = "home-faq-style-updated";
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
/* ================= SERVICES HIGHLIGHT (SPACING FIXED) ================= */

.sh-wrap{
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding: clamp(56px, 7vw, 88px) clamp(5vw, 6vw, 7vw);
  font-family:Inter,system-ui;
}

/* TITLE */
.sh-title{
  text-align:center;
  font-size: clamp(30px, 4vw, 44px);
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom: clamp(32px, 5vw, 48px);
}

/* GRID */
.sh-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap: clamp(20px, 3vw, 32px);
  align-items:stretch;
}

/* CARD */
.sh-card{
  background:#ffffff;
  border-radius:26px;
  padding: clamp(22px, 3vw, 28px);
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

  box-shadow:0 28px 70px rgba(0,0,0,0.5);
  transition:transform .35s ease, box-shadow .35s ease;
}

.sh-card:hover{
  transform:translateY(-8px);
  box-shadow:0 40px 100px rgba(0,0,0,0.65);
}

/* ICON */
.sh-icon{
  width:56px;
  height:56px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  box-shadow:0 0 32px rgba(139,92,246,0.6);
}

/* TITLE */
.sh-card h3{
  font-size:18px;
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
  font-size:15px;
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
  .sh-title{font-size: clamp(26px, 6vw, 32px);}
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

*{ box-sizing:border-box; }

/* HERO */
.home-hero{
  min-height:auto; /* ❌ remove forced full screen */
  padding: clamp(56px, 7vw, 90px) clamp(5vw, 8vw, 9vw);
  background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
  display:grid;
  grid-template-columns:1.1fr 1fr;
  align-items:center;
  gap: clamp(28px, 5vw, 40px);
  font-family:Inter,system-ui,sans-serif;
  overflow:hidden;
}

/* LEFT */
.hero-left{
  pointer-events:none;
}

.hero-left small{
  font-size: clamp(16px, 2vw, 24px);
  letter-spacing:3px;
  color:#ffffff;
  font-weight:900;
  display:block;
  margin-bottom: clamp(14px, 2vw, 22px);
}

.hero-left h1{
  font-size: clamp(36px, 6vw, 74px);
  line-height:1.1;
  margin:0 0 clamp(14px, 2vw, 18px);
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
  font-size: clamp(14px, 1.5vw, 15px);
  line-height:1.65;
  color:var(--muted);
  margin-bottom: clamp(18px, 3vw, 28px);
}

/* RIGHT */
.hero-right{
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events:none;
}

.hero-image{
  width:100%;
  max-width: clamp(420px, 45vw, 820px);
  height:auto;
  filter:drop-shadow(0 50px 120px rgba(139,92,246,0.45));
}

/* MOBILE */
@media(max-width:900px){
  .home-hero{
    grid-template-columns:1fr;
    padding: clamp(48px, 9vw, 70px) 6vw;
    text-align:center;
  }

  .hero-left p{
    margin-left:auto;
    margin-right:auto;
  }

  .hero-image{
    max-width: clamp(320px, 70vw, 520px);
    margin-top: clamp(20px, 5vw, 32px); /* ↓ reduced */
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
  const css= `
  
  /* ================= GLOBAL SCROLL ANIMATIONS ================= */

[data-animate]{
  opacity:0;
  transform:translateY(36px);
  transition:
    opacity .8s cubic-bezier(0.16,1,0.3,1),
    transform .8s cubic-bezier(0.16,1,0.3,1);
}

[data-animate="left"]{
  transform:translateX(-40px);
}

[data-animate="right"]{
  transform:translateX(40px);
}

[data-animate="scale"]{
  transform:scale(0.92);
}

.animate-show{
  opacity:1;
  transform:none;
}

/* stagger */
[data-delay="1"]{ transition-delay:.1s; }
[data-delay="2"]{ transition-delay:.2s; }
[data-delay="3"]{ transition-delay:.3s; }

/* reduce motion */
@media (prefers-reduced-motion: reduce){
  [data-animate]{
    opacity:1;
    transform:none;
    transition:none;
  }
}

  `
  ;

  
useEffect(() => {
  const elements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
  return () => observer.disconnect();
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


