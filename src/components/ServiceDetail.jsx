// src/components/ServiceDetail.jsx
import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const SERVICE_DETAILS = {
  "website-development": {
    tag: "Web",
    title: "Website Development",
    punch: "Get a modern, responsive website that works smoothly on mobile and desktop.",
    intro:
      "We handle complete website development from scratch – from layout and UI to contact forms and basic SEO setup. The goal is simple: a clean site that loads fast, looks professional and clearly tells customers why they should choose you.",
    highlights: [
      "Custom design based on your brand and industry",
      "Responsive layouts that work on mobile, tablet and desktop",
      "Easy-to-use pages for services, about, contact and more",
      "Basic SEO setup: titles, descriptions and URL structure"
    ],
    heroStatLeft: "7–21 days",
    heroStatLeftLabel: "TYPICAL GO-LIVE",
    heroStatRight: "100%",
    heroStatRightLabel: "CUSTOM BUILT"
  },

  "business-website": {
    tag: "Web",
    title: "Business Website",
    punch: "Make it easy for customers to understand your business and contact you.",
    intro:
      "A business website is your online visiting card. We design pages that clearly show what you do, where you are, who you’ve worked with and how people can reach you – without any confusion or clutter.",
    highlights: [
      "Home, About, Services, Gallery and Contact sections",
      "Clear call-to-actions: call, WhatsApp, enquiry form",
      "Map integration and contact details in key places",
      "Content structure focused on trust and clarity"
    ],
    heroStatLeft: "5–14 days",
    heroStatLeftLabel: "TYPICAL GO-LIVE",
    heroStatRight: "24/7",
    heroStatRightLabel: "ONLINE PRESENCE"
  },

  "ecommerce-website": {
    tag: "Web",
    title: "E-commerce Website",
    punch: "Sell your products online with a secure, easy-to-use shopping experience.",
    intro:
      "We build e-commerce websites that make it simple for customers to browse products, add to cart and checkout safely. You get a backend to manage products, orders and basic offers.",
    highlights: [
      "Product, category and search-friendly layout",
      "Secure checkout with popular payment gateways",
      "Order and inventory management options",
      "Coupon / offer setup and basic reports"
    ],
    heroStatLeft: "2x",
    heroStatLeftLabel: "AVG. ORDER GROWTH",
    heroStatRight: "PCI",
    heroStatRightLabel: "SECURE CHECKOUT"
  },

  "social-media-marketing": {
    tag: "Social",
    title: "Social Media Marketing",
    punch: "Stay active on social media and consistently reach the right audience.",
    intro:
      "We plan and post regular content on Facebook and Instagram to keep your brand visible and engaging. From static posts to reels, we focus on building trust and recall with your audience.",
    highlights: [
      "Monthly content plan based on your business goals",
      "Design for posts, stories and promotional creatives",
      "Profile optimisation for better impression",
      "Basic performance tracking: reach, engagement, clicks"
    ],
    heroStatLeft: "4+",
    heroStatLeftLabel: "PLATFORMS SUPPORTED",
    heroStatRight: "10x",
    heroStatRightLabel: "AVG. REACH GROWTH"
  },

  "google-ads": {
    tag: "Ads",
    title: "Google Ads",
    punch: "Show up on Google exactly when people search for what you offer.",
    intro:
      "We create and manage Google Ads campaigns that focus on real results – calls, leads, website visits and store visits. Every campaign is tracked so you know how your budget is performing.",
    highlights: [
      "Campaign setup for Search and Display ads",
      "Keyword research based on your services and location",
      "Ad copy and extensions to improve click-through rate",
      "Conversion tracking setup to measure leads and calls"
    ],
    heroStatLeft: "3x",
    heroStatLeftLabel: "AVG. LEAD GROWTH",
    heroStatRight: "100%",
    heroStatRightLabel: "TRACKED SPEND"
  },

  seo: {
    tag: "SEO",
    title: "SEO (Search Engine Optimization)",
    punch: "Climb higher on Google for the keywords that bring real business.",
    intro:
      "We work on your website structure, content and technical setup to improve your ranking over time. The focus is on keywords that potential customers actually type, not just random traffic.",
    highlights: [
      "Basic SEO audit for your website",
      "On-page optimisation for key pages and services",
      "Local SEO improvements for Maps and area-based searches",
      "Content guidance for blogs and service pages"
    ],
    heroStatLeft: "3–6 months",
    heroStatLeftLabel: "TYPICAL TIMEFRAME",
    heroStatRight: "50+",
    heroStatRightLabel: "KEYWORDS MONITORED"
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICE_DETAILS[slug];

  useEffect(() => {
    const css = `
      :root{
        --accent-red:#B90504;
        --bg-grey:#E8E8E8;
        --text-dark:#202326;
        --aqua:#6CC4C1;
      }

      *{box-sizing:border-box;}
      body{margin:0;}

      .sd-wrap{
        min-height:100vh;
        background:var(--bg-grey);
        color:var(--text-dark);
        font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
      }

      .sf-header{
        position:sticky;
        top:0;
        z-index:100;
        width:100%;
        background:rgba(232,232,232,0.96);
        backdrop-filter:blur(8px);
        border-bottom:1px solid rgba(0,0,0,0.06);
      }
      .sf-header-inner{
        max-width:1400px;
        margin:0 auto;
        padding:14px 28px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        position:relative;
      }
      .sf-nav{
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        display:flex;
        gap:28px;
        align-items:center;
      }
      .sf-nav .nav-btn{
        background:none;
        border:none;
        color:var(--text-dark);
        font-size:18px;
        font-weight:700;
        cursor:pointer;
        text-decoration:none;
        transition:color 180ms ease, transform 180ms ease;
      }
      .sf-nav .nav-btn:hover{
        color:var(--accent-red);
        transform:translateY(-2px);
      }
      .sf-logo{
        display:flex;
        align-items:center;
        gap:12px;
        margin-left:auto;
      }
      .sf-logo .mark{
        width:44px;
        height:44px;
        border-radius:12px;
        background:var(--accent-red);
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:700;
        color:#fff;
        box-shadow:0 6px 18px rgba(185,5,4,0.35);
      }

      .sd-section{
        padding:80px 7vw;
        border-bottom:1px solid rgba(0,0,0,0.04);
      }
      .sd-max{
        max-width:1100px;
        margin:0 auto;
      }

      .sd-hero{
        background:radial-gradient(circle at top left,#ffffff 0,#E8E8E8 55%,#dcdcdc 100%);
      }
      .sd-hero-layout{
        display:grid;
        grid-template-columns:minmax(0,1.4fr) minmax(0,0.8fr);
        gap:40px;
        align-items:center;
      }
      .sd-pill{
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
      .sd-title{
        font-size:50px;
        font-weight:900;
        line-height:1.05;
        margin:0 0 14px 0;
      }
      .sd-punch{
        font-size:20px;
        font-weight:600;
        color:var(--accent-red);
        margin-bottom:18px;
      }
      .sd-intro{
        font-size:16px;
        line-height:1.8;
        color:#333;
      }

      .sd-hero-card{
        background:#ffffff;
        border-radius:26px;
        padding:26px 24px;
        box-shadow:0 34px 100px rgba(185,5,4,0.28);
        border:1px solid rgba(0,0,0,0.04);
        animation:sdFloatCard 9s ease-in-out infinite;
      }
      @keyframes sdFloatCard{
        0%{transform:translateY(0);}
        25%{transform:translateY(-8px);}
        50%{transform:translateY(0);}
        75%{transform:translateY(6px);}
        100%{transform:translateY(0);}
      }
      .sd-hero-card h3{
        margin:0 0 10px 0;
        font-size:18px;
        font-weight:800;
        color:var(--accent-red);
      }
      .sd-hero-card p{
        margin:0;
        font-size:14px;
        color:#444;
      }
      .sd-hero-stats{
        display:flex;
        justify-content:space-between;
        margin-top:20px;
      }
      .sd-stat{
        text-align:center;
      }
      .sd-stat span{
        display:block;
      }
      .sd-stat .number{
        font-size:26px;
        font-weight:800;
      }
      .sd-stat .label{
        font-size:11px;
        text-transform:uppercase;
        letter-spacing:0.14em;
        opacity:0.7;
      }

      .sd-highlights-grid{
        display:grid;
        grid-template-columns:1.2fr 0.8fr;
        gap:32px;
      }
      .sd-bullets-card,
      .sd-flow-card{
        background:#ffffff;
        border-radius:22px;
        padding:24px 22px;
        box-shadow:0 24px 70px rgba(185,5,4,0.22);
        border:1px solid rgba(0,0,0,0.05);
      }
      .sd-bullets-title,
      .sd-flow-title{
        font-size:18px;
        font-weight:800;
        margin-bottom:10px;
        color:var(--accent-red);
      }
      .sd-bullets-list{
        padding-left:18px;
        margin:0;
      }
      .sd-bullets-list li{
        margin-bottom:8px;
        font-size:14px;
        color:#444;
      }

      .sd-flow-step{
        margin-bottom:8px;
        font-size:14px;
        color:#444;
      }
      .sd-flow-step span{
        font-weight:800;
      }

      .sd-cta-strip{
        margin-top:26px;
        display:flex;
        flex-wrap:wrap;
        gap:14px;
        align-items:center;
      }
      .sd-cta-btn{
        padding:12px 22px;
        border-radius:999px;
        border:none;
        font-size:15px;
        font-weight:800;
        cursor:pointer;
        background:var(--accent-red);
        color:#fff;
        box-shadow:0 18px 50px rgba(185,5,4,0.4);
        transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
      }
      .sd-cta-btn:hover{
        transform:translateY(-4px);
        background:#9b0403;
        box-shadow:0 26px 70px rgba(185,5,4,0.5);
      }
      .sd-cta-note{
        font-size:14px;
        color:#444;
      }

      .sd-breadcrumb{
        font-size:13px;
        margin-bottom:10px;
      }
      .sd-breadcrumb a{
        color:var(--accent-red);
        text-decoration:none;
        font-weight:600;
      }

      .sd-back-link{
        font-size:14px;
        color:var(--accent-red);
        cursor:pointer;
        text-decoration:none;
        font-weight:600;
      }

      @media(max-width:900px){
        .sd-section{padding:60px 24px;}
        .sd-hero-layout{grid-template-columns:1fr;}
        .sd-title{font-size:38px;}
        .sd-highlights-grid{grid-template-columns:1fr;}
      }
    `;

    const prev = document.getElementById("service-detail-page-styles");
    if (prev) prev.remove();
    const styleTag = document.createElement("style");
    styleTag.id = "service-detail-page-styles";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);

    return () => {
      const el = document.getElementById("service-detail-page-styles");
      if (el) el.remove();
    };
  }, []);

  if (!service) {
    return (
      <div className="sd-wrap">
        <header className="sf-header">
          <div className="sf-header-inner">
            <div style={{ width: 120 }} />
            <nav className="sf-nav" aria-label="Main navigation">
              <Link className="nav-btn" to="/">Home</Link>
              <Link className="nav-btn" to="/about">About Us</Link>
              <Link className="nav-btn" to="/services">Services</Link>
            </nav>
          </div>
        </header>
        <section className="sd-section">
          <div className="sd-max">
            <p>Service not found.</p>
            <Link to="/services" className="sd-back-link">
              ← Back to all services
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="sd-wrap">
      <header className="sf-header">
        <div className="sf-header-inner">
          <div style={{ width: 120 }} />
          <nav className="sf-nav" aria-label="Main navigation">
            <Link className="nav-btn" to="/">Home</Link>
            <Link className="nav-btn" to="/about">About Us</Link>
            <Link className="nav-btn" to="/services">Services</Link>
            <button className="nav-btn">Contact</button>
          </nav>
          <div className="sf-logo" style={{ gap: 12 }}>
            <div className="mark">S</div>
            <div className="brand" style={{ textAlign: "right" }}>
              <div className="title">Shainfotechnology</div>
              <div className="subtitle">Digital Marketing</div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="sd-section sd-hero">
        <div className="sd-max sd-hero-layout">
          <div>
            <div className="sd-breadcrumb">
              <Link to="/services">Services</Link> &nbsp;/&nbsp; {service.title}
            </div>
            <div className="sd-pill">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#B90504"
                }}
              />
              {service.tag}
            </div>
            <h1 className="sd-title">{service.title}</h1>
            <div className="sd-punch">{service.punch}</div>
            <p className="sd-intro">{service.intro}</p>
          </div>

          <aside className="sd-hero-card">
            <h3>What you can expect</h3>
            <p>
              We plan, launch and optimise this service with clear milestones,
              reporting and next steps – so you always know what&apos;s happening.
            </p>
            <div className="sd-hero-stats">
              <div className="sd-stat">
                <span className="number">{service.heroStatLeft}</span>
                <span className="label">{service.heroStatLeftLabel}</span>
              </div>
              <div className="sd-stat">
                <span className="number">{service.heroStatRight}</span>
                <span className="label">{service.heroStatRightLabel}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* HIGHLIGHTS + FLOW */}
      <section className="sd-section">
        <div className="sd-max sd-highlights-grid">
          <div className="sd-bullets-card">
            <div className="sd-bullets-title">What we do for you</div>
            <ul className="sd-bullets-list">
              {service.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="sd-flow-card">
            <div className="sd-flow-title">How the engagement works</div>
            <div className="sd-flow-step">
              <span>1. Discovery & Strategy</span> – a short call to understand
              your goals, audience, offers and current numbers.
            </div>
            <div className="sd-flow-step">
              <span>2. Setup & Launch</span> – we configure accounts, tracking
              and creatives, then go live with the first version.
            </div>
            <div className="sd-flow-step">
              <span>3. Optimise & Improve</span> – weekly tweaks based on data
              and new ideas to improve results.
            </div>
            <div className="sd-flow-step">
              <span>4. Report & Plan Ahead</span> – transparent reports and
              suggestions on where to invest next.
            </div>
          </div>
        </div>

        <div className="sd-max sd-cta-strip">
          <button
            type="button"
            className="sd-cta-btn"
            onClick={() => navigate("/services")}
          >
            ← Back to all services
          </button>
          <div className="sd-cta-note">
            Want this service for your brand? Use the form on the Services page
            or call us at <strong>+91 93610 46387</strong>.
          </div>
        </div>
      </section>
    </div>
  );
}
