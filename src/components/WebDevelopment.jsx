
import { useEffect,useState } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
// 1
export function WebDevelopmentHero() {
  useEffect(() => {
    const css = `
      .smm-hero{
        background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
        display:grid;
        grid-template-columns:1.2fr 1fr;
        align-items:center;
        padding:80px 7vw;              /* 🔥 reduced */
        font-family:Inter,system-ui;
        color:#fff;
        overflow:hidden;
      }

      .smm-left small{
        font-size:14px;
        letter-spacing:0.12em;
        text-transform:uppercase;
        color:#c7c7ff;
        font-weight:700;
      }

      .smm-title{
        font-size:56px;
        font-weight:900;
        line-height:1.15;
        margin:16px 0;                /* 🔥 tightened */
      }

      .smm-title .accent{
        background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .smm-desc{
        font-size:18px;
        color:#cfcfe5;
        max-width:540px;
        line-height:1.7;
        margin-top:12px;              /* 🔥 reduced */
      }

      .smm-right{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .icon-cloud{
        position:relative;
        width:360px;
        height:360px;
      }

      .icon{
        position:absolute;
        width:56px;
        height:56px;
        border-radius:16px;
        background:linear-gradient(135deg,#7c7cff,#c084fc);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:26px;
        box-shadow:0 20px 50px rgba(124,124,255,.45);
        animation:float 6s ease-in-out infinite;
      }

      .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
      .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
      .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
      .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
      .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
      .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

      @keyframes float{
        0%{transform:translateY(0)}
        50%{transform:translateY(-14px)}
        100%{transform:translateY(0)}
      }

      /* ================= MOBILE ================= */
      @media(max-width:900px){
        .smm-hero{
          grid-template-columns:1fr;
          text-align:center;
          padding:60px 24px;          /* 🔥 reduced */
        }

        .smm-title{
          font-size:36px;
        }

        .smm-desc{
          margin-left:auto;
          margin-right:auto;
        }

        .smm-right{
          margin-top:36px;            /* 🔥 reduced */
        }

        .icon-cloud{
          width:280px;                /* 🔥 responsive */
          height:280px;
        }
      }
    `;

    const id = "web-dev-hero-clean-spacing";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, []);

  return (
    <section className="smm-hero">
      <div className="smm-left">
        <small>Website Development</small>

        <h1 className="smm-title">
          Build a <span className="accent">Website Designed for</span><br />
          Performance and Growth <br />
          <span className="accent">Modern, Responsive, and Conversion-Focused</span>
        </h1>

        <p className="smm-desc">
          We develop fast, secure, and scalable websites tailored to your business goals.
          Every website is built to deliver a seamless user experience and support
          long-term digital success.
        </p>
      </div>

      <div className="smm-right">
        <div className="icon-cloud">
          <div className="icon">G</div>
          <div className="icon">🔍</div>
          <div className="icon">📈</div>
          <div className="icon">📍</div>
          <div className="icon">📝</div>
          <div className="icon">⚙️</div>
          <div className="icon">⭐</div>
        </div>
      </div>
    </section>
  );
}



// export function SecondSlideWebDevelopment() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const css = `
// /* ================= SECTION ================= */
// .why-orbit-dark{
//   padding:110px;
//   padding-bottom:10px;
//   // background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }

// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }

// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
//   margin-bottom:14px;
// }

// /* 🔥 GAP FIXES (SAFE – NO DESIGN CHANGE) */
// .why-dark-left li{
//   list-style:none;
//   margin:0;
//   padding:0;
// }

// .why-dark-left li + p{
//   margin-top:6px;
// }

// .why-dark-left h2 + li{
//   margin-top:0;
// }

// .why-dark-left strong{
//   color:#ffffff;
// }

// /* RIGHT IMAGE */
// .why-dark-image{
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease .2s;
// }

// .why-orbit-dark.show .why-dark-image{
//   opacity:1;
//   transform:none;
// }

// .why-dark-image img{
//   width:100%;
//   max-width:420px;
//   border-radius:18px;
// }

// /* 🔥 DESKTOP GAP CONTROL ONLY */
// @media(min-width:901px){
//   .why-orbit-dark{
//     padding-top:90px;
//     padding-bottom:90px;
//   }
// }

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }

//   .why-dark-left p{
//     margin-left:auto;
//     margin-right:auto;
//   }

//   .why-dark-image{
//     margin-top:40px;
//   }
// }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">

//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>Choose us</span> for your Web Development Services?
//           </h2>
 
//           <p>
//             <strong>Purpose-Driven Website Development</strong><br />
//             We build websites with clear structure and functionality, designed
//             to support your business goals and user journey.
//           </p>

