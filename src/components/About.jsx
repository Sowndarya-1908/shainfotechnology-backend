// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image paths (public folder)
const BG_QUOTE_IMAGE = "/images/about/image.png";
const TEAM_PM_IMAGE = "/images/about/m.jpeg";
const TEAM_MM_IMAGE = "/images/about/r.jpeg";
const TEAM_DEV_IMAGE = "/images/about/s.png";

const GALLERY_IMAGE = "/images/about/1.png";




// Contact details (kept for future use)
const CONTACT_PHONE = "+919361046387";
const CONTACT_PHONE_DISPLAY = "93610 46387";
const CONTACT_EMAIL = "shainfotech05@gmail.com";
const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/13%C2%B005'38.5%22N+80%C2%B011'28.5%22E/@13.0940298,80.1886629,17z/data=!4m4!3m3!8m2!3d13.09403!4d80.1912417";
const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed";

// ---------- SMALL CONTACT “FLOATING FORM” SECTION (bottom of page) ----------
// function Contactsection() {
//   useEffect(() => {
//     const css = `
//       :root{
//         --home-grey:#E8E8E8;
//         --home-red:#B90504;
//         --home-aqua:#6CC4C1;
//       }

      
//       .contact-wrapper{
//         min-height:100vh;
//         display:grid;
//         grid-template-columns:1fr 1fr;
//         gap:56px;
//         padding:72px 84px;
//         align-items:start;
//         font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
//         background:var(--home-grey);
//         color:#111;
//       }

//       .contact-title{
//         font-size:72px;
//         font-weight:900;
//         line-height:1.02;
//         margin:0 0 36px 0;
//         animation:floatHeadline 6s ease-in-out infinite;
//       }

//       @keyframes floatHeadline{
//         0%{transform:translateY(0)}
//         25%{transform:translateY(-8px)}
//         50%{transform:translateY(0)}
//         75%{transform:translateY(6px)}
//         100%{transform:translateY(0)}
//       }

//       .contact-form{
//         width:100%;
//         background:#ffffff;
//         border-radius:18px;
//         padding:36px;
//         box-shadow:0 24px 60px rgba(0,0,0,0.12);
//         border:1px solid rgba(0,0,0,0.04);
//         transition:transform 260ms ease, box-shadow 260ms ease;
//       }

//       .contact-form:hover{
//         transform:translateY(-8px);
//         box-shadow:0 32px 80px rgba(0,0,0,0.18);
//       }

//       .contact-form .form-row{
//         display:grid;
//         grid-template-columns:1fr 1fr;
//         gap:18px;
//         margin-bottom:18px;
//       }

//       .contact-form .form-field{margin-bottom:18px;}

//       .contact-form input,
//       .contact-form textarea{
//         width:100%;
//         padding:18px 20px;
//         border-radius:12px;
//         border:1px solid rgba(0,0,0,0.08);
//         font-size:16px;
//         color:#111;
//         background:#ffffff;
//         outline:none;
//         box-shadow:0 0 0 rgba(0,0,0,0);
//         transition:box-shadow 160ms ease, border-color 160ms ease, transform 160ms ease;
//       }

//       .contact-form input::placeholder,
//       .contact-form textarea::placeholder{
//         color:#777;
//         font-weight:600;
//       }

//       .contact-form input:focus,
//       .contact-form textarea:focus{
//         border-color:var(--home-red);
//         box-shadow:0 0 0 1px rgba(185,5,4,0.4);
//         transform:translateY(-2px);
//       }

//       .contact-form textarea{
//         min-height:150px;
//         resize:vertical;
//       }

//       .fake-recaptcha{
//         margin-top:8px;
//         margin-bottom:20px;
//         background:#ffffff;
//         color:#111;
//         padding:12px 14px;
//         border-radius:10px;
//         display:flex;
//         align-items:center;
//         gap:12px;
//         border:1px solid rgba(0,0,0,0.1);
//       }

//       .fake-recaptcha .checkbox{
//         width:20px;
//         height:20px;
//         border-radius:4px;
//         border:2px solid #111;
//       }

//       .submit-btn{
//         width:100%;
//         background:var(--home-red);
//         padding:18px;
//         border-radius:12px;
//         color:#fff;
//         font-size:22px;
//         font-weight:800;
//         border:none;
//         cursor:pointer;
//         box-shadow:0 16px 40px rgba(185,5,4,0.4);
//         transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
//       }

