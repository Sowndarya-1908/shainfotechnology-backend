

import { useState, useEffect,useRef } from "react";
import emailjs from "@emailjs/browser";



function CurriculumSection() {

  const [active, setActive] = useState(null);

  useEffect(() => {

    const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================= SECTION ================= */

.curriculum-section{
padding-top:20px;
padding-bottom:30px;
font-family:'Poppins',sans-serif;
}

/* ================= TITLE ================= */

.curriculum-title{
font-size:56px;
font-weight:800;
margin-bottom:32px;
text-align:center;
line-height:1.2;
}

.white-text{
color:#E5E7EB;
}

.gradient-text{
background:linear-gradient(90deg,#7C3AED,#A855F7,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* ================= GRID ================= */

.curriculum-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px 36px;
max-width:900px;
margin:auto;
}

/* ================= CARD ================= */

.accordion-card{
position:relative;
border-radius:36px;
overflow:hidden;
}

/* glow border */

.accordion-card::before{
content:"";
position:absolute;
inset:-2px;
border-radius:36px;
background:linear-gradient(90deg,#7C3AED,#A855F7,#EC4899);
z-index:-1;
filter:blur(10px);
opacity:0.6;
}

/* ================= HEADER ================= */

.accordion-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:16px 24px;
cursor:pointer;
background:#D3D3D3;
border-radius:36px;
transition:0.25s ease;
}

.accordion-header:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(0,0,0,0.08);
}

.accordion-header h3{
font-size:18px;
font-weight:600;
background:linear-gradient(90deg,#7C3AED,#A855F7,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* ================= ICON ================= */

.accordion-icon{
font-size:20px;
font-weight:700;
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
transition:0.3s ease;
}

.accordion-card.active .accordion-icon{
transform:rotate(180deg);
}

/* ================= CONTENT ================= */

.accordion-content{
background:#ffffff;
padding:0 20px;
max-height:0;
overflow:hidden;
transition:max-height 0.4s ease,padding 0.3s ease;
border-radius:0 0 20px 20px;
}

.accordion-card.active .accordion-content{
padding:18px 20px;
max-height:380px;
}

.accordion-content li{
margin-bottom:8px;
font-size:16px;
color:#1E293B;
line-height:1.6;
}

/* ================= MOBILE ================= */

@media(max-width:768px){

.curriculum-grid{
grid-template-columns:1fr;
gap:16px;
}

.curriculum-title{
font-size:36px;
}

.accordion-header h3{
font-size:16px;
}

.accordion-content li{
font-size:15px;
}

}
`;

    const id = "curriculum-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

  }, []);

  const modules = [
    {
      title:"Introduction to Digital Marketing",
      topics:[
        "Digital Marketing Fundamentals",
        "Marketing Funnels",
        "Customer Journey",
        "SEO, SMM & PPC Overview"
      ]
    },
    {
      title:"Search Engine Optimization",
      topics:[
        "Keyword Research",
        "On-page Optimization",
        "Technical SEO",
        "Link Building"
      ]
    },
    {
      title:"Social Media Marketing",
      topics:[
        "Facebook Marketing",
        "Instagram Growth",
        "Content Strategy",
        "Ad Campaign Setup"
      ]
    },
    {
      title:"Google Ads",
      topics:[
        "Search Ads",
        "Display Ads",
        "YouTube Ads",
        "Conversion Tracking"
      ]
    },
    {
      title:"Analytics",
      topics:[
        "Google Analytics",
        "Traffic Analysis",
        "Conversion Optimization",
        "ROI Measurement"
      ]
    },
    {
      title:"Advanced Digital Marketing",
      topics:[
        "Automation Tools",
        "AI Marketing",
        "Growth Strategies",
        "Marketing Funnels"
      ]
    }
  ];

  return (

<section className="curriculum-section">

<h2 className="curriculum-title">
<span className="white-text">What Will You </span>
<span className="gradient-text">Learn?</span>
</h2>

<div className="curriculum-grid">

{modules.map((item,index)=>(
<div
key={index}
className={`accordion-card ${active===index ? "active" : ""}`}
>

<div
className="accordion-header"
onClick={()=>setActive(active===index ? null : index)}
>

<h3>{item.title}</h3>

<div className="accordion-icon">
{active===index ? "-" : "+"}
</div>

</div>

<div className="accordion-content">
<ul>
{item.topics.map((topic,i)=>(
<li key={i}>{topic}</li>
))}
</ul>
</div>

</div>
))}

</div>

</section>

  );

}



function WhyRegisterSection() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* ================= WHY SECTION ================= */

.sf-why-section{
  padding:40px 5%;
  padding-top:10px;
  text-align:center;
  font-family:'Inter',system-ui;
}

/* TITLE */

.sf-why-title{
  font-size:clamp(32px,4vw,44px);
  font-weight:800;
  margin-bottom:28px;
  color:#E5E7EB;
  letter-spacing:-0.3px;
}

/* GRID */

.sf-why-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:26px;
  max-width:1200px;
  margin:auto;
}

/* CARD */

.sf-why-card{
  background:#0B1328;
  padding:34px 26px;
  border-radius:22px;
  border:2px solid transparent;
  position:relative;
  transition:0.35s ease;
  color:#E5E7EB;
}

/* Gradient Border */

.sf-why-card::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:22px;
  padding:2px;
  background:linear-gradient(135deg,#8A5CFF,#D946EF,#F472B6);

  -webkit-mask:
  linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);

  -webkit-mask-composite:xor;
  mask-composite:exclude;
}

/* Hover */

.sf-why-card:hover{
  transform:translateY(-8px);
  box-shadow:0 0 30px rgba(138,92,255,0.25);
}

/* CARD TITLE */

.sf-why-card h3{
  font-size:18px;
  font-weight:700;
  margin-bottom:12px;
  line-height:1.4;
}

/* CARD TEXT */

.sf-why-card p{
  font-size:15px;
  line-height:1.65;
  color:#9FB3C8;
  margin:0;
}

/* RESPONSIVE */

@media(max-width:1024px){

  .sf-why-title{
    font-size:34px;
  }

}

@media(max-width:768px){

  .sf-why-section{
    padding:50px 20px;
  }

  .sf-why-title{
    font-size:28px;
  }

  .sf-why-grid{
    gap:20px;
  }

  .sf-why-card{
    padding:28px 22px;
  }

  .sf-why-card h3{
    font-size:17px;
  }

  .sf-why-card p{
    font-size:14px;
  }

}

`;

    const id = "sf-why-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

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

      <h2 className="sf-why-title">
        Why Register?
      </h2>

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
  const [seatsLeft, setSeatsLeft] = useState(15);

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

    const seatTimer = setInterval(() => {
      setSeatsLeft(prev => (prev > 3 ? prev - 1 : prev));
    }, 30000);


    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= SECTION ================= */

.sf-urgency-section{
  padding:50px 6%;
  background:#030B1C;
  text-align:center;
  font-family:'Inter',system-ui;
}

/* TITLE */

.sf-urgency-title{
  font-size:clamp(28px,4vw,38px);
  font-weight:800;
  margin-bottom:12px;
  color:#E5E7EB;
  line-height:1.25;
}

.sf-highlight{
  background:linear-gradient(90deg,#8A5CFF,#D946EF,#F472B6);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* SUB TEXT */

.sf-sub{
  color:#9FB3C8;
  margin-bottom:30px;
  font-size:16px;
  line-height:1.6;
}

/* COUNTDOWN */

.sf-countdown{
  display:flex;
  justify-content:center;
  gap:18px;
  flex-wrap:wrap;
  margin-bottom:28px;
}

.sf-time-box{
  background:#0B1328;
  padding:18px 16px;
  border-radius:16px;
  min-width:90px;
  position:relative;
  color:#E5E7EB;
}

.sf-time-box::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:16px;
  padding:2px;
  background:linear-gradient(135deg,#8A5CFF,#D946EF,#F472B6);

  -webkit-mask:
  linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);

  -webkit-mask-composite:xor;
  mask-composite:exclude;
}

.sf-time-number{
  font-size:22px;
  font-weight:800;
}

.sf-time-label{
  font-size:12px;
  color:#9FB3C8;
  margin-top:3px;
}

/* SEAT COUNTER */

.sf-seat-box{
  margin-top:18px;
  font-size:17px;
  color:#E5E7EB;
}

.sf-seat-number{
  font-size:24px;
  font-weight:900;
  color:#FF4D6D;
}

/* BADGE */

.sf-badge{
  margin-top:16px;
  display:inline-block;
  padding:10px 24px;
  border-radius:40px;
  background:linear-gradient(90deg,#8A5CFF,#F472B6);
  font-weight:600;
  font-size:14px;
  color:#fff;
}

/* WHATSAPP BUTTON */

.sf-enroll-btn{
  margin-top:26px;
  padding:14px 36px;
  border:none;
  border-radius:50px;
  font-size:15px;
  font-weight:700;
  cursor:pointer;
  color:#fff;
  background:linear-gradient(90deg,#25D366,#128C7E);
  transition:0.25s ease;
}

.sf-enroll-btn:hover{
  transform:translateY(-4px);
  box-shadow:0 0 22px rgba(37,211,102,0.45);
}

/* MOBILE */

@media(max-width:768px){

  .sf-urgency-section{
    padding:40px 20px;
  }

  .sf-urgency-title{
    font-size:26px;
  }

  .sf-sub{
    font-size:15px;
  }

}

`;

    const id = "sf-urgency-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    return () => {
      clearInterval(timer);
      clearInterval(seatTimer);
    };

  }, []);

  const handleEnroll = () => {

    const adminNumber = "919361046387";

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








function WhyDigitalMarketingCourse() {

  useEffect(() => {

    const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= SECTION ================= */

.vision-section{
  padding:40px 6%;
  background:linear-gradient(135deg,#020617,#020617,#0b0f2c);
  color:#fff;
  font-family:'Inter',system-ui;
}

/* ================= TITLE ================= */

.vision-title{
  text-align:center;
  margin-bottom:28px;
}

.vision-title h3{
  font-size:18px;
  font-weight:600;
  color:#cbd5f5;
  margin-bottom:6px;
}

.vision-title h2{
  font-size:clamp(28px,4vw,42px);
  font-weight:800;
  background:linear-gradient(90deg,#7C3AED,#EC4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  line-height:1.2;
}

.vision-underline{
  width:70px;
  height:4px;
  margin:12px auto 0;
  background:linear-gradient(90deg,#7C3AED,#EC4899);
  border-radius:10px;
}

/* ================= LAYOUT ================= */

.vision-container{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  align-items:center;
  max-width:1200px;
  margin:auto;
}

/* ================= IMAGE ================= */

.vision-image img{
  width:100%;
  max-width:420px;
  border-radius:26px;
  display:block;
}

/* ================= CONTENT ================= */

.vision-content p{
  font-size:16px;
  line-height:1.75;
  color:#cbd5f5;
  margin-bottom:16px;
}

/* ================= RESPONSIVE ================= */

@media(max-width:992px){

.vision-container{
  grid-template-columns:1fr;
  gap:30px;
  text-align:center;
}

.vision-image img{
  margin:auto;
}

.vision-title h2{
  font-size:32px;
}

.vision-content p{
  font-size:15px;
}

}

`;

    const id = "vision-section-style";

    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

  }, []);

  return (

    <section className="vision-section">

      <div className="vision-title">

        <h3>Why Choose Our</h3>

        <h2>Digital Marketing Course</h2>

        <div className="vision-underline"></div>

      </div>

      <div className="vision-container">

        <div className="vision-image">
          <img src="/images/dmcourse1.png" alt="Digital Marketing Course"/>
        </div>

        <div className="vision-content">

          <p>
            Our Digital Marketing Course is designed to help students,
            entrepreneurs, and professionals master the skills required
            to succeed in today's digital world. From SEO and social media
            marketing to paid advertising and AI-powered marketing tools,
            the course provides a complete understanding of modern digital strategies.
          </p>

          <p>
            Unlike traditional theoretical training, we focus on practical
            learning through real-time projects, live campaign simulations,
            and hands-on tools used by industry experts. This approach helps
            learners gain real-world experience and build confidence in executing
            digital marketing strategies.
          </p>

          <p>
            By the end of the program, students will have the knowledge to
            build brands online, generate leads, optimize campaigns, and
            create measurable business growth using powerful digital marketing techniques.
          </p>

        </div>

      </div>

    </section>

  );
}




function ImpactSection(){

const sectionRef = useRef(null);

const [counts,setCounts] = useState({
students:0,
campaigns:0,
business:0,
projects:0
});

useEffect(()=>{

/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
startCounter();
}
});
},{threshold:0.3});

if(sectionRef.current){
observer.observe(sectionRef.current);
}

/* ================= CSS ================= */

const css = `

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= SECTION ================= */

.impact-section{
padding:50px 6%;
background:linear-gradient(135deg,#020617,#020617,#0b0f2c);
color:#fff;
text-align:center;
overflow:hidden;
font-family:'Inter',system-ui;
}

/* ===== TITLE ===== */

.impact-title{
font-size:clamp(28px,4vw,38px);
font-weight:800;
margin-bottom:10px;
}

.impact-subtitle{
font-size:16px;
color:#cbd5f5;
margin-bottom:40px;
line-height:1.6;
}

/* ===== IMPACT GRID ===== */

.impact-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:30px;
margin-bottom:40px;
}

.impact-item{
opacity:0;
transform:translateY(40px);
transition:all 0.8s ease;
}

.show .impact-item{
opacity:1;
transform:translateY(0);
}

/* ===== ICON ===== */

.impact-icon{
font-size:46px;
margin-bottom:14px;
color:#EC4899;
animation:floatIcon 3s ease-in-out infinite;
}

@keyframes floatIcon{
0%{transform:translateY(0)}
50%{transform:translateY(-8px)}
100%{transform:translateY(0)}
}

.impact-item p{
font-size:15px;
line-height:1.65;
color:#e2e8f0;
margin:0;
}

/* ===== CURRENT REACH ===== */

.reach-title{
font-size:clamp(26px,4vw,36px);
font-weight:800;
margin-bottom:30px;
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* ===== CARDS ===== */

.reach-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:24px;
}

.reach-card{
position:relative;
padding:28px;
border-radius:16px;
background:#0f172a;
overflow:hidden;
transition:0.35s ease;
}

/* ===== GLOW BORDER ===== */

.reach-card::before{
content:"";
position:absolute;
inset:-2px;
border-radius:18px;
background:linear-gradient(120deg,#7C3AED,#EC4899,#7C3AED);
z-index:-1;
opacity:0.6;
filter:blur(10px);
}

.reach-card:hover{
transform:translateY(-8px) scale(1.02);
}

/* ===== ICON ===== */

.reach-icon{
font-size:34px;
margin-bottom:10px;
color:#7C3AED;
animation:floatIcon 3s infinite;
}

.reach-card h4{
font-size:16px;
margin-bottom:6px;
color:#cbd5f5;
font-weight:600;
}

.reach-number{
font-size:34px;
font-weight:800;
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* ================= RESPONSIVE ================= */

@media(max-width:1024px){

.impact-grid{
grid-template-columns:1fr 1fr;
gap:24px;
}

.reach-grid{
grid-template-columns:1fr 1fr;
gap:20px;
}

}

@media(max-width:600px){

.impact-section{
padding:40px 20px;
}

.impact-grid{
grid-template-columns:1fr;
gap:26px;
}

.impact-item{
max-width:320px;
margin:auto;
}

.reach-grid{
grid-template-columns:1fr;
gap:20px;
}

.reach-card{
padding:24px;
}

.reach-number{
font-size:30px;
}

}

`;

const id = "impact-section-style";

if(!document.getElementById(id)){
const style = document.createElement("style");
style.id=id;
style.innerHTML = css;
document.head.appendChild(style);
}

},[]);


/* ================= COUNTER ================= */

const startCounter=()=>{

let students=0;
let campaigns=0;
let business=0;
let projects=0;

const interval=setInterval(()=>{

students+=70;
campaigns+=10;
business+=30;
projects+=4;

if(students>=3500) students=3500;
if(campaigns>=500) campaigns=500;
if(business>=1200) business=1200;
if(projects>=150) projects=150;

setCounts({
students,
campaigns,
business,
projects
});

if(students===3500){
clearInterval(interval);
}

},40);

};

return(

<section ref={sectionRef} className="impact-section">

<h2 className="impact-title">Our Impact</h2>

<p className="impact-subtitle">
Real results from students and businesses who trust our Digital Marketing training and services.
</p>

<div className="impact-grid">

<div className="impact-item">
<div className="impact-icon">📈</div>
<p>90% of students improved their digital marketing skills through real-world projects.</p>
</div>

<div className="impact-item">
<div className="impact-icon">🚀</div>
<p>Businesses increased online visibility using our SEO and social media strategies.</p>
</div>

<div className="impact-item">
<div className="impact-icon">💻</div>
<p>Hundreds of campaigns optimized with data-driven digital marketing techniques.</p>
</div>

<div className="impact-item">
<div className="impact-icon">🎓</div>
<p>Students trained in SEO, Social Media Marketing, Google Ads and AI Marketing.</p>
</div>

</div>

<h2 className="reach-title">Current Reach</h2>

<div className="reach-grid">

<div className="reach-card">
<div className="reach-icon">👨‍🎓</div>
<h4>Students Trained</h4>
<div className="reach-number">{counts.students}+</div>
</div>

<div className="reach-card">
<div className="reach-icon">📊</div>
<h4>Campaigns Managed</h4>
<div className="reach-number">{counts.campaigns}+</div>
</div>

<div className="reach-card">
<div className="reach-icon">🏢</div>
<h4>Businesses Supported</h4>
<div className="reach-number">{counts.business}+</div>
</div>

<div className="reach-card">
<div className="reach-icon">🚀</div>
<h4>Projects Completed</h4>
<div className="reach-number">{counts.projects}+</div>
</div>

</div>

</section>

);
}


