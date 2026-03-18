import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";


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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== STATS SECTION ===== */
.sha-stats{
  background:#ffffff;
  padding:20px 1vw;
  font-family:'Poppins', sans-serif;
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
  font-weight:800;
  font-family:'Poppins', sans-serif;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:10px;
}

/* LABEL */
.stat-label{
  font-size:17px;
  font-weight:400;
  font-family:'Poppins', sans-serif;
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

  .stat-label{
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.projectrun-section {
  padding: clamp(8px, 2vw, 0px) clamp(5vw, 8vw, 9vw);
  font-family: 'Poppins', sans-serif;
  color: #e5e7eb;
  overflow: hidden;
}

.projectrun-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto 50px;
}

.projectrun-title {
  font-size: 48px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}

.projectrun-title-white {
  display: block;
  color: #ffffff;
}

.projectrun-title-gradient {
  display: block;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.projectrun-divider {
  width: 80px;
  height: 3px;
  background: #8b5cf6;
  margin: 20px auto 0;
  border-radius: 2px;
}

.projectrun-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.projectrun-text p {
  font-size: 17px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  line-height: 1.8;
  margin-bottom: 6px;
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
  inset: -30px;
  background: radial-gradient(
    circle,
    rgba(168, 85, 247, 0.55),
    rgba(236, 72, 153, 0.3),
    transparent 50%
  );
  filter: blur(60px);
  z-index: 0;
}

.projectrun-image-glow img {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .projectrun-container {
    grid-template-columns: 1fr;
  }

  .projectrun-title {
    font-size: 36px;
  }

  .projectrun-text p {
    font-size: 16px;
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
          <span className="seo-title-white">Digital Marketing</span>
          <span className="seo-title-gradient">Services</span>
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
            Our strategies increase visibility, drive high-quality traffic,
            and convert visitors into loyal customers.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="seo-image">
          <div className="image-glow">
            <img src="/images/seo.png" alt="Digital Marketing Services" />
          </div>
        </div>
      </div>

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* SECTION */

.seo-section {
  font-family: 'Poppins', sans-serif;
  color: #e5e7eb;
  padding: 30px 5%;
  overflow: hidden;
}

/* HEADER */

.seo-header {
  text-align: center;
  margin-bottom: 25px;
}

.seo-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
}

.seo-title-white {
  display: block;
  color: #ffffff;
}

.seo-title-gradient {
  display: block;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.seo-divider {
  width: 70px;
  height: 3px;
  background: #8b5cf6;
  margin: 12px auto 0;
  border-radius: 2px;
}

/* CONTAINER (UNCHANGED LAYOUT) */

.seo-container {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 1200px;
  margin: auto;
}

/* TEXT */

.seo-text p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 10px;
  color: #cbd5f5;
}

/* LIST */

.seo-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 14px;
}

.seo-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 400;
}

.seo-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  top: 0;
  color: #8b5cf6;
  font-weight: 700;
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
  inset: -18%;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.45),
    rgba(236, 72, 153, 0.25),
    transparent 60%
  );
  filter: blur(40px);
  z-index: 0;
}

.image-glow img {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
}

/* DESKTOP (LAYOUT SAME) */

@media (min-width: 992px) {

  .seo-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .seo-text {
    flex: 1;
  }

  .seo-image {
    flex: 1;
    justify-content: flex-end;
  }

  .image-glow img {
    max-width: 440px;
  }

}

/* MOBILE */

@media (max-width: 768px) {

  .seo-title {
    font-size: 38px;
  }

  .seo-text p,
  .seo-list li {
    font-size: 16px;
  }

}

