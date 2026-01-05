import React, { useState, useEffect } from "react";

/* ================= CONSTANTS ================= */
const CONTACT_PHONE = "919445747815"; // WhatsApp number with country code
const CONTACT_PHONE_DISPLAY = "94457 47815";
const CONTACT_EMAIL = "shainfotech05@gmail.com";

const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/Porur,+Chennai";

/* ================= COMPONENT ================= */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  /* 🛡️ CAPTCHA-FREE SPAM PROTECTION */
  const [honeypot, setHoneypot] = useState("");
  const [startTime] = useState(Date.now());
  const [human, setHuman] = useState(false);

  /* ================= SERVICE AUTO MESSAGE ================= */
  const getServiceMessage = () => {
    switch (form.service) {
      case "Digital Strategy":
        return "I want a digital growth strategy for my business.";
      case "Web Development":
        return "I want a modern, responsive website for my business.";
      case "Ecommerce Website":
        return "I want to build an eCommerce website.";
      case "SEO":
        return "I want SEO services to improve my rankings.";
      case "Social Media Marketing":
        return "I want social media marketing services.";
      case "Content Design":
        return "I need content design services.";
      case "Business Analysis":
        return "I need business analysis support.";
      case "Creative Design":
        return "I need creative & branding design services.";
      default:
        return "I want to know more about your services.";
    }
  };

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    setHuman(true);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const timeTaken = (Date.now() - startTime) / 1000;

    /* 🚫 BOT CHECKS */
    if (honeypot) return;
    if (!human) return;
    if (timeTaken < 3) return;

    const text = `
Hi SHA INFOTECHNOLOGY 👋

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message || getServiceMessage()}
    `;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${CONTACT_PHONE}&text=${encodeURIComponent(
        text
      )}`;
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${CONTACT_PHONE}&text=${encodeURIComponent(
          text
        )}`,
        "_blank"
      );
    }
  };

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
.contact-cards-ui{
  padding:100px 6vw;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  font-family:Inter,system-ui;
  color:#ffffff;
}

.contact-tag{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:10px 18px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.35);
  font-weight:600;
  font-size:14px;
  margin-bottom:30px;
}

.contact-tag span{
  width:10px;
  height:10px;
  background:#ffb703;
  border-radius:50%;
}

.contact-heading{
  font-size:clamp(36px,5vw,56px);
  font-weight:900;
  margin-bottom:60px;
}

.gradient-text{
  background:linear-gradient(90deg,#8b5cf6,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.contact-grid-ui{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:28px;
}

.contact-card-ui{
  background:#ffffff;
  color:#000;
  border-radius:20px;
  padding:28px;
}

.icon-box{
  width:56px;
  height:56px;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  color:#fff;
}

.card-title{
  font-size:22px;
  font-weight:800;
}

.contact-section{
  padding:80px 6vw;
  background:#020617;
}

.contact-right{
  max-width:720px;
  margin:auto;
  background:linear-gradient(180deg,#0f172a,#020617);
  padding:48px;
  border-radius:24px;
}

.contact-form{
  display:grid;
  gap:18px;
}

.contact-form input,
.contact-form select,
.contact-form textarea{
  width:100%;
  padding:16px 18px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,0.15);
  background:#020617;
  color:#fff;
}

.contact-form button{
  padding:18px;
  border-radius:999px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  font-size:17px;
  font-weight:900;
  border:none;
  cursor:pointer;
  color:#fff;
}

@media(max-width:900px){
  .contact-grid-ui{grid-template-columns:1fr}
}
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  /* ================= JSX ================= */
  return (
    <>
      {/* CONTACT CARDS */}
      <section className="contact-cards-ui">
        <div className="contact-tag">
          <span></span> GET IN TOUCH
        </div>

        <h1 className="contact-heading">
          Let’s make <span className="gradient-text">something great!</span>
        </h1>

        <div className="contact-grid-ui">
          <div className="contact-card-ui">
            <div className="icon-box">✉️</div>
            <div className="card-title">Send Message</div>
            <div>{CONTACT_EMAIL}</div>
          </div>

          <div className="contact-card-ui">
            <div className="icon-box">📞</div>
            <div className="card-title">Let's Talk</div>
            <div>{CONTACT_PHONE_DISPLAY}</div>
          </div>

          <div className="contact-card-ui">
            <div className="icon-box">💬</div>
            <div className="card-title">Chat Us</div>
            <div>@{CONTACT_PHONE_DISPLAY}</div>
          </div>

          <div className="contact-card-ui">
            <div className="icon-box">📍</div>
            <div className="card-title">Our Office</div>
            <a href={CONTACT_MAP_LINK} target="_blank" rel="noreferrer">
              Porur, Chennai
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section">
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
            />

            <input name="name" placeholder="Name" required onChange={handleChange} />
            <input name="phone" placeholder="Phone" required onChange={handleChange} />

            <select name="service" required onChange={handleChange}>
              <option value="">Select Service</option>
              <option>Digital Strategy</option>
              <option>Web Development</option>
              <option>Ecommerce Website</option>
              <option>SEO</option>
              <option>Social Media Marketing</option>
              <option>Content Design</option>
              <option>Business Analysis</option>
              <option>Creative Design</option>
            </select>

            <textarea
              name="message"
              placeholder="Message (optional)"
              onChange={handleChange}
            />

            <button type="submit">CONTACT ON WHATSAPP</button>
          </form>
        </div>
      </section>
    </>
  );
}
