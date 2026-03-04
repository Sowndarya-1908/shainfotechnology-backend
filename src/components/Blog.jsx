
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

  /* ================= BLOG 1 ================= */

  {
  id: 1,
  slug: "our-digital-marketing-services-chennai",
  title: "Our Digital Marketing Services in Chennai",
  category: "Digital Marketing",
  image: "/images/blog11.jpg",
  date : "10 Jan 2026",
  short: "Complete digital marketing services to grow your business in Chennai.",
  content: `

  <h2 class="gradient-heading">
  Sha Infotech – One of the Best Digital Marketing Companies in Chennai
  </h2>

  <p>Sha Infotech is a results-focused digital marketing company in Chennai delivering customized marketing solutions for startups, SMEs, and enterprises.</p>

  <p>We focus on ROI-driven digital strategies that align with your business goals, market trends, and local audience behavior.</p>

  

  <h2>Our Digital Marketing Services in Chennai</h2>

  <h3>Search Engine Optimization (SEO)</h3>
  <p>Our SEO strategies help businesses rank on Google for high-value local and national keywords.</p>
  <ul>
    <li>Local SEO for Chennai businesses</li>
    <li>On-page & technical SEO</li>
    <li>Google My Business optimization</li>
    <li>Link building & content optimization</li>
  </ul>

  <h3>Google Ads & PPC Management</h3>
  <p>We manage cost-effective Google Ads campaigns that generate immediate leads and conversions.</p>
  <ul>
    <li>Keyword research & ad copy optimization</li>
    <li>Landing page optimization</li>
    <li>Conversion tracking & ROI analysis</li>
  </ul>

  <h3>Social Media Marketing</h3>
  <p>Build strong customer relationships through impactful social media campaigns.</p>
  <ul>
    <li>Instagram, Facebook & LinkedIn marketing</li>
    <li>Brand awareness campaigns</li>
    <li>Paid social lead generation</li>
  </ul>

  <h3>Content Marketing & Branding Strategy</h3>
  <p>High-quality content that improves rankings and builds trust.</p>
  <ul>
    <li>SEO blog writing</li>
    <li>Website content optimization</li>
    <li>Brand messaging & storytelling</li>
  </ul>

  <h3>Website Development & Optimization</h3>
  <p>Conversion-focused websites designed to rank and convert.</p>
  <ul>
    <li>SEO-friendly website development</li>
    <li>Mobile-responsive design</li>
    <li>UI/UX optimization</li>
  </ul>

 

  <h2>Why Sha Infotech Stands Out Among Digital Marketing Companies in Chennai</h2>

  <h3>Customized Digital Strategies</h3>
  <p>We don’t use one-size-fits-all solutions. Every strategy is tailored to your industry, location, and goals.</p>

  <h3>Transparent Reporting & Analytics</h3>
  <p>Regular performance reports with measurable KPIs and clear insights.</p>

  <h3>Affordable Digital Marketing Packages</h3>
  <p>Flexible pricing models suitable for startups, local businesses, and growing enterprises in Chennai.</p>

  <h3>Local Market Expertise</h3>
  <p>Deep understanding of Chennai’s audience behavior, competition, and search trends.</p>



  <h2>Industries We Serve in Chennai</h2>

  <ul>
    <li>IT & Software Companies</li>
    <li>E-commerce & Retail Brands</li>
    <li>Real Estate & Construction</li>
    <li>Healthcare & Clinics</li>
    <li>Education & Training Institutes</li>
    <li>Logistics & Transportation</li>
    <li>Local Service Providers</li>
  </ul>

  <p>Our industry-focused approach helps deliver measurable results across diverse business sectors.</p>


  <h2>Contact Sha Infotech – Your Local Digital Marketing Partner in Chennai</h2>

  <p>If you are searching for reliable digital marketing companies in Chennai, Sha Infotech is your ideal growth partner.</p>

  <p>We help businesses dominate local search results, attract quality leads, and scale faster.</p>

  <p><strong>Get started today with Sha Infotech – one of the leading digital marketing companies in Chennai.</strong></p>

  `
},
{
    id: 2,
    slug: "custom-software-solutions-chennai",
    title: "Crafting Digital Excellence in Chennai – Custom Software Solutions for Your Business",
    category: "Software Development",
    image: "/images/blog12.jpeg",
    date : "25 Jan 2026",
    short: "Discover how custom software solutions can transform businesses in Chennai.",
    content: `

     <h2 class="gradient-heading">
  Crafting Digital Excellence in Chennai – Custom Software Solutions for Your Business
  </h2>

  <p>
  At <strong>Sha Infotech</strong>, a premier website development company in Chennai, we believe in the power of technology to transform businesses.
  Specializing in <strong>custom software services</strong>, we help enterprises across industries build scalable, secure, and innovative digital solutions.
  This blog is your go-to resource for insights, trends, and expert advice on web development, software engineering, and digital strategy.
  </p>

 

  <h3>Why Custom Software Development is a Game-Changer for Chennai Businesses</h3>
  <p>
  In today’s competitive market, off-the-shelf software often falls short.
  Discover how tailor-made solutions can address unique business challenges,
  improve efficiency, and drive growth.
  Learn why Chennai-based companies are turning to custom software to stay ahead.
  </p>

 

  <h3>Top 5 Web Development Trends in 2025 You Can’t Ignore</h3>
  <p>
  From AI-powered interfaces to progressive web apps (PWAs),
  the web development landscape is evolving rapidly.
 Stay updated with the latest trends and learn how Sha Infotech is leveraging these technologies to deliver cutting-edge solutions.  
  </p>

 

 

  <h3>How We Built a Scalable E-Commerce Platform for a Chennai Retail Brand</h3>
  <p>
 A case study on how Sha Infotech designed and developed a custom e-commerce solution that increased our client’s sales by 200%. Explore our process, from ideation to deployment, and the technologies we used.  
  </p>

  

  <h3>The Importance of UI/UX in Custom Software Development</h3>
  <p>
 User experience can make or break your software. Dive into our design philosophy and learn how we create intuitive, user-centric interfaces that enhance engagement and satisfaction.  
  </p>

 

  <h3>Cybersecurity Best Practices for Your Custom Software</h3>
  <p>
 Security is non-negotiable. Get expert tips on protecting your digital assets, from secure coding practices to regular audits. Learn how Sha Infotech ensures robust security in every project.   
  </p>

  



  <h3>Why Choose Sha Infotech?</h3>
  <ul>
    <li><strong>Tailored Solutions:</strong> We don’t believe in one-size-fits-all. Every project is customized to meet your specific needs.  </li>

    <li><strong>Expert Team:</strong> Our developers, designers, and strategists are industry veterans with years of experience.  </li>
    <li><strong>End-to-End Services:</strong> From concept to deployment and maintenance, we handle it all.  </li>
    <li><strong>Chennai-Based, Globally Minded:</strong> We serve clients locally and internationally with the same dedication to quality.  </li>
  </ul>

  

  <h3>Our Services</h3>
  <ul>
    <li>Custom Web Development</li>
    <li>Mobile App Development</li>
    <li>E-Commerce Solutions</li>
    <li>Enterprise Software</li>
    <li>UI/UX Design</li>
    <li>Software Maintenance & Support</li>
  </ul>



  <h3>Industry Insight: The Rise of SaaS in Chennai’s Startup Ecosystem</h3>
  <p>
  Chennai is emerging as a hub for SaaS startups.
  Custom software development is fueling this growth,
  and Sha Infotech partners with innovators to build scalable,
  future-ready digital products.
  </p>

`
  },
  {
  id: 3,
  slug: "digital-marketing-web-development-chennai",
  title: "Empowering Brands Through Strategy, Design & Technology – SHA Infotechnology",
  category: "Digital Marketing",
  image: "/images/blog80.jpg",
  date : "5 Feb 2026",
  short: "Explore how SHA Infotechnology delivers web development, SEO, branding, and digital strategy solutions to grow modern businesses.",
  content: `

  <h2 class="gradient-heading">
  Empowering Brands Through Strategy, Design & Technology
  </h2>

  <p>
  At <strong>SHA Infotechnology</strong>, we empower businesses to grow, scale, and lead in the digital era.
  As a full-service digital marketing agency, we combine web development, SEO, digital strategy,
  creative design, business analysis, and brand consultancy to build powerful digital ecosystems.
  Our mission is simple — transform ideas into measurable digital success.
  </p>

  <h3>Why Digital Strategy is the Foundation of Business Growth</h3>
  <p>
  In today’s competitive landscape, having just a website is not enough.
  Businesses need a clear and performance-driven digital strategy.
  At SHA Infotechnology, we create result-oriented roadmaps integrating SEO,
  social media marketing, and content strategy to maximize ROI and long-term growth.
  </p>

  <h3>Web Development & E-Commerce Solutions That Perform</h3>
  <p>
  Your website is your digital storefront. Our expert development team builds fast,
  secure, and responsive websites designed to convert visitors into customers.
  From corporate websites to advanced e-commerce platforms,
  we deliver scalable and high-performance digital solutions.
  </p>

  <ul>
    <li>Custom Website Development</li>
    <li>E-Commerce Development Solutions</li>
    <li>UI/UX Optimized Design</li>
    <li>Mobile-Responsive Interfaces</li>
    <li>Secure & Scalable Architecture</li>
  </ul>

  <h3>Digital Marketing & SEO for Maximum Online Visibility</h3>
  <p>
  Visibility drives growth. Our digital marketing and SEO services ensure
  your brand reaches the right audience at the right time.
  We use data-driven strategies to increase traffic,
  generate quality leads, and improve conversion rates.
  </p>

  <ul>
    <li>Search Engine Optimization (SEO)</li>
    <li>Social Media Marketing</li>
    <li>Content Marketing & Strategy</li>
    <li>Performance Marketing Campaigns</li>
    <li>Online Reputation Management</li>
  </ul>

  <h3>Creative Design, Brand Consultancy & Business Analysis</h3>
  <p>
  A strong brand identity sets you apart from competitors.
  Our creative and strategic team helps businesses build impactful brands
  through thoughtful design and data-backed insights.
  </p>

  <ul>
    <li>Brand Strategy Development</li>
    <li>Logo & Visual Identity Design</li>
    <li>Content & Creative Design</li>
    <li>Business & Market Analysis</li>
    <li>Digital Growth Strategy Planning</li>
  </ul>

  <h3>Why Choose SHA Infotechnology?</h3>
  <ul>
    <li><strong>Tailored Solutions:</strong> Every project is customized to meet your business objectives.</li>
    <li><strong>Expert Team:</strong> Skilled developers, marketers, and strategists delivering measurable results.</li>
    <li><strong>End-to-End Digital Services:</strong> From strategy to execution and optimization.</li>
    <li><strong>Result-Oriented Approach:</strong> Focused on ROI, scalability, and sustainable growth.</li>
  </ul>

  <h3>Conclusion</h3>
  <p>
  In the fast-evolving digital world, businesses need more than services — they need a strategic partner.
  SHA Infotechnology combines innovation, creativity, and technology to deliver comprehensive
  digital solutions that drive real business growth.
  Whether it’s web development, SEO, branding, digital marketing, or e-commerce,
  we help brands innovate, compete, and succeed in the digital marketplace.
  </p>

  `
},
{
  id: 4,
  slug: "digital-excellence-sha-infotechnology",
  title: "Transforming Businesses with Digital Excellence – SHA Infotechnology",
  category: "Digital Marketing",
  image: "/images/blog45.jpg",
   date : "14 Feb 2026",
  short: "Discover how SHA Infotechnology transforms businesses through web development, SEO, digital marketing, branding, and strategic innovation.",
  content: `

  <h2 class="gradient-heading">
  Transforming Businesses with Digital Excellence – SHA Infotechnology
  </h2>

  <p>
  At <strong>SHA Infotechnology</strong>, we specialize in transforming businesses through innovative digital solutions.
  As a leading digital marketing and web development agency, we combine strategy, creativity,
  and technology to help brands grow, compete, and succeed in today’s digital-first world.
  </p>

  <p>
  From startups to enterprises, we deliver scalable solutions including web development,
  SEO, social media marketing, digital strategy, creative design, business analysis,
  brand consultancy, and e-commerce development — all under one roof.
  </p>

  <h3>Strategic Digital Marketing for Business Growth</h3>
  <p>
  Digital success starts with a clear strategy. Our data-driven digital marketing approach
  focuses on increasing visibility, generating qualified leads, and improving conversion rates.
  We help businesses build strong online presence and sustainable growth models.
  </p>

  <ul>
    <li>Search Engine Optimization (SEO)</li>
    <li>Social Media Marketing</li>
    <li>Performance Marketing Campaigns</li>
    <li>Content Marketing Strategy</li>
    <li>Online Reputation Management</li>
  </ul>

  <h3>Custom Web Development & E-Commerce Solutions</h3>
  <p>
  Your website is the foundation of your digital identity.
  Our expert developers create responsive, secure, and high-performing websites
  tailored to your business goals. We build digital platforms that deliver real results.
  </p>

  <ul>
    <li>Custom Website Development</li>
    <li>E-Commerce Website Development</li>
    <li>Mobile-Responsive Design</li>
    <li>UI/UX Optimized Interfaces</li>
    <li>Secure & Scalable Architecture</li>
  </ul>

  <h3>Creative Design & Brand Consultancy</h3>
  <p>
  A powerful brand creates lasting impact.
  Our creative design and brand consultancy services help businesses establish
  a strong visual identity and clear market positioning.
  </p>

  <ul>
    <li>Brand Strategy & Identity Development</li>
    <li>Logo & Creative Design</li>
    <li>Content Design & Visual Storytelling</li>
    <li>Business Analysis & Market Research</li>
    <li>Digital Growth Planning</li>
  </ul>

  <h3>Why Choose SHA Infotechnology?</h3>
  <ul>
    <li><strong>Comprehensive Digital Services:</strong> End-to-end solutions from strategy to execution.</li>
    <li><strong>Experienced Team:</strong> Skilled professionals with industry expertise.</li>
    <li><strong>Customized Solutions:</strong> Every project is tailored to business objectives.</li>
    <li><strong>Performance-Focused Approach:</strong> We prioritize measurable results and ROI.</li>
  </ul>

  <h3>Conclusion</h3>
  <p>
  In an ever-evolving digital landscape, businesses need more than just services —
  they need a reliable growth partner. SHA Infotechnology combines innovation,
  strategy, and technology to deliver digital excellence that drives real business impact.
  Partner with us to transform your vision into measurable digital success.
  </p>

  `
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

          {/* <div className="cta-section">
            <h2>Ready to Grow Your Business?</h2>
            <p>Let Sha Infotechnology help you dominate search rankings and generate quality leads.</p>
            <Link to="/contact" className="cta-btn">
              Get Free Consultation →
            </Link>
          </div> */}

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
      {/* <section className="blog-hero">
        <h1>Our Blog</h1>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="hero-search"
        />
      </section> */}

      <section className="blog-page">
        <div className="blog-container">

          <div className="blog-left">

            <div className="breadcrumb">
              <h4><Link to="/">Home</Link> › Blog</h4>
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
                <p>{blog.date}</p>

                <Link to={`/blog/${blog.slug}`} className="read-more">
                  Continue Reading →
                </Link>

              </div>
            ))}

          </div>

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
              <p>📞 +91 93610 46387</p>
              <p>📩 shainfotech05@gmail.com</p>
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



