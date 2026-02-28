

import { useState, useEffect } from "react";



 function CurriculumSection() {

  const [active, setActive] = useState(0);

  useEffect(() => {
    const css = `

/* ================= SECTION ================= */

.curriculum-section{
  padding: 8%;
//   background:#F4F6FB;
padding-bottom: 0px;
}

.curriculum-title{
  font-size:42px;
  font-weight:800;
  margin-bottom:10px;
  line-height:1.2;
}

.white-text{
  color:#0F172A;
}

/* 👉 UPDATED GRADIENT LIKE IMAGE */

.gradient-text{
  background:linear-gradient(90deg,#7C3AED 0%, #A855F7 50%, #EC4899 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}

/* ================= ACCORDION CARD ================= */

.accordion-card{
  background:#ffffff;
  border-radius:20px;
  margin-bottom:25px;
  overflow:hidden;
  transition:0.3s ease;
  border-left:5px solid transparent;
  box-shadow:0 10px 30px rgba(0,0,0,0.06);
}

.accordion-card.active{
  border-left:5px solid #A855F7;
  box-shadow:0 15px 40px rgba(168,85,247,0.25);
}

/* ================= HEADER ================= */

.accordion-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:26px 30px;
  cursor:pointer;
}

.accordion-left{
  display:flex;
  align-items:center;
  gap:16px;
}

.accordion-number{
  font-weight:700;
  font-size:14px;
  color:#7C3AED;
}

/* 👉 CARD HEADING GRADIENT */

.accordion-header h3{
  font-size:20px;
  font-weight:700;
  background:linear-gradient(90deg,#7C3AED,#A855F7,#EC4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ================= ICON ================= */

.accordion-icon{
  width:38px;
  height:38px;
  border-radius:50%;
  background:#F3E8FF;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  font-weight:700;
  color:#7C3AED;
  transition:0.3s ease;
}

.accordion-card.active .accordion-icon{
  background:linear-gradient(90deg,#7C3AED,#EC4899);
  color:#ffffff;
}

/* ================= CONTENT ================= */

.accordion-content{
  padding:0 50px 25px 75px;
  max-height:0;
  overflow:hidden;
  transition:max-height 0.4s ease;
}

.accordion-card.active .accordion-content{
  max-height:350px;
}

/* 👉 DARK BLUE BULLETS */

.accordion-content li{
  margin-bottom:12px;
  color:#1E293B;
  font-size:16px;
  line-height:1.6;
}

/* ================= RESPONSIVE ================= */

@media(max-width:1024px){

  .curriculum-section{
    padding:80px 6%;
  }

  .curriculum-title{
    font-size:32px;
  }

}

@media(max-width:768px){

  .accordion-header{
    padding:20px;
  }

  .accordion-content{
    padding:0 25px 20px 50px;
  }

}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const modules = [
    {
      title: "Introduction to Digital Marketing",
      topics: [
        "Digital Marketing Fundamentals",
        "Understanding Marketing Funnels",
        "Customer Journey & Online Behavior",
        "Overview of SEO, SMM & PPC"
      ]
    },
    {
      title: "Search Engine Optimization (SEO)",
      topics: [
        "Keyword Research & Competitor Analysis",
        "On-Page Optimization Techniques",
        "Technical SEO Basics",
        "Link Building Strategies"
      ]
    },
    {
      title: "Social Media Marketing (SMM)",
      topics: [
        "Facebook & Instagram Marketing",
        "LinkedIn Growth Strategy",
        "Content Creation & Branding",
        "Social Media Ad Campaign Setup"
      ]
    },
    {
      title: "Google Ads & Performance Marketing",
      topics: [
        "Google Search & Display Ads",
        "YouTube Advertising",
        "Conversion Tracking Setup",
        "Campaign Optimization Strategies"
      ]
    },
    {
      title: "Analytics & Conversion Optimization",
      topics: [
        "Google Analytics Setup",
        "Understanding Traffic Reports",
        "Landing Page Optimization",
        "ROI & Performance Measurement"
      ]
    }
  ];

  return (
    <section className="curriculum-section">

      <h2 className="curriculum-title">
        <span className="white-text">What Will You </span>
        <span className="gradient-text">Learn?</span>
      </h2>

      {modules.map((item, index) => (
        <div
          key={index}
          className={`accordion-card ${active === index ? "active" : ""}`}
        >
          <div
            className="accordion-header"
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className="accordion-left">
              <span className="accordion-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
            </div>

            <div className="accordion-icon">
              {active === index ? "−" : "+"}
            </div>
          </div>

          <div className="accordion-content">
            <ul>
              {item.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </section>
  );
}


function WhyRegisterSection() {

  useEffect(() => {
    const css = `

/* ================= WHY SECTION ================= */

.sf-why-section{
  padding: 5%;
  padding-top:0px;
  text-align:center;
}

.sf-why-title{
  font-size:48px;
  font-weight:900;
  margin-bottom:20px;
  color:#E5E7EB;
}

/* GRID */

.sf-why-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:40px;
}

/* CARD */

.sf-why-card{
  background:#0B1328;
  padding:45px 30px;
  border-radius:24px;
  border:2px solid transparent;
  position:relative;
  transition:0.4s ease;
  color:#E5E7EB;
}

/* Gradient Border Effect */

.sf-why-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:24px;
  padding:2px;
  background:linear-gradient(135deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;
          mask-composite:exclude;
}

/* Hover Effect */

.sf-why-card:hover{
  transform:translateY(-12px);
  box-shadow:0 0 40px rgba(138,92,255,0.25);
}

/* CARD TITLE */

.sf-why-card h3{
  font-size:20px;
  font-weight:700;
  margin-bottom:18px;
}

/* CARD TEXT */

.sf-why-card p{
  font-size:15px;
  line-height:1.7;
  color:#9FB3C8;
}

/* RESPONSIVE */

@media(max-width:1024px){
  .sf-why-title{
    font-size:36px;
  }
}

@media(max-width:768px){
  .sf-why-section{
    padding:80px 6%;
  }

  .sf-why-title{
    font-size:28px;
  }

  .sf-why-card{
    padding:35px 25px;
  }
}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const data = [
    {
      title: "Expert Digital Marketing Trainers",
      desc: "Learn from certified industry professionals with real agency and corporate experience."
    },
    {
      title: "Hands-On Live Projects",
      desc: "Work on real SEO, Google Ads, and Social Media campaigns with practical implementation."
    },
    {
      title: "Complete SEO & Performance Marketing",
      desc: "Master SEO, Google Ads, Meta Ads, and conversion optimization strategies."
    },
    {
      title: "Social Media & Branding Mastery",
      desc: "Learn content creation, Instagram growth, LinkedIn marketing, and brand positioning."
    },
    {
      title: "Google Analytics & Tracking Setup",
      desc: "Understand data, traffic reports, conversion tracking, and ROI measurement."
    },
    {
      title: "Flexible Online Learning",
      desc: "Attend live online sessions from anywhere with lifetime access to recordings."
    },
    {
      title: "Placement & Career Support",
      desc: "Resume building, interview preparation, and job placement assistance included."
    },
    {
      title: "Affordable & Career-Focused Pricing",
      desc: "Flexible course fees designed to deliver maximum career growth and ROI."
    }
  ];

  return (
    <section className="sf-why-section">
      <h2 className="sf-why-title">Why Register?</h2>

      <div className="sf-why-grid">
        {data.map((item, index) => (
          <div key={index} className="sf-why-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}




function UrgencySection() {

  const targetDate = new Date("March 15, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [seatsLeft, setSeatsLeft] = useState(15); // Starting seats

  useEffect(() => {

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });

    }, 1000);

    // Demo Live Seat Reduction Every 30 sec
    const seatTimer = setInterval(() => {
      setSeatsLeft(prev => (prev > 3 ? prev - 1 : prev));
    }, 30000);

    /* ================= CSS ================= */

    const css = `

.sf-urgency-section{
  padding:10px 8%;
  background:#030B1C;
  text-align:center;
  position:relative;
}

.sf-urgency-title{
  font-size:42px;
  font-weight:900;
  margin-bottom:20px;
  color:#E5E7EB;
}

.sf-highlight{
  background:linear-gradient(90deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sf-sub{
  color:#9FB3C8;
  margin-bottom:50px;
  font-size:18px;
}

/* COUNTDOWN */

.sf-countdown{
  display:flex;
  justify-content:center;
  gap:25px;
  flex-wrap:wrap;
  margin-bottom:40px;
}

.sf-time-box{
  background:#0B1328;
  padding:25px;
  border-radius:20px;
  min-width:100px;
  position:relative;
  color:#E5E7EB;
}

.sf-time-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:20px;
  padding:2px;
  background:linear-gradient(135deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite:xor;
          mask-composite:exclude;
}

.sf-time-number{
  font-size:26px;
  font-weight:800;
}

.sf-time-label{
  font-size:13px;
  color:#9FB3C8;
}

/* SEAT COUNTER */

.sf-seat-box{
  margin-top:30px;
  font-size:20px;
  color:#E5E7EB;
}

.sf-seat-number{
  font-size:28px;
  font-weight:900;
  color:#FF4D6D;
}

/* BADGE */

.sf-badge{
  margin-top:20px;
  display:inline-block;
  padding:12px 30px;
  border-radius:40px;
  background:linear-gradient(90deg,#8A5CFF,#F472B6);
  font-weight:700;
  color:#fff;
}

/* WHATSAPP BUTTON */

.sf-enroll-btn{
  margin-top:40px;
  padding:18px 45px;
  border:none;
  border-radius:50px;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  color:#fff;
  background:linear-gradient(90deg,#25D366,#128C7E);
  transition:0.3s ease;
}

.sf-enroll-btn:hover{
  transform:translateY(-5px);
  box-shadow:0 0 25px rgba(37,211,102,0.5);
}

@media(max-width:768px){
  .sf-urgency-title{
    font-size:28px;
  }
}

`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => {
      clearInterval(timer);
      clearInterval(seatTimer);
    };

  }, []);

  /* ================= WHATSAPP FUNCTION ================= */

  const handleEnroll = () => {

    const adminNumber = "919361046387"; // Change to your number

    const message = `
Hi, I want to enroll in the Digital Marketing Course.

Seats Left: ${seatsLeft}
Batch Date: March 15, 2026

Please share details.
`;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="sf-urgency-section">

      <h2 className="sf-urgency-title">
        Limited Seats for the{" "}
        <span className="sf-highlight">Next Digital Marketing Batch</span>
      </h2>

      <p className="sf-sub">
        Secure your seat before early bird discount ends.
      </p>

      <div className="sf-countdown">
        <div className="sf-time-box">
          <div className="sf-time-number">{timeLeft.days || 0}</div>
          <div className="sf-time-label">Days</div>
        </div>
        <div className="sf-time-box">
          <div className="sf-time-number">{timeLeft.hours || 0}</div>
          <div className="sf-time-label">Hours</div>
        </div>
        <div className="sf-time-box">
          <div className="sf-time-number">{timeLeft.minutes || 0}</div>
          <div className="sf-time-label">Minutes</div>
        </div>
        <div className="sf-time-box">
          <div className="sf-time-number">{timeLeft.seconds || 0}</div>
          <div className="sf-time-label">Seconds</div>
        </div>
      </div>

      <div className="sf-seat-box">
        🔥 Only <span className="sf-seat-number">{seatsLeft}</span> Seats Remaining
      </div>

      <div className="sf-badge">
        🎉 Early Bird Offer: 20% OFF
      </div>

      <button className="sf-enroll-btn" onClick={handleEnroll}>
        Enroll Now on WhatsApp
      </button>

    </section>
  );
}




function CareerOutcomeSection() {

  useEffect(() => {
    const css = `

/* ================= PREMIUM TIMELINE CAREER ================= */

.sf-career-section{
  padding:10px 8%;
  background:#020817;
  position:relative;
  overflow:hidden;
}

/* Heading */

.sf-career-title{
  text-align:center;
  font-size:50px;
  font-weight:900;
  margin-bottom:100px;
  color:#E5E7EB;
}

.sf-career-gradient{
  background:linear-gradient(90deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* Timeline Center Line */

.sf-timeline{
  position:relative;
  max-width:1000px;
  margin:auto;
}

.sf-timeline::before{
  content:"";
  position:absolute;
  left:50%;
  top:0;
  width:3px;
  height:100%;
  background:linear-gradient(#8A5CFF,#D946EF,#F472B6);
  transform:translateX(-50%);
}

/* Timeline Item */

.sf-timeline-item{
  position:relative;
  width:50%;
  padding:40px 50px;
}

.sf-timeline-item h3{
  font-size:22px;
  color:#E5E7EB;
  margin-bottom:10px;
}

.sf-timeline-item p{
  color:#9FB3C8;
  line-height:1.7;
}

/* Left Side */

.sf-timeline-item.left{
  left:0;
  text-align:right;
}

/* Right Side */

.sf-timeline-item.right{
  left:50%;
}

/* Dot */

.sf-timeline-item::before{
  content:"";
  position:absolute;
  top:50px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:linear-gradient(135deg,#8A5CFF,#F472B6);
  box-shadow:0 0 20px rgba(138,92,255,0.6);
}

.sf-timeline-item.left::before{
  right:-9px;
}

.sf-timeline-item.right::before{
  left:-9px;
}

/* Hover Glow */

.sf-timeline-item:hover h3{
  color:#F472B6;
}

/* Salary Highlight */

.sf-career-salary{
  margin-top:120px;
  text-align:center;
  font-size:28px;
  font-weight:800;
  color:#E5E7EB;
}

.sf-career-salary span{
  background:linear-gradient(90deg,#8A5CFF,#F472B6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-size:34px;
}

/* Responsive */

@media(max-width:900px){

  .sf-timeline::before{
    left:20px;
  }

  .sf-timeline-item{
    width:100%;
    padding-left:70px;
    padding-right:20px;
    text-align:left;
  }

  .sf-timeline-item.left,
  .sf-timeline-item.right{
    left:0;
  }

  .sf-timeline-item::before{
    left:11px;
  }

  .sf-career-title{
    font-size:30px;
  }

}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  const roles = [
    {
      title: "Digital Marketing Executive",
      desc: "Manage SEO, ads, and social campaigns for brands."
    },
    {
      title: "SEO Specialist",
      desc: "Optimize websites to rank on Google and drive organic growth."
    },
    {
      title: "Performance Marketer",
      desc: "Run high-ROI Google & Meta Ads campaigns."
    },
    {
      title: "Social Media Strategist",
      desc: "Build brand presence across Instagram & LinkedIn."
    },
    {
      title: "Freelance Digital Marketer",
      desc: "Work remotely and earn with global clients."
    },
    {
      title: "Marketing Manager",
      desc: "Lead digital teams and strategy at corporate level."
    }
  ];

  return (
    <section className="sf-career-section">

      <h2 className="sf-career-title">
        Build a High-Growth{" "}
        <span className="sf-career-gradient">
          Digital Marketing Career
        </span>
      </h2>

      <div className="sf-timeline">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`sf-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h3>{role.title}</h3>
            <p>{role.desc}</p>
          </div>
        ))}
      </div>

      <div className="sf-career-salary">
        💰 Average Salary Potential:{" "}
        <span>₹3 LPA – ₹15+ LPA</span>
      </div>

    </section>
  );
}






export default function Courses() {

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminNumber = "919361046387";

    const message = `
New Brochure Request 🚀

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: Digital Marketing
`;

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    setShowForm(false);
  };

  useEffect(() => {
    const css = `

/* ================= HERO ================= */

.sf-hero{
  padding:10px 8%;
//   background:#030B1C;
  position:relative;
//   min-height:10vh;
  overflow:hidden;
}

.sf-hero-container{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:60px;
}

/* ================= LEFT ================= */

.sf-hero-left{
  flex:1;
  z-index:2;
}

.hero-heading{
  font-size:64px;
  font-weight:900;
  line-height:1.1;
}

.white-text{
  color:#E5E7EB;
}

.gradient-text{
  background:linear-gradient(90deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sf-hero-left p{
  margin:30px 0;
  font-size:18px;
  line-height:1.7;
  color:#9FB3C8;
  max-width:600px;
}

.sf-hero-btn{
  background:linear-gradient(90deg,#8A5CFF,#F472B6);
  color:#fff;
  padding:16px 36px;
  border:none;
  border-radius:12px;
  font-weight:700;
  cursor:pointer;
  transition:0.3s;
}

.sf-hero-btn:hover{
  transform:translateY(-4px);
  box-shadow:0 0 25px rgba(217,70,239,0.5);
}

/* ================= RIGHT SIDE WITH PURPLE GLOW ================= */

.sf-hero-right{
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
}

/* Purple Radial Glow Background */

.sf-hero-right::before{
  content:"";
  position:absolute;
  width:500px;
  height:500px;
  background:radial-gradient(circle, rgba(138,92,255,0.6) 0%, rgba(217,70,239,0.4) 40%, transparent 70%);
  border-radius:50%;
  filter:blur(40px);
  z-index:1;
}

/* Image Wrapper */

.sf-image-wrapper{
  position:relative;
  z-index:2;
}

.sf-image-wrapper img{
  width:420px;
  max-width:100%;
  height:auto;
}

/* ================= FORM ================= */

.sf-form-section{
  background:#030B1C;
  padding:120px 8%;
  color:#fff;
}

.sf-form-container{
  max-width:500px;
  margin:auto;
  background:#0B1328;
  padding:40px;
  border-radius:20px;
  box-shadow:0 0 40px rgba(138,92,255,0.15);
}

.sf-form-container input{
  width:100%;
  padding:14px;
  margin-bottom:18px;
  border-radius:8px;
  border:1px solid #1F2937;
  background:#111827;
  color:#fff;
}

.sf-form-container button{
  width:100%;
  padding:14px;
  background:linear-gradient(90deg,#8A5CFF,#F472B6);
  border:none;
  border-radius:10px;
  font-weight:700;
  color:#fff;
  cursor:pointer;
}

/* ================= SUCCESS ================= */

.sf-success{
  padding:120px 8%;
  background:#030B1C;
  color:#E5E7EB;
}

.sf-success-box{
  max-width:800px;
  margin:auto;
  background:#0B1328;
  padding:50px;
  border-radius:20px;
  box-shadow:0 0 50px rgba(138,92,255,0.2);
}

/* ================= RESPONSIVE ================= */

@media(max-width:1024px){
  .sf-hero-container{
    flex-direction:column;
    text-align:center;
  }

  .hero-heading{
    font-size:40px;
  }

  .sf-hero-right::before{
    width:350px;
    height:350px;
  }

  .sf-image-wrapper img{
    width:300px;
  }
}

`;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  if (submitted) {
    return (
      <section className="sf-success">
        <div className="sf-success-box">
          <h2>You did it {formData.name}! 😊</h2>
          <p>Thank you for registering for our Digital Marketing Course.</p>
          <p>Our team will contact you shortly with further details.</p>
        </div>
      </section>
    );
  }

  if (showForm) {
    return (
      <section className="sf-form-section">
        <div className="sf-form-container">
          <h2>Get Course Brochure</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required
              onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
            <input type="email" placeholder="Your Email" required
              onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
            <input type="tel" placeholder="Your Phone" required
              onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
            <button type="submit">Download Brochure</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="sf-hero">
        <div className="sf-hero-container">

          {/* LEFT SIDE */}
          <div className="sf-hero-left">
            <h1 className="hero-heading">
              <span className="white-text">Master the Future of</span><br/>
              <span className="gradient-text">Digital Marketing</span><br/>
              <span className="gradient-text">with Practical Training</span>
            </h1>

            <p>
              Join our industry-recognized Digital Marketing Course designed to help you 
              master SEO, Social Media Marketing, Google Ads, and real-world campaign strategies. 
              Learn practical skills, work on live projects, and build a career-ready portfolio.
            </p>

            <button className="sf-hero-btn" onClick={()=>setShowForm(true)}>
              ↓ Download Course Brochure
            </button>
          </div>

          {/* RIGHT SIDE WITH PURPLE GLOW IMAGE */}
          <div className="sf-hero-right">
            <div className="sf-image-wrapper">
              <img src="/images/dmcourse1.png" alt="Digital Marketing Illustration"/>
            </div>
          </div>

        </div>
      </section>

      <CurriculumSection />
      <WhyRegisterSection />

      <UrgencySection />
      <CareerOutcomeSection />
    </>
  );
}