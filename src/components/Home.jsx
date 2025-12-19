// src/components/Home.jsx
import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import Contact from "./Contact";
const IMAGE_PATH = "/mnt/data/92ba21cc-3a67-4485-9340-6f030c1fb602.png";
const MOTION_IMAGE = "/mnt/data/278f7e19-0aa1-427e-ba91-87d7daf5ff35.png";
const PANEL_IMAGE = "/images/slide2.png";
const PARALLAX_BG = "/images/background/image copy.png";
// Contact details
// const CONTACT_PHONE = "+919361046387";
const CONTACT_PHONE_DISPLAY = "93610 46387";
// const CONTACT_EMAIL = "shainfotech05@gmail.com";
const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/13%C2%B005'38.5%22N+80%C2%B011'28.5%22E/@13.0940298,80.1886629,17z/data=!4m4!3m3!8m2!3d13.09403!4d80.1912417";
const CONTACT_MAP_EMBED =
  "https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed";
// --------- SMALL CONTACT “FLOATING FORM” SECTION ----------
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
//         .services-card{
//             overflow: hidden;
// }

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

//      @media(max-width:768px){

//   .contact-wrapper{
//     grid-template-columns:1fr;
//     padding:48px 20px;
//     gap:32px;
//     min-height:auto;
//   }

//   .contact-title{
//     font-size:34px;
//     line-height:1.15;
//     text-align:left;
//   }

//   .contact-form{
//     padding:22px;
//     border-radius:16px;
//   }

//   .contact-form .form-row{
//     grid-template-columns:1fr;
//     gap:14px;
//   }

//   .contact-form input,
//   .contact-form textarea{
//     font-size:15px;
//     padding:14px 16px;
//   }

//   .submit-btn{
//     font-size:18px;
//     padding:16px;
//   }
// }
// /* ================= FIRST SLIDE MOBILE FIX ================= */
// @media(max-width:768px){

//   .hero-wrap{
//     flex-direction:column;
//     width:100% !important;
//     gap:28px;
//     text-align:center;
//   }

//   .hero-image-wrap{
//     width:100% !important;
//     justify-content:center;
//   }

//   .hero-image{
//     width:220px !important;
//     height:220px !important;
//   }

//   .hero-content{
//     width:100% !important;
//     padding:0 !important;
//   }

//   .hero-content h1{
//     font-size:28px !important;
//   }

//   .hero-content p{
//     font-size:15px !important;
//     line-height:1.6;
//   }
// }
//   @media(max-width:768px){

//   .services-card{
//     padding:20px;
//   }

//   .service-icon{
//     width:40px;
//     height:40px;
//   }

// }
// body{
//   overflow-x:hidden;
// }

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
//       <div>
//         <h1 className="contact-title">
//           You’ve scrolled this far — let’s turn it into momentum.
//         </h1>
//       </div>

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

// ---------- MAIN HOME COMPONENT ----------


// function PreContactForm() {
//   const [form, setForm] = React.useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = React.useState(false);
//   const [status, setStatus] = React.useState(null);

//   useEffect(() => {
//     const css = `
//       .pre-contact{
//         background:#E8E8E8;
//         padding:90px 20px;
//         display:flex;
//         justify-content:center;
//         font-family:Inter,system-ui;
//       }

//       .pre-contact-box{
//         width:100%;
//         max-width:560px;
//         background:#fff;
//         padding:40px;
//         border-radius:22px;
//         box-shadow:0 24px 70px rgba(0,0,0,0.14);
//       }

//       .pre-contact-box h2{
//         margin:0 0 10px;
//         font-size:34px;
//         font-weight:900;
//         color:#111;
//         text-align:center;
//       }

//       .pre-contact-box p{
//         text-align:center;
//         color:#444;
//         font-size:15px;
//         margin-bottom:26px;
//         line-height:1.6;
//       }

//       .pre-contact-box input,
//       .pre-contact-box textarea{
//         width:100%;
//         padding:15px 18px;
//         margin-bottom:14px;
//         border-radius:12px;
//         border:1px solid rgba(0,0,0,0.15);
//         font-size:15px;
//         outline:none;
//       }

//       .pre-contact-box textarea{
//         min-height:120px;
//         resize:none;
//       }

//       .pre-contact-box input:focus,
//       .pre-contact-box textarea:focus{
//         border-color:#B90504;
//       }

//       .pre-contact-btn{
//         width:100%;
//         background:#B90504;
//         color:#fff;
//         border:none;
//         border-radius:14px;
//         padding:18px;
//         font-size:18px;
//         font-weight:900;
//         cursor:pointer;
//         margin-top:6px;
//       }

