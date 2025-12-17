import React, { useState, useEffect } from "react";

/* ================= CONSTANTS ================= */
const CONTACT_PHONE = "+919361046387";
const CONTACT_PHONE_DISPLAY = "93610 46387";
const CONTACT_EMAIL = "shainfotech05@gmail.com";

const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/13%C2%B005'38.5%22N+80%C2%B011'28.5%22E/";
const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed";

/* ================= COMPONENT ================= */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* ================= STYLES ================= */
  useEffect(() => {
    const css = `
      .contact-section{
        background:#f1f1f1;
        padding:90px 7vw;
        font-family:Inter,system-ui;
      }

      .contact-inner{
        max-width:1200px;
        margin:auto;
        display:grid;
        grid-template-columns:1.1fr 1fr;
        gap:60px;
        align-items:center;
      }

      .contact-left h2{
        font-size:56px;
        font-weight:900;
        line-height:1.05;
        margin-bottom:20px;
      }

      .contact-lead{
        font-size:18px;
        color:#444;
        margin-bottom:28px;
      }

      .contact-cards{
        display:grid;
        gap:16px;
      }

      .c-card{
        background:#fff;
        padding:16px 18px;
        border-radius:14px;
        box-shadow:0 14px 40px rgba(185,5,4,0.12);
      }

      .c-card strong{display:block;margin-bottom:6px;}

      .c-card a{
        color:#B90504;
        font-weight:700;
        text-decoration:none;
      }

      .contact-right{
        background:#fff;
        padding:36px;
        border-radius:26px;
        box-shadow:0 30px 90px rgba(185,5,4,0.25);
      }

      .contact-form{
        display:grid;
        gap:16px;
      }

      .contact-form input,
      .contact-form textarea{
        padding:16px 18px;
        border-radius:14px;
        border:1px solid rgba(0,0,0,0.1);
        font-size:16px;
      }

      .contact-form textarea{min-height:130px;}

      .contact-form button{
        margin-top:10px;
        padding:18px;
        border-radius:14px;
        background:#B90504;
        color:#fff;
        font-size:18px;
        font-weight:800;
        border:none;
        cursor:pointer;
      }

      .form-status{
        font-weight:700;
        margin-top:6px;
      }

      .map-card{
        margin-top:22px;
        border-radius:18px;
        overflow:hidden;
      }

      .map-card iframe{
        width:100%;
        height:260px;
        border:none;
      }

      @media(max-width:900px){
        .contact-inner{grid-template-columns:1fr;}
        .contact-left h2{font-size:40px;}
      }
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  /* ================= LOGIC ================= */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/.netlify/functions/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ ok: true, msg: "✅ Enquiry sent successfully!" });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({ ok: false, msg: "❌ Failed to send enquiry" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "❌ Network error" });
    } finally {
      setLoading(false);
    }
  };

  /* ================= JSX ================= */
  return (
    <section className="contact-section">
      <div className="contact-inner">
        <div className="contact-left">
          <h2>Ready to turn clicks into customers?</h2>
          <p className="contact-lead">
            {CONTACT_PHONE_DISPLAY} | {CONTACT_EMAIL}
          </p>

          <div className="contact-cards">
            <div className="c-card">
              <strong>Location</strong>
              <a href={CONTACT_MAP_LINK} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>

            <div className="c-card">
              <strong>Phone</strong>
              <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
            </div>

            <div className="c-card">
              <strong>Email</strong>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="service" placeholder="Service" value={form.service} onChange={handleChange} />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "GET CUSTOM STRATEGY"}
            </button>

            {status && (
              <p className="form-status" style={{ color: status.ok ? "green" : "red" }}>
                {status.msg}
              </p>
            )}
          </form>

          <div className="map-card">
            <iframe src={CONTACT_MAP_EMBED} title="Location" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
