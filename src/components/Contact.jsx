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
//         @media(max-width:768px){
//   img{
//     width:100%;
//     height:auto;
//     object-fit:contain;
//   }
// }
// @media(max-width:768px){
//   .contact-section img{
//     max-width:100%;
//     height:auto;
//     object-fit:contain;
//   }
// }

.sf-logo .mark{
  width:48px;
  height:48px;
  border-radius:12px;
  overflow:hidden;
  background:#fff;
}

.sf-logo .logo-img{
  width:100%;
  height:100%;
  object-fit:contain;
}

     .contact-inner{
  width:100%;          /* FULL WIDTH */
  max-width:100%;      /* REMOVE LIMIT */
  margin:0;            /* NO CENTER GAP */
  display:block; 
  border-radius:50%;      /* SINGLE COLUMN */
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
       width:100%;
  background:#fff;
  padding:48px 60px;   /* BIG FORM AREA */
  border-radius:0;  
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
.contact-form input,
.contact-form textarea{
  width:100%;
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

      @media(max-width:768px){

  .contact-section{
    padding:60px 20px;
  }

  .contact-inner{
    grid-template-columns:1fr;
    gap:40px;
    border-radius:50%;
  }

  .contact-left h2{
    font-size:34px;
    line-height:1.15;
  }

  .contact-lead{
    font-size:16px;
  }

  .contact-right{
    padding:24px;
    border-radius:20px;
  }

  .contact-form input,
  .contact-form textarea{
    font-size:15px;
    padding:14px 16px;
  }

  .contact-form button{
    width:100%;
    font-size:16px;
    padding:16px;
  }

  .map-card iframe{
    height:220px;
  }
}


.map-link{
  display:inline-block;
  margin-top:12px;
  font-weight:700;
  color:#B90504;
  text-decoration:none;
}

.map-link:hover{
  text-decoration:underline;
}



/* ================= CONTACT CARDS SECTION (ADD ONLY) ================= */

.contact-cards-ui{
  margin-top: 0 !important; 
  padding:100px 7vw;
   padding-top: 100px !important;
  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  color:#ffffff;
}
.contact-cards-ui h1{
  margin-top: 0 !important;
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
  box-shadow:0 0 12px rgba(255,183,3,.9);
}

.contact-heading{
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;          /* FIRST LINE WHITE */
  margin-bottom: 60px;
  letter-spacing: -0.02em;
}

/* Gradient second line (same as image) */
.contact-heading .gradient-text{
  display: inline-block;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.contact-grid-ui{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:28px;
}

// .contact-card-ui{
//   background:linear-gradient(180deg,#0f172a,#020617);
//   border-radius:20px;
//   padding:28px;
//   border:1px solid rgba(255,255,255,0.08);
//   box-shadow:0 30px 80px rgba(0,0,0,0.7);
//   transition:all .35s ease;
// }
.contact-card-ui{
  background:#ffffff !important;
  color:#000000 !important;
  border-radius:20px;
  padding:28px;
  border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 20px 50px rgba(0,0,0,0.15);
}




.contact-card-ui:hover{
   transform:translateY(-8px);
  box-shadow:0 30px 80px rgba(0,0,0,0.25);
}

.icon-box{
  width:48px;
  height:48px;
  border-radius:10px;
  background:#1e6bff;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  box-shadow:0 12px 30px rgba(163, 5, 5, 0.6);
}

.icon-box svg{
  width:22px;
  height:22px;
  fill:#fff;
}

.card-title{
  font-size:22px;
  font-weight:800;
  margin-bottom:10px;
  color:#000000 !important;
}

.card-desc{
  font-size:15px;
  line-height:1.7;
   color:#111827 !important;
  margin-bottom:20px;
}

.card-link{
  font-size:16px;
  font-weight:700;
  // color:#ffffff;
   color:#000000 !important;
}

.card-link.action{
  color:#2563eb;
  margin-top:8px;
  display:inline-block;
}

/* RESPONSIVE */
@media(max-width:1100px){
  .contact-grid-ui{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .contact-heading{
    font-size:34px;
  }
  .contact-grid-ui{
    grid-template-columns:1fr;
  }
}


/* ===== FORCE FULL WIDTH CONTACT CARDS ===== */

// .contact-cards-ui{
//   width:100vw;                 /* FULL SCREEN WIDTH */
//   margin-left:calc(50% - 50vw);
//   margin-right:calc(50% - 50vw);
//   padding:100px 6vw;           /* SIDE PADDING ONLY */
//   border-radius:0;
// }
/* ===== CONTACT CARDS – FULL WIDTH, NO GAP ===== */

.contact-cards-ui{
  width:100vw;
  margin-left:calc(50% - 50vw);
  margin-right:calc(50% - 50vw);

  margin-top:0 !important;
  padding:60px 6vw 100px;   /* NO EXTRA TOP GAP */

  background:radial-gradient(circle at top,#0b1220,#020617 70%);
  color:#ffffff;
  border-radius:0;
}

/* Remove default heading gap */
.contact-cards-ui h1{
  margin-top:0 !important;
}

/* Prevent horizontal scroll */
body{
  overflow-x:hidden;
}

/* ================= MODERN DARK FORM OVERRIDE ================= */

/* FORM WRAPPER */
.contact-right{
  background:linear-gradient(180deg,#0f172a,#020617) !important;
  border-radius:24px !important;
  padding:48px !important;
  box-shadow:0 40px 120px rgba(0,0,0,0.75) !important;
  border:1px solid rgba(255,255,255,0.08);
}

/* FORM GRID */
.contact-form{
  gap:20px !important;
}

/* INPUTS */
.contact-form input,
.contact-form textarea{
  background:#020617 !important;
  color:#ffffff !important;
  border:1px solid rgba(255,255,255,0.15) !important;
  border-radius:14px !important;
  padding:16px 18px !important;
  font-size:16px !important;
  transition:all .3s ease;
}

/* PLACEHOLDER */
.contact-form input::placeholder,
.contact-form textarea::placeholder{
  color:#94a3b8;
}

/* FOCUS EFFECT */
.contact-form input:focus,
.contact-form textarea:focus{
  outline:none;
  border-color:#1e6bff !important;
  box-shadow:0 0 0 3px rgba(173, 9, 25, 0.25);
}

/* TEXTAREA HEIGHT */
.contact-form textarea{
  min-height:150px;
  resize:none;
}

/* SUBMIT BUTTON */
.contact-form button{

  // background:linear-gradient(135deg,#1e6bff,#2563eb) !important;
  border-radius:14px !important;
  font-size:17px !important;
  font-weight:900 !important;
  letter-spacing:0.08em;
  padding:18px !important;
  transition:all .35s ease;
  box-shadow:0 20px 60px rgba(128, 5, 5, 0.45);
}

/* BUTTON HOVER */
.contact-form button:hover{
  transform:translateY(-4px);
  box-shadow:0 30px 90px rgba(205, 12, 12, 0.6);
}

/* DISABLED */
.contact-form button:disabled{
  opacity:0.6;
  cursor:not-allowed;
}

/* STATUS MESSAGE */
.form-status{
  font-size:15px;
  font-weight:700;
  margin-top:6px;
}

/* MAP CARD MATCH DARK */
.map-card{
  margin-top:30px;
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.08);
  box-shadow:0 20px 60px rgba(0,0,0,0.6);
}
// html, body {

//   overflow-x: hidden;
// }

/* ===== HARD RESET FOR TOP WHITE SPACE ===== */




header, .header, .navbar {
  margin-bottom: 0 !important;
}
// body {
//   padding-top: 0 !important;
// }



/* ===== GRADIENT BUTTON (PURPLE → PINK) ===== */

.contact-form button{
  background: linear-gradient(135deg, #8b5cf6, #ec4899) !important;
  color: #ffffff !important;
  border: none !important;

  border-radius: 999px;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0.08em;

  padding: 18px;
  cursor: pointer;

  box-shadow: 0 20px 60px rgba(236, 72, 153, 0.45);
  transition: all 0.35s ease;
}

/* Hover effect */
.contact-form button:hover{
  transform: translateY(-4px);
  box-shadow: 0 30px 90px rgba(139, 92, 246, 0.6);
}

/* Disabled state */
.contact-form button:disabled{
  opacity: 0.6;
  cursor: not-allowed;
}
/* ===== ICON BOX: BLUE → RED GRADIENT ===== */

// .icon-box{
//   background: linear-gradient(135deg, #df1818ff, #dc2626) !important;
//   box-shadow:
//     0 12px 30px rgba(219, 37, 235, 0.6),
//     0 0 25px rgba(220, 38, 38, 0.45) !important;
//   transition: all 0.35s ease;
// }
  .icon-box{
  width:56px;
  height:56px;
  border-radius:14px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  // background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  color:#ffffff;
  margin-bottom:20px;

  position:relative;
  z-index:1;
}

/* PURPLE GRADIENT GLOW */
.icon-box::after{
  content:"";
  position:absolute;
  inset:-12px;
  background:linear-gradient(135deg,#8b5cf6,#ec4899);
  filter:blur(22px);
  opacity:0.6;
  z-index:-1;
}


/* Hover effect (optional but premium) */
.contact-card-ui:hover .icon-box{
  transform: scale(1.08);
  box-shadow:
    0 18px 45px rgba(37, 99, 235, 0.75),
    0 0 35px rgba(220, 38, 38, 0.65);
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
    <>
    
      {/* ================= CONTACT CARDS UI ================= */}
<section className="contact-cards-ui">

  <div className="contact-tag">
    <span></span> GET IN TOUCH
  </div>

 <h1 className="contact-heading">
  Let’s make <span className="gradient-text"> something great!</span>
</h1>

  <div className="contact-grid-ui">

    {/* EMAIL */}
    <div className="contact-card-ui">
      <div className="icon-box">
        <svg viewBox="0 0 24 24">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </div>
      <div className="card-title">Send Message</div>
      <div className="card-desc">Send us a message for quick support.</div>
      <div className="card-link">{CONTACT_EMAIL}</div>
    </div>

    {/* PHONE */}
    <div className="contact-card-ui">
      <div className="icon-box">
        <svg viewBox="0 0 24 24">
          <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
        </svg>
      </div>
      <div className="card-title">Let's Talk</div>
      <div className="card-desc">Let's talk and explore your growth opportunities.</div>
      <div className="card-link">{CONTACT_PHONE}</div>
    </div>

    {/* CHAT */}
    <div className="contact-card-ui">
      <div className="icon-box">
        <svg viewBox="0 0 24 24">
          <path d="M21 6h-2v9H6v2a1 1 0 0 0 1 1h10l4 4V7a1 1 0 0 0-1-1zM17 2H3a1 1 0 0 0-1 1v14l4-4h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
        </svg>
      </div>
      <div className="card-title">Chat Us</div>
      <div className="card-desc">Chat with us anytime for instant help.</div>
      <div className="card-link">@{CONTACT_PHONE_DISPLAY}</div>
    </div>

    {/* OFFICE */}
    <div className="contact-card-ui">
      <div className="icon-box">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
        </svg>
      </div>
      <div className="card-title">Our Office</div>
      <div className="card-desc">
        porur,<br />
        Chennai
      </div>
      <a
        href={CONTACT_MAP_LINK}
        target="_blank"
        rel="noreferrer"
        className="card-link action"
      >
        Get Direction
      </a>
    </div>

  </div>
</section>
<section className="contact-section">
      <div className="contact-inner">
     

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

       


        </div>
      </div>

      {/* ================= CONTACT CARDS UI ================= */}


    </section>

</>

  );
}
