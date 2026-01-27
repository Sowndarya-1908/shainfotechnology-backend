// import { useParams, Link } from "react-router-dom";
// import React, { useEffect } from "react";

//  function BlogHeader() {
//   useEffect(() => {
//     const css = `
// /* ================= BLOG HEADER ================= */
// .sha-blog-header{
//   // padding:120px 6vw 60px;
//   // background:linear-gradient(
//   //   135deg,
//   //   rgba(99,102,241,0.20),
//   //   rgba(168,85,247,0.18),
//   //   rgba(236,72,153,0.15)
//   // );
//   backdrop-filter:blur(12px);
//   -webkit-backdrop-filter:blur(12px);
//   // border-bottom:1px solid rgba(255,255,255,0.15);

//   text-align:center;
//   color:#ffffff;
//   font-family:Inter,system-ui;
// }

// /* TITLE */
// .sha-blog-header h1{
//   font-size:36px;
//   font-weight:900;
//   line-height:1.25;
//   max-width:900px;
//   margin:0 auto 18px;
//   background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* DESCRIPTION */
// .sha-blog-header p{
//   font-size:17px;
//   max-width:780px;
//   margin:0 auto;
//   color:#e5e7eb;
//   line-height:1.7;
// }

// /* ================= RESPONSIVE ================= */
// @media(max-width:768px){
//   .sha-blog-header{
//     padding:90px 5vw 50px;
//   }
//   .sha-blog-header h1{
//     font-size:28px;
//   }
//   .sha-blog-header p{
//     font-size:15px;
//   }
// }

// @media(max-width:480px){
//   .sha-blog-header{
//     padding:70px 5vw 40px;
//   }
//   .sha-blog-header h1{
//     font-size:24px;
//   }
//   .sha-blog-header p{
//     font-size:14px;
//   }
// }
//     `;
    
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section className="sha-blog-header">
//       <h1>
//         Sha Infotech – One of the Best Digital Marketing Companies in Chennai
//       </h1>
//       <p>
//        Sha Infotech is a results-focused digital marketing company in Chennai delivering customized marketing solutions for startups, SMEs, and enterprises.<br></br>
//      We focus on ROI-driven digital strategies that align with your business goals, market trends, and local audience behavior.
//       </p>
//     </section>
//   );
// }


//  function BlogWhySha() {
//   useEffect(() => {
//     const css = `
// /* ================= WHY SHA SECTION ================= */
// .sha-why{
//   padding:90px 6vw;
 
//   backdrop-filter:blur(10px);
//   -webkit-backdrop-filter:blur(10px);
//   font-family:Inter,system-ui;
// }

// /* GRID */
// .sha-why-grid{
//   display:grid;
//   grid-template-columns:1fr 1fr;
//   gap:40px;
//   max-width:1100px;
//   margin:0 auto;
// }
// .sha-why h5{
//   font-size:36px;
//   font-weight:900;
//   line-height:1.25;
//   max-width:900px;
//   text-align:center;
//   margin:0 auto 18px;
//   background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* CARD */
// .sha-why-card{
//   background:rgba(255,255,255,0.12);
//   border:1px solid rgba(255,255,255,0.18);
//   padding:28px;
//   border-radius:18px;
//   backdrop-filter:blur(22px);
//   -webkit-backdrop-filter:blur(22px);
//   box-shadow:0 15px 45px rgba(0,0,0,0.25);
//   transition:0.25s;
//   color:#ffffff;
// }

// .sha-why-card:hover{
//   transform:translateY(-6px);
//   box-shadow:0 20px 60px rgba(0,0,0,0.35);
// }

// /* TITLE */
// .sha-why-card h3{
//   font-size:20px;
//   font-weight:800;
//   margin-bottom:12px;
//   background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* DESCRIPTION */
// .sha-why-card p{
//   font-size:15px;
//   line-height:1.7;
//   color:#e5e7eb;
// }

// /* ================= RESPONSIVE ================= */
// @media(max-width:900px){
//   .sha-why-grid{
//     grid-template-columns:1fr;
//     gap:28px;
//   }
// }

// @media(max-width:500px){
//   .sha-why{
//     padding:70px 5vw;
//   }
//   .sha-why-card{
//     padding:22px;
//   }
//   .sha-why-card h3{
//     font-size:18px;
//   }
//   .sha-why-card p{
//     font-size:14px;
//   }
// }
//     `;
    
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section className="sha-why">
//       <h5>Why Sha Infotech Stands Out Among Digital Marketing Companies in Chennai</h5>

//       <div className="sha-why-grid">
//         {/* CARD 1 */}
//         <div className="sha-why-card">
//           <h3>Customized Digital Strategies</h3>
//           <p>
//             We don’t use one-size-fits-all solutions. Every strategy is tailored to your industry, location, and goals.
//           </p>
//         </div>

//         {/* CARD 2 */}
//         <div className="sha-why-card">
//           <h3>Transparent Reporting & Analytics</h3>
//           <p>
//            Regular performance reports with measurable KPIs and clear insights.
//           </p>
//         </div>

//         {/* CARD 3 */}
//         <div className="sha-why-card">
//           <h3>Affordable Digital Marketing Packages</h3>
//           <p>
//            Flexible pricing models suitable for startups, local businesses, and growing enterprises in Chennai.
//           </p>
//         </div>

