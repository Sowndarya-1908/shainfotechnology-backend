import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
const BG_QUOTE_IMAGE = "/images/about/image.png";

function StatsHighlight() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const stats = [
    { value: 100, label: "Happy Clients" },
    { value: 2, label: "Years of Experience" },
    { value: 5, label: "Expert Professionals" },
    { value: 180, label: "Projects Delivered" }
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===== STATS SECTION ===== */
.sha-stats{
  background:#ffffff;
  padding:10px 1vw;
  font-family:'Poppins', sans-serif;
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
  font-weight:800;
  font-family:'Poppins', sans-serif;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  margin-bottom:10px;
}

/* LABEL */
.stat-label{
  font-size:17px;
  font-weight:400;
  font-family:'Poppins', sans-serif;
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

  .stat-label{
    font-size:16px;
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


function AboutWaveSection() {
  useEffect(() => {
    const css = `
/* ===== ANIMATED GRADIENT BACKGROUND ===== */
.about-wave-bg{
  position:relative;
  min-height:87vh;
  width:100%;
  overflow:hidden;
  font-family:Inter,system-ui,sans-serif;
  background:linear-gradient(
    315deg,
    rgba(174, 84, 211, 1) 3%,
    rgba(85, 6, 88, 1) 38%,
    rgba(102, 6, 83, 1) 68%,
    rgba(217, 72, 193, 1) 98%
  );
  background-size:400% 400%;
  animation:gradientMove 15s ease infinite;
}

/* GRADIENT ANIMATION */
@keyframes gradientMove{
  0%{background-position:0% 0%}
  50%{background-position:100% 100%}
  100%{background-position:0% 0%}
}
  .about-wave-bg::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:4px;               /* 🔥 seam cover */
  background:#020617;
  z-index:10;
}

/* ===== WAVES ===== */
.about-wave{
  background:rgba(255,255,255,0.25);
  border-radius:1000% 1000% 0 0;
  position:absolute;
  width:200%;
  height:12em;
  bottom:-2px;
  left:0;
  animation:waveMove 10s -3s linear infinite;
  opacity:.8;
  z-index:1;
}

.about-wave:nth-of-type(2){

  bottom:calc(-1.25em - 2px);
  animation:waveMove 18s linear reverse infinite;
}

.about-wave:nth-of-type(3){

  bottom:calc(-1.25em - 2px);
  animation:waveMove 20s -1s reverse infinite;
}

/* WAVE ANIMATION */
@keyframes waveMove{
  0%{transform:translateX(0)}
  25%{transform:translateX(-25%)}
  50%{transform:translateX(-50%)}
  75%{transform:translateX(-25%)}
  100%{transform:translateX(0)}
}

/* ===== CONTENT ABOVE WAVES ===== */
.about-wave-content{
  position:relative;
  z-index:5;
}

/* ===== ABOUT CONTENT ===== */
.about-section{
  min-height:50vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 6vw;
  color:#ffffff;
  text-align:center;
}

.about-container{
  max-width:900px;
}

.about-badge{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 20px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.35);
  font-size:14px;
  font-weight:600;
  margin-bottom:28px;
}

.about-badge span{
  width:10px;
  height:10px;
  background:#ffffff;
  border-radius:50%;
  box-shadow:0 0 12px rgba(255,255,255,.8);
}

.about-heading{
  font-size:clamp(38px,6vw,64px);
  font-weight:900;
  line-height:1.1;
  margin-bottom:24px;
}

.about-heading span{
  background:linear-gradient(90deg,#ffffff,#fbcfe8);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.about-text{
  font-size:18px;
  line-height:1.85;
  color:#f5f3ff;
  margin-bottom:46px;
}

.about-features{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}

.feature-card{
  background:rgba(101, 5, 87, 0.15);
  backdrop-filter:blur(12px);
  border-radius:20px;
  padding:22px;
  font-size:15px;
  font-weight:600;
}

/* MOBILE */
@media(max-width:900px){
  .about-features{
    grid-template-columns:1fr;
  }
.about-wave-bg{
 min-height:100vh;
  }
  .about-text{
    font-size:16px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => style.remove();
  }, []);

  return (
    <section className="about-wave-bg">
      {/* CONTENT */}
      <div className="about-wave-content">
        <section className="about-section">
          <div className="about-container">

            <div className="about-badge">
              <span></span> ABOUT SHA INFOTECHNOLOGY
            </div>

            <h1 className="about-heading">
              Building <span>Digital Experiences</span><br />
              That Drive Growth
            </h1>

            <p className="about-text">
              <strong>SHA Infotechnology</strong> is a digital solutions company
              helping businesses grow through strategy, design, and scalable
              technology.
            </p>

            <div className="about-features">
              <div className="feature-card">🚀 Strategy-First Approach</div>
              <div className="feature-card">🎯 Performance-Driven Solutions</div>
              <div className="feature-card">🤝 Long-Term Growth Partner</div>
            </div>

          </div>
        </section>
      </div>

      {/* WAVES */}
      <div className="about-wave"></div>
      <div className="about-wave"></div>
      <div className="about-wave"></div>
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ===== STYLES ===== */
  useEffect(() => {
    const css = `
/* ===== TESTIMONIAL SECTION ===== */

.sha-testimonial{
  padding:80px 5%;
  font-family:Inter,system-ui,sans-serif;
  color:#ffffff;
}

.sha-testimonial-inner{
  max-width:960px;
  margin:auto;
  text-align:center;
}

/* HEADING */
.sha-testimonial h2{
  font-size:clamp(26px,5vw,44px);
  font-weight:900;
  line-height:1.2;
  margin-bottom:14px;
}

.sha-testimonial h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sha-testimonial p.lead{
  font-size:15px;
  color:#cbd5f5;
  margin-bottom:40px;
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
  border-radius:24px;
  padding:32px;
  box-shadow:0 30px 90px rgba(0,0,0,.6);
  text-align:left;
}

/* STARS */
.testimonial-rating{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-size:16px;
  margin-bottom:14px;
}

/* QUOTE */
.testimonial-quote{
  font-size:16px;
  line-height:1.8;
  color:#f1f5f9;
  margin-bottom:28px;
}

/* AUTHOR */
.testimonial-author{
  display:flex;
  align-items:center;
  gap:12px;
}

.author-avatar{
  width:44px;
  height:44px;
  border-radius:50%;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:900;
}

.author-name{
  font-weight:800;
  font-size:15px;
}

.author-role{
  font-size:13px;
  color:#9ca3af;
}

/* DOTS */
.testimonial-dots{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:24px;
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
  box-shadow:0 0 12px rgba(139,92,246,.8);
}

/* TABLET */
@media(min-width:640px){
  .testimonial-card{
    padding:38px;
  }

  .testimonial-quote{
    font-size:17px;
  }
}

/* DESKTOP */
@media(min-width:1024px){
  .sha-testimonial{
    padding:110px 8%;
  }

  .testimonial-card{
    padding:44px;
  }

  .testimonial-quote{
    font-size:18px;
  }
}
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  /* ===== SWIPE ===== */
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

    if (diff > 60) setIndex(i => (i + 1) % testimonials.length);
    if (diff < -60)
      setIndex(i => (i - 1 + testimonials.length) % testimonials.length);

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
            setTimeout(() => p.classList.add("reveal"), i * 120)
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
      <div className="vision-header">
        <h2 className="vision-title">
          <span className="vision-title-white">Our Vision</span>
          <span className="vision-title-gradient">
            Driving Digital Growth
          </span>
        </h2>
        <div className="vision-divider"></div>
      </div>

      <div className="vision-container">
        <div className="vision-image">
          <div className="vision-image-glow">
            <img src="/images/vission.png" alt="Our Vision" />
          </div>
        </div>

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

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= VISION SECTION ================= */

.vision-section{
  padding:0px 0%;
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  overflow:hidden;
  padding-bottom:0px;
}

/* HEADER */

.vision-header{
  text-align:center;
  max-width:850px;
  margin:0 auto 24px;
  opacity:0;
  transform:translateY(20px);
  transition:all .8s ease;
}

.vision-header.reveal{
  opacity:1;
  transform:none;
}

/* TITLE */

.vision-title{
  font-size:56px;
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
  width:70px;
  height:3px;
  background:#8b5cf6;
  margin:10px auto 0;
  border-radius:2px;
}

/* LAYOUT */

.vision-container{
  max-width:1100px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:28px;
  align-items:center;
  text-align:center;
}

/* IMAGE */

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
  inset:-28px;
  background:radial-gradient(
    circle,
    rgba(168,85,247,.35),
    rgba(236,72,153,.2),
    transparent 70%
  );
  filter:blur(35px);
  z-index:0;
}

.vision-image-glow img{
  position:relative;
  z-index:2;
  width:100%;
  max-width:360px;
  border-radius:16px;
}

/* TEXT */

.vision-text p{
  font-size:18px;
  line-height:1.8;
  color:#cbd5f5;
  margin-bottom:10px;
  opacity:0;
  transform:translateY(20px);
  transition:all .6s ease;
}

.vision-text p:last-child{
  margin-bottom:0;
}

.vision-text p.reveal{
  opacity:1;
  transform:none;
}

/* DESKTOP */

@media(min-width:992px){

  .vision-section{
    padding:50px 8%;
  }

  .vision-container{
    display:grid;
    grid-template-columns:1fr 1.1fr;
    gap:40px;
    align-items:center;
    text-align:left;
  }

  .vision-image-glow img{
    max-width:460px;
  }

}

/* MOBILE */

@media(max-width:768px){

  .vision-title{
    font-size:36px;
  }

  .vision-text p{
    font-size:16px;
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= TRUST SECTION ================= */

.trust-wrap{
  // padding:0px 0%;
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
}

/* HEADING */

.trust-heading{
  text-align:center;
  margin-bottom:30px;
}

.trust-heading h2{
  font-size:56px;
  font-weight:800;
}

.trust-heading h2 span{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.trust-underline{
  width:60px;
  height:3px;
  margin:10px auto 0;
  border-radius:999px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
}

/* GRID */

.trust-grid{
  max-width:1200px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:40px;
}

/* TIMELINE */

.trust-timeline{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:28px;
  padding-left:30px;
}

.trust-timeline::before{
  content:"";
  position:absolute;
  left:8px;
  top:0;
  bottom:0;
  width:3px;
  background:linear-gradient(180deg,#8b5cf6,#ec4899);
}

.trust-item{
  position:relative;
}

.trust-dot{
  position:absolute;
  left:-2px;
  top:6px;
  width:14px;
  height:14px;
  border-radius:50%;
  background:#020617;
  border:2px solid var(--accent);
}

.trust-item.active .trust-dot{
  background:var(--accent);
  box-shadow:0 0 10px var(--accent);
}

.trust-card{
  background:rgba(255,255,255,0.05);
  border:1px solid var(--accent-soft);
  border-radius:16px;
  padding:18px;
}

.trust-icon{
  width:40px;
  height:40px;
  border-radius:10px;
  background:linear-gradient(135deg,var(--accent),#ffffff22);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  margin-bottom:8px;
}

.trust-card h4{
  font-size:18px;
  font-weight:600;
}

.trust-card p{
  font-size:18px;
  color:#cbd5f5;
  line-height:1.6;
}

/* RIGHT SIDE */

.trust-sticky{
  position:relative;
}

.trust-box{
  background:linear-gradient(180deg,#0f172a,#020617);
  border:1px solid var(--accent-soft);
  border-radius:20px;
  padding:24px;
}

.trust-box h3{
  font-size:22px;
  font-weight:700;
}

.trust-box h3 span{
  background:linear-gradient(90deg,var(--accent),#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* POINTS */

.trust-points{
  display:flex;
  flex-direction:column;
  gap:8px;
  margin:14px 0;
}

.trust-point{
  display:flex;
  gap:6px;
  font-size:18px;
}

.trust-point span{
  color:var(--accent);
  font-weight:800;
}

/* COUNTERS */

.trust-counters{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.counter-box{
  background:rgba(255,255,255,0.05);
  border-radius:12px;
  padding:12px;
  border:1px solid var(--accent-soft);
  text-align:center;
  font-size:18px;
}

.counter-box strong{
  font-size:22px;
  display:block;
}

/* DESKTOP */

@media(min-width:992px){

  .trust-wrap{
    padding:70px 8%;
  }

  .trust-grid{
    flex-direction:row;
    gap:50px;
    align-items:flex-start;
  }

  .trust-timeline{
    flex:1.1;
  }

  .trust-sticky{
    flex:.9;
    position:sticky;
    top:110px;
  }

  .counter-box strong{
    font-size:26px;
  }

}

`;

    const id = "trust-section-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        clients: Math.min(step * 6, 100),
        projects: Math.min(step * 9, 150),
        years: Math.min(step, 2)
      });
      if (step >= 20) clearInterval(timer);
    }, 60);

    return () => clearInterval(timer);
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
        <h2><span>Our Journey</span></h2>
        <div className="trust-underline"></div>
      </div>

      <div className="trust-grid">

        {/* LEFT TIMELINE */}
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

        {/* RIGHT STICKY */}
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
              <div className="counter-box"><strong>{counters.clients}+</strong>Clients</div>
              <div className="counter-box"><strong>{counters.projects}+</strong>Projects</div>
              <div className="counter-box"><strong>{counters.years}+</strong>Years</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


function Demo() {

const sectionRef = useRef(null);

const [loading,setLoading] = useState(false);

const [formData,setFormData] = useState({
name:"",
phone:"",
email:"",
selection:"",
message:""
});

useEffect(()=>{

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

if(sectionRef.current){
observer.observe(sectionRef.current);
}

},[]);


const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();
setLoading(true);

emailjs.send(
"service_pznbx9s",
"template_8wwwast",
formData,
"yxT-hRvX41RhpOdfZ"
)
.then(()=>{
alert("Enquiry Sent Successfully!");
setFormData({
name:"",
phone:"",
email:"",
selection:"",
message:""
});
})
.catch(()=>{
alert("Failed to send enquiry");
})
.finally(()=>{
setLoading(false);
});
};

return(
<>
<section ref={sectionRef} className="demo-banner reveal">

<div className="mesh-bg"></div>

<div className="demo-inner">

<div className="banner-text">
<h2>
  Connect With Our Digital Marketing

<span> & Web Experts</span>
</h2>
<p>Courses • Services • Expert Support</p>
<p>Whether you want to learn Digital Marketing or grow your business online, our experts are here to guide you.</p>
</div>

<form className="banner-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone"
value={formData.phone}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>

<select
name="selection"
value={formData.selection}
onChange={handleChange}
required
>
<option value="">Select Service / Course</option>
                  <option value="Digital Strategy">Digital Strategy</option>
                  <option value="Digital Marketing Course">Digital Marketing Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Design">Content Design</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="Brand Consultancy">Brand Consultancy</option>
                  <option value="AI Marketing">AI Marketing</option>
</select>

<textarea
name="message"
placeholder="Message"
value={formData.message}
onChange={handleChange}
></textarea>

<button type="submit">
{loading ? "Sending..." : "Connect with us"}
</button>

</form>

</div>

</section>

<style>{`

/* ================= BANNER ================= */

.demo-banner{
position:relative;
padding:45px 6%;
overflow:hidden;
background:#ffffff;
}

/* ================= MESH GRADIENT BG ================= */

.mesh-bg{
position:absolute;
inset:0;
background:
radial-gradient(circle at 20% 30%, rgba(124,58,237,0.25), transparent 40%),
radial-gradient(circle at 80% 70%, rgba(236,72,153,0.25), transparent 40%),
radial-gradient(circle at 50% 50%, rgba(168,85,247,0.2), transparent 50%);
animation:meshMove 12s infinite alternate ease-in-out;
z-index:0;
}

@keyframes meshMove{
0%{
transform:scale(1) translate(0,0);
}
50%{
transform:scale(1.2) translate(30px,-20px);
}
100%{
transform:scale(1) translate(-20px,20px);
}
}

/* ================= LAYOUT ================= */

.demo-inner{
position:relative;
z-index:2;
display:flex;
align-items:center;
justify-content:space-between;
gap:30px;
flex-wrap:wrap;
}

/* ================= TEXT ================= */

.banner-text{
flex:1;
}

.banner-text h2{
font-size:24px;
font-weight:700;
color:#0f172a;
margin-bottom:5px;
}

.banner-text span{
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.banner-text p{
font-size:14px;
color:#475569;
}

/* ================= FORM ================= */

.banner-form{
flex:2;
display:flex;
gap:10px;
flex-wrap:wrap;
padding:14px;
border-radius:14px;
background:#ffffff;

background:
linear-gradient(#fff,#fff) padding-box,
linear-gradient(120deg,#7C3AED,#EC4899,#7C3AED) border-box;

border:2px solid transparent;

box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.banner-form input,
.banner-form select,
.banner-form textarea{
padding:9px 10px;
border-radius:8px;
border:1px solid #e2e8f0;
font-size:13px;
min-width:120px;
transition:all .3s;
}

.banner-form textarea{
min-width:180px;
}

.banner-form input:focus,
.banner-form select:focus,
.banner-form textarea:focus{
border-color:#7C3AED;
box-shadow:0 0 0 2px rgba(124,58,237,0.2);
outline:none;
}

/* ================= SHIMMER BUTTON ================= */

.banner-form button{
position:relative;
overflow:hidden;
padding:10px 20px;
border:none;
border-radius:8px;
background:linear-gradient(90deg,#7C3AED,#EC4899);
color:white;
font-weight:600;
cursor:pointer;
}

.banner-form button::before{
content:"";
position:absolute;
top:0;
left:-120%;
width:120%;
height:100%;
background:linear-gradient(
120deg,
transparent,
rgba(255,255,255,0.6),
transparent
);
transition:all .6s;
}

.banner-form button:hover::before{
left:120%;
}

/* ================= SCROLL REVEAL ================= */

.reveal{
opacity:0;
transform:translateY(60px);
transition:all 0.9s ease;
}

.reveal.show{
opacity:1;
transform:translateY(0);
}

/* ================= MOBILE ================= */

@media(max-width:900px){

.demo-inner{
flex-direction:column;
text-align:center;
}

.banner-form{
width:100%;
max-width:420px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

.banner-form textarea{
grid-column:1 / span 2;
}

.banner-form button{
grid-column:1 / span 2;
padding:12px;
}

}

`}</style>

</>
);
}

function IdeasSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const css = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= IDEAS SECTION ================= */

.ideas-section{
  padding-top:0px;
  font-family:'Poppins',sans-serif;
  overflow:hidden;
}

.ideas-container{
  max-width:1200px;
  margin:0 auto;
}

/* ===== HEADING ===== */

.ideas-heading{
  text-align:center;
  margin-bottom:26px;
  opacity:0;
  transform:translateY(24px);
  transition:all .7s ease;
}

.ideas-heading.show{
  opacity:1;
  transform:none;
}

.ideas-heading h2{
  font-size:56px;
  font-weight:800;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  line-height:1.2;
}

/* ===== GRID ===== */

.ideas-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
}

/* ===== CARD ===== */

.idea-card{
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  border-radius:18px;
  padding:24px;

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
  font-size:18px;
  font-weight:600;
  margin-bottom:8px;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* CARD TEXT */

.idea-card p{
  font-size:18px;
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

  .ideas-grid{
    grid-template-columns:1fr;
    gap:20px;
  }

  .ideas-heading h2{
    font-size:36px;
  }

  .idea-card p{
    font-size:16px;
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= WHY CHOOSE SECTION ================= */

.why-section{
  padding-top:30px;
  padding-bottom:40px;
  font-family:'Poppins',sans-serif;
  overflow:hidden;
}

.why-container{
  max-width:1300px;
  margin:auto;
  display:flex;
  flex-direction:column;
}

/* ===== TITLE ===== */

.why-title{
  text-align:center;
  margin-bottom:26px;
  opacity:0;
  transform:translateY(24px);
  transition:.6s ease;
}

.why-title.show{
  opacity:1;
  transform:none;
}

.why-title h2{
  font-size:56px;
  font-weight:800;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ===== GRID ===== */

.why-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
}

/* ===== CARD ===== */

.why-card{
  position:relative;
  background:#ffffff;
  border-radius:22px;
  padding:30px;
  text-align:center;
  box-shadow:0 18px 50px rgba(0,0,0,0.28);
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
  width:70px;
  height:70px;
  margin-bottom:14px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffe4e6;
  font-size:30px;
}

/* TITLE */

.why-card h3{
  font-size:18px;
  font-weight:600;
  margin-bottom:8px;
  color:#EC4899;
}

/* TEXT */

.why-card .para{
  font-size:18px;
  line-height:1.7;
  color:#000000;
  margin:0;
}

/* Gradient border */

.why-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:24px;
  padding:1.5px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
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
    padding:40px 20px;
  }

  .why-title{
    margin-bottom:24px;
  }

  .why-grid{
    grid-template-columns:1fr;
    gap:20px;
  }

  .why-card{
    padding:24px 18px;
    opacity:1 !important;
    transform:none !important;
  }

  .why-icon{
    width:60px;
    height:60px;
    font-size:26px;
  }

  .why-card h3{
    font-size:17px;
  }

  .why-card .para{
    font-size:16px;
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= TEAM SECTION ================= */

.team-section{
  padding-top:20px;
  padding-bottom:40px;
  font-family:'Poppins',sans-serif;
  overflow:hidden;
}

.team-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */

.team-title{
  text-align:center;
  margin-bottom:40px;
  opacity:0;
  transform:translateY(30px);
  transition:all .8s ease;
}

.team-section.show .team-title{
  opacity:1;
  transform:none;
}

.team-title h2{
  font-size:56px;
  font-weight:800;
  margin-bottom:10px;
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
  gap:28px;
}

/* ===== CARD ===== */

.team-card{
  width:380px;
  background:#ffffff !important;
  border-radius:22px;
  overflow:hidden;
  box-shadow:0 20px 55px rgba(0,0,0,0.5);

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
  transform:translateY(-6px);
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
  padding:18px 20px 22px;
  text-align:center;
}

.team-role{
  font-size:14px;
  letter-spacing:1px;
  color:#64748b !important;
  margin-bottom:4px;
}

.team-name{
  font-size:18px;
  font-weight:600;
  color:#020617 !important;
}

/* ================= TABLET ================= */

@media (max-width:1024px){

  .team-card{
    width:320px;
  }

}

/* ================= MOBILE ================= */

@media (max-width:768px){

  .team-grid{
    display:flex !important;
    flex-direction:column !important;
    gap:18px !important;
    align-items:center !important;
  }

  .team-card{
    width:90% !important;
    max-width:340px !important;
    margin:0 auto !important;
    height:auto !important;
    background:#ffffff !important;
    border-radius:20px !important;
    padding:22px 16px 20px !important;
    box-shadow:0 12px 30px rgba(0,0,0,0.18) !important;
    transform:none !important;
    opacity:1 !important;
  }

  .team-card:hover,
  .team-card.from-left,
  .team-card.from-right{
    transform:none !important;
  }

  .team-image{
    height:auto !important;
    display:flex !important;
    justify-content:center !important;
    margin-bottom:12px !important;
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

  .team-info{
    padding:0 !important;
    text-align:center !important;
  }

  .team-name{
    font-size:17px !important;
    font-weight:600 !important;
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
          <h2>Meet the People Behind the Work</h2>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= MEET THE TEAM ================= */

.mission-section{
  padding-top:20px;
  padding-bottom:40px;
  font-family:'Poppins',sans-serif;
  overflow:hidden;
}

.mission-container{
  max-width:1300px;
  margin:auto;
}

/* ===== TITLE ===== */

.mission-heading{
  text-align:center;
  margin-bottom:40px;
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
  font-size:48px;
  font-weight:700;
  color:#ffffff;
}

.mission-heading .gradient{
  display:block;
  font-size:56px;
  font-weight:800;
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.mission-heading::after{
  content:"";
  width:90px;
  height:3px;
  background:#ffffff;
  display:block;
  margin:16px auto 0;
  opacity:.7;
}

/* ===== GRID ===== */

.mission-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:48px;
  align-items:center;
}

/* ===== TEXT ===== */

.mission-text p{
  font-size:18px;
  line-height:1.7;
  color:#f1f1f1;
  margin-bottom:14px;
  max-width:640px;

  opacity:0;
  transform:translateY(18px);
  transition:.6s ease;
}

.mission-points{
  margin-top:14px;
  padding-left:18px;
}

.mission-points li{
  font-size:18px;
  margin-bottom:10px;
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
  border-radius:28px;
  box-shadow:
    0 24px 70px rgba(139,92,246,.35),
    0 12px 30px rgba(236,72,153,.25);
}

/* ===== MOBILE ===== */

@media(max-width:900px){

  .mission-section{
    padding:40px 20px;
  }

  .mission-grid{
    grid-template-columns:1fr;
    gap:28px;
  }

  .mission-text p,
  .mission-points li{
    font-size:16px;
    line-height:1.6;
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

  .mission-heading .white{
    font-size:34px;
  }

  .mission-heading .gradient{
    font-size:40px;
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= ABOUT MISSION ================= */

.aboutmission-section{
  font-family:'Poppins',sans-serif;
  color:#e5e7eb;
  overflow:hidden;
  padding-top:0px;
  padding-bottom:20px;
}

.aboutmission-header{
  text-align:center;
  max-width:900px;
  margin:0 auto 32px;
}

/* ===== TITLE ===== */

.aboutmission-title{
  font-size:56px;
  font-weight:800;
  line-height:1.2;
  margin-bottom:12px;

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
  width:80px;
  height:3px;
  background:#8b5cf6;
  margin:16px auto 0;
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
  gap:48px;
  align-items:center;
}

/* ===== TEXT ===== */

.aboutmission-text p{
  font-size:18px;
  line-height:1.7;
  margin-bottom:14px;
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
  inset:-36px;
  background:radial-gradient(
    circle,
    rgba(168,85,247,.45),
    rgba(236,72,153,.25),
    transparent 70%
  );
  filter:blur(38px);
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
    padding:40px 20px;
  }

  .aboutmission-container{
    grid-template-columns:1fr;
    gap:28px;
  }

  .aboutmission-text{
    text-align:center;
  }

  .aboutmission-text p{
    font-size:16px;
    line-height:1.6;
    opacity:1 !important;
    transform:none !important;
  }

  .aboutmission-title{
    font-size:36px;
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
    filter:blur(26px);
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
         <Helmet>
      <title>Professional Website Development Services | Shainfotech</title>
      <meta
        name="description"
        content="Boost your online presence with our top-rated website development services. Our expert team offers custom design and development solutions to help your business thrive."
      />
      <link rel="canonical" href="https://shainfotechnology.in/about" />
    </Helmet>

<AboutWaveSection />
{/* <AnimatedWaveBackground /> */}
    {/* <HomeHerohead /> */}
    <Vission />
   
    {/* <OurVission /> */}
    
  <AboutMission />
  
    <div className="about-wrap">
      {/* <AboutMeet /> */}
      <TrustTimelineSticky />
       <StatsHighlight />
<MeetTheTeam />
<TeamSection />

<IdeasSection />
<WhyChooseSection />
     <Testimonials />
     <Demo />


    </div>

    </>
  );
}