export default function Courses() {

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selection: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_pznbx9s",
      "template_8wwwast",
      formData,
      "yxT-hRvX41RhpOdfZ"
    )
    .then(() => {
      alert("Enquiry Sent Successfully!");
      setShowPopup(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        selection: "",
        message: ""
      });
    })
    .catch((error) => {
      alert("Failed to send enquiry.");
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  /* ESC KEY CLOSE */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>
              Master the Future of <br />
              <span>Digital Marketing</span>
            </h1>

            <p>
              Join our industry-recognized Digital Marketing Course
              designed to help you master SEO, Social Media Marketing,
              Google Ads and real-world campaign strategies.
            </p>

            <button
              className="cta-btn"
              onClick={() => setShowPopup(true)}
            >
              Connect With Us
            </button>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="hero-right">
            <div className="side-form">
              <h2>Connect With Us</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                  placeholder="Your Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button type="submit" className="submit-btn">
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="popup-form"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h2>Connect With Us</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
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
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

          </div>
        </div>
      )}

      <style>{styles}</style>
<WhyDigitalMarketingCourse />
      <CurriculumSection />
      < ImpactSection />
      {/* <CareerOutcomeSection /> */}
      
      {/* <DataEducationSection /> */}
      <WhyRegisterSection />
     <UrgencySection />
      {/* <Demo /> */}
    </>
  );
}