`}</style>
    </section>
  );
}




function SeoGrowthSectionleftimage() {
  return (
    <section className="section-wrap">

      {/* HEADER */}
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-white">
            Website Development
          </span>{" "}
          <span className="title-gradient">
            That Converts
          </span>
        </h2>

        <p className="section-desc">
          Your website is your digital storefront. Our website development
          services are designed to create strong first impressions while
          driving real business results.
        </p>
      </div>

      {/* CONTENT */}
      <div className="section-container">

        {/* IMAGE */}
        <div className="section-image">
          <img
            src="/images/websitehome.png"
            alt="Website Development Services"
          />
        </div>

        {/* TEXT */}
        <div className="section-text">

          <ul className="section-list">
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

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* SECTION */

.section-wrap{
padding:20px 6%;
font-family:'Poppins',sans-serif;
color:#e5e7eb;
}

/* HEADER */

.section-header{
max-width:900px;
margin:auto;
text-align:center;
margin-bottom:35px;
}

/* TITLE */

.section-title{
font-size:56px;
font-weight:800;
line-height:1.2;
}

.title-white{
color:#ffffff;
}

.title-gradient{
background:linear-gradient(90deg,#8b5cf6,#ec4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* DESCRIPTION */

.section-desc{
font-size:18px;
font-weight:400;
line-height:1.8;
color:#cbd5f5;
margin-top:14px;
}

/* CONTENT */

.section-container{
max-width:1200px;
margin:auto;
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
align-items:center;
}

/* IMAGE */

.section-image{
display:flex;
justify-content:center;
}

.section-image img{
width:100%;
max-width:500px;
border-radius:18px;
}

/* TEXT */

.section-text p{
font-size:18px;
line-height:1.8;
margin-top:10px;
color:#cbd5f5;
}

/* LIST */

.section-list{
list-style:none;
padding:0;
margin-bottom:12px;
}

.section-list li{
font-size:18px;
margin-bottom:6px;
padding-left:24px;
position:relative;
}

.section-list li::before{
content:"✔";
position:absolute;
left:0;
color:#8b5cf6;
font-weight:700;
}

/* MOBILE */

@media(max-width:900px){

.section-container{
grid-template-columns:1fr;
gap:30px;
}

.section-title{
font-size:38px;
}

.section-desc,
.section-text p,
.section-list li{
font-size:16px;
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
            strategy is designed to build trust, authority, and long-term brand value.
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

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.contentcore-section{
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  padding:0 5%;
  overflow:hidden;
}

/* HEADER */

.contentcore-header{
  text-align:center;
  margin-bottom:30px;
}

.contentcore-title{
  font-size:48px;
  font-weight:800;
  line-height:1.2;
}

.contentcore-title-white{
  display:block;
  color:#ffffff;
}

.contentcore-title-gradient{
  display:block;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.contentcore-divider{
  width:70px;
  height:3px;
  background:#8b5cf6;
  margin:14px auto 0;
  border-radius:2px;
}

/* CONTAINER */

.contentcore-container{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:25px;
}

/* TEXT */

.contentcore-text p{
  font-size:17px;
  font-weight:400;
  line-height:1.8;
  margin-bottom:12px;
  color:#cbd5f5;
}

/* LIST */

.contentcore-list{
  list-style:none;
  padding:0;
  margin:12px 0 16px;
}

.contentcore-list li{
  position:relative;
  padding-left:26px;
  margin-bottom:8px;
  font-size:17px;
}

.contentcore-list li::before{
  content:"✔";
  position:absolute;
  left:0;
  color:#8b5cf6;
  font-weight:700;
}

/* IMAGE */

.contentcore-image{
  display:flex;
  justify-content:center;
}

.contentcore-image-glow{
  position:relative;
}

.contentcore-image-glow::before{
  content:"";
  position:absolute;
  inset:-20%;
  background:radial-gradient(
    circle,
    rgba(139,92,246,0.45),
    rgba(236,72,153,0.25),
    transparent 60%
  );
  z-index:0;
}

.contentcore-image-glow img{
  position:relative;
  z-index:2;
  width:100%;
  max-width:340px;
  border-radius:12px;
}

/* DESKTOP */

@media (min-width:992px){

.contentcore-container{
  flex-direction:row;
  align-items:center;
  gap:40px;
}

.contentcore-image{
  justify-content:flex-end;
}

.contentcore-image-glow img{
  max-width:420px;
}

}

/* MOBILE */

@media (max-width:768px){

.contentcore-title{
  font-size:36px;
}

.contentcore-text p,
.contentcore-list li{
  font-size:16px;
}

}

`}</style>
    </section>
  );
}






function ProcessFlowSection() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= PROCESS FLOW ================= */

.process-wrap{
  padding-top:20px;
  font-family:'Poppins',sans-serif;
  position:relative;
  overflow:hidden;
}

.process-container{
  max-width:1200px;
  margin:auto;
}

/* GRID */

.process-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  row-gap:40px;
  column-gap:40px;
  position:relative;
  z-index:2;
}

