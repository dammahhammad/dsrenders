import type { Metadata } from "next";
import { HeroParallax } from "@/components/ui/hero-parallax";
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
    images: ["/home_animation/test.jpeg"],
  },
};

const products = [
  { title: "The Sagewood Kitchen", link: "/interiors/the-sagewood-kitchen", thumbnail: "https://images.dsrenders.com/drawings_color/01_kitchen_1_Page_1.webp" },
  { title: "The Olive Grove Bedroom", link: "/furniture/olive-grove-bedroom", thumbnail: "https://images.dsrenders.com/ai_renders/B1.webp" },
  { title: "Eco Residence", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Terracotta Breeze", link: "/furniture/terracotta-breeze", thumbnail: "https://images.dsrenders.com/ai_renders/BNB_1.webp" },
  { title: "The Bordeaux Coffee Bar", link: "/interiors/the-bordeaux-coffee-bar", thumbnail: "https://images.dsrenders.com/drawings_color/03_COFFEE%20BAR%20LAYOUT.webp" },
  { title: "Glass Pavilion", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Coastal Retreat", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Midnight Cove Mudroom", link: "/interiors/midnight-cove-mudroom", thumbnail: "https://images.dsrenders.com/drawings_color/02_MODERN%20MUDROOM_1_Page_1.webp" },
  { title: "Modern Living", link: "/interiors", thumbnail: "/home_animation/test.jpeg" },
  { title: "The Bordeaux Coffee Bar", link: "/furniture/bordeaux-coffee-bar", thumbnail: "https://images.dsrenders.com/ai_renders/COFFEE_BAR_1.webp" },
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
    logo: "https://dsrenders.com/home_animation/test.jpeg",
    sameAs: [],
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
      <IntroAnimation />
      <HeroParallax products={products} />
      <PortfolioGrid />
      <AboutMeSection />
      <GlobalReachSection />
    </>
  );
}
