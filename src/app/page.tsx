import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { WhyUsSection } from "@/components/ui/why-us-section";
import { TeamSection } from "@/components/ui/team-section";
import { WorldMapComponent } from "@/components/world-map";
import { PortfolioGrid } from "@/components/ui/portfolio-grid";
import Image from "next/image";
const Footer = React.lazy(() => import("@/components/footer"));

export const products = [
  {
    title: "Modern Villa",
    link: "/architecture",
    thumbnail: "/home_animation/building-1.png"
  },
  {
    title: "Urban Complex",
    link: "/architecture",
    thumbnail: "/home_animation/building-2.png",
  },
  {
    title: "Luxury Interiors",
    link: "/interiors",
    thumbnail: "/home_animation/building-3.png",
  },
  {
    title: "Art Gallery",
    link: "/architecture",
    thumbnail: "/home_animation/building-4.png",
  },
  {
    title: "Eco Residence",
    link: "/architecture",
    thumbnail: "/home_animation/building-5.png",
  },
  {
    title: "Glass Tower",
    link: "/architecture",
    thumbnail: "/home_animation/building-6.png",
  },
  {
    title: "Minimalist Home",
    link: "/interiors",
    thumbnail: "/home_animation/building-7.png",
  },
  {
    title: "Cultural Center",
    link: "/architecture",
    thumbnail: "/home_animation/building-8.png",
  },
  {
    title: "Waterfront Plaza",
    link: "/landscape",
    thumbnail: "/home_animation/building-2.png",
  },
  {
    title: "Heritage Restoration",
    link: "/architecture",
    thumbnail: "/home_animation/building-3.png",
  },
  {
    title: "Boutique Hotel",
    link: "/interiors",
    thumbnail: "/home_animation/building-4.png",
  },
  {
    title: "Sky Garden",
    link: "/landscape",
    thumbnail: "/home_animation/building-5.png",
  },
  {
    title: "Corporate HQ",
    link: "/architecture",
    thumbnail: "/home_animation/building-6.png",
  },
  {
    title: "Sustainable Campus",
    link: "/architecture",
    thumbnail: "/home_animation/building-7.png",
  },
  {
    title: "Private Retreat",
    link: "/interiors",
    thumbnail: "/home_animation/building-8.png",
  },
];

const content = [
  {
    title: "Architecture",
    description:
      "Our architectural designs blend creativity with functionality — shaping spaces that inspire and stand the test of time. From residential masterpieces to commercial landmarks, we bring vision to life with precision and innovation.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Architecture
      </div>
    ),
  },
  {
    title: "Interiors",
    description:
      "We craft interiors that reflect individuality and comfort. Every space we design tells a story — blending aesthetics, material, and light to create environments that feel both elegant and livable.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/interiors.webp"
          alt="Interiors"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Furniture",
    description:
      "Our bespoke furniture is designed to complement the architecture it inhabits. With a focus on craftsmanship and sustainability, each piece adds both form and function — tailored to fit your lifestyle.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Furniture
      </div>
    ),
  },
  {
    title: "Landscape",
    description:
      "We design landscapes that connect people with nature — integrating greenery, water, and space to create harmony between built form and environment. Every project is an expression of balance and beauty.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--lime-500))] text-white">
        Landscape
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <HeroParallax products={products} />
      <PortfolioGrid />
      <section id="services">
        <StickyScroll content={content} />
      </section>
      <WhyUsSection />
      <section id="team">
        <TeamSection />
      </section>
      <section id="global">
        <WorldMapComponent />
      </section>
      <Footer />
    </div>
  );
}

