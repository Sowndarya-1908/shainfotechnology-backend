

import React from "react";
import { useParams } from "react-router-dom";


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
  }
};

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
      <service.fifth />
     
    </>
  );
}
