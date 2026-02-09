import { HeroParallax } from "@/components/ui/hero-parallax";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { GlobalReachSection } from "@/components/sections/global-reach";
import { Footer } from "@/components/footer";

const products = [
  { title: "Urban Sanctuary", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Minimalist Haven", link: "/interiors", thumbnail: "/home_animation/test.jpeg" },
  { title: "Eco Residence", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Nordic Comfort", link: "/furniture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Zen Gardens", link: "/landscape", thumbnail: "/home_animation/test.jpeg" },
  { title: "Glass Pavilion", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Coastal Retreat", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Sky Tower", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
  { title: "Modern Living", link: "/interiors", thumbnail: "/home_animation/test.jpeg" },
  { title: "Luxury Estate", link: "/architecture", thumbnail: "/home_animation/test.jpeg" },
];

export default function Home() {
  return (
    <>
      <HeroParallax products={products} />
      <PortfolioGrid />
      <AboutMeSection />
      <GlobalReachSection />
      <Footer />
    </>
  );
}
