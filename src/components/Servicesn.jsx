import { useParams } from "react-router-dom";

// SEO
import {
  SEOHero,
  SecondSlideSEO,
  ServicesGridSEO
} from "./service/seo";

const SERVICE_MAP = {
  seo: {
    hero: SEOHero,
    second: SecondSlideSEO,
    grid: ServicesGridSEO
  }
  };
  export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_MAP[slug];

  if (!service) return null;

  return (
    <>
      <service.hero />
      <service.second />
      <service.grid />
    </>
  );
}




// useEffect(() => {
//     const css = `

//     :root{
//   --bg-dark:#020617;
//   --bg-dark-2:#0b1220;

//   --violet:#8b5cf6;
//   --pink:#ec4899;

//   --text-main:#ffffff;
//   --text-muted:#9ca3af;

//   --card-white:#ffffff;
// }

//       :root{
//         --home-grey:#E8E8E8;
//         --home-red:#B90504;
//         --home-aqua:#6CC4C1;
//         --header-height:88px;
//       }
//         /* =====================================================
//    🔥 GLOBAL HOVER INTERACTIONS – DARK THEME
//   //  ===================================================== */
// /* ================= GLOBAL TEXT HOVER – RED + GRADIENT ================= */

// /* Brand red */
// :root{
//   --brand-red:#B90504;
//   --hover-grad:linear-gradient(90deg,#B90504,#ff4d4d,#ff7a7a);
// }

// /* Headings */
// h1, h2, h3, h4, h5, h6{
//   transition:
//     transform 0.25s ease,
//     text-shadow 0.25s ease;
// }

// /* Gradient hover for headings */
// h1:hover,
// h2:hover,
// h3:hover,
// h4:hover,
// h5:hover,
// h6:hover{
//   background:var(--hover-grad);
//   -webkit-background-clip:text;
//   background-clip:text;
//   -webkit-text-fill-color:transparent;
//   transform:translateY(-2px);
//   text-shadow:0 0 10px rgba(185,5,4,0.35);
// }

// /* Paragraphs, spans, list items */
// p,
// span,
// li,
// small{
//   transition:
//     color 0.25s ease,
//     text-shadow 0.25s ease;
// }

// /* Red hover for body text */
// p:hover,
// span:hover,
// li:hover,
// small:hover{
//   color:var(--brand-red) !important;
//   text-shadow:0 0 6px rgba(185,5,4,0.35);
// }

// /* Links – gradient */
// a{
//   transition:
//     transform 0.25s ease,
//     text-shadow 0.25s ease;
// }

// a:hover{
//   background:var(--hover-grad);
//   -webkit-background-clip:text;
//   background-clip:text;
//   -webkit-text-fill-color:transparent;
//   text-shadow:0 0 8px rgba(185,5,4,0.45);
//   transform:translateY(-1px);
// }

// /* Mobile safety – disable hover effects */
// @media (hover:none){
//   h1:hover,
//   h2:hover,
//   h3:hover,
//   h4:hover,
//   h5:hover,
//   h6:hover,
//   p:hover,
//   span:hover,
//   li:hover,
//   small:hover,
//   a:hover{
//     background:none !important;
//     -webkit-text-fill-color:initial !important;
//     color:inherit !important;
//     transform:none !important;
//     text-shadow:none !important;
//   }
// }

// /* ===== GLOBAL BACKGROUND (GRADIENT ONLY) ===== */
// html,
// body,
// #root,
// .sf-wrap,
// .section,
// .gif-slide,
// .content-slide,
// .parallax-section,
// .home-contact-section,
// .final-contact-info {
//   background: radial-gradient(circle at top, #0b1220, #020617 70%) !important;
// }

// /* ---------- HEADINGS HOVER ---------- */
// h1, h2, h3, h4{
//   transition: color 0.3s ease, transform 0.3s ease;
// }

// h1:hover,
// h2:hover,
// h3:hover{
//   color: var(--red);
//   transform: translateY(-2px);
// }

// /* ---------- PARAGRAPH HOVER (SUBTLE) ---------- */
// p{
//   transition: color 0.25s ease;
// }

// p:hover{
//   color: #ffffff;
// }

// /* ---------- LINKS ---------- */
// a{
//   position: relative;
//   transition: color 0.3s ease;
// }

// a:hover{
//   color: var(--red);
// }

// a::after{
//   content:"";
//   position:absolute;
//   left:0;
//   bottom:-4px;
//   width:0;
//   height:2px;
//   background:var(--red);
//   transition:width 0.3s ease;
// }

// a:hover::after{
//   width:100%;
// }

// /* ---------- BUTTONS / CTA ---------- */
// button,
// .submit-btn,
// .pre-contact-btn{
//   transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
// }

// button:hover,
// .submit-btn:hover,
// .pre-contact-btn:hover{
//   transform: translateY(-4px) scale(1.04);
//   background: #a00403;
//   box-shadow: 0 28px 75px rgba(185,5,4,0.65);
// }

// /* ---------- CARDS ---------- */
// // .c-card,
// // .final-card,
// // .contact-left,
// // .home-contact-form{
// //   transition: transform 0.35s ease, box-shadow 0.35s ease;
// // }
// .c-card,
// .final-card,
// .contact-left,
// .home-contact-form {
//   background: rgba(20, 24, 40, 0.9);
//   backdrop-filter: blur(8px);
// }

// .sf-wrap p,
// .sf-wrap span,
// .sf-wrap li {
//   color: #cfcfcf;
// }

// .sf-wrap h1,
// .sf-wrap h2,
// .sf-wrap h3,
// .sf-wrap h4 {
//   color: #B90504;
// }

// .c-card:hover,
// .final-card:hover,
// .contact-left:hover{
//   transform: scale(1.04);
//   box-shadow: 0 30px 90px rgba(185,5,4,0.45);
// }

// /* ---------- SERVICE PILLS ---------- */
// .service-pill{
//   transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
// }

// .service-pill:hover{
//   transform: translateY(-4px);
//   background: var(--red);
//   color:#ffffff !important;
//   box-shadow: 0 16px 40px rgba(185,5,4,0.55);
// }

// /* ---------- FORM INPUTS ---------- */
// input,
// textarea{
//   transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
// }

// input:hover,
// textarea:hover{
//   transform: translateY(-2px);
// }

// input:focus,
// textarea:focus{
//   border-color: var(--red);
//   box-shadow: 0 0 0 2px rgba(185,5,4,0.35),
//               0 12px 30px rgba(185,5,4,0.25);
// }

// /* ---------- HERO IMAGE ---------- */
// .hero-image{
//   transition: transform 0.4s ease, box-shadow 0.4s ease;
// }

// .hero-image:hover{
//   transform: scale(1.06);
//   box-shadow: 0 30px 80px rgba(185,5,4,0.45);
// }

// /* ---------- CONTENT FRAME ---------- */
// .content-right .frame{
//   transition: transform 0.35s ease, box-shadow 0.35s ease;
// }

// .content-right .frame:hover{
//   transform: translateY(-10px) scale(1.05);
//   box-shadow: 0 40px 100px rgba(185,5,4,0.5);
// }
// /* ================= IMAGE REPLACEMENT ================= */

// .content-right.image-replacement{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:40px;
//   border-left:6px solid var(--home-red);
// }

// .content-image{
//   width:100%;
//   max-width:520px;
//   border-radius:18px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
//   transition:transform 0.4s ease, box-shadow 0.4s ease;
// }

// .content-image:hover{
//   transform:scale(1.05);
//   box-shadow:0 40px 120px rgba(185,5,4,0.65);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .content-image{
//     max-width:320px;
//   }
// }

// /* ---------- FINAL CTA ---------- */
// .final-contact-info:hover h2{
//   color: var(--red);
//   transform: scale(1.02);
// }

//         /* ================= GOOGLE FONTS ================= */
// /* ================= GOOGLE FONTS ================= */
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

// /* ================= DARK THEME SYSTEM ================= */
// :root{
//   --bg-main:#0b0b0b;
//   --bg-card:#141414;
//   --red:#B90504;
//   --text-main:#ffffff;
//   --text-muted:#cfcfcf;
// }


// /* Force dark background */
// body,
// .sf-wrap{
//   // background:var(--bg-main);
//   color:var(--text-main);
//   font-family:'Inter', system-ui, sans-serif;
// }

// /* ================= HEADLINES ================= */
// h1, h2, h3{
//   font-family:'Poppins', sans-serif;
//   font-weight:800;
//   color:var(--red);
// }

// /* ================= BODY TEXT ================= */
// p, span, li{
//   color:var(--text-muted);
//   font-family:'Inter', sans-serif;
// }


//       *{box-sizing:border-box;}
//       html,body,#root{min-height:100%;}
//       // body{margin:0;overflow:auto;-webkit-font-smoothing:antialiased;background:var(--home-grey);}

     

//       body,
// .sf-wrap{
//   margin:0;
//   overflow:auto;
//   // background:var(--bg-main);
//   color:var(--text-main);
//   font-family:'Open Sans', system-ui, sans-serif;
// }

      

   
// .gif-slide{
//   margin-top: var(--header-height);
//    background: radial-gradient(circle at top, #0b1220, #020617 70%);
// }

      
//       .section{
//   min-height: calc(100vh - var(--header-height));
//   display:flex;
//   align-items:stretch;
// }


//       .gif-slide{
//         width:100%;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//     //  background:var(--bg-card);
//       }
//         .gif-slide{
// // background:var(--bg-card);
//   margin:0;
// }


//       .content-slide{
//         display:grid;
//         grid-template-columns:1fr 1fr;
//         width:100%;
//         height:100%;
//          background: radial-gradient(circle at top, #0b1220, #020617 70%);
//       }

//       .content-left{
//         padding:80px;
//         display:flex;
//         flex-direction:column;
//         justify-content:center;
//       }

//       .content-left h2{
//         font-size:56px;
//         margin:0 0 18px 0;
//         font-weight:800;
//         // color:#111;
//         line-height:1.02;
//       }

//       .content-left p{
//         // color:#333;
//         line-height:1.8;
//         font-size:18px;
//         max-width:720px;
//       }
//         p,
// .stagger-para,
// .contact-lead,
// .final-inline{
//   color:var(--text-muted);
//   font-family:'Open Sans', sans-serif;
//   line-height:1.75;
// }


//       .content-right{
//         position:relative;
//         padding:32px 20px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         border-left:6px solid var(--home-red);
//         background:linear-gradient(135deg,#ffffff, #f6f6f6);
//       }

//       .content-right::before{
//         content:"";
//         position:absolute;
//         inset:16px;
//         border-radius:20px;
//         border:1px dashed rgba(0,0,0,0.06);
//         pointer-events:none;
//       }

//       .content-right .frame{
//         z-index:2;
//         width:92%;
//         height:78%;
//         background-image:url(${PANEL_IMAGE});
//         background-size:cover;
//         background-position:center;
//         border-radius:18px;
//         box-shadow:0 26px 70px rgba(0,0,0,0.25);
//         transition:transform 260ms ease, box-shadow 260ms ease;
//       }

//       .content-right .frame:hover{
//         transform:translateY(-10px) scale(1.03);
//         box-shadow:0 34px 90px rgba(0,0,0,0.32);
//       }

//       .parallax-section{
//         position:relative;
//         // min-height:100vh;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         overflow:hidden;
//         background:transparent;
//       }

//       .section,
// .single-red-slide,
// .process-wrap,
// .pc-wrap,
// .home-faq-wrap{
//   padding:80px 6vw;
//   margin:0;
// }
// @media(max-width:768px){
//   .section,
//   .single-red-slide,
//   .process-wrap,
//   .pc-wrap,
//   .home-faq-wrap{
//     padding:60px 20px;
//   }
// }

// .c-card,
// .final-card,
// .contact-left,
// .home-contact-form{
//   // background:var(--bg-card);
//   border-radius:22px;
//   transition:transform 0.3s ease, box-shadow 0.3s ease;
// }
// .c-card,
// .final-card,
// .contact-left,
// .home-contact-form {
//   background: rgba(20, 20, 30, 0.9);
//   backdrop-filter: blur(6px);
// }

// .c-card:hover,
// .final-card:hover{
//   transform:scale(1.03);
//   box-shadow:0 30px 80px rgba(185,5,4,0.45);
// }

// button,
// .submit-btn{
//   background:var(--red);
//   color:#fff;
//   font-family:'Montserrat', sans-serif;
//   font-weight:700;
//   border:none;
//   border-radius:14px;
//   padding:16px 28px;
//   cursor:pointer;
//   transition:all 0.3s ease;
//   box-shadow:0 18px 45px rgba(185,5,4,0.45);
// }

// button:hover,
// .submit-btn:hover{
//   transform:translateY(-4px);
//   box-shadow:0 28px 75px rgba(185,5,4,0.65);
// }
// a{
//   color:var(--red);
//   font-weight:600;
//   text-decoration:none;
//   position:relative;
// }

// a::after{
//   content:"";
//   position:absolute;
//   left:0;
//   bottom:-4px;
//   width:0;
//   height:2px;
//   background:var(--red);
//   transition:width 0.3s ease;
// }

// a:hover::after{
//   width:100%;
// }
// input,
// textarea{
//   background:#0f0f0f;
//   color:#ffffff;
//   border:1px solid rgba(255,255,255,0.2);
// }

// input::placeholder,
// textarea::placeholder{
//   color:#9a9a9a;
// }

//       .parallax-bg{
//         position:absolute;
//         inset:0;
//         background-image:url('${PARALLAX_BG}');
//         background-size:cover;
//         background-position:center;
//         opacity:1;
//         pointer-events:none;
//       }

//       .parallax-content{
//         position:relative;
//         z-index:1;
//         text-align:center;
//         padding:120px 40px;
//       }

