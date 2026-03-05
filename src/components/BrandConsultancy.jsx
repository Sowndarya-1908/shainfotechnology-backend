import { useEffect,useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// 1


export function BrandConsultancyHero() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= HERO ================= */

.smm-hero{
  background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:50px 6%;
  font-family:'Inter',system-ui,sans-serif;
  color:#ffffff;
  overflow:hidden;
  text-align:center;
}

/* SMALL LABEL */

.smm-left small{
  font-size:12px;
  letter-spacing:0.12em;
  text-transform:uppercase;
  color:#c7c7ff;
  font-weight:600;
}

/* TITLE */

.smm-title{
  font-size:clamp(30px,5vw,48px);
  font-weight:800;
  line-height:1.2;
  margin:14px 0;
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
  margin:10px auto 0;
}

/* RIGHT */

.smm-right{
  margin-top:32px;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ICON CLOUD */

.icon-cloud{
  position:relative;
  width:clamp(260px,60vw,340px);
  height:clamp(260px,60vw,340px);
}

/* ICON */

.icon{
  position:absolute;
  width:48px;
  height:48px;
  border-radius:12px;
  background:linear-gradient(135deg,#7c7cff,#c084fc);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  box-shadow:0 18px 45px rgba(124,124,255,.35);
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
  50%{transform:translateY(-12px)}
  100%{transform:translateY(0)}
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .smm-hero{
    display:grid;
    grid-template-columns:1.2fr 1fr;
    align-items:center;
    padding:80px 8%;
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

    const id = "brand-consultancy-hero-style";

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
      <title>Top Brand Strategy Consultancy Firm</title>
      <meta
        name="description"
        content="Elevate your brand with Shainfo Technology's expert brand consultancy services. Discover strategies to enhance your identity and engage your audience."
      />
    </Helmet>
  
    <section className="smm-hero">

      <div className="smm-left">

        <small>Brand Consultancy</small>

        <h1 className="smm-title">
          Build a Brand <span className="accent">That Customers Trust</span><br/>
          and Remember<br/>
          <span className="accent">Shape a Clear, Consistent Brand Identity</span>
        </h1>

        <p className="smm-desc">
          We help businesses define their brand voice, positioning, and visual identity.
          Our consultancy ensures your brand communicates with purpose, builds credibility,
          and stands strong in competitive markets.
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





export function SecondSlideBrandConsultancy() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= BRAND SECTION ================= */

.brand-section{
  padding:60px 6%;
  font-family:'Inter',system-ui,sans-serif;
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
  transform:translateY(24px);
  transition:all .7s ease;
  text-align:center;
}

.brand-section.show .brand-left{
  opacity:1;
  transform:none;
}

/* HEADING */

.brand-left h2{
  font-size:clamp(28px,5vw,40px);
  font-weight:800;
  margin-bottom:16px;
  line-height:1.2;
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
  line-height:1.7;
  color:#e2e8f0;
  max-width:640px;
  margin:0 auto 12px;
}

/* RIGHT */

.brand-right{
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transform:translateY(24px);
  transition:all .7s ease .2s;
}

.brand-section.show .brand-right{
  opacity:1;
  transform:none;
}

.brand-right img{
  width:100%;
  max-width:360px;
  height:auto;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .brand-section{
    padding:80px 8%;
  }

  .brand-grid{
    display:grid;
    grid-template-columns:1.1fr .9fr;
    align-items:center;
    gap:50px;
  }

  .brand-left{
    text-align:left;
  }

  .brand-left p{
    margin:0 0 14px 0;
  }

  .brand-right img{
    max-width:440px;
  }

}
`;

    const id = "brand-consultancy-second-style";

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
            <span className="brand-gradient">Brand Consultancy</span>
            <span className="brand-white">?</span>
          </h2>

          <p>
            Brand consultancy is the process of defining, shaping, and aligning
            your brand’s identity, positioning, and messaging to create a strong
            and consistent presence in the market. It helps businesses clearly
            communicate who they are, what they stand for, and why customers
            should choose them.
          </p>

          <p>
            At our company, brand consultancy goes beyond visuals and logos.
            We focus on building a clear brand strategy that connects your
            business goals with customer perception. This ensures consistency
            across digital platforms, communication, and customer experience,
            ultimately driving trust, recognition, and long-term growth.
          </p>

        </div>

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



export function ServicesGridBrandConsultancy() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= SERVICES SECTION ================= */

.services-wrap{
  font-family:'Inter',system-ui,sans-serif;
  color:#e5e7eb;
  padding:55px 6%;
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
  border-radius:16px;
  padding:26px 22px;
  position:relative;
  border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 12px 35px rgba(0,0,0,0.12);
  transition:all .3s ease;
  overflow:hidden;
}

.service-card:hover{
  transform:translateY(-5px);
  box-shadow:0 18px 50px rgba(0,0,0,0.18);
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
  color:#374151;
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
    padding:75px 8%;
  }

  .services-grid{
    grid-template-columns:repeat(3,1fr);
    gap:26px;
  }

  .service-card{
    padding:30px 24px;
  }

  .service-number{
    font-size:50px;
  }

}
`;

    const id = "services-grid-brand-style";

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
      title: "Brand Audit & Evaluation",
      desc: "Assessing your current brand perception, strengths, and gaps.",
      icon: "🔎"
    },
    {
      title: "Brand Positioning Strategy",
      desc: "Defining how your brand stands out in a competitive market.",
      icon: "📍"
    },
    {
      title: "Audience Insight & Segmentation",
      desc: "Identifying target audiences and aligning brand relevance.",
      icon: "👥"
    },
    {
      title: "Brand Narrative & Storytelling",
      desc: "Crafting a compelling brand story that builds emotional connection.",
      icon: "📖"
    },
    {
      title: "Brand Consistency Framework",
      desc: "Ensuring consistent brand expression across all platforms.",
      icon: "🧩"
    },
    {
      title: "Brand Growth & Evolution Plan",
      desc: "Strategic guidance to scale and evolve your brand confidently.",
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

export function WhyBrandConsultancyHeroDark() {

  const ref = useRef(null);

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= HERO ================= */

.seo-hero-dark{
  padding:55px 6%;
  font-family:'Inter',system-ui,sans-serif;
  color:#e5e7eb;
  overflow:hidden;
}

/* GRID */

.seo-hero-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:32px;
  align-items:center;
  text-align:center;
}

/* LEFT */

.seo-left{
  opacity:0;
  transform:translateY(24px);
  transition:all .7s ease;
}

.seo-hero-dark.show .seo-left{
  opacity:1;
  transform:none;
}

/* TITLE */

.seo-left h1{
  font-size:clamp(28px,5vw,40px);
  font-weight:800;
  line-height:1.2;
  margin-bottom:14px;
  color:#ffffff;
}

.seo-left h1 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* LIST */

.seo-left li{
  font-size:16px;
  line-height:1.7;
  color:#cbd5f5;
  max-width:620px;
  margin:0 auto 12px;
  list-style:none;
}

/* RIGHT */

.seo-right{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transform:scale(.95);
  transition:all .7s ease .2s;
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
  filter:blur(35px);
  z-index:0;
}

.seo-image-wrap img{
  position:relative;
  z-index:1;
  width:100%;
  max-width:260px;
  height:auto;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .seo-hero-dark{
    padding:80px 8%;
  }

  .seo-hero-grid{
    display:grid;
    grid-template-columns:1.1fr .9fr;
    align-items:center;
    gap:50px;
    text-align:left;
  }

  .seo-left li{
    margin:0 0 14px 0;
  }

  .seo-image-wrap::before{
    width:400px;
    height:400px;
  }

  .seo-image-wrap img{
    max-width:420px;
  }

}
`;

    const id = "brand-consultancy-why-style";

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
            Why <span>Brand Consultancy</span>?
          </h1>

          <li>
            Brand consultancy defines who you are as a business and how your
            audience perceives you. By clarifying your purpose, positioning,
            and messaging, it builds trust, recognition, and emotional
            connection with customers.
          </li>

          <li>
            A strong brand strategy ensures consistency across every touchpoint
            from digital presence to communication and customer experience.
            With long-term direction and clarity, brand consultancy helps your
            business stand out and grow sustainably in competitive markets.
          </li>

        </div>

        <div className="seo-right seo-image-wrap">

          <img
            src="/images/BRANDCONSULTANCY.png"
            alt="Brand Consultancy Illustration"
          />

        </div>

      </div>

    </section>

  );

}



// 5

export function FAQBrandConsultancy() {

  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  /* ================= STYLES ================= */

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= FAQ SECTION ================= */

.home-faq-wrap{
  padding:60px 6%;
  font-family:'Inter',system-ui,sans-serif;
  color:#ffffff;
}

/* CONTAINER */

.home-faq-container{
  max-width:1000px;
  margin:auto;
}

/* TITLE */

.home-faq-title{
  text-align:center;
  font-size:clamp(28px,5vw,40px);
  font-weight:800;
  margin-bottom:8px;
}

.home-faq-title .faq-title-white{
  color:#ffffff;
}

.home-faq-title .faq-title-gradient{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* SUBTITLE */

.home-faq-sub{
  text-align:center;
  font-size:15px;
  color:#cbd5f5;
  margin-bottom:30px;
}

/* CARD */

.home-faq-card{
  border-radius:18px;
  padding:22px;
  background:rgba(255,255,255,0.03);
  box-shadow:0 12px 35px rgba(0,0,0,0.25);
}

/* FAQ ITEM */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.08);
  padding:14px 2px;
  transition:background .25s ease;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.08);
}

.home-faq-item:hover{
  background:rgba(255,255,255,0.03);
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
  font-size:16px;
  font-weight:600;
  color:#ffffff;
}

/* TOGGLE BUTTON */

.home-faq-toggle{
  width:28px;
  height:28px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:16px;
  font-weight:800;
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
  max-height:240px;
  opacity:1;
}

.home-faq-answer p{
  margin-top:10px;
  font-size:14px;
  line-height:1.6;
  color:#e2e8f0;
}

/* ================= DESKTOP ================= */

@media(min-width:992px){

  .home-faq-wrap{
    padding:80px 8%;
  }

  .home-faq-card{
    padding:28px;
  }

}
`;

    const id = "faq-brand-consultancy-style";

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

  /* ================= FAQ DATA ================= */

  const faqs = [

    {
      q: "What is brand consultancy?",
      a: "Brand consultancy helps define your brand’s positioning, messaging, and identity to create long-term trust and recognition."
    },

    {
      q: "Is brand consultancy useful for small businesses?",
      a: "Yes. Strong branding helps startups and small businesses stand out, build credibility, and attract the right customers."
    },

    {
      q: "Does brand consultancy include logo and design?",
      a: "It focuses on strategy and direction. Visual design and creative execution can be added as separate services."
    },

    {
      q: "How long does a brand consultancy project take?",
      a: "Most brand consultancy projects take 2–4 weeks depending on research, workshops, and strategic planning."
    },

    {
      q: "How do we get started with brand consultancy?",
      a: "Contact us to discuss your business goals and we’ll build a clear brand strategy roadmap tailored to your growth."
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


// 6

