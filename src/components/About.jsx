import React, { useEffect, useState, useRef } from "react";

const BG_QUOTE_IMAGE = "/images/about/image.png";

 function StatsHighlight() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 150, label: "Happy Clients" },
    { value: 12, label: "Years of Experience" },
    { value: 20, label: "Expert Professionals" },
    { value: 100, label: "Projects Delivered" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  /* ================= COUNT-UP LOGIC ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 40);

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });
  }, [start]);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
/* ===== STATS SECTION ===== */
.sha-stats{
  background:#ffffff;
  padding:50px 1vw;
  font-family:Inter,system-ui;
}

.sha-stats-inner{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:40px;
  text-align:center;
}

/* NUMBER */
.stat-value{
  font-size:48px;
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:10px;
}

/* LABEL */
.stat-label{
  font-size:14px;
  font-weight:700;
  letter-spacing:0.1em;
  text-transform:uppercase;
  color:#0f172a;
}

/* RESPONSIVE */
@media(max-width:900px){
  .sha-stats-inner{
    grid-template-columns:1fr 1fr;
    gap:50px;
  }
}

@media(max-width:480px){
  .sha-stats-inner{
    grid-template-columns:1fr;
  }

  .stat-value{
    font-size:42px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="sha-stats" ref={sectionRef}>
      <div className="sha-stats-inner">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="stat-value">{counts[i]}+</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



function Testimonials() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const testimonials = [
    {
      name: "Muthukumar",
      role: "Founder, Chennai Business",
      quote:
        "SHA Infotechnology helped us build a strong digital foundation. Their SEO strategy and website performance improvements brought us consistent leads."
    },
    {
      name: "Priya Anand",
      role: "Startup Founder",
      quote:
        "Their transparent workflow and clear communication stood out. We always knew what was happening and why. Results were visible within weeks."
    },
    {
      name: "Suresh Kumar",
      role: "Retail Business Owner",
      quote:
        "From UI design to performance optimization, everything was handled professionally. SHA Infotechnology truly understands business growth."
    },
    {
      name: "Arun Raj",
      role: "E-commerce Entrepreneur",
      quote:
        "Our online store performance improved drastically. Faster load times, better UX, and higher conversions after working with SHA Infotechnology."
    },
    {
      name: "Divya Shankar",
      role: "Marketing Head",
      quote:
        "Their digital strategy helped us reach the right audience without wasting ad spend. Highly recommend their data-driven approach."
    }
  ];

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  /* ===== STYLES ===== */
  useEffect(() => {
    const css = `
/* ===== TESTIMONIAL SECTION ===== */
.sha-testimonial{
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding:10px 6vw;
  font-family:Inter,system-ui;
  color:#ffffff;
}

.sha-testimonial-inner{
  max-width:960px;
  margin:auto;
}

/* HEADING */
.sha-testimonial h2{
  font-size:clamp(32px,4.5vw,48px);
  font-weight:900;
  line-height:1.15;
  margin-bottom:14px;
}

.sha-testimonial h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sha-testimonial p.lead{
  font-size:16px;
  color:#cbd5f5;
  margin-bottom:50px;
}

/* SLIDER */
.testimonial-slider{
  overflow:hidden;
  cursor:grab;
}

.testimonial-track{
  display:flex;
  transition:transform .6s cubic-bezier(.16,1,.3,1);
}

/* CARD */
.testimonial-card{
  min-width:100%;
  background:linear-gradient(180deg,#0f172a,#020617);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:28px;
  padding:42px;
  box-shadow:0 40px 120px rgba(0,0,0,.7);
}

/* STARS */
.testimonial-rating{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-size:18px;
  margin-bottom:16px;
}

/* QUOTE */
.testimonial-quote{
  font-size:18px;
  line-height:1.85;
  color:#f1f5f9;
  margin-bottom:32px;
}

/* AUTHOR */
.testimonial-author{
  display:flex;
  align-items:center;
  gap:14px;
}

.author-avatar{
  width:48px;
  height:48px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:900;
}

.author-name{
  font-weight:800;
}

.author-role{
  font-size:14px;
  color:#9ca3af;
}

/* DOTS */
.testimonial-dots{
  display:flex;
  justify-content:center;
  gap:12px;
  margin-top:28px;
}

.testimonial-dots span{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#334155;
  cursor:pointer;
  transition:.3s;
}

.testimonial-dots span.active{
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  box-shadow:0 0 14px rgba(139,92,246,.9);
}

/* MOBILE */
@media(max-width:640px){
  .testimonial-card{
    padding:28px;
  }
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  /* ===== DRAG / SWIPE ===== */
  const handleStart = e => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = e => {
    if (!isDragging.current) return;
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = startX.current - endX;

    if (diff > 60) setIndex(i => Math.min(i + 1, testimonials.length - 1));
    if (diff < -60) setIndex(i => Math.max(i - 1, 0));

    isDragging.current = false;
  };

  return (
    <section className="sha-testimonial">
      <div className="sha-testimonial-inner">
        <h2>
          What our clients say <br />
          about <span>working with us</span>
        </h2>

        <p className="lead">
          Real feedback from businesses that trusted SHA Infotechnology
          to scale their digital growth.
        </p>

        <div
          className="testimonial-slider"
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-quote">{t.quote}</div>

                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function Vission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const header = section.querySelector(".vision-header");
    const image = section.querySelector(".vision-image-glow");
    const divider = section.querySelector(".vision-divider");
    const paragraphs = section.querySelectorAll(".vision-text p");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.add("reveal");
          divider.classList.add("draw");
          image.classList.add("reveal");
          paragraphs.forEach((p, i) =>
            setTimeout(() => p.classList.add("reveal"), i * 150)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      {/* HEADER */}
      <div className="vision-header">
        <h2 className="vision-title">
          <span className="vision-title-white">Our Vision</span>
          <span className="vision-title-gradient">Driving Digital Growth</span>
        </h2>
        <div className="vision-divider"></div>
      </div>

      {/* CONTENT */}
      <div className="vision-container">
        {/* IMAGE */}
        <div className="vision-image">
          <div className="vision-image-glow">
            <img src="/images/vission.png" alt="Our Vision" />
          </div>
        </div>

        {/* TEXT */}
        <div className="vision-text">
          <p>
            At SHA Infotechnology, we believe sustainable growth comes from the
            right blend of creativity, performance marketing, and modern
            technology—built to scale with your business.
          </p>
          <p>
            We aim to empower brands to build a powerful online presence,
            strengthen customer trust, and achieve long-term success in an
            ever-evolving digital landscape.
          </p>
          <p>
            Our vision is to create digital solutions that are visually
            compelling and strategically designed to deliver real business
            impact.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
/* ================= VISION SECTION ================= */

.vision-section{
  padding: clamp(10px, 8vw) 6vw;
  // background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family: Inter, system-ui, sans-serif;
  color: #e5e7eb;
  overflow:hidden;
}

/* ===== HEADER ===== */
.vision-header{
  text-align:center;
  max-width:900px;
  margin:0 auto clamp(32px, 6vw, 60px);
  opacity:0;
  transform:translateY(24px);
  transition:all .8s ease;
}

.vision-header.reveal{
  opacity:1;
  transform:none;
}

.vision-title{
  font-size:clamp(30px,4vw,54px);
  font-weight:800;
  line-height:1.2;
}

.vision-title-white{
  display:block;
  color:#ffffff;
}

.vision-title-gradient{
  display:block;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.vision-divider{
  width:90px;
  height:3px;
  background:#8b5cf6;
  margin:18px auto 0;
  border-radius:2px;
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .6s ease .2s;
}

.vision-divider.draw{
  transform:scaleX(1);
}

/* ===== LAYOUT ===== */
.vision-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1.1fr;
  gap:clamp(28px,5vw,60px);
  align-items:center;
}

/* ===== IMAGE ===== */
.vision-image{
  display:flex;
  justify-content:center;
}

.vision-image-glow{
  position:relative;
  opacity:0;
  transform:translateY(20px);
  transition:all .8s ease;
}

.vision-image-glow.reveal{
  opacity:1;
  transform:none;
}

.vision-image-glow::before{
  content:"";
  position:absolute;
  inset:-50px;
  background:radial-gradient(
    circle,
    rgba(168,85,247,.45),
    rgba(236,72,153,.25),
    transparent 70%
  );
  filter:blur(60px);
  z-index:0;
}

.vision-image-glow img{
  position:relative;
  z-index:2;
  width:100%;
  max-width:480px;
  border-radius:18px;
}

/* ===== TEXT ===== */
.vision-text p{
  font-size:16px;
  line-height:1.75;
  margin-bottom:14px;
  color:#cbd5f5;
  opacity:0;
  transform:translateY(20px);
  transition:all .6s ease;
}

.vision-text p.reveal{
  opacity:1;
  transform:none;
}

/* ===== MOBILE ===== */
@media (max-width:900px){
  .vision-container{
    grid-template-columns:1fr;
    text-align:center;
  }

  .vision-text p{
    font-size:15px;
  }

  .vision-image-glow img{
    max-width:360px;
  }
}
      `}</style>
    </section>
  );
}

function TrustTimelineSticky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0
  });

  useEffect(() => {
    const css = `
/* ================= TRUST SECTION ================= */
.trust-wrap{
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  padding:120px 6vw;
  font-family:Inter,system-ui;
  color:#e5e7eb;
}

/* ================= HEADING ================= */
.trust-heading{
  text-align:center;
  margin-bottom:90px;
}

.trust-heading h5{
  font-size:14px;
  letter-spacing:.14em;
  color:#cbd5f5;
}

.trust-heading h2{
  font-size:clamp(32px,5vw,56px);
  font-weight:900;
}

.trust-heading h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.trust-underline{
  width:72px;
  height:4px;
  margin:18px auto 0;
  border-radius:999px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
}

/* ================= GRID ================= */
.trust-grid{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:70px;
}

/* ================= TIMELINE ================= */
.trust-timeline{
  position:relative;
  display:grid;
  gap:60px;
}

.trust-timeline::before{
  content:"";
  position:absolute;
  left:10px;
  top:0;
  bottom:0;
  width:3px;
  background:linear-gradient(180deg,#8b5cf6,#ec4899);
}

/* ITEM – ALWAYS VISIBLE */
.trust-item{
  position:relative;
  padding-left:72px;
}

/* DOT */
.trust-dot{
  position:absolute;
  left:1px;
  top:8px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#020617;
  border:2px solid var(--accent);
}

.trust-item.active .trust-dot{
  background:var(--accent);
  box-shadow:0 0 18px var(--accent);
}

/* CARD */
.trust-card{
  background:rgba(255,255,255,0.06);
  border:1px solid var(--accent-soft);
  border-radius:22px;
  padding:26px;
  box-shadow:0 30px 80px rgba(0,0,0,.6);
}

.trust-icon{
  width:46px;
  height:46px;
  border-radius:14px;
  background:linear-gradient(135deg,var(--accent),#ffffff22);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  margin-bottom:14px;
}

.trust-card h4{
  font-size:18px;
  font-weight:900;
}

.trust-card p{
  font-size:15px;
  line-height:1.7;
  color:#cbd5f5;
}

/* ================= STICKY RIGHT ================= */
.trust-sticky{
  position:sticky;
  top:110px;
}

.trust-box{
  background:linear-gradient(180deg,#0f172a,#020617);
  border:1px solid var(--accent-soft);
  border-radius:26px;
  padding:38px;
  box-shadow:0 40px 120px rgba(0,0,0,.75);
}

.trust-box h3 span{
  background:linear-gradient(90deg,var(--accent),#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* EXTRA CONTENT */
.trust-points{
  display:grid;
  gap:12px;
  margin:22px 0;
}

.trust-point{
  display:flex;
  gap:10px;
  font-size:14px;
}

.trust-point span{
  color:var(--accent);
  font-weight:900;
}

/* COUNTERS */
.trust-counters{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.counter-box{
  background:rgba(255,255,255,0.05);
  border-radius:18px;
  padding:18px;
  border:1px solid var(--accent-soft);
  text-align:center;
}

.counter-box strong{
  font-size:26px;
}

/* ================= MOBILE ================= */
@media(max-width:900px){
  .trust-grid{
    grid-template-columns:1fr;
  }
  .trust-sticky{
    position:relative;
    top:auto;
  }
}

@media(max-width:480px){
  .trust-counters{
    grid-template-columns:1fr;
  }
}
`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        clients: Math.min(step * 6, 120),
        projects: Math.min(step * 9, 180),
        years: Math.min(step, 5)
      });
      if (step >= 20) clearInterval(timer);
    }, 60);

    return () => style.remove();
  }, []);

  const timeline = [
    { title: "Strong Digital Foundation", desc: "Scalable, future-ready architecture.", icon: "🏗️", accent: "#8b5cf6" },
    { title: "Transparent Process", desc: "Clear timelines & communication.", icon: "🔍", accent: "#22d3ee" },
    { title: "Results That Matter", desc: "Leads, traffic & conversions.", icon: "📈", accent: "#ec4899" },
    { title: "Long-Term Partnership", desc: "We grow with your business.", icon: "🤝", accent: "#f59e0b" }
  ];

  return (
    <section className="trust-wrap">
      <div className="trust-heading">
        <h5>OUR MISSION</h5>
        <h2><span>Turning Vision Into Results</span></h2>
        <div className="trust-underline"></div>
      </div>

      <div className="trust-grid">
        {/* LEFT */}
        <div className="trust-timeline">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`trust-item ${activeIndex === i ? "active" : ""}`}
              style={{
                "--accent": item.accent,
                "--accent-soft": `${item.accent}55`
              }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="trust-dot"></div>
              <div className="trust-card">
                <div className="trust-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="trust-sticky">
          <div
            className="trust-box"
            style={{
              "--accent": timeline[activeIndex].accent,
              "--accent-soft": `${timeline[activeIndex].accent}55`
            }}
          >
            <h3>Why Clients <span>Trust Us</span></h3>

            <div className="trust-points">
              <div className="trust-point"><span>✓</span> Strategy-first execution</div>
              <div className="trust-point"><span>✓</span> SEO & performance focus</div>
              <div className="trust-point"><span>✓</span> Transparent process</div>
              <div className="trust-point"><span>✓</span> Scalable solutions</div>
            </div>

            <div className="trust-counters">
              <div className="counter-box"><strong>{counters.clients}+</strong><span>Clients</span></div>
              <div className="counter-box"><strong>{counters.projects}+</strong><span>Projects</span></div>
              <div className="counter-box"><strong>{counters.years}+</strong><span>Years</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function IdeasSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= IDEAS SECTION ================= */

.ideas-section{
  padding: clamp(60px, 8vw, 90px) 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family: Inter, system-ui;
  overflow:hidden;
}

.ideas-container{
  max-width:1200px;
  margin:0 auto;
}

/* ===== HEADING ===== */
.ideas-heading{
  text-align:center;
  margin-bottom: clamp(28px, 5vw, 48px);
  opacity:0;
  transform:translateY(24px);
  transition:all .7s ease;
}

.ideas-heading.show{
  opacity:1;
  transform:none;
}

.ideas-heading h2{
  font-size: clamp(28px, 4vw, 44px);
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  line-height:1.2;
}

/* ===== GRID ===== */
.ideas-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap: clamp(20px, 3vw, 32px);
}