//         {/* CARD 4 */}
//         <div className="sha-why-card">
//           <h3>Local Market Expertise</h3>
//           <p>
//            Deep understanding of Chennai’s audience behavior, competition, and search trends.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
//  function IndustriesWeServe() {
//   useEffect(() => {
//     const css = `
// /* ===== INDUSTRIES SECTION ===== */
// .sha-industries{
//   // padding:40px 6vw;
//   // background:radial-gradient(circle at top,#0b1220,#020617 70%);
//   font-family:Inter,system-ui;
//   color:#ffffff;
//   overflow:hidden;
//   padding-bottom:60px;
// }

// /* HEADING */
// .sha-industries h2{
//   text-align:center;
//   font-size:clamp(34px,5vw,48px);
//   font-weight:900;
//   // margin-bottom:15px;
// }

// .sha-industries h2 span{
//   background:linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip:text;
//   -webkit-text-fill-color:transparent;
// }

// /* DESCRIPTION */
// .sha-industries p{
//   max-width:900px;
//   margin:0 auto 70px;
//   text-align:center;
//   font-size:16px;
//   line-height:1.8;
//   color:#cbd5f5;
// }

// /* SLIDER */
// .industry-slider{
//   overflow:hidden;
// }

// /* TRACK */
// .industry-track{
//   display:flex;
//   gap:70px;
//   width:max-content;
//   animation:scroll 26s linear infinite;
// }

// .industry-slider:hover .industry-track{
//   animation-play-state:paused;
// }

// /* ITEM */
// .industry-item{
//   min-width:220px;
//    padding-top:50px;
//   text-align:center;
// }

// /* ICON WRAP (NO SIZE CHANGE) */
// .industry-icon{
//   width:120px;
//   height:120px;
//   margin:0 auto 18px;
//   border-radius:50%;
//   border:2px solid rgba(139,92,246,0.6);
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   font-size:44px;
//   color:#8b5cf6;
//   background:rgba(255,255,255,0.02);
//   position:relative;
//   box-sizing:border-box;
//   transition:
//     transform .35s ease,
//     box-shadow .35s ease,
//     background .35s ease,
//     color .35s ease;
// }

// /* GLOW LAYER (NO LAYOUT IMPACT) */
// .industry-icon::after{
//   content:"";
//   position:absolute;
//   inset:-14px;
//   border-radius:50%;
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   opacity:0;
//   filter:blur(22px);
//   transition:opacity .35s ease;
//   z-index:-1;
  
// }

// /* HOVER — NO PADDING / SIZE CHANGE */
// .industry-item:hover .industry-icon{
//   background:linear-gradient(135deg,#8b5cf6,#ec4899);
//   color:#ffffff;
  
//   transform:translateY(-6px);
//   box-shadow:0 20px 50px rgba(139,92,246,.45);
// }

// .industry-item:hover .industry-icon::after{
//   opacity:.6;
  
// }

// /* TITLE */
// .industry-item h4{
//   font-size:18px;
//   font-weight:800;
//   color:#ffffff;
// }

// /* AUTO SCROLL */
// @keyframes scroll{
//   from{transform:translateX(0)}
//   to{transform:translateX(-50%)}
// }

// /* MOBILE */
// @media(max-width:768px){
//   .sha-industries{
//     padding:90px 20px;
//   }

//   .industry-item{
//     min-width:180px;
//   }

//   .industry-icon{
//     width:100px;
//     height:100px;
//     font-size:36px;
//   }
// }
//     `;
//     const style = document.createElement("style");
//     style.innerHTML = css;
//     document.head.appendChild(style);
//     return () => style.remove();
//   }, []);

//   const industries = [
//     { name: "Technology & Software", icon: "⚙️" },
//     { name: "Health Care", icon: "🏥" },
//     { name: "Food & Beverages", icon: "🍔" },
//     { name: "Finance", icon: "💰" },
//     { name: "Education", icon: "🎓" },
//     { name: "E-Commerce", icon: "🛒" },
//     { name: "Real Estate", icon: "🏢" },
//     { name: "Retail", icon: "🏬" }
//   ];

//   return (
//     <section className="sha-industries">
//       <h2>
//         Industries <span>We Serve</span>
//       </h2>

//       <p>
//         SHA Infotechnology delivers performance-driven digital solutions across
//         technology, healthcare, e-commerce, finance, education, and more—helping
//         businesses in Chennai and beyond grow visibility, engagement, and revenue.
//       </p>

//       <div className="industry-slider">
//         <div className="industry-track">
//           {[...industries, ...industries].map((item, i) => (
//             <div className="industry-item" key={i}>
//               <div className="industry-icon">{item.icon}</div>
//               <h4>{item.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//       <p>Our industry-focused approach helps deliver measurable results across diverse business sectors.</p>
//     </section>
//   );
// }

// export default function Blog() {

// React.useEffect(() => {
//   const handleProgress = () => {
//     const scrollTop = window.scrollY;
//     const docHeight = document.body.scrollHeight - window.innerHeight;
//     const progress = (scrollTop / docHeight) * 100;

//     const bar = document.getElementById("readingProgress");
//     if (bar) bar.style.width = progress + "%";
//   };

//   window.addEventListener("scroll", handleProgress);

//   return () => window.removeEventListener("scroll", handleProgress);
// }, []);


//   /* ================= BLOG DATA (SEPARATE BLOGS) ================= */

