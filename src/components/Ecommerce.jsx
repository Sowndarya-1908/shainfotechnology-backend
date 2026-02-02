import { useEffect,useState } from "react";
// import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
// 1
export function EcommerceHero() {
  useEffect(() => {
  const css = `

/* ================= HERO (MOBILE FIRST) ================= */

.smm-hero{
  background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:60px 5%;
  font-family:Inter,system-ui,sans-serif;
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
}

/* TITLE */
.smm-title{
  font-size:clamp(28px,6vw,56px);
  font-weight:900;
  line-height:1.15;
  margin:16px 0;
}

.smm-title .accent{
  background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */
.smm-desc{
  font-size:clamp(15px,2vw,18px);
  color:#cfcfe5;
  max-width:600px;
  line-height:1.7;
  margin:12px auto 0;
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
  width:clamp(42px,6vw,56px);
  height:clamp(42px,6vw,56px);
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
        <small>E-commerce</small>

        <h1 className="smm-title">
         Build an Online Store <span className="accent">That Converts Visitors</span><br />
       into Customers<br />
          <span className="accent">Sell Smarter with a Scalable E-commerce Platform</span>
        </h1>

        <p className="smm-desc">
          We develop secure, high-performance e-commerce websites designed to maximise conversions. From product pages to checkout optimisation, every element is built to increase sales and support long-term business growth.
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


export function SecondSlideEcommerce() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `

/* ================= BRAND SECTION (MOBILE FIRST) ================= */

.brand-section{
  padding:70px 5%;
  font-family:Inter,system-ui,sans-serif;
  overflow:hidden;
}

/* GRID */
.brand-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:40px;
}

/* LEFT CONTENT */
.brand-left{
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
  text-align:center;
}

.brand-section.show .brand-left{
  opacity:1;
  transform:none;
}

/* HEADING */
.brand-left h2{
  font-size:clamp(26px,5vw,42px);
  font-weight:900;
  margin-bottom:18px;
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
  font-size:clamp(15px,2vw,17px);
  line-height:1.7;
  color:#ffffff;
  max-width:600px;
  margin:0 auto 14px;
}

/* RIGHT IMAGE */
.brand-right{
  display:flex;
  justify-content:center;
  align-items:center;
  opacity:0;
  transform:translateY(30px);
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
    padding:100px 8%;
  }

  .brand-grid{
    display:grid;
    grid-template-columns:1.1fr 0.9fr;
    align-items:center;
    gap:60px;
  }

  .brand-left{
    text-align:left;
  }

  .brand-left p{
    margin:0 0 16px 0;
  }

  .brand-right img{
    max-width:480px;
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
  <span className="brand-gradient">E-Commerce Website Development</span>
  <span className="brand-white">?</span>
</h2>

          <p>
            E-commerce website development focuses on building online stores that are secure, scalable, and conversion-focused. A well-designed e-commerce site ensures smooth product discovery, checkout, and customer experience.
          </p>

          <p>
          We create e-commerce platforms optimized for performance, mobile usability, and secure transactions. Our solutions support growth, easy management, and customer trust—helping businesses sell efficiently online.
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
export function ServicesGridEcommerce() {
  useEffect(() => {
   const css = `

/* ================= SERVICES SECTION (MOBILE FIRST) ================= */

.services-wrap{
  font-family:Inter,system-ui,sans-serif;
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
  gap:22px;
}

/* CARD */
.service-card{
  background:#ffffff;
  border-radius:18px;
  padding:28px 22px;
  position:relative;
  border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 15px 40px rgba(0,0,0,0.15);
  transition:all .3s ease;
  overflow:hidden;
}

.service-card:hover{
  transform:translateY(-6px);
  box-shadow:0 25px 70px rgba(185,5,4,0.35);
}

/* NUMBER */
.service-number{
  position:absolute;
  top:14px;
  right:18px;
  font-size:42px;
  font-weight:900;
  color:rgba(0,0,0,0.05);
}

/* ICON */
.service-icon{
  width:48px;
  height:48px;
  border-radius:12px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  color:#ffffff;
  margin-bottom:16px;
}

/* TEXT */
.service-title{
  font-size:18px;
  font-weight:800;
  margin-bottom:10px;
  color:#000000;
}

.service-desc{
  font-size:14px;
  line-height:1.6;
  color:#000000;
}

/* ================= TABLET ================= */

@media(min-width:640px){
  .services-grid{
    grid-template-columns:repeat(2,1fr);
    gap:24px;
  }
}

/* ================= DESKTOP ================= */

@media(min-width:992px){
  .services-wrap{
    padding:90px 8%;
  }

  .services-grid{
    grid-template-columns:repeat(3,1fr);
    gap:28px;
  }

  .service-card{
    padding:34px 28px;
  }

  .service-number{
    font-size:56px;
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
    title: "Ecommerce Platform Setup",
    desc:
      "Scalable ecommerce foundations built for smooth selling and future growth.",
    icon: "🛍️"
  },
  {
    title: "Product & Catalog Management",
    desc:
      "Well-structured product listings for easy browsing and higher conversions.",
    icon: "📦"
  },
  {
    title: "Checkout & Payment Integration",
    desc:
      "Secure, frictionless checkout with trusted payment gateways.",
    icon: "💳"
  },
  {
    title: "Conversion-Focused UX",
    desc:
      "User journeys designed to reduce drop-offs and increase sales.",
    icon: "🧠"
  },
  {
    title: "Order, Shipping & Inventory Flow",
    desc:
      "Automated systems to manage orders, stock, and delivery efficiently.",
    icon: "🚚"
  },
  {
    title: "Ecommerce Security & Compliance",
    desc:
      "Protected transactions and data with industry-standard security practices.",
    icon: "🔐"
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

export function WhyEcommerceHeroDark() {
  const ref = useRef(null);

  useEffect(() => {
   const css = `

/* ================= HERO DARK (MOBILE FIRST) ================= */

.seo-hero-dark{
  padding:60px 5%;
  font-family:Inter,system-ui,sans-serif;
  color:#e5e7eb;
  overflow:hidden;
  margin:0;
}

/* GRID */
.seo-hero-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:40px;
  align-items:center;
  text-align:center;
}

/* LEFT */
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

/* LIST */
.seo-left li{
  font-size:clamp(15px,2vw,18px);
  line-height:1.7;
  color:#cbd5f5;
  max-width:600px;
  margin:0 auto 14px;
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
  transform:scale(.95);
  transition:all .8s ease .2s;
}

.seo-hero-dark.show .seo-right{
  opacity:1;
  transform:scale(1);
}

/* IMAGE + GLOW */
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
            Why <span>E-commerce Website</span>?
          </h1>

          <li>
            An ecommerce website is the backbone of your online sales. A well-built
            platform makes it easy for customers to browse products, trust your
            brand, and complete purchases smoothly—driving consistent revenue and
            repeat business.
          </li>

          <li>
            Beyond design, a successful ecommerce website is optimized for
            performance, security, and scalability. Fast load times, mobile-first
            experiences, secure payments, and streamlined order management turn
            your online store into a reliable growth engine.
          </li>
        </div>

        {/* RIGHT IMAGE */}
       
 <div className="seo-right seo-image-wrap">
          <img
            src="/images/ECOMMERCE.png"
            alt="E-commerce Website Illustration"
          />
        </div>
      </div>
    </section>
  );
}


// 5

export function FAQEcommerce() {
  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `

/* ================= FAQ SECTION (MOBILE FIRST) ================= */

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

/* CTA */
.home-faq-cta{
  margin-top:36px;
  padding:28px;
  border-radius:18px;
  background:#ffffff;
  text-align:center;
  box-shadow:0 20px 60px rgba(0,0,0,0.2);
}

.home-faq-cta h3{
  font-size:20px;
  font-weight:800;
  margin-bottom:8px;
  color:#020617;
}

.home-faq-cta p{
  font-size:14px;
  color:#475569;
  margin-bottom:18px;
}

.home-faq-cta button{
  padding:12px 28px;
  border-radius:999px;
  border:none;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  color:#ffffff;
  font-size:14px;
  font-weight:700;
  cursor:pointer;
  transition:transform .3s ease;
}

.home-faq-cta button:hover{
  transform:translateY(-3px);
}

/* ================= DESKTOP ================= */

@media(min-width:992px){
  .home-faq-wrap{
    padding:90px 8%;
  }

  .home-faq-card{
    padding:32px;
  }

  .home-faq-cta{
    margin-top:48px;
    padding:36px;
  }
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
    q: "What type of ecommerce websites do you build?",
    a: "We build scalable ecommerce websites for products and services, including custom, Shopify, and WooCommerce solutions."
  },
  {
    q: "Will my ecommerce website be mobile-friendly?",
    a: "Yes. All our ecommerce websites are fully responsive and optimized for mobile, tablet, and desktop users."
  },
  {
    q: "Can I manage products and orders myself?",
    a: "Absolutely. You’ll get an easy-to-use admin panel to manage products, orders, pricing, and inventory."
  },
  {
    q: "Is payment and checkout secure?",
    a: "Yes. We integrate trusted payment gateways and follow secure development standards to protect transactions."
  },
  {
    q: "How do we get started with an ecommerce website?",
    a: "Contact us with your business requirements, and we’ll guide you through the platform, timeline, and next steps."
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
           <Link to="/contact"> <button >
            BOOK FREE CONSULTATION →
          </button></Link>
        </div>
      </div>
    </section>
  );
}

// 6

