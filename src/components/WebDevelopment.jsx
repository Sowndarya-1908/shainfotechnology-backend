
import { useEffect,useState } from "react";
import { useRef } from "react";


// 1
export function WebDevelopmentHero() {
  useEffect(() => {
    const css = `
      .smm-hero{
        min-height:90vh;
        background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
        display:grid;
        grid-template-columns:1.2fr 1fr;
        align-items:center;
        padding:100px 7vw;
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
        margin:18px 0;
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
        margin-top:16px;
      }

      .smm-right{
        position:relative;
        height:420px;
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

      @media(max-width:900px){
        .smm-hero{
          grid-template-columns:1fr;
          text-align:center;
          padding:80px 24px;
        }
        .smm-title{font-size:36px}
        .smm-desc{margin:auto}
        .smm-right{margin-top:60px}
      }
    `;

    const id = "seo-hero-style";
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
          We develop fast, secure, and scalable websites tailored to your business goals. Every website is built to deliver a seamless user experience and support long-term digital success.
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

// 2
export function SecondSlideWebDevelopment() {
  const sectionRef = useRef(null);

  useEffect(() => {
   
const css = `
.why-orbit-dark{
  padding:110px 7vw;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  font-family:Inter,system-ui;
  color:#e5e7eb;
  overflow:hidden;
}

/* GRID */
.why-dark-grid{
  max-width:1300px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 0.9fr;
  align-items:center;
  gap:70px;
}

/* LEFT TEXT */
.why-dark-left{
  opacity:0;
  transform:translateY(40px);
  transition:all .9s ease;
}
.why-orbit-dark.show .why-dark-left{
  opacity:1;
  transform:none;
}

.why-dark-left h2{
  font-size:38px;
  font-weight:900;
  margin-bottom:22px;
  color:#fff;
}
.why-dark-left h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.why-dark-left p{
  font-size:17px;
  line-height:1.9;
  color:#cbd5f5;
  max-width:520px;
}

/* ORBIT WRAP */
.orbit-dark-wrap{
  position:relative;
  width:440px;
  height:440px;
  margin:auto;
  opacity:0;
  transform:scale(.85);
  transition:all 1s ease;
}
.why-orbit-dark.show .orbit-dark-wrap{
  opacity:1;
  transform:scale(1);
}

/* 🔥 NEON RINGS */
.orbit-ring-dark{
  position:absolute;
  inset:0;
  border-radius:50%;
    border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
  border-top-color:#ff4ecd;
  border-right-color:#7c7cff;
  filter:drop-shadow(0 0 12px #ff4ecd)
         drop-shadow(0 0 28px #7c7cff);
  animation:spin 18s linear infinite;
}

.orbit-ring-dark.inner{
  inset:75px;
  border-top-color:#22d3ee;
  border-right-color:#a78bfa;
  filter:drop-shadow(0 0 10px #22d3ee)
         drop-shadow(0 0 26px #a78bfa);
  animation-duration:12s;
  animation-direction:reverse;
}

@keyframes spin{
  100%{transform:rotate(360deg)}
}

/* 🌈 NEON ICONS */
.orbit-icon-dark{
  position:absolute;
  width:56px;
  height:56px;
  border-radius:50%;
  background:#020617;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#fff;
  box-shadow:
    0 0 10px rgba(255,255,255,.15),
    0 0 25px rgba(124,124,255,.45),
    0 0 45px rgba(255,78,205,.35);
  animation:neonPulse 2.8s ease-in-out infinite;
  transition:transform .3s ease, box-shadow .3s ease;
}

.orbit-icon-dark:hover{
  transform:scale(1.15);
  box-shadow:
    0 0 15px rgba(255,255,255,.35),
    0 0 35px rgba(124,124,255,.9),
    0 0 70px rgba(255,78,205,.8);
}

@keyframes neonPulse{
  0%,100%{opacity:.9}
  50%{opacity:1}
}

/* ICON POSITIONS */
.o1{top:-10px;left:50%;transform:translateX(-50%)}
.o2{top:90px;right:-10px}
.o3{bottom:90px;right:-10px}
.o4{bottom:-10px;left:50%;transform:translateX(-50%)}
.o5{bottom:90px;left:-10px}
.o6{top:90px;left:-10px}

.inner .orbit-icon-dark{
  width:48px;
  height:48px;
  font-size:22px;
}

.o7{top:50%;left:-10px;transform:translateY(-50%)}
.o8{top:-10px;left:50%;transform:translateX(-50%)}
.o9{top:50%;right:-10px;transform:translateY(-50%)}

/* MOBILE */
@media(max-width:900px){
  .why-dark-grid{
    grid-template-columns:1fr;
    text-align:center;
  }
  .why-dark-left p{
    margin:auto;
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      style.remove();
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="why-orbit-dark" ref={sectionRef}>
      <div className="why-dark-grid">
        {/* LEFT */}
        <div className="why-dark-left">
          <h2>
            Why <span>Choose us</span> for your Web Development Services?
          </h2>
          <li><strong>Purpose-Driven Website Development</strong></li>
          <p>
            We build websites with clear structure and functionality, designed to support your business goals and user journey.
          </p>
          <li><strong>Responsive & Cross-Device Compatibility</strong></li>
          <p>Every website we develop works seamlessly across mobile, tablet, and desktop devices.</p>
          <li><strong>Performance-Optimized Codebase</strong></li>
          <p>Clean, efficient code ensures fast load times, smooth navigation, and a better user experience.</p>
          <li><strong>SEO-Ready & Scalable Structure</strong></li>
          <p>Our websites are built with search-friendly architecture and scalability in mind for long-term growth.</p>
          <li><strong>Secure & Reliable Development</strong></li>
          <p>We follow secure development practices to protect your website, data, and users.</p>
        </div>

        {/* RIGHT */}
        <div className="orbit-dark-wrap">
          {/* OUTER */}
          <div className="orbit-ring-dark">
            <div className="orbit-icon-dark o1">📊</div>
            <div className="orbit-icon-dark o2">🔗</div>
            <div className="orbit-icon-dark o3">▶️</div>
            <div className="orbit-icon-dark o4">📸</div>
            <div className="orbit-icon-dark o5">📈</div>
            <div className="orbit-icon-dark o6">🌐</div>
          </div>

          {/* INNER */}
          <div className="orbit-ring-dark inner">
            <div className="orbit-icon-dark o7">🔍</div>
            <div className="orbit-icon-dark o8">f</div>
            <div className="orbit-icon-dark o9">in</div>
          </div>
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
        padding:110px 7vw;
        background:radial-gradient(circle at top, #0b1220, #020617 70%);
        font-family:Inter,system-ui;
        color:#e5e7eb;
      }

      .services-grid{
        max-width:1200px;
        margin:auto;
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:28px;
      }

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

  .service-icon{
  width:56px;
  height:56px;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  margin-bottom:20px;

  position:relative;
  z-index:1;
}

/* PURPLE GRADIENT GLOW */
.service-icon::after{
  content:"";
  position:absolute;
  inset:-12px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  filter:blur(22px);
  opacity:0.6;
  z-index:-1;
}

      .service-title{
        font-size:20px;
        font-weight:800;
        margin-bottom:12px;
        color:#000000;
      }

      .service-desc{
        font-size:15px;
        line-height:1.75;
        color:#000000;
      }

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
    desc:
      "Websites structured around user flow, clarity, and business objectives.",
    icon: "🧭"
  },
  {
    title: "Device-First Responsive Builds",
    desc:
      "Layouts engineered to adapt flawlessly across all modern devices.",
    icon: "📐"
  },
  {
    title: "Speed-Focused Engineering",
    desc:
      "Lean code and optimized assets for faster load times and smoother interactions.",
    icon: "⚡"
  },
  {
    title: "Search-Ready Codebase",
    desc:
      "Technically sound foundations built for long-term search visibility.",
    icon: "🔎"
  },
  {
    title: "Scalable Content Management",
    desc:
      "Flexible CMS setups that grow with your content and team.",
    icon: "🧩"
  },
  {
    title: "Security-First Development",
    desc:
      "Hardened builds with best-practice protections from day one.",
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
        background:radial-gradient(circle at top,#0b1220,#020617 70%);
        font-family:Inter,system-ui;
        color:#e5e7eb;
        overflow:hidden;
        padding:100px 7vw;
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

      .seo-left li{
        font-size:18px;
        line-height:2;
        color:#cbd5f5;
        max-width:560px;
        margin-bottom:20px;
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

      /* MOBILE */
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
        <div className="seo-right seo-image-wrap">
          <img
            src="/images/WEBDEVELOPMENT.png"
            alt="Website Development Illustration"
          />
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

// 6