// const blogs = [

//   {
//     id: 1,
//     slug: "seo-services-chennai",
//     title: "Search Engine Optimization (SEO) Services in Chennai",
//     category: "SEO",
//     date: "July 07, 2026",
//     image: "/images/seo.png",
//     short: "Rank higher on Google with proven SEO strategies.",
//     content: `
// <p>Our SEO strategies help businesses rank on Google for high-value local and national keywords.</p>
// <p><strong>We specialize in:</strong></p>
// <ul>
//   <li>Local SEO for Chennai-based businesses</li>
//   <li>On-page & Technical SEO</li>
//   <li>Google My Business Optimization</li>
//   <li>Link Building & Content Optimization</li>
// </ul>
// `
//   },

//   {
//     id: 2,
//     slug: "google-ads-ppc-chennai",
//     title: "Google Ads & PPC Management in Chennai",
//     category: "GOOGLE ADS",
//     date: "July 08, 2026",
//     image: "/images/BRANDCONSULTANCY.png",
//     short: "Instant leads using high-performing PPC campaigns.",
//     content: `
// <p>We manage cost-effective Google Ads campaigns that generate immediate leads and conversions.</p>
// <ul>
//   <li>Keyword Research & Ad Copy Optimization</li>
//   <li>Landing Page Optimization</li>
//   <li>Conversion Tracking & ROI Analysis</li>
// </ul>
// `
//   },

//   {
//     id: 3,
//     slug: "social-media-marketing-chennai",
//     title: "Social Media Marketing Services in Chennai",
//     category: "Social Media",
//     date: "July 09, 2026",
//     image: "/images/SOCIALMEDIAMARKETING.png",
//     short: "Grow your brand with social media campaigns.",
//     content: `
// <p>Build strong customer relationships through impactful social media campaigns.</p>
// <ul>
//   <li>Instagram, Facebook & LinkedIn Marketing</li>
//   <li>Brand Awareness & Engagement Campaigns</li>
//   <li>Lead Generation Through Paid Social Ads</li>
// </ul>
// `
//   },

//   {
//     id: 4,
//     slug: "content-marketing-branding",
//     title: "Content Marketing & Branding Strategy",
//     category: "Content",
//     date: "July 10, 2026",
//     image: "/images/CONTENTDESIGN.png",
//     short: "High-quality content that boosts rankings and trust.",
//     content: `
// <p>High-quality content that improves rankings and builds trust.</p>
// <ul>
//   <li>SEO Blog Writing</li>
//   <li>Website Content Optimization</li>
//   <li>Brand Messaging & Storytelling</li>
// </ul>
// `
//   },

//   {
//     id: 5,
//     slug: "website-development-optimization",
//     title: "Website Development & Optimization",
//     category: "Web Development",
//     date: "July 11, 2026",
//     image: "/images/WEBDEVELOPMENT.png",
//     short: "SEO-friendly, fast-loading, responsive websites.",
//     content: `
// <p>Conversion-focused websites designed to rank and convert.</p>
// <ul>
//   <li>SEO-Friendly Website Development</li>
//   <li>Mobile-Responsive & Fast-Loading Designs</li>
//   <li>UI/UX Optimization for Better Engagement</li>
// </ul>
// `
//   }
// ];

//   const { slug } = useParams();

//   /* ================= SINGLE BLOG PAGE ================= */
//   if (slug) {
//     const index = blogs.findIndex(b => b.slug === slug);
//     const blog = blogs[index];
//     const prevBlog = blogs[index - 1];
//     const nextBlog = blogs[index + 1];

//     if (!blog) {
//       return <p style={{ color: "#fff" }}>Blog not found</p>;
//     }

//     return (
//       <>
//        <div className="reading-progress" id="readingProgress"></div>
       
//       <section className="blog-detail">

//         <div className="blog-layout">

//           {/* LEFT — CONTENT */}
//           <div className="blog-content">
//             <h1>{blog.title}</h1>

//             {/* <p className="meta">
//               {blog.date} • {blog.category}
//             </p> */}

//             <div
//               className="content"
//               dangerouslySetInnerHTML={{ __html: blog.content }}
//             ></div>
//           </div>

//           {/* RIGHT — IMAGE */}
//           <div className="blog-image">
//             <img src={blog.image} alt={blog.title} />
//           </div>

//         </div>

//         {/* NAVIGATION */}
//        <div className="blog-nav">
  
//   {prevBlog && (
//     <Link to={`/blog/${prevBlog.slug}`} className="nav-new prev">
//       <span className="arrow">←</span>
//       <span className="label">Previous</span>
//     </Link>
//   )}

//   <Link to="/blog" className="nav-new back">
//     <span className="label">Back to Blog</span>
//   </Link>

//   {nextBlog && (
//     <Link to={`/blog/${nextBlog.slug}`} className="nav-new next">
//       <span className="label">Next</span>
//       <span className="arrow">→</span>
//     </Link>
//   )}

// </div>


//         <style>{detailStyles}</style>
//       </section>
//       </>
//     );
//   }

//   /* ================= BLOG LIST PAGE ================= */
//   return (
//     <>
//       <BlogHeader />
//       <BlogWhySha />
//       <IndustriesWeServe />

//       <section className="blog-list">
//         <h1>Our Blog</h1>

//         <div className="blog-grid">
//           {blogs.map(blog => (
//             <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card">
//               <img src={blog.image} alt={blog.title} />