//           <p>
//             <strong>Responsive & Cross-Device Compatibility</strong><br />
//             Every website we develop works seamlessly across mobile, tablet, and
//             desktop devices.
//           </p>

//           <p>
//             <strong>Performance-Optimized Codebase</strong><br />
//             Clean, efficient code ensures fast load times, smooth navigation,
//             and a better user experience.
//           </p>

//           <p>
//             <strong>SEO-Ready & Scalable Structure</strong><br />
//             Our websites are built with search-friendly architecture and
//             scalability in mind for long-term growth.
//           </p>

//           <p>
//             <strong>Secure & Reliable Development</strong><br />
//             We follow secure development practices to protect your website,
//             data, and users.
//           </p>
//         </div>

//         {/* RIGHT IMAGE */}
       
// <div className="why-dark-image">
//           <img
//             src="/images/about/whyss.png"
//             alt="Web Development"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
export function SecondSlideWebDevelopment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= BRAND CONSULTANCY SECTION ================= */
.brand-section{
  // background:#ffffff;
  padding:110px 7vw;
  font-family:Inter,system-ui;
  overflow:hidden;
}

/* GRID */
.brand-grid{
  max-width:1500px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  gap:80px;
}

/* LEFT CONTENT */
.brand-left{
  opacity:0;
  transform:translateY(40px);
  transition:all .9s ease;
}

.brand-section.show .brand-left{
  opacity:1;
  transform:none;
}

/* ===== GRADIENT HEADING ===== */
.brand-left h2{
  font-size:42px;
  font-weight:900;
  margin-bottom:26px;
  line-height:1.15;
  color:#111827; /* fallback */
}

/* GRADIENT TEXT */
.brand-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  color:transparent;
}
.brand-white{
  color:#ffffff;
}
/* PARAGRAPH */
.brand-left p{
  font-size:17px;
  line-height:1.9;
  color:#ffffff;
  max-width:650px;
  margin-bottom:20px;
}

/* RIGHT IMAGE */
.brand-right{
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transform:translateY(40px);
  transition:all .9s ease .2s;
}

.brand-section.show .brand-right{
  opacity:1;
  transform:none;
}

.brand-right img{
  width:100%;
  max-width:480px;
}

/* MOBILE */
@media(max-width:900px){
  .brand-grid{
    grid-template-columns:1fr;
    text-align:center;
  }

  .brand-left p{
  color:#ffffff;
    margin-left:auto;
    margin-right:auto;
  }

  .brand-right{
    margin-top:40px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      style.remove();
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="brand-section" ref={sectionRef}>
      <div className="brand-grid">

        {/* LEFT CONTENT */}
        <div className="brand-left">
          <h2>
  <span className="brand-white">What is </span>
  <span className="brand-gradient">Web Development</span>
  <span className="brand-white">?</span>
</h2>

          <p>
           Web development is the process of designing, building, and maintaining websites that are functional, fast, and user-friendly. A well-developed website acts as the digital foundation of your business, supporting marketing, sales, and customer engagement.
          </p>

          <p>
           We focus on creating responsive, performance-optimized websites that work seamlessly across all devices. Our development approach ensures clean code, scalability, and SEO-ready structure—so your website grows with your business and delivers a strong user experience.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="brand-right">
          <img
            src="/images/about/whyss.png"
            alt="Brand Consultancy Illustration"
          />
        </div>

      </div>
    </section>
  );
}


// 3