const styles = `
*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:'Inter',system-ui,sans-serif;
  background:#0b1120;
  color:#e5e7eb;
  overflow-x:hidden;
}

/* ================= BLOG LIST ================= */

.blog-page{
  padding:60px 0;
}

.blog-container{
  max-width:1200px;
  margin:auto;
  padding:0 20px;
  display:flex;
  gap:40px;
  align-items:flex-start;
}

/* LEFT */

.blog-left{
  flex:3;
  min-width:0;
}

/* BLOG CARD */

.blog-card{
  margin-bottom:50px;
  transition:.3s ease;
}

.blog-card:hover{
  transform:translateY(-5px);
}

.blog-image{
  width:100%;
  height:240px;
  object-fit:cover;
  border-radius:12px;
  margin-bottom:18px;
}

.blog-title{
  font-size:26px;
  font-weight:700;
  margin-bottom:8px;
  line-height:1.35;
}

.blog-title a{
  text-decoration:none;
  background:linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.blog-excerpt{
  font-size:15px;
  line-height:1.7;
  color:#cbd5e1;
  margin-bottom:12px;
}

.read-more{
  text-decoration:none;
  font-weight:600;
  color:#a855f7;
  font-size:14px;
}

/* ================= SIDEBAR ================= */

.blog-sidebar{
  flex:1.2;
  position:sticky;
  top:100px;
}

.sidebar-widget{
  margin-bottom:24px;
  padding:18px;
  border-radius:12px;
  background:rgba(255,255,255,0.05);
}

.sidebar-widget h3{
  margin-bottom:12px;
  font-size:18px;
  font-weight:700;
  background:linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.sidebar-widget input{
  width:100%;
  padding:10px;
  border-radius:8px;
  border:none;
  outline:none;
  background:#111827;
  color:#fff;
  font-size:14px;
}

.contact-card{
  text-align:center;
}

.mini-cta{
  display:inline-block;
  margin-top:10px;
  font-weight:600;
  color:#a855f7;
  font-size:14px;
}

/* ================= SINGLE BLOG ================= */

.single-blog{
  max-width:900px;
  margin:70px auto;
  padding:0 20px;
}

.single-image{
  width:100%;
  height:auto;
  max-height:360px;
  object-fit:cover;
  border-radius:12px;
  margin-bottom:24px;
}

.single-blog h1{
  font-size:34px;
  font-weight:800;
  margin-bottom:18px;
  line-height:1.3;
  background:linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* BLOG CONTENT */

.single-content{
  font-size:16px;
  line-height:1.8;
  color:#d1d5db;
}

.single-content p{
  margin-bottom:14px;
}

.single-content h2,
.single-content h3{
  margin-top:28px;
  margin-bottom:12px;
  font-weight:700;
  background:linear-gradient(90deg,#a855f7,#ec4899);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.single-content h2{
  font-size:22px;
}

.single-content h3{
  font-size:18px;
}

.single-content ul{
  margin-left:18px;
  margin-top:10px;
}

.single-content li{
  margin-bottom:6px;
  font-size:15px;
}

/* ================= BREADCRUMB ================= */

.breadcrumb{
  margin-bottom:16px;
  font-size:13px;
  color:#94a3b8;
}

.breadcrumb a{
  color:#a855f7;
  text-decoration:none;
}

.back-btn{
  display:inline-block;
  margin-top:30px;
  font-weight:600;
  text-decoration:none;
  color:#a855f7;
}

/* ================= TABLET ================= */

@media (max-width:992px){

  .blog-container{
    flex-direction:column;
    gap:35px;
  }

  .blog-sidebar{
    position:relative;
    top:0;
  }

  .blog-title{
    font-size:22px;
  }

  .single-blog h1{
    font-size:28px;
  }

}

/* ================= MOBILE ================= */

@media (max-width:600px){

  .blog-page{
    padding:40px 0;
  }

  .blog-container{
    padding:0 15px;
  }

  .blog-image{
    height:180px;
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

  .single-content h2{
    font-size:18px;
  }

  .single-content h3{
    font-size:16px;
  }

}
`;

