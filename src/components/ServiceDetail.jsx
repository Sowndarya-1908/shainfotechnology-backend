

import React from "react";
import { useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
/* ===== SERVICES ===== */
import {
  SEOHero,
  SecondSlideSEO,
  ServicesGridSEO,
  WhySEeOHeroDark,
  FAQSEO
} from "./Seo";

import {
  EcommerceHero,
  SecondSlideEcommerce,
  ServicesGridEcommerce,
  WhyEcommerceHeroDark,
  FAQEcommerce
} from "./Ecommerce";

import {
  SocialMediaHero,
  SecondSlideSocialMedia,
  ServicesGridSocialMedia,
  WhySocialMediaHeroDark,
  FAQSocialMedia
} from "./SocialMedia";

import {
  ContentDesignHero,
  SecondSlideContentDesign,
  ServicesGridContentDesign,
  WhyContentDesignHeroDark,
  FAQContentDesign
} from "./ContentDesign";

import {
  BusinessAnalysisHero,
  SecondSlideBusinessAnalysis,
  ServicesGridBusinessAnalysis,
  WhyBusinessAnalysisHeroDark,
  FAQBusinessAnalysis
} from "./BusinessAnalysis";

import {
  CreativeDesignHero,
  SecondSlideCreativeDesign,
  ServicesGridCreativeDesign,
  WhyCreativeDesignHeroDark,
  FAQCreativeDesign
} from "./CreativeDesign";

import {
  BrandConsultancyHero,
  SecondSlideBrandConsultancy,
  ServicesGridBrandConsultancy,
  WhyBrandConsultancyHeroDark,
  FAQBrandConsultancy
} from "./BrandConsultancy";

import {
  WebDevelopmentHero,
  SecondSlideWebDevelopment,
  ServicesGridWebDevelopment,
  WhyWebDevelopmentHeroDark,
  FAQWebDevelopment
} from "./WebDevelopment";

import {
  DigitalStrategyHero,
  SecondSlideDigitalStrategy,
  ServicesGridDigitalStrategy,
  WhyDigitalStrategyHeroDark,
  FAQDigitalStrategy
} from "./DigitalStrategy";

import {
  AimarketingHero,
  SecondSlideAimarketing,
  ServicesGridAimarketing,
  WhyAimarketingHeroDark,
  FAQAimarketing
} from "./Aimarketing";


/* ===== MAP ===== */
const SERVICE_MAP = {
  seo: {
    first: SEOHero,
    second: SecondSlideSEO,
    third: ServicesGridSEO,
    fourth: WhySEeOHeroDark,
    fifth: FAQSEO
  },

  "ecommerce-website": {
    first: EcommerceHero,
    second: SecondSlideEcommerce,
    third: ServicesGridEcommerce,
    fourth: WhyEcommerceHeroDark,
    fifth: FAQEcommerce
  },

  "social-media-marketing": {
    first: SocialMediaHero,
    second: SecondSlideSocialMedia,
    third: ServicesGridSocialMedia,
    fourth: WhySocialMediaHeroDark,
    fifth: FAQSocialMedia
  },

  "content-design": {
    first: ContentDesignHero,
    second: SecondSlideContentDesign,
    third: ServicesGridContentDesign,
    fourth: WhyContentDesignHeroDark,
    fifth: FAQContentDesign
  },

  "business-analysis": {
    first: BusinessAnalysisHero,
    second: SecondSlideBusinessAnalysis,
    third: ServicesGridBusinessAnalysis,
    fourth: WhyBusinessAnalysisHeroDark,
    fifth: FAQBusinessAnalysis
  },

  "creative-design": {
    first: CreativeDesignHero,
    second: SecondSlideCreativeDesign,
    third: ServicesGridCreativeDesign,
    fourth: WhyCreativeDesignHeroDark,
    fifth: FAQCreativeDesign
  },

  "brand-consultancy": {
    first: BrandConsultancyHero,
    second: SecondSlideBrandConsultancy,
    third: ServicesGridBrandConsultancy,
    fourth: WhyBrandConsultancyHeroDark,
    fifth: FAQBrandConsultancy
  },

  "web-development": {
    first: WebDevelopmentHero,
    second: SecondSlideWebDevelopment,
    third: ServicesGridWebDevelopment,
    fourth: WhyWebDevelopmentHeroDark,
    fifth: FAQWebDevelopment
  },

  "digital-strategy": {
    first: DigitalStrategyHero,
    second: SecondSlideDigitalStrategy,
    third: ServicesGridDigitalStrategy,
    fourth: WhyDigitalStrategyHeroDark,
    fifth: FAQDigitalStrategy
  },

    "ai-marketing": {
    first: AimarketingHero,
    second: SecondSlideAimarketing,
    third: ServicesGridAimarketing,
    fourth: WhyAimarketingHeroDark,
    fifth: FAQAimarketing
  }

};


function Demo() {

const sectionRef = useRef(null);

const [loading,setLoading] = useState(false);

const [formData,setFormData] = useState({
name:"",
phone:"",
email:"",
selection:"",
message:""
});

useEffect(()=>{

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

if(sectionRef.current){
observer.observe(sectionRef.current);
}

},[]);


const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();
setLoading(true);

emailjs.send(
"service_pznbx9s",
"template_8wwwast",
formData,
"yxT-hRvX41RhpOdfZ"
)
.then(()=>{
alert("Enquiry Sent Successfully!");
setFormData({
name:"",
phone:"",
email:"",
selection:"",
message:""
});
})
.catch(()=>{
alert("Failed to send enquiry");
})
.finally(()=>{
setLoading(false);
});
};

return(
<>
<section ref={sectionRef} className="demo-banner reveal">

<div className="mesh-bg"></div>

<div className="demo-inner">

<div className="banner-text">
<h2>
  Connect With Our Digital Marketing

<span> & Web Experts</span>
</h2>
<p>Courses • Services • Expert Support</p>
<p>Whether you want to learn Digital Marketing or grow your business online, our experts are here to guide you.</p>
</div>

<form className="banner-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone"
value={formData.phone}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>

<select
name="selection"
value={formData.selection}
onChange={handleChange}
required
>
<option value="">Select Service / Course</option>
                  <option value="Digital Strategy">Digital Strategy</option>
                  <option value="Digital Marketing Course">Digital Marketing Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Design">Content Design</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Creative Design">Creative Design</option>
                  <option value="Brand Consultancy">Brand Consultancy</option>
                  <option value="AI Marketing">AI Marketing</option>
</select>

<textarea
name="message"
placeholder="Message"
value={formData.message}
onChange={handleChange}
></textarea>

<button type="submit">
{loading ? "Sending..." : "Connect with us"}
</button>

</form>

</div>

</section>

<style>{`

/* ================= BANNER ================= */

.demo-banner{
position:relative;
padding:45px 6%;
overflow:hidden;
background:#ffffff;
}

/* ================= MESH GRADIENT BG ================= */

.mesh-bg{
position:absolute;
inset:0;
background:
radial-gradient(circle at 20% 30%, rgba(124,58,237,0.25), transparent 40%),
radial-gradient(circle at 80% 70%, rgba(236,72,153,0.25), transparent 40%),
radial-gradient(circle at 50% 50%, rgba(168,85,247,0.2), transparent 50%);
animation:meshMove 12s infinite alternate ease-in-out;
z-index:0;
}

@keyframes meshMove{
0%{
transform:scale(1) translate(0,0);
}
50%{
transform:scale(1.2) translate(30px,-20px);
}
100%{
transform:scale(1) translate(-20px,20px);
}
}

/* ================= LAYOUT ================= */

.demo-inner{
position:relative;
z-index:2;
display:flex;
align-items:center;
justify-content:space-between;
gap:30px;
flex-wrap:wrap;
}

/* ================= TEXT ================= */

.banner-text{
flex:1;
}

.banner-text h2{
font-size:24px;
font-weight:700;
color:#0f172a;
margin-bottom:5px;
}

.banner-text span{
background:linear-gradient(90deg,#7C3AED,#EC4899);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.banner-text p{
font-size:14px;
color:#475569;
}

/* ================= FORM ================= */

.banner-form{
flex:2;
display:flex;
gap:10px;
flex-wrap:wrap;
padding:14px;
border-radius:14px;
background:#ffffff;

background:
linear-gradient(#fff,#fff) padding-box,
linear-gradient(120deg,#7C3AED,#EC4899,#7C3AED) border-box;

border:2px solid transparent;

box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.banner-form input,
.banner-form select,
.banner-form textarea{
padding:9px 10px;
border-radius:8px;
border:1px solid #e2e8f0;
font-size:13px;
min-width:120px;
transition:all .3s;
}

.banner-form textarea{
min-width:180px;
}

.banner-form input:focus,
.banner-form select:focus,
.banner-form textarea:focus{
border-color:#7C3AED;
box-shadow:0 0 0 2px rgba(124,58,237,0.2);
outline:none;
}

/* ================= SHIMMER BUTTON ================= */

.banner-form button{
position:relative;
overflow:hidden;
padding:10px 20px;
border:none;
border-radius:8px;
background:linear-gradient(90deg,#7C3AED,#EC4899);
color:white;
font-weight:600;
cursor:pointer;
}

.banner-form button::before{
content:"";
position:absolute;
top:0;
left:-120%;
width:120%;
height:100%;
background:linear-gradient(
120deg,
transparent,
rgba(255,255,255,0.6),
transparent
);
transition:all .6s;
}

.banner-form button:hover::before{
left:120%;
}

/* ================= SCROLL REVEAL ================= */

.reveal{
opacity:0;
transform:translateY(60px);
transition:all 0.9s ease;
}

.reveal.show{
opacity:1;
transform:translateY(0);
}

/* ================= MOBILE ================= */

@media(max-width:900px){

.demo-inner{
flex-direction:column;
text-align:center;
}

.banner-form{
width:100%;
max-width:420px;
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

.banner-form textarea{
grid-column:1 / span 2;
}

.banner-form button{
grid-column:1 / span 2;
padding:12px;
}

}

`}</style>

</>
);
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICE_MAP[slug];

  if (!service) return null;

  return (
    <>



      <service.first />
      <service.second />
      <service.third />
      <service.fourth />
      <Demo />
      <service.fifth />
      
     
    </>
  );
}
