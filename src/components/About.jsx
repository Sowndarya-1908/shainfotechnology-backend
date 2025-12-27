// src/components/About.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Image paths (public folder)
const BG_QUOTE_IMAGE = "/images/about/image.png";
const TEAM_PM_IMAGE = "/images/about/m.jpeg";
const TEAM_MM_IMAGE = "/images/about/r.jpeg";
const TEAM_DEV_IMAGE = "/images/about/s.png";

const GALLERY_IMAGE = "/images/about/1.png";




function CTASection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= CTA SECTION ================= */

.cta-wrap{
  position:relative;
  min-height:60vh;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  background:transparent;
  font-family:Inter,system-ui;
}

/* Animated background blobs */
.cta-bg{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 40%, #ff0000, transparent 40%),
    radial-gradient(circle at 60% 30%, #00e5ff, transparent 45%),
    radial-gradient(circle at 80% 70%, #7c3aed, transparent 45%);
  filter:blur(90px);
  animation:floatBg 14s ease-in-out infinite alternate;
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
  max-width:1100px;
  padding:40px 20px;
  color:#ffffff;
}

/* ================= SUPER SCROLL REVEAL ================= */

.cta-title,
.cta-sub,
.cta-btn{
  opacity:0;
}

/* TITLE */
.cta-title{
  transform:scale(0.85);
  filter:blur(12px);
  transition:all 1s cubic-bezier(.16,1,.3,1);
}

.cta-wrap.show .cta-title{
  opacity:1;
  transform:scale(1);
  filter:blur(0);
}

/* SUB TEXT */
.cta-sub{
  transform:translateY(30px);
  transition:all .9s ease .3s;
}

.cta-wrap.show .cta-sub{
  opacity:1;
  transform:none;
}

/* BUTTON */
.cta-btn{
  transform:scale(0.7);
  transition:all .8s cubic-bezier(.34,1.56,.64,1) .55s;
}

.cta-wrap.show .cta-btn{
  opacity:1;
  transform:scale(1);
}

/* ================= BIG TITLE ================= */

.cta-title{
  text-align:center;
}

.cta-white{
  display:block;
  color:#ffffff;
}

.cta-gradient{
  display:block;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Desktop sizes */
@media(min-width:1400px){
  .cta-white{font-size:86px;}
  .cta-gradient{font-size:104px;}
}

/* ================= SUB TEXT ================= */

.cta-sub{
  font-size:20px;
  color:#e5e7eb;
  margin-bottom:40px;
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

/* ================= BUTTON ================= */

.cta-btn{
  display:inline-flex;
  align-items:center;
  gap:12px;
  padding:18px 44px;
  border-radius:999px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  color:#ffffff;
  font-size:16px;
  font-weight:900;
  letter-spacing:0.14em;
  border:none;
  cursor:pointer;
  box-shadow:
    0 20px 60px rgba(139,92,246,0.45),
    0 0 35px rgba(236,72,153,0.35);
}

.cta-btn:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:
    0 30px 90px rgba(139,92,246,0.6),
    0 0 45px rgba(236,72,153,0.5);
}

.cta-btn span{
  font-size:22px;
}

/* ================= MOBILE ================= */

@media(max-width:768px){
  .cta-white{font-size:36px;}
  .cta-gradient{font-size:44px;}
  .cta-sub{
    font-size:16px;
    flex-direction:column;
  }
}
    `;

    const id = "cta-style-super";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* ===== SCROLL OBSERVER ===== */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-wrap" ref={sectionRef}>
      <div className="cta-bg"></div>
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <h2 className="cta-title">
          <span className="cta-white">Ready to transform your</span><br />
          <span className="cta-gradient">business?</span>
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


function Vission() {
  const sectionRef = useRef(null);

 
useEffect(() => {
  const section = sectionRef.current;

  const header = section.querySelector(".vision-header");
  const image = section.querySelector(".vision-image-glow");
  const divider = section.querySelector(".vision-divider");
  const paragraphs = section.querySelectorAll(".vision-text p");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.classList.add("reveal");
          divider.classList.add("draw");
          image.classList.add("reveal");

          paragraphs.forEach((p, i) => {
            setTimeout(() => p.classList.add("reveal"), i * 180);
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      {/* HEADER */}
      <div className="vision-header">
        <h2 className="vision-title">
          <span className="vision-title-white">Our Vision</span>
          <span className="vision-title-gradient">
            Driving Digital Growth
          </span>
        </h2>
        <div className="vision-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="vision-container">

        {/* IMAGE – LEFT */}
        <div className="vision-image">
          <div className="vision-image-glow">
            <img src="/images/vission.png" alt="Our Vision" />
          </div>
        </div>

        {/* TEXT – RIGHT */}
        <div className="vision-text">
          <p>
            At SHA Infotechnology, we believe sustainable growth comes from the
            right blend of creativity, performance marketing, and modern
            technology—built to scale with your business.
          </p>

          <p>
            We aim to empower brands to build a powerful online presence,
            strengthen customer trust, and achieve long-term success in an
            ever-evolving digital landscape.
          </p>

          <p>
            Our vision is to create digital solutions that are not only visually
            compelling but also strategically designed to deliver real business
            impact.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
/* ================= VISION SECTION ================= */
/* ===== EXTRA POLISH ANIMATIONS ===== */

/* Divider draw */
.vision-divider{
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .8s ease .2s;
}

.vision-divider.draw{
  transform:scaleX(1);
}

/* Background pulse on reveal */
.vision-section::after{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at center, rgba(139,92,246,.12), transparent 70%);
  opacity:0;
  transition:opacity 1s ease;
  pointer-events:none;
}

.vision-section.reveal-bg::after{
  opacity:1;
}

/* Image parallax feel */
.vision-image-glow{
  will-change:transform;
}

/* Paragraph wave reveal */
.vision-text p{
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.16,1,.3,1);
}

/* Extra depth shadow on reveal */
// .vision-image-glow.reveal img{
//   box-shadow:
//     0 40px 120px rgba(168,85,247,.35),
//     0 0 80px rgba(236,72,153,.25);
// }

.vision-section {
  padding: 20px 4vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family: Inter, system-ui, sans-serif;
  color: #e5e7eb;
  overflow:hidden;
}

/* ===== HEADER ===== */
.vision-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 70px;
  opacity:0;
  transform:translateY(30px);
  transition:all .9s ease;
  margin-bottom:0px;
}

.vision-header.reveal{
  opacity:1;
  transform:none;
}

.vision-title {
  font-size: clamp(34px, 4vw, 56px);
  font-weight: 800;
  line-height: 1.2;
}

.vision-title-white {
  display: block;
  color: #ffffff;
}

.vision-title-gradient {
  display: block;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.vision-divider {
  width: 90px;
  height: 3px;
  background: #8b5cf6;
  margin: 22px auto 0;
  border-radius: 2px;
}

/* ===== LAYOUT ===== */
.vision-container {
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1.1fr;
  // gap: 60px;
  align-items: center;
  margin-top:0px;
}

/* ===== IMAGE REVEAL ===== */
.vision-image {
  display: flex;
  justify-content: center;
}

.vision-image-glow {
  position: relative;
  opacity:0;
  transform:scale(0.9);
  transition:all 1s cubic-bezier(.16,1,.3,1);
}

.vision-image-glow.reveal{
  opacity:1;
  transform:scale(1);
}

.vision-image-glow::before {
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

.vision-image-glow img {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
}

/* ===== TEXT REVEAL ===== */
.vision-text p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 10px;
  color: #cbd5f5;
  font-style:bold;

  opacity:0;
  transform:translateY(24px);
  transition:all .8s ease;
}

.vision-text p.reveal{
  opacity:1;
  transform:none;
}

/* ===== MOBILE ===== */
@media (max-width: 900px) {
  .vision-container {
    grid-template-columns: 1fr;
  }
}
      `}</style>
    </section>
  );
}




function IdeasSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= IDEAS SECTION ================= */

.ideas-section{
  padding:100px 6vw;
  background:radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  overflow:hidden;
}

.ideas-container{
  max-width:1200px;
  margin:0 auto;
}