export function ServicesGridWebDevelopment() {
  useEffect(() => {
    const css = `
.services-wrap{
  // padding:110px 7vw;
  // background:radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  color:#e5e7eb;
padding-top:0px;
  /* 🔥 REMOVE DEFAULT SECTION GAPS */
  margin:0;
}

/* GRID */
.services-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
}

/* CARD */
.service-card{
  background:#ffffff;
  border-radius:22px;
  padding:40px 34px;
  position:relative;
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 20px 60px rgba(0,0,0,0.6),
    inset 0 0 0 rgba(255,255,255,0);
  transition:all .35s ease;
  overflow:hidden;
}

/* Glow line */
.service-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:22px;
  background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
  opacity:0;
  transition:opacity .35s ease;
  pointer-events:none;
}

.service-card:hover::before{
  opacity:1;
}

.service-card:hover{
  transform:translateY(-10px);
  box-shadow:
    0 30px 90px rgba(185,5,4,0.45),
    0 0 40px rgba(185,5,4,0.35);
}

.service-number{
  position:absolute;
  top:18px;
  right:22px;
  font-size:60px;
  font-weight:900;
  color:rgba(255,255,255,0.06);
}

/* ICON */
.service-icon{
  width:56px;
  height:56px;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  margin-bottom:20px;
  position:relative;
  z-index:1;
}

.service-icon::after{
  content:"";
  position:absolute;
  inset:-12px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  filter:blur(22px);
  opacity:0.6;
  z-index:-1;
}

/* TEXT */
.service-title{
  font-size:20px;
  font-weight:800;
  margin:0 0 12px 0;
  color:#000000;
}

.service-desc{
  font-size:15px;
  line-height:1.75;
  margin:0;
  color:#000000;
}

/* 🔥 DESKTOP GAP CONTROL ONLY */
@media(min-width:901px){
  .services-wrap{
    padding-top:90px;
    padding-bottom:90px;
  }
}

/* MOBILE – COMPLETELY UNCHANGED */
@media(max-width:900px){
  .services-grid{
    grid-template-columns:1fr;
  }
}
`;

    const id = "services-grid-dark-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
    };
  }, []);

  const services = [
    {
      title: "Purpose-Driven Web Architecture",
      desc: "Websites structured around user flow, clarity, and business objectives.",
      icon: "🧭"
    },
    {
      title: "Device-First Responsive Builds",
      desc: "Layouts engineered to adapt flawlessly across all modern devices.",
      icon: "📐"
    },
    {
      title: "Speed-Focused Engineering",
      desc: "Lean code and optimized assets for faster load times and smoother interactions.",
      icon: "⚡"
    },
    {
      title: "Search-Ready Codebase",
      desc: "Technically sound foundations built for long-term search visibility.",
      icon: "🔎"
    },
    {
      title: "Scalable Content Management",
      desc: "Flexible CMS setups that grow with your content and team.",
      icon: "🧩"
    },
    {
      title: "Security-First Development",
      desc: "Hardened builds with best-practice protections from day one.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="services-wrap">
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-number">{i + 1}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


// 4


export function WhyWebDevelopmentHeroDark() {
  const ref = useRef(null);

  useEffect(() => {
    const css = `
.seo-hero-dark{
  min-height:90vh;
  display:grid;
  place-items:center;
  // background:radial-gradient(circle at top,#0b1220,#020617 70%);
  font-family:Inter,system-ui;
  color:#e5e7eb;
  overflow:hidden;
  // padding:100px 7vw;
padding-top:5px;
  /* 🔥 REMOVE DEFAULT SECTION GAPS */
  margin:0;
}

.seo-hero-grid{
  max-width:1300px;
  width:100%;
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:80px;
  align-items:center;
}

/* LEFT */
.seo-left{
  opacity:0;
  transform:translateY(40px);
  transition:all 1s ease;
}

.seo-hero-dark.show .seo-left{
  opacity:1;
  transform:none;
}

.seo-left h1{
  font-size:42px;
  font-weight:900;
  line-height:1.2;
  margin-bottom:24px;
  color:#fff;
}

.seo-left h1 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* 🔥 GAP FIX FOR LIST ITEMS (NO STYLE CHANGE) */
.seo-left li{
  font-size:18px;
  line-height:2;
  color:#cbd5f5;
  max-width:560px;

  margin:0 0 20px 0;
  padding:0;
  list-style:none;
}

/* RIGHT IMAGE */
.seo-right{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transform:scale(.9);
  transition:all 1s ease .2s;
}

.seo-hero-dark.show .seo-right{
  opacity:1;
  transform:scale(1);
}

/* IMAGE + GLOW */
.seo-image-wrap::before{
  content:"";
  position:absolute;
  width:420px;
  height:420px;
  background:radial-gradient(
    circle,
    rgba(139,92,246,.45),
    transparent 70%
  );
  filter:blur(50px);
  z-index:0;
}

.seo-image-wrap img{
  position:relative;
  z-index:1;
  width:100%;
  max-width:420px;
}

/* 🔥 DESKTOP GAP CONTROL ONLY */
@media(min-width:901px){
  .seo-hero-dark{
    padding-top:80px;
    padding-bottom:80px;
  }
}

/* MOBILE – COMPLETELY UNCHANGED */
@media(max-width:900px){
  .seo-hero-grid{
    grid-template-columns:1fr;
    text-align:center;
    gap:50px;
  }

  .seo-left li{
    margin-left:auto;
    margin-right:auto;
  }

  .seo-image-wrap::before{
    width:280px;
    height:280px;
  }

  .seo-image-wrap img{
    max-width:280px;
  }
}
`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) e.target.classList.add("show");
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      style.remove();
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="seo-hero-dark" ref={ref}>
      <div className="seo-hero-grid">

        {/* LEFT */}
        <div className="seo-left">
          <h1>
            Why <span>Website Development</span>?
          </h1>
 
          <li>
            Your website is your digital foundation. A well-built website builds
            trust, improves engagement, and supports every marketing effort you
            invest in. It creates strong first impressions and guides visitors
            smoothly toward taking action.
          </li>

          <li>
            Beyond design, a powerful website is built for performance and growth.
            With fast load times, mobile responsiveness, SEO-ready structure, and
            strong security, your website becomes a long-term asset that scales
            with your business.
          </li>
        </div>

        {/* RIGHT IMAGE */}
       
 <div className="seo-left">
         
 <div className="seo-right seo-image-wrap">
          <img
            src="/images/WEBDEVELOPMENT.png"
            alt="Website Development Illustration"
          />
        </div>
        
        </div>
      </div>
    </section>
  );
}


// 5

export function FAQWebDevelopment() {
  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
/* ================= HOME FAQ (UPGRADED) ================= */

.home-faq-wrap{
  // background: radial-gradient(circle at top, #0b1220, #020617 70%);
  // padding:110px 6vw;
  color:#ffffff;
  font-family:Inter,system-ui;

  /* 🔥 REMOVE DEFAULT SECTION GAP */
  margin:0;
}

/* ================= GAP / STRIP FIX ================= */
*{
  box-sizing:border-box;
}

.home-faq-container{
  max-width:1100px;
  margin:auto;
}

/* TITLE */
.home-faq-title{
  text-align:center;
  font-size:42px;
  font-weight:900;
  margin:0 0 12px 0;
  color:transparent !important;
  pointer-events:none;
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

.home-faq-sub{
  text-align:center;
  color:#cfcfcf;
  font-size:16px;
  margin:0 0 50px 0;
}

/* CARD */
.home-faq-card{
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
  color:#ffffff !important;
}

/* TOGGLE */
.home-faq-toggle{
  width:34px;
  height:34px;
  border-radius:50%;
  border:none !important;
  background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
  color:#ffffff !important;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  font-weight:900;
  transition:all .3s ease;
  box-shadow:0 0 20px rgba(139,92,246,0.6);
}

.home-faq-item.open .home-faq-toggle{
  background:linear-gradient(135deg,#7c3aed,#db2777) !important;
}

/* ANSWER */
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
  margin:14px 0 0 0;
  font-size:15px;
  line-height:1.7;
  color:#ffffff !important;
}

/* CTA */
.home-faq-cta{
  margin-top:48px;
  padding:36px;
  border-radius:22px;
  background:#ffffff !important;
  text-align:center;
  box-shadow:0 30px 90px rgba(0,0,0,0.25);
}

.home-faq-cta h3{
  font-size:26px;
  font-weight:900;
  margin:0 0 12px 0;
  color:#020617 !important;
}

.home-faq-cta p{
  font-size:16px;
  margin:0 0 22px 0;
  color:#475569 !important;
}

.home-faq-cta button{
  padding:14px 36px;
  border-radius:999px;
  border:none;
  background:#020617;
  color:#ffffff;
  font-size:15px;
  font-weight:800;
  cursor:pointer;
  transition:all .3s ease;
}

.home-faq-cta button:hover{
  transform:translateY(-4px) scale(1.05);
  box-shadow:0 20px 60px rgba(0,0,0,0.4);
}

/* 🔥 DESKTOP GAP CONTROL ONLY */
@media(min-width:769px){
  .home-faq-wrap{
    padding-top:90px;
    padding-bottom:90px;
  }
}

/* MOBILE – UNCHANGED */
@media(max-width:768px){
  .home-faq-wrap{padding:70px 20px;}
  .home-faq-title{font-size:28px;}
  .home-faq-question{font-size:16px;}
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
      q: "How long does it take to build a website?",
      a: "Most websites are completed within 2–4 weeks, depending on features, content readiness, and feedback cycles."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
      q: "Can I update the website content myself?",
      a: "Absolutely. We build CMS-based websites so you can easily update content without technical knowledge."
    },
    {
      q: "Do you provide support after the website launch?",
      a: "Yes. We offer ongoing maintenance, security updates, performance optimization, and technical support."
    },
    {
      q: "How do I get started with website development?",
      a: "Fill out our contact form or call us. We’ll discuss your requirements and share a clear plan and timeline."
    }
  ];

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
          <Link to="/contact">
            <button>BOOK FREE CONSULTATION →</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
// 6
