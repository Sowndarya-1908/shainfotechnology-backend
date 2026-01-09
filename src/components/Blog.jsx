import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";

 function BlogHeader() {
  useEffect(() => {
    const css = `
/* ================= BLOG HEADER ================= */
.sha-blog-header{
  // padding:120px 6vw 60px;
  // background:linear-gradient(
  //   135deg,
  //   rgba(99,102,241,0.20),
  //   rgba(168,85,247,0.18),
  //   rgba(236,72,153,0.15)
  // );
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  // border-bottom:1px solid rgba(255,255,255,0.15);

  text-align:center;
  color:#ffffff;
  font-family:Inter,system-ui;
}

/* TITLE */
.sha-blog-header h1{
  font-size:36px;
  font-weight:900;
  line-height:1.25;
  max-width:900px;
  margin:0 auto 18px;
  background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */
.sha-blog-header p{
  font-size:17px;
  max-width:780px;
  margin:0 auto;
  color:#e5e7eb;
  line-height:1.7;
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){
  .sha-blog-header{
    padding:90px 5vw 50px;
  }
  .sha-blog-header h1{
    font-size:28px;
  }
  .sha-blog-header p{
    font-size:15px;
  }
}

@media(max-width:480px){
  .sha-blog-header{
    padding:70px 5vw 40px;
  }
  .sha-blog-header h1{
    font-size:24px;
  }
  .sha-blog-header p{
    font-size:14px;
  }
}
    `;
    
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sha-blog-header">
      <h1>
        Sha Infotech – One of the Best Digital Marketing Companies in Chennai
      </h1>
      <p>
        Sha Infotech is a results-focused digital marketing company in Chennai 
        delivering customized marketing solutions for startups, SMEs, and 
        enterprises.
      </p>
    </section>
  );
}


 function BlogWhySha() {
  useEffect(() => {
    const css = `
/* ================= WHY SHA SECTION ================= */
.sha-why{
  padding:90px 6vw;
  // background:linear-gradient(
  //   135deg,
  //   rgba(99,102,241,0.15),
  //   rgba(168,85,247,0.15),
  //   rgba(236,72,153,0.12)
  // );
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  font-family:Inter,system-ui;
}

/* GRID */
.sha-why-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
  max-width:1100px;
  margin:0 auto;
}

/* CARD */
.sha-why-card{
  background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.18);
  padding:28px;
  border-radius:18px;
  backdrop-filter:blur(22px);
  -webkit-backdrop-filter:blur(22px);
  box-shadow:0 15px 45px rgba(0,0,0,0.25);
  transition:0.25s;
  color:#ffffff;
}

.sha-why-card:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 60px rgba(0,0,0,0.35);
}

/* TITLE */
.sha-why-card h3{
  font-size:20px;
  font-weight:800;
  margin-bottom:12px;
  background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* DESCRIPTION */
.sha-why-card p{
  font-size:15px;
  line-height:1.7;
  color:#e5e7eb;
}

/* ================= RESPONSIVE ================= */
@media(max-width:900px){
  .sha-why-grid{
    grid-template-columns:1fr;
    gap:28px;
  }
}

@media(max-width:500px){
  .sha-why{
    padding:70px 5vw;
  }
  .sha-why-card{
    padding:22px;
  }
  .sha-why-card h3{
    font-size:18px;
  }
  .sha-why-card p{
    font-size:14px;
  }
}
    `;
    
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="sha-why">
      <div className="sha-why-grid">

        {/* CARD 1 */}
        <div className="sha-why-card">
          <h3>Customized Digital Strategies</h3>
          <p>
            We don’t use one-size-fits-all solutions. Every strategy is 
            carefully tailored to your industry, business location, and 
            long-term goals to ensure maximum results.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="sha-why-card">
          <h3>Transparent Reporting & Analytics</h3>
          <p>
            We provide regular performance reports with measurable KPIs 
            and clear insights so you always understand how your campaigns 
            are performing.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="sha-why-card">
          <h3>Affordable Digital Marketing Packages</h3>
          <p>
            Our pricing models are flexible and suitable for startups, 
            local businesses, and growing enterprises across Chennai.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="sha-why-card">
          <h3>Local Market Expertise</h3>
          <p>
            We have deep expertise in Chennai’s local audience behavior, 
            competition landscape, and city-specific search trends.
          </p>
        </div>
      </div>
    </section>
  );
}

// export default function Blog() {

//   /* ================= BLOG DATA ================= */
// //   const blogs = [
// //     {
// //       id: 1,
// //       slug: "digital-marketing-basics",
// //       title: "Search Engine Optimization (SEO) Services ",
// //       category: "SEO",
// //       // date: "July 06, 2026",
// //       image: "/images/seo.png",
// //     //   short:
// //     //     "Learn how digital marketing helps businesses grow online.",
// //       content:
// //       `<ul>
// //   <li>Local SEO for Chennai-based businesses</li>
// //   <li>On-page & technical SEO</li>
// //   <li>Google My Business optimization</li>
// //   <li>Link building & content optimization</li>
// // </ul>`
// //         // "Digital marketing is the backbone of modern business growth. It helps brands connect with customers online, build visibility, and increase revenue using SEO, social media, paid ads, and content marketing."
// //     },
// //     {
// //       id: 2,
// //       slug: "seo-growth-strategy",
// //       title: "SEO Growth Strategy for Long-Term Success",
// //       category: "SEO",
// //       date: "July 10, 2026",
// //       image: "/images/vission.png",
// //   },
// //     {
// //       id: 3,
// //       slug: "seo-growth-strategy",
// //       title: "SEO Growth Strategy for Long-Term Success",
// //       category: "SEO",
// //       date: "July 10, 2026",
// //       image: "/images/vission.png",

// //     }
// //   ];
// const blogs = [
//   {
//     id: 1,
//     slug: "digital-marketing-services-chennai",
//     title: "Our Digital Marketing Services in Chennai",
//     category: "Digital Marketing",
//     date: "July 06, 2026",
//     image: "/images/seo.png",
//     short: "Complete digital marketing solutions for Chennai businesses.",
//     content: `
// <h2>Our Digital Marketing Services in Chennai</h2>
// <p>We provide end-to-end digital marketing services tailored to startups, SMEs, and enterprise brands.</p>
// <ul>
//   <li>SEO & Google Rankings</li>
//   <li>Google Ads (PPC)</li>
//   <li>Social Media Marketing</li>
//   <li>Content Marketing & Branding</li>
//   <li>Website Development & Optimization</li>
// </ul>
// `
//   },

//   {
//     id: 2,
//     slug: "seo-services-chennai",
//     title: "Search Engine Optimization (SEO) Services in Chennai",
//     category: "SEO",
//     date: "July 07, 2026",
//     image: "/images/seo.png",
//     short: "Rank higher on Google with proven SEO strategies.",
//     content: `
// <h2>SEO Services in Chennai</h2>
// <p>Our SEO strategies help businesses rank on Google for local + national keywords.</p>
// <ul>
//   <li>Local SEO for Chennai-based businesses</li>
//   <li>On-page & Technical SEO</li>
//   <li>Google My Business Optimization</li>
//   <li>Link Building & Content Optimization</li>
// </ul>
// `
//   },

//   {
//     id: 3,
//     slug: "google-ads-ppc-chennai",
//     title: "Google Ads & PPC Management in Chennai",
//     category: "PPC",
//     date: "July 08, 2026",
//     image: "/images/vission.png",
//     short: "Instant leads using cost-effective PPC campaigns.",
//     content: `
// <h2>Google Ads & PPC Management</h2>
// <p>We run high-performing paid ad campaigns that drive immediate conversions.</p>
// <ul>
//   <li>Keyword Research & Ad Copy Optimization</li>
//   <li>Landing Page Optimization</li>
//   <li>Conversion Tracking & ROI Analysis</li>
// </ul>
// `
//   },

//   {
//     id: 4,
//     slug: "social-media-marketing-chennai",
//     title: "Social Media Marketing Services in Chennai",
//     category: "Social Media",
//     date: "July 09, 2026",
//     image: "/images/vission.png",
//     short: "Grow your brand with social media campaigns.",
//     content: `
// <h2>Social Media Marketing Services</h2>
// <p>We help Chennai businesses build engagement and brand visibility.</p>
// <ul>
//   <li>Instagram, Facebook & LinkedIn Marketing</li>
//   <li>Brand Awareness & Engagement</li>
//   <li>Lead Generation Through Paid Social Ads</li>
// </ul>
// `
//   },

//   {
//     id: 5,
//     slug: "content-marketing-branding",
//     title: "Content Marketing & Branding Strategy",
//     category: "Content",
//     date: "July 10, 2026",
//     image: "/images/seo.png",
//     short: "High-quality content that improves rankings and trust.",
//     content: `
// <h2>Content Marketing & Branding Strategy</h2>
// <p>Create high-quality content that boosts rankings and brand loyalty.</p>
// <ul>
//   <li>SEO Blog Writing</li>
//   <li>Website Content Optimization</li>
//   <li>Brand Messaging & Storytelling</li>
// </ul>
// `
//   },

//   {
//     id: 6,
//     slug: "website-development-optimization",
//     title: "Website Development & Optimization",
//     category: "Web Development",
//     date: "July 11, 2026",
//     image: "/images/vission.png",
//     short: "Build fast, responsive, SEO-friendly websites.",
//     content: `
// <h2>Website Development & Optimization</h2>
// <p>We build conversion-focused websites designed to rank & convert.</p>
// <ul>
//   <li>SEO-Friendly Website Development</li>
//   <li>Mobile-Responsive & Fast-Loading</li>
//   <li>UI/UX Optimization for Engagement</li>
// </ul>
// `
//   }
// ];

//   const { slug } = useParams();

//   /* ================= SINGLE BLOG ================= */
//   if (slug) {
//     const index = blogs.findIndex(b => b.slug === slug);
//     const blog = blogs[index];
//     const prevBlog = blogs[index - 1];
//     const nextBlog = blogs[index + 1];

//     if (!blog) {
//       return <p style={{ color: "#fff" }}>Blog not found</p>;
//     }

//     return (
// //       <section className="blog-detail">
// //         <img src={blog.image} alt={blog.title} />

// //         <h1>{blog.title}</h1>

// //         <p className="meta">
// //           {blog.date} 
// //           {/* • {blog.category} */}
// //         </p>

// //         {/* <p className="content">{blog.content}</p> */}
// // <div
// //   className="content"
// //   dangerouslySetInnerHTML={{ __html: blog.content }}
// // ></div>
// //         {/* NEXT / PREVIOUS */}
// //         <div className="blog-nav">
// //           {prevBlog && (
// //             <Link to={`/blog/${prevBlog.slug}`} className="nav-btn">
// //               ← Previous
// //             </Link>
// //           )}

// //           {nextBlog && (
// //             <Link to={`/blog/${nextBlog.slug}`} className="nav-btn">
// //               Next →
// //             </Link>
// //           )}
// //         </div>

// //         <Link to="/blog" className="back">
// //           ← Back to Blog
// //         </Link>

// //         <style>{detailStyles}</style>
// //       </section>
// <section className="blog-detail">
//   <div className="blog-layout">
//     <div className="blog-content">
//       <h1>{blog.title}</h1>

//       <p className="meta">
//         {blog.date} • {blog.category}
//       </p>

//       <div
//         className="content"
//         dangerouslySetInnerHTML={{ __html: blog.content }}
//       ></div>
//     </div>

//     <div className="blog-image">
//       <img src={blog.image} alt={blog.title} />
//     </div>
//   </div>

//   {/* NEXT / PREVIOUS */}
//   <div className="blog-nav">
//     {prevBlog && (
//       <Link to={`/blog/${prevBlog.slug}`} className="nav-btn">
//         ← Previous
//       </Link>
//     )}

//     {nextBlog && (
//       <Link to={`/blog/${nextBlog.slug}`} className="nav-btn">
//         Next →
//       </Link>
//     )}
//   </div>

//   <Link to="/blog" className="back">
//     ← Back to Blog
//   </Link>

//   <style>{detailStyles}</style>
// </section>

//     );
//   }

//   /* ================= BLOG LIST ================= */
//   return (
//     <>
//     <BlogHeader />
//     <BlogWhySha />
//     <section className="blog-list">
//       <h1>Our Blog</h1>

//       <div className="blog-grid">
//         {blogs.map(blog => (
//           <Link
//             key={blog.id}
//             to={`/blog/${blog.slug}`}
//             className="blog-card"
//           >
//             <img src={blog.image} alt={blog.title} />

//             <div className="card-content">
//               <span className="tag">{blog.category}</span>
//               <h3>{blog.title}</h3>
//               <p>{blog.short}</p>
//               <span className="read">Read More →</span>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <style>{listStyles}</style>
//     </section>
    
//     </>
//   );
// }

// /* ================= STYLES ================= */

// const listStyles = `
// .blog-list {
//   padding: 80px 6vw;
//   color: #ffffff;
// }

// .blog-list h1 {
//   text-align: center;
//   font-size: 42px;
//   margin-bottom: 50px;
//   background: linear-gradient(90deg,#8b5cf6,#ec4899);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .blog-grid {
//   max-width: 1200px;
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
//   gap: 34px;
// }

// .blog-card {
//   text-decoration: none;
//   background: radial-gradient(circle at top,#0b1220,#020617 80%);
//   border-radius: 22px;
//   overflow: hidden;
//   box-shadow: 0 18px 45px rgba(0,0,0,.6);
//   transition: transform .3s ease;
// }

// .blog-card:hover {
//   transform: translateY(-8px);
// }

// .blog-card img {
//   width: 100%;
//   height: 220px;
//   object-fit: cover;
// }

// .card-content {
//   padding: 26px;
// }

// .tag {
//   display: inline-block;
//   background: linear-gradient(135deg,#8b5cf6,#ec4899);
//   padding: 6px 14px;
//   border-radius: 18px;
//   font-size: 13px;
//   font-weight: 700;
//   color: #ffffff;
// }

// .card-content h3 {
//   margin: 12px 0;
//   font-size: 20px;
//   color: #ffffff;
// }

// .card-content p {
//   color: #cbd5f5;
//   font-size: 15px;
// }

// .read {
//   font-weight: 700;
//   color: #ffffff;
// }
// `;

// const detailStyles = `
// .blog-detail {
//   padding: 80px 6vw;
//   max-width: 900px;
//   margin: auto;
//   color: #ffffff;
// }

// .blog-detail img {
//   width: 100%;
//   border-radius: 20px;
//   margin-bottom: 30px;
// }

// .blog-detail h1 {
//   font-size: 36px;
//   margin-bottom: 10px;
// }

// .meta {
//   color: #94a3b8;
//   margin-bottom: 30px;
// }

// .content {
//   font-size: 17px;
//   line-height: 1.8;
//   color: #cbd5f5;
// }

// .blog-nav {
//   margin-top: 40px;
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
// }



// .back {
//   display: inline-block;
//   margin-top: 30px;
//   color: #ffffff;
//   text-decoration: none;
// }
// `;





export default function Blog() {

React.useEffect(() => {
  const handleProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    const bar = document.getElementById("readingProgress");
    if (bar) bar.style.width = progress + "%";
  };

  window.addEventListener("scroll", handleProgress);

  return () => window.removeEventListener("scroll", handleProgress);
}, []);


  /* ================= BLOG DATA (SEPARATE BLOGS) ================= */
  const blogs = [
    {
      id: 1,
      slug: "digital-marketing-services-chennai",
      title: "Our Digital Marketing Services in Chennai",
      category: "Digital Marketing",
      date: "July 06, 2026",
      image: "/images/digitalstrategy.png",
      short: "Complete digital marketing solutions for Chennai businesses.",
      content: `
<p>We provide end-to-end digital marketing services tailored to startups, SMEs, and enterprise brands.</p>
<ul>
  <li>SEO & Google Rankings</li>
  <li>Google Ads (PPC)</li>
  <li>Social Media Marketing</li>
  <li>Content Marketing & Branding</li>
  <li>Website Development & Optimization</li>
</ul>
`
    },

    {
      id: 2,
      slug: "seo-services-chennai",
      title: "Search Engine Optimization (SEO) Services in Chennai",
      category: "SEO",
      date: "July 07, 2026",
      image: "/images/seo.png",
      short: "Rank higher on Google with proven SEO strategies.",
      content: `
<p>Our SEO strategies help businesses rank on Google for high-value Chennai and national keywords.</p>
<ul>
  <li>Local SEO for Chennai businesses</li>
  <li>On-page & Technical SEO</li>
  <li>Google My Business Optimization</li>
  <li>Link Building & Content Optimization</li>
</ul>
`
    },

    {
      id: 3,
      slug: "google-ads-ppc-chennai",
      title: "Google Ads & PPC Management in Chennai",
      category: "GOOGLE ADS",
      date: "July 08, 2026",
      image: "/images/BRANDCONSULTANCY.png",
      short: "Instant leads using high-performing PPC campaigns.",
      content: `
<p>We manage cost-effective Google Ads campaigns that generate immediate conversions.</p>
<ul>
  <li>Keyword Research & Ad Copy Optimization</li>
  <li>Landing Page Optimization</li>
  <li>Conversion Tracking & ROI Analysis</li>
</ul>
`
    },

    {
      id: 4,
      slug: "social-media-marketing-chennai",
      title: "Social Media Marketing Services in Chennai",
      category: "Social Media",
      date: "July 09, 2026",
      image: "/images/SOCIALMEDIAMARKETING.png",
      short: "Grow your brand with social media campaigns.",
      content: `
<p>We help Chennai businesses build engagement and brand visibility.</p>
<ul>
  <li>Instagram, Facebook & LinkedIn Marketing</li>
  <li>Brand Awareness & Engagement</li>
  <li>Lead Generation Through Paid Ads</li>
</ul>
`
    },

    {
      id: 5,
      slug: "content-marketing-branding",
      title: "Content Marketing & Branding Strategy",
      category: "Content",
      date: "July 10, 2026",
      image: "/images/CONTENTDESIGN.png",
      short: "High-quality content that boosts rankings and trust.",
      content: `
<p>High-quality content improves rankings and builds strong brand trust.</p>
<ul>
  <li>SEO Blog Writing</li>
  <li>Website Content Optimization</li>
  <li>Brand Messaging & Storytelling</li>
</ul>
`
    },

    {
      id: 6,
      slug: "website-development-optimization",
      title: "Website Development & Optimization",
      category: "Web Development",
      date: "July 11, 2026",
      image: "/images/WEBDEVELOPMENT.png",
      short: "SEO-friendly, fast-loading, responsive websites.",
      content: `
<p>Get conversion-focused websites built to rank & convert.</p>
<ul>
  <li>SEO-Friendly Websites</li>
  <li>Responsive & Fast-Loading</li>
  <li>UI/UX Optimization</li>
</ul>
`
    }
  ];

  const { slug } = useParams();

  /* ================= SINGLE BLOG PAGE ================= */
  if (slug) {
    const index = blogs.findIndex(b => b.slug === slug);
    const blog = blogs[index];
    const prevBlog = blogs[index - 1];
    const nextBlog = blogs[index + 1];

    if (!blog) {
      return <p style={{ color: "#fff" }}>Blog not found</p>;
    }

    return (
      <>
       <div className="reading-progress" id="readingProgress"></div>
       
      <section className="blog-detail">

        <div className="blog-layout">

          {/* LEFT — CONTENT */}
          <div className="blog-content">
            <h1>{blog.title}</h1>

            {/* <p className="meta">
              {blog.date} • {blog.category}
            </p> */}

            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>

        </div>

        {/* NAVIGATION */}
       <div className="blog-nav">
  
  {prevBlog && (
    <Link to={`/blog/${prevBlog.slug}`} className="nav-new prev">
      <span className="arrow">←</span>
      <span className="label">Previous</span>
    </Link>
  )}

  <Link to="/blog" className="nav-new back">
    <span className="label">Back to Blog</span>
  </Link>

  {nextBlog && (
    <Link to={`/blog/${nextBlog.slug}`} className="nav-new next">
      <span className="label">Next</span>
      <span className="arrow">→</span>
    </Link>
  )}

</div>


        <style>{detailStyles}</style>
      </section>
      </>
    );
  }

  /* ================= BLOG LIST PAGE ================= */
  return (
    <>
      <BlogHeader />
      <BlogWhySha />

      <section className="blog-list">
        <h1>Our Blog</h1>

        <div className="blog-grid">
          {blogs.map(blog => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card">
              <img src={blog.image} alt={blog.title} />

              <div className="card-content">
                <span className="tag">{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.short}</p>
                <span className="read">Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        <style>{listStyles}</style>
      </section>
    </>
  );
}

/* ================= LIST PAGE STYLES ================= */

const listStyles = `
.blog-list {
  // padding: 80px 6vw;
  padding-bottom: 20px;
  // background: #ffffff;
  color: #1e1b4b;
}

/* OUR BLOG HEADING – GRADIENT TEXT */
.blog-list h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 50px;

  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* BLOG GRID */
.blog-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 34px;
}

/* BLOG CARD */
.blog-card {
  text-decoration: none;
  background: linear-gradient(135deg,#eef2ff,#f8f5ff);  /* LIGHT GRADIENT */
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(0,0,0,.08);
  transition: transform .3s ease, box-shadow .3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0,0,0,.12);
}

/* CARD IMAGE */
.blog-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* CARD CONTENT */
.card-content {
  padding: 26px;
}

/* CATEGORY TAG */
.tag {
  display: inline-block;
  background: linear-gradient(135deg,#6366f1,#a855f7,#ec4899);
  padding: 6px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
}

/* BLOG TITLE – GRADIENT */
.card-content h3 {
  margin: 12px 0;
  font-size: 20px;
  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* BLOG SHORT DESCRIPTION – BLACK */
.card-content p {
  color: #0f0f0f;
  font-size: 15px;
  line-height: 1.6;
}

/* READ MORE BUTTON STYLE */
.read {
  display: inline-block;
  margin-top: 10px;

  padding: 8px 16px;
  border-radius: 30px;
  border: 2px solid #6366f1;

  font-weight: 700;
  color: #4338ca;
  transition: .25s;
}

.read:hover {
  background: #6366f1;
  color: white;
  border-color: #6366f1;
}

`;

/* ================= DETAIL PAGE STYLES ================= */

const detailStyles = `
.blog-detail {
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  width: 0%;
  z-index: 99999;
  transition: width 0.15s linear;
}
  padding: 80px 6vw;
  max-width: 1200px;
  margin: auto;

  // background: #ffffff; /* WHITE BG */
  color: #1e1b4b;      /* INDIGO TEXT */
}

/* 2 COLUMN LAYOUT */
.blog-layout {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}

/* LEFT CONTENT AREA */
.blog-content {
  flex: 1.3;
  background: #f8faff; /* Light card bg */
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 22px rgba(0,0,0,0.08);
}

/* RIGHT IMAGE AREA */
.blog-image {
  flex: 1;
}

.blog-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);
}

/* MAIN TITLE – GRADIENT */
.blog-detail h1 {
  font-size: 36px;
  margin-bottom: 10px;
  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* META TEXT */
.meta {
  color: #4338ca; /* Indigo */
  margin-bottom: 25px;
  font-weight: 600;
}

/* SUBHEADINGS (H2) */
.blog-detail h2 {
  font-size: 24px;
  margin-top: 28px;
  margin-bottom: 12px;

  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* SUBHEADINGS H3 */
.blog-detail h3 {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #312e81;
  font-weight: 700;
}

/* PARAGRAPH */
.content p {
  color: #1e1b4b; /* Indigo dark */
  line-height: 1.7;
  font-size: 16px;
}

/* BULLET POINTS */
.blog-detail ul {
  margin: 10px 0 20px 20px;
}

.blog-detail ul li {
  margin-bottom: 10px;
  color: #111827; /* Almost black */
  font-size: 16px;
  font-weight: 500;
}

// /* NAV BUTTONS */
// .blog-nav {
//   margin-top: 40px;
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
// }

// .nav-btn {
//   padding: 10px 20px;
//   background: #eef2ff;
//   border: 2px solid #6366f1;
//   border-radius: 30px;

//   color: #4338ca;
//   text-decoration: none;
//   font-weight: 700;
//   transition: .25s;
// }

// .nav-btn:hover {
//   background: #6366f1;
//   color: #ffffff;
// }

/* BACK LINK */
.back {
  display: inline-block;
  margin-top: 30px;
  color: #4338ca;
  text-decoration: none;
  font-weight: 700;
}

/* MOBILE RESPONSIVE */
@media(max-width:900px){
  .blog-layout {
    flex-direction: column;
  }

  .blog-image img {
    width: 100%;
  }
}

/* ============= NEW NAV DESIGN ============= */

.blog-nav {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-new {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 22px;
  border-radius: 30px;
  text-decoration: none;

  border: 2px solid transparent;
  background: #ffffff;
  color: #312e81;

  font-weight: 700;
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
  
  transition: .3s ease;
}

.nav-new:hover {
  border-color: #6366f1;
  background: linear-gradient(90deg,#6366f1,#a855f7,#ec4899);
  color: #ffffff;
  transform: translateY(-4px);
}

.nav-new .arrow {
  font-size: 20px;
}

.nav-new.back {
  margin: auto;
}

@media(max-width:600px){
  .blog-nav {
    flex-direction: column;
    align-items: center;
  }
  .nav-new {
    width: 100%;
    justify-content: center;
  }
}


`;