/* ===== HEADING ===== */
.ideas-heading{
  text-align:center;
  margin-bottom:60px;
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.ideas-heading.show{
  opacity:1;
  transform:none;
}

.ideas-heading h2{
  font-size:44px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== GRID ===== */
.ideas-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:32px;
}

/* ===== CARD (LEFT → RIGHT REVEAL) ===== */
.idea-card{
  background:rgba(255,255,255,0.04);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  border-radius:22px;
  padding:34px 30px;
  box-shadow:
    0 25px 70px rgba(0,0,0,0.6),
    inset 0 0 0 1px rgba(255,255,255,0.06);

  /* REVEAL BASE */
  opacity:0;
  transform:translateX(-60px);
  transition:
    opacity .7s ease,
    transform .7s cubic-bezier(.16,1,.3,1);
}

.idea-card.show{
  opacity:1;
  transform:translateX(0);
}

/* CARD TITLE */
.idea-card h3{
  font-size:22px;
  font-weight:800;
  margin-bottom:16px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* CARD TEXT */
.idea-card p{
  font-size:16px;
  line-height:1.8;
  color:#e5e7eb;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .ideas-section{
    padding:70px 6vw;
  }

  .ideas-grid{
    grid-template-columns:1fr;
    gap:26px;
  }

  .ideas-heading h2{
    font-size:32px;
  }

  /* Mobile: slide UP instead of sideways */
  .idea-card{
    transform:translateY(30px);
  }

  .idea-card.show{
    transform:none;
  }
}
    `;

    const id = "ideas-section-style-left-right";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* ================= SCROLL REVEAL ================= */
    const section = sectionRef.current;
    const heading = section.querySelector(".ideas-heading");
    const cards = section.querySelectorAll(".idea-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heading.classList.add("show");

            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("show");
              }, i * 180); // LEFT → RIGHT STAGGER
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ideas-section" ref={sectionRef}>
      <div className="ideas-container">

        {/* HEADING */}
        <div className="ideas-heading">
          <h2>The Ideas That Drive Everything We Do</h2>
        </div>

        {/* CARDS */}
        <div className="ideas-grid">

          <div className="idea-card">
            <h3>Core Purpose</h3>
            <p>
              To guide businesses from confusion to confidence by delivering
              clear digital strategies that turn ideas into measurable growth.
            </p>
          </div>

          <div className="idea-card">
            <h3>Core Values</h3>
            <p>
              Driven by transparency, responsibility, continuous learning, and
              respect for our clients. These principles influence every
              decision, strategy, and solution we create.
            </p>
          </div>

          <div className="idea-card">
            <h3>Our Passion</h3>
            <p>
              We are passionate about creating digital experiences that deliver
              real impact—websites, marketing campaigns, and strategies designed
              to produce meaningful results.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


function WhyChooseSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= WHY CHOOSE SECTION ================= */

.why-section{
  padding:120px 6vw;
  background:radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  overflow:hidden;
}

.why-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.why-title{
  text-align:center;
  margin-bottom:80px;
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.why-title.show{
  opacity:1;
  transform:none;
}

.why-title h2{
  font-size:46px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== GRID ===== */
.why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:40px;
  justify-items:center;
}

/* ===== CARD ===== */
.why-card{
  width:360px;
  height:430px;
  background:#ffffff;
  border-radius:26px;
  padding:48px 36px;
  text-align:center;
  box-shadow:0 30px 80px rgba(0,0,0,0.35);
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  position:relative;

  opacity:0;
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.16,1,.3,1);
}

/* SLIDE DIRECTIONS */
.slide-left{
  transform:translateX(-80px);
}

.slide-right{
  transform:translateX(80px);
}

.why-card.show{
  opacity:1;
  transform:translateX(0);
}

/* ICON */
.why-icon{
  width:84px;
  height:84px;
  margin:0 auto 26px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffe4e6;
}

.why-icon span{
  font-size:80px;
}

/* TITLE */
.why-card h3{
  font-size:22px;
  font-weight:800;
  margin-bottom:18px;
  color:#ff1f1f;
}

.why-card h3::after{
  content:"";
  display:block;
  width:40px;
  height:3px;
  margin:10px auto 0;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  border-radius:6px;
}

/* TEXT */
.why-card .para{
  font-size:16px;
  line-height:1.8;
  color:#000000;
}
.why-card .para{
  letter-spacing:0.2px;
  text-rendering:optimizeLegibility;
}
/* BORDER */
.why-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:26px;
  padding:1.5px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
}

/* HOVER */
.why-card:hover{
  transform:translateY(-10px);
  box-shadow:0 45px 120px rgba(0,0,0,0.45);
}

.why-card .para{
  font-size:16px;
  line-height:1.8;

  color:#000000 !important;   /* 🔥 PURE BLACK */
  opacity:1 !important;       /* 🔥 NO FADE */
  visibility:visible !important;
}
/* ===== MOBILE ===== */
@media(max-width:900px){
  .why-grid{
    grid-template-columns:1fr;
    gap:32px;
  }

  .why-card{
    width:100%;
    height:auto;
    transform:translateY(40px);
  }

  .why-card.show{
    transform:none;
  }

  .why-title h2{
    font-size:32px;
  }
}

/* ================= WHY CHOOSE – MOBILE HARD FIX ================= */

@media (max-width: 768px){

  /* SECTION SPACING */
  .why-section{
    padding:70px 20px;
  }

  /* TITLE */
  .why-title{
    margin-bottom:40px;
  }

  .why-title h2{
    font-size:28px;
    line-height:1.2;
  }

  /* GRID → STACK */
  .why-grid{
    grid-template-columns:1fr;
    gap:28px;
  }

  /* CARD RESET */
  .why-card{
    width:100%;
    height:auto;
    padding:34px 22px;
    transform:none !important;     /* 🔥 stops split */
  }

  /* DISABLE DESKTOP SLIDE ANIMATIONS */
  .slide-left,
  .slide-right{
    transform:none !important;
  }

  .why-card.show{
    transform:none !important;
    opacity:1;
  }

  /* DISABLE HOVER ON MOBILE */
  .why-card:hover{
    transform:none;
    box-shadow:0 30px 80px rgba(0,0,0,0.35);
  }

  /* ICON FIX */
  .why-icon{
    width:64px;
    height:64px;
    margin-bottom:18px;
  }

  .why-icon span{
    font-size:36px;
  }

  /* HEADING */
  .why-card h3{
    font-size:18px;
    margin-bottom:14px;
  }

  /* TEXT */
  .why-card .para{
    font-size:15px;
    line-height:1.65;
  }
}

/* ================= WHY CHOOSE – MOBILE VISIBILITY FIX ================= */

@media (max-width: 768px){

  /* FORCE SHOW EVERYTHING */
  .why-title,
  .why-card{
    opacity:1 !important;
    transform:none !important;
    visibility:visible !important;
  }

  /* STOP OBSERVER-DEPENDENT STATES */
  .slide-left,
  .slide-right{
    transform:none !important;
  }
}


    `;

    const id = "why-choose-slide-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* ===== SCROLL REVEAL ===== */
    const section = sectionRef.current;
    const title = section.querySelector(".why-title");
    const cards = section.querySelectorAll(".why-card");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            title.classList.add("show");

            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("show");
              }, i * 140);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">

        <div className="why-title">
          <h2>Why Choose Shainfotechnology</h2>
        </div>

        <div className="why-grid">

  <div className="why-card slide-left">
    <div className="why-icon"><span>🖥️</span></div>
    <h3>End-to-End Website Development</h3>
    <p className="para">
      We design and develop high-performance websites that are fast, responsive,
      and built to convert. From UI design to backend functionality, every site
      is crafted to support your business goals.
    </p>
  </div>

  <div className="why-card slide-right">
    <div className="why-icon"><span>📊</span></div>
    <h3>SEO Strategies That Drive Growth</h3>
    <p className="para">
      Our SEO approach focuses on visibility that matters. We help your business
      rank for high-intent keywords, attract qualified traffic, and generate
      consistent enquiries.
    </p>
  </div>

  <div className="why-card slide-left">
    <div className="why-icon"><span>🚀</span></div>
    <h3>High-ROI Google Ads & PPC</h3>
    <p className="para">
      We create and manage targeted Google Ads campaigns that maximise ROI.
      From keyword research to conversion tracking, our paid strategies deliver
      faster and measurable results.
    </p>
  </div>

  <div className="why-card slide-right">
    <div className="why-icon"><span>🛍️</span></div>
    <h3>Scalable E-Commerce Solutions</h3>
    <p className="para">
      We build secure, scalable e-commerce platforms with smooth user experiences,
      optimised checkout flows, and mobile-first design to increase online sales.
    </p>
  </div>

  <div className="why-card slide-left">
    <div className="why-icon"><span>📢</span></div>
    <h3>Result-Focused Social Media Marketing</h3>
    <p className="para">
      Our social media strategies go beyond likes and followers. We create
      engaging campaigns that strengthen brand presence and connect with the
      right audience.
    </p>
  </div>

  <div className="why-card slide-right">
    <div className="why-icon"><span>🔍</span></div>
    <h3>Transparent Process & Ongoing Support</h3>
    <p className="para">
      We believe in complete transparency. With clear communication, regular
      updates, and ongoing support, you always know what we’re doing and how
      your business is growing.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}