//       .parallax-title{
//         font-size:44px;
//         font-weight:800;
//         color:white;
//         line-height:1.05;
//         max-width:1100px;
//         margin:0 auto;
//       }

//       .parallax-sub{
//         display:block;
//         margin-top:14px;
//         font-size:20px;
//         font-weight:700;
//         color:var(--home-red);
//       }

//       /* Contact + map (bottom) */
//       .contact-section{
//         padding:60px 28px;
//         background:var(--home-grey);
//         color:#111;
//         display:flex;
//         justify-content:center;
//       }
// h1, h2, h3, h4{
//   font-family:'Montserrat', sans-serif;
//   font-weight:800;
//   color:var(--text-main);
//   transition:color 0.3s ease;
// }

// h1:hover,
// h2:hover{
//   color:var(--red);
// }

//       .contact-inner{
//         max-width:1200px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr 0.9fr;
//         gap:28px;
//         align-items:start;
//       }

//       .contact-left{
//       // background:var(--bg-card);

//         padding:28px;
//         border-radius:16px;
//         box-shadow:0 20px 60px rgba(0,0,0,0.12);
//         border:1px solid rgba(0,0,0,0.06);
//       }

//       .contact-left h2{
//         margin:0 0 10px 0;
//         font-size:28px;
//         font-weight:800;
//       }

//       .contact-lead{
//         color:#444;
//         line-height:1.7;
//         margin:0 0 18px 0;
//       }

//       .contact-cards{
//         display:flex;
//         flex-wrap:wrap;
//         gap:14px;
//         margin-bottom:20px;
//       }

//       .c-card{
//         padding:14px 16px;
//         border-radius:12px;
//         border:1px solid rgba(0,0,0,0.06);
//         background:#fdfdfd;
//         min-width:160px;
//         box-shadow:0 10px 26px rgba(0,0,0,0.06);
//         transition:transform 200ms ease, box-shadow 200ms ease;
//       }

//       .c-card:hover{
//         transform:translateY(-6px);
//         box-shadow:0 16px 40px rgba(0,0,0,0.12);
//       }

//       .c-card strong{
//         font-size:12px;
//         opacity:0.9;
//         display:block;
//         margin-bottom:6px;
//       }

//       .c-card a{
//         color:var(--home-red);
//         text-decoration:none;
//         font-weight:700;
//       }

//       .services-label{
//         font-weight:800;
//         margin-bottom:10px;
//         display:block;
//       }

//       .service-list{
//         display:flex;
//         flex-wrap:wrap;
//         gap:10px;
//       }

//       .service-pill{
//         padding:8px 12px;
//         border-radius:999px;
//         border:1px solid rgba(0,0,0,0.08);
//         // background:var(--bg-card);
//         font-size:14px;
//         color:#333;
//         font-weight:600;
//         box-shadow:0 8px 20px rgba(0,0,0,0.06);
//         transition:transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
//       }

//       .service-pill:hover{
//         transform:translateY(-4px);
//         background:var(--home-aqua);
//         color:#111;
//         box-shadow:0 16px 36px rgba(0,0,0,0.16);
//       }

//       .contact-right{
//         position:relative;
//         min-height:320px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .map-card{
//         position:relative;
//         width:100%;
//         height:100%;
//         border-radius:16px;
//         overflow:hidden;
//         border:1px solid rgba(0,0,0,0.06);
//         box-shadow:0 22px 70px rgba(0,0,0,0.18);
//       //  background:var(--bg-card);
//         transition:transform 220ms ease, box-shadow 220ms ease;
//       }

//       // .map-card iframe{
//       //   width:100%;
//       //   height:100%;
//       //   min-height:320px;
//       //   border:0;
//       //   display:block;
//       // }

//       .contact-right:hover .map-card{
//         transform:translateY(-8px);
//         box-shadow:0 32px 90px rgba(0,0,0,0.24);
//       }

//       .map-overlay{
//         position:absolute;
//         right:18px;
//         bottom:18px;
//         z-index:4;
//       }

//       .map-overlay-inner{
//         background:var(--home-red);
//         color:#fff;
//         padding:10px 14px;
//         border-radius:10px;
//         box-shadow:0 16px 36px rgba(185,5,4,0.5);
//         font-weight:700;
//       }

//       .overlay-phone{
//         font-size:14px;
//         letter-spacing:0.6px;
//       }

//       .overlay-email{
//         font-size:12px;
//         opacity:0.95;
//         margin-top:4px;
//       }

//       @media(max-width:1000px){
//         :root{--header-height:74px;}
//         .fullpage-wrapper{padding-top:var(--header-height);}
//         .content-left{padding:36px;}
//         .content-left h2{font-size:34px;}
//         .content-left p{font-size:15px;}
//         .content-slide{grid-template-columns:1fr;}
//         .contact-inner{grid-template-columns:1fr;}
//       }
//         @media(max-width:768px){

//   .contact-section{
//     padding:40px 18px;
//   }

//   .contact-left{
//     padding:22px;
//     border-radius:14px;
//   }

//   .contact-left h2{
//     font-size:22px;
//   }

//   .contact-lead{
//     font-size:14px;
//   }

//   .contact-cards{
//     gap:12px;
//   }

//   .c-card{
//     width:100%;
//   }

//   .service-pill{
//     font-size:13px;
//     padding:7px 10px;
//   }

//   .contact-right{
//     min-height:240px;
//   }


//   .map-overlay{
//     right:12px;
//     bottom:12px;
//   }

//   .map-overlay-inner{
//     padding:8px 10px;
//     font-size:12px;
//   }
// } /* ================= HOME CONTACT SLIDE ================= */

    

// /* LEFT – FORM */
// .home-contact-form{
// // background:var(--bg-card);
//   border-radius:24px;
//   padding:40px;
//   box-shadow:0 20px 60px rgba(0,0,0,0.12);
// }

// /* Improve form usability */
// .home-contact-form input,
// .home-contact-form textarea{
//   width:100%;
//   padding:16px 18px;
//   border-radius:12px;
//   border:1px solid rgba(0,0,0,0.15);
//   font-size:16px;
// }

// .home-contact-form textarea{
//   min-height:140px;
// }

// .home-contact-form button{
//   margin-top:12px;
//   padding:16px;
//   font-size:18px;
//   font-weight:800;
//   border-radius:14px;
// }

// /* RIGHT – MAP ONLY */
// .home-contact-map{
// //  background:var(--bg-card);
//   border-radius:24px;
//   overflow:hidden;
//   box-shadow:0 18px 50px rgba(0,0,0,0.15);
// }



//   .home-contact-form{
//     padding:28px;
//     border-radius:18px;
//   }

//   .home-contact-form input,
//   .home-contact-form textarea{
//     font-size:15px;
//     padding:14px 16px;
//   }
// svg{
//   max-width:100%;
//   overflow:hidden;
// }
//   /* ================= GLOBAL LAYOUT SAFETY FIX ================= */

// html,
// body,
// #root,
// .sf-wrap{
//   width:100%;
//   max-width:100%;
//   overflow-x:hidden;
// }

// /* Prevent absolute elements causing overflow */
// section,
// .process-wrap,
// .single-red-slide,
// .cta-wrap{
//   overflow:hidden;
// }

// /* SVG safety */
// svg{
//   max-width:100%;
//   overflow:hidden;
// }

// /* Responsive padding clamp */
// .hero-wrap,
// .pc-wrap,
// .process-wrap,
// .home-faq-wrap,
// .single-red-slide,
// .contact-section{
//   padding-left: min(6vw, 24px) !important;
//   padding-right: min(6vw, 24px) !important;
// }
// /* ================= GLOBAL BACKGROUND FIX ================= */

// html,
// body,
// #root,
// .sf-wrap,
// .fullpage-wrapper,
// .section,
// .gif-slide,
// .single-red-slide,
// .process-wrap,
// .pc-wrap,
// .home-faq-wrap,
// .cta-wrap,
// .parallax-section {
//   background: radial-gradient(circle at top, #0b1220, #020617 70%) !important;
// }

  
// .home-contact-form{
//   width:100%;
//    padding:60px min(6vw, 24px);
//   padding:80px 120px;   /* WIDE FORM */
// //  background:var(--bg-card);
// }
//   .home-contact-form .contact-section{
//   padding:0 !important;
// }

// .home-contact-form .contact-inner{
//   max-width:100% !important;
//   width:100% !important;
// }
// @media(max-width:768px){
//   // .home-contact-section{
//   //   grid-template-columns:1fr;
//   // }

//   .home-contact-form{
//     padding:40px 20px;
//   }
// }

// .home-contact-form{
//   width:100%;
//   max-width:100%;
//   padding:60px;
// //  background:var(--bg-card);
//   display:flex;
// }

// /* FORCE CONTACT FORM FULL WIDTH */
// .home-contact-form .contact-section{
//   padding:0 !important;
//   background:transparent;
// }

// .home-contact-form .contact-inner{
//   max-width:100% !important;
//   width:100%;
//   grid-template-columns:1fr !important; /* REMOVE LEFT EMPTY COLUMN */
// }

// .home-contact-form .contact-right{
//   width:100%;
//   padding:0;
//   box-shadow:none;
//   border-radius:0;
// }
//   @media(max-width:768px){
//   .home-contact-form{
//     padding:24px 16px;
//   }
// }



// .home-contact-form .map-card{
//   display:none;
// }


//   .home-contact-form{
//     padding:40px 20px;
//   }



// .final-contact-info{
//   min-height:70vh;
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:90px 20px;
//   display:flex;
//   flex-direction:column;
//   align-items:center;
//   justify-content:center;
//   text-align:center;
//   font-family:Inter,system-ui;
// }

// .final-contact-info h2{
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:40px;
//   color:#111;
//   max-width:900px;
// }

// .final-cards{
//   display:flex;
//   gap:32px;
//   justify-content:center;
//   align-items:stretch;
//   flex-wrap:wrap;
// }

// .final-card{
// //  background:var(--bg-card);
//   width:280px;
//   padding:28px 24px;
//   border-radius:18px;
//   box-shadow:0 18px 50px rgba(185,5,4,0.28);
//   text-align:center;
// }

// .final-card span{
//   display:block;
//   font-size:13px;
//   opacity:0.7;
//   margin-bottom:10px;
//   letter-spacing:0.08em;
//   text-transform:uppercase;
// }

// .final-card a{
//   color:#B90504;
//   font-weight:800;
//   text-decoration:none;
//   font-size:16px;
// }

// .final-card strong{
//   font-size:16px;
//   font-weight:800;
// }

// /* ================= MOBILE ================= */
// @media(max-width:768px){
//   .final-contact-info{
//     padding:60px 20px;
//   }

//   .final-contact-info h2{
//     font-size:28px;
//     margin-bottom:28px;
//   }

//   .final-cards{
//     flex-direction:column;
//     gap:20px;
//   }

//   .final-card{
//     width:100%;
//     max-width:360px;
//   }
// }



// /* LEFT — FORM FULL WIDTH */
// .home-contact-form{
//   padding:80px 90px;
// //  background:var(--bg-card);
//   display:flex;
//   align-items:center;
// }

// /* FORCE CONTACT FORM FULL WIDTH */
// .home-contact-form .contact-section{
//   padding:0 !important;
//   background:transparent;
// }

// .home-contact-form .contact-inner{
//   max-width:100% !important;
//   width:100%;
//   margin:0;
//   display:block;
// }

// .home-contact-form .contact-right{
//   width:100%;
//   padding:0;
//   box-shadow:none;
//   border-radius:0;
// }

// /* HIDE MAP INSIDE CONTACT */
// .home-contact-form .map-card{
//   display:none;
// }

// /* RIGHT — MAP */
// .home-contact-map{
//   display:flex;
//   align-items:center;
//   justify-content:center;
// }



// /* MOBILE */
// @media(max-width:768px){
 

//   .home-contact-form{
//     padding:40px 20px;
//   }

 
// }


// /* ================= FORCE FULL-WIDTH CONTACT FORM (HOME ONLY) ================= */

// /* Remove Contact.jsx width restriction */
// .home-contact-form .contact-section{
//   padding:0 !important;
//   background:transparent;
// }

// .home-contact-form .contact-inner{
//   max-width:100% !important;   /* 🔥 KEY FIX */
//   width:100%;
//   margin:0;
//   display:block;               /* remove grid */
// }

// /* Make form fill entire left column */
// .home-contact-form .contact-right{
//   width:100%;
//   padding:0;
//   border-radius:0;
//   box-shadow:none;
//   background:transparent;
// }

// /* Form fields stretch edge to edge */
// .home-contact-form .contact-form{
//   width:500px;
// }

// .home-contact-form input,
// .home-contact-form textarea{
//   width:100%;
// }

// /* Hide internal map from Contact.jsx */
// .home-contact-form .map-card{
//   display:none;
// }
//   /* ================= HERO LAYOUT ================= */

// .hero-wrap{
//   width:100%;
//   max-width:1400px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1fr 1fr;   /* LEFT CONTENT | RIGHT IMAGE */
//   align-items:center;
//   gap:60px;
//   // padding:80px 60px;
//    padding:80px min(5vw, 24px);
// }

// .hero-content{
//   order:1;
// }

// .hero-image-wrap{
//   order:2;
//   display:flex;
//   justify-content:center;
//   align-items:center;
// }

// .hero-image{
//   width:420px;
//   max-width:100%;
//   height:auto;
// }

// /* ================= MOBILE VIEW ================= */
// @media (max-width:768px){

//   .hero-wrap{
//     grid-template-columns:1fr;   /* STACK */
//     padding:40px 20px;
//     text-align:center;
//   }

//   .hero-image-wrap{
//     order:1;   /* IMAGE FIRST */
//   }

//   .hero-content{
//     order:2;   /* CONTENT BELOW */
//   }

//   .hero-image{
//     width:220px;
//     margin-bottom:20px;
//   }

