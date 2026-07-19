import type { Metadata } from "next";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { GlobalReachSection } from "@/components/sections/global-reach";
import { IntroAnimation } from "@/components/layout/intro-animation";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore DS Renders portfolio in architecture, interiors, and furniture with immersive design visuals and detailed project storytelling.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DS Renders | Architecture, Interiors & Furniture",
    description:
      "Explore DS Renders portfolio in architecture, interiors, and furniture design.",
    url: "https://dsrenders.com",
    images: ["https://images.dsrenders.com/logo.svg"],
  },
};

const products = [
  { title: "Eco Residence", link: "/drawings-bw", thumbnail: "https://images.dsrenders.com/drawings_bw/CAD_page-0001.webp" },
  { title: "The Sagewood Kitchen", link: "/drawings-colors/the-sagewood-kitchen", thumbnail: "https://images.dsrenders.com/drawings_color/01_kitchen_1_Page_1.webp" },
  { title: "The Olive Grove Bedroom", link: "/ai-renders/olive-grove-bedroom", thumbnail: "https://images.dsrenders.com/ai_renders/B1.webp" },
  { title: "Terracotta Breeze", link: "/ai-renders/terracotta-breeze", thumbnail: "https://images.dsrenders.com/ai_renders/BNB_1.webp" },
  { title: "The Bordeaux Coffee Bar", link: "/drawings-colors/the-bordeaux-coffee-bar", thumbnail: "https://images.dsrenders.com/drawings_color/03_COFFEE%20BAR%20LAYOUT.webp" },
  { title: "Midnight Cove Mudroom", link: "/drawings-colors/midnight-cove-mudroom", thumbnail: "https://images.dsrenders.com/drawings_color/02_MODERN%20MUDROOM_1_Page_1.webp" },
  { title: "The Hearthwood Lounge", link: "/drawings-colors", thumbnail: "https://images.dsrenders.com/drawings_color/07_FIREPLACE_2_Page_2.webp" },
  { title: "Glass Pavilion", link: "/drawings-bw", thumbnail: "https://images.dsrenders.com/drawings_bw/CAD_page-0001.webp" },
  { title: "The Bordeaux Coffee Bar", link: "/ai-renders/bordeaux-coffee-bar", thumbnail: "https://images.dsrenders.com/ai_renders/COFFEE_BAR_1.webp" },
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DS Renders",
    url: "https://dsrenders.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://dsrenders.com/projects",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DS Renders",
    url: "https://dsrenders.com",
    logo: "https://images.dsrenders.com/logo.svg",
    sameAs: [],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DS Renders",
    url: "https://dsrenders.com",
    description:
      "Architectural drafting, interior drafting, 3D modeling, and AI rendering services for architects, builders, and designers.",
    provider: {
      "@type": "Person",
      name: "Daniyal Siddiqui",
      jobTitle: "Architect & 3D Visualization Artist",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        "2D Architecture Drafting",
        "2D Interior Drafting",
        "3D Modeling",
        "AI Renders",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <IntroAnimation />
      <HeroParallax products={products} />
      <ServicesSection />
      <PortfolioGrid />
      <AboutMeSection />
      <GlobalReachSection />
    </>
  );
}