function TeamSection() {
  useEffect(() => {
  const css = `
/* ================= TEAM SECTION ================= */

.team-section{
  padding:120px 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  overflow:hidden;
}

.team-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.team-title{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.team-section.show .team-title{
  opacity:1;
  transform:none;
}

.team-title h2{
  font-size:46px;
  font-weight:900;
  margin-bottom:12px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.team-title p{
  font-size:18px;
  color:#cbd5f5;
  line-height:1.6;
}

/* ===== GRID ===== */
.team-grid{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:40px;
}

/* ===== CARD ===== */
.team-card{
  width:380px;
  background:#0a0f1d;
  border-radius:22px;
  overflow:hidden;
  box-shadow:0 25px 70px rgba(0,0,0,0.6);

  opacity:0;
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.16,1,.3,1);
}

/* DESKTOP SLIDE */
.team-card.from-left{ transform:translateX(-60px); }
.team-card.from-right{ transform:translateX(60px); }

.team-card.show{
  opacity:1;
  transform:none;
}

.team-card:hover{
  transform:translateY(-8px);
}

/* IMAGE */
.team-image{
  width:100%;
  height:300px;
  overflow:hidden;
}

.team-image img{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* INFO */
.team-info{
  padding:22px 24px 26px;
}

.team-role{
  font-size:13px;
  letter-spacing:2px;
  color:#9ca3af;
  margin-bottom:6px;
}

.team-name{
  font-size:20px;
  font-weight:800;
  color:#ffffff;
}

/* ================= MOBILE RESPONSIVE ================= */

@media(max-width:1024px){
  .team-card{
    width:320px;
  }
}

@media(max-width:900px){
  .team-section{
    padding:90px 5vw;
  }

  .team-title{
    margin-bottom:50px;
  }

  .team-title h2{
    font-size:32px;
  }

  .team-title p{
    font-size:15px;
  }

  .team-grid{
    gap:28px;
  }

  .team-card{
    width:100%;
    max-width:420px;

    /* MOBILE animation becomes vertical */
    transform:translateY(40px) !important;
  }

  .team-card.show{
    transform:none !important;
  }

  .team-image{
    height:240px;
  }

  .team-name{
    font-size:18px;
  }
}

@media(max-width:480px){
  .team-section{
    padding:70px 4vw;
  }

  .team-title h2{
    font-size:28px;
  }

  .team-image{
    height:210px;
  }

  .team-info{
    padding:18px;
  }
}

/* ================= MOBILE CARD FIX ================= */

@media (max-width: 768px){

  .team-grid{
    gap:24px;
  }

  .team-card{
    width:100% !important;
    max-width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
  }

  .team-image{
    height:180px;
    width:100%;
  }
.team-card.from-left{
  transform:translateX(-60px);
}
.team-card.from-right{
  transform:translateX(60px);
}
.team-card:hover{
  transform:translateY(-8px);
}
  .team-image img{
    object-fit:contain;   /* ⬅ prevents face cut */
    padding:12px;
  }

  .team-info{
    padding:16px 14px 20px;
  }

  .team-role{
    font-size:12px;
    letter-spacing:1.5px;
  }

  .team-name{
    font-size:17px;
    line-height:1.3;
    white-space:normal;
  }
}

/* ================= MOBILE HARD FIX ================= */

@media (max-width: 768px){

  /* STOP SPLITTING */
  .team-card,
  .team-card.from-left,
  .team-card.from-right,
  .team-card:hover{
    transform:none !important;
  }

  /* FORCE SINGLE CARD LAYOUT */
  .team-card{
    width:100%;
    max-width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
  }

  /* IMAGE FIX */
  .team-image{
    width:100%;
    height:auto;
    padding:16px 0;
    display:flex;
    justify-content:center;
  }

  .team-image img{
    width:120px;
    height:120px;
    object-fit:cover;
    border-radius:50%;
  }

  /* TEXT FIX */
  .team-info{
    padding:14px 16px 22px;
    text-align:center;
  }

  .team-role{
    font-size:12px;
    letter-spacing:1.4px;
  }

  .team-name{
    font-size:16px;
    line-height:1.3;
  }
}


  `;

  const id = "team-section-animated-style";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  /* SCROLL REVEAL */
  const section = document.querySelector(".team-section");
  const cards = document.querySelectorAll(".team-card");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("show");
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add("show"), i * 150);
        });
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);
  return () => observer.disconnect();
}, []);


  return (
    <section className="team-section">
      <div className="team-container">

        {/* TITLE */}
        <div className="team-title">
          <h2>Meet the People Behind the Work.</h2>
          <p>
            The team that turns ideas into powerful digital solutions.
            <br />
            We believe great results come from teamwork and trust.
          </p>
        </div>

        {/* TEAM CARDS */}
        <div className="team-grid">

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/m.jpeg" alt="Prasanth V" />
            </div>
            <div className="team-info">
              <div className="team-role">PROJECT MANAGER</div>
              <div className="team-name">Prasanth V</div>
            </div>
          </div>

          <div className="team-card from-right">
            <div className="team-image">
              <img src="/images/about/r.jpeg" alt="Ramya" />
            </div>
            <div className="team-info">
              <div className="team-role">PROJECT MANAGER</div>
              <div className="team-name">Ramya</div>
            </div>
          </div>

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/s.png" alt="Sowndarya S" />
            </div>
            <div className="team-info">
              <div className="team-role">WEB DEVELOPER</div>
              <div className="team-name">Sowndarya S</div>
            </div>
          </div>

          <div className="team-card from-right">
            <div className="team-image">
              <img src="/images/about/s.png" alt="Gayathri S" />
            </div>
            <div className="team-info">
              <div className="team-role">TEAM LEAD</div>
              <div className="team-name">Gayathri S</div>
            </div>
          </div>

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/s.png" alt="Sathish Kumar" />
            </div>
            <div className="team-info">
              <div className="team-role">MANAGEMENT</div>
              <div className="team-name">Sathish Kumar</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



function MeetTheTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= MISSION SECTION ================= */

.mission-section{
  padding:120px 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  overflow:hidden;
}

.mission-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.mission-heading{
  text-align:center;
  margin-bottom:80px;
  line-height:1.2;

  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.mission-section.show .mission-heading{
  opacity:1;
  transform:none;
}

.mission-heading .white{
  display:block;
  font-size:42px;
  font-weight:800;
  color:#ffffff;
}

.mission-heading .gradient{
  display:block;
  font-size:54px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.mission-heading::after{
  content:"";
  width:120px;
  height:4px;
  background:#ffffff;
  display:block;
  margin:22px auto 0;
  opacity:0.7;
}

/* ===== GRID ===== */
.mission-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:70px;
  align-items:center;
}

/* ===== TEXT WRAP ===== */
.mission-text{
  opacity:1;
}

/* TEXT ITEMS (STAGGER) */
.mission-text p,
.mission-points li{
  opacity:0;
  transform:translateY(20px);
  transition:
    opacity .7s ease,
    transform .7s cubic-bezier(.16,1,.3,1);
}

.mission-section.show .mission-text p.show,
.mission-section.show .mission-points li.show{
  opacity:1;
  transform:none;
}

/* TEXT STYLES */
.mission-text p{
  font-size:18px;
  line-height:1.9;
  color:#f1f1f1;
  margin-bottom:22px;
  max-width:640px;
}

.mission-points{
  margin-top:24px;
  padding-left:18px;
}

.mission-points li{
  margin-bottom:14px;
  font-size:17px;
  color:#d1d5db;
}

/* ===== IMAGE (UNCHANGED) ===== */
.mission-image{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.mission-image img{
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  border-radius: 58px;
  box-shadow:
    0 40px 120px rgba(139,92,246,0.35),
    0 20px 60px rgba(236,72,153,0.25);
}

.mission-image::before{
  content:"";
  position:absolute;
  inset:-60px;
  background:
    radial-gradient(
      circle,
      rgba(139,92,246,0.45),
      rgba(236,72,153,0.25),
      transparent 70%
    );
  filter:blur(50px);
  z-index:1;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .mission-grid{
    grid-template-columns:1fr;
    gap:40px;
  }

  .mission-heading .white{font-size:28px;}
  .mission-heading .gradient{font-size:34px;}

  .mission-text p{
    font-size:15px;
    line-height:1.7;
  }

  .mission-image img{
    max-width:420px;
  }
}
    `;

    const id = "mission-text-animation-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* ===== SCROLL REVEAL ===== */
    const section = sectionRef.current;
    const textItems = section.querySelectorAll(
      ".mission-text p, .mission-points li"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");

          textItems.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("show");
            }, i * 160);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      <div className="mission-container">

        {/* TITLE */}
        <h2 className="mission-heading">
          <span className="white">Meet the Team</span>
          <span className="gradient">The People Behind the Pixels</span>
        </h2>

        <div className="mission-grid">

          {/* TEXT */}
          <div className="mission-text">
            <p>
              At SHA Infotechnology, our strength lies in the people behind the work.
              We are a passionate team of strategists, developers, designers, and
              digital specialists dedicated to helping businesses succeed online.
            </p>

            <p>
              Each team member brings unique skills and experience, working
              collaboratively to deliver high-quality websites, powerful SEO
              strategies, and result-driven digital marketing solutions.
            </p>

            <ul className="mission-points">
              <li>Collaborative and transparent work culture</li>
              <li>Strong focus on quality, performance, and results</li>
              <li>Long-term partnerships and measurable growth</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="mission-image">
            <img
              src="/images/meetourteam.png"
              alt="SEO & Digital Growth Illustration"
              draggable="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}



function AboutMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= ABOUT MISSION ================= */

.aboutmission-section{
  padding:100px 8vw;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  font-family:Inter,system-ui,sans-serif;
  color:#e5e7eb;
  overflow:hidden;
}

/* ===== HEADER ===== */
.aboutmission-header{
  text-align:center;
  max-width:900px;
  margin:0 auto 70px;
}

/* TITLE (SCALE + SHIMMER) */
.aboutmission-title{
  font-size:clamp(34px,4vw,56px);
  font-weight:800;
  line-height:1.2;
  margin-bottom:20px;

  opacity:0;
  transform:scale(.94);
  transition:all .9s ease;
}

.aboutmission-section.show .aboutmission-title{
  opacity:1;
  transform:scale(1);
}

.aboutmission-title-gradient{
  display:block;
  background-size:200% auto;
  background-image:linear-gradient(
    90deg,
    #8b5cf6,
    #ec4899,
    #8b5cf6
  );
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:shimmer 3s linear infinite;
}

@keyframes shimmer{
  0%{background-position:0% center}
  100%{background-position:200% center}
}

.aboutmission-title-white{
  display:block;
  color:#ffffff;
}

/* DIVIDER (DRAW FROM CENTER) */
.aboutmission-divider{
  width:0;
  height:3px;
  background:#8b5cf6;
  margin:22px auto 0;
  border-radius:2px;
  transition:width .8s ease .3s;
}

.aboutmission-section.show .aboutmission-divider{
  width:90px;
}

/* ===== CONTENT GRID ===== */
.aboutmission-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap:60px;
  align-items:center;
}

/* ===== TEXT (CLIP REVEAL – UNIQUE) ===== */
.aboutmission-text p{
  font-size:16px;
  line-height:1.8;
  margin-bottom:18px;
  color:#cbd5f5;

  opacity:0;
  clip-path:inset(0 0 100% 0);
  transition:
    opacity .6s ease,
    clip-path .8s cubic-bezier(.16,1,.3,1);
}

.aboutmission-text p.show{
  opacity:1;
  clip-path:inset(0 0 0 0);
}

/* ===== IMAGE (FLOAT + GLOW PULSE) ===== */
.aboutmission-image{
  display:flex;
  justify-content:center;
  align-items:center;

  opacity:0;
  transform:translateY(30px);
  transition:all 1s ease .4s;
}

.aboutmission-section.show .aboutmission-image{
  opacity:1;
  transform:none;
}

.aboutmission-image-glow{
  position:relative;
  animation:float 6s ease-in-out infinite;
}

@keyframes float{
  0%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
  100%{transform:translateY(0)}
}

.aboutmission-image-glow::before{
  content:"";
  position:absolute;
  inset:-70px;
  background:radial-gradient(
    circle,
    rgba(168,85,247,0.6),
    rgba(236,72,153,0.35),
    transparent 70%
  );
  filter:blur(65px);
  z-index:0;
  animation:glowPulse 3.5s ease-in-out infinite;
}

@keyframes glowPulse{
  0%,100%{opacity:.6}
  50%{opacity:1}
}

.aboutmission-image-glow img{
  position:relative;
  z-index:2;
  width:100%;
  max-width:520px;
  border-radius:10px;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .aboutmission-container{
    grid-template-columns:1fr;
  }

  .aboutmission-text{
    text-align:center;
  }

  .aboutmission-image{
    margin-top:40px;
  }
}
    `;

    const id = "aboutmission-unique-animation";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* ===== SCROLL REVEAL ===== */
    const section = sectionRef.current;
    const textLines = section.querySelectorAll(".aboutmission-text p");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");

          textLines.forEach((p, i) => {
            setTimeout(() => {
              p.classList.add("show");
            }, i * 180);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutmission-section" ref={sectionRef}>
      {/* HEADER */}
      <div className="aboutmission-header">
        <h2 className="aboutmission-title">
          <span className="aboutmission-title-white">Our Mission</span>
          <span className="aboutmission-title-gradient">
            Turning Vision Into Results
          </span>
        </h2>
        <div className="aboutmission-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="aboutmission-container">
        <div className="aboutmission-text">
          <p>
            Our mission is to help businesses grow by delivering impactful
            digital marketing and software solutions that generate real,
            measurable outcomes.
          </p>

          <p>
            We focus on building strong digital foundations that support
            long-term success—combining strategy, creativity, and technology
            to improve brand visibility, customer engagement, and revenue growth.
          </p>

          <p>
            Through data-driven decision-making, continuous optimization,
            and a client-first mindset, we ensure every business we work with
            grows smarter, faster, and with confidence.
          </p>
        </div>

        <div className="aboutmission-image">
          <div className="aboutmission-image-glow">
            <img src="/images/mission.png" alt="SEO Marketing" />
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
  --bg-dark-2:#0b1220;
  --violet:#8b5cf6;
  --pink:#ec4899;
  --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
}

*{ box-sizing:border-box; }
body{ margin:0; padding:0; }

/* ================= HERO ================= */

.home-hero{
  min-height:100vh;
  padding:40px 8vw 60px;
  background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
  display:grid;
  grid-template-columns:1fr 1.1fr;
  align-items:center;
  gap:60px;
  font-family:Inter,system-ui,sans-serif;
  overflow:hidden;
}

/* ================= IMAGE ================= */

.hero-image-wrap{
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events:none;

  opacity:0;
  transform:translateY(40px) scale(.96);
  animation:heroImageIn 1.2s cubic-bezier(.16,1,.3,1) forwards;
}

@keyframes heroImageIn{
  to{
    opacity:1;
    transform:none;
  }
}

.hero-image{
  width:100%;
  max-width:460px;
  height:auto;
  filter:drop-shadow(0 50px 120px rgba(139,92,246,0.4));
  animation:floatHero 6s ease-in-out infinite;
}

@keyframes floatHero{
  0%{ transform:translateY(0); }
  50%{ transform:translateY(-16px); }
  100%{ transform:translateY(0); }
}

/* ================= TEXT ================= */

.hero-text{
  pointer-events:none;
  max-width:560px;
}

/* SMALL TEXT */
.hero-text small{
  font-size:20px;
  letter-spacing:0.1em;
  color:#c7d2fe;
  font-weight:700;
  margin-bottom:20px;
  display:block;

  opacity:0;
  transform:translateY(20px);
  animation:fadeUp .8s ease .3s forwards;
}

/* TITLE */
.hero-text h1{
  font-size:clamp(52px,6.5vw,80px);
  line-height:1.1;
  margin:0 0 30px;
  color:#ffffff;
  font-weight:900;

  overflow:hidden;
}

.hero-text h1 span,
.hero-text h1 br{
  display:block;
}

.hero-text h1{
  opacity:0;
  transform:translateY(30px);
  animation:fadeUp 1s cubic-bezier(.16,1,.3,1) .5s forwards;
}

/* GRADIENT */
.gradient-text{
  background:linear-gradient(90deg,#a78bfa,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-weight:900;
}

/* PARAGRAPHS */
.hero-text p{
  max-width:560px;
  font-size:18px;
  line-height:1.8;
  color:#e5e7eb;
  margin-bottom:24px;

  opacity:0;
  transform:translateY(20px);
}

.hero-text p:nth-of-type(1){
  animation:fadeUp .8s ease .8s forwards;
}

.hero-text p:nth-of-type(2){
  animation:fadeUp .8s ease 1s forwards;
}

/* TAGS (if added later) */
.hero-tags{
  display:flex;
  flex-wrap:wrap;
  gap:14px;
}

/* COMMON */
@keyframes fadeUp{
  to{
    opacity:1;
    transform:none;
  }
}

/* ================= MOBILE ================= */

@media(max-width:900px){
  .home-hero{
    grid-template-columns:1fr;
    padding:80px 6vw;
    text-align:center;
  }

  .hero-image{
    max-width:420px;
    margin-bottom:40px;
  }

  .hero-text p{
    margin-left:auto;
    margin-right:auto;
    font-size:14px;
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

      {/* LEFT IMAGE */}
      <div className="hero-image-wrap">
        <img
          src="/images/about3d.png"
          alt="Digital Marketing Illustration"
          className="hero-image"
          draggable="false"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="hero-text">
        <small>
          Your <span className="gradient-text">Success Story</span>
        </small>

        <h1>
          Starts <br /> Now!
        </h1>

        <p>
          <strong>SHA Infotechnology</strong> is a full-service digital marketing
          and technology company focused on helping businesses build a strong
          online presence and grow with confidence.
        </p>

        <p>
          From SEO and paid advertising to social media marketing and smart
          website development, we craft digital strategies that attract the
          right audience and turn visitors into real customers. Our goal is
          simple: deliver solutions that work in the real world and drive
          measurable results.
        </p>
      </div>

    </section>
  );
}





// function HomeHerohead() {
//   useEffect(() => {
//     const css = `
//       :root{
//         --bg-dark:#020617;
//         --bg-dark-2:#0b1220;
//         --violet:#8b5cf6;
//         --pink:#ec4899;
//         --muted:#9ca3af;
//         --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
//       }

//       *{
//         box-sizing:border-box;
//       }
// body{
//   margin:0;
//   padding:0;
// }
//       .home-hero{
//         min-height:100vh;
//   padding:40px 8vw 60px;
//         background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
//         display:grid;
//         grid-template-columns:1fr 1.1fr; /* IMAGE LEFT, TEXT RIGHT */
//         align-items:center;
//         gap:60px;
//         font-family:Inter,system-ui,sans-serif;
//         overflow:hidden;
//       }

//       /* IMAGE (LEFT) */
//       .hero-image-wrap{
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         pointer-events:none;
//       }

//       .hero-image{
//   width:100%;
//   max-width:460px;   /* ⬅ reduced size */
//   height:auto;
//   filter:drop-shadow(0 50px 120px rgba(139,92,246,0.4));
// }


//       /* TEXT (RIGHT) */
//       .hero-text{
//   pointer-events:none;
//   max-width:560px;
// }

//   .hero-text small{
//   font-size:20px;        /* ⬅ BIGGER */
//   letter-spacing:0.1em;
//   color:#c7d2fe;
//   font-weight:700;
//   margin-bottom:20px;
// }



//  .hero-text h1{
//   font-size:clamp(52px,6.5vw,80px);  /* ⬅ MUCH BIGGER */
//   line-height:1.1;
//   margin:0 0 30px;
//   color:#ffffff;
//   font-weight:900;
// }



//   .gradient-text{
//   background:linear-gradient(90deg,#a78bfa,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
//   font-weight:900;
// }



//    .hero-text p{
//   max-width:560px;
//   font-size:18px;        /* ⬅ BIGGER */
//   line-height:1.8;
//   color:#e5e7eb;
//   margin-bottom:24px;
// }



//       .hero-tags{
//         display:flex;
//         flex-wrap:wrap;
//         gap:14px;
//       }

//       .hero-tags span{
//         padding:10px 16px;
//         border-radius:14px;
//         background:rgba(139,92,246,0.12);
//         color:#e5e7eb;
//         font-size:14px;
//         border:1px solid rgba(139,92,246,0.25);
//       }

//       /* MOBILE */
//       @media(max-width:900px){
//         .home-hero{
//           grid-template-columns:1fr;
//           padding:80px 6vw;
//           text-align:center;
//         }

//         .hero-image{
//           max-width:420px;
//           margin-bottom:40px;
//         }

//         .hero-text p{
//           margin-left:auto;
//           margin-right:auto;
//           font-size:14px;
//         }

//         .hero-tags{
//           justify-content:center;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <section className="home-hero">

//       {/* LEFT IMAGE */}
//       <div className="hero-image-wrap">
//         <img
//           src="/images/about3d.png"
//           alt="Digital Marketing Illustration"
//           className="hero-image"
//           draggable="false"
//         />
//       </div>

//       {/* RIGHT TEXT */}
//       <div className="hero-text">
//   <small>
//     Your <span className="gradient-text">Success Story</span>
//   </small>

//   <h1>
//     Starts <br />
//     Now!
//   </h1>

//   <p>
//     <strong>SHA Infotechnology</strong> is a full-service digital marketing and technology company focused on helping businesses build a strong online presence and grow with confidence.
//   </p>

//   <p>
//     From SEO and paid advertising to social media marketing and smart website development, we craft digital strategies that attract the right audience and turn visitors into real customers. Our goal is simple: deliver solutions that work in the real world and drive measurable results.
//   </p>
// </div>


//     </section>
//   );
// }

// ========================= ABOUT PAGE MAIN =========================
export default function AboutPage() {
  

  useEffect(() => {
    const css = `
      :root{
        --accent-red:#B90504;
       background: radial-gradient(circle at top, #0b1220, #020617 70%);
        --card-grey:#F5F5F5;
        --text-dark:#202326;
      }

      *{box-sizing:border-box;}
      body{margin:0;}

   .about-wrap{
  min-height:100vh;
  background: radial-gradient(circle at top, #1e293b, #020617 75%);
  color:#e5e7eb;
  font-family:Inter, system-ui, sans-serif;
}


    
      .about-section{
        padding:80px 7vw;
        border-bottom:1px solid rgba(0,0,0,0.04);
      }
      .about-max{
        max-width:1100px;
        margin:0 auto;
      }
      .about-section h2{
        font-size:42px;
        font-weight:900;
        margin:0 0 18px 0;
        color:var(--text-dark);
        transition:color 200ms ease;
      }
      .about-lead{
        font-size:18px;
        line-height:1.8;
        color:rgba(30,34,38,0.9);
        transition:color 200ms ease;
      }
      .about-section p{
        transition:color 200ms ease;
      }

      .about-section:not(.about-hero):hover h2{
        color:#555;
      }
      .about-section:not(.about-hero):hover p{
        color:var(--accent-red);
      }

      .about-hero{
        position:relative;
        color:#ffffff;
        overflow:hidden;
        min-height:100vh;
        display:flex;
        align-items:center;
      }

      .about-hero::before{
        content:"";
        position:absolute;
        inset:0;
        background-image:url("/images/about/whoweare.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        filter:brightness(0.45);
        z-index:0;
      }

      .about-hero .about-max{
        position:relative;
        z-index:1;
      }

      .about-hero h2{
        color:#ffffff;
      }
      .about-hero .about-lead{
        color:rgba(255,255,255,0.9);
      }
      .about-hero .who-tag{
        background:rgba(255,255,255,0.12);
        border:1px solid rgba(255,255,255,0.4);
        color:#f5f5f5;
      }

      .who-layout{
        display:grid;
        grid-template-columns:minmax(0,1.2fr) minmax(0,1.1fr);
        gap:40px;
        align-items:flex-start;
      }
      .who-tag{
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:4px 10px;
        border-radius:999px;
        font-size:12px;
        letter-spacing:0.12em;
        text-transform:uppercase;
        margin-bottom:14px;
      }

      .who-card{
        background:rgba(255,255,255,0.98);
        padding:26px 28px;
        border-radius:18px;
        box-shadow:0 22px 60px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.05);
        transition:transform 220ms ease, box-shadow 220ms ease;
        color:var(--text-dark);
      }
      .who-card h3,
      .who-card p{
        color:var(--text-dark);
      }
      .who-card:hover{
        transform:translateY(-8px);
        box-shadow:0 30px 80px rgba(185,5,4,0.35);
      }

      .quote-section{
        background:var(--bg-grey);
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .quote-card{
        position:relative;
        max-width:1120px;
        width:100%;
        margin:0 auto;
        padding:96px 8vw;
        background:#ffffff;
        border-radius:40px;
        box-shadow:
          0 40px 120px rgba(185,5,4,0.28),
          0 0 0 1px rgba(0,0,0,0.04);
        overflow:hidden;
        animation:floatCard 10s ease-in-out infinite;
      }

      @keyframes floatCard{
        0%{transform:translateY(0);}
        25%{transform:translateY(-8px);}
        50%{transform:translateY(0);}
        75%{transform:translateY(6px);}
        100%{transform:translateY(0);}
      }

      .quote-illustration{
        position:absolute;
        right:-40px;
        bottom:-40px;
        width:380px;
        height:260px;
        background-image:url("${BG_QUOTE_IMAGE}");
        background-size:cover;
        background-position:center;
        opacity:0.35;
        filter:drop-shadow(0 18px 40px rgba(185,5,4,0.4));
        pointer-events:none;
        z-index:0;
        animation:floatIllustration 12s ease-in-out infinite alternate;
      }

      .mark{
  width:44px;
  height:44px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffffff;
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

/* ================= USER-FRIENDLY TYPOGRAPHY ================= */

/* Base text */
.about-wrap {
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.2px;
}

/* Section headings */
.about-section h2 {
  font-size: 40px;
  line-height: 1.25;
  font-weight: 800;
  margin-bottom: 18px;
}

/* Paragraphs */
.about-section p,
.about-lead,
.core-sub,
.faq-answer p {
  font-size: 17px;
  line-height: 1.8;
  color: #333;
}

/* Hero title */
.about-hero h2 {
  font-size: 46px;
  line-height: 1.2;
}

/* Quote text */
.quote-text {
  font-size: 21px;
  line-height: 1.7;
  font-weight: 600;
}

/* Team names */
.team-name {
  font-size: 18px;
  font-weight: 800;
}

/* Team roles */
.team-role {
  font-size: 13px;
  letter-spacing: 0.14em;
}

/* Core titles */
.core-title {
  font-size: 19px;
  font-weight: 800;
}

/* FAQ question */
.faq-question {
  font-size: 18px;
  line-height: 1.5;
}

/* ================= MOBILE FRIENDLY ================= */
@media (max-width: 768px) {

  .about-section h2 {
    font-size: 28px;
    line-height: 1.3;
  }

  .about-section p,
  .about-lead,
  .core-sub,
  .faq-answer p {
    font-size: 15px;
    line-height: 1.7;
  }

  .about-hero h2 {
    font-size: 32px;
  }

  .quote-text {
    font-size: 17px;
  }

  .faq-question {
    font-size: 16px;
  }
}

      @keyframes floatIllustration{
        0%{transform:translateY(0) scale(1.02);}
        50%{transform:translateY(-10px) scale(1.05);}
        100%{transform:translateY(4px) scale(1.03);}
      }

      .quote-inner{
        position:relative;
        z-index:1;
        text-align:center;
      }
      .quote-heading{
        font-size:36px;
        font-weight:900;
        color:var(--accent-red);
        margin:0 0 20px 0;
      }
      .quote-text{
        font-size:22px;
        line-height:1.7;
        font-weight:600;
        color:#333;
      }
      .quote-text span{
        color:var(--accent-red);
        font-weight:800;
      }

      .team-grid{
        display:grid;
        grid-template-columns:repeat(3, minmax(0,1fr));
        gap:28px;
      }
      .team-card{
        background:#ffffff;
        border-radius:18px;
        padding:18px 18px 22px;
        box-shadow:0 22px 60px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.05);
        overflow:hidden;
        display:flex;
        flex-direction:column;
        transform:translateY(0);
        transition:transform 220ms ease, box-shadow 220ms ease;
      }
      .team-card:hover{
        transform:translateY(-10px);
        box-shadow:0 30px 80px rgba(185,5,4,0.35);
      }
      .team-photo{
        width:100%;
        aspect-ratio:4/3;
        border-radius:14px;
        background:#d3d3d3;
        background-size:cover;
        background-position:center;
        margin-bottom:14px;
      }
      .team-role{
        font-size:13px;
        opacity:0.72;
        letter-spacing:0.16em;
        text-transform:uppercase;
        margin-bottom:4px;
      }
      .team-name{
        font-size:18px;
        font-weight:800;
        margin-bottom:2px;
      }

      .core-block{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:24px;
      }
      .core-card{
        background:#ffffff;
        padding:24px 26px;
        border-radius:18px;
        border:1px solid rgba(0,0,0,0.05);
        box-shadow:0 18px 56px rgba(185,5,4,0.22);
        transition:transform 200ms ease, box-shadow 200ms ease;
      }
      .core-card:hover{
        transform:translateY(-6px);
        box-shadow:0 26px 70px rgba(185,5,4,0.32);
      }
      .core-title{
        font-size:20px;
        font-weight:800;
        margin-bottom:10px;
        color:var(--accent-red);
      }
      .core-sub{
        font-size:15px;
        line-height:1.7;
        color:#444;
      }

      .gallery-section{
        padding-bottom:96px;
      }
      .gallery-card{
        max-width:1100px;
        margin:0 auto;
        border-radius:22px;
        overflow:hidden;
        border:1px solid rgba(0,0,0,0.06);
        box-shadow:0 26px 80px rgba(185,5,4,0.28);
        background:#ffffff;
      }
      .gallery-card img{
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        transform:scale(1.01);
        transition:transform 10s ease-out;
      }
      .gallery-card:hover img{
        transform:scale(1.06);
      }

      

      @media(max-width:768px){

  /* HERO SECTION */
  .about-hero{
    min-height:auto;
    padding-top:80px;
    padding-bottom:80px;
  }

  .who-layout{
    grid-template-columns:1fr;
    gap:24px;
  }

  .who-card{
    padding:20px;
  }

  /* CONTACT FLOATING SECTION */
  .contact-wrapper{
    grid-template-columns:1fr;
    padding:32px 20px;
    gap:24px;
  }

  .contact-title{
    font-size:34px;
    line-height:1.2;
  }

  .contact-form{
    padding:20px;
  }

  .contact-form .form-row{
    grid-template-columns:1fr;
  }

  .submit-btn{
    font-size:18px;
    padding:16px;
  }

  /* CORE VALUES */
  .core-block{
    grid-template-columns:1fr;
  }

  /* GALLERY IMAGE */
  .gallery-card{
    border-radius:16px;
  }

  /* FAQ */
  .faq-question{
    font-size:16px;
  }
}



/* ================= SLIGHTLY BOLDER, USER-FRIENDLY TYPOGRAPHY (ABOUT) ================= */

/* Base text */
.about-wrap{
  font-size:16px;
  line-height:1.75;
}

/* Section headings */
.about-section h2{
  font-weight:800;
}

/* Hero heading */
.about-hero h2{
  font-weight:900;
}

/* Paragraphs & descriptions */
.about-section p,
.about-lead,
.core-sub,
.faq-answer p{
  font-weight:500;   /* was 400 */
}

/* Quote text */
.quote-text{
  font-weight:600;
}

/* Card titles */
.who-card h3,
.core-title{
  font-weight:800;
}

/* Team text */
.team-name{
  font-weight:800;
}
.team-role{
  font-weight:600;
}

/* FAQ questions */
.faq-question{
  font-weight:700;
}

/* Contact CTA text */
.contact-wrapper p{
  font-weight:500;
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .about-section p,
  .about-lead,
  .core-sub,
  .faq-answer p{
    font-weight:500;
  }
}


  /* ===== FORCE DARK MODE + TEXT VISIBILITY ===== */

  .about-wrap{
    background: radial-gradient(circle at top,#0b1220,#020617 70%);
    color:#ffffff;
    font-family: Inter, system-ui, sans-serif;
  }

  /* HEADINGS */
  .about-wrap h1,
.about-wrap h2,
.about-wrap h3,
.about-wrap h4,
.vm-title,
.core-title,
.quote-heading{
  color:#ff4d4d;
  font-family:Poppins, sans-serif;
  font-weight:800;
}


  /* PARAGRAPH TEXT */
 .about-wrap p,
.about-wrap span,
.about-wrap li,
.about-lead,
.vm-para,
.core-sub,
.quote-text,
.team-role{
  color:#d1d5db;
  font-size:16px;
  line-height:1.8;
}


  /* CARDS */
  .who-card,
  .team-card,
  .core-card,
  .faq-card,
  .quote-card{
    background:#141414;
    color:#ffffff;
  }

  /* FAQ TEXT */
  .faq-answer p{
    color:#cfcfcf;
  }

  /* HOVER EFFECT */
  h2:hover,
  h3:hover{
    color:#ff3b3b;
    transform:translateY(-2px);
  }

  p:hover{
    color:#ffffff;
  }



/* ================= VISION & MISSION ================= */

.vm-section{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:60px;
  align-items:center;
}

.vm-section.reverse{
  grid-template-columns:1fr 1.2fr;
}

.vm-title{
  font-size:36px;
  font-weight:900;
  color:#B90504;
  margin-bottom:20px;
  font-family:Poppins, sans-serif;
}

.vm-para{
  font-size:16px;
  line-height:1.8;
  margin-bottom:26px;
}

.vm-list{
  list-style:none;
  padding:0;
  margin:0;
}

.vm-list li{
  position:relative;
  padding-left:36px;
  margin-bottom:14px;
  font-size:15px;
  line-height:1.7;
}

.vm-list li::before{
  content:"🎯";
  position:absolute;
  left:0;
  top:0;
  font-size:18px;
}

.vm-image img{
  width:100%;
  max-width:420px;
  display:block;
  margin:auto;
}

/* MOBILE */
@media(max-width:900px){
  .vm-section,
  .vm-section.reverse{
    grid-template-columns:1fr;
  }
  .vm-title{
    font-size:28px;
  }
}

/* ================= SCROLL ANIMATION ================= */

.vm-animate{
  opacity:0;
  transform:translateY(40px);
  transition:opacity 0.8s ease, transform 0.8s ease;
}

.vm-left{
  transform:translateX(-60px);
}

.vm-right{
  transform:translateX(60px);
}

.vm-show{
  opacity:1;
  transform:translateX(0) translateY(0);
}
/* ================= FINAL VISIBILITY FIX ================= */

/* ALL HEADINGS RED */
.about-wrap h1,
.about-wrap h2,
.about-wrap h3,
.about-wrap h4,
.vm-title,
.quote-heading,
.core-title {
  color:#B90504 !important;
}

/* ALL NORMAL TEXT WHITE */
.about-wrap p,
.about-wrap span,
.about-wrap li,
.about-lead,
.vm-para,
.core-sub,
.quote-text,
.team-role,
.team-name {
  color:#ffffff !important;
}
.about-wrap strong,
.team-name{
  color:#ffffff;
  font-weight:700;
}

/* Slightly softer white for paragraphs */
.about-wrap p,
.vm-para,
.core-sub,
.quote-text {
  color:#d1d5db !important;
}

/* Cards background stays dark */
.who-card,
.team-card,
.core-card,
.quote-card {
  background:#141414 !important;
  color:#ffffff !important;
}

/* Hover remains visible */
.about-wrap h2:hover,
.about-wrap h3:hover{
  color:#ff6b6b;
  transform:translateY(-2px);
}

.about-wrap p:hover{
  color:#ffffff;
}


/* ================= HOME PAGE STYLE FOR ABOUT ================= */

/* PAGE BACKGROUND */
.about-wrap{
  background: radial-gradient(circle at top,#0b1220,#020617 70%) !important;
  color:#ffffff !important;
  font-family:Inter, system-ui, sans-serif;
}

/* HEADINGS (LIKE HOME) */
.about-wrap h1,
.about-wrap h2,
.about-wrap h3,
.about-wrap h4{
  color:#ff2b2b !important;
  font-family:Poppins, sans-serif;
  font-weight:800;
}

/* BODY TEXT (LIKE HOME) */
.about-wrap p,
.about-wrap span,
.about-wrap li{
  color:#e5e7eb !important;
  font-size:16px;
  line-height:1.8;
}

/* SECTIONS */
.about-section{
  border-bottom:1px solid rgba(255,255,255,0.06);
}

/* CARDS (MATCH HOME) */
.who-card,
.team-card,
.core-card,
.quote-card,
.perk-card{
  background:#111827;
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 20px 60px rgba(0,0,0,0.6);
  color:#ffffff;
}

/* CARD HOVER (LIKE HOME) */
.who-card:hover,
.team-card:hover,
.core-card:hover{
  transform:translateY(-8px);
  box-shadow:0 30px 80px rgba(255,0,0,0.25);
}

/* LIST ICONS */
.vm-list li::before{
  content:"●";
  color:#ff2b2b;
  font-size:18px;
}

/* LINKS & CTA */
.about-wrap a{
  color:#ff2b2b;
}
.about-wrap a:hover{
  color:#ffffff;
}

/* ================= TEAM INTRO ================= */

.team-intro{
  text-align:center;
}

.team-intro-wrap{
  max-width:820px;
}

/* Heading */
.team-intro-title{
  font-size:42px;
  font-weight:900;
  color:#B90504;
  font-family:Poppins, sans-serif;
  margin-bottom:12px;
}

/* Sub heading */
.team-intro-sub{
  font-size:18px;
  font-weight:600;
  color:#ffffff;
  opacity:0.9;
  margin-bottom:28px;
}

/* Paragraph text */
.team-intro-text{
  font-size:16px;
  line-height:1.8;
  color:#d1d5db;
  margin-bottom:16px;
}

/* Mobile */
@media(max-width:768px){
  .team-intro-title{
    font-size:30px;
  }

  .team-intro-sub{
    font-size:16px;
  }

  .team-intro-text{
    font-size:15px;
  }
}

/* ================= WHO WE ARE INTRO ================= */

.who-intro{
  text-align:center;
}

.who-intro-wrap{
  max-width:880px;
  margin:auto;
}

/* Main heading */
.who-intro-title{
  font-size:44px;
  font-weight:900;
  color:#B90504;
  font-family:Poppins, sans-serif;
  margin-bottom:12px;
}

/* Tagline */
.who-intro-tagline{
  font-size:20px;
  font-weight:600;
  color:#ffffff;
  opacity:0.95;
  margin-bottom:30px;
}

/* Paragraphs */
.who-intro-text{
  font-size:16px;
  line-height:1.85;
  color:#d1d5db;
  margin-bottom:18px;
}

/* Emphasis line */
.who-intro-text.strong{
  color:#ffffff;
  font-weight:600;
}

/* Divider */
.who-divider{
  width:90px;
  height:3px;
  background:#B90504;
  margin:32px auto 24px;
  border-radius:4px;
}

/* Subtitle */
.who-subtitle{
  font-size:26px;
  font-weight:800;
  color:#ffffff;
  margin-bottom:14px;
}

/* ================= SCROLL ANIMATION (REUSE YOUR SYSTEM) ================= */

.vm-animate{
  opacity:0;
  transform:translateY(40px);
  transition:opacity 0.9s ease, transform 0.9s ease;
}

.vm-left{
  transform:translateX(-60px);
}

.vm-show{
  opacity:1;
  transform:translateX(0) translateY(0);
}

/* ================= MOBILE ================= */

@media(max-width:768px){
  .who-intro-title{
    font-size:30px;
  }

  .who-intro-tagline{
    font-size:16px;
  }

  .who-subtitle{
    font-size:22px;
  }

  .who-intro-text{
    font-size:15px;
  }
}
/* ================= SUCCESS HERO ================= */

.success-hero{
  background: radial-gradient(circle at top,#0b1220,#020617 70%);
  padding:120px 7vw;
  border-bottom:1px solid rgba(255,255,255,0.06);
}

.success-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:80px;
  align-items:center;
}

/* LEFT */
.success-left h1{
  font-size:52px;
  font-weight:900;
  line-height:1.15;
  color:#ffffff;
  font-family:Poppins, sans-serif;
  margin-bottom:26px;
}

.success-left h1 span{
  color:#ff2b2b;
  position:relative;
}

.success-left h1 span::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:100%;
  height:3px;
  background:#ff2b2b;
  border-radius:4px;
}

.success-left p{
  font-size:17px;
  line-height:1.8;
  color:#d1d5db;
  margin-bottom:18px;
}

.success-left strong{
  color:#ffffff;
}

/* ACTIONS */
.hero-actions{
  display:flex;
  gap:22px;
  margin-top:34px;
}

.btn-primary{
  padding:14px 34px;
  border-radius:10px;
  background:#ff2b2b;
  color:#ffffff;
  font-size:15px;
  font-weight:800;
  border:none;
  cursor:pointer;
  transition:all .3s ease;
  box-shadow:0 20px 60px rgba(255,43,43,0.35);
}

.btn-primary:hover{
  transform:translateY(-4px);
  box-shadow:0 30px 90px rgba(255,43,43,0.5);
}

.btn-link{
  background:none;
  border:none;
  color:#ff2b2b;
  font-size:15px;
  font-weight:700;
  cursor:pointer;
}

.btn-link:hover{
  color:#ffffff;
}

/* RIGHT */
.image-stack{
  position:relative;
  height:520px;
}

.main-img{
  position:absolute;
  right:0;
  top:0;
  width:360px;
  height:100%;
  border-radius:220px;
  overflow:hidden;
}

.main-img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.circle-img{
  position:absolute;
  width:160px;
  height:160px;
  border-radius:50%;
  overflow:hidden;
  background:#111827;
  box-shadow:0 18px 60px rgba(0,0,0,0.6);
}

.circle-img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.circle-img.top{
  left:40px;
  top:20px;
}

.circle-img.bottom{
  left:0;
  bottom:20px;
}

/* ANIMATION */
.hero-animate{
  opacity:0;
  transform:translateY(40px);
  transition:all .9s ease;
}

.hero-animate.show{
  opacity:1;
  transform:translateY(0);
}

/* MOBILE */
@media(max-width:900px){
  .success-container{
    grid-template-columns:1fr;
    gap:60px;
  }

  .success-left h1{
    font-size:36px;
  }

  .image-stack{
    height:420px;
  }

  .main-img{
    width:280px;
  }

  .circle-img{
    width:120px;
    height:120px;
  }
}
/* ===== GLOBAL VISIBILITY FIX ===== */

/* Force text to be readable */
.hero,
.hero * {
  color: #ffffff !important;
  opacity: 1 !important;
}

/* Highlight words */
.hero strong,
.hero b {
  color: #ff2b2b !important;
}

/* Paragraph clarity */
.hero p {
  color: #e5e7eb !important;
  line-height: 1.8;
}

/* Fix background overlays hiding content */
.hero::before,
.hero::after {
  pointer-events: none;
}

/* Decorative circles go behind content */
.hero-bg-circle {
  z-index: 0 !important;
  opacity: 0.25;
}

/* Main hero content above everything */
.hero-content {
  position: relative;
  z-index: 5;
}
/* ===== SCROLL ANIMATIONS ===== */

/* Initial hidden state */
.animate-left,
.animate-right,
.animate-up {
  opacity: 0;
  transition: all 0.9s ease;
}

/* Directions */
.animate-left {
  transform: translateX(-80px);
}

.animate-right {
  transform: translateX(80px);
}

.animate-up {
  transform: translateY(40px);
}

/* When visible */
.animate-show {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

/* ================= PERKS SECTION ================= */

.perks-section{
background: radial-gradient(circle at top, #1e293b, #020617 75%);

//  background: radial-gradient(circle at top, #0b1220, #020617 70%);
}

.perks-title{
  text-align:center;
  font-size:42px;
  font-weight:900;
  margin-bottom:70px;
  color:#111;
}

.perks-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:70px 50px;
}

.perk-card{
  text-align:center;
  padding:10px;
}

.perk-icon{
  width:90px;
  height:90px;
  margin:0 auto 26px;
  border-radius:50%;
  background:#ff2b2b;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:36px;
  font-weight:900;
}

.perk-title{
  font-size:20px;
  font-weight:800;
  margin-bottom:14px;
  color:#111;
}

.perk-desc{
  font-size:15px;
  line-height:1.75;
  color:#444;
}

/* Responsive */
@media(max-width:900px){
  .perks-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .perks-grid{
    grid-template-columns:1fr;
  }

  .perks-title{
    font-size:30px;
  }
}

/* ================= PERKS SECTION – MATCH ABOUT THEME ================= */

.perks-section{
  background: radial-gradient(circle at top,#0b1220,#020617 70%);
  border-bottom:1px solid rgba(255,255,255,0.06);
}

.perks-title{
  text-align:center;
  font-size:42px;
  font-weight:900;
  margin-bottom:70px;
  color:#ff2b2b;
  font-family:Poppins, sans-serif;
}

/* GRID */
.perks-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:60px 50px;
}

/* CARD */
.perk-card{
  background:#0f172a;
  border-radius:22px;
  padding:46px 34px;
  text-align:center;
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 20px 60px rgba(0,0,0,0.65);
  transition:all .35s ease;
}

.perk-card:hover{
  transform:translateY(-10px);
  box-shadow:0 30px 90px rgba(255,43,43,0.35);
}

/* ICON */
.perk-icon{
  width:90px;
  height:90px;
  margin:0 auto 28px;
  border-radius:50%;
  background:linear-gradient(135deg,#ff2b2b,#b90504);
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:34px;
  font-weight:900;
  box-shadow:
    0 15px 40px rgba(255,43,43,0.55),
    0 0 30px rgba(255,43,43,0.45);
  transition:all .35s ease;
}

.perk-card:hover .perk-icon{
  transform:scale(1.1);
  box-shadow:
    0 20px 60px rgba(255,43,43,0.75),
    0 0 40px rgba(255,43,43,0.65);
}

/* TITLE */
.perk-title{
  font-size:20px;
  font-weight:800;
  margin-bottom:14px;
  color:#ffffff;
}

/* DESCRIPTION */
.perk-desc{
  font-size:15px;
  line-height:1.8;
  color:#d1d5db;
}

/* RESPONSIVE */
@media(max-width:900px){
  .perks-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .perks-grid{
    grid-template-columns:1fr;
  }

  .perks-title{
    font-size:30px;
  }
}


    `;

   const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  
  const heroItems = document.querySelectorAll(".hero-animate");
  heroItems.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), i * 150);
  });

  return () => document.head.removeChild(style);
}, []);


  const vmItems = document.querySelectorAll(".vm-animate");

const vmObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-show");
      }
    });
  },
  { threshold: 0.25 }
);

vmItems.forEach(el => vmObserver.observe(el));

  return (

    <>


    <HomeHerohead />
    <Vission />
    {/* <OurVission /> */}
    
  <AboutMission />
    <div className="about-wrap">
      {/* <AboutMeet /> */}
<MeetTheTeam />
<TeamSection />

<IdeasSection />
      
<WhyChooseSection />

<CTASection />
    </div>

    </>
  );
}