//   .hero-content h1{
//     font-size:28px !important;
//   }

//   .hero-content p{
//     font-size:15px;
//     line-height:1.6;
//   }
// }
// .mark{
//   width:44px;
//   height:44px;
//   border-radius:50%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
// //  background:var(--bg-card);
//   overflow:hidden;
// }

// .logo-img{
//   width:100%;
//   height:100%;
//   object-fit:contain;
// }
// @media(max-width:768px){
//   .mark{
//     width:38px;
//     height:38px;
//   }
// }

// /* ================= GLOBAL RED SHADOWS ================= */

// /* Cards, forms, containers */
// .home-contact-form,
// .contact-right,
// .contact-left,
// .c-card,
// .service-pill,
// .final-card,
// .svc-card,
// .svc-plan-card,
// .svc-step,
// .svc-hero-card {
//   box-shadow: 0 20px 60px rgba(185, 5, 4, 0.25) !important;
// }

// /* Hover stronger red shadow */
// .home-contact-form:hover,
// .c-card:hover,
// .final-card:hover,
// .svc-card:hover,
// .svc-plan-card:hover,
// .svc-step:hover {
//   box-shadow: 0 30px 90px rgba(185, 5, 4, 0.45) !important;
// }



// /* ================= CLEAN HOME MAP (FINAL FIX) ================= */

// .home-contact-section{
//   display:grid;
//   grid-template-columns:1.2fr 0.8fr;
//   gap:48px;
//   padding:80px 6vw;
//    background: radial-gradient(circle at top, #0b1220, #020617 70%);

// }

// /* LEFT FORM */
// .home-contact-form{
//   // background:var(--bg-card);
//   padding:60px;
//   border-radius:24px;
// }

// /* RIGHT MAP */
// .home-contact-map{
// // background:var(--bg-card);
//   border-radius:24px;
//   overflow:hidden;
//   box-shadow:0 30px 80px rgba(185,5,4,0.35);
// }

// .home-contact-map iframe{
//   width:100%;
//   height:100%;
//   min-height:420px;
//   border:0;
//   display:block;
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-contact-section{
//     grid-template-columns:1fr;
//     padding:60px 20px;
//   }

//   .home-contact-map iframe{
//     min-height:260px;
//   }
// }

// /* Buttons */
// button,
// .submit-btn,
// .pre-contact-btn {
//   box-shadow: 0 16px 40px rgba(185, 5, 4, 0.45);
// }

// button:hover,
// .submit-btn:hover,
// .pre-contact-btn:hover {
//   box-shadow: 0 26px 70px rgba(185, 5, 4, 0.6);
// }

// /* Inputs focus glow */
// input:focus,
// textarea:focus {
//   box-shadow: 0 0 0 2px rgba(185, 5, 4, 0.35),
//               0 12px 30px rgba(185, 5, 4, 0.25);
//   border-color: #B90504;
// }

// /* Header logo mark */
// /* Header logo mark – NO SHADOW */
// .mark{
//   box-shadow:none !important;
// }



// /* ================= USER-FRIENDLY TYPOGRAPHY (HOME PAGE) ================= */

// /* Base text */
// .sf-wrap{
//   font-size:16px;
//   line-height:1.75;
//   letter-spacing:0.2px;
// }

// /* Hero title */
// .hero-content h1{
//   font-weight:800;
// }

// /* Hero paragraph */
// .hero-content p{
//   font-weight:500;
// }

// /* Section headings */
// .content-left h2,
// .parallax-title,
// .final-contact-info h2{
//   font-weight:800;
// }

// /* Paragraphs */
// .content-left p,
// .stagger-para,
// .parallax-title,
// .final-inline{
//   font-weight:500;
// }

// /* Contact form text */
// .home-contact-form input,
// .home-contact-form textarea{
//   font-weight:500;
// }

// .home-contact-form button{
//   font-weight:800;
// }

// /* Cards & labels */
// .c-card strong,
// .final-card strong{
//   font-weight:700;
// }

// /* ================= MOBILE ================= */
// @media(max-width:768px){

//   .hero-content h1{
//     font-weight:800;
//   }

//   .hero-content p,
//   .content-left p{
//     font-weight:500;
//   }

// }

// /* ================= CTA BUTTONS ================= */
// button,
// .submit-btn,
// .pre-contact-btn{
//   background:var(--red);
//   color:#ffffff;
//   border:none;
//   border-radius:14px;
//   padding:16px 28px;
//   font-family:'Poppins', sans-serif;
//   font-weight:700;
//   cursor:pointer;
//   transition:all 0.3s ease;
//   box-shadow:0 18px 45px rgba(185,5,4,0.45);
// }

// button:hover,
// .submit-btn:hover,
// .pre-contact-btn:hover{
//   transform:translateY(-4px) scale(1.03);
//   background:#a00403;
//   box-shadow:0 28px 75px rgba(185,5,4,0.7);
// }

// /* ================= CARD HOVER ================= */
// .c-card,
// .final-card,
// .contact-left,
// .home-contact-form{
//   // background:var(--bg-card);
//   border-radius:22px;
//   transition:all 0.3s ease;
// }

// .c-card:hover,
// .final-card:hover{
//   transform:translateY(-6px);
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }
// /* =====================================================
//    🔥 FINAL VISIBILITY FIX – DO NOT REMOVE
//    ===================================================== */

// /* Force all text visible on dark background */


// /* Paragraph & secondary text */
// .sf-wrap p,
// .sf-wrap span,
// .sf-wrap li,
// .sf-wrap small{
//   color:#cfcfcf;
// }

// /* Headings stay RED */
// .sf-wrap h1,
// .sf-wrap h2,
// .sf-wrap h3,
// .sf-wrap h4{
//   color:#B90504;
// }

// /* Contact + card text */
// .contact-left,
// .contact-left *,
// .c-card,
// .c-card *,
// .final-card,
// .final-card *{
//   color:#ffffff;
// }

// /* Muted labels */
// .final-card span,
// .c-card strong,
// .contact-lead{
//   color:#bdbdbd !important;
// }

// /* Service pills */
// .service-pill{
//   color:#ffffff !important;
//   background:#1a1a1a !important;
// }

// /* Map link */
// .final-card a{
//   color:#B90504 !important;
// }

// /* Parallax text */
// .parallax-title{
//   color:#ffffff !important;
// }
// .parallax-sub{
//   color:#B90504 !important;
// }

// /* Form text */
// input,
// textarea,
// label{
//   color:#ffffff !important;
// }

// /* Placeholders */
// input::placeholder,
// textarea::placeholder{
//   color:#9a9a9a !important;
// }

// /* =====================================================
//    🔥 MASTER DARK MODE VISIBILITY FIX (FINAL)
//    ===================================================== */



// /* FORCE ALL TEXT VISIBLE */


// /* Paragraph & muted text */
//   .sf-wrap p,
//   .sf-wrap span,
//   .sf-wrap li,
//   .sf-wrap small{
//     color:#cfcfcf !important;
//   }

// /* HEADLINES – RED */
// .sf-wrap h1,
// .sf-wrap h2,
// .sf-wrap h3,
// .sf-wrap h4{
//   color:#B90504 !important;
//   font-family:'Poppins', sans-serif;
// }



// /* Service pills */
// .service-pill{
//   background:#1b1b1b !important;
//   color:#ffffff !important;
// }

// /* Links */
// a{
//   color:#B90504 !important;
// }

// /* Forms */
// input,
// textarea,
// select{
//   background:#0f0f0f !important;
//   color:#ffffff !important;
//   border:1px solid rgba(255,255,255,0.2) !important;
// }

// input::placeholder,
// textarea::placeholder{
//   color:#9a9a9a !important;
// }

// /* Parallax */
// .parallax-title{
//   color:#ffffff !important;
// }
// .parallax-sub{
//   color:#B90504 !important;
// }

// .process-step{
//   text-align:center;
//   position:relative;
//   z-index:2;
// }

// .process-step.bottom{
//   transform:translateY(40px);
// }

// .process-step h3{
//   margin:18px 0 10px;
//   font-size:22px;
//   font-weight:800;
//   color:#ffffff;
// }

// .process-step p{
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* Number circles */
// .step-circle{
//   width:64px;
//   height:64px;
//   border-radius:50%;
//   margin:auto;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:22px;
//   font-weight:900;
//   color:#fff;
//   box-shadow:0 16px 40px rgba(0,0,0,0.4);
// }

// /* Gradients */
// .c1{background:linear-gradient(135deg,#9be15d,#00e3ae);}
// .c2{background:linear-gradient(135deg,#ff9a9e,#ff5e62);}
// .c3{background:linear-gradient(135deg,#36d1dc,#5b86e5);}
// .c4{background:linear-gradient(135deg,#ff758c,#ff7eb3);}
// .c5{background:linear-gradient(135deg,#7f7fd5,#86a8e7);}
// .c6{background:linear-gradient(135deg,#84fab0,#8fd3f4);}

// /* Dotted curve */
// .process-line{
//   position:absolute;
//   inset:0;
//   width:100%;
//   height:100%;
//   pointer-events:none;
//   z-index:1;
// }

// /* Mobile */
// @media(max-width:900px){
//   .process-grid{
//     grid-template-columns:1fr;
//     row-gap:80px;
//   }
//   .process-step.bottom{
//     transform:none;
//   }
//   .process-line{
//     display:none;
//   }
// }
// /* ================= SINGLE RED SLIDE ================= */


// .single-red-container{
//   max-width:1300px;
//   margin:auto;
// }

// .single-red-title{
//   font-size:42px;
//   font-weight:900;
//   color:#ffffff;               /* WHITE */
//   text-align:center;
//   line-height:1.15;
// }
// /* FORCE OVERRIDE RED */
// .single-red-title{
//   font-size:42px;
//   font-weight:900;
//   text-align:center;
//   line-height:1.15;
// }

// /* FIRST LINE — PURE WHITE (OVERRIDES RED) */
// .single-red-title .title-white{
//   color:#ffffff !important;
// }

// /* SECOND LINE — PURPLE → PINK GRADIENT */
// .single-red-title .title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* PURPLE–PINK GRADIENT TEXT */
// .gradient-text{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }


// .single-red-title::after{
//   content:"";
//   width:120px;
//   height:4px;
//   background:#ffffff;
//   display:block;
//   margin:18px auto 0;
//   opacity:0.7;
// }

// .single-red-content{
//   display:grid;
//   grid-template-columns:1fr 1.4fr;
//   gap:60px;
//   align-items:flex-start;
// }

// /* IMAGE */
// .single-red-image img{
//   width:100%;
//   border-radius:18px;
//   box-shadow:0 30px 90px rgba(0,0,0,0.45);
// }

// /* TEXT */
// .single-red-text p{
//   font-size:17px;
//   line-height:1.9;
//   color:#f1f1f1;
//   margin-bottom:22px;
// }

// /* MOBILE */
// @media(max-width:900px){
//   .single-red-content{
//     grid-template-columns:1fr;
//   }

//   .single-red-title{
//     font-size:28px;
//   }
// }
//   /* ================= SINGLE RED SLIDE (EXACT MATCH) ================= */

// .single-red-slide{
//   padding:120px 6vw;
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   overflow:hidden;
// }

// /* ===== TOP RED OVERLAY (SUBTLE) ===== */
// .single-red-slide::before{
//   content:"";
//   position:absolute;
//   top:0;
//   left:0;
//   right:0;
//   height:220px;
//   background: linear-gradient(
//     to bottom,
//     rgba(185,5,4,0.35),
//     rgba(185,5,4,0.12),
//     rgba(185,5,4,0.0)
//   );
//   pointer-events:none;
//   z-index:0;
// }

// /* Ensure content stays above overlay */
// .single-red-container{
//   position:relative;
//   z-index:1;
// }

// /* Container */
// .single-red-container{
//   max-width:1300px;
//   margin:auto;
// }

// /* Title */
// .single-red-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:60px;
//   color:#ffffff;
//   opacity:0;
//   transform:translateY(30px);
//   transition:all 0.9s cubic-bezier(0.16,1,0.3,1);
// }

// .single-red-title.show{
//   opacity:1;
//   transform:translateY(0);
// }

// .single-red-title::after{
//   content:"";
//   width:120px;
//   height:4px;
//   background:#ffffff;
//   display:block;
//   margin:18px auto 0;
//   opacity:0.7;
// }

// /* Content */
// .single-red-content{
//   display:grid;
//   grid-template-columns:1fr 1.4fr;
//   gap:60px;
//   align-items:flex-start;
// }

// /* IMAGE */
// .single-red-image{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all 1s cubic-bezier(0.16,1,0.3,1);
// }

// .single-red-image.show{
//   opacity:1;
//   transform:translateY(0);
// }

// .single-red-image img{
//   width:100%;
//   border-radius:18px;
//   box-shadow:0 30px 90px rgba(0,0,0,0.45);
// }

// /* ===== IMAGE RED GLOW ===== */
// .single-red-image{
//   position:relative;
// }

// .single-red-image::before{
//   content:"";
//   position:absolute;
//   inset:-40px;
//   background: radial-gradient(
//     circle,
//     rgba(185,5,4,0.45),
//     rgba(185,5,4,0.15),
//     transparent 70%
//   );
//   filter: blur(40px);
//   z-index:-1;
// }

// /* TEXT */
// .single-red-text{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all 1s cubic-bezier(0.16,1,0.3,1);
// }

// .single-red-text.show{
//   opacity:1;
//   transform:translateY(0);
// }


// .single-red-text p{
//   opacity:0;
//   transform:translateY(26px);
//   transition:
//     opacity 0.8s cubic-bezier(0.16,1,0.3,1),
//     transform 0.8s cubic-bezier(0.16,1,0.3,1);
//   margin-bottom:22px;
//   font-size:17px;
//   line-height:1.9;
//   color:#f1f1f1;
// }

