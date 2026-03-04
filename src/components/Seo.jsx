// HERO

import { useEffect, useState} from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
export function SEOHero() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= HERO ================= */

.smm-hero{
  background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:70px 5%;
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
  font-weight:600;
}

/* TITLE */

.smm-title{
  font-size:clamp(32px,5vw,56px);
  font-weight:800;
  line-height:1.2;
  margin:16px 0;
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
  max-width:620px;
  line-height:1.7;
  margin:14px auto 0;
}

/* RIGHT SIDE */

.smm-right{
  margin-top:40px;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ICON CLOUD */

.icon-cloud{
  position:relative;
  width:clamp(260px,60vw,360px);
  height:clamp(260px,60vw,360px);
}

/* ICON */

.icon{
  position:absolute;
  width:clamp(44px,6vw,56px);
  height:clamp(44px,6vw,56px);
  border-radius:14px;
  background:linear-gradient(135deg,#7c7cff,#c084fc);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:clamp(18px,3vw,26px);
  box-shadow:0 20px 50px rgba(124,124,255,.45);
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
    padding:100px 8%;
    text-align:left;
  }

  .smm-desc{
    margin-left:0;
  }

  .smm-right{
    margin-top:0;
  }

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

        <small>Search Engine Optimization</small>

        <h1 className="smm-title">
          Turn Search Visibility <span className="accent">into Real</span><br/>
          Business Growth<br/>
          <span className="accent">
            Be Discovered by Customers Who Are Ready to Buy
          </span>
        </h1>

        <p className="smm-desc">
          We design SEO strategies that connect your business with high-intent
          searchers. From technical optimisation to content and authority
          building, we focus on sustainable rankings that generate leads,
          sales, and long-term trust.
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





export function SecondSlideSEO() {
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
  gap:34px;
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

/* DESKTOP */

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

    const id = "seo-about-style";

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
            <span className="brand-gradient">SEO</span>
            <span className="brand-white">?</span>
          </h2>

          <p>
            Search Engine Optimization (SEO) is the process of improving your website’s
            visibility on search engines like Google to attract high-intent organic traffic.
            It helps search engines understand your website while making it easier for
            customers to discover your business online.
          </p>

          <p>
            Our SEO approach combines keyword research, on-page optimization,
            technical improvements, and content strategy to create long-term growth.
            Instead of quick fixes, we build sustainable SEO foundations that increase
            rankings, drive qualified traffic, and support consistent business growth.
          </p>

        </div>

        <div className="brand-right">
          <img
            src="/images/about/whyss.png"
            alt="SEO Strategy Illustration"
          />
        </div>

      </div>
    </section>
  );
}
// third GRID

export function ServicesGridSEO() {

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
}

/* DESCRIPTION */

.service-desc{
  font-size:14px;
  line-height:1.6;
  color:#000000;
  font-weight:400;
}

/* TABLET */

@media(min-width:640px){

  .services-grid{
    grid-template-columns:repeat(2,1fr);
    gap:22px;
  }

}

/* DESKTOP */

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

    const id = "services-grid-seo-style";

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
      title: "Keyword Research & Strategy",
      desc: "Identify high-intent keywords your customers actively search for.",
      icon: "🔍"
    },
    {
      title: "On-Page SEO Optimisation",
      desc: "Improve site structure, content, and metadata for better rankings.",
      icon: "🧩"
    },
    {
      title: "Technical SEO",
      desc: "Fix performance, indexing, and crawl issues that limit visibility.",
      icon: "⚙️"
    },
    {
      title: "Local SEO",
      desc: "Dominate local search results and Google Maps visibility.",
      icon: "📍"
    },
    {
      title: "Content Optimisation",
      desc: "Create SEO-friendly content that attracts and converts users.",
      icon: "✍️"
    },
    {
      title: "SEO Reporting & Analytics",
      desc: "Transparent reports focused on traffic, leads, and growth.",
      icon: "📊"
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

// fourth slide
export function WhySEeOHeroDark() {

  const ref = useRef(null);

  useEffect(() => {

    const css = `

.seo-hero-dark{
  padding:60px 5%;
  font-family:Inter,system-ui,sans-serif;
  color:#e5e7eb;
  overflow:hidden;
}

.seo-hero-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:40px;
  align-items:center;
  text-align:center;
}

.seo-left{
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.seo-hero-dark.show .seo-left{
  opacity:1;
  transform:none;
}

.seo-left h1{
  font-size:clamp(26px,5vw,42px);
  font-weight:900;
  line-height:1.2;
  margin-bottom:16px;
  color:#fff;
}

.seo-left h1 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.seo-left ul{
  padding:0;
  margin:0;
}

.seo-left li{
  font-size:clamp(15px,2vw,18px);
  line-height:1.7;
  color:#cbd5f5;
  max-width:600px;
  margin:0 auto 14px;
  list-style:none;
}

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

.seo-image-wrap::before{
  content:"";
  position:absolute;
  width:280px;
  height:280px;
  background:radial-gradient(circle,rgba(139,92,246,.45),transparent 70%);
  filter:blur(40px);
  z-index:0;
}

.seo-image-wrap img{
  position:relative;
  z-index:1;
  width:100%;
  max-width:280px;
}

/* DESKTOP */

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
    margin:0 0 16px 0;
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

    const id = "seo-why-section-style";

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
      const style = document.getElementById(id);
      if (style) style.remove();
      if (ref.current) observer.unobserve(ref.current);
    };

  }, []);

  return (
    <section className="seo-hero-dark" ref={ref}>

      <div className="seo-hero-grid">

        {/* LEFT */}
        <div className="seo-left">

          <h1>
            Why <span>Search Engine Optimisation</span>?
          </h1>

          <ul>
            <li>
              SEO increases your website’s visibility on search engines,
              helping you reach customers exactly when they’re looking
              for your services and driving consistent business growth.
            </li>

            <li>
              SEO builds long-term digital authority by strengthening
              trust, relevance, and performance. Unlike paid ads,
              it delivers sustainable results over time.
            </li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="seo-right seo-image-wrap">

          <img
            src="/images/SEOINNER.png"
            alt="SEO Growth Illustration"
          />

        </div>

      </div>

    </section>
  );
}


// fifth slide

export function FAQSEO() {

  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  /* ================= STYLES ================= */

  useEffect(() => {

    const css = `

/* ================= FAQ SECTION ================= */

.home-faq-wrap{
  padding:70px 5%;
  font-family:Inter,system-ui,sans-serif;
  color:#ffffff;
}

.home-faq-container{
  max-width:1000px;
  margin:auto;
}

/* TITLE */

.home-faq-title{
  text-align:center;
  font-size:clamp(26px,5vw,42px);
  font-weight:900;
  margin-bottom:10px;
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
  margin-bottom:36px;
}

/* CARD */

.home-faq-card{
  border-radius:22px;
  padding:24px;
  box-shadow:0 20px 60px rgba(0,0,0,0.25);
}

/* ITEM */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.08);
  padding:16px 4px;
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
  gap:12px;
}

/* QUESTION */

.home-faq-question{
  font-size:clamp(15px,2vw,18px);
  font-weight:700;
  color:#ffffff;
}

/* TOGGLE */

.home-faq-toggle{
  width:30px;
  height:30px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
  font-weight:900;
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
  max-height:260px;
  opacity:1;
}

.home-faq-answer p{
  margin-top:10px;
  font-size:14px;
  line-height:1.6;
  color:#e2e8f0;
}

/* DESKTOP */

@media(min-width:992px){

  .home-faq-wrap{
    padding:90px 8%;
  }

  .home-faq-card{
    padding:32px;
  }

}

`;

    const id = "seo-faq-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

  }, []);

  /* ================= AUTO OPEN FIRST FAQ ================= */

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

  /* ================= FAQ CONTENT ================= */

  const faqs = [

    {
      q: "How long does SEO take to show results?",
      a: "SEO improvements usually start appearing within 4–8 weeks, while stronger ranking and traffic growth typically occur within 3–6 months depending on competition and website quality."
    },

    {
      q: "Is SEO a one-time service?",
      a: "No. SEO requires continuous optimisation including technical improvements, content updates, and link building to maintain and improve search rankings."
    },

    {
      q: "Do you guarantee #1 rankings on Google?",
      a: "No ethical SEO agency can guarantee specific rankings. Our focus is on sustainable strategies that improve visibility, organic traffic, and conversions."
    },

    {
      q: "Will SEO work for small businesses?",
      a: "Yes. SEO is highly effective for local and small businesses because it helps them appear in front of customers actively searching for their services."
    },

    {
      q: "How do we start SEO for our website?",
      a: "We begin with a complete SEO audit, keyword research, and competitor analysis before building a customised SEO roadmap aligned with your business goals."
    }

  ];

  /* ================= SEO SCHEMA ================= */

  useEffect(() => {

    const schema = {
      "@context":"https://schema.org",
      "@type":"FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type":"Question",
        "name": f.q,
        "acceptedAnswer":{
          "@type":"Answer",
          "text": f.a
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {

      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }

    };

  }, []);

  /* ================= COMPONENT ================= */

  return (

    <section className="home-faq-wrap" ref={sectionRef}>

      <div className="home-faq-container">

        <h2 className="home-faq-title">
          <span className="faq-title-white">Frequently Asked </span>
          <span className="faq-title-gradient">Questions</span>
        </h2>

        <p className="home-faq-sub">
          Clear answers to help you move forward with confidence.
        </p>

        <div className="home-faq-card">

          {faqs.map((item,i)=>{

            const open = openFaq === i;

            return (

              <div
                key={item.q}
                className={"home-faq-item" + (open ? " open" : "")}
              >

                <div
                  className="home-faq-header"
                  role="button"
                  tabIndex="0"
                  onClick={()=>setOpenFaq(open ? -1 : i)}
                >

                  <div className="home-faq-question">
                    {item.q}
                  </div>

                  <div className="home-faq-toggle">
                    {open ? "−" : "+"}
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

// sixth slide


