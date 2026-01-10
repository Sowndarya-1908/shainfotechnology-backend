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
        Sha Infotech is a results-focused digital marketing company in Chennai delivering customized marketing solutions for startups, SMEs, and enterprises.<br></br>
      We focus on ROI-driven digital strategies that align with your business goals, market trends, and local audience behavior.
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
            We don’t use one-size-fits-all solutions. Every strategy is tailored to your industry, location, and goals.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="sha-why-card">
          <h3>Transparent Reporting & Analytics</h3>
          <p>
           Regular performance reports with measurable KPIs and clear insights.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="sha-why-card">
          <h3>Affordable Digital Marketing Packages</h3>
          <p>
           Flexible pricing models suitable for startups, local businesses, and growing enterprises in Chennai.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="sha-why-card">
          <h3>Local Market Expertise</h3>
          <p>
           Deep understanding of Chennai’s audience behavior, competition, and search trends.
          </p>
        </div>
      </div>
    </section>
  );
}

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
    slug: "seo-services-chennai",
    title: "Search Engine Optimization (SEO) Services in Chennai",
    category: "SEO",
    date: "July 07, 2026",
    image: "/images/seo.png",
    short: "Rank higher on Google with proven SEO strategies.",
    content: `
<p>Our SEO strategies help businesses rank on Google for high-value local and national keywords.</p>
<p><strong>We specialize in:</strong></p>
<ul>
  <li>Local SEO for Chennai-based businesses</li>
  <li>On-page & Technical SEO</li>
  <li>Google My Business Optimization</li>
  <li>Link Building & Content Optimization</li>
</ul>
`
  },

  {
    id: 2,
    slug: "google-ads-ppc-chennai",
    title: "Google Ads & PPC Management in Chennai",
    category: "GOOGLE ADS",
    date: "July 08, 2026",
    image: "/images/BRANDCONSULTANCY.png",
    short: "Instant leads using high-performing PPC campaigns.",
    content: `
<p>We manage cost-effective Google Ads campaigns that generate immediate leads and conversions.</p>
<ul>
  <li>Keyword Research & Ad Copy Optimization</li>
  <li>Landing Page Optimization</li>
  <li>Conversion Tracking & ROI Analysis</li>
</ul>
`
  },

  {
    id: 3,
    slug: "social-media-marketing-chennai",
    title: "Social Media Marketing Services in Chennai",
    category: "Social Media",
    date: "July 09, 2026",
    image: "/images/SOCIALMEDIAMARKETING.png",
    short: "Grow your brand with social media campaigns.",
    content: `
<p>Build strong customer relationships through impactful social media campaigns.</p>
<ul>
  <li>Instagram, Facebook & LinkedIn Marketing</li>
  <li>Brand Awareness & Engagement Campaigns</li>
  <li>Lead Generation Through Paid Social Ads</li>
</ul>
`
  },

  {
    id: 4,
    slug: "content-marketing-branding",
    title: "Content Marketing & Branding Strategy",
    category: "Content",
    date: "July 10, 2026",
    image: "/images/CONTENTDESIGN.png",
    short: "High-quality content that boosts rankings and trust.",
    content: `
<p>High-quality content that improves rankings and builds trust.</p>
<ul>
  <li>SEO Blog Writing</li>
  <li>Website Content Optimization</li>
  <li>Brand Messaging & Storytelling</li>
</ul>
`
  },

  {
    id: 5,
    slug: "website-development-optimization",
    title: "Website Development & Optimization",
    category: "Web Development",
    date: "July 11, 2026",
    image: "/images/WEBDEVELOPMENT.png",
    short: "SEO-friendly, fast-loading, responsive websites.",
    content: `
<p>Conversion-focused websites designed to rank and convert.</p>
<ul>
  <li>SEO-Friendly Website Development</li>
  <li>Mobile-Responsive & Fast-Loading Designs</li>
  <li>UI/UX Optimization for Better Engagement</li>
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


/* BACK LINK */
.back {
  display: inline-block;
  margin-top: 30px;
  color: #4338ca;
  text-decoration: none;
  font-weight: 700;
}
@media (max-width: 900px) {
  .blog-layout {
    flex-direction: column;
  }

  /* IMAGE FIRST */
  .blog-image {
    order: 1;
  }

  /* CONTENT SECOND */
  .blog-content {
    order: 2;
  }

  .blog-image img {
    width: 100%;
  }
}
`;
