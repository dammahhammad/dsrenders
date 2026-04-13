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
  { title: "Urban Sanctuary", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Minimalist Haven", link: "/interiors", thumbnail: "/home_animation/test.jpeg" },
  { title: "Eco Residence", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Nordic Comfort", link: "/furniture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Zen Gardens", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Glass Pavilion", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Coastal Retreat", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Sky Tower", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Modern Living", link: "/interiors", thumbnail: "/home_animation/test.jpeg" },
  { title: "Luxury Estate", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
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