/* ===== CARD ===== */
.idea-card{
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  border-radius:20px;
  padding: clamp(22px, 3vw, 32px);
  box-shadow:
    0 18px 50px rgba(0,0,0,0.55),
    inset 0 0 0 1px rgba(255,255,255,0.08);

  opacity:0;
  transform:translateY(28px);
  transition:
    opacity .6s ease,
    transform .6s cubic-bezier(.16,1,.3,1);
}

.idea-card.show{
  opacity:1;
  transform:none;
}

/* CARD TITLE */
.idea-card h3{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* CARD TEXT */
.idea-card p{
  font-size:15.5px;
  line-height:1.7;
  color:#e5e7eb;
  margin:0;
}

/* ===== TABLET ===== */
@media(max-width:1024px){
  .ideas-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){
  .ideas-section{
    padding: 60px 5vw;
  }

  .ideas-grid{
    grid-template-columns:1fr;
    gap:22px;
  }

  .idea-card p{
    font-size:15px;
  }
}
    `;

    const id = "ideas-section-style-clean";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    /* SCROLL REVEAL */
    const section = sectionRef.current;
    const heading = section.querySelector(".ideas-heading");
    const cards = section.querySelectorAll(".idea-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add("show");
          cards.forEach((card, i) =>
            setTimeout(() => card.classList.add("show"), i * 150)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ideas-section" ref={sectionRef}>
      <div className="ideas-container">

        <div className="ideas-heading">
          <h2>The Ideas That Drive Everything We Do</h2>
        </div>

        <div className="ideas-grid">
          <div className="idea-card">
            <h3>Core Purpose</h3>
            <p>
              To guide businesses from confusion to confidence by delivering
              clear digital strategies that turn ideas into measurable growth.
            </p>
          </div>

          <div className="idea-card">
            <h3>Core Values</h3>
            <p>
              Driven by transparency, responsibility, continuous learning, and
              respect for our clients—guiding every decision we make.
            </p>
          </div>

          <div className="idea-card">
            <h3>Our Passion</h3>
            <p>
              Creating digital experiences that deliver real impact through
              thoughtful design, strategy, and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= WHY CHOOSE SECTION ================= */

.why-section{
  padding: clamp(64px, 8vw, 96px) 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family: Inter, system-ui;
  overflow:hidden;
}

.why-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.why-title{
  text-align:center;
  margin-bottom: clamp(36px, 6vw, 64px);
  opacity:0;
  transform:translateY(24px);
  transition:.6s ease;
}

.why-title.show{
  opacity:1;
  transform:none;
}

.why-title h2{
  font-size: clamp(28px, 4vw, 46px);
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== GRID ===== */
.why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap: clamp(22px, 3vw, 40px);
}

/* ===== CARD ===== */
.why-card{
  background:#ffffff;
  border-radius:24px;
  padding: clamp(28px, 4vw, 40px);
  text-align:center;
  box-shadow:0 20px 60px rgba(0,0,0,0.28);
  display:flex;
  flex-direction:column;
  align-items:center;

  opacity:0;
  transform:translateY(30px);
  transition:
    opacity .6s ease,
    transform .6s cubic-bezier(.16,1,.3,1);
}

.why-card.show{
  opacity:1;
  transform:none;
}

/* ICON */
.why-icon{
  width:72px;
  height:72px;
  margin-bottom:20px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffe4e6;
}

.why-icon span{
  font-size:34px;
}

/* TITLE */
.why-card h3{
  font-size:20px;
  font-weight:800;
  margin-bottom:14px;
  color:#ff1f1f;
}

/* TEXT */
.why-card .para{
  font-size:15.5px;
  line-height:1.7;
  color:#000000;
  margin:0;
}
.why-card::before{ content:""; position:absolute; inset:0; border-radius:26px; padding:1.5px; background:linear-gradient(135deg,#8b5cf6,#ec4899); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; }
.why-card .para{ font-size:16px; 
line-height:1.8; 
color:#000000 !important; /* 🔥 PURE BLACK */ 
opacity:1 !important; /* 🔥 NO FADE */ 
visibility:visible !important; 
}
/* ===== TABLET ===== */
@media(max-width:1024px){
  .why-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

/* ===== MOBILE ===== */
@media(max-width:768px){

  .why-section{
    padding:60px 20px;
  }

  .why-title{
    margin-bottom:32px;
  }

  .why-grid{
    grid-template-columns:1fr;
    gap:24px;
  }

  .why-card{
    padding:26px 20px;
    opacity:1 !important;
    transform:none !important;
  }

  .why-icon{
    width:60px;
    height:60px;
  }

  .why-icon span{
    font-size:28px;
  }

  .why-card h3{
    font-size:18px;
  }

  .why-card .para{
    font-size:15px;
  }
}
    `;

    const id = "why-choose-clean-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    const section = sectionRef.current;
    const title = section.querySelector(".why-title");
    const cards = section.querySelectorAll(".why-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          title.classList.add("show");
          cards.forEach((card, i) =>
            setTimeout(() => card.classList.add("show"), i * 120)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">

        <div className="why-title">
          <h2>Why Choose Shainfotechnology</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🖥️</div>
            <h3>End-to-End Website Development</h3>
            <p className="para">
              We build fast, responsive websites designed to convert visitors
              into customers and support your business goals.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📊</div>
            <h3>SEO Strategies That Drive Growth</h3>
            <p className="para">
              High-intent SEO strategies that improve visibility, traffic, and
              qualified enquiries.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>High-ROI Google Ads & PPC</h3>
            <p className="para">
              Targeted ad campaigns optimised for conversions and measurable ROI.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🛍️</div>
            <h3>Scalable E-Commerce Solutions</h3>
            <p className="para">
              Secure, mobile-first e-commerce platforms built to scale.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📢</div>
            <h3>Result-Focused Social Media</h3>
            <p className="para">
              Campaigns that build brand trust and real audience engagement.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔍</div>
            <h3>Transparent Process & Support</h3>
            <p className="para">
              Clear communication, reporting, and long-term partnership.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


function TeamSection() {
  useEffect(() => {
    const css = `
/* ================= TEAM SECTION ================= */

.team-section{
  padding:120px 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family:Inter,system-ui;
  overflow:hidden;
}

.team-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.team-title{
  text-align:center;
  margin-bottom:70px;
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.team-section.show .team-title{
  opacity:1;
  transform:none;
}

.team-title h2{
  font-size:46px;
  font-weight:900;
  margin-bottom:12px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.team-title p{
  font-size:18px;
  color:#cbd5f5;
  line-height:1.6;
}

/* ===== GRID ===== */
.team-grid{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:40px;
}

/* ===== CARD ===== */
.team-card{
  width:380px;
   background:#ffffff !important;
  border-radius:22px;
  overflow:hidden;
  box-shadow:0 25px 70px rgba(0,0,0,0.6);

  opacity:0;
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.16,1,.3,1);
}

.team-card.from-left{ transform:translateX(-60px); }
.team-card.from-right{ transform:translateX(60px); }

.team-card.show{
  opacity:1;
  transform:none;
}

.team-card:hover{
  transform:translateY(-8px);
}

/* IMAGE */
.team-image{
  width:100%;
  height:300px;
  overflow:hidden;
  background:#ffffff !important;
}

.team-image img{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* INFO */
.team-info{
  padding:22px 24px 26px;
  text-align:center;
}

.team-role{
  font-size:13px;
  letter-spacing:2px;
  color:#64748b !important;
  margin-bottom:6px;
}

.team-name{
  font-size:20px;
  font-weight:800;
   color:#020617 !important;
}
 .team-card from-left{
 background: #ffffff;
 
 }

/* ================= TABLET ================= */

@media (max-width:1024px){
  .team-card{
    width:320px;
  }
}

/* ================= FORCE CLEAN MOBILE TEAM CARD ================= */
@media (max-width: 768px){

  /* Kill old layouts completely */
  .team-grid{
    display:flex !important;
    flex-direction:column !important;
    
    gap:20px !important;
  }

  .team-card{
    width:100% !important;
    height:auto !important;
    background:#ffffff !important;
    border-radius:20px !important;
    padding:24px 16px 22px !important;
    box-shadow:0 14px 36px rgba(0,0,0,0.18) !important;
    transform:none !important;
    opacity:1 !important;
  }

  /* Remove old hover + animations */
  .team-card:hover,
  .team-card.from-left,
  .team-card.from-right{
    transform:none !important;
  }

  /* IMAGE */
  .team-image{
    height:auto !important;
    display:flex !important;
    justify-content:center !important;
    margin-bottom:14px !important;
    background:none !important;
  }

  .team-image img{
    width:110px !important;
    height:110px !important;
    border-radius:50% !important;
    object-fit:cover !important;
    background:#ffffff !important;
    border:4px solid #ffffff !important;
    box-shadow:0 8px 22px rgba(0,0,0,0.2) !important;
  }

  /* TEXT */
  .team-info{
    padding:0 !important;
    text-align:center !important;
  }

  .team-name{
    font-size:18px !important;
    font-weight:800 !important;
    color:#020617 !important;
    margin-bottom:4px !important;
  }

  .team-role{
    font-size:14px !important;
    font-weight:500 !important;
    color:#6b7280 !important;
    letter-spacing:0.4px !important;
  }
}



`;

    const id = "team-section-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    const section = document.querySelector(".team-section");
    const cards = document.querySelectorAll(".team-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add("show"), i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">

        <div className="team-title">
          <h2>Meet the People Behind the Work.</h2>
          <p>
            The team that turns ideas into powerful digital solutions.
            <br />
            We believe great results come from teamwork and trust.
          </p>
        </div>

        <div className="team-grid">

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/m.jpeg" alt="Prasanth V" />
            </div>
            <div className="team-info">
              <div className="team-role">PROJECT MANAGER</div>
              <div className="team-name">Prasanth V</div>
            </div>
          </div>

          <div className="team-card from-right">
            <div className="team-image">
              <img src="/images/about/r.jpeg" alt="Ramya" />
            </div>
            <div className="team-info">
              <div className="team-role">PROJECT MANAGER</div>
              <div className="team-name">Ramya</div>
            </div>
          </div>

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/s.png" alt="Sowndarya S" />
            </div>
            <div className="team-info">
              <div className="team-role">WEB DEVELOPER</div>
              <div className="team-name">Sowndarya S</div>
            </div>
          </div>

          <div className="team-card from-right">
            <div className="team-image">
              <img src="/images/about/gaya2.jpeg" alt="Gayathri S" />
            </div>
            <div className="team-info">
              <div className="team-role">TEAM LEAD</div>
              <div className="team-name">Gayathri S</div>
            </div>
          </div>

          <div className="team-card from-left">
            <div className="team-image">
              <img src="/images/about/sathish.png" alt="Sathish Kumar" />
            </div>
            <div className="team-info">
              <div className="team-role">MANAGEMENT</div>
              <div className="team-name">Sathish Kumar</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function MeetTheTeam() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= MEET THE TEAM ================= */

.mission-section{
  padding: clamp(64px, 8vw, 96px) 6vw;
  background: radial-gradient(circle at top, #0b1220, #020617 70%);
  font-family: Inter, system-ui;
  overflow:hidden;
}

.mission-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */
.mission-heading{
  text-align:center;
  margin-bottom: clamp(36px, 6vw, 64px);
  line-height:1.2;
  opacity:0;
  transform:translateY(24px);
  transition:.6s ease;
}

.mission-section.show .mission-heading{
  opacity:1;
  transform:none;
}

.mission-heading .white{
  display:block;
  font-size: clamp(26px, 4vw, 40px);
  font-weight:800;
  color:#ffffff;
}

.mission-heading .gradient{
  display:block;
  font-size: clamp(30px, 5vw, 52px);
  font-weight:900;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.mission-heading::after{
  content:"";
  width:100px;
  height:3px;
  background:#ffffff;
  display:block;
  margin:18px auto 0;
  opacity:.7;
}

/* ===== GRID ===== */
.mission-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap: clamp(32px, 6vw, 64px);
  align-items:center;
}

/* ===== TEXT ===== */
.mission-text p{
  font-size:17px;
  line-height:1.8;
  color:#f1f1f1;
  margin-bottom:18px;
  max-width:640px;

  opacity:0;
  transform:translateY(18px);
  transition:.6s ease;
}

.mission-points{
  margin-top:18px;
  padding-left:18px;
}

.mission-points li{
  font-size:16px;
  margin-bottom:12px;
  color:#d1d5db;

  opacity:0;
  transform:translateY(18px);
  transition:.6s ease;
}

.mission-section.show .mission-text p,
.mission-section.show .mission-points li{
  opacity:1;
  transform:none;
}

/* ===== IMAGE ===== */
.mission-image{
  display:flex;
  justify-content:center;
}

.mission-image img{
  width:100%;
  max-width:480px;
  border-radius:32px;
  box-shadow:
    0 28px 90px rgba(139,92,246,.35),
    0 14px 40px rgba(236,72,153,.25);
}

/* ===== MOBILE ===== */
@media(max-width:900px){

  .mission-section{
    padding:60px 20px;
  }

  .mission-grid{
    grid-template-columns:1fr;
    gap:32px;
  }

  .mission-text p,
  .mission-points li{
    font-size:15px;
    line-height:1.65;
    opacity:1 !important;
    transform:none !important;
  }

  .mission-image img{
    max-width:360px;
  }

  .mission-heading{
    opacity:1 !important;
    transform:none !important;
  }
}
    `;

    const id = "meet-team-clean-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    const section = sectionRef.current;
    const textItems = section.querySelectorAll(
      ".mission-text p, .mission-points li"
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
          textItems.forEach((el, i) =>
            setTimeout(() => el.classList.add("show"), i * 140)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      <div className="mission-container">

        <h2 className="mission-heading">
          <span className="white">Meet the Team</span>
          <span className="gradient">The People Behind the Pixels</span>
        </h2>

        <div className="mission-grid">

          <div className="mission-text">
            <p>
              At SHA Infotechnology, our strength lies in the people behind the work.
              We are a passionate team of strategists, developers, designers, and
              digital specialists dedicated to helping businesses succeed online.
            </p>

            <p>
              Each team member brings unique skills and experience, working
              collaboratively to deliver high-quality websites, powerful SEO
              strategies, and result-driven digital marketing solutions.
            </p>

            <ul className="mission-points">
              <li>Collaborative and transparent work culture</li>
              <li>Strong focus on quality, performance, and results</li>
              <li>Long-term partnerships and measurable growth</li>
            </ul>
          </div>

          <div className="mission-image">
            <img
              src="/images/meetourteam.png"
              alt="Meet Our Team"
              draggable="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}



function AboutMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `
/* ================= ABOUT MISSION ================= */

.aboutmission-section{
  padding: clamp(64px, 8vw, 96px) 6vw;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  font-family:Inter,system-ui,sans-serif;
  color:#e5e7eb;
  overflow:hidden;
}

.aboutmission-header{
  text-align:center;
  max-width:900px;
  margin:0 auto clamp(36px, 6vw, 56px);
}

/* ===== TITLE ===== */
.aboutmission-title{
  font-size:clamp(28px,4vw,52px);
  font-weight:800;
  line-height:1.2;
  margin-bottom:14px;

  opacity:0;
  transform:translateY(20px);
  transition:.6s ease;
}

.aboutmission-section.show .aboutmission-title{
  opacity:1;
  transform:none;
}

.aboutmission-title-white{
  display:block;
  color:#ffffff;
}

.aboutmission-title-gradient{
  display:block;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Divider */
.aboutmission-divider{
  width:70px;
  height:3px;
  background:#8b5cf6;
  margin:18px auto 0;
  border-radius:2px;
  opacity:0;
  transform:scaleX(0);
  transition:.6s ease;
}

.aboutmission-section.show .aboutmission-divider{
  opacity:1;
  transform:scaleX(1);
}

/* ===== CONTENT GRID ===== */
.aboutmission-container{
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1.1fr 1fr;
  gap: clamp(32px, 6vw, 56px);
  align-items:center;
}

/* ===== TEXT ===== */
.aboutmission-text p{
  font-size:16px;
  line-height:1.75;
  margin-bottom:16px;
  color:#cbd5f5;

  opacity:0;
  transform:translateY(16px);
  transition:.6s ease;
}

.aboutmission-text p.show{
  opacity:1;
  transform:none;
}

/* ===== IMAGE ===== */
.aboutmission-image{
  display:flex;
  justify-content:center;

  opacity:0;
  transform:translateY(20px);
  transition:.7s ease;
}

.aboutmission-section.show .aboutmission-image{
  opacity:1;
  transform:none;
}

.aboutmission-image-glow{
  position:relative;
}

.aboutmission-image-glow::before{
  content:"";
  position:absolute;
  inset:-40px;
  background:radial-gradient(
    circle,
    rgba(168,85,247,.45),
    rgba(236,72,153,.25),
    transparent 70%
  );
  filter:blur(40px);
  z-index:0;
}

.aboutmission-image-glow img{
  position:relative;
  z-index:2;
  width:100%;
  max-width:480px;
  border-radius:14px;
}

/* ===== MOBILE ===== */
@media(max-width:900px){

  .aboutmission-section{
    padding:60px 20px;
  }

  .aboutmission-container{
    grid-template-columns:1fr;
    gap:28px;
  }

  .aboutmission-text{
    text-align:center;
  }

  .aboutmission-text p{
    font-size:15px;
    line-height:1.65;
    opacity:1 !important;
    transform:none !important;
  }

  .aboutmission-title{
    opacity:1 !important;
    transform:none !important;
  }

  .aboutmission-divider{
    opacity:1 !important;
    transform:scaleX(1) !important;
  }

  .aboutmission-image{
    opacity:1 !important;
    transform:none !important;
  }

  .aboutmission-image-glow::before{
    inset:-24px;
    filter:blur(28px);
  }
}
    `;

    const id = "aboutmission-clean-style";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    const section = sectionRef.current;
    const textLines = section.querySelectorAll(".aboutmission-text p");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");
          textLines.forEach((p, i) =>
            setTimeout(() => p.classList.add("show"), i * 140)
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutmission-section" ref={sectionRef}>
      <div className="aboutmission-header">
        <h2 className="aboutmission-title">
          <span className="aboutmission-title-white">Our Mission</span>
          <span className="aboutmission-title-gradient">
            Turning Vision Into Results
          </span>
        </h2>
        <div className="aboutmission-divider"></div>
      </div>

      <div className="aboutmission-container">
        <div className="aboutmission-text">
          <p>
            Our mission is to help businesses grow by delivering impactful
            digital marketing and software solutions that generate real,
            measurable outcomes.
          </p>

          <p>
            We focus on building strong digital foundations that support
            long-term success—combining strategy, creativity, and technology
            to improve brand visibility, customer engagement, and revenue growth.
          </p>

          <p>
            Through data-driven decision-making, continuous optimization,
            and a client-first mindset, we ensure every business we work with
            grows smarter, faster, and with confidence.
          </p>
        </div>

        <div className="aboutmission-image">
          <div className="aboutmission-image-glow">
            <img src="/images/mission.png" alt="Our Mission" />
          </div>
        </div>
      </div>
    </section>
  );
}


function HomeHerohead() {
  useEffect(() => {
    const css = `
      :root{
        --bg-dark:#020617;
        --bg-dark-2:#0b1220;
      }

      *{
        box-sizing:border-box;
      }

      html, body{
        margin:0;
        padding:0;
        background:#020617;
        overflow-x:hidden; /* 🔥 IMPORTANT */
      }

      /* ================= HERO ================= */
      .home-hero{
        position:relative;
        min-height:100vh;
        padding:40px 8vw 60px;
        background:radial-gradient(
          circle at top,
          var(--bg-dark-2),
          var(--bg-dark) 70%
        );
        display:grid;
        grid-template-columns:1fr 1.1fr;
        align-items:center;
        gap:60px;
        font-family:Inter,system-ui,sans-serif;
        overflow:hidden;
      }

      /* ================= IMAGE ================= */
      .hero-image-wrap{
        display:flex;
        justify-content:center;
        opacity:0;
        transform:translateY(40px);
        animation:heroImageIn 1.2s ease forwards;
      }

      @keyframes heroImageIn{
        to{
          opacity:1;
          transform:none;
        }
      }

      .hero-image{
        max-width:460px;
        width:100%;
        filter:drop-shadow(0 50px 120px rgba(139,92,246,.4));
      }

      /* ================= TEXT ================= */
      .hero-text{
        max-width:560px;
      }

      .hero-text small{
        color:#c7d2fe;
        font-weight:700;
        display:block;
        margin-bottom:20px;
      }

      .gradient-text{
        background:linear-gradient(90deg,#a78bfa,#ec4899);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .hero-text h1{
        font-size:clamp(48px,6vw,80px);
        color:#fff;
        margin-bottom:24px;
      }

      .hero-text p{
        color:#e5e7eb;
        line-height:1.8;
        margin-bottom:20px;
      }

      /* ================= 🔥 MOBILE HARD RESET ================= */
      @media (max-width:900px){

        /* REMOVE ALL GRADIENT BLEEDS */
        html, body{
          background:#020617 !important;
        }

        *::before,
        *::after{
          display:none !important;
          content:none !important;
        }

        svg{
          display:none !important;
        }

        .home-hero{
          grid-template-columns:1fr;
          padding:80px 6vw;
          text-align:center;

          /* FORCE SOLID BACKGROUND */
          background:#020617 !important;
          box-shadow:none !important;
          border:none !important;
        }

        .hero-image{
          margin-bottom:40px;
        }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="home-hero">
      <div className="hero-image-wrap">
        <img
          src="/images/about3d.png"
          alt="Illustration"
          className="hero-image"
        />
      </div>

      <div className="hero-text">
        <small>
          Your <span className="gradient-text">Success Story</span>
        </small>

        <h1>
          Starts <br /> Now!
        </h1>

        <p>
          <strong>SHA Infotechnology</strong> helps businesses build strong
          online presence with real, measurable growth.
        </p>

        <p>
          SEO, Ads, Social Media, and Smart Web Development — all under
          one roof.
        </p>
      </div>
    </section>
  );
}



// ========================= ABOUT PAGE MAIN =========================
export default function AboutPage() {


  const vmItems = document.querySelectorAll(".vm-animate");

const vmObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vm-show");
      }
    });
  },
  { threshold: 0.25 }
);

vmItems.forEach(el => vmObserver.observe(el));

  return (

    <>


    <HomeHerohead />
    <Vission />
   
    {/* <OurVission /> */}
    
  <AboutMission />
  
    <div className="about-wrap">
      {/* <AboutMeet /> */}
      <TrustTimelineSticky />
       <StatsHighlight />
<MeetTheTeam />
<TeamSection />
<Testimonials />
<IdeasSection />
     
<WhyChooseSection />

{/* <CTASection /> */}
    </div>

    </>
  );
}