//       .pre-contact-status{
//         margin-top:14px;
//         text-align:center;
//         font-weight:700;
//       }

//       @media(max-width:768px){
//         .pre-contact{
//           padding:60px 16px;
//         }
//         .pre-contact-box{
//           padding:28px;
//         }
//         .pre-contact-box h2{
//           font-size:26px;
//         }
//       }
//     `;
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const res = await fetch("/.netlify/functions/send-enquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (data?.success) {
//         setStatus({ ok: true, msg: "✅ Enquiry sent successfully" });
//         setForm({
//           name: "",
//           phone: "",
//           email: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         setStatus({ ok: false, msg: "❌ Failed to send enquiry" });
//       }
//     } catch {
//       setStatus({ ok: false, msg: "❌ Network error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="pre-contact">
//       <form className="pre-contact-box" onSubmit={handleSubmit}>
//         <h2>Let’s Work Together</h2>
//         <p>
//           Tell us about your requirement and we’ll get back with the right
//           solution for your business.
//         </p>

//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//         <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
//         <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
//         <input name="service" value={form.service} onChange={handleChange} placeholder="Service" />
//         <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />

//         <button className="pre-contact-btn" type="submit" disabled={loading}>
//           {loading ? "Sending..." : "LET’S CONNECT"}
//         </button>

//         {status && (
//           <div
//             className="pre-contact-status"
//             style={{ color: status.ok ? "green" : "crimson" }}
//           >
//             {status.msg}
//           </div>
//         )}
//       </form>
//     </section>
//   );
// }
function HomeContactSection() {
  return (
    <section className="home-contact-section">
      {/* LEFT – BACKEND CONNECTED FORM */}
      <div className="home-contact-form">
        <Contact />
      </div>

      {/* RIGHT – MAP */}
      <div className="home-contact-map">
        <iframe
          src="https://www.google.com/maps?q=13.09403,80.1912417&z=17&output=embed"
          loading="lazy"
          title="Shainfotechnology Location"
        ></iframe>
      </div>
    </section>
  );
}

function FinalContactInfo() {
  return (
    <section className="final-contact-info">
      <h2>Ready to turn clicks into customers?</h2>

      <p className="final-inline">
        {/* <strong>93610 46387</strong> |{" "} */}
        {/* <strong>shainfotech05@gmail.com</strong> */}
      </p>

      <div className="final-cards">
        <div className="final-card">
          <span>Location</span>
          <a
            href="https://www.google.com/maps?q=13.09403,80.1912417"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        {/* <div className="final-card">
          <span>Phone</span>
          <strong>93610 46387</strong>
        </div> */}

        <div className="final-card">
          <span>Email</span>
          <strong>shainfotech05@gmail.com</strong>
        </div>
      </div>
    </section>
  );
}



export default function ShainfotechHome() {
  const headerRef = useRef(null);
//   function Contactsection() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(null);

//   useEffect(() => {
//     const css = `
//       .contact-wrapper{
//         min-height:100vh;
//         display:grid;
//         grid-template-columns:1fr 1fr;
//         gap:56px;
//         padding:72px 84px;
//         background:#E8E8E8;
//         font-family:Inter,system-ui;
//       }
//       .contact-title{font-size:48px;font-weight:900;}
//       .contact-form{
//         background:#fff;
//         padding:36px;
//         border-radius:18px;
//         box-shadow:0 24px 60px rgba(0,0,0,0.12);
//       }
//       .form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
//       .form-field{margin-bottom:18px;}
//       input,textarea{
//         width:100%;
//         padding:14px;
//         border-radius:10px;
//         border:1px solid #ccc;
//         font-size:15px;
//       }
//       .submit-btn{
//         width:100%;
//         background:#B90504;
//         color:#fff;
//         padding:16px;
//         border-radius:12px;
//         font-size:18px;
//         font-weight:800;
//         border:none;
//         cursor:pointer;
//       }
//       @media(max-width:768px){
//         .contact-wrapper{grid-template-columns:1fr;padding:40px 20px;}
//         .contact-title{font-size:30px;}
//       }
//     `;
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const res = await fetch("/.netlify/functions/send-enquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data?.success) {
//         setStatus({ ok: true, msg: "✅ Enquiry sent successfully!" });
//         setForm({
//           name: "",
//           phone: "",
//           email: "",
//           service: "",
//           message: "",
//         });
//       } else {
//         setStatus({ ok: false, msg: "❌ Failed to send enquiry" });
//       }
//     } catch {
//       setStatus({ ok: false, msg: "❌ Network error" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="contact-wrapper">
//       <div>
//         <h1 className="contact-title">
//           You’ve scrolled this far — let’s turn it into momentum.
//         </h1>
//       </div>

//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//           <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
//         </div>

//         <div className="form-field">
//           <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
//         </div>

//         <div className="form-field">
//           <input name="service" value={form.service} onChange={handleChange} placeholder="Service" />
//         </div>

//         <div className="form-field">
//           <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
//         </div>

//         <button className="submit-btn" type="submit" disabled={loading}>
//           {loading ? "Sending..." : "LET'S CONNECT"}
//         </button>

//         {status && (
//           <p style={{ marginTop: 10, color: status.ok ? "green" : "crimson" }}>
//             {status.msg}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }


 
  // ---------- GLOBAL HOME STYLES ----------
  useEffect(() => {
    const css = `
      :root{
        --home-grey:#E8E8E8;
        --home-red:#B90504;
        --home-aqua:#6CC4C1;
        --header-height:88px;
      }

      *{box-sizing:border-box;}
      html,body,#root{min-height:100%;}
      body{margin:0;overflow:auto;-webkit-font-smoothing:antialiased;background:var(--home-grey);}

      .sf-wrap{
        // min-height:100vh;
        background:var(--home-grey);
        color:#111;
        font-family:Inter, Roboto, Arial, sans-serif;
      }

      

      // .fullpage-wrapper{
      //   width:100%;
      //   display:block;
      //   padding-top:var(--header-height);
      // }
.gif-slide{
  margin-top: var(--header-height);
   background:#ffffff;
}

      // .section{
      //    min-height: calc(100vh - var(--header-height));
      //   display:flex;
      //   align-items:stretch;
      //   transition:background 260ms ease;
      // }
      .section{
  min-height: calc(100vh - var(--header-height));
  display:flex;
  align-items:stretch;
}


      .gif-slide{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#ffffff;
      }
        .gif-slide{
  background:#ffffff;
  margin:0;
}


      .content-slide{
        display:grid;
        grid-template-columns:1fr 1fr;
        width:100%;
        height:100%;
        background:#ffffff;
      }

      .content-left{
        padding:80px;
        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .content-left h2{
        font-size:56px;
        margin:0 0 18px 0;
        font-weight:800;
        color:#111;
        line-height:1.02;
      }

      .content-left p{
        color:#333;
        line-height:1.8;
        font-size:18px;
        max-width:720px;
      }

      .content-right{
        position:relative;
        padding:32px 20px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-left:6px solid var(--home-red);
        background:linear-gradient(135deg,#ffffff, #f6f6f6);
      }

      .content-right::before{
        content:"";
        position:absolute;
        inset:16px;
        border-radius:20px;
        border:1px dashed rgba(0,0,0,0.06);
        pointer-events:none;
      }

      .content-right .frame{
        z-index:2;
        width:92%;
        height:78%;
        background-image:url(${PANEL_IMAGE});
        background-size:cover;
        background-position:center;
        border-radius:18px;
        box-shadow:0 26px 70px rgba(0,0,0,0.25);
        transition:transform 260ms ease, box-shadow 260ms ease;
      }

      .content-right .frame:hover{
        transform:translateY(-10px) scale(1.03);
        box-shadow:0 34px 90px rgba(0,0,0,0.32);
      }

      .parallax-section{
        position:relative;
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        background:transparent;
      }

      .parallax-bg{
        position:absolute;
        inset:0;
        background-image:url('${PARALLAX_BG}');
        background-size:cover;
        background-position:center;
        opacity:1;
        pointer-events:none;
      }

      .parallax-content{
        position:relative;
        z-index:1;
        text-align:center;
        padding:120px 40px;
      }

      .parallax-title{
        font-size:44px;
        font-weight:800;
        color:white;
        line-height:1.05;
        max-width:1100px;
        margin:0 auto;
      }

      .parallax-sub{
        display:block;
        margin-top:14px;
        font-size:20px;
        font-weight:700;
        color:var(--home-red);
      }

      /* Contact + map (bottom) */
      .contact-section{
        padding:60px 28px;
        background:var(--home-grey);
        color:#111;
        display:flex;
        justify-content:center;
      }

      .contact-inner{
        max-width:1200px;
        width:100%;
        display:grid;
        grid-template-columns:1.1fr 0.9fr;
        gap:28px;
        align-items:start;
      }

      .contact-left{
        background:#ffffff;
        padding:28px;
        border-radius:16px;
        box-shadow:0 20px 60px rgba(0,0,0,0.12);
        border:1px solid rgba(0,0,0,0.06);
      }

      .contact-left h2{
        margin:0 0 10px 0;
        font-size:28px;
        font-weight:800;
      }

      .contact-lead{
        color:#444;
        line-height:1.7;
        margin:0 0 18px 0;
      }

      .contact-cards{
        display:flex;
        flex-wrap:wrap;
        gap:14px;
        margin-bottom:20px;
      }

      .c-card{
        padding:14px 16px;
        border-radius:12px;
        border:1px solid rgba(0,0,0,0.06);
        background:#fdfdfd;
        min-width:160px;
        box-shadow:0 10px 26px rgba(0,0,0,0.06);
        transition:transform 200ms ease, box-shadow 200ms ease;
      }

      .c-card:hover{
        transform:translateY(-6px);
        box-shadow:0 16px 40px rgba(0,0,0,0.12);
      }

      .c-card strong{
        font-size:12px;
        opacity:0.9;
        display:block;
        margin-bottom:6px;
      }

      .c-card a{
        color:var(--home-red);
        text-decoration:none;
        font-weight:700;
      }

      .services-label{
        font-weight:800;
        margin-bottom:10px;
        display:block;
      }

      .service-list{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
      }

      .service-pill{
        padding:8px 12px;
        border-radius:999px;
        border:1px solid rgba(0,0,0,0.08);
        background:#ffffff;
        font-size:14px;
        color:#333;
        font-weight:600;
        box-shadow:0 8px 20px rgba(0,0,0,0.06);
        transition:transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
      }

      .service-pill:hover{
        transform:translateY(-4px);
        background:var(--home-aqua);
        color:#111;
        box-shadow:0 16px 36px rgba(0,0,0,0.16);
      }

      .contact-right{
        position:relative;
        min-height:320px;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .map-card{
        position:relative;
        width:100%;
        height:100%;
        border-radius:16px;
        overflow:hidden;
        border:1px solid rgba(0,0,0,0.06);
        box-shadow:0 22px 70px rgba(0,0,0,0.18);
        background:#ffffff;
        transition:transform 220ms ease, box-shadow 220ms ease;
      }

      // .map-card iframe{
      //   width:100%;
      //   height:100%;
      //   min-height:320px;
      //   border:0;
      //   display:block;
      // }

      .contact-right:hover .map-card{
        transform:translateY(-8px);
        box-shadow:0 32px 90px rgba(0,0,0,0.24);
      }

      .map-overlay{
        position:absolute;
        right:18px;
        bottom:18px;
        z-index:4;
      }

      .map-overlay-inner{
        background:var(--home-red);
        color:#fff;
        padding:10px 14px;
        border-radius:10px;
        box-shadow:0 16px 36px rgba(185,5,4,0.5);
        font-weight:700;
      }

      .overlay-phone{
        font-size:14px;
        letter-spacing:0.6px;
      }

      .overlay-email{
        font-size:12px;
        opacity:0.95;
        margin-top:4px;
      }

      @media(max-width:1000px){
        :root{--header-height:74px;}
        .fullpage-wrapper{padding-top:var(--header-height);}
        .content-left{padding:36px;}
        .content-left h2{font-size:34px;}
        .content-left p{font-size:15px;}
        .content-slide{grid-template-columns:1fr;}
        .contact-inner{grid-template-columns:1fr;}
      }
        @media(max-width:768px){

  .contact-section{
    padding:40px 18px;
  }

  .contact-left{
    padding:22px;
    border-radius:14px;
  }

  .contact-left h2{
    font-size:22px;
  }

  .contact-lead{
    font-size:14px;
  }

  .contact-cards{
    gap:12px;
  }

  .c-card{
    width:100%;
  }

  .service-pill{
    font-size:13px;
    padding:7px 10px;
  }

  .contact-right{
    min-height:240px;
  }

  // .map-card iframe{
  //   min-height:240px;
  // }

  .map-overlay{
    right:12px;
    bottom:12px;
  }

  .map-overlay-inner{
    padding:8px 10px;
    font-size:12px;
  }
} /* ================= HOME CONTACT SLIDE ================= */

    // .home-contact-section{
    //   min-height:100vh;
    //   background:#E8E8E8;
    //   padding:70px 80px;
    //   display:grid;
    //   grid-template-columns:1fr 1fr;
    //   gap:40px;
    //   align-items:stretch;
    // }
/* ================= HOME CONTACT SECTION ================= */

// .home-contact-section{
//   background:#f1f1f1;
//   padding:80px 6vw;
//   display:grid;
//   grid-template-columns:1.2fr 0.8fr;
//   gap:48px;
//   align-items:start;
// }

/* LEFT – FORM */
.home-contact-form{
  background:#ffffff;
  border-radius:24px;
  padding:40px;
  box-shadow:0 20px 60px rgba(0,0,0,0.12);
}

/* Improve form usability */
.home-contact-form input,
.home-contact-form textarea{
  width:100%;
  padding:16px 18px;
  border-radius:12px;
  border:1px solid rgba(0,0,0,0.15);
  font-size:16px;
}

.home-contact-form textarea{
  min-height:140px;
}

.home-contact-form button{
  margin-top:12px;
  padding:16px;
  font-size:18px;
  font-weight:800;
  border-radius:14px;
}

/* RIGHT – MAP ONLY */
.home-contact-map{
  background:#ffffff;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 18px 50px rgba(0,0,0,0.15);
}

// .home-contact-map iframe{
//   width:100%;
//   height:360px;
//   border:0;
// }

/* ================= MOBILE ================= */
@media(max-width:768px){
  // .home-contact-section{
  //   grid-template-columns:1fr;
  //   padding:60px 20px;
  //   gap:32px;
  // }

  .home-contact-form{
    padding:28px;
    border-radius:18px;
  }

  .home-contact-form input,
  .home-contact-form textarea{
    font-size:15px;
    padding:14px 16px;
  }

  // .home-contact-map iframe{
  //   height:240px;
  // }
}

    // .home-contact-form{
    //   background:#fff;
    //   border-radius:20px;
    //   padding:10px;
    //   box-shadow:0 20px 60px rgba(0,0,0,0.12);
    // }

    // .home-contact-map{
    //   background:#fff;
    //   border-radius:20px;
    //   overflow:hidden;
    //   box-shadow:0 20px 60px rgba(0,0,0,0.12);
    // }
/* ================= FINAL CONTACT SLIDE ================= */

// .home-contact-section{
//   min-height:100vh;
//   background:#ffffff;
//   display:grid;
//   grid-template-columns:1.4fr 1fr; /* FORM BIGGER */
//   width:100%;
// }
.home-contact-form{
  width:100%;
  padding:80px 120px;   /* WIDE FORM */
  background:#ffffff;
}
  .home-contact-form .contact-section{
  padding:0 !important;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100% !important;
}
@media(max-width:768px){
  // .home-contact-section{
  //   grid-template-columns:1fr;
  // }

  .home-contact-form{
    padding:40px 20px;
  }
}

.home-contact-form{
  width:100%;
  max-width:100%;
  padding:60px;
  background:#ffffff;
  display:flex;
}

/* FORCE CONTACT FORM FULL WIDTH */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100%;
  grid-template-columns:1fr !important; /* REMOVE LEFT EMPTY COLUMN */
}

.home-contact-form .contact-right{
  width:100%;
  padding:0;
  box-shadow:none;
  border-radius:0;
}
  @media(max-width:768px){
  .home-contact-form{
    padding:24px 16px;
  }
}


.home-contact-map{
  background:#ffffff;
}

// .home-contact-map iframe{
//   width:100%;
//   height:100%;
//   min-height:100vh;
//   border:0;
// }
.home-contact-form .map-card{
  display:none;
}

/* ===== MOBILE ===== */
@media(max-width:768px){
//  .home-contact-section{ 
//     grid-template-columns:1fr;
//   }

  .home-contact-form{
    padding:40px 20px;
  }

  // .home-contact-map iframe{
  //   min-height:300px;
  // }
}

    // .home-contact-map iframe{
    //   width:100%;
    //   height:100%;
    //   min-height:420px;
    //   border:0;
    // }

    @media(max-width:768px){
      // .home-contact-section{
      //   grid-template-columns:1fr;
      //   padding:40px 18px;
      // }

      // .home-contact-map iframe{
      //   min-height:260px;
      // }
    }
/* ================= FINAL CONTACT INFO SLIDE ================= */

// .final-contact-info{
//   min-height:70vh;
//   background:#E8E8E8;
//   padding:90px 80px;
//   text-align:center;
//   font-family:Inter,system-ui;
// }

// .final-contact-info h2{
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#111;
// }

// .final-inline{
//   font-size:18px;
//   margin-bottom:40px;
//   color:#333;
// }

// .final-cards{
//   max-width:900px;
//   margin:0 auto;
//   display:grid;
//   grid-template-columns:repeat(3,1fr);
//   gap:24px;
// }

// .final-card{
//   background:#fff;
//   padding:26px 22px;
//   border-radius:16px;
//   box-shadow:0 16px 40px rgba(0,0,0,0.12);
// }

// .final-card span{
//   display:block;
//   font-size:13px;
//   opacity:0.7;
//   margin-bottom:8px;
// }

// .final-card a{
//   color:#B90504;
//   font-weight:800;
//   text-decoration:none;
// }

// .final-card strong{
//   font-size:16px;
// }

// /* MOBILE */
// @media(max-width:768px){
//   .final-contact-info{
//     padding:60px 20px;
//     text-align:left;
//   }

//   .final-contact-info h2{
//     font-size:28px;
//   }

//   .final-cards{
//     grid-template-columns:1fr;
//   }
// }
/* ================= FINAL CONTACT INFO SLIDE (CENTER FIX) ================= */

.final-contact-info{
  min-height:70vh;
  background:#E8E8E8;
  padding:90px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-family:Inter,system-ui;
}

.final-contact-info h2{
  font-size:42px;
  font-weight:900;
  margin-bottom:40px;
  color:#111;
  max-width:900px;
}

.final-cards{
  display:flex;
  gap:32px;
  justify-content:center;
  align-items:stretch;
  flex-wrap:wrap;
}

.final-card{
  background:#fff;
  width:280px;
  padding:28px 24px;
  border-radius:18px;
  box-shadow:0 18px 50px rgba(185,5,4,0.28);
  text-align:center;
}

.final-card span{
  display:block;
  font-size:13px;
  opacity:0.7;
  margin-bottom:10px;
  letter-spacing:0.08em;
  text-transform:uppercase;
}

.final-card a{
  color:#B90504;
  font-weight:800;
  text-decoration:none;
  font-size:16px;
}

.final-card strong{
  font-size:16px;
  font-weight:800;
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .final-contact-info{
    padding:60px 20px;
  }

  .final-contact-info h2{
    font-size:28px;
    margin-bottom:28px;
  }

  .final-cards{
    flex-direction:column;
    gap:20px;
  }

  .final-card{
    width:100%;
    max-width:360px;
  }
}

  /* ================= HOME CONTACT LAYOUT (STEP 2) ================= */

// .home-contact-section{
//   min-height:100vh;
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   background:#f1f1f1;
// }

/* LEFT — FORM FULL WIDTH */
.home-contact-form{
  padding:80px 90px;
  background:#ffffff;
  display:flex;
  align-items:center;
}

/* FORCE CONTACT FORM FULL WIDTH */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;
  width:100%;
  margin:0;
  display:block;
}

.home-contact-form .contact-right{
  width:100%;
  padding:0;
  box-shadow:none;
  border-radius:0;
}

/* HIDE MAP INSIDE CONTACT */
.home-contact-form .map-card{
  display:none;
}

/* RIGHT — MAP */
.home-contact-map{
  display:flex;
  align-items:center;
  justify-content:center;
}

// .home-contact-map iframe{
//   width:90%;
//   height:80%;
//   min-height:520px;
//   border-radius:24px;
//   box-shadow:0 30px 80px rgba(0,0,0,0.25);
//   border:0;
// }

/* MOBILE */
@media(max-width:768px){
  // .home-contact-section{
  //   grid-template-columns:1fr;
  // }

  .home-contact-form{
    padding:40px 20px;
  }

  // .home-contact-map iframe{
  //   width:100%;
  //   height:260px;
  //   min-height:260px;
  //   border-radius:18px;
  // }
}


/* ================= FORCE FULL-WIDTH CONTACT FORM (HOME ONLY) ================= */

/* Remove Contact.jsx width restriction */
.home-contact-form .contact-section{
  padding:0 !important;
  background:transparent;
}

.home-contact-form .contact-inner{
  max-width:100% !important;   /* 🔥 KEY FIX */
  width:100%;
  margin:0;
  display:block;               /* remove grid */
}

/* Make form fill entire left column */
.home-contact-form .contact-right{
  width:100%;
  padding:0;
  border-radius:0;
  box-shadow:none;
  background:transparent;
}

/* Form fields stretch edge to edge */
.home-contact-form .contact-form{
  width:500px;
}

.home-contact-form input,
.home-contact-form textarea{
  width:100%;
}

/* Hide internal map from Contact.jsx */
.home-contact-form .map-card{
  display:none;
}
  /* ================= HERO LAYOUT ================= */

.hero-wrap{
  width:100%;
  max-width:1400px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 1fr;   /* LEFT CONTENT | RIGHT IMAGE */
  align-items:center;
  gap:60px;
  padding:80px 60px;
}

.hero-content{
  order:1;
}

.hero-image-wrap{
  order:2;
  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-image{
  width:420px;
  max-width:100%;
  height:auto;
}

/* ================= MOBILE VIEW ================= */
@media (max-width:768px){

  .hero-wrap{
    grid-template-columns:1fr;   /* STACK */
    padding:40px 20px;
    text-align:center;
  }

  .hero-image-wrap{
    order:1;   /* IMAGE FIRST */
  }

  .hero-content{
    order:2;   /* CONTENT BELOW */
  }

  .hero-image{
    width:220px;
    margin-bottom:20px;
  }

  .hero-content h1{
    font-size:28px !important;
  }

  .hero-content p{
    font-size:15px;
    line-height:1.6;
  }
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

/* ================= GLOBAL RED SHADOWS ================= */

/* Cards, forms, containers */
.home-contact-form,
.contact-right,
.contact-left,
.c-card,
.service-pill,
.final-card,
.svc-card,
.svc-plan-card,
.svc-step,
.svc-hero-card {
  box-shadow: 0 20px 60px rgba(185, 5, 4, 0.25) !important;
}

/* Hover stronger red shadow */
.home-contact-form:hover,
.c-card:hover,
.final-card:hover,
.svc-card:hover,
.svc-plan-card:hover,
.svc-step:hover {
  box-shadow: 0 30px 90px rgba(185, 5, 4, 0.45) !important;
}

/* Hero image / GIF */
// .hero-image,
// .hero-image-wrap img {
//   box-shadow: 0 30px 80px rgba(185, 5, 4, 0.35);
//   border-radius: 20px;
// }

/* Map iframe */
// .home-contact-map iframe,
// .map-card iframe {
//   box-shadow: 0 30px 80px rgba(185, 5, 4, 0.35);
//   border-radius: 20px;
// }

/* ================= CLEAN HOME MAP (FINAL FIX) ================= */

.home-contact-section{
  display:grid;
  grid-template-columns:1.2fr 0.8fr;
  gap:48px;
  padding:80px 6vw;
  background:#f1f1f1;
}

/* LEFT FORM */
.home-contact-form{
  background:#ffffff;
  padding:60px;
  border-radius:24px;
}

/* RIGHT MAP */
.home-contact-map{
  background:#ffffff;
  border-radius:24px;
  overflow:hidden;
  box-shadow:0 30px 80px rgba(185,5,4,0.35);
}

.home-contact-map iframe{
  width:100%;
  height:100%;
  min-height:420px;
  border:0;
  display:block;
}

/* MOBILE */
@media(max-width:768px){
  .home-contact-section{
    grid-template-columns:1fr;
    padding:60px 20px;
  }

  .home-contact-map iframe{
    min-height:260px;
  }
}

/* Buttons */
button,
.submit-btn,
.pre-contact-btn {
  box-shadow: 0 16px 40px rgba(185, 5, 4, 0.45);
}

button:hover,
.submit-btn:hover,
.pre-contact-btn:hover {
  box-shadow: 0 26px 70px rgba(185, 5, 4, 0.6);
}

/* Inputs focus glow */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(185, 5, 4, 0.35),
              0 12px 30px rgba(185, 5, 4, 0.25);
  border-color: #B90504;
}

/* Header logo mark */
/* Header logo mark – NO SHADOW */
.mark{
  box-shadow:none !important;
}



/* ================= USER-FRIENDLY TYPOGRAPHY (HOME PAGE) ================= */

/* Base text */
.sf-wrap{
  font-size:16px;
  line-height:1.75;
  letter-spacing:0.2px;
}

/* Hero title */
.hero-content h1{
  font-weight:800;
}

/* Hero paragraph */
.hero-content p{
  font-weight:500;
}

/* Section headings */
.content-left h2,
.parallax-title,
.final-contact-info h2{
  font-weight:800;
}

/* Paragraphs */
.content-left p,
.stagger-para,
.parallax-title,
.final-inline{
  font-weight:500;
}

/* Contact form text */
.home-contact-form input,
.home-contact-form textarea{
  font-weight:500;
}

.home-contact-form button{
  font-weight:800;
}

/* Cards & labels */
.c-card strong,
.final-card strong{
  font-weight:700;
}

/* ================= MOBILE ================= */
@media(max-width:768px){

  .hero-content h1{
    font-weight:800;
  }

  .hero-content p,
  .content-left p{
    font-weight:500;
  }

}



    `;

    const prev = document.getElementById("shainfotech-fullpage-styles");
    if (prev) prev.remove();
    const style = document.createElement("style");
    style.id = "shainfotech-fullpage-styles";
    style.innerHTML = css;
    document.head.appendChild(style);

    const setHeaderHeightVar = () => {
      const el = document.querySelector(".sf-header-inner");
      if (!el) return;
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--header-height",
        `${Math.ceil(h)}px`
      );
    };
    setHeaderHeightVar();
    window.addEventListener("resize", setHeaderHeightVar);

    return () => {
      const el = document.getElementById("shainfotech-fullpage-styles");
      if (el) el.remove();
      window.removeEventListener("resize", setHeaderHeightVar);
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y > 28) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".parallax-section");
    const bg = document.querySelector(".parallax-section .parallax-bg");
    if (!section || !bg) return;

    const applyBgTransform = (baseTranslateY = 0, pointerX = 0, pointerY = 0) => {
      bg.style.transform = `translate3d(${pointerX}px, ${
        baseTranslateY + pointerY
      }px, 0)`;
    };

    const handleParallax = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max(1 - rect.top / vh, 0), 1);
      const translateY = (progress * 30 - 15) / 2;
      bg.dataset.baseTranslate = String(translateY);
      applyBgTransform(translateY, 0, 0);
    };

    const handlePointer = (e) => {
      const xx = (e.clientX / window.innerWidth - 0.5) * 12;
      const yy = (e.clientY / window.innerHeight - 0.5) * 8;
      const base = parseFloat(bg.dataset.baseTranslate || "0");
      applyBgTransform(base, xx, yy);
    };

    handleParallax();
    window.addEventListener("scroll", handleParallax, { passive: true });
    window.addEventListener("mousemove", handlePointer);
    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("mousemove", handlePointer);
    };
  }, []);

  return (
    <div className="sf-wrap">
      {/* <header ref={headerRef} className="sf-header">
        <div className="sf-header-inner">
          <div style={{ width: 120 }} /> */}
          {/* <nav className="sf-nav" aria-label="Main navigation">
            <Link to="/" className="nav-btn">
              Home
            </Link>
            <Link to="/about" className="nav-btn">
              About Us
            </Link>
            <Link to="/services" className="nav-btn">
              Services
            </Link>
            
             <Link to="/contact" className="nav-btn">
              Contact
            </Link>
          </nav> */}
          {/* <div className="sf-logo">
            <div className="mark">S</div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800 }}>Shainfotechnology</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>
                Digital Marketing
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </header> */}

      <div className="fullpage-wrapper">
        {/* Section 1 - GIF + intro */}
        <section className="section gif-slide">
          <div className="hero-wrap">

<div className="hero-image-wrap">
              <img src="/shalog.gif"
  alt="Shainfotech Intro Animation"
  className="hero-image"
/>

            </div>

<div className="hero-content">
                <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  marginBottom: "20px",
                  color: "#111",
                }}
              >
                SHA Infotechnology
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.7",
                  color: "#333",
                }}
              >
                SHA Infotechnology is a modern Digital Marketing and Software
                Development agency helping businesses grow with technology-driven
                solutions. We specialize in SEO, website development, and mobile app
                development to boost your online presence and generate high-quality
                leads.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Content */}
        <section className="section content-slide">
          <div className="content-left">
            <h2 className="stagger-head">
              Leading Digital Marketing &amp; IT Solutions Company
            </h2>
            <p className="stagger-para">
              Backed by strong industry experience and a proven track record of
              delivering successful results, Sha Infotechnology is recognized as a
              trusted provider of Digital Marketing and IT services. We offer a
              complete suite of solutions including SEO, Social Media Marketing,
              Website Development, Mobile App Development, and Custom Software
              Development to help businesses grow online. At Sha Infotechnology, we
              believe in partnership over service — working together to build, scale,
              and achieve long-term digital success.
            </p>
          </div>

          <div className="content-right">
            <div className="frame" />
          </div>
        </section>

        {/* Section 3 - Parallax quote */}
        <section className="section parallax-section">
          <div className="parallax-bg" />
          <div className="parallax-content">
            <h1 className="parallax-title">
              Beautiful things happen in business when people come together, share
              their strengths, and build a future that no single person could create
              alone.
              <span className="parallax-sub">We grow when we grow together.</span>
            </h1>
          </div>
        </section>

        {/* Floating contact form section */}
        {/* <Contactsection /> */}
        <HomeContactSection />
        <FinalContactInfo />
{/* <PreContactForm /> */}
        {/* Contact + Map section (last) */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}