//       .submit-btn:hover{
//         transform:translateY(-6px);
//         background:#9b0403;
//         box-shadow:0 26px 60px rgba(185,5,4,0.5);
//       }

//       @media(max-width:980px){
//         .contact-wrapper{
//           grid-template-columns:1fr;
//           padding:40px;
//           gap:28px;
//         }
//         .contact-title{font-size:44px;}
//         .contact-form{padding:24px;}
//         .contact-form .form-row{grid-template-columns:1fr;}
//       }
//     `;

//     const old = document.getElementById("contactsection-spacing-styles");
//     if (old) old.remove();
//     const style = document.createElement("style");
//     style.id = "contactsection-spacing-styles";
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     return () => {
//       const s = document.getElementById("contactsection-spacing-styles");
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <div className="contact-wrapper">
//       {/* LEFT text */}
//       <div>
//         <h1 className="contact-title">
//           You’ve scrolled this far — let’s turn it into momentum.
//         </h1>

//         <div style={{ marginTop: 18, fontSize: 18, color: "#333" }}>
//           <div style={{ marginBottom: 18 }}>
//             <div style={{ fontWeight: 800, fontSize: 20 }}>
//               {/* For Business Enquiries */}
//             </div>
//             {/* <div style={{ opacity: 0.8, marginTop: 8 }}>
//               +91 95580 79502 | hello@florafountain.com
//             </div> */}
//           </div>

//           <div>
//             <div style={{ fontWeight: 800, fontSize: 20 }}>
//               {/* For Career Opportunities */}
//             </div>
//             <div style={{ opacity: 0.8, marginTop: 8 }}>
//               {/* +91 95109 24360 | careers@florafountain.com */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT form */}
//       <div className="contact-form" role="form" aria-label="Contact form">
//         <div className="form-row">
//           <div className="form-field">
//             <input type="text" placeholder="Name" aria-label="Name" />
//           </div>
//           <div className="form-field">
//             <input
//               type="text"
//               placeholder="Phone Number"
//               aria-label="Phone number"
//             />
//           </div>
//         </div>

//         <div className="form-field">
//           <input type="email" placeholder="Email" aria-label="Email" />
//         </div>

//         <div className="form-field">
//           <input type="text" placeholder="Service" aria-label="Service" />
//         </div>

//         <div className="form-field">
//           <textarea placeholder="Message" aria-label="Message" />
//         </div>

//         <div className="fake-recaptcha" role="checkbox" aria-checked="false">
//           <div className="checkbox" aria-hidden="true" />
//           <div>I'm not a robot</div>
//         </div>

//         <button className="submit-btn" type="button">
//           LET'S CONNECT
//         </button>
//       </div>
//     </div>
//   );
// }
function Contactsection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const css = `
      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
      }

      .contact-wrapper{
        min-height:100vh;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:56px;
        padding:72px 84px;
        background:var(--home-grey);
      }

      .contact-title{
        font-size:72px;
        font-weight:900;
        margin-bottom:36px;
      }

      .contact-form{
        background:#fff;
        border-radius:18px;
        padding:36px;
        box-shadow:0 24px 60px rgba(0,0,0,0.12);
      }

      .form-row{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:18px;
      }

      .contact-form input,
      .contact-form textarea{
        width:100%;
        padding:16px;
        border-radius:12px;
        border:1px solid rgba(0,0,0,0.1);
        font-size:16px;
      }

      .contact-form textarea{
        min-height:140px;
      }

      .submit-btn{
        width:100%;
        margin-top:14px;
        padding:18px;
        border-radius:12px;
        background:var(--home-red);
        color:#fff;
        font-size:20px;
        font-weight:800;
        border:none;
        cursor:pointer;
      }

      .form-status{
        margin-top:10px;
        font-weight:700;
      }

      @media(max-width:768px){
        .contact-wrapper{
          grid-template-columns:1fr;
          padding:40px 20px;
        }
        .contact-title{
          font-size:34px;
        }
        .form-row{
          grid-template-columns:1fr;
        }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({ ok: false, msg: "❌ Failed to send enquiry" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "❌ Server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div>
        <h1 className="contact-title">
          You’ve scrolled this far — let’s turn it into momentum.
        </h1>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="service"
          placeholder="Service"
          value={form.service}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "LET'S CONNECT"}
        </button>

        {status && (
          <p
            className="form-status"
            style={{ color: status.ok ? "green" : "red" }}
          >
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}

// ========================= ABOUT PAGE MAIN =========================
export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0); // first FAQ open by default

  useEffect(() => {
    const css = `
      :root{
        --accent-red:#B90504;
        --bg-grey:#E8E8E8;
        --card-grey:#F5F5F5;
        --text-dark:#202326;
      }

      *{box-sizing:border-box;}
      body{margin:0;}

      .about-wrap{
        min-height:100vh;
        background:var(--bg-grey);
        color:var(--text-dark);
        font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
      }

    //  .sf-header {
    //     position:sticky;
    //     top:0;
    //     z-index:100;
    //     width:100%;
    //     background:rgba(232,232,232,0.96);
    //     backdrop-filter:blur(8px);
    //     border-bottom:1px solid rgba(0,0,0,0.06);
    //   }
      // .sf-header-inner{
      //   max-width:1400px;
      //   margin:0 auto;
      //   padding:14px 28px;
      //   display:flex;
      //   align-items:center;
      //   justify-content:space-between;
      //   position:relative;
      // }
      // .sf-nav{
      //   position:absolute;
      //   left:50%;
      //   transform:translateX(-50%);
      //   display:flex;
      //   gap:28px;
      //   align-items:center;
      // }
      // .sf-nav .nav-btn{
      //   background:none;
      //   border:none;
      //   color:var(--text-dark);
      //   font-size:18px;
      //   font-weight:700;
      //   cursor:pointer;
      //   text-decoration:none;
      //   transition:color 180ms ease, transform 180ms ease;
      // }
      // .sf-nav .nav-btn:hover{
      //   color:var(--accent-red);
      //   transform:translateY(-2px);
      // }
      // .sf-logo{
      //   display:flex;
      //   align-items:center;
      //   gap:12px;
      //   margin-left:auto;
      // }
      // .sf-logo .mark{
      //   width:44px;
      //   height:44px;
      //   border-radius:12px;
      //   background:var(--accent-red);
      //   display:flex;
      //   align-items:center;
      //   justify-content:center;
      //   font-weight:700;
      //   color:#fff;
      //   box-shadow:0 6px 18px rgba(185,5,4,0.35);
      // }
      // .sf-logo .title{font-weight:800;font-size:16px;}
      // .sf-logo .subtitle{font-size:11px;opacity:0.8;margin-top:2px;}

      .about-section{
        padding:80px 7vw;
        border-bottom:1px solid rgba(0,0,0,0.04);
      }
      .about-max{
        max-width:1100px;
        margin:0 auto;
      }
      .about-section h2{
        font-size:42px;
        font-weight:900;
        margin:0 0 18px 0;
        color:var(--text-dark);
        transition:color 200ms ease;
      }
      .about-lead{
        font-size:18px;
        line-height:1.8;
        color:rgba(30,34,38,0.9);
        transition:color 200ms ease;
      }
      .about-section p{
        transition:color 200ms ease;
      }

      .about-section:not(.about-hero):hover h2{
        color:#555;
      }
      .about-section:not(.about-hero):hover p{
        color:var(--accent-red);
      }

      .about-hero{
        position:relative;
        color:#ffffff;
        overflow:hidden;
        min-height:100vh;
        display:flex;
        align-items:center;
      }

      .about-hero::before{
        content:"";
        position:absolute;
        inset:0;
        background-image:url("/images/about/whoweare.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        filter:brightness(0.45);
        z-index:0;
      }

      .about-hero .about-max{
        position:relative;
        z-index:1;
      }

      .about-hero h2{
        color:#ffffff;
      }
      .about-hero .about-lead{
        color:rgba(255,255,255,0.9);
      }
      .about-hero .who-tag{
        background:rgba(255,255,255,0.12);
        border:1px solid rgba(255,255,255,0.4);
        color:#f5f5f5;
      }

      .who-layout{
        display:grid;
        grid-template-columns:minmax(0,1.2fr) minmax(0,1.1fr);
        gap:40px;
        align-items:flex-start;
      }
      .who-tag{
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:4px 10px;
        border-radius:999px;
        font-size:12px;
        letter-spacing:0.12em;
        text-transform:uppercase;
        margin-bottom:14px;
      }

      .who-card{
        background:rgba(255,255,255,0.98);
        padding:26px 28px;
        border-radius:18px;
        box-shadow:0 22px 60px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.05);
        transition:transform 220ms ease, box-shadow 220ms ease;
        color:var(--text-dark);
      }
      .who-card h3,
      .who-card p{
        color:var(--text-dark);
      }
      .who-card:hover{
        transform:translateY(-8px);
        box-shadow:0 30px 80px rgba(185,5,4,0.35);
      }

      .quote-section{
        background:var(--bg-grey);
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .quote-card{
        position:relative;
        max-width:1120px;
        width:100%;
        margin:0 auto;
        padding:96px 8vw;
        background:#ffffff;
        border-radius:40px;
        box-shadow:
          0 40px 120px rgba(185,5,4,0.28),
          0 0 0 1px rgba(0,0,0,0.04);
        overflow:hidden;
        animation:floatCard 10s ease-in-out infinite;
      }

      @keyframes floatCard{
        0%{transform:translateY(0);}
        25%{transform:translateY(-8px);}
        50%{transform:translateY(0);}
        75%{transform:translateY(6px);}
        100%{transform:translateY(0);}
      }

      .quote-illustration{
        position:absolute;
        right:-40px;
        bottom:-40px;
        width:380px;
        height:260px;
        background-image:url("${BG_QUOTE_IMAGE}");
        background-size:cover;
        background-position:center;
        opacity:0.35;
        filter:drop-shadow(0 18px 40px rgba(185,5,4,0.4));
        pointer-events:none;
        z-index:0;
        animation:floatIllustration 12s ease-in-out infinite alternate;
      }

      .mark{
  width:44px;
  height:44px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ffffff;
  overflow:hidden;
}

.logo-img{
  width:100%;
  height:100%;
  object-fit:contain;
}
  @media(max-width:768px){
  .mark{
    width:38px;
    height:38px;
  }
}

/* ================= USER-FRIENDLY TYPOGRAPHY ================= */

/* Base text */
.about-wrap {
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.2px;
}

/* Section headings */
.about-section h2 {
  font-size: 40px;
  line-height: 1.25;
  font-weight: 800;
  margin-bottom: 18px;
}

/* Paragraphs */
.about-section p,
.about-lead,
.core-sub,
.faq-answer p {
  font-size: 17px;
  line-height: 1.8;
  color: #333;
}

/* Hero title */
.about-hero h2 {
  font-size: 46px;
  line-height: 1.2;
}

/* Quote text */
.quote-text {
  font-size: 21px;
  line-height: 1.7;
  font-weight: 600;
}

/* Team names */
.team-name {
  font-size: 18px;
  font-weight: 800;
}

/* Team roles */
.team-role {
  font-size: 13px;
  letter-spacing: 0.14em;
}

/* Core titles */
.core-title {
  font-size: 19px;
  font-weight: 800;
}

/* FAQ question */
.faq-question {
  font-size: 18px;
  line-height: 1.5;
}

/* ================= MOBILE FRIENDLY ================= */
@media (max-width: 768px) {

  .about-section h2 {
    font-size: 28px;
    line-height: 1.3;
  }

  .about-section p,
  .about-lead,
  .core-sub,
  .faq-answer p {
    font-size: 15px;
    line-height: 1.7;
  }

  .about-hero h2 {
    font-size: 32px;
  }

  .quote-text {
    font-size: 17px;
  }

  .faq-question {
    font-size: 16px;
  }
}

      @keyframes floatIllustration{
        0%{transform:translateY(0) scale(1.02);}
        50%{transform:translateY(-10px) scale(1.05);}
        100%{transform:translateY(4px) scale(1.03);}
      }

      .quote-inner{
        position:relative;
        z-index:1;
        text-align:center;
      }
      .quote-heading{
        font-size:36px;
        font-weight:900;
        color:var(--accent-red);
        margin:0 0 20px 0;
      }
      .quote-text{
        font-size:22px;
        line-height:1.7;
        font-weight:600;
        color:#333;
      }
      .quote-text span{
        color:var(--accent-red);
        font-weight:800;
      }

      .team-grid{
        display:grid;
        grid-template-columns:repeat(3, minmax(0,1fr));
        gap:28px;
      }
      .team-card{
        background:#ffffff;
        border-radius:18px;
        padding:18px 18px 22px;
        box-shadow:0 22px 60px rgba(185,5,4,0.25);
        border:1px solid rgba(0,0,0,0.05);
        overflow:hidden;
        display:flex;
        flex-direction:column;
        transform:translateY(0);
        transition:transform 220ms ease, box-shadow 220ms ease;
      }
      .team-card:hover{
        transform:translateY(-10px);
        box-shadow:0 30px 80px rgba(185,5,4,0.35);
      }
      .team-photo{
        width:100%;
        aspect-ratio:4/3;
        border-radius:14px;
        background:#d3d3d3;
        background-size:cover;
        background-position:center;
        margin-bottom:14px;
      }
      .team-role{
        font-size:13px;
        opacity:0.72;
        letter-spacing:0.16em;
        text-transform:uppercase;
        margin-bottom:4px;
      }
      .team-name{
        font-size:18px;
        font-weight:800;
        margin-bottom:2px;
      }

      .core-block{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:24px;
      }
      .core-card{
        background:#ffffff;
        padding:24px 26px;
        border-radius:18px;
        border:1px solid rgba(0,0,0,0.05);
        box-shadow:0 18px 56px rgba(185,5,4,0.22);
        transition:transform 200ms ease, box-shadow 200ms ease;
      }
      .core-card:hover{
        transform:translateY(-6px);
        box-shadow:0 26px 70px rgba(185,5,4,0.32);
      }
      .core-title{
        font-size:20px;
        font-weight:800;
        margin-bottom:10px;
        color:var(--accent-red);
      }
      .core-sub{
        font-size:15px;
        line-height:1.7;
        color:#444;
      }

      .gallery-section{
        padding-bottom:96px;
      }
      .gallery-card{
        max-width:1100px;
        margin:0 auto;
        border-radius:22px;
        overflow:hidden;
        border:1px solid rgba(0,0,0,0.06);
        box-shadow:0 26px 80px rgba(185,5,4,0.28);
        background:#ffffff;
      }
      .gallery-card img{
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        transform:scale(1.01);
        transition:transform 10s ease-out;
      }
      .gallery-card:hover img{
        transform:scale(1.06);
      }

      .faq-section{
        background:#f4f4f4;
      }
      .faq-card{
        max-width:1100px;
        margin:0 auto;
        border-radius:24px;
        background:#ffffff;
        box-shadow:0 24px 70px rgba(185,5,4,0.25);
        padding:32px 32px 40px;
      }
      .faq-title{
        font-size:32px;
        font-weight:900;
        margin-bottom:8px;
        color:var(--text-dark);
      }
      .faq-subtitle{
        font-size:16px;
        color:#555;
        margin-bottom:24px;
      }
      .faq-item{
        border-top:1px solid rgba(0,0,0,0.06);
        padding:18px 4px;
        transition:background 160ms ease, transform 160ms ease,
                 box-shadow 160ms ease;
      }
      .faq-item:last-child{
        border-bottom:1px solid rgba(0,0,0,0.06);
      }
      .faq-item.hoverable:hover{
        background:#ffffff;
        transform:translateY(-4px);
        box-shadow:0 16px 40px rgba(185,5,4,0.25);
      }
      .faq-header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        cursor:pointer;
        gap:16px;
      }
      .faq-question{
        font-size:18px;
        font-weight:700;
        color:#333333;
        transition:color 160ms ease;
      }
      .faq-item.open .faq-question{
        color:var(--accent-red);
      }
      .faq-toggle{
        width:32px;
        height:32px;
        border-radius:999px;
        border:2px solid #444;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:18px;
        font-weight:900;
        color:#444;
        flex-shrink:0;
        transition:background 160ms ease, color 160ms ease,
                   border-color 160ms ease, transform 160ms ease;
      }
      .faq-item.open .faq-toggle{
        background:var(--accent-red);
        color:#ffffff;
        border-color:var(--accent-red);
        transform:translateY(-1px);
      }
      .faq-answer{
        max-height:0;
        overflow:hidden;
        transition:max-height 260ms ease;
      }
      .faq-item.open .faq-answer{
        max-height:400px;
      }
      .faq-answer p{
        margin-top:12px;
        font-size:15px;
        line-height:1.7;
        color:#555;
      }

      @media(max-width:768px){
        .about-section{padding:60px 24px;}
        .about-section h2{font-size:32px;}
        .quote-card{padding:72px 24px;}
        .quote-heading{font-size:28px;}
        .quote-text{font-size:18px;}
        .team-grid{grid-template-columns:1fr;}
        .quote-illustration{
          width:260px;
          height:180px;
          right:-20px;
          bottom:-20px;
          opacity:0.28;
        }
        .faq-card{
          padding:24px 18px 30px;
        }
      }

      @media(max-width:768px){

  /* HERO SECTION */
  .about-hero{
    min-height:auto;
    padding-top:80px;
    padding-bottom:80px;
  }

  .who-layout{
    grid-template-columns:1fr;
    gap:24px;
  }

  .who-card{
    padding:20px;
  }

  /* CONTACT FLOATING SECTION */
  .contact-wrapper{
    grid-template-columns:1fr;
    padding:32px 20px;
    gap:24px;
  }

  .contact-title{
    font-size:34px;
    line-height:1.2;
  }

  .contact-form{
    padding:20px;
  }

  .contact-form .form-row{
    grid-template-columns:1fr;
  }

  .submit-btn{
    font-size:18px;
    padding:16px;
  }

  /* CORE VALUES */
  .core-block{
    grid-template-columns:1fr;
  }

  /* GALLERY IMAGE */
  .gallery-card{
    border-radius:16px;
  }

  /* FAQ */
  .faq-question{
    font-size:16px;
  }
}



/* ================= SLIGHTLY BOLDER, USER-FRIENDLY TYPOGRAPHY (ABOUT) ================= */

/* Base text */
.about-wrap{
  font-size:16px;
  line-height:1.75;
}

/* Section headings */
.about-section h2{
  font-weight:800;
}

/* Hero heading */
.about-hero h2{
  font-weight:900;
}

/* Paragraphs & descriptions */
.about-section p,
.about-lead,
.core-sub,
.faq-answer p{
  font-weight:500;   /* was 400 */
}

/* Quote text */
.quote-text{
  font-weight:600;
}

/* Card titles */
.who-card h3,
.core-title{
  font-weight:800;
}

/* Team text */
.team-name{
  font-weight:800;
}
.team-role{
  font-weight:600;
}

/* FAQ questions */
.faq-question{
  font-weight:700;
}

/* Contact CTA text */
.contact-wrapper p{
  font-weight:500;
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .about-section p,
  .about-lead,
  .core-sub,
  .faq-answer p{
    font-weight:500;
  }
}







    `;

    const prev = document.getElementById("about-page-styles");
    if (prev) prev.remove();

    const styleTag = document.createElement("style");
    styleTag.id = "about-page-styles";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);

    return () => {
      const el = document.getElementById("about-page-styles");
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "What kind of services does Sha Infotechnology provide?",
      a: "We offer end-to-end digital services including website design & development, SEO, social media marketing, paid ads, branding creatives, and ongoing performance tracking."
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "Most projects start showing visible organic improvements in 3–6 months, depending on your competition, current website health, and how aggressively we can implement the recommendations."
    },
    {
      q: "Can you work with small businesses and startups?",
      a: "Yes! Many of our clients are early-stage businesses. We create lean, practical plans that focus on quick wins and clear ROI, then scale as you grow."
    },
    {
      q: "Do you provide custom packages or only fixed plans?",
      a: "We have guide packages for reference, but almost every engagement is customised based on your goals, budget, industry and internal resources."
    },
    {
      q: "Will I have a dedicated point of contact?",
      a: "You’ll get a dedicated project manager who coordinates designers, developers and marketers, and keeps you updated with clear timelines and reports."
    },
    {
      q: "Can you redesign my existing website instead of building a new one?",
      a: "Yes. We can audit your current site and decide whether a structured redesign is enough or if a fresh build will be more cost-effective in the long term."
    },
    {
      q: "Do you handle content writing as well?",
      a: "We can create SEO-friendly website copy, blog articles, ad copy and social media content that match your brand tone and marketing goals."
    },
    {
      q: "How do you measure success for campaigns?",
      a: "We define KPIs with you in advance—leads, traffic, sales, engagement, or bookings—and share regular dashboards so you always know what’s working."
    },
    {
      q: "How do we get started with Sha Infotechnology?",
      a: "Just reach out through our contact form or call us. We’ll schedule a short discovery call, understand your requirements, and share a clear action plan with timelines and pricing."
    }
  ];

  return (
    <div className="about-wrap">
      {/* HEADER */}
      

      {/* SLIDE 1 – WHO WE ARE */}
      <section className="about-section about-hero">
        <div className="about-max who-layout">
          <div>
            <div className="who-tag">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#B90504",
                }}
              />
              WHO WE ARE
            </div>
            <h2>We’re a team that lives and breathes digital growth.</h2>
            <p className="about-lead">
              Digimark Agency is a performance-driven digital partner focused on
              practical results. We combine strategy, design, and technology to
              help brands get noticed, get remembered, and grow with confidence.
              From small business owners to fast-moving startups, we work
              closely with every client to understand their goals and translate
              them into measurable outcomes.
            </p>
          </div>

          <div className="who-card">
            <h3>What makes us different?</h3>
            <p>
              We’re not just ticking boxes or following generic playbooks. We
              treat each project as a long-term partnership, bringing clear
              communication, honest advice, and hands-on execution to every
              stage of your digital journey.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 2 – QUOTE */}
      <section className="about-section quote-section">
        <div className="quote-card">
          <div className="quote-illustration" />
          <div className="quote-inner">
            <h2 className="quote-heading">Choosing our own path.</h2>
            <p className="quote-text">
              In life, you can either follow someone else&apos;s path or make
              your own.{" "}
              <span>
                At Digimark Agency, we proudly choose the latter.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 3 – TEAM */}
     {/* SLIDE 3 – TEAM */}
<section className="about-section">
  <div className="about-max">
    <h2>Meet the people behind the work.</h2>

    <div className="team-grid">

      {/* PERSON 1 */}
      <div className="team-card">
        <img src={TEAM_PM_IMAGE} alt="Prasanth" className="team-photo-img" />
        <div className="team-role">PROJECT MANAGER</div>
        <div className="team-name">PRASANTH</div>
      </div>

      {/* PERSON 2 */}
      <div className="team-card">
        <img src={TEAM_MM_IMAGE} alt="Ramya" className="team-photo-img" />
        <div className="team-role">PROJECT MANAGER</div>
        <div className="team-name">RAMYA</div>
      </div>

      {/* PERSON 3 */}
      <div className="team-card">
        <img src={TEAM_DEV_IMAGE} alt="Sowndarya" className="team-photo-img" />
        <div className="team-role">WEB DEVELOPER</div>
        <div className="team-name">SOWNDARYA S</div>
      </div>

    </div>
  </div>
</section>

      {/* SLIDE 4 – CORE VALUES */}
      <section className="about-section">
        <div className="about-max">
          <h2>The ideas that drive everything we do.</h2>
          <div className="core-block">
            <div className="core-card">
              <div className="core-title">Core Purpose</div>
              <div className="core-sub">
                The vision that guides us: to be the digital partner that helps
                businesses move from uncertainty to clarity, from guesswork to
                growth.
              </div>
            </div>
            <div className="core-card">
              <div className="core-title">Core Values</div>
              <div className="core-sub">
                The principles we&apos;re built on: honesty, accountability,
                curiosity, and a deep respect for the trust our clients place in
                us.
              </div>
            </div>
            <div className="core-card">
              <div className="core-title">Our Passion</div>
              <div className="core-sub">
                The spirit of our work: we love building things that work in the
                real world – campaigns, websites, and strategies that actually
                move the needle.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 – IMAGE */}
      <section className="about-section gallery-section">
        <div className="gallery-card">
          <img
            src={GALLERY_IMAGE}
            alt="Digimark Agency team working together"
          />
        </div>
      </section>

      {/* SLIDE 6 – FAQ */}
      <section className="about-section faq-section">
        <div className="faq-card">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Answers to the things clients ask us most before we start working together.
          </p>

          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={item.q}
                className={"faq-item hoverable" + (isOpen ? " open" : "")}
              >
                <div
                  className="faq-header"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div className="faq-question">{item.q}</div>
                  <div className="faq-toggle">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SLIDE 7 – CONTACT CTA */}
      <Contactsection />
    </div>
  );
}