/* STEP */

.process-step{
  text-align:center;
  opacity:0;
  transform:translateY(30px);
  transition:all .7s ease;
}

.process-step.show{
  opacity:1;
  transform:translateY(0);
}

.process-step h3{
  font-size:17px;
  font-weight:600;
  margin-top:12px;
  margin-bottom:0;
  color:#ffffff;
}

/* ================= CIRCLES ================= */

.step-circle{
  width:60px;
  height:60px;
  border-radius:50%;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  font-weight:700;
  color:#ffffff;
  position:relative;
}

/* glow ring */

.step-circle::after{
  content:"";
  position:absolute;
  inset:-10px;
  border-radius:50%;
  filter:blur(14px);
  opacity:.6;
  z-index:-1;
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

/* ================= PATH ================= */

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
  stroke:#c7d2fe;
  stroke-width:3;
  stroke-dasharray:6 10;
  animation:moveDots 6s linear infinite;
  opacity:.7;
}

@keyframes moveDots{
  from{stroke-dashoffset:0}
  to{stroke-dashoffset:-500}
}

/* ================= MOBILE ================= */

@media(max-width:900px){

.process-grid{
  grid-template-columns:1fr;
  row-gap:30px;
}

.process-line{
  display:none;
}

}

    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const steps = document.querySelectorAll(".process-step");

    const observer = new IntersectionObserver(
      entries=>{
        entries.forEach((entry,i)=>{
          if(entry.isIntersecting){
            setTimeout(()=>{
              entry.target.classList.add("show");
            },i*120);
          }
        });
      },
      {threshold:0.3}
    );

    steps.forEach(step=>observer.observe(step));

    return ()=>{
      document.head.removeChild(style);
      observer.disconnect();
    };

  },[]);

  return (

<section className="process-wrap">

<div className="process-container">

{/* dotted curve */}

<svg className="process-line" viewBox="0 0 1200 600" preserveAspectRatio="none">

<path d="
M100 120
C300 220, 500 20, 700 120
C900 220, 1100 60, 1100 120
C1100 360, 900 500, 700 420
C500 340, 300 520, 100 420
"/>

</svg>

<div className="process-grid">

<div className="process-step">
<div className="step-circle c1">1</div>
<h3>Discovery</h3>
</div>

<div className="process-step">
<div className="step-circle c2">2</div>
<h3>Client Onboarding</h3>
</div>

<div className="process-step">
<div className="step-circle c3">3</div>
<h3>Strategy Development</h3>
</div>

<div className="process-step">
<div className="step-circle c4">4</div>
<h3>Core Service Execution</h3>
</div>

<div className="process-step">
<div className="step-circle c5">5</div>
<h3>Data Analytics and Optimization</h3>
</div>

<div className="process-step">
<div className="step-circle c6">6</div>
<h3>Generating Reports</h3>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= FAQ SECTION ================= */

.home-faq-wrap{
  padding-top:20px;
  font-family:'Poppins',sans-serif;
  color:#ffffff;
}

/* CONTAINER */

.home-faq-container{
  max-width:1100px;
  margin:auto;
}

/* TITLE */

.home-faq-title{
  text-align:center;
  font-size:48px;
  font-weight:800;
  margin-bottom:8px;
}

.faq-title-white{
  color:#ffffff;
}

.faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* SUBTITLE */

.home-faq-sub{
  text-align:center;
  color:#cbd5f5;
  font-size:17px;
  margin-bottom:22px;
}

/* CARD */

.home-faq-card{
  border-radius:20px;
  padding:20px;
  box-shadow:0 20px 60px rgba(0,0,0,0.25);
}

/* FAQ ITEM */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.1);
  padding:14px 4px;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.1);
}

/* HEADER */

.home-faq-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
}

/* QUESTION */

.home-faq-question{
  font-size:17px;
  font-weight:600;
}

.home-faq-item.open .home-faq-question{
  color:#8b5cf6;
}

/* TOGGLE */

.home-faq-toggle{
  width:30px;
  height:30px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  font-weight:700;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  color:#ffffff;
}

/* ANSWER */

.home-faq-answer{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transition:all .35s ease;
}

.home-faq-item.open .home-faq-answer{
  max-height:200px;
  opacity:1;
}

