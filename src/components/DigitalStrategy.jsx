
import { useEffect,useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// 1

export function DigitalStrategyHero() {
  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= HERO ================= */

.smm-hero{
  background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:60px 5%;
  font-family:'Poppins',sans-serif;
  color:#fff;
  overflow:hidden;
  text-align:center;
}

/* SMALL LABEL */

.smm-left small{
  font-size:13px;
  letter-spacing:0.12em;
  text-transform:uppercase;
  color:#c7c7ff;
  font-weight:700;
  font-family:'Poppins',sans-serif;
}

/* TITLE */

.smm-title{
  font-size:clamp(32px,5vw,52px);
  font-weight:800;
  line-height:1.2;
  margin:14px 0 10px;
  font-family:'Poppins',sans-serif;
}

.smm-title .accent{
  background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */

.smm-desc{
  font-size:16px;
  color:#cfcfe5;
  max-width:600px;
  line-height:1.6;
  margin:0 auto;
  font-weight:400;
  font-family:'Poppins',sans-serif;
}

/* RIGHT SIDE */

.smm-right{
  margin-top:35px;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ICON CLOUD */

.icon-cloud{
  position:relative;
  width:320px;
  height:320px;
}

/* ICON */

.icon{
  position:absolute;
  width:54px;
  height:54px;
  border-radius:14px;
  background:linear-gradient(135deg,#7c7cff,#c084fc);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  box-shadow:0 18px 40px rgba(124,124,255,.45);
  animation:float 6s ease-in-out infinite;
}

/* ICON POSITIONS */

.icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
.icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
.icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
.icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
.icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
.icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

/* FLOAT */

@keyframes float{
  0%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
  100%{transform:translateY(0)}
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .smm-hero{
    display:grid;
    grid-template-columns:1.2fr 1fr;
    align-items:center;
    padding:90px 8%;
    text-align:left;
  }

  .smm-desc{
    margin-top:6px;
  }

  .smm-right{
    margin-top:0;
  }

}

`;

    const id = "digital-strategy-hero-style";

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
    <>
      <Helmet>
      <title>Expert Digital Marketing Strategy in Chennai  |Shainfotechnology</title>
      <meta
        name="description"
        content="Shainfo Technology's digital Marketing  strategy services spark business success. Plan ahead, engage users, measure wins. Claim your strategy audit now."
      />
    </Helmet>
    <section className="smm-hero">
      <div className="smm-left">

        <small>Digital Strategy</small>

        <h1 className="smm-title">
          Plan a <span className="accent">Digital Roadmap That</span><br/>
          Drives Real Results<br/>
          <span className="accent">Align Technology, Marketing, and Growth</span>
        </h1>

        <p className="smm-desc">
          We create customised digital strategies that align with your business objectives. 
          By combining marketing, technology, and analytics, we help you grow smarter and 
          stay competitive.
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
    </>
  );
}





export function SecondSlideDigitalStrategy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= SECTION ================= */

.brand-section{
  padding:60px 5%;
  font-family:'Poppins',sans-serif;
  overflow:hidden;
}

/* GRID */

.brand-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:32px;
}

/* LEFT */

.brand-left{
  opacity:0;
  transform:translateY(25px);
  transition:all .8s ease;
  text-align:center;
}

.brand-section.show .brand-left{
  opacity:1;
  transform:none;
}

/* HEADING */

.brand-left h2{
  font-size:clamp(30px,4vw,42px);
  font-weight:800;
  margin-bottom:14px;
  line-height:1.25;
}

/* GRADIENT */

.brand-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.brand-white{
  color:#ffffff;
}

/* PARAGRAPH */

.brand-left p{
  font-size:16px;
  line-height:1.6;
  color:#ffffff;
  max-width:620px;
  margin:0 auto 12px;
  font-weight:400;
}

/* RIGHT IMAGE */

.brand-right{
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transform:translateY(25px);
  transition:all .8s ease .2s;
}

.brand-section.show .brand-right{
  opacity:1;
  transform:none;
}

.brand-right img{
  width:100%;
  max-width:380px;
  height:auto;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .brand-section{
    padding:90px 8%;
  }

  .brand-grid{
    display:grid;
    grid-template-columns:1.1fr .9fr;
    align-items:center;
    gap:60px;
  }

  .brand-left{
    text-align:left;
  }

  .brand-left p{
    margin:0 0 14px 0;
  }

  .brand-right img{
    max-width:460px;
  }

}

`;

    const id = "digital-strategy-about-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

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
      const s = document.getElementById(id);
      if (s) s.remove();
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="brand-section" ref={sectionRef}>
      <div className="brand-grid">

        <div className="brand-left">

          <h2>
            <span className="brand-white">What is </span>
            <span className="brand-gradient">Digital Strategy</span>
            <span className="brand-white">?</span>
          </h2>

          <p>
            Digital strategy defines how your business uses digital channels to achieve growth and competitive advantage. It aligns marketing, content, technology, and customer experience into one clear roadmap.
          </p>

          <p>
            Our digital strategy approach is data-driven and goal-focused. We analyze audience behavior, market trends, and channel performance to create actionable plans that drive measurable results across digital platforms.
          </p>

        </div>

        <div className="brand-right">
          <img
            src="/images/about/whyss.png"
            alt="Digital Strategy Illustration"
          />
        </div>

      </div>
    </section>
  );
}
// 3
export function ServicesGridDigitalStrategy() {
  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= SERVICES SECTION ================= */

.services-wrap{
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  padding:60px 5%;
  margin:0;
}

/* GRID */

.services-grid{
  max-width:1100px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
}

/* CARD */

.service-card{
  background:#ffffff;
  border-radius:18px;
  padding:26px 22px;
  position:relative;
  border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 14px 35px rgba(0,0,0,0.15);
  transition:all .3s ease;
  overflow:hidden;
}

.service-card:hover{
  transform:translateY(-6px);
  box-shadow:0 24px 60px rgba(185,5,4,0.35);
}

/* NUMBER */

.service-number{
  position:absolute;
  top:12px;
  right:16px;
  font-size:40px;
  font-weight:800;
  color:rgba(0,0,0,0.05);
  font-family:'Poppins',sans-serif;
}

/* ICON */

.service-icon{
  width:46px;
  height:46px;
  border-radius:12px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  color:#ffffff;
  margin-bottom:14px;
}

/* TITLE */

.service-title{
  font-size:17px;
  font-weight:700;
  margin-bottom:8px;
  color:#000000;
  font-family:'Poppins',sans-serif;
}

/* DESCRIPTION */

.service-desc{
  font-size:14px;
  line-height:1.6;
  color:#000000;
  font-weight:400;
  font-family:'Poppins',sans-serif;
}

/* ================= TABLET ================= */

@media(min-width:640px){

  .services-grid{
    grid-template-columns:repeat(2,1fr);
    gap:22px;
  }

}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .services-wrap{
    padding:90px 8%;
  }

  .services-grid{
    grid-template-columns:repeat(3,1fr);
    gap:26px;
  }

  .service-card{
    padding:32px 26px;
  }

  .service-number{
    font-size:54px;
  }

}

`;

    const id = "services-grid-digital-strategy-style";

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
      title: "Business & Market Analysis",
      desc:
        "In-depth analysis of your market, competitors, and digital opportunities.",
      icon: "📊"
    },
    {
      title: "Audience & Journey Mapping",
      desc:
        "Defining customer personas and mapping journeys to improve conversions.",
      icon: "🧭"
    },
    {
      title: "Channel Strategy Planning",
      desc:
        "Choosing the right digital channels to maximize reach and ROI.",
      icon: "📡"
    },
    {
      title: "Content & Messaging Strategy",
      desc:
        "Strategic content planning aligned with user intent and brand voice.",
      icon: "📝"
    },
    {
      title: "Performance & KPI Framework",
      desc:
        "Clear metrics and goals to track growth, leads, and engagement.",
      icon: "🎯"
    },
    {
      title: "Growth Roadmap Execution",
      desc:
        "Actionable digital roadmaps designed for scalable, long-term growth.",
      icon: "🚀"
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
export function WhyDigitalStrategyHeroDark() {
  const ref = useRef(null);

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= HERO DARK ================= */

.seo-hero-dark{
  padding:60px 5%;
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  overflow:hidden;
}

/* GRID */

.seo-hero-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:36px;
  align-items:center;
  text-align:center;
}

/* LEFT */

.seo-left{
  opacity:0;
  transform:translateY(25px);
  transition:all .8s ease;
}

.seo-hero-dark.show .seo-left{
  opacity:1;
  transform:none;
}

/* HEADING */

.seo-left h1{
  font-size:clamp(30px,4vw,42px);
  font-weight:800;
  line-height:1.25;
  margin-bottom:12px;
  color:#fff;
}

.seo-left h1 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* LIST */

.seo-left li{
  font-size:16px;
  line-height:1.6;
  color:#cbd5f5;
  max-width:620px;
  margin:0 auto 12px;
  list-style:none;
  font-weight:400;
}

/* RIGHT IMAGE */

.seo-right{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transform:scale(.95);
  transition:all .8s ease .2s;
}

.seo-hero-dark.show .seo-right{
  opacity:1;
  transform:scale(1);
}

/* IMAGE GLOW */

.seo-image-wrap::before{
  content:"";
  position:absolute;
  width:260px;
  height:260px;
  background:radial-gradient(circle,rgba(139,92,246,.45),transparent 70%);
  filter:blur(40px);
  z-index:0;
}

.seo-image-wrap img{
  position:relative;
  z-index:1;
  width:100%;
  max-width:280px;
  height:auto;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .seo-hero-dark{
    padding:90px 8%;
  }

  .seo-hero-grid{
    display:grid;
    grid-template-columns:1.1fr .9fr;
    align-items:center;
    gap:60px;
    text-align:left;
  }

  .seo-left li{
    margin:0 0 14px 0;
  }

  .seo-image-wrap::before{
    width:420px;
    height:420px;
  }

  .seo-image-wrap img{
    max-width:420px;
  }

}

`;

    const id = "why-digital-strategy-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) e.target.classList.add("show");
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      const s = document.getElementById(id);
      if (s) s.remove();
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="seo-hero-dark" ref={ref}>
      <div className="seo-hero-grid">

        <div className="seo-left">

          <h1>
            Why <span>Digital Strategy</span>?
          </h1>

          <li>
            Digital strategy provides a clear roadmap for how your business uses
            digital channels to achieve measurable goals. By aligning audience
            insights, platforms, content, and technology, it removes guesswork
            and focuses on actions that drive real value.
          </li>

          <li>
            A strong digital strategy turns data into direction. Through
            continuous analysis, optimisation, and performance tracking, it
            helps businesses adapt, improve efficiency, and scale growth
            sustainably in a competitive digital landscape.
          </li>

        </div>

        <div className="seo-right seo-image-wrap">
          <img
            src="/images/digitalstrategy.png"
            alt="Digital Strategy Illustration"
          />
        </div>

      </div>
    </section>
  );
}


// 5
export function FAQDigitalStrategy() {
  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= FAQ SECTION ================= */

.home-faq-wrap{
  padding:60px 5%;
  font-family:'Poppins',sans-serif;
  color:#ffffff;
}

.home-faq-container{
  max-width:1000px;
  margin:auto;
}

/* TITLE */

.home-faq-title{
  text-align:center;
  font-size:clamp(30px,4vw,42px);
  font-weight:800;
  margin-bottom:6px;
}

.home-faq-title .faq-title-white{
  color:#ffffff;
}

.home-faq-title .faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.home-faq-sub{
  text-align:center;
  font-size:15px;
  color:#cbd5f5;
  margin-bottom:28px;
  font-weight:400;
}

/* CARD */

.home-faq-card{
  border-radius:20px;
  padding:22px;
  box-shadow:0 18px 50px rgba(0,0,0,0.25);
}

/* ITEM */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.08);
  padding:14px 2px;
  transition:background .25s ease;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.home-faq-item:hover{
  background:#1b1b1b;
}

/* HEADER */

.home-faq-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
  gap:10px;
}