//               <div className="card-content">
//                 <span className="tag">{blog.category}</span>
//                 <h3>{blog.title}</h3>
//                 <p>{blog.short}</p>
//                 <span className="read">Read More →</span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <style>{listStyles}</style>
//       </section>
//     </>
//   );
// }

// /* ================= LIST PAGE STYLES ================= */

// const listStyles = `
// .blog-list {
//   // padding: 80px 6vw;
//   padding-bottom: 20px;
//   // background: #ffffff;
//   color: #1e1b4b;
// }

// /* OUR BLOG HEADING – GRADIENT TEXT */
// .blog-list h1 {
//   text-align: center;
//   font-size: 42px;
//   margin-bottom: 50px;

//   background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* BLOG GRID */
// .blog-grid {
//   max-width: 1200px;
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
//   gap: 34px;
// }

// /* BLOG CARD */
// .blog-card {
//   text-decoration: none;
//   background: linear-gradient(135deg,#eef2ff,#f8f5ff);  /* LIGHT GRADIENT */
//   border-radius: 22px;
//   overflow: hidden;
//   border: 1px solid #e2e8f0;
//   box-shadow: 0 10px 25px rgba(0,0,0,.08);
//   transition: transform .3s ease, box-shadow .3s ease;
// }

// .blog-card:hover {
//   transform: translateY(-8px);
//   box-shadow: 0 20px 45px rgba(0,0,0,.12);
// }

// /* CARD IMAGE */
// .blog-card img {
//   width: 100%;
//   height: 220px;
//   object-fit: cover;
// }

// /* CARD CONTENT */
// .card-content {
//   padding: 26px;
// }

// /* CATEGORY TAG */
// .tag {
//   display: inline-block;
//   background: linear-gradient(135deg,#6366f1,#a855f7,#ec4899);
//   padding: 6px 14px;
//   border-radius: 18px;
//   font-size: 13px;
//   font-weight: 700;
//   color: #ffffff;
//   margin-bottom: 6px;
// }

// /* BLOG TITLE – GRADIENT */
// .card-content h3 {
//   margin: 12px 0;
//   font-size: 20px;
//   background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* BLOG SHORT DESCRIPTION – BLACK */
// .card-content p {
//   color: #0f0f0f;
//   font-size: 15px;
//   line-height: 1.6;
// }

// /* READ MORE BUTTON STYLE */
// .read {
//   display: inline-block;
//   margin-top: 10px;

//   padding: 8px 16px;
//   border-radius: 30px;
//   border: 2px solid #6366f1;

//   font-weight: 700;
//   color: #4338ca;
//   transition: .25s;
// }

// .read:hover {
//   background: #6366f1;
//   color: white;
//   border-color: #6366f1;
// }

// `;

// /* ================= DETAIL PAGE STYLES ================= */

// const detailStyles = `
// .blog-detail {
// .reading-progress {
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 5px;
//   background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   width: 0%;
//   z-index: 99999;
//   transition: width 0.15s linear;
// }
//   padding: 80px 6vw;
//   max-width: 1200px;
//   margin: auto;

//   // background: #ffffff; /* WHITE BG */
//   color: #1e1b4b;      /* INDIGO TEXT */
// }

// /* 2 COLUMN LAYOUT */
// .blog-layout {
//   display: flex;
//   align-items: flex-start;
//   gap: 40px;
// }

// /* LEFT CONTENT AREA */
// .blog-content {
//   flex: 1.3;
//   background: #f8faff; /* Light card bg */
//   padding: 30px;
//   border-radius: 20px;
//   border: 1px solid #e2e8f0;
//   box-shadow: 0 10px 22px rgba(0,0,0,0.08);
// }

// /* RIGHT IMAGE AREA */
// .blog-image {
//   flex: 1;
// }

// .blog-image img {
//   width: 100%;
//   border-radius: 20px;
//   box-shadow: 0 10px 22px rgba(0,0,0,0.12);
// }

// /* MAIN TITLE – GRADIENT */
// .blog-detail h1 {
//   font-size: 36px;
//   margin-bottom: 10px;
//   background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* META TEXT */
// .meta {
//   color: #4338ca; /* Indigo */
//   margin-bottom: 25px;
//   font-weight: 600;
// }

// /* SUBHEADINGS (H2) */
// .blog-detail h2 {
//   font-size: 24px;
//   margin-top: 28px;
//   margin-bottom: 12px;

//   background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* SUBHEADINGS H3 */
// .blog-detail h3 {
//   font-size: 20px;
//   margin-top: 20px;
//   margin-bottom: 10px;
//   color: #312e81;
//   font-weight: 700;
// }

// /* PARAGRAPH */
// .content p {
//   color: #1e1b4b; /* Indigo dark */
//   line-height: 1.7;
//   font-size: 16px;
// }

// /* BULLET POINTS */
// .blog-detail ul {
//   margin: 10px 0 20px 20px;
// }

// .blog-detail ul li {
//   margin-bottom: 10px;
//   color: #111827; /* Almost black */
//   font-size: 16px;
//   font-weight: 500;
// }


// /* BACK LINK */
// .back {
//   display: inline-block;
//   margin-top: 30px;
//   color: #4338ca;
//   text-decoration: none;
//   font-weight: 700;
// }
// @media (max-width: 900px) {
//   .blog-layout {
//     flex-direction: column;
//   }