const styles = `
.hero-section{
  min-height:0vh;
  display:flex;
  align-items:center;
  background:linear-gradient(135deg,#000c24,#020617);
  padding:10px 0;
}

.hero-container{
  width:85%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:60px;
}

.hero-left{
  flex:1;
  color:#fff;
}

.hero-left h1{
  font-size:42px;
  margin-bottom:20px;
}

.hero-left span{
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.hero-left p{
  font-size:17px;
  color:#cbd5e1;
  margin-bottom:30px;
}

.cta-btn{
  padding:14px 28px;
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  border:none;
  border-radius:8px;
  color:#fff;
  cursor:pointer;
}

.hero-right{
  flex:1;
  display:flex;
  justify-content:center;
}

.side-form,
.popup-form{
  background:#0f172a;
  padding:35px;
  border-radius:14px;
  width:100%;
  max-width:420px;
  box-sizing:border-box;
}

.side-form h2,
.popup-form h2{
  color:#fff;
  margin-bottom:20px;
}

.form-row{
  display:flex;
  gap:12px;
}

.form-row input{
  flex:1;
}

.side-form input,
.side-form select,
.side-form textarea,
.popup-form input,
.popup-form select,
.popup-form textarea{
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border:none;
  border-radius:6px;
  background:#1e293b;
  color:#fff;
  font-size:14px;
}

.submit-btn{
  width:100%;
  padding:12px;
  background:linear-gradient(90deg,#7c3aed,#ec4899);
  border:none;
  border-radius:8px;
  color:#fff;
  font-weight:600;
  cursor:pointer;
}

.popup-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.75);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:999;
  animation:fadeIn 0.3s ease;
}

.close-btn{
  position:absolute;
  top:12px;
  right:15px;
  background:#1e293b;
  border:none;
  color:#fff;
  font-size:18px;
  width:32px;
  height:32px;
  border-radius:50%;
  cursor:pointer;
  transition:0.3s ease;
}

.close-btn:hover{
  background:#7c3aed;
  transform:rotate(90deg);
}

@keyframes fadeIn{
  from{opacity:0;}
  to{opacity:1;}
}

@media(max-width:992px){
  .hero-container{
    flex-direction:column;
  }
}

@media(max-width:600px){
  .form-row{
    flex-direction:column;
  }
}
`;