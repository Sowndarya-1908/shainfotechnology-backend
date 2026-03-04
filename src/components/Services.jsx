
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

function ServicesWaveSection() {
  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== ANIMATED GRADIENT BACKGROUND ===== */

.about-wave-bg{
  position:relative;
  min-height:30vh;
  width:100%;
  overflow:hidden;
  font-family:'Poppins',sans-serif;
  background:linear-gradient(
    315deg,
    rgba(174, 84, 211, 1) 3%,
    rgba(85, 6, 88, 1) 38%,
    rgba(102, 6, 83, 1) 68%,
    rgba(217, 72, 193, 1) 98%
  );
  background-size:400% 400%;
  animation:gradientMove 15s ease infinite;
}

@keyframes gradientMove{
  0%{background-position:0% 0%}
  50%{background-position:100% 100%}
  100%{background-position:0% 0%}
}

.about-wave-bg::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:4px;
  background:#020617;
  z-index:10;
}

/* ===== WAVES ===== */

.about-wave{
  background:rgba(255,255,255,0.25);
  border-radius:1000% 1000% 0 0;
  position:absolute;
  width:200%;
  height:12em;
  bottom:-2px;
  left:0;
  animation:waveMove 10s -3s linear infinite;
  opacity:.8;
  z-index:1;
}

.about-wave:nth-of-type(2){
  bottom:calc(-1.25em - 2px);
  animation:waveMove 18s linear reverse infinite;
}

.about-wave:nth-of-type(3){
  bottom:calc(-1.25em - 2px);
  animation:waveMove 20s -1s reverse infinite;
}

@keyframes waveMove{
  0%{transform:translateX(0)}
  25%{transform:translateX(-25%)}
  50%{transform:translateX(-50%)}
  75%{transform:translateX(-25%)}
  100%{transform:translateX(0)}
}

/* ===== CONTENT ===== */

.about-wave-content{
  position:relative;
  z-index:5;
}

.about-section{
  min-height:50vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 6vw;
  color:#ffffff;
  text-align:center;
}

.about-container{
  max-width:900px;
}

/* BADGE */

.about-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 18px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.35);
  font-size:14px;
  font-weight:600;
  margin-bottom:20px;
}

.about-badge span{
  width:8px;
  height:8px;
  background:#ffffff;
  border-radius:50%;
}

/* HEADING */

.about-heading{
  font-size:56px;
  font-weight:800;
  line-height:1.1;
  margin-bottom:16px;
}