.home-faq-answer p{
  margin-top:8px;
  font-size:17px;
  line-height:1.7;
  color:#cbd5f5;
}

/* CTA */

.home-faq-cta{
  margin-top:24px;
  padding:20px;
  border-radius:18px;
  background:#ffffff;
  text-align:center;
}

.home-faq-cta h3{
  font-size:24px;
  font-weight:700;
  color:#020617;
  margin-bottom:6px;
}

.home-faq-cta p{
  font-size:17px;
  color:#475569;
  margin-bottom:12px;
}

.home-faq-cta button{
  padding:10px 28px;
  border-radius:999px;
  border:none;
  background:#020617;
  color:#ffffff;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
}

/* MOBILE */

@media(max-width:768px){

.home-faq-title{
  font-size:36px;
}

.home-faq-question,
.home-faq-answer p{
  font-size:16px;
}

}

`;

const id="home-faq-style";

if(!document.getElementById(id)){
const style=document.createElement("style");
style.id=id;
style.innerHTML=css;
document.head.appendChild(style);
}

},[]);

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

    if(sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();

  }, []);

  /* ================= FAQ DATA ================= */

  const faqs = [

    {
      q:"Which service should I start with?",
      a:"If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
    },

    {
      q:"Do you work with small businesses?",
      a:"Yes. We work with startups, small businesses, and growing companies, offering flexible and affordable solutions."
    },

    {
      q:"How long does it take to see results?",
      a:"SEO typically takes 2–3 months for visible results, while Google Ads and social media campaigns can generate leads much faster."
    },

    {
      q:"Do you provide ongoing support?",
      a:"Absolutely. We offer continuous optimization, support, and performance tracking for all our services."
    },

    {
      q:"How do I get started?",
      a:"Simply contact us for a free consultation. We’ll analyze your business and recommend the best growth strategy."
    }

  ];

  /* ================= FAQ SCHEMA ================= */

  useEffect(() => {

    const schema = {
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity":faqs.map(f => ({
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

<div
key={item.q}
className={"home-faq-item"+(open?" open":"")}
>

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

<div className="home-faq-cta">

<h3>Still have questions?</h3>

<p>
Talk directly with our experts and get a custom growth plan.
</p>

<Link to="/contact">
<button>BOOK FREE CONSULTATION →</button>
</Link>

</div>

</div>

</section>

  );
}




function ServicesHighlightSection() {

const navigate = useNavigate();

useEffect(()=>{

const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= SERVICES ================= */

.sh-wrap{
font-family:'Poppins',sans-serif;
padding-bottom:20px;
}

/* TITLE */

.sh-title{
text-align:center;
font-size:48px;
font-weight:800;
background:linear-gradient(90deg,#8b5cf6,#ec4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
margin-bottom:30px;
}

/* GRID */

.sh-grid{
max-width:1200px;
margin:auto;
display:grid;
grid-template-columns:repeat(12,1fr);
gap:20px;
}

/* FIRST ROW */

.sh-card:nth-child(1),
.sh-card:nth-child(2),
.sh-card:nth-child(3),
.sh-card:nth-child(4),
.sh-card:nth-child(5),
.sh-card:nth-child(6){
grid-column:span 4;
}

/* LAST ROW */

.sh-card:nth-child(7),
.sh-card:nth-child(8),
.sh-card:nth-child(9),
.sh-card:nth-child(10){
grid-column:span 3;
}

/* CARD */

.sh-card{
background:#ffffff;
border-radius:18px;
padding:22px;
min-height:200px;
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
transition:transform .25s ease, box-shadow .25s ease;
}

.sh-card:hover{
transform:translateY(-6px);
box-shadow:0 28px 70px rgba(0,0,0,0.45);
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
box-shadow:0 0 24px rgba(139,92,246,0.45);
}

/* CARD TITLE */

.sh-card h3{
font-size:17px;
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
padding:18px;
font-size:17px;
font-weight:400;
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

/* HOVER */

.sh-card:hover::before{opacity:1;}
.sh-card:hover .sh-hover-text{opacity:1;}
.sh-card:hover h3,
.sh-card:hover .sh-icon{opacity:0;}

/* SCROLL REVEAL */

.sh-reveal{
opacity:0;
transform:translateY(25px);
transition:.7s ease;
}

.sh-reveal.show{
opacity:1;
transform:none;
}

/* TABLET */

@media(max-width:1024px){

.sh-grid{
grid-template-columns:1fr 1fr;
}

.sh-card{
grid-column:span 1 !important;
}

}

/* MOBILE */

@media(max-width:768px){

.sh-wrap{
padding:40px 20px;
}

.sh-grid{
grid-template-columns:1fr;
}

.sh-card{
grid-column:span 1 !important;
min-height:auto;
padding:20px;
}

.sh-card::before,
.sh-hover-text{
display:none;
}

.sh-card h3,
.sh-icon{
opacity:1 !important;
}

.sh-title{
font-size:36px;
}

}

`;

