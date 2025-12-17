// src/components/Services.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ----------------------------------------------------
   CONTACT CTA (replaced with working form)
---------------------------------------------------- */
function ContactSection() {
  useEffect(() => {
    const css = `
      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
        --home-aqua:#6CC4C1;
      }

      .svc-contact-wrapper{
        min-height:80vh;
        display:grid;
        grid-template-columns:1.1fr 1fr;
        gap:56px;
        padding:72px 84px;
        align-items:start;
        font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
        background:var(--home-grey);
        color:#111;
      }

      .svc-contact-title{
        font-size:64px;
        font-weight:900;
        line-height:1.05;
        margin:0 0 36px 0;
        animation:svcFloatHeadline 6s ease-in-out infinite;
      }

      @keyframes svcFloatHeadline{
        0%{transform:translateY(0)}
        25%{transform:translateY(-8px)}
        50%{transform:translateY(0)}
        75%{transform:translateY(6px)}
        100%{transform:translateY(0)}
      }

      .svc-contact-form{
        width:100%;
        background:#ffffff;
        border-radius:18px;
        padding:36px;
        box-shadow:0 24px 60px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.04);
        transition:transform 260ms ease, box-shadow 260ms ease;
      }

      .svc-contact-form:hover{
        transform:translateY(-8px);
        box-shadow:0 32px 80px rgba(185,5,4,0.35);
      }

      .svc-contact-form .row{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
        margin-bottom:18px;
      }

      .svc-contact-form .field{margin-bottom:18px;}

      .svc-contact-form input,
      .svc-contact-form textarea{
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

      .svc-contact-form input::placeholder,
      .svc-contact-form textarea::placeholder{
        color:#777;
        font-weight:600;
      }

      .svc-contact-form input:focus,
      .svc-contact-form textarea:focus{
        border-color:var(--home-red);
        box-shadow:0 0 0 1px rgba(185,5,4,0.4);
        transform:translateY(-2px);
      }

      .svc-contact-form textarea{
        min-height:140px;
        resize:vertical;
      }

      .svc-recaptcha{
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

      .svc-recaptcha .checkbox{
        width:20px;
        height:20px;
        border-radius:4px;
        border:2px solid #111;
      }

      .svc-submit-btn{
        width:100%;
        background:var(--home-red);
        padding:18px;
        border-radius:12px;
        color:#fff;
        font-size:20px;
        font-weight:800;
        border:none;
        cursor:pointer;
        box-shadow:0 16px 40px rgba(185,5,4,0.4);
        transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
      }

      .svc-submit-btn:hover{
        transform:translateY(-6px);
        background:#9b0403;
        box-shadow:0 26px 60px rgba(185,5,4,0.5);
      }

      .svc-status {
        margin-top:12px;
        font-weight:700;
      }

      @media(max-width:980px){
        .svc-contact-wrapper{
          grid-template-columns:1fr;
          padding:40px 24px;
          gap:28px;
        }
        .svc-contact-title{font-size:42px;}
        .svc-contact-form{padding:24px;}
        .svc-contact-form .row{grid-template-columns:1fr;}
      }
    `;

    const old = document.getElementById("services-contact-styles");
    if (old) old.remove();
    const style = document.createElement("style");
    style.id = "services-contact-styles";
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => {
      const s = document.getElementById("services-contact-styles");
      if (s) s.remove();
    };
  }, []);

  // form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { ok: boolean, msg: string }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.name || !form.email || !form.service) {
      setStatus({ ok: false, msg: "Please enter name, email and service." });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email." });
      return false;
    }
    return true;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Safely parse JSON if present (prevents "Unexpected end of JSON input")
      let data = null;
      try {
        const text = await res.text();
        data = text ? JSON.parse(text) : null;
      } catch (parseErr) {
        console.warn("Failed to parse JSON response:", parseErr);
        data = null;
      }

      if (res.ok) {
        setStatus({ ok: true, msg: (data && data.message) || "Sent — we'll contact you soon." });
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        const errMsg = (data && (data.error || data.details)) || `Server error ${res.status}`;
        setStatus({ ok: false, msg: errMsg });
      }
    } catch (err) {
      console.error("Network or fetch error:", err);
      setStatus({ ok: false, msg: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="svc-contact-wrapper">
      <div>
        <h1 className="svc-contact-title">Ready to turn clicks into customers?</h1>

        <div style={{ marginTop: 18, fontSize: 18, color: "#333" }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 20 }}>
              Talk to our strategy team
            </div>
            <div style={{ opacity: 0.85, marginTop: 8 }}>
              +91 93610 46387 &nbsp;|&nbsp; shainfotech05@gmail.com
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>Office hours</div>
            <div style={{ opacity: 0.8, marginTop: 8 }}>
              Monday – Saturday, 10:00 AM – 7:00 PM
            </div>
          </div>
        </div>
      </div>

      <form
        className="svc-contact-form"
        onSubmit={onSubmit}
        aria-label="Services enquiry form"
      >
        <div className="row">
          <div className="field">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              aria-label="Name"
            />
          </div>
          <div className="field">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              aria-label="Phone number"
            />
          </div>
        </div>

        <div className="field">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
        </div>

        <div className="field">
          <input
            name="service"
            value={form.service}
            onChange={handleChange}
            type="text"
            placeholder="Service you’re interested in"
            aria-label="Service"
          />
        </div>

        <div className="field">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            aria-label="Message"
          />
        </div>

        <div className="svc-recaptcha" role="checkbox" aria-checked="false">
          <div className="checkbox" aria-hidden="true" />
          <div>I&apos;m not a robot</div>
        </div>

        <button className="svc-submit-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "GET CUSTOM STRATEGY"}
        </button>

        {status && (
          <div
            className="svc-status"
            style={{ color: status.ok ? "green" : "crimson" }}
            role="status"
          >
            {status.msg}
          </div>
        )}
      </form>
    </section>
  );
}