.about-heading span{
  background:linear-gradient(90deg,#ffffff,#fbcfe8);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* TEXT */

.about-text{
  font-size:18px;
  line-height:1.7;
  color:#f5f3ff;
  margin-bottom:28px;
}

/* FEATURES */

.about-features{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.feature-card{
  background:rgba(101,5,87,0.15);
  backdrop-filter:blur(12px);
  border-radius:18px;
  padding:18px;
  font-size:18px;
  font-weight:500;
}

/* ===== MOBILE ===== */

@media(max-width:900px){

  .about-features{
    grid-template-columns:1fr;
  }

  .about-wave-bg{
    min-height:100vh;
  }

  .about-heading{
    font-size:36px;
  }

  .about-text{
    font-size:16px;
  }

  .feature-card{
    font-size:16px;
  }

}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="about-wave-bg">

      <div className="about-wave-content">
        <section className="about-section">
          <div className="about-container">

            <div className="about-badge">
              <span></span> OUR SERVICES
            </div>

            <h1 className="about-heading">
              Where Digital Strategy<br />
              <span>Turns Into Real Results</span>
            </h1>

            <p className="about-text">
              Our solutions are built to increase visibility, drive qualified traffic, and convert clicks into customers. With a results first approach, SHA Infotechnology supports your business at every stage from strategy to scalable growth.
            </p>

            <div className="about-features">
              <div className="feature-card">💡 Digital Strategy & Consulting</div>
              <div className="feature-card">🌐 Web & E-Commerce Development</div>
              <div className="feature-card">📈 SEO, Marketing & Growth</div>
            </div>

          </div>
        </section>
      </div>

      <div className="about-wave"></div>
      <div className="about-wave"></div>
      <div className="about-wave"></div>

    </section>
  );
}


function ServicesHighlightSection() {
  const navigate = useNavigate();

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= SERVICES HIGHLIGHT ================= */

.sh-wrap{
  font-family:'Poppins',sans-serif;
  padding-bottom:24px;
}

/* TITLE */

.sh-title{
  text-align:center;
  font-size:56px;
  font-weight:800;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:32px;
}

/* ================= GRID STRUCTURE ================= */

.sh-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:24px;
}

/* ---------- FIRST 6 CARDS (3 PER ROW) ---------- */

.sh-card:nth-child(1),
.sh-card:nth-child(2),
.sh-card:nth-child(3),
.sh-card:nth-child(4),
.sh-card:nth-child(5),
.sh-card:nth-child(6){
  grid-column:span 4;
}

/* ---------- LAST 4 CARDS (4 IN FINAL ROW) ---------- */

.sh-card:nth-child(7),
.sh-card:nth-child(8),
.sh-card:nth-child(9),
.sh-card:nth-child(10){
  grid-column:span 3;
}

/* ================= CARD ================= */

.sh-card{
  background:#ffffff;
  border-radius:20px;
  padding:24px;
  min-height:210px;
  text-align:center;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;

  position:relative;
  overflow:hidden;

  box-shadow:0 18px 50px rgba(0,0,0,0.35);
  transition:transform .3s ease, box-shadow .3s ease;
}

.sh-card:hover{
  transform:translateY(-6px);
  box-shadow:0 28px 70px rgba(0,0,0,0.5);
}

/* ICON */

.sh-icon{
  width:54px;
  height:54px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:24px;
  color:#ffffff;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  box-shadow:0 0 26px rgba(139,92,246,0.45);
}

/* TITLE */

.sh-card h3{
  font-size:18px;
  font-weight:600;
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
  font-size:18px;
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

/* HOVER EFFECT */

.sh-card:hover::before{ opacity:1; }
.sh-card:hover .sh-hover-text{ opacity:1; }
.sh-card:hover h3,
.sh-card:hover .sh-icon{ opacity:0; }

/* SCROLL REVEAL */

.sh-reveal{
  opacity:0;
  transform:translateY(32px);
  transition:.8s cubic-bezier(0.16,1,0.3,1);
}

.sh-reveal.show{
  opacity:1;
  transform:none;
}

/* ================= RESPONSIVE ================= */

/* Tablet */

@media(max-width:1024px){
  .sh-grid{
    grid-template-columns:1fr 1fr;
  }

  .sh-card{
    grid-column:span 1 !important;
  }
}

/* Mobile */

@media(max-width:768px){

  .sh-wrap{
    padding:40px 20px;
  }

  .sh-title{
    font-size:36px;
  }

  .sh-grid{
    grid-template-columns:1fr;
  }

  .sh-card{
    grid-column:span 1 !important;
    min-height:auto;
    padding:22px;
  }

  .sh-card::before,
  .sh-hover-text{
    display:none;
  }

  .sh-card h3,
  .sh-icon{
    opacity:1 !important;
  }

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

      <h2 className="sh-title sh-reveal">
        What We Do Best
      </h2>

      <div className="sh-grid">

        {[
          ["🧠","Digital Strategy","/services/digital-strategy","Data-driven strategies that align technology, marketing, and business goals."],
          ["💻","Web Development","/services/web-development","High-performance, responsive websites built to convert visitors into customers."],
          ["🛒","E-commerce Website","/services/ecommerce-website","Secure, scalable online stores designed for smooth shopping and higher sales."],
          ["🔍","Search Engine Optimization","/services/seo","Improve rankings, organic traffic, and long-term online visibility."],
          ["📣","Social Media Marketing","/services/social-media-marketing","Build brand awareness, engagement, and trust across social platforms."],
          ["✍️","Content Design","/services/content-design","Compelling content that informs, engages, and converts your audience."],
          ["📊","Business Analysis","/services/business-analysis","Insight-driven analysis to optimize processes, performance, and growth."],
          ["🎨","Creative Design","/services/creative-design","Eye-catching visuals and branding that make your business stand out."],
          ["🏷️","Brand Consultancy","/services/brand-consultancy","Build a strong, consistent brand identity that drives trust and growth."],
          ["⚙️","AI Marketing","/services/ai-marketing","AI-powered marketing strategies that analyze data, predict customer behavior, automate campaigns, and maximize conversions for smarter business growth."]
        ].map(([icon,title,link,text],i)=>(
          <div
            key={i}
            className="sh-card sh-reveal"
            onClick={()=>navigate(link)}
          >
            <div className="sh-icon">{icon}</div>
            <h3>{title}</h3>
            <div className="sh-hover-text">{text}</div>
          </div>
        ))}

      </div>
    </section>
  );
}


function ServicesHero() {
  useEffect(() => {
    const css = `
:root{
  --bg-dark:#020617;
  --bg-dark-2:#0b1220;
  --violet:#8b5cf6;
  --pink:#ec4899;
  --muted:#9ca3af;
}

*{ box-sizing:border-box; }
body{ margin:0; overflow-x:hidden; }

/* ================= HERO ================= */

.services-hero{
  padding:clamp(70px, 8vw, 110px) 7vw;
  background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
  display:grid;
  grid-template-columns:1.15fr 0.85fr;   /* 🔥 text | image */
  align-items:center;
  gap:clamp(32px, 5vw, 64px);
  font-family:Inter,system-ui,sans-serif;
}

/* ================= LEFT TEXT ================= */

.services-left{
  max-width:640px;
}

.services-left small{
  letter-spacing:2px;
  color:#93c5fd;
  font-weight:600;
  display:block;
  margin-bottom:14px;
}

.services-left h1{
  font-size:clamp(38px,5.5vw,66px);
  line-height:1.1;
  margin:0 0 18px;
  color:#ffffff;
  font-weight:900;
}

.gradient-text{
  background:linear-gradient(90deg,var(--violet),var(--pink));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.services-left p{
  max-width:520px;
  font-size:16px;
  line-height:1.75;
  color:var(--muted);
  margin:0;
}

/* ================= RIGHT IMAGE ================= */

.services-image-wrap{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* GLOW */
.services-image-wrap::before{
  content:"";
  position:absolute;
  width:420px;
  height:420px;
  background:radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%);
  filter:blur(44px);
  z-index:0;
}

.services-image-wrap img{
  width:100%;
  max-width:520px;     /* 🔥 BIG IMAGE */
  position:relative;
  z-index:1;
  display:block;
  filter:drop-shadow(0 50px 120px rgba(139,92,246,0.45));
}

/* ================= MOBILE ================= */

@media (max-width: 768px){

  .services-hero{
    grid-template-columns:1fr;
    padding:60px 20px;
    gap:36px;
    text-align:center;
  }

  .services-left{
    max-width:100%;
  }

  .services-left h1{
    font-size:32px;
    line-height:1.2;
  }

  .services-left p{
    margin-left:auto;
    margin-right:auto;
    font-size:15px;
  }

  // .services-image-wrap{
  //   order:-1; /* 🔥 image on top for mobile */
  // }

  .services-image-wrap::before{
    width:260px;
    height:260px;
  }

  .services-image-wrap img{
    max-width:300px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="services-hero">

      {/* LEFT TEXT */}
      <div className="services-left">
        <small>OUR SERVICES</small>

        <h1>
          Where Digital Strategy <br />
          <span className="gradient-text">Turns Into Real Results</span>
        </h1>

        <p>
          Our solutions are built to increase visibility, drive qualified traffic,
          and convert clicks into customers. With a results-first approach,
          SHA Infotechnology supports your business at every stage—from strategy
          to scalable growth.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="services-image-wrap">
        <img
          src="/images/SERVICESHERO.png"
          alt="Digital Services Illustration"
          draggable="false"
        />
      </div>

    </section>
  );
}

function GrowthPartnerSection() {
  React.useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

:root{
  --red:#B90504;
  --violet:#8b5cf6;
  --pink:#ec4899;
  --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
}

/* ================= SECTION ================= */

.gp-wrap{
  font-family:'Poppins',sans-serif;
  padding-top:0px;
  padding-bottom:0px;
}

/* ================= HEADING ================= */

.gp-title{
  font-size:56px;
  font-weight:800;
  line-height:1.2;
  color:#ffffff;
  margin-bottom:6px;
  text-align:left;
}

.gp-title span{
  background:var(--gradient);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ================= GRID ================= */

.gp-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}

/* ================= CARD ================= */

.gp-card{
  background:#ffffff !important;
  color:#020617;
  border-radius:18px;
  padding:30px 18px;
  text-align:center;
  box-shadow:0 18px 50px rgba(0,0,0,0.22);
  transition:transform .3s ease, box-shadow .3s ease;
}

.gp-card:hover{
  transform:translateY(-6px);
  box-shadow:0 28px 70px rgba(185,5,4,0.35);
}

/* ICON */

.gp-icon{
  font-size:28px;
  margin-bottom:10px;
}

/* TITLE */

.gp-card h4{
  font-size:18px;
  font-weight:600;
  color:var(--red) !important;
  margin:0;
}

/* ================= TABLET ================= */

@media(max-width:1024px){

  .gp-grid{
    grid-template-columns:repeat(2,1fr);
    gap:18px;
  }

}

/* ================= MOBILE ================= */

@media(max-width:640px){

  .gp-wrap{
    padding:40px 20px;
  }

  .gp-title{
    font-size:36px;
    text-align:center;
    margin-bottom:28px;
  }

  .gp-grid{
    grid-template-columns:1fr;
    gap:16px;
  }

  .gp-card{
    padding:24px 16px;
  }

}

`;

    const id = "growth-partner-fixed-style";
    const old = document.getElementById(id);
    if (old) old.remove();

    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="gp-wrap">

      <h2 className="gp-title">
        What Makes Us Your Perfect <br />
        <span>Growth Partner?</span>
      </h2>

      <div className="gp-grid">

        <div className="gp-card">
          <div className="gp-icon">🤖</div>
          <h4>AI-Driven Precision</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">🧩</div>
          <h4>Customized Services</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">👥</div>
          <h4>Expert Team</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">📈</div>
          <h4>Proven Success</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">🤝</div>
          <h4>Long-Term Partnership</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">🎯</div>
          <h4>Client-Focused</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">🗂️</div>
          <h4>Comprehensive Services</h4>
        </div>

        <div className="gp-card">
          <div className="gp-icon">✅</div>
          <h4>Quality Assurance</h4>
        </div>

      </div>

    </section>
  );
}

function IndustriesWeServe() {

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== INDUSTRIES SECTION ===== */
.sha-industries{
  padding-top:0px;
  font-family:'Poppins', sans-serif;
  color:#ffffff;
  overflow:hidden;
}

/* HEADING */
.sha-industries h2{
  text-align:center;
  font-size:48px;
  font-weight:800;
  font-family:'Poppins', sans-serif;
}

/* GRADIENT TEXT */
.sha-industries h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */
.sha-industries p{
  max-width:900px;
  margin:0 auto 0px;
  text-align:center;
  font-size:17px;
  font-weight:400;
  line-height:1.8;
  color:#cbd5f5;
  font-family:'Poppins', sans-serif;
}

/* SLIDER */
.industry-slider{
  overflow:hidden;
}

/* TRACK */
.industry-track{
  display:flex;
  gap:50px;
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

/* INDUSTRY TITLE */
.industry-item h4{
  font-size:16px;
  font-weight:600;
  color:#ffffff;
  font-family:'Poppins', sans-serif;
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

  .sha-industries h2{
    font-size:36px;
  }

  .sha-industries p{
    font-size:16px;
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

function ProjectWorkflowSection() {
  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

:root{
  --violet:#8b5cf6;
  --pink:#ec4899;
  --muted:#9ca3af;
}

/* ================= SECTION ================= */

.pw-section{
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  padding-top:20px;
  padding-bottom:30px;
}

/* ================= CONTAINER ================= */

.pw-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  gap:36px;
  align-items:center;
}

/* ---------- LEFT CONTENT ---------- */

.pw-left h2{
  font-size:56px;
  font-weight:800;
  line-height:1.2;
  margin-bottom:16px;
  color:#ffffff;
}

.pw-left p{
  font-size:17px;
  line-height:1.7;
  color:var(--muted);
  margin:0 0 14px;
}

/* Highlight text */

.highlight{
  background:linear-gradient(90deg,var(--violet),var(--pink));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-weight:600;
}

/* ---------- RIGHT FLOATING CARDS ---------- */

.pw-right{
  display:grid;
  gap:16px;
}

.pw-card{
  background:rgba(139,92,246,0.08);
  border:1px solid rgba(139,92,246,0.25);
  border-radius:18px;
  padding:18px 22px;
  display:flex;
  gap:12px;
  align-items:flex-start;
  box-shadow:0 26px 60px rgba(0,0,0,0.4);
  transform:translateY(40px);
  opacity:0;
  transition:all 0.6s ease;
}

.pw-card.show{
  transform:translateY(0);
  opacity:1;
}

.pw-card:hover{
  transform:translateY(-6px);
  box-shadow:0 36px 70px rgba(139,92,246,0.35);
}

/* STEP NUMBER */

.pw-step{
  min-width:34px;
  height:34px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--violet),var(--pink));
  color:#fff;
  font-weight:700;
  font-size:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 0 16px rgba(139,92,246,0.6);
  margin-top:2px;
}

.pw-card p{
  margin:0;
  font-size:16px;
  line-height:1.6;
  color:#d1d5db;
}

/* ---------- TITLE ---------- */

.pw-title{
  font-size:56px;
  font-weight:800;
  line-height:1.2;
  color:#ffffff;
}

.pw-gradient-text{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ---------- MOBILE ---------- */

@media(max-width:900px){

  .pw-container{
    grid-template-columns:1fr;
    gap:28px;
  }

  .pw-right{
    margin-top:10px;
  }

  .pw-section{
    padding:40px 20px;
  }

  .pw-left h2{
    font-size:36px;
  }

  .pw-left p{
    font-size:16px;
  }

}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const cards = document.querySelectorAll(".pw-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      document.head.removeChild(style);
      observer.disconnect();
    };

  }, []);

  return (
    <section className="pw-section">
      <div className="pw-container">

        <div className="pw-left">

          <h2 className="pw-title">
            How a Project With Us <br />
            <span className="pw-gradient-text">Usually Runs</span>
          </h2>

          <p>
            <span className="highlight">No guesswork. No surprises.</span>
            We follow a transparent and structured workflow so you always know where your project stands and what comes next.
          </p>

          <p>
            <span className="highlight">We start with clarity.</span>
            Every project begins with understanding your business, audience, and goals to set the right digital foundation.
          </p>

          <p>
            <span className="highlight">Planning meets action.</span>
            Our strategies are practical and result-focused—executed with clear timelines, collaboration, and regular updates.
          </p>

          <p>
            <span className="highlight">Growth is continuously refined.</span>
            We monitor performance, refine strategies, and scale what works to deliver long-term business impact.
          </p>

        </div>

        <div className="pw-right">

          <div className="pw-card">
            <div className="pw-step">1</div>
            <p>Understanding your business, audience, and market.</p>
          </div>

          <div className="pw-card">
            <div className="pw-step">2</div>
            <p>Designing a focused roadmap for growth.</p>
          </div>

          <div className="pw-card">
            <div className="pw-step">3</div>
            <p>Launching solutions with clarity and control.</p>
          </div>

          <div className="pw-card">
            <div className="pw-step">4</div>
            <p>Improving performance and expanding results.</p>
          </div>

        </div>

      </div>
    </section>
  );
}


function Demo() {

const sectionRef = useRef(null);

const [loading,setLoading] = useState(false);

const [formData,setFormData] = useState({
name:"",
phone:"",
email:"",
selection:"",
message:""
});

useEffect(()=>{

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

if(sectionRef.current){
observer.observe(sectionRef.current);
}

},[]);


const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();
setLoading(true);

emailjs.send(
"service_pznbx9s",
"template_8wwwast",
formData,
"yxT-hRvX41RhpOdfZ"
)
.then(()=>{
alert("Enquiry Sent Successfully!");
setFormData({
name:"",
phone:"",
email:"",
selection:"",
message:""
});
})
.catch(()=>{
alert("Failed to send enquiry");
})
.finally(()=>{
setLoading(false);
});
};

return(
<>
<section ref={sectionRef} className="demo-banner reveal">

<div className="mesh-bg"></div>

<div className="demo-inner">

<div className="banner-text">
<h2>
  Connect With Our Digital Marketing

<span> & Web Experts</span>
</h2>
<p>Courses • Services • Expert Support</p>
<p>Whether you want to learn Digital Marketing or grow your business online, our experts are here to guide you.</p>
</div>

<form className="banner-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone"
value={formData.phone}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>

<select
name="selection"
value={formData.selection}
onChange={handleChange}
required
>
<option value="">Select Service / Course</option>
                  <option value="Digital Strategy">Digital Strategy</option>
                  <option value="Digital Marketing Course">Digital Marketing Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Design">Content Design</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="Brand Consultancy">Brand Consultancy</option>
                  <option value="AI Marketing">AI Marketing</option>
</select>

<textarea
name="message"
placeholder="Message"
value={formData.message}
onChange={handleChange}
></textarea>

<button type="submit">
{loading ? "Sending..." : "Connect with us"}
</button>

</form>

</div>

</section>

<style>{`

/* ================= BANNER ================= */

.demo-banner{
position:relative;
padding:45px 6%;
overflow:hidden;
background:#ffffff;
}

/* ================= MESH GRADIENT BG ================= */

.mesh-bg{
position:absolute;
inset:0;
background:
radial-gradient(circle at 20% 30%, rgba(124,58,237,0.25), transparent 40%),
radial-gradient(circle at 80% 70%, rgba(236,72,153,0.25), transparent 40%),
radial-gradient(circle at 50% 50%, rgba(168,85,247,0.2), transparent 50%);
animation:meshMove 12s infinite alternate ease-in-out;
z-index:0;
}

@keyframes meshMove{
0%{
transform:scale(1) translate(0,0);
}
50%{
transform:scale(1.2) translate(30px,-20px);
}
100%{
transform:scale(1) translate(-20px,20px);
}
}

/* ================= LAYOUT ================= */

.demo-inner{
position:relative;
z-index:2;
display:flex;
align-items:center;
justify-content:space-between;
gap:30px;
flex-wrap:wrap;
}

/* ================= TEXT ================= */

.banner-text{
flex:1;
}

.banner-text h2{
font-size:24px;
font-weight:700;
color:#0f172a;
margin-bottom:5px;
}

.banner-text span{
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.banner-text p{
font-size:14px;
color:#475569;
}

/* ================= FORM ================= */

.banner-form{
flex:2;
display:flex;
gap:10px;
flex-wrap:wrap;
padding:14px;
border-radius:14px;
background:#ffffff;

background:
linear-gradient(#fff,#fff) padding-box,
linear-gradient(120deg,#7C3AED,#EC4899,#7C3AED) border-box;

border:2px solid transparent;

box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.banner-form input,
.banner-form select,
.banner-form textarea{
padding:9px 10px;
border-radius:8px;
border:1px solid #e2e8f0;
font-size:13px;
min-width:120px;
transition:all .3s;
}

.banner-form textarea{
min-width:180px;
}

.banner-form input:focus,
.banner-form select:focus,
.banner-form textarea:focus{
border-color:#7C3AED;
box-shadow:0 0 0 2px rgba(124,58,237,0.2);
outline:none;
}

/* ================= SHIMMER BUTTON ================= */

.banner-form button{
position:relative;
overflow:hidden;
padding:10px 20px;
border:none;
border-radius:8px;
background:linear-gradient(90deg,#7C3AED,#EC4899);
color:white;
font-weight:600;
cursor:pointer;
}

.banner-form button::before{
content:"";
position:absolute;
top:0;
left:-120%;
width:120%;
height:100%;
background:linear-gradient(
120deg,
transparent,
rgba(255,255,255,0.6),
transparent
);
transition:all .6s;
}

.banner-form button:hover::before{
left:120%;
}

/* ================= SCROLL REVEAL ================= */

.reveal{
opacity:0;
transform:translateY(60px);
transition:all 0.9s ease;
}

.reveal.show{
opacity:1;
transform:translateY(0);
}

/* ================= MOBILE ================= */

@media(max-width:900px){

.demo-inner{
flex-direction:column;
text-align:center;
}

.banner-form{
width:100%;
max-width:420px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

.banner-form textarea{
grid-column:1 / span 2;
}

.banner-form button{
grid-column:1 / span 2;
padding:12px;
}

}

`}</style>

</>
);
}


function HomeFAQSection() {
  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= HOME FAQ ================= */

.home-faq-wrap{
  font-family:'Poppins',sans-serif;
  padding-top:20px;
  padding-bottom:30px;
  color:#ffffff;
}

/* RESET */
*{ box-sizing:border-box; }

html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
}

.home-faq-container{
  max-width:1100px;
  margin:auto;
}

/* ================= TITLE ================= */

.home-faq-title{
  text-align:center;
  font-size:56px;
  font-weight:800;
  margin-bottom:8px;
  color:transparent;
}

.home-faq-title .faq-title-white{
  color:#ffffff;
}

.home-faq-title .faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.home-faq-title,
.home-faq-title *{
  pointer-events:none;
}

.home-faq-sub{
  text-align:center;
  color:#cbd5f5;
  font-size:17px;
  margin-bottom:36px;
}

/* ================= CARD ================= */

.home-faq-card{
  border-radius:24px;
  padding:6px;
  box-shadow:0 25px 70px rgba(139,92,246,0.35);
}

/* ================= ITEM ================= */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.08);
  padding:18px 8px;
  transition:background .25s ease;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.home-faq-item:hover{
  background:#141414;
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
  font-size:18px;
  font-weight:600;
  color:#ffffff;
}