const id="services-highlight-style";

if(!document.getElementById(id)){
const style=document.createElement("style");
style.id=id;
style.innerHTML=css;
document.head.appendChild(style);
}

},[]);

/* SCROLL REVEAL */

useEffect(()=>{

const items=document.querySelectorAll(".sh-reveal");

const observer=new IntersectionObserver(entries=>{
entries.forEach((entry,i)=>{
if(entry.isIntersecting){
setTimeout(()=>{
entry.target.classList.add("show");
},i*120);
}
});
},{threshold:0.2});

items.forEach(el=>observer.observe(el));

return ()=>observer.disconnect();

},[]);

return(

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









 function HomeHerohead() {

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selection: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_pznbx9s",
      "template_8wwwast",
      formData,
      "yxT-hRvX41RhpOdfZ"
    )
    .then(() => {
      alert("Enquiry Sent Successfully!");
      setShowPopup(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        selection: "",
        message: ""
      });
    })
    .catch((error) => {
      alert("Failed to send enquiry.");
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  /* ESC KEY CLOSE */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>

             Digital Marketing Services That <br />
              <span>Grow Your Business</span>
            </h1>

            <p>
             Sha Infotechnology is a results-driven digital marketing agency delivering powerful digital marketing services, website development, and content marketing strategy solutions to help brands scale online, generate qualified leads, and increase revenue.
            </p>

            <button
              className="cta-btn"
              onClick={() => setShowPopup(true)}
            >
              Connect With Us
            </button>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="hero-right">
            <div className="side-form">
              <h2>Connect With Us</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button type="submit" className="submit-btn">
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="popup-form"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h2>Connect With Us</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
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
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

          </div>
        </div>
      )}

      <style>{`
      
.hero-section{
  min-height:0vh;
  display:flex;
  align-items:center;
  background:linear-gradient(135deg,#000c24,#020617);
  padding:10px 0;
}

.hero-container{
  width:85%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:60px;
}

.hero-left{
  flex:1;
  color:#fff;
}

.hero-left h1{
  font-size:42px;
  margin-bottom:20px;
}

.hero-left span{
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.hero-left p{
  font-size:17px;
  color:#cbd5e1;
  margin-bottom:30px;
}

.cta-btn{
  padding:14px 28px;
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  border:none;
  border-radius:8px;
  color:#fff;
  cursor:pointer;
}

.hero-right{
  flex:1;
  display:flex;
  justify-content:center;
}

.side-form,
.popup-form{
  background:#0f172a;
  padding:35px;
  border-radius:14px;
  width:100%;
  max-width:420px;
  box-sizing:border-box;
}

.side-form h2,
.popup-form h2{
  color:#fff;
  margin-bottom:20px;
}

.form-row{
  display:flex;
  gap:12px;
}

.form-row input{
  flex:1;
}

.side-form input,
.side-form select,
.side-form textarea,
.popup-form input,
.popup-form select,
.popup-form textarea{
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border:none;
  border-radius:6px;
  background:#1e293b;
  color:#fff;
  font-size:14px;
}

.submit-btn{
  width:100%;
  padding:12px;
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  border:none;
  border-radius:8px;
  color:#fff;
  font-weight:600;
  cursor:pointer;
}

.popup-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.75);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:999;
  animation:fadeIn 0.3s ease;
}

.close-btn{
  position:absolute;
  top:12px;
  right:15px;
  background:#1e293b;
  border:none;
  color:#fff;
  font-size:18px;
  width:32px;
  height:32px;
  border-radius:50%;
  cursor:pointer;
  transition:0.3s ease;
}

.close-btn:hover{
  background:#7c3aed;
  transform:rotate(90deg);
}

@keyframes fadeIn{
  from{opacity:0;}
  to{opacity:1;}
}

@media(max-width:992px){
  .hero-container{
    flex-direction:column;
  }
}

@media(max-width:600px){
  .form-row{
    flex-direction:column;
  }
}
      `}</style>

    </>
  );
}




