import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

 function IndustriesWeServe() {
  useEffect(() => {
    const css = `
/* ===== INDUSTRIES SECTION ===== */
.sha-industries{
  padding-top:30px;
  font-family:Inter,system-ui;
  color:#ffffff;
  overflow:hidden;
}

/* HEADING */
.sha-industries h2{
  text-align:center;
  font-size:clamp(34px,5vw,48px);
  font-weight:900;
}

.sha-industries h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */
.sha-industries p{
  max-width:900px;
  margin:0 auto 70px;
  text-align:center;
  font-size:16px;
  line-height:1.8;
  color:#cbd5f5;
}

/* SLIDER */
.industry-slider{
  overflow:hidden;
}

/* TRACK */
.industry-track{
  display:flex;
  gap:70px;
  width:max-content;
  animation:scroll 26s linear infinite;
}

.industry-slider:hover .industry-track{
  animation-play-state:paused;
}

/* ITEM */
.industry-item{
  min-width:220px;
  padding-top:50px;
  text-align:center;
}

/* ICON */
.industry-icon{
  width:120px;
  height:120px;
  margin:0 auto 18px;
  border-radius:50%;
  border:2px solid rgba(139,92,246,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:44px;
  color:#8b5cf6;
  background:rgba(255,255,255,0.02);
  position:relative;
  transition:all .35s ease;
}

.industry-icon::after{
  content:"";
  position:absolute;
  inset:-14px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  opacity:0;
  filter:blur(22px);
  transition:opacity .35s ease;
  z-index:-1;
}

.industry-item:hover .industry-icon{
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  color:#ffffff;
  transform:translateY(-6px);
  box-shadow:0 20px 50px rgba(139,92,246,.45);
}

.industry-item:hover .industry-icon::after{
  opacity:.6;
}

/* TITLE */
.industry-item h4{
  font-size:18px;
  font-weight:800;
  color:#ffffff;
}

/* SCROLL */
@keyframes scroll{
  from{transform:translateX(0)}
  to{transform:translateX(-50%)}
}

/* MOBILE */
@media(max-width:768px){
  .sha-industries{
    padding:90px 20px;
  }
  .industry-item{
    min-width:180px;
  }
  .industry-icon{
    width:100px;
    height:100px;
    font-size:36px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const industries = [
    { name: "IT & Software Companies", icon: "💻" },
    { name: "E-commerce & Retail", icon: "🛒" },
    { name: "Healthcare & Clinics", icon: "🏥" },
    { name: "Education & EdTech", icon: "🎓" },
    { name: "Real Estate & Construction", icon: "🏗️" },
    { name: "Startups & Local Businesses", icon: "🚀" }
  ];

  return (
    <section className="sha-industries">
      <h2>
        Industries <span>We Serve</span>
      </h2>

      <p>
        SHA Infotechnology partners with businesses across diverse industries,
        delivering tailored digital solutions for IT companies, e-commerce brands,
        healthcare providers, educational institutions, real estate firms, and
        growing startups to drive consistent growth and measurable results.
      </p>

      <div className="industry-slider">
        <div className="industry-track">
          {[...industries, ...industries].map((item, i) => (
            <div className="industry-item" key={i}>
              <div className="industry-icon">{item.icon}</div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsHighlight() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 100, label: "Happy Clients" },
    { value: 2, label: "Years of Experience" },
    { value: 5, label: "Expert Professionals" },
    { value: 180, label: "Projects Delivered" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  /* ================= COUNT-UP LOGIC ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 40);

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });
  }, [start]);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
/* ===== STATS SECTION ===== */
.sha-stats{
  background:#fff;
  padding:20px 1vw;
  font-family:Inter,system-ui;
}

.sha-stats-inner{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
  text-align:center;
}

/* NUMBER */
.stat-value{
  font-size:48px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:10px;
}

/* LABEL */
.stat-label{
  font-size:14px;
  font-weight:700;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:#0f172a;
}

/* RESPONSIVE */
@media(max-width:900px){
  .sha-stats-inner{
    grid-template-columns:1fr 1fr;
    gap:50px;
  }
}

@media(max-width:480px){
  .sha-stats-inner{
    grid-template-columns:1fr;
  }

  .stat-value{
    font-size:42px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="sha-stats" ref={sectionRef}>
      <div className="sha-stats-inner">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="stat-value">{counts[i]}+</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectRunLeftImageSection() {
  return (
    <section className="projectrun-section">
      {/* HEADER */}
      <div className="projectrun-header">
        <h2 className="projectrun-title">
          <span className="projectrun-title-white">
            Your Trusted Digital
          </span>
          <span className="projectrun-title-gradient">
            Marketing Agency for Measurable Growth
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
              alt="Digital marketing workflow"
            />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="projectrun-text">
          <p>
            At Sha Infotechnology, we combine creativity, data, and technology to
            deliver end-to-end digital marketing services tailored for startups,
            SMEs, and growing enterprises.
          </p>

          <p>
            From high-performance website development to ROI-focused content
            marketing strategies, our solutions are designed to strengthen your
            online presence and drive meaningful business outcomes.
          </p>

          <p>
            We help your brand stand out in a competitive digital landscape by
            aligning smart digital strategies with measurable growth objectives.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .projectrun-section {
          padding: clamp(8px, 2vw, 0px) clamp(5vw, 8vw, 9vw);
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

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

        .projectrun-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        .projectrun-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: clamp(10px, 2vw, 16px);
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
          inset: clamp(-40px, -2vw, -20px);
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 50%
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
            Digital Marketing
          </span>
          <span className="seo-title-gradient">
            Services
          </span>
        </h2>
        <div className="seo-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="seo-container">
        {/* LEFT TEXT */}
        <div className="seo-text">
          <p>
            We create customized digital marketing campaigns that align with your
            business goals and deliver measurable outcomes.
          </p>

          <ul className="seo-list">
            <li>Search Engine Optimization (SEO)</li>
            <li>Google Ads & Paid Media (PPC)</li>
            <li>Social Media Marketing (SMM)</li>
            <li>Local SEO & Lead Generation</li>
            <li>Analytics & Performance Tracking</li>
          </ul>

          <p>
            Our strategies are designed to increase visibility, drive quality
            traffic, and convert visitors into loyal customers.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="seo-image">
          <div className="image-glow">
            <img src="/images/seo.png" alt="Digital Marketing Services" />
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .seo-section {
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

        .seo-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto clamp(28px, 4vw, 50px);
        }

        .seo-title {
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
        }

        .seo-title-white {
          display: block;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
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

        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        .seo-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: 16px;
          color: #cbd5f5;
        }

        /* LIST */
        .seo-list {
          list-style: none;
          padding-left: 0;
          margin: 18px 0 22px;
        }

        .seo-list li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #e5e7eb;
        }

        .seo-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          color: #8b5cf6;
          font-weight: 700;
        }

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
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 50%
          );
          filter: blur(clamp(5px, 2vw, 65px));
          z-index: 0;
        }

        .image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          border-radius: 10px;
        }

        @media (max-width: 900px) {
          .seo-container {
            grid-template-columns: 1fr;
          }

          .seo-text {
            text-align: center;
          }

          .seo-list {
            text-align: left;
            max-width: 360px;
            margin: 18px auto 22px;
          }

          .seo-image {
            margin-top: 28px;
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
            Website Development
          </span>
          <span className="seo-title-gradient">
            That Converts
          </span>
        </h2>
        <div className="seo-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="seo-container">
        {/* IMAGE – LEFT */}
        <div className="seo-image">
          <div className="image-glow">
            <img src="/images/websitehome.png" alt="Website Development Services" />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="seo-text">
          <p>
            Your website is your digital storefront. Our website development
            services are designed to create strong first impressions while
            driving real business results.
          </p>

          <ul className="seo-list">
            <li>SEO-friendly website architecture</li>
            <li>Fast-loading, mobile-responsive design</li>
            <li>UX/UI optimized for conversions</li>
            <li>Secure and scalable development</li>
          </ul>

          <p>
            We build websites that not only look great but also convert visitors
            into loyal customers.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .seo-section {
          padding-top: 40px;
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

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

        .seo-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        .seo-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: 16px;
          color: #cbd5f5;
        }

        /* LIST */
        .seo-list {
          list-style: none;
          padding-left: 0;
          margin: 18px 0 22px;
        }

        .seo-list li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #e5e7eb;
        }

        .seo-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          color: #8b5cf6;
          font-weight: 700;
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


function ContentCoreSection() {
  return (
    <section className="contentcore-section">
      {/* HEADER */}
      <div className="contentcore-header">
        <h2 className="contentcore-title">
          <span className="contentcore-title-white">
            Content Marketing Strategy
          </span>
          <span className="contentcore-title-gradient">
            for Brand Authority
          </span>
        </h2>
        <div className="contentcore-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="contentcore-container">
        {/* LEFT TEXT */}
        <div className="contentcore-text">
          <p>
            Content is the backbone of digital success. Our content marketing
            strategy is designed to build trust, authority, and long-term brand
            value.
          </p>

          <ul className="contentcore-list">
            <li>SEO-optimized blog content</li>
            <li>Website and landing page copywriting</li>
            <li>Social media content planning</li>
            <li>Brand storytelling and messaging</li>
          </ul>

          <p>
            We help you attract, engage, and retain your audience with meaningful,
            high-impact content that supports your business goals.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="contentcore-image">
          <div className="contentcore-image-glow">
            <img
              src="/images/conhome.png"
              alt="Content Marketing Strategy"
            />
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .contentcore-section {
          font-family: Inter, system-ui, sans-serif;
          color: #e5e7eb;
          overflow: hidden;
        }

        .contentcore-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto clamp(28px, 4vw, 50px);
        }

        .contentcore-title {
          font-size: clamp(30px, 4vw, 56px);
          font-weight: 800;
          line-height: 1.15;
        }

        .contentcore-title-white {
          display: block;
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        .contentcore-title-gradient {
          display: block;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contentcore-divider {
          width: clamp(60px, 8vw, 90px);
          height: 3px;
          background: #8b5cf6;
          margin: clamp(14px, 2.5vw, 22px) auto 0;
          border-radius: 2px;
        }

        .contentcore-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(26px, 5vw, 48px);
          align-items: center;
        }

        .contentcore-text p {
          font-size: clamp(15px, 1.4vw, 16px);
          line-height: 1.7;
          margin-bottom: 16px;
          color: #cbd5f5;
        }

        /* LIST */
        .contentcore-list {
          list-style: none;
          padding-left: 0;
          margin: 18px 0 22px;
        }

        .contentcore-list li {
          position: relative;
          padding-left: 26px;
          margin-bottom: 12px;
          font-size: 15px;
          color: #e5e7eb;
        }

        .contentcore-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          top: 0;
          color: #8b5cf6;
          font-weight: 700;
        }

        .contentcore-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contentcore-image-glow {
          position: relative;
        }

        .contentcore-image-glow::before {
          content: "";
          position: absolute;
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.55),
            rgba(236, 72, 153, 0.3),
            transparent 50%
          );
          filter: blur(clamp(5px, 2vw, 65px));
          z-index: 0;
        }

        .contentcore-image-glow img {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 420px;
          border-radius: 10px;
        }

        @media (max-width: 900px) {
          .contentcore-container {
            grid-template-columns: 1fr;
          }

          .contentcore-text {
            text-align: center;
          }

          .contentcore-list {
            text-align: left;
            max-width: 360px;
            margin: 18px auto 22px;
          }

          .contentcore-image {
            margin-top: 28px;
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
  // padding: clamp(40px, 8vw, 100px) 50px;
  padding-top:40px;
  // background: radial-gradient(circle at top, #0b1220, #020617 70%);
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
            <h3>Dicovery</h3>

            {/* <p>Understanding your business and audience</p> */}
          </div>

          <div className="process-step">
            <div className="step-circle c2">2</div>
            <h3>Client Onboarding </h3>
            {/* <p>Building a tailored digital roadmap</p> */}
          </div>

          <div className="process-step">
            <div className="step-circle c3">3</div>
            <h3>Strategy Development </h3>
            {/* <p>Launching campaigns and solutions</p> */}
          </div>

          <div className="process-step">
            <div className="step-circle c4">4</div>
            <h3>Core Service Execution </h3>
            {/* <p>Growing sustainably over time</p> */}
          </div>

          <div className="process-step">
            <div className="step-circle c5">5</div>
            <h3>Data Analytics and Optimization</h3>
            {/* <p>Improving for better outcomes</p> */}
          </div>

          <div className="process-step">
            <div className="step-circle c6">6</div>
            <h3>Generating Reports </h3>
            {/* <p>Measuring performance and results</p> */}
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
  // background: radial-gradient(circle at top, #0b1220, #020617 70%);
  // padding: clamp(56px, 7vw, 90px) clamp(5vw, 6vw, 7vw);
  padding-top:30px;
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
  // background:radial-gradient(circle at top,#0b1220,#020617 70%);
  // padding: clamp(56px, 7vw, 88px) clamp(5vw, 6vw, 7vw);
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



function HomeHerohead() {
  useEffect(() => {
    const css = `
:root{
  --bg-dark:#020617;
  --violet:#8b5cf6;
  --pink:#ec4899;
  --muted:#94a3b8;
  --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
}

*{ box-sizing:border-box; }

/* HERO SECTION */
.home-hero{
  width:100%;
  min-height:100vh;
  padding:0px 8%;
  // background:var(--bg-dark);
  font-family:Inter,system-ui,sans-serif;
  color:white;
}

/* BIG HEADLINE */
.hero-title{
  font-size: clamp(36px, 6vw, 72px);
  font-weight:900;
  line-height:1.05;
  // margin-bottom:0px;
  text-align:left;
}

.gradient-text{
  background:var(--gradient);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* CONTENT BELOW HEADLINE */
.hero-content{
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:60px;
}

/* PARAGRAPH */
.hero-text p{
  font-size:18px;
  line-height:1.7;
  color:var(--muted);
  max-width:550px;
}

/* IMAGE */
.hero-image{
  width:100%;
  max-width:650px;
  height:auto;
  display:block;
  margin-left:auto;
  filter: drop-shadow(0 30px 100px rgba(139,92,246,0.4));
}

/* TABLET */
@media(max-width:992px){
  .hero-content{
    grid-template-columns:1fr;
    text-align:center;
  }

  .hero-title{
    text-align:center;
  }

  .hero-text p{
    margin:auto;
  }

  .hero-image{
    margin:40px auto 0;
    max-width:420px;
  }
}

/* MOBILE */
@media(max-width:600px){
  .home-hero{
    padding:0px 5%;
  }

  .hero-title{
    font-size:30px;
    line-height:1.2;
    margin-bottom:20px;
  }

  .hero-text p{
    font-size:15px;
  }

  .hero-image{
    max-width:320px;
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

      {/* BIG HEADLINE */}
      <h1 className="hero-title">
        Digital Marketing Services That{" "}
        <span className="gradient-text">Grow Your Business</span>
      </h1>

      {/* BELOW CONTENT */}
      <div className="hero-content">

        {/* LEFT PARA */}
        <div className="hero-text">
          <p>
            Sha Infotechnology is a results-driven digital marketing agency
            delivering powerful digital marketing services, website development,
            and content marketing strategy solutions to help brands scale online,
            generate qualified leads, and increase revenue.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/33d.png"
            alt="Digital Growth Illustration"
            className="hero-image"
            draggable="false"
          />
        </div>

      </div>
    </section>
  );
}






 function WhyChooseUs() {
  useEffect(() => {
    const css = `
/* ===== WHY CHOOSE US SECTION ===== */
.why-wrap{
  // padding:120px 6vw;
  // background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding-top:30px;
  font-family:Inter,system-ui,sans-serif;
  color:#ffffff;
}

.why-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:70px;
  align-items:center;
}

/* LEFT */
.why-left h2{
  font-size:clamp(36px,5vw,52px);
  font-weight:900;
  margin-bottom:18px;
}

.why-left h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.why-left p{
  font-size:17px;
  line-height:1.8;
  color:#cbd5f5;
  max-width:540px;
  margin-bottom:36px;
}

.why-tagline{
  font-size:16px;
  font-weight:700;
  color:#ffffff;
  margin-top:20px;
}

/* RIGHT */
.why-features{
  display:grid;
  gap:22px;
}

.why-card{
  background:rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.12);
  border-radius:20px;
  padding:26px;
  display:flex;
  gap:18px;
  align-items:flex-start;
  transition:.35s ease;
}

.why-card:hover{
  transform:translateY(-6px);
  border-color:#8b5cf6;
  box-shadow:0 25px 80px rgba(139,92,246,.35);
}

.why-icon{
  width:46px;
  height:46px;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  color:#fff;
  flex-shrink:0;
}

.why-card h4{
  font-size:18px;
  font-weight:800;
  margin-bottom:6px;
}

.why-card p{
  font-size:14.5px;
  color:#cbd5f5;
  line-height:1.7;
}

/* MOBILE */
@media(max-width:900px){
  .why-container{
    grid-template-columns:1fr;
  }

  .why-left{
    text-align:center;
  }

  .why-left p{
    margin:auto;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="why-wrap">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <h2>
            Why Choose <span>SHA Infotechnology</span>
            <br />as Your Digital Marketing Agency?
          </h2>

          <p>
            We don’t just market your brand — we help you grow it sustainably.
            Our approach combines creativity, strategy, and performance-driven
            execution to deliver measurable business results.
          </p>

          <div className="why-tagline">
            Trusted by businesses looking for real digital growth.
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="why-features">
          <div className="why-card">
            <div className="why-icon">👨‍💻</div>
            <div>
              <h4>Experienced Professionals</h4>
              <p>
                Our team consists of skilled digital marketing experts with
                hands-on industry experience.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">📊</div>
            <div>
              <h4>Data-Driven Strategies</h4>
              <p>
                Every decision is backed by analytics, insights, and proven
                performance metrics.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">📈</div>
            <div>
              <h4>Transparent Reporting & ROI</h4>
              <p>
                Clear reports, honest communication, and measurable return on
                investment.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">🏢</div>
            <div>
              <h4>Industry-Specific Solutions</h4>
              <p>
                Customized strategies tailored to your business industry and
                target audience.
              </p>
            </div>
          </div>

          <div className="why-card">
            <div className="why-icon">💰</div>
            <div>
              <h4>Affordable & Scalable Plans</h4>
              <p>
                Cost-effective pricing with flexible plans that grow along with
                your business.
              </p>
            </div>
          </div>
        </div>

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


    <Helmet>
  <title>Best Digital Marketing services | Shainfotech </title>
  <meta
    name="description"
    content="Maximize your online reach and drive business growth with our top-notch digital marketing services. Expert strategies and proven techniques to dominate the digital landscape. Contact us now!"
  />
</Helmet>
    <HomeHerohead />
    
    <div className="sf-wrap">
     

      <div className="fullpage-wrapper">
       

     <ProjectRunLeftImageSection />
      
     
        <SeoMarketingSection />
         <SeoGrowthSectionleftimage />
        <ContentCoreSection />
 <ServicesHighlightSection />
 <ProcessFlowSection />
         <WhyChooseUs />
        
         <IndustriesWeServe />
        <StatsHighlight />
        <HomeFAQSection /> 
        
       
      </div>
    </div>
    </>
  );
}