/* QUESTION */

.home-faq-question{
  font-size:16px;
  font-weight:600;
  color:#ffffff;
}

/* TOGGLE */

.home-faq-toggle{
  width:28px;
  height:28px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
  font-weight:700;
  color:#ffffff;
  transition:transform .3s ease;
}

.home-faq-item.open .home-faq-toggle{
  transform:rotate(180deg);
}

/* ANSWER */

.home-faq-answer{
  max-height:0;
  overflow:hidden;
  opacity:0;
  transition:max-height .4s ease, opacity .3s ease;
}

.home-faq-item.open .home-faq-answer{
  max-height:220px;
  opacity:1;
}

.home-faq-answer p{
  margin-top:8px;
  font-size:14px;
  line-height:1.6;
  color:#e2e8f0;
  font-weight:400;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .home-faq-wrap{
    padding:90px 8%;
  }

  .home-faq-card{
    padding:28px;
  }

}

`;

    const id = "faq-digital-strategy-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }
  }, []);

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
      q: "What is digital strategy and why is it important?",
      a: "Digital strategy defines how your business uses online channels to achieve growth, efficiency, and measurable results."
    },
    {
      q: "Is digital strategy only for large businesses?",
      a: "No. Digital strategy is valuable for startups, small businesses, and growing brands looking for clear direction."
    },
    {
      q: "How long does it take to create a digital strategy?",
      a: "Most strategies are developed within 1–3 weeks, depending on research depth and business complexity."
    },
    {
      q: "Will the strategy include SEO, ads, and social media?",
      a: "Yes. We align SEO, paid ads, content, and social media into one cohesive growth plan."
    },
    {
      q: "How do we get started with digital strategy?",
      a: "Contact us to discuss your goals, and we’ll create a tailored digital roadmap for your business."
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
              <div key={item.q} className={"home-faq-item" + (open ? " open" : "")}>
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

      </div>
    </section>
  );
}