// /* When parent becomes visible */
// .single-red-text.show p{
//   opacity:1;
//   transform:translateY(0);
// }

// /* Delays for each paragraph */
// .single-red-text.show p:nth-child(1){ transition-delay:0.15s; }
// .single-red-text.show p:nth-child(2){ transition-delay:0.3s; }
// .single-red-text.show p:nth-child(3){ transition-delay:0.45s; }

// /* MOBILE */
// @media(max-width:900px){
//   .single-red-content{
//     grid-template-columns:1fr;
//   }

//   .single-red-title{
//     font-size:28px;
//   }
// }
// /* ===== LINE BY LINE TEXT ANIMATION ===== */

// .single-red-text .line{
//   display:block;
//   opacity:0;
//   transform:translateY(20px);
//   margin-bottom:22px;
//   font-size:17px;
//   line-height:1.9;
//   color:#f1f1f1;
//   transition:
//     opacity 0.7s cubic-bezier(0.16,1,0.3,1),
//     transform 0.7s cubic-bezier(0.16,1,0.3,1);
// }

// /* ===== LINE SCROLL REVEAL ===== */

// .single-red-text .line{
//   opacity:0;
//   transform:translateY(18px);
// }

// .single-red-text.show .line{
//   opacity:1;
//   transform:translateY(0);
// }

// /* Show lines */
// .single-red-text.show .line{
//   opacity:1;
//   transform:translateY(0);
// }

// /* Stagger delays */
// .single-red-text.show .line:nth-child(1){ transition-delay:0.15s; }
// .single-red-text.show .line:nth-child(2){ transition-delay:0.3s; }
// .single-red-text.show .line:nth-child(3){ transition-delay:0.45s; }
// .single-red-text.show .line:nth-child(4){ transition-delay:0.6s; }


// /* ================= MOBILE FIX – SINGLE RED SLIDE ================= */

// @media (max-width: 768px) {

//   .single-red-slide{
//     padding:60px 20px;
//   }

//   .single-red-title{
//     font-size:24px;
//     line-height:1.3;
//     margin-bottom:36px;
//     text-align:center;
//   }

//   .single-red-content{
//     grid-template-columns:1fr; /* stack image & text */
//     gap:28px;
//   }

//   .single-red-image img{
//     max-width:100%;
//     border-radius:14px;
//   }

//   .single-red-text{
//     text-align:left;
//   }

//   .single-red-text .line{
//     font-size:15px;
//     line-height:1.7;
//     margin-bottom:16px;
//   }
// }
//   /* ================= USER-FRIENDLY TEXT HOVER ================= */

// /* Paragraphs & spans */
// .sf-wrap p,
// .sf-wrap span,
// .sf-wrap li{
//   transition:
//     color 0.25s ease,
//     text-shadow 0.25s ease;
// }

// /* Soft hover effect */
// .sf-wrap p:hover,
// .sf-wrap span:hover,
// .sf-wrap li:hover{
//   color:#ffffff;
//   text-shadow:0 0 6px rgba(255,255,255,0.15);
// }

// /* Headings – premium hover */
// .sf-wrap h1,
// .sf-wrap h2,
// .sf-wrap h3,
// .sf-wrap h4{
//   transition:
//     color 0.25s ease,
//     letter-spacing 0.25s ease;
// }

// .sf-wrap h1:hover,
// .sf-wrap h2:hover,
// .sf-wrap h3:hover{
//   color:#ff3b3b;
//   letter-spacing:0.5px;
// }
// /* ================= FASTER ANIMATION ON MOBILE ================= */

// @media (max-width: 768px){

//   /* Faster section reveal */
//   .single-red-title,
//   .single-red-image,
//   .single-red-text{
//     transition-duration:0.45s !important;
//   }

//   /* Faster line animation */
//   .single-red-text .line{
//     transition-duration:0.4s !important;
//   }

//   /* Reduce stagger delay */
//   .single-red-text.show .line:nth-child(1){
//     transition-delay:0.05s !important;
//   }
//   .single-red-text.show .line:nth-child(2){
//     transition-delay:0.1s !important;
//   }
//   .single-red-text.show .line:nth-child(3){
//     transition-delay:0.15s !important;
//   }
// }


// /* ================= ANIMATED GRADIENT SLIDE ================= */

// /* ================= VIDEO-LIKE GRADIENT PANEL ================= */
// /* ================= FINAL TITLE COLOR OVERRIDE ================= */

// /* Neutralize h2 color completely */
// .single-red-title{
//   color:transparent !important;
// }

// /* FIRST LINE — WHITE */
// .single-red-title .title-white{
//   color:#ffffff !important;
// }

// /* SECOND LINE — GRADIENT */
// .single-red-title .title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* ================= PROCESS FLOW TITLE COLOR FIX ================= */

// /* Force process step titles to white */
// .process-step h3{
//   color:#ffffff !important;
// }

// /* Optional: brighter on hover */
// .process-step:hover h3{
//   color:#ffffff !important;
// }

// /* ================= SECTION HEADING: WHITE + GRADIENT ================= */

// /* Neutralize forced red on h2 */
// .single-red-title{
//   color:transparent !important;
// }

// /* First line — WHITE */
// .single-red-title .title-white{
//   color:#ffffff !important;
// }

// /* Second line — PURPLE → PINK GRADIENT */
// .single-red-title .title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }
// /* Neutralize forced red */
// .single-red-title{
//   color:transparent !important;
// }

// /* White text */
// .single-red-title .title-white{
//   color:#ffffff !important;
// }

// /* Gradient text */
// .single-red-title .title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }
// /* ================= FAQ CTA GRADIENT BUTTON ================= */

// /* Gradient button */
// .home-faq-cta button{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   border:none;
//   font-weight:800;
//   letter-spacing:0.05em;
//   box-shadow:0 20px 60px rgba(139,92,246,0.45);
// }

// /* Hover effect */
// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 30px 90px rgba(236,72,153,0.55);
//   background:linear-gradient(90deg,#7c3aed,#db2777) !important;
// }

// /* Focus / active */
// .home-faq-cta button:active{
//   transform:scale(0.98);
// }
// /* ================= DISABLE HOVER FOR THIS SECTION TITLE ================= */

// /* Stop all hover effects on this title */
// .single-red-title,
// .single-red-title *{
//   pointer-events:none;
// }

// /* Explicitly cancel hover animations */
// .single-red-title:hover,
// .single-red-title:hover *{
//   background:none !important;
//   -webkit-text-fill-color:inherit !important;
//   color:inherit !important;
//   transform:none !important;
//   letter-spacing:normal !important;
//   text-shadow:none !important;
// }


// /* ================= FAQ FINAL COLOR STYLING ================= */

// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
// /* ================= CTA SECTION FIX ================= */

// // 
// /* ===== CTA HEADING GRADIENT (REMOVE RED) ===== */

// /* ===== STEP 2: REMOVE RED HOVER FROM CTA ===== */

// .cta-btn{
//   background:#ffffff !important;
//   color:#000000 !important;
// }

// .cta-btn:hover{
//   background:#ffffff !important;
//   color:#000000 !important;
// }

// /* stop red hover coming from global styles */
// .cta-wrap,
// .cta-wrap *{
//   --red: transparent;
// }
// /* =====================================================
//    🔥 GLOBAL SPACING NORMALIZER (FINAL FIX)
//    ===================================================== */

// /* 1️⃣ Remove forced full-screen heights */
// .section,
// .parallax-section,
// .gif-slide {
//   min-height: auto !important;
// }

// /* 2️⃣ Normalize vertical spacing for ALL sections */
// .section,
// .single-red-slide,
// .process-wrap,
// .pc-wrap,
// .home-faq-wrap,
// .sh-wrap,
// .seo-section,
// .final-contact-info {
//   padding-top: clamp(56px, 8vw, 90px) !important;
//   padding-bottom: clamp(56px, 8vw, 90px) !important;
// }

// /* 3️⃣ Prevent stacked padding from inner wrappers */
// .section > *,
// .process-wrap > *,
// .home-faq-wrap > * {
//   margin-top: 0 !important;
//   margin-bottom: 0 !important;
// }

// /* 4️⃣ Fix hero top gap (header already handled) */
// .home-hero {
//   padding-top: clamp(70px, 10vw, 110px) !important;
//   padding-bottom: clamp(56px, 8vw, 90px) !important;
// }

// /* 5️⃣ Remove extra margin between stacked sections */
// .fullpage-wrapper > * {
//   margin-top: 0 !important;
// }

// /* 6️⃣ Mobile spacing control */
// @media (max-width: 768px) {
//   .section,
//   .single-red-slide,
//   .process-wrap,
//   .pc-wrap,
//   .home-faq-wrap,
//   .sh-wrap,
//   .seo-section,
//   .final-contact-info {
//     padding-top: 56px !important;
//     padding-bottom: 56px !important;
//   }

//   .home-hero {
//     padding-top: 64px !important;
//     padding-bottom: 56px !important;
//   }
// }




//     `;