/* ----------------------------------------------------
   MAIN SERVICES PAGE (unchanged structure, kept styles)
---------------------------------------------------- */
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

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

      .services-wrap{
        min-height:100vh;
        background:var(--bg-grey);
        color:var(--text-dark);
        font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
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
        padding:80px 7vw;
        border-bottom:1px solid rgba(0,0,0,0.04);
      }
      .svc-max{
        max-width:1100px;
        margin:0 auto;
      }
      .svc-section h2{
        font-size:42px;
        font-weight:900;
        margin:0 0 18px 0;
        color:var(--text-dark);
        transition:color 200ms ease;
      }
      .svc-section p{
        transition:color 200ms ease;
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
        background:#ffffff;
        border-radius:18px;
        padding:22px 22px 24px;
        box-shadow:0 20px 60px rgba(185,5,4,0.18);
        border:1px solid rgba(0,0,0,0.05);
        transition:transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
        text-decoration:none;
        color:inherit;
        display:block;
      }
      .svc-card:hover{
        transform:translateY(-8px);
        box-shadow:0 30px 80px rgba(185,5,4,0.3);
        background:#fffdfd;
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
      }
      .svc-card-desc{
        font-size:14px;
        line-height:1.7;
        color:#444;
      }

      .svc-process-strip{
        margin-top:32px;
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:18px;
      }
      .svc-step{
        background:#ffffff;
        border-radius:16px;
        padding:18px 18px 20px;
        box-shadow:0 16px 50px rgba(185,5,4,0.18);
        border:1px solid rgba(0,0,0,0.04);
        position:relative;
        overflow:hidden;
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

      .svc-faq-section{
        background:#f4f4f4;
      }
      .svc-faq-card{
        max-width:1100px;
        margin:0 auto;
        border-radius:24px;
        background:#ffffff;
        box-shadow:0 24px 70px rgba(185,5,4,0.25);
        padding:32px 32px 40px;
      }
      .svc-faq-title{
        font-size:32px;
        font-weight:900;
        margin-bottom:8px;
        color:var(--text-dark);
      }
      .svc-faq-subtitle{
        font-size:16px;
        color:#555;
        margin-bottom:24px;
      }
      .svc-faq-item{
        border-top:1px solid rgba(0,0,0,0.06);
        padding:18px 4px;
        transition:background 160ms ease, transform 160ms ease,
                 box-shadow 160ms ease;
      }
      .svc-faq-item:last-child{
        border-bottom:1px solid rgba(0,0,0,0.06);
      }
      .svc-faq-item.hoverable:hover{
        background:#ffffff;
        transform:translateY(-4px);
        box-shadow:0 16px 40px rgba(185,5,4,0.25);
      }
      .svc-faq-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        cursor:pointer;
        gap:16px;
      }
      .svc-faq-question{
        font-size:18px;
        font-weight:700;
        color:#333333;
        transition:color 160ms ease;
      }
      .svc-faq-item.open .svc-faq-question{
        color:var(--accent-red);
      }
      .svc-faq-toggle{
        width:32px;
        height:32px;
        border-radius:999px;
        border:2px solid #444;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:18px;
        font-weight:900;
        color:#444;
        flex-shrink:0;
        transition:background 160ms ease, color 160ms ease,
                   border-color 160ms ease, transform 160ms ease;
      }
      .svc-faq-item.open .svc-faq-toggle{
        background:var(--accent-red);
        color:#ffffff;
        border-color:var(--accent-red);
        transform:translateY(-1px);
      }
      .svc-faq-answer{
        max-height:0;
        overflow:hidden;
        transition:max-height 260ms ease;
      }
      .svc-faq-item.open .svc-faq-answer{
        max-height:400px;
      }
      .svc-faq-answer p{
        margin-top:12px;
        font-size:15px;
        line-height:1.7;
        color:#555;
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

  /* --------- DATA: SERVICES, PROCESS, FAQ --------- */
  const services = [
    {
      tag: "Web",
      title: "Website Development",
      slug: "website-development",
      desc:
        "Complete website development for businesses that need a clean, modern and responsive online presence."
    },
    {
      tag: "Web",
      title: "Business Website",
      slug: "business-website",
      desc:
        "Professional business websites that clearly explain who you are, what you do and how customers can contact you."
    },
    {
      tag: "Web",
      title: "E-commerce Website",
      slug: "ecommerce-website",
      desc:
        "Online stores with product pages, secure payment, cart and order management for your business."
    },
    {
      tag: "Social",
      title: "Social Media Marketing",
      slug: "social-media-marketing",
      desc:
        "Content planning, post design and campaigns on Facebook & Instagram to grow your brand visibility."
    },
    {
      tag: "Ads",
      title: "Google Ads",
      slug: "google-ads",
      desc:
        "Search and display ad campaigns on Google to generate more calls, leads and website visits."
    },
    {
      tag: "SEO",
      title: "SEO (Search Engine Optimization)",
      slug: "seo",
      desc:
        "On-page & technical SEO to improve your ranking on Google and get more organic enquiries."
    }
  ];

  const steps = [
    {
      title: "Discovery Call",
      text: "We understand your business, goals, current challenges and timelines."
    },
    {
      title: "Strategy & Proposal",
      text: "You get a clear plan, scope of work and transparent pricing—no hidden surprises."
    },
    {
      title: "Execution & Updates",
      text: "Design, development and campaigns go live with regular check-ins and approvals."
    },
    {
      title: "Optimize & Scale",
      text: "We track results, tweak what’s needed and scale the winning channels."
    }
  ];

  const plans = [
    {
      label: "For new brands",
      name: "Starter Presence",
      price: "Best for: new businesses going online",
      points: [
        "Single-page or basic 3-page website",
        "Starter SEO setup",
        "Basic social media creatives"
      ]
    },
    {
      label: "Most booked",
      name: "Growth Engine",
      price: "Best for: growing local & service brands",
      points: [
        "Business website or e-commerce",
        "Ongoing SEO & content",
        "Lead-gen ad campaigns"
      ]
    },
    {
      label: "For aggressive scale",
      name: "Performance Max",
      price: "Best for: brands ready to invest in scale",
      points: [
        "Multi-channel ad strategy",
        "Conversion tracking & CRO",
        "Weekly performance dashboards"
      ]
    }
  ];

  const faqs = [
    {
      q: "Which services should I start with?",
      a:
        "If you’re new, we usually begin with a solid website + basic SEO + one ad or social channel. Once this foundation performs well, we add more channels instead of doing everything at once."
    },
    {
      q: "Do you offer monthly retainers or one-time projects?",
      a:
        "Both. Websites and branding can be one-time projects, while SEO, social media and ads usually work best on a monthly retainer so we can optimize continuously."
    },
    {
      q: "Can you work with my existing website or designers?",
      a:
        "Yes. We’re happy to audit your current assets and either improve them or work alongside your in-house team or previous agency."
    },
    {
      q: "How do you decide the budget for ads?",
      a:
        "We look at your industry, competition and goals, then suggest a realistic monthly budget. You’ll always approve final budgets before campaigns go live."
    },
    {
      q: "Will I get reports on what’s happening?",
      a:
        "Yes. You receive regular performance reports with plain-language explanations and next-step suggestions so you always know where your money is going."
    }
  ];

  return (
    <div className="services-wrap">
      {/* HEADER */}
      {/* <header className="sf-header">
        <div className="sf-header-inner">
          <div style={{ width: 120 }} />
          <nav className="sf-nav" aria-label="Main navigation">
            <Link className="nav-btn" to="/">Home</Link>
            <Link className="nav-btn" to="/about">About Us</Link>
            <Link className="nav-btn" to="/services">Services</Link>
             <Link to="/contact" className="nav-btn">
                          Contact
                        </Link> */}
            {/* <button className="nav-btn">Contact</button> */}
          {/* </nav>
          <div className="sf-logo" style={{ gap: 12 }}>
            <div className="mark">S</div>
            <div className="brand" style={{ textAlign: "right" }}>
              <div className="title">Shainfotechnology</div>
              <div className="subtitle">Digital Marketing</div>
            </div>
          </div>
        </div>
      </header> */}

      {/* HERO */}
      <section className="svc-section svc-hero">
        <div className="svc-max svc-hero-layout">
          <div>
            <div className="svc-pill">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#B90504"
                }}
              />
              OUR SERVICES
            </div>
            <h1 className="svc-hero-title">
              Services that turn web traffic
            <br /> into real business.
            </h1>
            <p className="svc-hero-lead">
              From website design to SEO and paid ads, we build one connected
              system that attracts the right people, convinces them to trust
              you, and makes it easy for them to take action.
            </p>

            <div className="svc-hero-badges">
              <div className="svc-hero-badge">Websites &amp; E-commerce</div>
              <div className="svc-hero-badge">SEO &amp; Local Ranking</div>
              <div className="svc-hero-badge">Social &amp; Paid Ads</div>
            </div>
          </div>

          <aside className="svc-hero-card">
            <div className="svc-hero-card-title">
              Why brands stay with Sha Infotechnology
            </div>
            <p style={{ fontSize: 14, color: "#444", marginBottom: 18 }}>
              Clear communication, transparent reporting and strategies that
              are built for your stage of growth — not copy-pasted templates.
            </p>

            <div className="svc-hero-stat-row">
              <div className="svc-hero-stat">
                <span className="number">30+</span>
                <span className="label">ACTIVE PROJECTS</span>
              </div>
              <div className="svc-hero-stat">
                <span className="number">3x</span>
                <span className="label">AVG LEAD GROWTH</span>
              </div>
              <div className="svc-hero-stat">
                <span className="number">95%</span>
                <span className="label">CLIENT RETENTION</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="svc-section">
        <div className="svc-max">
          <h2>What we can handle for you.</h2>
          <p>
            Pick a single service or combine a few into one powerful digital
            growth plan. Everything is customised to your industry, audience and
            budget.
          </p>

          <div className="svc-grid">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="svc-card"
              >
                <div className="svc-card-tag">{svc.tag}</div>
                <div className="svc-card-title">{svc.title}</div>
                <div className="svc-card-desc">{svc.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="svc-section">
        <div className="svc-max">
          <h2>How a project with us usually runs.</h2>
          <p>
            No confusion, no disappearing acts. You always know what we&apos;re
            working on and what&apos;s coming next.
          </p>

          <div className="svc-process-strip">
            {steps.map((step, i) => (
              <div key={step.title} className="svc-step">
                <div className="svc-step-number">{i + 1}</div>
                <div className="svc-step-title">{step.title}</div>
                <div className="svc-step-text">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS / PACKAGES */}
      <section className="svc-section">
        <div className="svc-max">
          <h2>Plans that fit where you are right now.</h2>
          <p>
            These are popular starting points. We fine-tune every plan after
            we&apos;ve understood your niche, location and goals.
          </p>

          <div className="svc-plans">
            {plans.map((plan) => (
              <div key={plan.name} className="svc-plan-card">
                <div className="svc-plan-label">{plan.label}</div>
                <div className="svc-plan-name">{plan.name}</div>
                <div className="svc-plan-price">{plan.price}</div>
                {plan.points.map((p) => (
                  <div key={p} className="svc-plan-point">
                    • {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-section svc-faq-section">
        <div className="svc-faq-card">
          <h2 className="svc-faq-title">Services FAQs</h2>
          <p className="svc-faq-subtitle">
            A quick look at the questions clients usually ask before they sign up.
          </p>

          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={item.q}
                className={
                  "svc-faq-item hoverable" + (isOpen ? " open" : "")
                }
              >
                <div
                  className="svc-faq-header"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div className="svc-faq-question">{item.q}</div>
                  <div className="svc-faq-toggle">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
                <div className="svc-faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <ContactSection />
    </div>
  );
}