function WhyChooseUs() {

useEffect(()=>{

const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== WHY CHOOSE US ===== */

.why-wrap{
padding-top:20px;
font-family:'Poppins',sans-serif;
color:#ffffff;
}

/* CONTAINER */

.why-container{
max-width:1200px;
margin:auto;
display:flex;
flex-direction:column;
gap:30px;
}

/* LEFT */

.why-left{
text-align:center;
}

.why-left h2{
font-size:48px;
font-weight:800;
line-height:1.2;
margin-bottom:12px;
}

.why-left h2 span{
background:linear-gradient(90deg,#8b5cf6,#ec4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.why-left p{
font-size:17px;
font-weight:400;
line-height:1.8;
color:#cbd5f5;
max-width:620px;
margin:auto;
margin-bottom:16px;
}

.why-tagline{
font-size:17px;
font-weight:600;
}

/* FEATURES */

.why-features{
display:flex;
flex-direction:column;
gap:16px;
}

/* CARD */

.why-card{
background:rgba(255,255,255,0.05);
border:1px solid rgba(255,255,255,0.1);
border-radius:16px;
padding:18px;
display:flex;
gap:14px;
align-items:flex-start;
transition:.25s ease;
}

.why-card:hover{
transform:translateY(-4px);
border-color:#8b5cf6;
box-shadow:0 18px 50px rgba(139,92,246,0.35);
}

/* ICON */

.why-icon{
width:42px;
height:42px;
border-radius:10px;
background:linear-gradient(135deg,#8b5cf6,#ec4899);
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
flex-shrink:0;
}

/* CARD TITLE */

.why-card h4{
font-size:17px;
font-weight:600;
margin-bottom:4px;
}

/* CARD TEXT */

.why-card p{
font-size:17px;
font-weight:400;
color:#cbd5f5;
line-height:1.7;
}

/* DESKTOP */

@media(min-width:992px){

.why-wrap{
padding:60px 8%;
}

.why-container{
flex-direction:row;
align-items:center;
gap:40px;
}

.why-left{
flex:1;
text-align:left;
}

.why-left p{
margin:0 0 18px 0;
}

.why-features{
flex:1;
}

}

/* MOBILE */

@media(max-width:768px){

.why-left h2{
font-size:36px;
}

.why-card p{
font-size:16px;
}

}

`;

const id="why-choose-style";

if(!document.getElementById(id)){
const style=document.createElement("style");
style.id=id;
style.innerHTML=css;
document.head.appendChild(style);
}

},[]);

return(

<section className="why-wrap">

<div className="why-container">

{/* LEFT */}

<div className="why-left">

<h2>
Why Choose <span>SHA Infotechnology</span>
<br/>as Your Digital Marketing Agency?
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

{/* RIGHT */}

<div className="why-features">

<div className="why-card">
<div className="why-icon">👨‍💻</div>
<div>
<h4>Experienced Professionals</h4>
<p>
Skilled digital marketing experts with hands-on industry experience.
</p>
</div>
</div>

<div className="why-card">
<div className="why-icon">📊</div>
<div>
<h4>Data-Driven Strategies</h4>
<p>
Every decision backed by analytics, insights, and proven metrics.
</p>
</div>
</div>

<div className="why-card">
<div className="why-icon">📈</div>
<div>
<h4>Transparent Reporting & ROI</h4>
<p>
Clear reports, honest communication, and measurable return on investment.
</p>
</div>
</div>

<div className="why-card">
<div className="why-icon">🏢</div>
<div>
<h4>Industry-Specific Solutions</h4>
<p>
Customized strategies tailored to your business and target audience.
</p>
</div>
</div>

<div className="why-card">
<div className="why-icon">💰</div>
<div>
<h4>Affordable & Scalable Plans</h4>
<p>
Flexible pricing plans that grow along with your business.
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
{/* <h1 className="page-title">Sha Infotechnology - Digital Marketing & IT Services</h1> */}

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


