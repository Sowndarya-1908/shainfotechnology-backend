import { useEffect,useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
// 1


export function AimarketingHero() {

  useEffect(() => {

   const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* ================= HERO ================= */

.smm-hero{
  background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:60px 6%;
  font-family:'Inter',system-ui,sans-serif;
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
  font-size:clamp(28px,5vw,48px);
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

/* RIGHT SIDE */

.smm-right{
  margin-top:30px;
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
  width:clamp(42px,6vw,54px);
  height:clamp(42px,6vw,54px);
  border-radius:14px;
  background:linear-gradient(135deg,#7c7cff,#c084fc);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:clamp(18px,3vw,24px);
  box-shadow:0 20px 45px rgba(124,124,255,.45);
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
    padding:90px 8%;
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

    const id = "ai-marketing-hero-style";

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

        <small>AI Marketing</small>

        <h1 className="smm-title">
          Grow Faster with <span className="accent">Intelligent Automation</span><br/>
          Powered by <br/>
          <span className="accent">Sha Infotech</span>
        </h1>

        <p className="smm-desc">
          At Sha Infotech, we help businesses generate more traffic, more leads, 
          and more revenue using advanced AI-powered marketing strategies.<br/><br/>

          Our AI solutions analyze data, predict customer behavior, automate 
          campaigns, and optimize performance so you get better results with 
          lower marketing costs.
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





export function SecondSlideAimarketing() {

  const sectionRef = useRef(null);

  useEffect(() => {

 const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= BRAND SECTION ================= */

.brand-section{
  padding:0px 0%;
  font-family:'Inter',system-ui,sans-serif;
  overflow:hidden;
}

/* GRID */

.brand-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:30px;
}

/* LEFT CONTENT */

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
  font-size:clamp(26px,4vw,38px);
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
  line-height:1.7;
  color:#ffffff;
  max-width:620px;
  margin:0 auto 12px;
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
    grid-template-columns:1.1fr 0.9fr;
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
    max-width:460px;
  }

}
`;

    const id = "ai-brand-section-style";

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

        {/* LEFT CONTENT */}

        <div className="brand-left">

          <h2>
            <span className="brand-white">What is </span>
            <span className="brand-gradient">AI Marketing</span>
            <span className="brand-white">?</span>
          </h2>

          <p>
            AI Marketing is the use of artificial intelligence technologies to analyze
            data, predict customer behavior, automate campaigns, and optimize marketing
            performance. It helps businesses move from guesswork to data-driven
            decision-making, ensuring smarter strategies and better results.
          </p>

          <p>
            At our company, AI Marketing goes beyond basic automation. We leverage
            advanced AI-powered tools to identify high-intent audiences, personalize
            campaigns, optimize ad performance in real-time, and improve overall
            marketing efficiency. By combining intelligent data insights with strategic
            execution, we help businesses increase conversions, reduce marketing waste,
            and achieve sustainable growth in a competitive digital landscape.
          </p>

        </div>

        {/* RIGHT IMAGE */}

        <div className="brand-right">
          <img
            src="/images/about/whyss.png"
            alt="AI Marketing Illustration"
          />
        </div>

      </div>

    </section>
  );
}


// 3



export function ServicesGridAimarketing() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= SERVICES SECTION ================= */

.services-wrap{
  font-family:'Inter',system-ui,sans-serif;
  color:#e5e7eb;
  padding:0px 0%;
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
  border-radius:16px;
  padding:24px 20px;
  position:relative;
  border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 12px 32px rgba(0,0,0,0.15);
  transition:all .3s ease;
  overflow:hidden;
}

.service-card:hover{
  transform:translateY(-6px);
  box-shadow:0 22px 60px rgba(185,5,4,0.35);
}

/* NUMBER */

.service-number{
  position:absolute;
  top:12px;
  right:16px;
  font-size:36px;
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
  line-height:1.65;
  color:#000000;
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
    padding:70px 8%;
  }

  .services-grid{
    grid-template-columns:repeat(3,1fr);
    gap:24px;
  }

  .service-card{
    padding:28px 24px;
  }

  .service-number{
    font-size:48px;
  }

}
`;

    const id = "services-grid-ai-style";

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
      title: "AI-Powered SEO Optimization",
      desc:
        "Discover high-ranking keywords, analyze competitors, optimize on-page & technical SEO, improve content relevance, and increase organic traffic.",
      icon: "🔎"
    },
    {
      title: "AI-Based Performance Marketing",
      desc:
        "Run smarter ad campaigns using AI across Google Ads, Meta Ads (Facebook & Instagram), and YouTube Ads for higher ROI.",
      icon: "📍"
    },
    {
      title: "AI Content Generation & Optimization",
      desc:
        "Create high-performing blog posts, website copy, landing pages, ad creatives, and email campaigns using AI tools.",
      icon: "👥"
    },
    {
      title: "Marketing Automation & Lead Nurturing",
      desc:
        "Use AI chatbots, automated email workflows, CRM integration, customer segmentation, and predictive follow-ups.",
      icon: "📖"
    },
    {
      title: "AI Analytics & Predictive Insights",
      desc:
        "Track customer behavior, forecast sales, analyze conversion funnels, and monitor performance with AI dashboards.",
      icon: "🧩"
    },
    {
      title: "AI-Powered Social Media Intelligence",
      desc:
        "Understand audience behavior, track content performance, predict best posting times, and analyze trends.",
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

export function WhyAimarketingHeroDark() {

  const ref = useRef(null);

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= HERO DARK ================= */

.seo-hero-dark{
  padding:0px 0%;
  font-family:'Inter',system-ui,sans-serif;
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
  margin-bottom:18px;
  color:#ffffff;
}

.seo-left h1 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* LIST */

.seo-left ul{
  padding:0;
  margin:0;
}

.seo-left li{
  font-size:16px;
  line-height:1.7;
  color:#cbd5f5;
  margin-bottom:10px;
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
  filter:blur(40px);
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
    font-size:17px;
    margin-bottom:12px;
  }

  .seo-image-wrap::before{
    width:400px;
    height:400px;
  }

  .seo-image-wrap img{
    max-width:400px;
  }

}
`;

    const id = "ai-hero-dark-style";

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

        {/* LEFT CONTENT */}

        <div className="seo-left">

          <h1>
            Why Choose <span>AI Marketing</span>?
          </h1>

          <ul>
            <li>Traditional marketing guesses.</li>
            <li><strong>AI Marketing predicts.</strong></li>
            <li>With AI-powered systems, you can:</li>

            <li>✅ Identify high-intent customers</li>
            <li>✅ Automate personalized campaigns</li>
            <li>✅ Improve ad targeting accuracy</li>
            <li>✅ Increase website conversions</li>
            <li>✅ Reduce marketing waste</li>
            <li>✅ Get real-time performance insights</li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}

        <div className="seo-right seo-image-wrap">

          <img
            src="/images/about/ai.png"
            alt="AI Marketing Illustration"
          />

        </div>

      </div>

    </section>

  );

}




// 5

export function FAQAimarketing() {

  const [openFaq, setOpenFaq] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= FAQ SECTION ================= */

.home-faq-wrap{
  padding:60px 6%;
  font-family:'Inter',system-ui,sans-serif;
  color:#ffffff;
}

.home-faq-container{
  max-width:1000px;
  margin:auto;
}

/* TITLE */

.home-faq-title{
  text-align:center;
  font-size:clamp(28px,5vw,40px);
  font-weight:800;
  margin-bottom:10px;
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
  font-size:15px;
  color:#cbd5f5;
  margin-bottom:32px;
}

/* CARD */

.home-faq-card{
  border-radius:18px;
  padding:22px;
  box-shadow:0 15px 45px rgba(0,0,0,0.25);
}

/* FAQ ITEM */

.home-faq-item{
  border-top:1px solid rgba(255,255,255,0.08);
  padding:14px 2px;
}

.home-faq-item:last-child{
  border-bottom:1px solid rgba(255,255,255,0.08);
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
  max-height:260px;
  opacity:1;
}

.home-faq-answer p{
  margin-top:8px;
  font-size:14px;
  line-height:1.6;
  color:#e2e8f0;
}

/* CTA */

.home-faq-cta{
  margin-top:36px;
  padding:26px;
  border-radius:16px;
  background:#ffffff;
  text-align:center;
  box-shadow:0 15px 45px rgba(0,0,0,0.2);
}

.home-faq-cta h3{
  font-size:20px;
  font-weight:700;
  margin-bottom:8px;
  color:#020617;
}

.home-faq-cta p{
  font-size:14px;
  color:#475569;
  margin-bottom:16px;
}

.home-faq-cta button{
  padding:12px 26px;
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

/* DESKTOP */

@media(min-width:992px){

  .home-faq-wrap{
    padding:80px 8%;
  }

  .home-faq-card{
    padding:30px;
  }

  .home-faq-question{
    font-size:17px;
  }

}
`;

    const id = "faq-ai-style";

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

  /* AUTO OPEN FIRST FAQ ON SCROLL */

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
      q: "What is AI Marketing?",
      a: "AI Marketing uses artificial intelligence to analyze data, predict customer behavior, automate campaigns, and optimize marketing performance for better results."
    },
    {
      q: "How does AI improve marketing performance?",
      a: "AI analyzes real-time data to optimize targeting, bidding, and content strategy, helping businesses increase conversions and reduce marketing waste."
    },
    {
      q: "Is AI Marketing suitable for small businesses?",
      a: "Yes. AI tools help small businesses compete with larger brands by improving efficiency, targeting the right audience, and maximizing ROI."
    },
    {
      q: "Can AI Marketing reduce advertising costs?",
      a: "Absolutely. AI continuously optimizes campaigns to lower cost-per-lead and improve return on investment."
    },
    {
      q: "How do we get started with AI Marketing?",
      a: "Contact our team for a consultation. We'll analyze your business goals and build a customized AI-driven marketing strategy."
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
          Everything you need to know about AI-powered marketing solutions.
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

        <div className="home-faq-cta">

          <h3>Ready to grow with AI?</h3>

          <p>
            Let our experts build a smart marketing system for your business.
          </p>

          <Link to="/contact">
            <button>
              BOOK FREE AI CONSULTATION →
            </button>
          </Link>

        </div>

      </div>

    </section>

  );

}


// 6

