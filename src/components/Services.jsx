
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        background:#ffffff;
        color:#000;
        font-size:15px;
        font-weight:800;
        border:none;
        cursor:pointer;
        letter-spacing:0.12em;
        box-shadow:0 20px 60px rgba(255,255,255,0.35);
        transition:all .3s ease;
      }

      .cta-btn:hover{
        transform:translateY(-4px) scale(1.05);
        box-shadow:0 30px 90px rgba(255,255,255,0.55);
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

      *{
        box-sizing:border-box;
      }

      body{
        overflow-x:hidden; /* 🔥 PREVENT SIDE SCROLL */
      }

      /* ================= HERO ================= */

      .services-hero{
        min-height:100vh;
        padding:90px 8vw;
        background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
        display:grid;
        grid-template-columns:1.1fr 0.9fr;
        align-items:center;
        gap:60px;
        font-family:Inter,system-ui,sans-serif;
      }

      /* LEFT */
      .services-left small{
        letter-spacing:2px;
        color:#93c5fd;
        font-weight:600;
        display:block;
        margin-bottom:18px;
      }

      .services-left h1{
        font-size:clamp(36px,5vw,64px);
        line-height:1.1;
        margin:0 0 20px;
        color:white;
      }

      .gradient-text{
        background:linear-gradient(90deg,var(--violet),var(--pink));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .services-left p{
        max-width:520px;
        font-size:16px;
        line-height:1.7;
        color:var(--muted);
      }

      /* RIGHT IMAGE */
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
        filter:blur(40px);
        z-index:0;
      }

      .services-image-wrap img{
        width:100%;
        max-width:420px;
        position:relative;
        z-index:1;
      }

      /* ================= MOBILE FIX ================= */
      @media (max-width: 768px){

        .services-hero{
          min-height:auto;              /* 🔥 FIX EMPTY SPACE */
          grid-template-columns:1fr;    /* 🔥 STACK */
          padding:70px 20px;
          gap:50px;
          text-align:center;
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

        .services-image-wrap{
          margin-top:20px;
        }

        .services-image-wrap::before{
          width:280px;                  /* 🔥 PREVENT OVERFLOW */
          height:280px;
        }

        .services-image-wrap img{
          max-width:260px;              /* 🔥 PERFECT MOBILE SIZE */
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
      {/* LEFT */}
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
        />
      </div>
    </section>
  );
}



function GrowthPartnerSection() {
  React.useEffect(() => {
    const css = `
      :root{
        --bg-dark:#020617;
        --bg-dark-2:#0b1220;
        --red:#B90504;
        --violet:#8b5cf6;
        --pink:#ec4899;
        --gradient:linear-gradient(90deg,#8b5cf6,#ec4899);
      }

      /* SECTION */
      .gp-wrap{
        background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
        padding:110px 7vw;
        font-family:Inter,system-ui;
      }

      /* HEADING */
      .gp-title{
        font-size:44px;
        font-weight:900;
        line-height:1.15;
        color:#ffffff;
        margin-bottom:60px;
      }

      .gp-title span{
        background:var(--gradient);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      /* GRID */
      .gp-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:28px;
      }

      /* 🔥 FORCE WHITE CARD */
      .gp-card{
        background:#ffffff !important;
        background-image:none !important;
        backdrop-filter:none !important;
        border-radius:22px;
        padding:44px 26px;
        text-align:center;
        box-shadow:0 30px 80px rgba(0,0,0,0.35);
        transition:all .35s ease;
      }

      .gp-card:hover{
        transform:translateY(-10px);
        box-shadow:0 40px 120px rgba(185,5,4,0.35);
      }

      /* ICON – NO CIRCLE */
      .gp-icon{
        font-size:28px;
        margin-bottom:14px;
      }

      /* TEXT – RED */
      .gp-card h4{
        font-size:16px;
        font-weight:800;
        color:var(--red) !important;
      }

      /* RESPONSIVE */
      @media(max-width:1024px){
        .gp-grid{grid-template-columns:1fr 1fr;}
        .gp-title{font-size:36px;}
      }

      @media(max-width:640px){
        .gp-grid{grid-template-columns:1fr;}
        .gp-title{font-size:30px;}
      }
    `;

    const id = "gp-force-white-style";
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



function ProjectWorkflowSection() {
  useEffect(() => {
    const css = `
      :root{
        --bg-dark:#020617;
        --bg-dark-2:#0b1220;
        --violet:#8b5cf6;
        --pink:#ec4899;
        --muted:#9ca3af;
      }

      .pw-section{
        background:radial-gradient(circle at top, var(--bg-dark-2), var(--bg-dark) 70%);
        padding:100px 8vw;
        font-family:Inter, system-ui, sans-serif;
        color:#e5e7eb;
      }

      .pw-container{
        max-width:1200px;
        margin:auto;
        display:grid;
        grid-template-columns:1.1fr 0.9fr;
        gap:70px;
        align-items:center;
      }

      /* ---------- LEFT CONTENT ---------- */
      .pw-left h2{
        font-size:clamp(28px,4vw,44px);
        margin-bottom:18px;
        color:#ffffff;
      }

      .pw-left p{
        font-size:16px;
        line-height:1.7;
        color:var(--muted);
        margin-bottom:18px;
      }

      .highlight{
        background:linear-gradient(90deg,var(--violet),var(--pink));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        font-weight:600;
      }

      /* ---------- RIGHT FLOATING CARDS ---------- */
      .pw-right{
        display:grid;
        gap:22px;
      }

      .pw-card{
        background:rgba(139,92,246,0.08);
        border:1px solid rgba(139,92,246,0.25);
        border-radius:18px;
        padding:22px 26px;
        display:flex;
        gap:16px;
        align-items:flex-start;
        box-shadow:0 30px 60px rgba(0,0,0,0.45);
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
        box-shadow:0 40px 80px rgba(139,92,246,0.35);
      }

      .pw-step{
        min-width:34px;
        height:34px;
        border-radius:50%;
        background:linear-gradient(135deg,var(--violet),var(--pink));
        color:#fff;
        font-weight:700;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 0 18px rgba(139,92,246,0.6);
        margin-top:4px;
      }

      .pw-card p{
        margin:0;
        font-size:15px;
        line-height:1.6;
        color:#d1d5db;
      }

      /* ---------- TITLE ---------- */
      .pw-title{
        font-size:clamp(32px,5vw,48px);
        font-weight:800;
        line-height:1.15;
        color:#ffffff;
      }

      .pw-gradient-text{
        background:linear-gradient(90deg,#8b5cf6,#ec4899);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      /* ---------- RESPONSIVE ---------- */
      @media(max-width:900px){
        .pw-container{
          grid-template-columns:1fr;
        }

        .pw-right{
          margin-top:32px;
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

        {/* LEFT CONTENT */}
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
            <span className="highlight">We start with clarity.</span> Every project begins with understanding your business, audience, and goals to set the right digital foundation. </p>

          <p>
            <span className="highlight">Planning meets action</span>
            Our strategies are practical and result-focused—executed with clear timelines, collaboration, and regular updates.
          </p>

          <p>
            <span className="highlight">Growth is continuously refined.</span> We monitor performance, refine strategies, and scale what works to deliver long-term business impact.
          </p>
        </div>

        {/* RIGHT CARDS */}
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
      q: "What services does SHA Infotechnology offer?",
      a: "We provide end-to-end digital solutions including website development, e-commerce websites, SEO, Google Ads, social media marketing, business profile creation, and content marketing."
    },
    {
      q: "Which service is best to start with?",
      a: "If you’re just starting, we recommend a professional website combined with basic SEO. For faster leads, Google Ads and social media marketing are ideal."
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Yes. We work with startups, small businesses, and growing brands, offering scalable solutions tailored to different budgets and growth stages."
    },
    {
      q: "How long does it take to see results?",
      a: "SEO typically shows noticeable improvement within 2–3 months. Paid ads and social media campaigns can start generating leads much faster, often within weeks."
    },
    {
      q: "How do I get started?",
      a: "Simply contact us for a free consultation. We’ll understand your requirements and recommend the best strategy for your business."
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
          <button onClick={() => window.location.href="/contact"}>
            BOOK FREE CONSULTATION →
          </button>
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


      // .sf-header{
      //   position:sticky;
      //   top:0;
      //   z-index:100;
      //   width:100%;
      //   background:rgba(232,232,232,0.96);
      //   backdrop-filter:blur(8px);
      //   border-bottom:1px solid rgba(0,0,0,0.06);
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
      //   color:var(--text-dark);
      //   font-size:18px;
      //   font-weight:700;
      //   cursor:pointer;
      //   text-decoration:none;
      //   transition:color 180ms ease, transform 180ms ease;
      // }
      // .sf-nav .nav-btn:hover{
      //   color:var(--accent-red);
      //   transform:translateY(-2px);
      // }
      // .sf-logo{
      //   display:flex;
      //   align-items:center;
      //   gap:12px;
      //   margin-left:auto;
      // }
      // .sf-logo .mark{
      //   width:44px;
      //   height:44px;
      //   border-radius:12px;
      //   background:var(--accent-red);
      //   display:flex;
      //   align-items:center;
      //   justify-content:center;
      //   font-weight:700;
      //   color:#fff;
      //   box-shadow:0 6px 18px rgba(185,5,4,0.35);
      // }
      // .sf-logo .title{font-weight:800;font-size:16px;}
      // .sf-logo .subtitle{font-size:11px;opacity:0.8;margin-top:2px;}

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

   
    
      // .svc-faq-subtitle{
      //   font-size:16px;
      //   color:#555;
      //   margin-bottom:24px;
      // }
      // .svc-faq-item{
      //   border-top:1px solid rgba(0,0,0,0.06);
      //   padding:18px 4px;
      //   transition:background 160ms ease, transform 160ms ease,
      //            box-shadow 160ms ease;
      // }
      // .svc-faq-item:last-child{
      //   border-bottom:1px solid rgba(0,0,0,0.06);
      // }
      // .svc-faq-item.hoverable:hover{
      //   background:#ffffff;
      //   transform:translateY(-4px);
      //   box-shadow:0 16px 40px rgba(185,5,4,0.25);
      // }
      // .svc-faq-header{
      //   display:flex;
      //   align-items:center;
      //   justify-content:space-between;
      //   cursor:pointer;
      //   gap:16px;
      // }
      // .svc-faq-question{
      //   font-size:18px;
      //   font-weight:700;
      // color:#ffffff;
      //   transition:color 160ms ease;
      // }
      // .svc-faq-item.open .svc-faq-question{
      // color:#B90504;
      // }
      // .svc-faq-toggle{
      //   width:32px;
      //   height:32px;
      //   border-radius:999px;
      //   border:2px solid #444;
      //   display:flex;
      //   align-items:center;
      //   justify-content:center;
      //   font-size:18px;
      //   font-weight:900;
      //   color:#444;
      //   flex-shrink:0;
      //   transition:background 160ms ease, color 160ms ease,
      //              border-color 160ms ease, transform 160ms ease;
      // }
      // .svc-faq-item.open .svc-faq-toggle{
      //   background:var(--accent-red);
      //   color:#ffffff;
      //   border-color:var(--accent-red);
      //   transform:translateY(-1px);
      // }
      // .svc-faq-answer{
      //   max-height:0;
      //   overflow:hidden;
      //   transition:max-height 260ms ease;
      // }
      // .svc-faq-item.open .svc-faq-answer{
      //   max-height:400px;
      // }
      // .svc-faq-answer p{
      //   margin-top:12px;
      //   font-size:15px;
      //   line-height:1.7;
      //   color:#555;
      // }

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

// .gp-wrap{
//   background:#f6f9ff;
//   padding:110px 7vw;
//   font-family:Inter,system-ui;
// }

// .gp-head{
//   display:flex;
//   justify-content:space-between;
//   align-items:flex-start;
//   gap:20px;
//   margin-bottom:60px;
// }

// .gp-title{
//   font-size:52px;
//   font-weight:900;
//   line-height:1.1;
//   max-width:720px;
//   color:#0f172a;
// }

// .gp-btn{
//   display:flex;
//   align-items:center;
//   gap:14px;
//   font-weight:800;
//   background:#fff;
//   border:2px solid #0f172a;
//   border-radius:999px;
//   padding:14px 26px;
//   cursor:pointer;
//   transition:all .25s ease;
// }

// .gp-btn:hover{
//   background:#0f172a;
//   color:#fff;
//   transform:translateY(-3px);
// }

// .gp-btn span{
//   width:38px;
//   height:38px;
//   border-radius:50%;
//   border:2px solid currentColor;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
// }

// .gp-grid{
//   display:grid;
//   grid-template-columns:repeat(4,1fr);
//   gap:28px;
// }

// .gp-card{
//   background:#ffffff;
//   border-radius:16px;
//   padding:40px 24px;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   text-align:center;
//   gap:18px;
//   box-shadow:0 20px 40px rgba(0,0,0,0.04);
//   transition:transform .25s ease, box-shadow .25s ease;
// }

// .gp-card:hover{
//   transform:translateY(-8px);
//   box-shadow:0 30px 60px rgba(0,0,0,0.08);
// }

// .gp-icon{
//   width:56px;
//   height:56px;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:28px;
// }

// .gp-card h4{
//   font-size:18px;
//   font-weight:700;
//   color:#0f172a;
// }

// @media(max-width:1100px){
//   .gp-grid{grid-template-columns:1fr 1fr;}
//   .gp-title{font-size:40px;}
// }

// @media(max-width:600px){
//   .gp-head{flex-direction:column;}
//   .gp-grid{grid-template-columns:1fr;}
//   .gp-title{font-size:32px;}
// }


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
  
    <ServicesHero />
    <div className="services-wrap">
      
<ServicesHighlightSection />
   
      <ProjectWorkflowSection />
      <GrowthPartnerSection />


<HomeFAQSection />

      {/* // <CTASection /> */}

       
    </div>
    </>
  );
}
