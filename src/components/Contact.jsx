import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* ================= CONSTANTS ================= */

const CONTACT_PHONE_DISPLAY = "93610 46387";
const CONTACT_EMAIL = "shainfotech05@gmail.com";
const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/Porur,+Chennai";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    LastName: "",
    phone: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs.send(
      "service_pznbx9s",
      "template_8wwwast",
      form,
      "yxT-hRvX41RhpOdfZ"
    )
      .then(() => {

        alert("Message sent successfully!");
          const message = `🚀 New Contact Enquiry

👤 Name: ${form.name} ${form.LastName}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
📌 Service: ${form.service}
📝 Subject: ${form.subject}

💬 Message:
${form.message}`;

  const phoneNumber = "919361046387";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappURL;

        setForm({
          name: "",
          LastName: "",
          phone: "",
          email: "",
          service: "",
          subject: "",
          message: "",
        });

      })
      .catch(() => alert("Failed to send message"))
      .finally(() => setLoading(false));
  };

  /* ================= STYLES ================= */

  useEffect(() => {

    const css = `

.contact-main{
padding:10px 0vw;
background:#020617;
font-family:Inter,system-ui;
}

.contact-grid{
display:grid;
grid-template-columns:1fr 1fr;
max-width:1100px;
margin:auto;
gap:40px;
}

/* LEFT PANEL */

.contact-left{
background:
linear-gradient(135deg,#8b5cf6cc,#ec4899cc),
url("/images/contact-bg.jpg");
background-size:cover;
background-position:center;
color:#fff;
padding:50px;
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:center;
}

.contact-left small{
color:#fbbf24;
font-weight:700;
letter-spacing:1px;
}

.contact-left h1{
font-size:34px;
font-weight:900;
margin:16px 0;
line-height:1.3;
}

.contact-left p{
opacity:0.9;
margin-bottom:30px;
}

/* CONTACT INFO */

.contact-info{
display:flex;
gap:16px;
margin-bottom:24px;
align-items:flex-start;
}

.contact-icon{
width:46px;
height:46px;
border-radius:10px;
background:#000;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:#fff;
}

/* RIGHT FORM */

.contact-right{
background:#ffffff;
padding:20px;
border-radius:20px;
}

.contact-right h3{
font-size:26px;
font-weight:900;
margin-bottom:0px;
color: #000;
}

.contact-right p{
color:#7d0695;
margin-bottom:10px;
}

/* FORM */

.contact-form{
display:grid;
gap:18px;
}

.contact-row{
display:grid;
grid-template-columns:1fr 1fr;
gap:16px;
}

/* FIELD BOX */

.form-field{
border:2px solid #7a0955;
border-radius:10px;
padding:6px;
background:#fff;
transition:all .2s ease;
}

/* PURPLE FOCUS BORDER */

.form-field:focus-within{
border:2px solid #8b5cf6;
box-shadow:0 0 0 2px rgba(139,92,246,0.15);
}

/* INPUTS */

.contact-form input,
.contact-form select,
.contact-form textarea{
width:100%;
padding:5px 14px;
border:none;
outline:none;
font-size:14px;
background:transparent;
}

.contact-form textarea{
min-height:120px;
resize:none;
}

/* BUTTON */

.contact-form button{
margin-top:10px;
padding:14px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#8b5cf6,#ec4899);
color:#fff;
font-weight:700;
cursor:pointer;
}

/* MOBILE */

@media(max-width:900px){

.contact-grid{
grid-template-columns:1fr;
}

.contact-row{
grid-template-columns:1fr;
}

}

`;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);

  }, []);

  /* ================= JSX ================= */

  return (

<section className="contact-main">

<div className="contact-grid">

{/* LEFT INFO PANEL */}

<div className="contact-left">

<small>GET IN TOUCH</small>

<h1>
Don't hesitate to contact us for more information.
</h1>

<p>
Reach out anytime and our team will respond quickly.
</p>

<div className="contact-info">
<div className="contact-icon">📍</div>
<div>
<h4>Head Office</h4>
<div>Porur, Chennai</div>
</div>
</div>

<div className="contact-info">
<div className="contact-icon">✉️</div>
<div>
<h4>Email Us</h4>
<div>{CONTACT_EMAIL}</div>
</div>
</div>

<div className="contact-info">
<div className="contact-icon">📞</div>
<div>
<h4>Call Us</h4>
<div>{CONTACT_PHONE_DISPLAY}</div>
</div>
</div>

</div>

{/* RIGHT FORM */}

<div className="contact-right">

<h3>Send us a message</h3>

<p>Fill the form and we will contact you soon.</p>

<form className="contact-form" onSubmit={handleSubmit}>

<div className="contact-row">

<div className="form-field">
<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
required
/>
</div>

<div className="form-field">
<input
name="LastName"
placeholder="LastName"
value={form.LastName}
onChange={handleChange}
/>
</div>

</div>

<div className="contact-row">

<div className="form-field">
<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
required
/>
</div>

<div className="form-field">
<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
required
/>
</div>

</div>

<div className="form-field">
<select
name="service"
value={form.service}
onChange={handleChange}
required
>
<option value="">Select Service</option>
<option>Digital Strategy</option>
<option>Digital Marketing Course</option>
<option>Web Development</option>
<option>E-commerce Website</option>
<option>Search Engine Optimization</option>
<option>Social Media Marketing</option>
<option>Content Design</option>
<option>Business Analysis</option>
<option>Creative Design</option>
<option>Brand Consultancy</option>
<option>AI Marketing</option>
</select>
</div>

<div className="form-field">
<input
name="subject"
placeholder="Subject"
value={form.subject}
onChange={handleChange}
/>
</div>

<div className="form-field">
<textarea
name="message"
placeholder="Message"
value={form.message}
onChange={handleChange}
/>
</div>

<button type="submit">
{loading ? "Sending..." : "SEND MESSAGE"}
</button>

</form>

</div>

</div>

</section>

  );
}