/* TOGGLE BUTTON */

.home-faq-toggle{
  width:34px;
  height:34px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  font-weight:800;
  color:#ffffff;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  box-shadow:0 0 16px rgba(139,92,246,0.6);
  transition:transform .3s ease;
}

.home-faq-item.open .home-faq-toggle{
  transform:rotate(180deg);
}

/* ================= ANSWER ================= */

.home-faq-answer{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transform:translateY(-6px);
  transition:
    max-height .4s cubic-bezier(0.16,1,0.3,1),
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
  font-size:16px;
  line-height:1.7;
  color:#cbd5f5;
}

/* ================= MOBILE ================= */

@media(max-width:768px){

  .home-faq-wrap{
    padding:40px 20px;
  }

  .home-faq-title{
    font-size:36px;
  }

  .home-faq-question{
    font-size:16px;
  }

  .home-faq-answer p{
    font-size:15px;
  }

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

  /* ================= AUTO OPEN ================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpenFaq(0);
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
      q:"What services does SHA Infotechnology offer?",
      a:"We provide end-to-end digital solutions including website development, e-commerce websites, SEO, Google Ads, social media marketing, business profile creation, and content marketing."
    },
    {
      q:"Which service is best to start with?",
      a:"If you’re just starting, we recommend a professional website combined with basic SEO. For faster leads, Google Ads and social media marketing are ideal."
    },
    {
      q:"Do you work with small businesses and startups?",
      a:"Yes. We work with startups, small businesses, and growing brands, offering scalable solutions tailored to different budgets and growth stages."
    },
    {
      q:"How long does it take to see results?",
      a:"SEO typically shows noticeable improvement within 2–3 months. Paid ads and social media campaigns can start generating leads much faster, often within weeks."
    },
    {
      q:"How do I get started?",
      a:"Simply contact us for a free consultation. We’ll understand your requirements and recommend the best strategy for your business."
    }
  ];

  /* ================= SEO SCHEMA ================= */

  useEffect(() => {
    const schema = {
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity":faqs.map(f=>({
        "@type":"Question",
        "name":f.q,
        "acceptedAnswer":{
          "@type":"Answer",
          "text":f.a
        }
      }))
    };

    const script=document.createElement("script");
    script.type="application/ld+json";
    script.innerHTML=JSON.stringify(schema);
    document.head.appendChild(script);

    return ()=>document.head.removeChild(script);

  },[]);

  return (
    <section className="home-faq-wrap" ref={sectionRef}>
      <div className="home-faq-container">

        <h2 className="home-faq-title">
          <span className="faq-title-white">Frequently Asked</span>{" "}
          <span className="faq-title-gradient">Questions</span>
        </h2>

        <p className="home-faq-sub">
          Clear answers to help you move forward with confidence.
        </p>

        <div className="home-faq-card">
          {faqs.map((item,i)=>{
            const open=openFaq===i;

            return(
              <div key={item.q} className={"home-faq-item"+(open?" open":"")}>

                <div
                  className="home-faq-header"
                  onClick={()=>setOpenFaq(open?-1:i)}
                >

                  <div className="home-faq-question">{item.q}</div>

                  <div className="home-faq-toggle">
                    {open?"−":"+"}
                  </div>

                </div>

                <div className="home-faq-answer">
                  <p>{item.a}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default function ServicesPage() {
  

  useEffect(() => {
    const css = `
      :root{
        --accent-red:#B90504;
        --bg-grey:#E8E8E8;
        --card-grey:#F5F5F5;
        --text-dark:#202326;
        --aqua:#6CC4C1;
      }

      *{box-sizing:border-box;}
      body{margin:0;}
/* ===== GRADIENT COLOR SYSTEM ===== */
:root{
  --violet:#8b5cf6;
  --pink:#ec4899;
  --gradient: linear-gradient(90deg, #8b5cf6, #ec4899);
}

/* Gradient text helper */
.gradient-text{
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

      .services-wrap{
  min-height:100vh;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  color:#ffffff;
  font-family:Inter,system-ui;
}


     
      .svc-section{
  padding:100px 7vw;
  border-bottom:none;
}

      .svc-max{
        max-width:1100px;
        margin:0 auto;
      }
     .svc-section h2{
  font-size:42px;
  font-weight:900;
  // color:#B90504;
  
  margin-bottom:14px;
}

.svc-section p{
  color:#cfcfcf;
  font-size:16px;
  line-height:1.7;
}

      .svc-section:hover h2{
        color:#555;
      }

      .svc-hero{
        position:relative;
        overflow:hidden;
        background:radial-gradient(circle at top left,#ffffff 0,#E8E8E8 55%,#dcdcdc 100%);
      }
      .svc-hero-layout{
        display:grid;
        grid-template-columns:minmax(0,1.2fr) minmax(0,0.9fr);
        gap:40px;
        align-items:center;
      }
      .svc-pill{
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:4px 10px;
        border-radius:999px;
        background:#ffffff;
        border:1px solid rgba(0,0,0,0.06);
        font-size:12px;
        letter-spacing:0.12em;
        text-transform:uppercase;
        margin-bottom:14px;
      }
      .svc-hero-title{
        font-size:52px;
        font-weight:900;
        line-height:1.05;
        margin:0 0 18px 0;
      }
      .svc-hero-lead{
        font-size:18px;
        line-height:1.8;
        color:rgba(30,34,38,0.9);
      }
      .svc-hero-badges{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
        margin-top:20px;
      }
      .svc-hero-badge{
        padding:6px 12px;
        border-radius:999px;
        background:#ffffff;
        border:1px solid rgba(0,0,0,0.06);
        font-size:13px;
        font-weight:600;
      }

      .svc-hero-card{
        background:#ffffff;
        border-radius:30px;
        padding:30px 26px;
        box-shadow:0 40px 120px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.04);
        animation:svcFloatCard 10s ease-in-out infinite;
      }

      @keyframes svcFloatCard{
        0%{transform:translateY(0);}
        25%{transform:translateY(-10px);}
        50%{transform:translateY(0);}
        75%{transform:translateY(8px);}
        100%{transform:translateY(0);}
      }

      .svc-hero-card-title{
        font-size:20px;
        font-weight:800;
        margin-bottom:8px;
        color:var(--accent-red);
      }
      .svc-hero-stat-row{
        display:flex;
        justify-content:space-between;
        margin-top:18px;
      }
      .svc-hero-stat{
        text-align:center;
      }
      .svc-hero-stat span{
        display:block;
      }
      .svc-hero-stat .number{
        font-size:26px;
        font-weight:800;
      }
      .svc-hero-stat .label{
        font-size:12px;
        text-transform:uppercase;
        letter-spacing:0.12em;
        opacity:0.7;
      }

      .svc-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:24px;
        margin-top:30px;
      }
     .svc-card{
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.06),
    rgba(255,255,255,0.02)
  );
  border-radius:22px;
  padding:26px;
  backdrop-filter: blur(14px);
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 24px 70px rgba(0,0,0,0.55);
  transition:all .35s ease;
}

      .svc-card:hover{
  transform:translateY(-10px);
  box-shadow:0 40px 120px rgba(185,5,4,0.45);
}

      .svc-card-tag{
        font-size:11px;
        letter-spacing:0.16em;
        text-transform:uppercase;
        opacity:0.7;
        margin-bottom:6px;
      }
      .svc-card-title{
        font-size:18px;
        font-weight:800;
        margin-bottom:6px;
          color:#ffffff;
      }
      .svc-card-desc{
        font-size:14px;
        line-height:1.7;
        color:#444;
          color:#cfcfcf;
      }

      .svc-process-strip{
        margin-top:32px;
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:18px;
      }
      .svc-step{
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(12px);
  border-radius:20px;
  padding:26px;
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 20px 60px rgba(0,0,0,0.45);
  transition:all .35s ease;
}
  .svc-step:hover{
  transform:translateY(-8px);
  box-shadow:0 32px 90px rgba(185,5,4,0.45);
}

      .svc-step-number{
        width:26px;
        height:26px;
        border-radius:999px;
        background:var(--accent-red);
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:13px;
        font-weight:800;
        margin-bottom:10px;
      }
      .svc-step-title{
        font-size:15px;
        font-weight:800;
        margin-bottom:4px;
      }
      .svc-step-text{
        font-size:13px;
        color:#555;
      }

      .svc-plans{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:24px;
        margin-top:30px;
      }
      .svc-plan-card{
        background:#ffffff;
        border-radius:22px;
        padding:26px 24px 28px;
        box-shadow:0 24px 70px rgba(185,5,4,0.22);
        border:1px solid rgba(0,0,0,0.05);
        transition:transform 220ms ease, box-shadow 220ms ease;
      }
      .svc-plan-card:hover{
        transform:translateY(-10px);
        box-shadow:0 34px 90px rgba(185,5,4,0.32);
      }
      .svc-plan-label{
        font-size:12px;
        letter-spacing:0.16em;
        text-transform:uppercase;
        opacity:0.8;
        margin-bottom:6px;
      }
      .svc-plan-name{
        font-size:20px;
        font-weight:900;
        margin-bottom:8px;
      }
      .svc-plan-price{
        font-size:15px;
        font-weight:700;
        color:var(--accent-red);
        margin-bottom:8px;
      }
      .svc-plan-point{
        font-size:14px;
        color:#444;
        margin-bottom:4px;
      }

   
    
     

      @media(max-width:1024px){
        .svc-hero-layout{grid-template-columns:1fr;}
        .svc-grid{grid-template-columns:1fr 1fr;}
        .svc-process-strip{grid-template-columns:1fr 1fr;}
        .svc-plans{grid-template-columns:1fr 1fr;}
      }
      @media(max-width:768px){
        .svc-section{padding:60px 24px;}
        .svc-section h2{font-size:32px;}
        .svc-hero-title{font-size:40px;}
        .svc-grid{grid-template-columns:1fr;}
        .svc-process-strip{grid-template-columns:1fr;}
        .svc-plans{grid-template-columns:1fr;}
        .svc-faq-card{padding:24px 18px 30px;}
      }

      /* ================= MOBILE VIEW (Services Page) ================= */
@media (max-width: 480px){
  .svc-section{
    padding:40px 16px;
  }

  .svc-section h2{
    font-size:26px;
    line-height:1.25;
  }

  .svc-hero-title{
    font-size:32px;
    line-height:1.2;
  }

  .svc-hero-lead{
    font-size:15px;
  }

  .svc-hero-badges{
    gap:8px;
  }

  .svc-grid{
    grid-template-columns:1fr;
  }

  .svc-card{
    padding:18px;
  }

  .svc-process-strip{
    grid-template-columns:1fr;
  }

  .svc-plans{
    grid-template-columns:1fr;
  }

 

  .svc-faq-question{
    font-size:16px;
  }
}
  .svc-section,
.svc-card,
.svc-step,
.svc-plan-card{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(0.16,1,0.3,1);
}

.show{
  opacity:1;
  transform:translateY(0);
}


/* ================= HOME FAQ (REUSED IN SERVICES) ================= */

.home-faq-wrap{
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  padding:110px 6vw;
  color:#ffffff;
  font-family:Inter,system-ui;
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
 background: var(--gradient);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


}

.home-faq-sub{
  text-align:center;
  color:#cfcfcf;
  font-size:16px;
  margin-bottom:50px;
}

.home-faq-card{
  background:#141414;
  border-radius:26px;
  padding:36px;
  box-shadow:0 30px 90px rgba(185,5,4,0.35);
}

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

.home-faq-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  gap:16px;
}

.home-faq-question{
  font-size:18px;
  font-weight:700;
  color:#ffffff;
}

.home-faq-item.open .home-faq-question{
  background: var(--gradient);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

}

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
.svc-section h2{
  font-size:42px;
  font-weight:900;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home-faq-item.open .home-faq-toggle{
  background:#B90504;
  color:#ffffff;
  transform:rotate(180deg);
}

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
}

.home-faq-cta p{
  font-size:16px;
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

@media(max-width:768px){
  .home-faq-wrap{padding:70px 20px;}
  .home-faq-title{font-size:28px;}
  .home-faq-question{font-size:16px;}
}

/* ================= GROWTH PARTNER SECTION ================= */
/* ================= GROWTH PARTNER (MATCH SERVICES STYLE) ================= */

.gp-wrap{
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  padding:110px 7vw;
  font-family:Inter,system-ui;
}

.gp-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:24px;
  margin-bottom:70px;
}

.gp-title{
  font-size:44px;
  font-weight:900;
  line-height:1.1;
  max-width:760px;
  color:#ffffff;
}

/* CTA button – same vibe as site */
.gp-btn{
  display:flex;
  align-items:center;
  gap:14px;
  font-weight:800;
  background:transparent;
  color:#ffffff;
  border:2px solid #B90504;
  border-radius:999px;
  padding:14px 26px;
  cursor:pointer;
  transition:all .3s ease;
}

.gp-btn:hover{
  background:#B90504;
  transform:translateY(-4px);
  box-shadow:0 20px 60px rgba(185,5,4,0.45);
}

.gp-btn span{
  width:38px;
  height:38px;
  border-radius:50%;
  border:2px solid currentColor;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
}

/* GRID */
.gp-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:28px;
}

/* CARD — SAME GLASS STYLE AS svc-card */
.gp-card{
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.06),
    rgba(255,255,255,0.02)
  );
  border-radius:22px;
  padding:40px 26px;
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 24px 70px rgba(0,0,0,0.55);
  text-align:center;
  transition:all .35s ease;
  cursor:default;
}

.gp-card:hover{
  transform:translateY(-10px);
  box-shadow:0 40px 120px rgba(185,5,4,0.45);
}

/* ICON */
.gp-icon{
  width:58px;
  height:58px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  margin:0 auto 14px;
  box-shadow:0 0 40px rgba(185,5,4,0.55);
}

/* TITLE */
.gp-card h4{
  font-size:17px;
  font-weight:800;
  color:#ffffff;
}

/* RESPONSIVE */
@media(max-width:1024px){
  .gp-grid{grid-template-columns:1fr 1fr;}
  .gp-title{font-size:36px;}
}

@media(max-width:640px){
  .gp-head{flex-direction:column;}
  .gp-grid{grid-template-columns:1fr;}
  .gp-title{font-size:30px;}
}





/* ================= GROWTH PARTNER SCROLL REVEAL ================= */

.gp-reveal{
  opacity:0;
  transform:translateY(40px);
  transition:
    opacity .8s cubic-bezier(0.16,1,0.3,1),
    transform .8s cubic-bezier(0.16,1,0.3,1);
}

.gp-reveal.show{
  opacity:1;
  transform:translateY(0);
}

    `;


    const prev = document.getElementById("services-page-styles");
    if (prev) prev.remove();

    const styleTag = document.createElement("style");
    styleTag.id = "services-page-styles";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);

    return () => {
      const el = document.getElementById("services-page-styles");
      if (el) el.remove();
    };
  }, []);
useEffect(() => {
  const items = document.querySelectorAll(
  ".svc-section, .svc-card, .svc-step, .svc-plan-card, .gp-reveal"
);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
  entry.target.classList.add("show");
}, 120);
        }
      });
    },
    { threshold: 0.25 }
  );

  items.forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);
  
  return (
    <>

    <Helmet>
  <title>Custom Software Services - Shainfo Tech</title>
  <meta
    name="description"
    content="Shainfo Technology offers custom software development and IT consulting services. Grow your business fast with our proven tech expertise. Request a free quote today."
      data-rh="true"
  />
</Helmet>


  <ServicesWaveSection />
    {/* <ServicesHero /> */}
    <div className="services-wrap">
      
<ServicesHighlightSection />
   <IndustriesWeServe />
      <ProjectWorkflowSection />
      
      <GrowthPartnerSection />

<Demo />
<HomeFAQSection />


       
    </div>
    </>
  );
}