//   /* IMAGE FIRST */
//   .blog-image {
//     order: 1;
//   }

//   /* CONTENT SECOND */
//   .blog-content {
//     order: 2;
//   }

//   .blog-image img {
//     width: 100%;
//   }
// }
// `;





import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

/* ================= EXTRA CONTENT ================= */

const extraContent = `
<hr/>
<h2>Why Sha Infotech Stands Out Among Digital Marketing Companies in Chennai</h2>

<h3>Customized Digital Strategies</h3>
<p>We don’t use one-size-fits-all solutions. Every strategy is tailored to your industry, location, and goals.</p>

<h3>Transparent Reporting & Analytics</h3>
<p>Regular performance reports with measurable KPIs and clear insights.</p>

<h3>Affordable Digital Marketing Packages</h3>
<p>Flexible pricing models suitable for startups, local businesses, and growing enterprises in Chennai.</p>

<h3>Local Market Expertise</h3>
<p>Deep understanding of Chennai’s audience behavior, competition, and search trends.</p>
`;

/* ================= BLOG DATA ================= */

const blogs = [
  {
    id: 1,
    slug: "our-digital-marketing-services-chennai",
    title: "Our Digital Marketing Services in Chennai",
    category: "Digital Marketing",
    image: "/images/image.png",
    short: "Complete digital marketing services to grow your business in Chennai.",
    content: `

<h2 class="gradient-heading">
Sha Infotech – One of the Best Digital Marketing Companies in Chennai
</h2>

<p>Sha Infotech is a results-focused digital marketing company in Chennai delivering customized marketing solutions for startups, SMEs, and enterprises.</p>

<p>We focus on ROI-driven digital strategies that align with your business goals, market trends, and local audience behavior.</p>

<hr/>

<h2>Search Engine Optimization (SEO) Services in Chennai</h2>
<p>Our SEO strategies help businesses rank on Google for high-value local and national keywords.</p>
<h4>We specialize in:</h4>
<ul>
<li>Local SEO for Chennai-based businesses</li>
<li>On-page & technical SEO</li>
<li>Google My Business optimization</li>
<li>Link building & content optimization</li>
</ul>

<h2>Google Ads & PPC Management in Chennai</h2>
<p>We manage cost-effective Google Ads campaigns that generate immediate leads and conversions.</p>
<ul>
<li>Keyword research & ad copy optimization</li>
<li>Landing page optimization</li>
<li>Conversion tracking & ROI analysis</li>
</ul>

<h2>Social Media Marketing Services in Chennai</h2>
<p>Build strong customer relationships through impactful social media campaigns.</p>
<ul>
<li>Instagram, Facebook & LinkedIn marketing</li>
<li>Brand awareness & engagement campaigns</li>
<li>Lead generation through paid social ads</li>
</ul>

<h2>Content Marketing & Branding Strategy</h2>
<p>High-quality content that improves rankings and builds trust.</p>
<ul>
<li>SEO blog writing</li>
<li>Website content optimization</li>
<li>Brand messaging & storytelling</li>
</ul>

<h2>Website Development & Optimization</h2>
<p>Conversion-focused websites designed to rank and convert.</p>
<ul>
<li>SEO-friendly website development</li>
<li>Mobile-responsive & fast-loading designs</li>
<li>UI/UX optimization for better engagement</li>
</ul>

` + extraContent
  }
];

/* ================= COMPONENT ================= */