//     const prev = document.getElementById("shainfotech-fullpage-styles");
//     if (prev) prev.remove();
//     const style = document.createElement("style");
//     style.id = "shainfotech-fullpage-styles";
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const setHeaderHeightVar = () => {
//       const el = document.querySelector(".sf-header-inner");
//       if (!el) return;
//       const h = el.getBoundingClientRect().height;
//       document.documentElement.style.setProperty(
//         "--header-height",
//         `${Math.ceil(h)}px`
//       );
//     };
//     setHeaderHeightVar();
//     window.addEventListener("resize", setHeaderHeightVar);

//     return () => {
//       const el = document.getElementById("shainfotech-fullpage-styles");
//       if (el) el.remove();
//       window.removeEventListener("resize", setHeaderHeightVar);
//     };
//   }, []);





















// // src/components/ServiceDetail.jsx
// // import React, { useEffect, useRef } from "react";
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// const SERVICE_DETAILS = {
//   "digital-strategy": {
//     tag: "Strategy",
//     title: "Digital Strategy",
//     punch: "A clear digital roadmap that aligns technology, marketing, and business goals.",
//     intro:
//       "We help you define the right digital direction for your business. From choosing the right platforms to planning growth-focused campaigns, our digital strategy ensures every effort supports your long-term objectives.",
//     highlights: [
//       "Business goal and market analysis",
//       "Customer journey and digital touchpoint planning",
//       "Platform and channel selection guidance",
//       "Actionable roadmap for execution and growth"
//     ],
//     heroStatLeft: "360°",
//     heroStatLeftLabel: "STRATEGY VIEW",
//     heroStatRight: "ROI",
//     heroStatRightLabel: "FOCUSED"
//   },

//   "web-development": {
//     tag: "Web",
//     title: "Web Development",
//     punch: "Fast, scalable, and modern websites built for performance and growth.",
//     intro:
//       "We design and develop websites that are visually clean, technically strong, and easy to manage. Every website is built to load fast, work across devices, and clearly communicate your value to customers.",
//     highlights: [
//       "Custom UI and clean code structure",
//       "Mobile-first, responsive layouts",
//       "Performance and speed optimisation",
//       "SEO-ready structure and best practices"
//     ],
//     heroStatLeft: "7–21 days",
//     heroStatLeftLabel: "TYPICAL GO-LIVE",
//     heroStatRight: "100%",
//     heroStatRightLabel: "CUSTOM BUILD"
//   },

//   "ecommerce-website": {
//     tag: "E-commerce",
//     title: "E-commerce Website",
//     punch: "Sell your products online with a smooth and secure shopping experience.",
//     intro:
//       "We build e-commerce platforms that make browsing, buying, and managing products simple. From product setup to secure checkout, everything is designed to support higher conversions and repeat customers.",
//     highlights: [
//       "Product and category management",
//       "Secure checkout and payment gateway setup",
//       "Order, inventory, and basic offer management",
//       "Mobile-friendly shopping experience"
//     ],
//     heroStatLeft: "2x",
//     heroStatLeftLabel: "SALES POTENTIAL",
//     heroStatRight: "SECURE",
//     heroStatRightLabel: "CHECKOUT"
//   },

//   "seo": {
//     tag: "SEO",
//     title: "Search Engine Optimization (SEO)",
//     punch: "Improve visibility on Google and attract customers who are searching for you.",
//     intro:
//       "Our SEO services focus on long-term visibility and relevant traffic. We optimise your website structure, content, and local presence so your business appears for the searches that matter.",
//     highlights: [
//       "Website and keyword analysis",
//       "On-page SEO for important pages",
//       "Local SEO for Maps and area-based searches",
//       "Content guidance for steady ranking growth"
//     ],
//     heroStatLeft: "3–6 months",
//     heroStatLeftLabel: "TYPICAL RESULTS",
//     heroStatRight: "50+",
//     heroStatRightLabel: "KEYWORDS"
//   },

//   "social-media-marketing": {
//     tag: "Social",
//     title: "Social Media Marketing",
//     punch: "Build visibility, trust, and engagement on social platforms.",
//     intro:
//       "We help your brand stay active and consistent on social media. Through planned content and creative designs, we focus on building awareness and keeping your audience engaged.",
//     highlights: [
//       "Monthly content planning",
//       "Post, story, and reel design",
//       "Profile optimisation",
//       "Basic performance tracking and insights"
//     ],
//     heroStatLeft: "4+",
//     heroStatLeftLabel: "PLATFORMS",
//     heroStatRight: "ENGAGEMENT",
//     heroStatRightLabel: "FOCUSED"
//   },

//   "content-design": {
//     tag: "Content",
//     title: "Content Design",
//     punch: "Content that communicates clearly and connects with your audience.",
//     intro:
//       "We create content that is easy to understand, visually consistent, and aligned with your brand voice. The focus is on clarity, relevance, and conversion.",
//     highlights: [
//       "Website and marketing content structure",
//       "Visual content and layout planning",
//       "Message clarity and tone consistency",
//       "Content aligned with business goals"
//     ],
//     heroStatLeft: "BRAND",
//     heroStatLeftLabel: "CONSISTENCY",
//     heroStatRight: "HIGH",
//     heroStatRightLabel: "CLARITY"
//   },

//   "business-analysis": {
//     tag: "Analysis",
//     title: "Business Analysis",
//     punch: "Turn data and insights into smarter business decisions.",
//     intro:
//       "We analyse your business processes, digital performance, and market positioning to identify gaps and growth opportunities. This helps you make informed decisions with confidence.",
//     highlights: [
//       "Business and process evaluation",
//       "Market and competitor analysis",
//       "Performance and gap identification",
//       "Insight-driven recommendations"
//     ],
//     heroStatLeft: "DATA",
//     heroStatLeftLabel: "DRIVEN",
//     heroStatRight: "SMART",
//     heroStatRightLabel: "DECISIONS"
//   },

//   "creative-design": {
//     tag: "Design",
//     title: "Creative Design",
//     punch: "Visual designs that attract attention and strengthen your brand.",
//     intro:
//       "Our creative design services focus on making your brand visually appealing and memorable. From digital creatives to branding visuals, we design with purpose and consistency.",
//     highlights: [
//       "Marketing and promotional creatives",
//       "Brand-consistent visual design",
//       "UI and digital asset creation",
//       "Designs focused on engagement"
//     ],
//     heroStatLeft: "UNIQUE",
//     heroStatLeftLabel: "VISUALS",
//     heroStatRight: "STRONG",
//     heroStatRightLabel: "IMPACT"
//   },

//   "brand-consultancy": {
//     tag: "Brand",
//     title: "Brand Consultancy",
//     punch: "Build a strong brand identity that people remember and trust.",
//     intro:
//       "We help businesses define, refine, and strengthen their brand presence. From positioning to visual direction, our consultancy ensures your brand communicates the right message consistently.",
//     highlights: [
//       "Brand positioning and messaging",
//       "Identity and tone-of-voice guidance",
//       "Consistency across digital platforms",
//       "Long-term brand growth planning"
//     ],
//     heroStatLeft: "TRUST",
//     heroStatLeftLabel: "BUILDING",
//     heroStatRight: "LONG-TERM",
//     heroStatRightLabel: "VALUE"
//   }
// };

// function CTASection() {
//     const navigate = useNavigate();
//   useEffect(() => {
//     const css = `
//       .cta-wrap{
//         position:relative;
//         min-height:60vh;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         overflow:hidden;
//         background:#000;
//         font-family:Inter,system-ui;
//       }

//       .cta-bg{
//         position:absolute;
//         inset:-20%;
//         background:
//           radial-gradient(circle at 20% 40%, #ff0000, transparent 40%),
//           radial-gradient(circle at 60% 30%, #00e5ff, transparent 45%),
//           radial-gradient(circle at 80% 70%, #7c3aed, transparent 45%);
//         filter: blur(90px);
//         animation: floatBg 14s ease-in-out infinite alternate;
//         z-index:0;
//       }

//       @keyframes floatBg{
//         0%{ transform:translateY(-20px) scale(1); }
//         100%{ transform:translateY(20px) scale(1.1); }
//       }

//       .cta-overlay{
//         position:absolute;
//         inset:0;
//         background:rgba(0,0,0,0.78);
//         z-index:1;
//       }

//       .cta-content{
//         position:relative;
//         z-index:2;
//         text-align:center;
//         max-width:900px;
//         padding:40px 20px;
//         color:#fff;
//       }

//       .cta-title{
//         font-size:42px;
//         font-weight:900;
//         margin-bottom:18px;
//       }

//       .cta-sub{
//         font-size:20px;
//         color:#e5e7eb;
//         margin-bottom:36px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         gap:12px;
//       }

//       .cta-dot{
//         width:16px;
//         height:16px;
//         border-radius:50%;
//         background:#2dd4bf;
//         box-shadow:0 0 20px rgba(45,212,191,0.9);
//         animation:pulse 1.6s infinite;
//       }

//       @keyframes pulse{
//         0%{transform:scale(1);opacity:1}
//         50%{transform:scale(1.4);opacity:.6}
//         100%{transform:scale(1);opacity:1}
//       }

//       .cta-btn{
//         display:inline-flex;
//         align-items:center;
//         gap:10px;
//         padding:16px 36px;
//         border-radius:999px;
//         background:#ffffff;
//         color:#000;
//         font-size:15px;
//         font-weight:800;
//         border:none;
//         cursor:pointer;
//         letter-spacing:0.12em;
//         box-shadow:0 20px 60px rgba(255,255,255,0.35);
//         transition:all .3s ease;
//       }

//       .cta-btn:hover{
//         transform:translateY(-4px) scale(1.05);
//         box-shadow:0 30px 90px rgba(255,255,255,0.55);
//       }

//       .cta-btn span{
//         font-size:20px;
//       }

//       @media(max-width:768px){
//         .cta-title{font-size:28px;}
//         .cta-sub{font-size:16px;flex-direction:column;}
//       }
//     `;

//     const id = "cta-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   return (
//     <section className="cta-wrap">
//       <div className="cta-bg"></div>
//       <div className="cta-overlay"></div>

//       <div className="cta-content">
//         <h2 className="cta-title">Ready to transform your business?</h2>

//         <div className="cta-sub">
//           <span className="cta-dot"></span>
//           Book an informal chat with one of our specialists
//         </div>

//         <button
//   className="cta-btn"
//   onClick={() => navigate("/contact")}
// >

//           <span>→</span> GET IN TOUCH
//         </button>
//       </div>
//     </section>
//   );
// }

// // first slide



// function DigitalStrategyHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//         <small>DIGITAL STRATEGY</small>

//         <h1 className="smm-title">
//             Build a <span className="accent">Clear Strategy</span><br />
//           for <br />
//           <span className="accent">Sustainable Growth</span>
//         </h1>

//         <p className="smm-desc">
//          Align business goals, technology, and marketing with a focused digital roadmap.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WebDevelopmentHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//         <small>WEB DEVELOPMENT</small>

//         <h1 className="smm-title">
//           Modern <span className="accent">Website</span><br />
//           Built for <br />
//           <span className="accent">Performance</span>
//         </h1>

//         <p className="smm-desc">
//           Fast, scalable, and responsive websites that convert visitors into customers.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function EcommerceHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//         <small>E-COMMERCE</small>

//         <h1 className="smm-title">
//           Sell Online with <span className="accent">Confidence</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SocialMediaHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//          <small>SOCIAL MEDIA</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContentDesignHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//          <small>CONTENT DESIGN</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BusinessAnalysisHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//        <small>BUSINESS ANALYSIS</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CreativeDesignHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//         <small>CREATIVE DESIGN</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BrandConsultancyHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//          <small>BRAND CONSULTANCY</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SEOHero() {
//   useEffect(() => {
//     const css = `
//       .smm-hero{
//         min-height:90vh;
//         background:radial-gradient(circle at top,#0b0b16,#05050c 70%);
//         display:grid;
//         grid-template-columns:1.2fr 1fr;
//         align-items:center;
//         padding:100px 7vw;
//         font-family:Inter,system-ui;
//         color:#fff;
//         overflow:hidden;
//       }

//       .smm-left small{
//         font-size:14px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         color:#c7c7ff;
//         font-weight:700;
//       }

//       .smm-title{
//         font-size:56px;
//         font-weight:900;
//         line-height:1.15;
//         margin:18px 0;
//       }

//       .smm-title .accent{
//         background:linear-gradient(135deg,#7c7cff,#c084fc,#f472b6);
//         -webkit-background-clip:text;
//         -webkit-text-fill-color:transparent;
//       }

//       .smm-desc{
//         font-size:18px;
//         color:#cfcfe5;
//         max-width:540px;
//         line-height:1.7;
//         margin-top:16px;
//       }

//       .smm-right{
//         position:relative;
//         height:420px;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//       }

//       .icon-cloud{
//         position:relative;
//         width:360px;
//         height:360px;
//       }

//       .icon{
//         position:absolute;
//         width:56px;
//         height:56px;
//         border-radius:16px;
//         background:linear-gradient(135deg,#7c7cff,#c084fc);
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         font-size:26px;
//         box-shadow:0 20px 50px rgba(124,124,255,.45);
//         animation:float 6s ease-in-out infinite;
//       }

//       .icon:nth-child(2){top:20%;left:15%;animation-delay:1s}
//       .icon:nth-child(3){top:10%;right:18%;animation-delay:2s}
//       .icon:nth-child(4){top:45%;left:0;animation-delay:1.5s}
//       .icon:nth-child(5){top:45%;right:0;animation-delay:.8s}
//       .icon:nth-child(6){bottom:15%;left:20%;animation-delay:2.4s}
//       .icon:nth-child(7){bottom:15%;right:20%;animation-delay:1.9s}

//       @keyframes float{
//         0%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//         100%{transform:translateY(0)}
//       }

//       @media(max-width:900px){
//         .smm-hero{
//           grid-template-columns:1fr;
//           text-align:center;
//           padding:80px 24px;
//         }
//         .smm-title{font-size:36px}
//         .smm-desc{margin:auto}
//         .smm-right{margin-top:60px}
//       }
//     `;

//     const id = "seo-hero-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   return (
//     <section className="smm-hero">
//       <div className="smm-left">
//         <small>Search Engine Optimization</small>

//         <h1 className="smm-title">
//           Rank Higher with <span className="accent">Smart SEO</span><br />
//           Get Found by the<br />
//           <span className="accent">Right Customers</span>
//         </h1>

//         <p className="smm-desc">
//           We optimize your website for keywords that bring real business,
//           not just traffic. Sustainable growth, transparent results.
//         </p>
//       </div>

//       <div className="smm-right">
//         <div className="icon-cloud">
//           <div className="icon">G</div>
//           <div className="icon">🔍</div>
//           <div className="icon">📈</div>
//           <div className="icon">📍</div>
//           <div className="icon">📝</div>
//           <div className="icon">⚙️</div>
//           <div className="icon">⭐</div>
//         </div>
//       </div>
//     </section>
//   );
// }



// // third slide

// function ServicesGridDigitalStrategy() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridWebDevelopment() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridBrandConsultancy() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridCreativeDesign() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridBusinessAnalysis() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridContentDesign() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridSocialMedia() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridEcommerce() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// function ServicesGridSEO() {
//   useEffect(() => {
//     const css = `
//       .services-wrap{
//         padding:110px 7vw;
//         background:radial-gradient(circle at top, #0b1220, #020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//       }

//       .services-grid{
//         max-width:1200px;
//         margin:auto;
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         gap:28px;
//       }

//       .service-card{
//         background:#ffffff;

//         border-radius:22px;
//         padding:40px 34px;
//         position:relative;
//         border:1px solid rgba(255,255,255,0.08);
//         box-shadow:
//           0 20px 60px rgba(0,0,0,0.6),
//           inset 0 0 0 rgba(255,255,255,0);
//         transition:all .35s ease;
//         overflow:hidden;
//       }

//       /* Glow line */
//       .service-card::before{
//         content:"";
//         position:absolute;
//         inset:0;
//         border-radius:22px;
//         background:linear-gradient(135deg,transparent,rgba(255,78,78,.25),transparent);
//         opacity:0;
//         transition:opacity .35s ease;
//         pointer-events:none;
//       }

//       .service-card:hover::before{
//         opacity:1;
//       }

//       .service-card:hover{
//         transform:translateY(-10px);
//         box-shadow:
//           0 30px 90px rgba(185,5,4,0.45),
//           0 0 40px rgba(185,5,4,0.35);
//       }

//       .service-number{
//         position:absolute;
//         top:18px;
//         right:22px;
//         font-size:60px;
//         font-weight:900;
//         color:rgba(255,255,255,0.06);
//       }

//   .service-icon{
//   width:56px;
//   height:56px;
//   border-radius:14px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899); /* 👈 SAME AS QUESTIONS */
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#ffffff;
//   margin-bottom:20px;

//   position:relative;
//   z-index:1;
// }

// /* PURPLE GRADIENT GLOW */
// .service-icon::after{
//   content:"";
//   position:absolute;
//   inset:-12px;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   filter:blur(22px);
//   opacity:0.6;
//   z-index:-1;
// }

//       .service-title{
//         font-size:20px;
//         font-weight:800;
//         margin-bottom:12px;
//         color:#000000;
//       }

//       .service-desc{
//         font-size:15px;
//         line-height:1.75;
//         color:#000000;
//       }

//       @media(max-width:900px){
//         .services-grid{
//           grid-template-columns:1fr;
//         }
//       }
//     `;

//     const id = "services-grid-dark-style";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }

//     return () => {
//       const s = document.getElementById(id);
//       if (s) s.remove();
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom Design & Development",
//       desc:
//         "Custom-built websites designed for performance, clarity, and long-term growth.",
//       icon: "🚀"
//     },
//     {
//       title: "Ecommerce Development",
//       desc:
//         "Secure and scalable ecommerce platforms that convert visitors into buyers.",
//       icon: "🛒"
//     },
//     {
//       title: "Mobile App Development",
//       desc:
//         "High-performance mobile apps that deliver smooth user experiences.",
//       icon: "📱"
//     },
//     {
//       title: "Website Support & Maintenance",
//       desc:
//         "Ongoing support to keep your website fast, secure, and updated.",
//       icon: "🛠️"
//     },
//     {
//       title: "SEO-Friendly Websites",
//       desc:
//         "Websites built with clean structure and SEO best practices.",
//       icon: "👁️"
//     },
//     {
//       title: "UI/UX Development",
//       desc:
//         "Modern interfaces designed to increase engagement and usability.",
//       icon: "🎨"
//     }
//   ];

//   return (
//     <section className="services-wrap">
//       <div className="services-grid">
//         {services.map((s, i) => (
//           <div className="service-card" key={i}>
//             <div className="service-number">{i + 1}</div>
//             <div className="service-icon">{s.icon}</div>
//             <div className="service-title">{s.title}</div>
//             <div className="service-desc">{s.desc}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // second slide


// function SecondSlideDigitalStrategy() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideWebDevelopment() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideBrandConsultancy() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideCreativeDesign() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideBusinessAnalysis() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideContentDesign() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideSocialMedia() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function SecondSlideEcommerce() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//  function SecondSlideSEO() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
   
// const css = `
// .why-orbit-dark{
//   padding:110px 7vw;
//   background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#e5e7eb;
//   overflow:hidden;
// }

// /* GRID */
// .why-dark-grid{
//   max-width:1300px;
//   margin:auto;
//   display:grid;
//   grid-template-columns:1.1fr 0.9fr;
//   align-items:center;
//   gap:70px;
// }

// /* LEFT TEXT */
// .why-dark-left{
//   opacity:0;
//   transform:translateY(40px);
//   transition:all .9s ease;
// }
// .why-orbit-dark.show .why-dark-left{
//   opacity:1;
//   transform:none;
// }

// .why-dark-left h2{
//   font-size:38px;
//   font-weight:900;
//   margin-bottom:22px;
//   color:#fff;
// }
// .why-dark-left h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// .why-dark-left p{
//   font-size:17px;
//   line-height:1.9;
//   color:#cbd5f5;
//   max-width:520px;
// }

// /* ORBIT WRAP */
// .orbit-dark-wrap{
//   position:relative;
//   width:440px;
//   height:440px;
//   margin:auto;
//   opacity:0;
//   transform:scale(.85);
//   transition:all 1s ease;
// }
// .why-orbit-dark.show .orbit-dark-wrap{
//   opacity:1;
//   transform:scale(1);
// }

// /* 🔥 NEON RINGS */
// .orbit-ring-dark{
//   position:absolute;
//   inset:0;
//   border-radius:50%;
//     border:3px solid rgba(255,255,255,0.15);   /* FULL CIRCLE */
//   border-top-color:#ff4ecd;
//   border-right-color:#7c7cff;
//   filter:drop-shadow(0 0 12px #ff4ecd)
//          drop-shadow(0 0 28px #7c7cff);
//   animation:spin 18s linear infinite;
// }

// .orbit-ring-dark.inner{
//   inset:75px;
//   border-top-color:#22d3ee;
//   border-right-color:#a78bfa;
//   filter:drop-shadow(0 0 10px #22d3ee)
//          drop-shadow(0 0 26px #a78bfa);
//   animation-duration:12s;
//   animation-direction:reverse;
// }

// @keyframes spin{
//   100%{transform:rotate(360deg)}
// }

// /* 🌈 NEON ICONS */
// .orbit-icon-dark{
//   position:absolute;
//   width:56px;
//   height:56px;
//   border-radius:50%;
//   background:#020617;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:26px;
//   color:#fff;
//   box-shadow:
//     0 0 10px rgba(255,255,255,.15),
//     0 0 25px rgba(124,124,255,.45),
//     0 0 45px rgba(255,78,205,.35);
//   animation:neonPulse 2.8s ease-in-out infinite;
//   transition:transform .3s ease, box-shadow .3s ease;
// }

// .orbit-icon-dark:hover{
//   transform:scale(1.15);
//   box-shadow:
//     0 0 15px rgba(255,255,255,.35),
//     0 0 35px rgba(124,124,255,.9),
//     0 0 70px rgba(255,78,205,.8);
// }

// @keyframes neonPulse{
//   0%,100%{opacity:.9}
//   50%{opacity:1}
// }

// /* ICON POSITIONS */
// .o1{top:-10px;left:50%;transform:translateX(-50%)}
// .o2{top:90px;right:-10px}
// .o3{bottom:90px;right:-10px}
// .o4{bottom:-10px;left:50%;transform:translateX(-50%)}
// .o5{bottom:90px;left:-10px}
// .o6{top:90px;left:-10px}

// .inner .orbit-icon-dark{
//   width:48px;
//   height:48px;
//   font-size:22px;
// }

// .o7{top:50%;left:-10px;transform:translateY(-50%)}
// .o8{top:-10px;left:50%;transform:translateX(-50%)}
// .o9{top:50%;right:-10px;transform:translateY(-50%)}

// /* MOBILE */
// @media(max-width:900px){
//   .why-dark-grid{
//     grid-template-columns:1fr;
//     text-align:center;
//   }
//   .why-dark-left p{
//     margin:auto;
//   }
// }
// `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       style.remove();
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section className="why-orbit-dark" ref={sectionRef}>
//       <div className="why-dark-grid">
//         {/* LEFT */}
//         <div className="why-dark-left">
//           <h2>
//             Why <span>hire us</span> for your overall services?
//           </h2>

//           <p>
//             We deliver powerful digital solutions using strategy, creativity,
//             and performance-driven marketing. Our team focuses on real growth,
//             measurable results, and long-term brand success.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="orbit-dark-wrap">
//           {/* OUTER */}
//           <div className="orbit-ring-dark">
//             <div className="orbit-icon-dark o1">📊</div>
//             <div className="orbit-icon-dark o2">🔗</div>
//             <div className="orbit-icon-dark o3">▶️</div>
//             <div className="orbit-icon-dark o4">📸</div>
//             <div className="orbit-icon-dark o5">📈</div>
//             <div className="orbit-icon-dark o6">🌐</div>
//           </div>

//           {/* INNER */}
//           <div className="orbit-ring-dark inner">
//             <div className="orbit-icon-dark o7">🔍</div>
//             <div className="orbit-icon-dark o8">f</div>
//             <div className="orbit-icon-dark o9">in</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// // fourth services

// function WhySEeOHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function WhyDigitalStrategyHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyWebDevelopmentHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyBrandConsultancyHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyCreativeDesignHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyBusinessAnalysisHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyContentDesignHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhySocialMediaHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function WhyEcommerceHeroDark() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const css = `
//       .seo-hero-dark{
//         min-height:90vh;
//         display:grid;
//         place-items:center;
//         background:radial-gradient(circle at top,#0b1220,#020617 70%);
//         font-family:Inter,system-ui;
//         color:#e5e7eb;
//         overflow:hidden;
//         padding:100px 7vw;
//       }

//       .seo-hero-grid{
//         max-width:1300px;
//         width:100%;
//         display:grid;
//         grid-template-columns:1.1fr .9fr;
//         gap:80px;
//         align-items:center;
//       }

//       /* LEFT CONTENT */
//       .seo-left{
//         opacity:0;
//         transform:translateY(40px);
//         transition:all 1s ease;
//       }

//       .seo-hero-dark.show .seo-left{
//         opacity:1;
//         transform:none;
//       }

//       .seo-left h1{
//         font-size:42px;
//         font-weight:900;
//         line-height:1.2;
//         margin-bottom:24px;
//         color:#fff;
//       }

//       // .seo-left h1 span{
//       //   color:#ff2d2d;
//       // }
// .seo-left h1 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

//       .seo-left p{
//         font-size:18px;
//         line-height:1.9;
//         color:#cbd5f5;
//         max-width:560px;
//       }

//       /* RIGHT VISUAL */
//       .seo-right{
//         position:relative;
//         display:flex;
//         align-items:center;
//         justify-content:center;
//         opacity:0;
//         transform:scale(.85);
//         transition:all 1s ease .2s;
//       }

//       .seo-hero-dark.show .seo-right{
//         opacity:1;
//         transform:scale(1);
//       }

//       /* MEGAPHONE BODY */
//       .megaphone{
//         width:220px;
//         height:160px;
//         background:linear-gradient(135deg,#a855f7,#ec4899);
//         border-radius:40px 80px 80px 40px;
//         position:relative;
//         box-shadow:
//           0 30px 90px rgba(168,85,247,.6),
//           inset 0 0 30px rgba(255,255,255,.25);
//       }

//       .megaphone::after{
//         content:"";
//         position:absolute;
//         right:-40px;
//         top:35px;
//         width:50px;
//         height:90px;
//         background:#7c3aed;
//         border-radius:18px;
//         box-shadow:0 0 40px rgba(124,58,237,.8);
//       }

//       /* HANDLE */
//       .handle{
//         position:absolute;
//         bottom:-70px;
//         right:20px;
//         width:34px;
//         height:90px;
//         background:#6366f1;
//         border-radius:16px;
//         transform:rotate(18deg);
//         box-shadow:0 20px 50px rgba(99,102,241,.6);
//       }

//       /* SEO TEXT */
//       .seo-text{
//         position:absolute;
//         left:-80px;
//         top:-40px;
//         font-size:72px;
//         font-weight:900;
//         letter-spacing:.08em;
//         color:#f59e0b;
//         filter:drop-shadow(0 10px 40px rgba(245,158,11,.8));
//         animation:floatSEO 3s ease-in-out infinite;
//       }

//       @keyframes floatSEO{
//         0%,100%{transform:translateY(0)}
//         50%{transform:translateY(-14px)}
//       }

//       /* SOUND LINES */
//       .sound{
//         position:absolute;
//         right:-80px;
//         top:40px;
//         width:16px;
//         height:60px;
//         border-radius:8px;
//         background:linear-gradient(#fb7185,#f472b6);
//         box-shadow:0 0 30px rgba(244,114,182,.9);
//         animation:pulse 1.8s infinite;
//       }

//       .sound.s2{right:-110px;height:40px;top:60px;animation-delay:.4s}
//       .sound.s3{right:-140px;height:20px;top:80px;animation-delay:.8s}

//       @keyframes pulse{
//         0%{opacity:.3}
//         50%{opacity:1}
//         100%{opacity:.3}
//       }

//       /* RESPONSIVE */
//       @media(max-width:900px){
//         .seo-hero-grid{
//           grid-template-columns:1fr;
//           text-align:center;
//         }
//         .seo-left p{
//           margin:auto;
//         }
//       }
//     `;

//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);

//     const observer = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) e.target.classList.add("show");
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       style.remove();
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <section className="seo-hero-dark" ref={ref}>
//       <div className="seo-hero-grid">
//         {/* LEFT */}
//         <div className="seo-left">
//           <h1>
//             Why <span>Search Engine Optimisation</span>?
//           </h1>

//           <p>
//             Search Engine Optimisation (SEO) improves your website’s visibility
//             on search engine results pages. The goal is to appear on the first
//             page of Google for keywords your customers are actively searching,
//             driving consistent traffic and real business growth.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="seo-right">
//           <div className="megaphone">
//             <div className="seo-text">SEO</div>
//             <div className="sound"></div>
//             <div className="sound s2"></div>
//             <div className="sound s3"></div>
//             <div className="handle"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // fifth services

// function FAQSEO() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
// function FAQDigitalStrategy() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQWebDevelopment() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQBrandConsultancy() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQCreativeDesign() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQBusinessAnalysis() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// function FAQContentDesign() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQSocialMedia() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQEcommerce() {
//   const [openFaq, setOpenFaq] = useState(-1);
//   const sectionRef = useRef(null);

//   /* ================= STYLES ================= */
//   useEffect(() => {
//     const css = `
// /* ================= HOME FAQ (UPGRADED) ================= */

// .home-faq-wrap{
//   background: radial-gradient(circle at top, #0b1220, #020617 70%);
//   padding:110px 6vw;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }
// /* ================= GAP / STRIP FIX ================= */

// *{
//   box-sizing:border-box;
// }

// html, body{
//   margin:0;
//   padding:0;
//   overflow-x:hidden;
// }

// .home-faq-container{
//   max-width:1100px;
//   margin:auto;
// }

// .home-faq-title{
//   text-align:center;
//   font-size:42px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#B90504;
// }

// .home-faq-sub{
//   text-align:center;
//   color:#cfcfcf;
//   font-size:16px;
//   margin-bottom:50px;
// }

// /* CARD */
// .home-faq-card{
//   // background:#141414;
//   border-radius:26px;
//   padding:36px;
//   box-shadow:0 30px 90px rgba(185,5,4,0.35);
// }

// /* ITEM */
// .home-faq-item{
//   border-top:1px solid rgba(255,255,255,0.1);
//   padding:20px 8px;
//   transition:background .25s ease, transform .25s ease;
// }

// .home-faq-item:last-child{
//   border-bottom:1px solid rgba(255,255,255,0.1);
// }

// .home-faq-item:hover{
//   background:#1b1b1b;
//   transform:translateY(-4px);
// }

// /* HEADER */
// .home-faq-header{
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   cursor:pointer;
//   gap:16px;
// }

// /* QUESTION */
// .home-faq-question{
//   font-size:18px;
//   font-weight:700;
//   color:#ffffff;
//   transition:color .25s ease;
// }

// .home-faq-item.open .home-faq-question{
//   color:#B90504;
// }

// /* TOGGLE */
// .home-faq-toggle{
//   width:34px;
//   height:34px;
//   border-radius:50%;
//   border:2px solid #B90504;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:18px;
//   font-weight:900;
//   color:#B90504;
//   transition:all .3s ease;
// }

// .home-faq-item.open .home-faq-toggle{
//   background:#B90504;
//   color:#ffffff;
//   transform:rotate(180deg);
// }

// /* ANSWER – SMOOTH */
// .home-faq-answer{
//   max-height:0;
//   overflow:hidden;
//   opacity:0;
//   transform:translateY(-6px);
//   transition:
//     max-height .45s cubic-bezier(0.16,1,0.3,1),
//     opacity .3s ease,
//     transform .3s ease;
// }

// .home-faq-item.open .home-faq-answer{
//   max-height:300px;
//   opacity:1;
//   transform:translateY(0);
// }

// .home-faq-answer p{
//   margin-top:14px;
//   font-size:15px;
//   line-height:1.7;
//   color:#cfcfcf;
// }

// /* CTA */
// .home-faq-cta{
//   margin-top:48px;
//   padding:36px;
//   border-radius:22px;
//   background:linear-gradient(135deg,#B90504,#ff3b3b);
//   text-align:center;
//   box-shadow:0 30px 90px rgba(185,5,4,0.45);
// }

// .home-faq-cta h3{
//   font-size:26px;
//   font-weight:900;
//   margin-bottom:12px;
//   color:#ffffff;
// }

// .home-faq-cta p{
//   font-size:16px;
//   color:#ffffff;
//   margin-bottom:22px;
// }

// .home-faq-cta button{
//   padding:14px 36px;
//   border-radius:999px;
//   border:none;
//   background:#ffffff;
//   color:#000;
//   font-size:15px;
//   font-weight:800;
//   cursor:pointer;
//   transition:all .3s ease;
// }

// .home-faq-cta button:hover{
//   transform:translateY(-4px) scale(1.05);
//   box-shadow:0 20px 60px rgba(0,0,0,0.4);
// }

// /* MOBILE */
// @media(max-width:768px){
//   .home-faq-wrap{padding:70px 20px;}
//   .home-faq-title{font-size:28px;}
//   .home-faq-question{font-size:16px;}
// }


// /* ----- FAQ TITLE ----- */
// .home-faq-title{
//   color:transparent !important;
//   text-align:center;
// }

// /* White part */
// .home-faq-title .faq-title-white{
//   color:#ffffff !important;
// }

// /* Gradient part */
// .home-faq-title .faq-title-gradient{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* Disable hover on FAQ title */
// .home-faq-title,
// .home-faq-title *{
//   pointer-events:none;
// }

// /* ----- FAQ QUESTIONS ----- */
// .home-faq-question{
//   color:#ffffff !important;
// }

// /* ----- FAQ ANSWERS ----- */
// .home-faq-answer p{
//   color:#ffffff !important;
// }

// /* ----- PLUS / MINUS BUTTON (GRADIENT) ----- */
// .home-faq-toggle{
//   border:none !important;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
//   color:#ffffff !important;
//   box-shadow:0 0 20px rgba(139,92,246,0.6);
// }

// /* Minus state */
// .home-faq-item.open .home-faq-toggle{
//   background:linear-gradient(135deg,#7c3aed,#db2777) !important;
//   color:#ffffff !important;
// }

// /* Remove red hover influence */
// .home-faq-toggle:hover{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899) !important;
// }


// /* ================= FAQ CTA WHITE BOX FIX ================= */

// /* White container */
// .home-faq-cta{
//   background:#ffffff !important;
//   box-shadow:0 30px 90px rgba(0,0,0,0.25);
// }

// /* Heading inside CTA */
// .home-faq-cta h3{
//   color:#020617 !important;   /* dark text */
// }

// /* Subtitle text */
// .home-faq-cta p{
//   color:#475569 !important;   /* soft dark grey */
// }
//     `;

//     const id = "home-faq-style-upgraded";
//     if (!document.getElementById(id)) {
//       const style = document.createElement("style");
//       style.id = id;
//       style.innerHTML = css;
//       document.head.appendChild(style);
//     }
//   }, []);

//   /* ================= AUTO-OPEN ON SCROLL ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setOpenFaq(0); // open first FAQ automatically
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const faqs = [
//     {
//       q: "Which service should I start with?",
//       a: "If you’re new, start with a professional website and basic SEO. Once traffic grows, ads and social media help scale faster."
//     },
//     {
//       q: "Do you work with small businesses?",
//       a: "Yes. We work with startups, local businesses, and growing brands with flexible plans."
//     },
//     {
//       q: "How long does it take to see results?",
//       a: "Websites take 2–4 weeks. SEO and marketing show strong results within 2–3 months."
//     },
//     {
//       q: "Do you provide ongoing support?",
//       a: "Yes. We offer monthly SEO, ads, website maintenance, and optimization services."
//     },
//     {
//       q: "How do I get started?",
//       a: "Fill out our contact form or call us. We’ll guide you with a clear, no-pressure strategy."
//     }
//   ];

//   /* ================= SEO SCHEMA ================= */
//   useEffect(() => {
//     const schema = {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(f => ({
//         "@type": "Question",
//         "name": f.q,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": f.a
//         }
//       }))
//     };

//     const script = document.createElement("script");
//     script.type = "application/ld+json";
//     script.innerHTML = JSON.stringify(schema);
//     document.head.appendChild(script);

//     return () => document.head.removeChild(script);
//   }, []);

//   return (
//     <section className="home-faq-wrap" ref={sectionRef}>
//       <div className="home-faq-container">
//         <h2 className="home-faq-title">
//   <span className="faq-title-white">Frequently Asked</span>{" "}
//   <span className="faq-title-gradient">Questions</span>
// </h2>

//         {/* <h2 className="home-faq-title">Frequently Asked Questions</h2> */}
//         <p className="home-faq-sub">
//           Clear answers to help you move forward with confidence.
//         </p>

//         <div className="home-faq-card">
//           {faqs.map((item, i) => {
//             const open = openFaq === i;
//             return (
//               <div
//                 key={item.q}
//                 className={"home-faq-item" + (open ? " open" : "")}
//               >
//                 <div
//                   className="home-faq-header"
//                   onClick={() => setOpenFaq(open ? -1 : i)}
//                 >
//                   <div className="home-faq-question">{item.q}</div>
//                   <div className="home-faq-toggle">{open ? "−" : "+"}</div>
//                 </div>

//                 <div className="home-faq-answer">
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA */}
//         <div className="home-faq-cta">
//           <h3>Still have questions?</h3>
//           <p>Talk directly with our experts and get a custom growth plan.</p>
//           <button onClick={() => window.location.href="/contact"}>
//             BOOK FREE CONSULTATION →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// export default function ServiceDetailPage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const service = SERVICE_DETAILS[slug];

//   useEffect(() => {
//     const css = `
//       :root{
//         --accent-red:#B90504;
//         --bg-grey:#E8E8E8;
//         --text-dark:#202326;
//         --aqua:#6CC4C1;
//       }

//       *{box-sizing:border-box;}
//       body{margin:0;}

//       .sd-wrap{
//         min-height:100vh;
//         background:var(--bg-grey);
//         color:var(--text-dark);
//         font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial;
//       }

      
     
      

//       .sd-section{
//         padding:80px 7vw;
//         border-bottom:1px solid rgba(0,0,0,0.04);
//       }
//       .sd-max{
//         max-width:1100px;
//         margin:0 auto;
//       }

//       .sd-hero{
//         background:radial-gradient(circle at top left,#ffffff 0,#E8E8E8 55%,#dcdcdc 100%);
//       }
//       .sd-hero-layout{
//         display:grid;
//         grid-template-columns:minmax(0,1.4fr) minmax(0,0.8fr);
//         gap:40px;
//         align-items:center;
//       }
//       .sd-pill{
//         display:inline-flex;
//         align-items:center;
//         gap:8px;
//         padding:4px 10px;
//         border-radius:999px;
//         background:#ffffff;
//         border:1px solid rgba(0,0,0,0.06);
//         font-size:12px;
//         letter-spacing:0.12em;
//         text-transform:uppercase;
//         margin-bottom:14px;
//       }
//       .sd-title{
//         font-size:50px;
//         font-weight:900;
//         line-height:1.05;
//         margin:0 0 14px 0;
//       }
//       .sd-punch{
//         font-size:20px;
//         font-weight:600;
//         color:var(--accent-red);
//         margin-bottom:18px;
//       }
//       .sd-intro{
//         font-size:16px;
//         line-height:1.8;
//         color:#333;
//       }

//       .sd-hero-card{
//         background:#ffffff;
//         border-radius:26px;
//         padding:26px 24px;
//         box-shadow:0 34px 100px rgba(185,5,4,0.28);
//         border:1px solid rgba(0,0,0,0.04);
//         animation:sdFloatCard 9s ease-in-out infinite;
//       }
//       @keyframes sdFloatCard{
//         0%{transform:translateY(0);}
//         25%{transform:translateY(-8px);}
//         50%{transform:translateY(0);}
//         75%{transform:translateY(6px);}
//         100%{transform:translateY(0);}
//       }
//       .sd-hero-card h3{
//         margin:0 0 10px 0;
//         font-size:18px;
//         font-weight:800;
//         color:var(--accent-red);
//       }
//       .sd-hero-card p{
//         margin:0;
//         font-size:14px;
//         color:#444;
//       }
//       .sd-hero-stats{
//         display:flex;
//         justify-content:space-between;
//         margin-top:20px;
//       }
//       .sd-stat{
//         text-align:center;
//       }
//       .sd-stat span{
//         display:block;
//       }
//       .sd-stat .number{
//         font-size:26px;
//         font-weight:800;
//       }
//       .sd-stat .label{
//         font-size:11px;
//         text-transform:uppercase;
//         letter-spacing:0.14em;
//         opacity:0.7;
//       }

//       .sd-highlights-grid{
//         display:grid;
//         grid-template-columns:1.2fr 0.8fr;
//         gap:32px;
//       }
//       .sd-bullets-card,
//       .sd-flow-card{
//         background:#ffffff;
//         border-radius:22px;
//         padding:24px 22px;
//         box-shadow:0 24px 70px rgba(185,5,4,0.22);
//         border:1px solid rgba(0,0,0,0.05);
//       }
//       .sd-bullets-title,
//       .sd-flow-title{
//         font-size:18px;
//         font-weight:800;
//         margin-bottom:10px;
//         color:var(--accent-red);
//       }
//       .sd-bullets-list{
//         padding-left:18px;
//         margin:0;
//       }
//       .sd-bullets-list li{
//         margin-bottom:8px;
//         font-size:14px;
//         color:#444;
//       }

//       .sd-flow-step{
//         margin-bottom:8px;
//         font-size:14px;
//         color:#444;
//       }
//       .sd-flow-step span{
//         font-weight:800;
//       }

//       .sd-cta-strip{
//         margin-top:26px;
//         display:flex;
//         flex-wrap:wrap;
//         gap:14px;
//         align-items:center;
//       }
//       .sd-cta-btn{
//         padding:12px 22px;
//         border-radius:999px;
//         border:none;
//         font-size:15px;
//         font-weight:800;
//         cursor:pointer;
//         background:var(--accent-red);
//         color:#fff;
//         box-shadow:0 18px 50px rgba(185,5,4,0.4);
//         transition:transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
//       }
//       .sd-cta-btn:hover{
//         transform:translateY(-4px);
//         background:#9b0403;
//         box-shadow:0 26px 70px rgba(185,5,4,0.5);
//       }
//       .sd-cta-note{
//         font-size:14px;
//         color:#444;
//       }

//       .sd-breadcrumb{
//         font-size:13px;
//         margin-bottom:10px;
//       }
//       .sd-breadcrumb a{
//         color:var(--accent-red);
//         text-decoration:none;
//         font-weight:600;
//       }

//       .sd-back-link{
//         font-size:14px;
//         color:var(--accent-red);
//         cursor:pointer;
//         text-decoration:none;
//         font-weight:600;
//       }

//       @media(max-width:900px){
//         .sd-section{padding:60px 24px;}
//         .sd-hero-layout{grid-template-columns:1fr;}
//         .sd-title{font-size:38px;}
//         .sd-highlights-grid{grid-template-columns:1fr;}
//       }

// /* ================= MOBILE VIEW (Service Detail) ================= */
// @media (max-width: 480px){

//   .sd-section{
//     padding:40px 16px;
//   }

//   .sd-title{
//     font-size:28px;
//     line-height:1.25;
//   }

//   .sd-punch{
//     font-size:16px;
//   }

//   .sd-intro{
//     font-size:14px;
//     line-height:1.7;
//   }

//   .sd-hero-card{
//     padding:18px 16px;
//   }

//   .sd-hero-card h3{
//     font-size:16px;
//   }

//   .sd-stat .number{
//     font-size:22px;
//   }

//   .sd-stat .label{
//     font-size:10px;
//   }

//   .sd-highlights-grid{
//     grid-template-columns:1fr;
//     gap:20px;
//   }

//   .sd-bullets-card,
//   .sd-flow-card{
//     padding:18px 16px;
//   }

//   .sd-bullets-title,
//   .sd-flow-title{
//     font-size:16px;
//   }

//   .sd-bullets-list li{
//     font-size:13px;
//   }

//   .sd-flow-step{
//     font-size:13px;
//   }

//   .sd-cta-strip{
//     flex-direction:column;
//     align-items:flex-start;
//   }

//   .sd-cta-btn{
//     width:100%;
//     text-align:center;
//     font-size:14px;
//     padding:12px 18px;
//   }

//   .sd-cta-note{
//     font-size:13px;
//   }

//   /* HEADER MOBILE FIX */
//   .sf-nav{
//     display:none;
//   }
// }

// /* ================= USER-FRIENDLY TYPOGRAPHY (SERVICE DETAIL) ================= */

// /* Base text */
// .sd-wrap{
//   font-size:16px;
//   line-height:1.75;
//   letter-spacing:0.2px;
// }

// /* Main title */
// .sd-title{
//   font-weight:800;
// }

// /* Punch line */
// .sd-punch{
//   font-weight:700;
// }

// /* Intro paragraph */
// .sd-intro{
//   font-weight:500;
// }

// /* Hero card text */
// .sd-hero-card h3{
//   font-weight:800;
// }
// .sd-hero-card p{
//   font-weight:500;
// }

// /* Stats */
// .sd-stat .number{
//   font-weight:800;
// }
// .sd-stat .label{
//   font-weight:600;
// }

// /* Section titles */
// .sd-bullets-title,
// .sd-flow-title{
//   font-weight:800;
// }

// /* Bullet & flow text */
// .sd-bullets-list li,
// .sd-flow-step{
//   font-weight:500;
// }

// /* CTA */
// .sd-cta-btn{
//   font-weight:800;
// }
// .sd-cta-note{
//   font-weight:500;
// }

// /* Breadcrumb */
// .sd-breadcrumb,
// .sd-breadcrumb a{
//   font-weight:600;
// }

// /* ================= MOBILE ================= */
// @media(max-width:768px){

//   .sd-title{
//     font-weight:800;
//   }

//   .sd-punch,
//   .sd-intro,
//   .sd-bullets-list li,
//   .sd-flow-step{
//     font-weight:500;
//   }

// }
// .sf-logo .mark{
//   width:48px;
//   height:48px;
//   border-radius:12px;
//   overflow:hidden;
//   background:#fff;
// }

// .sf-logo .logo-img{
//   width:100%;
//   height:100%;
//   object-fit:contain;
// }

// /* ================= ENHANCED TYPOGRAPHY + HOVER (SERVICE DETAIL) ================= */

// /* Base text */
// .sd-wrap{
//   font-size:17px;                 /* ⬆️ slightly bigger */
//   line-height:1.85;
//   letter-spacing:0.25px;
// }

// /* Main title */
// .sd-title{
//   font-size:52px;                 /* ⬆️ */
//   font-weight:800;
//   transition:color 0.25s ease;
// }

// /* Punch line */
// .sd-punch{
//   font-size:22px;                 /* ⬆️ */
//   font-weight:700;
// }

// /* Intro paragraph */
// .sd-intro{
//   font-size:17px;                 /* ⬆️ */
//   font-weight:500;
// }

// /* Hero card */
// .sd-hero-card h3{
//   font-size:19px;
//   font-weight:800;
// }
// .sd-hero-card p{
//   font-size:15px;
//   font-weight:500;
// }

// /* Hero card hover */
// .sd-hero-card:hover{
//   transform:translateY(-6px);
//   box-shadow:0 38px 110px rgba(185,5,4,0.35);
// }

// /* Stats */
// .sd-stat .number{
//   font-size:28px;
//   font-weight:800;
// }
// .sd-stat .label{
//   font-size:12px;
//   font-weight:600;
// }

// /* Section titles */
// .sd-bullets-title,
// .sd-flow-title{
//   font-size:19px;
//   font-weight:800;
// }

// /* Bullet points */
// .sd-bullets-list li{
//   font-size:15px;
//   font-weight:500;
//   transition:transform 0.2s ease, color 0.2s ease;
// }

// /* Bullet hover */
// .sd-bullets-list li:hover{
//   transform:translateX(4px);
//   color:var(--accent-red);
// }

// /* Flow steps */
// .sd-flow-step{
//   font-size:15px;
//   font-weight:500;
//   transition:transform 0.2s ease;
// }
// .sd-flow-step:hover{
//   transform:translateX(4px);
// }

// /* CTA button hover polish */
// .sd-cta-btn{
//   font-size:16px;
//   font-weight:800;
// }
// .sd-cta-btn:hover{
//   transform:translateY(-5px);
// }

// /* Breadcrumb */
// .sd-breadcrumb,
// .sd-breadcrumb a{
//   font-size:14px;
//   font-weight:600;
// }

// /* Breadcrumb hover */
// .sd-breadcrumb a:hover{
//   text-decoration:underline;
// }

// /* ================= MOBILE ================= */
// @media(max-width:768px){

//   .sd-title{
//     font-size:32px;
//   }

//   .sd-punch{
//     font-size:17px;
//   }

//   .sd-intro{
//     font-size:15px;
//   }

//   .sd-bullets-list li,
//   .sd-flow-step{
//     font-size:14px;
//   }
// }

//     `;

//     const prev = document.getElementById("service-detail-page-styles");
//     if (prev) prev.remove();
//     const styleTag = document.createElement("style");
//     styleTag.id = "service-detail-page-styles";
//     styleTag.innerHTML = css;
//     document.head.appendChild(styleTag);

//     return () => {
//       const el = document.getElementById("service-detail-page-styles");
//       if (el) el.remove();
//     };
//   }, []);

//   if (!service) {
//     return (
//       <div className="sd-wrap">
       

//         <header className="sf-header">
//           <div className="sf-header-inner">
//             <div style={{ width: 120 }} />
//             <nav className="sf-nav" aria-label="Main navigation">
//               <Link className="nav-btn" to="/">Home</Link>
//               <Link className="nav-btn" to="/about">About Us</Link>
//               <Link className="nav-btn" to="/services">Services</Link>
//             </nav>
//           </div>
//         </header>
//         <section className="sd-section">
//           <div className="sd-max">
//             <p>Service not found.</p>
//             <Link to="/services" className="sd-back-link">
//               ← Back to all services
//             </Link>
//           </div>
//         </section>
//       </div>
//     );
//   }
//   return (
//     <div className="sd-wrap">  
//      {/*first slide  */}

// {slug === "digital-strategy" && <DigitalStrategyHero />}

// {slug === "web-development" && <WebDevelopmentHero />}

// {slug === "brand-consultancy" && <BrandConsultancyHero />}

// {slug === "creative-design" && <CreativeDesignHero />}

// {slug === "business-analysis" && <BusinessAnalysisHero />}

// {slug === "content-design" && <ContentDesignHero />}

// {slug === "social-media-marketing" && <SocialMediaHero />}

// {slug === "ecommerce-website" && <EcommerceHero />}

// {slug === "seo" && <SEOHero />}

// {/* second slide */}

// {slug === "seo" && <SecondSlideSEO />}

// {slug === "digital-strategy" && <SecondSlideDigitalStrategy />}

// {slug === "web-development" && <SecondSlideWebDevelopment />}

// {slug === "brand-consultancy" && <SecondSlideBrandConsultancy />}

// {slug === "creative-design" && <SecondSlideCreativeDesign />}

// {slug === "business-analysis" && <SecondSlideBusinessAnalysis />}

// {slug === "content-design" && <SecondSlideContentDesign />}

// {slug === "social-media-marketing" && <SecondSlideSocialMedia />}

// {slug === "ecommerce-website" && <SecondSlideEcommerce />}


// {/* third slide */}
// {slug === "digital-strategy" && <ServicesGridDigitalStrategy />}

// {slug === "web-development" && <ServicesGridWebDevelopment />}

// {slug === "brand-consultancy" && <ServicesGridBrandConsultancy />}

// {slug === "creative-design" && <ServicesGridCreativeDesign />}

// {slug === "business-analysis" && <ServicesGridBusinessAnalysis />}

// {slug === "content-design" && <ServicesGridContentDesign />}

// {slug === "social-media-marketing" && <ServicesGridSocialMedia />}

// {slug === "ecommerce-website" && <ServicesGridEcommerce />}

// {slug === "seo" && <ServicesGridSEO />}

// {/* <Seo /> */}

// {/* fourth services */}

// {slug === "seo" && <WhySEeOHeroDark />}

// {slug === "digital-strategy" && <WhyDigitalStrategyHeroDark />}

// {slug === "web-development" && <WhyWebDevelopmentHeroDark />}

// {slug === "brand-consultancy" && <WhyBrandConsultancyHeroDark />}

// {slug === "creative-design" && <WhyCreativeDesignHeroDark />}

// {slug === "business-analysis" && <WhyBusinessAnalysisHeroDark />}

// {slug === "content-design" && <WhyContentDesignHeroDark />}

// {slug === "social-media-marketing" && <WhySocialMediaHeroDark />}

// {slug === "ecommerce-website" && <WhyEcommerceHeroDark />}




// {/* fiffth slide */}

// {slug === "seo" && <FAQSEO />}
// {slug === "digital-strategy" && <FAQDigitalStrategy />}
// {slug === "web-development" && <FAQWebDevelopment />}
// {slug === "brand-consultancy" && <FAQBrandConsultancy />}
// {slug === "creative-design" && <FAQCreativeDesign />}
// {slug === "business-analysis" && <FAQBusinessAnalysis />}
// {slug === "content-design" && <FAQContentDesign />}
// {slug === "social-media-marketing" && <FAQSocialMedia />}
// {slug === "ecommerce-website" && <FAQEcommerce />}

//       {/* <HomeFAQSection /> */}
//        <CTASection />
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import React from "react";
// import { useParams } from "react-router-dom";

// /* SEO */
// import {
//   SEOHero,
//   SecondSlideSEO,
//   ServicesGridSEO,
//   WhySEOHeroDark,
//   FAQSEO
// } from "./Seo";

// /* Ecommerce */
// import {
//   EcommerceHero,
//   SecondSlideEcommerce,
//   ServicesGridEcommerce,
//   WhyEcommerceHeroDark,
//   FAQEcommerce
// } from "./Ecommerce";

// /* Social Media */
// import {
//   SocialMediaHero,
//   SecondSlideSocialMedia,
//   ServicesGridSocialMedia,
//   WhySocialMediaHeroDark,
//   FAQSocialMedia
// } from "./SocialMedia";

// /* Content Design */
// import {
//   ContentDesignHero,
//   SecondSlideContentDesign,
//   ServicesGridContentDesign,
//   WhyContentDesignHeroDark,
//   FAQContentDesign
// } from "./ContentDesign";

// /* Business Analysis */
// import {
//   BusinessAnalysisHero,
//   SecondSlideBusinessAnalysis,
//   ServicesGridBusinessAnalysis,
//   WhyBusinessAnalysisHeroDark,
//   FAQBusinessAnalysis
// } from "./BusinessAnalysis";

// /* Creative Design */
// import {
//   CreativeDesignHero,
//   SecondSlideCreativeDesign,
//   ServicesGridCreativeDesign,
//   WhyCreativeDesignHeroDark,
//   FAQCreativeDesign
// } from "./CreativeDesign";

// /* Brand Consultancy */
// import {
//   BrandConsultancyHero,
//   SecondSlideBrandConsultancy,
//   ServicesGridBrandConsultancy,
//   WhyBrandConsultancyHeroDark,
//   FAQBrandConsultancy
// } from "./BrandConsultancy";

// /* Web Development */
// import {
//   WebDevelopmentHero,
//   SecondSlideWebDevelopment,
//   ServicesGridWebDevelopment,
//   WhyWebDevelopmentHeroDark,
//   FAQWebDevelopment
// } from "./WebDevelopment";

// /* Digital Strategy */
// import {
//   DigitalStrategyHero,
//   SecondSlideDigitalStrategy,
//   ServicesGridDigitalStrategy,
//   WhyDigitalStrategyHeroDark,
//   FAQDigitalStrategy
// } from "./DigitalStrategy";

// /* SHARED CTA */
// // import CTASection from "./CTASection";
// import CTASection from "./CTASection";

// const SERVICE_MAP = {
//   seo: {
//     first: SEOHero,
//     second: SecondSlideSEO,
//     third: ServicesGridSEO,
//     fourth: WhySEOHeroDark,
//     fifth: FAQSEO,
//     sixth: CTASection
//   },

//   "ecommerce-website": {
//     first: EcommerceHero,
//     second: SecondSlideEcommerce,
//     third: ServicesGridEcommerce,
//     fourth: WhyEcommerceHeroDark,
//     fifth: FAQEcommerce,
//     sixth: CTASection
//   },

//   "social-media-marketing": {
//     first: SocialMediaHero,
//     second: SecondSlideSocialMedia,
//     third: ServicesGridSocialMedia,
//     fourth: WhySocialMediaHeroDark,
//     fifth: FAQSocialMedia,
//     sixth: CTASection
//   },

//   "content-design": {
//     first: ContentDesignHero,
//     second: SecondSlideContentDesign,
//     third: ServicesGridContentDesign,
//     fourth: WhyContentDesignHeroDark,
//     fifth: FAQContentDesign,
//     sixth: CTASection
//   },

//   "business-analysis": {
//     first: BusinessAnalysisHero,
//     second: SecondSlideBusinessAnalysis,
//     third: ServicesGridBusinessAnalysis,
//     fourth: WhyBusinessAnalysisHeroDark,
//     fifth: FAQBusinessAnalysis,
//     sixth: CTASection
//   },

//   "creative-design": {
//     first: CreativeDesignHero,
//     second: SecondSlideCreativeDesign,
//     third: ServicesGridCreativeDesign,
//     fourth: WhyCreativeDesignHeroDark,
//     fifth: FAQCreativeDesign,
//     sixth: CTASection
//   },

//   "brand-consultancy": {
//     first: BrandConsultancyHero,
//     second: SecondSlideBrandConsultancy,
//     third: ServicesGridBrandConsultancy,
//     fourth: WhyBrandConsultancyHeroDark,
//     fifth: FAQBrandConsultancy,
//     sixth: CTASection
//   },

//   "web-development": {
//     first: WebDevelopmentHero,
//     second: SecondSlideWebDevelopment,
//     third: ServicesGridWebDevelopment,
//     fourth: WhyWebDevelopmentHeroDark,
//     fifth: FAQWebDevelopment,
//     sixth: CTASection
//   },

//   "digital-strategy": {
//     first: DigitalStrategyHero,
//     second: SecondSlideDigitalStrategy,
//     third: ServicesGridDigitalStrategy,
//     fourth: WhyDigitalStrategyHeroDark,
//     fifth: FAQDigitalStrategy,
//     sixth: CTASection
//   }
// };

// export default function ServiceDetail() {
//   const { slug } = useParams();
//   const service = SERVICE_MAP[slug];

//   if (!service) return null;

//   return (
//     <>
//       <service.first />
//       <service.second />
//       <service.third />
//       <service.fourth />
//       <service.fifth />
//       <service.sixth />
//     </>
//   );
// }