export default function Blog() {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug) {
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
      return <h2 style={{ textAlign: "center", marginTop: "80px", color: "#fff" }}>Blog Not Found</h2>;
    }

    return (
      <>
        <div className="single-blog">

          <div className="breadcrumb">
            <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › {blog.title}
          </div>

          <img src={blog.image} alt={blog.title} className="single-image" />
          <h1>{blog.title}</h1>

          <div
            className="single-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="cta-section">
            <h2>Ready to Grow Your Business?</h2>
            <p>Let Sha Infotechnology help you dominate search rankings and generate quality leads.</p>
            <Link to="/contact" className="cta-btn">
              Get Free Consultation →
            </Link>
          </div>

          <Link to="/blog" className="back-btn">← Back to Blogs</Link>
        </div>

        <style>{styles}</style>
      </>
    );
  }

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* ===== GRADIENT HERO HEADER ===== */}
    <section className="blog-hero">
      <h1>Our Blog</h1>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="hero-search"
      />
    </section>
      <section className="blog-page">
        <div className="blog-container">

          <div className="blog-left">

            <div className="breadcrumb">
              <Link to="/">Home</Link> › Blog
            </div>

            {filteredBlogs.map(blog => (
              <div key={blog.id} className="blog-card">

                <img src={blog.image} alt={blog.title} className="blog-image" />

                <h2 className="blog-title">
                  <Link to={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="blog-excerpt">{blog.short}</p>

                <Link to={`/blog/${blog.slug}`} className="read-more">
                  Continue Reading →
                </Link>

              </div>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">

            <div className="sidebar-widget">
              <h3>Search</h3>
              <input
                type="text"
                placeholder="Search blog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="sidebar-widget contact-card">
              <h3>Need Help?</h3>
              <p>📞 +91 98765 43210</p>
              <p>📩 info@shainfotechnology.in</p>
              <Link to="/contact" className="mini-cta">
                Request Proposal →
              </Link>
            </div>

          </aside>

        </div>
      </section>

      <style>{styles}</style>
    </>
  );
}

/* ================= CSS ================= */



const styles = `
body{
  margin:0;
  font-family:'Poppins',sans-serif;
  background:#0b1120;
  color:#e5e7eb;
  overflow-x:hidden;
}

/* ================= COMMON TYPOGRAPHY ================= */
/* ===== HERO GRADIENT HEADER ===== */

.blog-hero{
  width:100%;
  padding:80px 20px 100px;
  text-align:center;
  background: linear-gradient(90deg,#7c3aed,#ec4899);
}

.blog-hero h1{
  font-size:42px;
  font-weight:800;
  color:#ffffff;
  margin-bottom:25px;
}

.hero-search{
  width:100%;
  max-width:450px;
  padding:14px 18px;
  border-radius:10px;
  border:none;
  outline:none;
  font-size:16px;
}

/* Mobile */
@media(max-width:600px){
  .blog-hero{
    padding:60px 15px 70px;
  }

  .blog-hero h1{
    font-size:28px;
  }

  .hero-search{
    max-width:100%;
  }
}

.single-content h2{
  margin-top:40px;
  margin-bottom:15px;
  font-size:26px;
  font-weight:800;
  background: linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(168,85,247,0.4);
}

.gradient-heading{
  background: linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size:28px;
  font-weight:800;
  margin-bottom:20px;
}

/* ================= BLOG LIST PAGE ================= */

.blog-page{
  padding:80px 0;
}

.blog-container{
  max-width:1200px;
  margin:auto;
  padding:0 20px;
  display:flex;
  gap:50px;
}

.blog-left{
  flex:3;
}

.blog-card{
  margin-bottom:60px;
  transition:0.3s ease;
}

.blog-card:hover{
  transform:translateY(-6px);
}

.blog-image{
  width:100%;
  height:260px;
  object-fit:cover;
  border-radius:12px;
  margin-bottom:20px;
}

.blog-title{
  font-size:30px;
  font-weight:800;
  margin-bottom:10px;
}

.blog-title a{
  text-decoration:none;
  background: linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blog-excerpt{
  font-size:16px;
  line-height:1.8;
  color:#cbd5e1;
  margin-bottom:15px;
}

.read-more{
  text-decoration:none;
  font-weight:600;
  color:#a855f7;
}

/* ================= SIDEBAR ================= */

.blog-sidebar{
  flex:1.2;
  position:sticky;
  top:100px;
  height:fit-content;
}

.sidebar-widget{
  margin-bottom:30px;
  padding:20px;
  border-radius:14px;
  background: rgba(255,255,255,0.05);
}

.sidebar-widget h3{
  margin-bottom:15px;
  font-size:20px;
  background: linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar-widget input{
  width:100%;
  padding:10px;
  border-radius:8px;
  border:none;
  outline:none;
  background:#111827;
  color:#fff;
}

.contact-card{
  text-align:center;
}

.mini-cta{
  display:inline-block;
  margin-top:10px;
  font-weight:600;
  color:#a855f7;
}

/* ================= SINGLE BLOG ================= */

.single-blog{
  max-width:900px;
  margin:80px auto;
  padding:0 20px;
}

.single-image{
  width:100%;
  max-height:380px;
  object-fit:cover;
  border-radius:14px;
  margin-bottom:30px;
}

.single-blog h1{
  font-size:38px;
  font-weight:800;
  margin-bottom:20px;
  background: linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.single-content{
  font-size:18px;
  line-height:2;
  color:#d1d5db;
}

/* ================= CTA ================= */

.cta-section{
  margin-top:60px;
  padding:40px;
  text-align:center;
  border-radius:16px;
  background: linear-gradient(90deg,#a855f7,#ec4899);
  color:#fff;
}

.cta-btn{
  display:inline-block;
  margin-top:20px;
  padding:12px 28px;
  background:#fff;
  color:#111;
  border-radius:30px;
  font-weight:600;
  text-decoration:none;
}

/* ================= BREADCRUMB ================= */

.breadcrumb{
  margin-bottom:20px;
  font-size:14px;
  color:#94a3b8;
}

.breadcrumb a{
  color:#a855f7;
  text-decoration:none;
}

.back-btn{
  display:inline-block;
  margin-top:40px;
  font-weight:600;
  text-decoration:none;
  color:#a855f7;
}

/* ================= TABLET RESPONSIVE ================= */

@media (max-width: 992px){

  .blog-container{
    flex-direction:column;
  }

  .blog-sidebar{
    position:static;
  }

  .single-blog{
    margin:60px auto;
  }

  .single-blog h1{
    font-size:30px;
  }

  .blog-title{
    font-size:24px;
  }
}

/* ================= MOBILE RESPONSIVE ================= */

@media (max-width: 600px){

  .blog-page{
    padding:40px 0;
  }

  .blog-image{
    height:180px;
  }

  .single-image{
    max-height:250px;
  }

  .blog-title{
    font-size:20px;
  }

  .single-blog h1{
    font-size:22px;
  }

  .single-content{
    font-size:15px;
    line-height:1.7;
  }

  .cta-section{
    padding:25px 20px;
  }

  .cta-btn{
    padding:10px 20px;
    font-size:14px;
  }

  .sidebar-widget{
    padding:15px;
  }
}
`;



// import { useParams, Link } from "react-router-dom";
// import React, { useState } from "react";

// const GRADIENT =
//   "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)";

// /* ===== COMMON EXTRA CONTENT (UNCHANGED) ===== */

// const extraContent = `
// <hr/>

// <h2>Why Sha Infotech Stands Out Among Digital Marketing Companies in Chennai</h2>

// <h3>Customized Digital Strategies</h3>
// <p>We don’t use one-size-fits-all solutions. Every strategy is tailored to your industry, location, and goals.</p>

// <h3>Transparent Reporting & Analytics</h3>
// <p>Regular performance reports with measurable KPIs and clear insights.</p>

// <h3>Affordable Digital Marketing Packages</h3>
// <p>Flexible pricing models suitable for startups, local businesses, and growing enterprises in Chennai.</p>

// <h3>Local Market Expertise</h3>
// <p>Deep understanding of Chennai’s audience behavior, competition, and search trends.</p>

// <hr/>

// <h2>Industries We Serve in Chennai</h2>
// <p><strong>Business Domains We Work With:</strong></p>
// <ul>
// <li>IT & Software Companies</li>
// <li>E-commerce & Retail Brands</li>
// <li>Real Estate & Construction</li>
// <li>Healthcare & Clinics</li>
// <li>Education & Training Institutes</li>
// <li>Logistics & Transportation</li>
// <li>Local Service Providers</li>
// </ul>

// <p>Our industry-focused approach helps deliver measurable results across diverse business sectors.</p>

// <hr/>

// <h2>Contact Sha Infotech – Your Local Digital Marketing Partner in Chennai</h2>
// <p>If you are searching for reliable digital marketing companies in Chennai, Sha Infotech is your ideal growth partner.</p>

// <div class="cta-box">
// <h3>Ready to Grow Your Business?</h3>
// <a href="/contact">Contact Us Today →</a>
// </div>
// `;

// /* ===== BLOGS (UNCHANGED CONTENT) ===== */

// const blogs = [
//   {
//     id: 1,
//     slug: "seo-services-chennai",
//     title: "Search Engine Optimization (SEO) Services in Chennai",
//     category: "SEO",
//     image: "/images/seo.png",
//     short: "Rank higher on Google with proven SEO strategies.",
//     content: `
// <p>Our SEO strategies help businesses rank on Google for high-value local and national keywords.</p>
// <h3>We Specialize In:</h3>
// <ul>
// <li>Local SEO for Chennai-based businesses</li>
// <li>On-page & technical SEO</li>
// <li>Google My Business optimization</li>
// <li>Link building & content optimization</li>
// </ul>
// ` + extraContent
//   },
//   {
//     id: 2,
//     slug: "google-ads-ppc-chennai",
//     title: "Google Ads & PPC Management in Chennai",
//     category: "Google Ads",
//     image: "/images/BRANDCONSULTANCY.png",
//     short: "Generate immediate leads using high-performing PPC campaigns.",
//     content: `
// <p>We manage cost-effective Google Ads campaigns that generate immediate leads and conversions.</p>
// <ul>
// <li>Keyword research & ad copy optimization</li>
// <li>Landing page optimization</li>
// <li>Conversion tracking & ROI analysis</li>
// </ul>
// ` + extraContent
//   },
//   {
//     id: 3,
//     slug: "social-media-marketing-chennai",
//     title: "Social Media Marketing Services in Chennai",
//     category: "Social Media",
//     image: "/images/SOCIALMEDIAMARKETING.png",
//     short: "Grow your brand with engaging social media campaigns.",
//     content: `
// <p>Build strong customer relationships through impactful social media campaigns.</p>
// <ul>
// <li>Instagram, Facebook & LinkedIn marketing</li>
// <li>Brand awareness & engagement campaigns</li>
// <li>Lead generation through paid social ads</li>
// </ul>
// ` + extraContent
//   },
//   {
//     id: 4,
//     slug: "content-marketing-branding",
//     title: "Content Marketing & Branding Strategy",
//     category: "Content",
//     image: "/images/CONTENTDESIGN.png",
//     short: "High-quality content that boosts rankings and trust.",
//     content: `
// <p>High-quality content that improves rankings and builds trust.</p>
// <ul>
// <li>SEO blog writing</li>
// <li>Website content optimization</li>
// <li>Brand messaging & storytelling</li>
// </ul>
// ` + extraContent
//   },
//   {
//     id: 5,
//     slug: "website-development-optimization",
//     title: "Website Development & Optimization",
//     category: "Web Development",
//     image: "/images/WEBDEVELOPMENT.png",
//     short: "SEO-friendly, fast-loading, responsive websites.",
//     content: `
// <p>Conversion-focused websites designed to rank and convert.</p>
// <ul>
// <li>SEO-friendly website development</li>
// <li>Mobile-responsive & fast-loading designs</li>
// <li>UI/UX optimization for better engagement</li>
// </ul>
// ` + extraContent
//   }
// ];

// export default function Blog() {
//   const { slug } = useParams();
//   const [search, setSearch] = useState("");

//   /* ===== SINGLE BLOG PAGE WITH SIDEBAR ===== */

//   if (slug) {
//     const blog = blogs.find(b => b.slug === slug);
//     if (!blog) return <h2>Blog Not Found</h2>;

//     const filteredResults = blogs.filter(b =>
//       b.title.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//       <>
//         <section className="blog-hero fade-in">
//           <h1>{blog.title}</h1>
//         </section>

//         <section className="blog-wrapper">

//           {/* MAIN CONTENT */}
//           <div className="blog-main fade-in">

//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="blog-image"
//             />

//             <div
//               className="blog-content"
//               dangerouslySetInnerHTML={{
//                 __html: blog.content
//               }}
//             ></div>

//           </div>

//           {/* SIDEBAR */}
//           <aside className="blog-sidebar fade-in">

//             <div className="sidebar-box">
//               <h3>Search Blog</h3>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//               />

//               {search && (
//                 <div className="search-results">
//                   {filteredResults.length > 0 ? (
//                     filteredResults.map(result => (
//                       <Link
//                         key={result.id}
//                         to={`/blog/${result.slug}`}
//                         className="search-link"
//                       >
//                         {result.title}
//                       </Link>
//                     ))
//                   ) : (
//                     <p className="no-result">No blogs found</p>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="sidebar-box">
//               <h3>Categories</h3>
//               <ul>
//                 {[...new Set(blogs.map(b => b.category))].map(cat => (
//                   <li key={cat}>{cat}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="sidebar-box">
//               <h3>Recent Posts</h3>
//               {blogs.slice(0, 5).map(post => (
//                 <Link key={post.id} to={`/blog/${post.slug}`}>
//                   {post.title}
//                 </Link>
//               ))}
//             </div>

//           </aside>

//         </section>

//         <style>{styles}</style>
//       </>
//     );
//   }

//   /* ===== BLOG LIST PAGE ===== */

//   const filtered = blogs.filter(b =>
//     b.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <section className="blog-header fade-in">
//         <h1>Our Blog</h1>

//         <input
//           type="text"
//           placeholder="Search blogs..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className="search-input"
//         />
//       </section>

//       <section className="blog-grid">
//         {filtered.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blog/${blog.slug}`}
//             className="blog-card"
//           >
//             <img src={blog.image} alt={blog.title} />
//             <div className="card-body">
//               <h3>{blog.title}</h3>
//               <p>{blog.short}</p>
//             </div>
//           </Link>
//         ))}
//       </section>

//       <style>{styles}</style>
//     </>
//   );
// }

// /* ===== UPDATED STYLES ===== */

// const styles = `
// body{
//   background:#0f172a;
//   color:white;
//   font-family:Inter,system-ui;
// }

// /* Fade animation */
// .fade-in{
//   animation:fadeIn 0.7s ease forwards;
// }
// @keyframes fadeIn{
//   from{opacity:0; transform:translateY(20px);}
//   to{opacity:1; transform:translateY(0);}
// }

// .blog-hero{
//   background:${GRADIENT};
//   padding:120px 20px 80px;
//   text-align:center;
// }

// .blog-wrapper{
//   max-width:1200px;
//   margin:60px auto;
//   padding:0 20px;
//   display:flex;
//   gap:40px;
// }

// .blog-main{
//   flex:3;
// }

// .blog-sidebar{
//   flex:1;
//   position:sticky;
//   top:120px;
//   height:fit-content;
// }

// .sidebar-box{
//   background:#1e293b;
//   padding:20px;
//   border-radius:14px;
//   margin-bottom:25px;
// }

// .sidebar-box input{
//   width:100%;
//   padding:10px;
//   border-radius:8px;
//   border:none;
// }

// .search-link{
//   display:block;
//   margin-top:8px;
//   color:#a855f7;
//   text-decoration:none;
// }

// .no-result{
//   margin-top:8px;
//   color:#94a3b8;
// }

// .blog-image{
//   width:100%;
//   max-height:320px;
//   object-fit:cover;
//   border-radius:18px;
//   margin-bottom:30px;
// }

// .blog-content{
//   font-size:17px;
//   line-height:1.8;
//   color:#e2e8f0;
// }

// .blog-content hr{
//   border:1px solid #334155;
//   margin:40px 0;
// }

// .cta-box{
//   background:${GRADIENT};
//   padding:25px;
//   border-radius:16px;
//   margin-top:40px;
//   text-align:center;
// }

// .cta-box a{
//   display:inline-block;
//   margin-top:15px;
//   background:white;
//   color:#7c3aed;
//   padding:10px 22px;
//   border-radius:30px;
//   text-decoration:none;
//   font-weight:700;
// }

// .blog-header{
//   background:${GRADIENT};
//   padding:120px 20px 60px;
//   text-align:center;
// }

// .search-input{
//   margin-top:20px;
//   padding:12px;
//   width:300px;
//   border-radius:8px;
//   border:none;
// }

// .blog-grid{
//   max-width:1100px;
//   margin:60px auto;
//   display:grid;
//   grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
//   gap:30px;
//   padding:0 20px;
// }

// .blog-card{
//   background:#fff;
//   border-radius:16px;
//   overflow:hidden;
//   text-decoration:none;
//   transition:.3s;
// }

// .blog-card:hover{
//   transform:translateY(-6px);
// }

// .blog-card img{
//   width:100%;
//   height:180px;
//   object-fit:cover;
// }

// .card-body{
//   padding:20px;
// }
// @media(max-width:900px){
//   .blog-wrapper{
//     flex-direction:column;
//   }
//   .blog-sidebar{
//     position:static;
//   }
// }
// `;
