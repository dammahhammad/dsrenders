import type { Metadata } from "next";
import { AboutMeSection } from "@/components/sections/about-me-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DS Renders, our design philosophy, team, and approach to architecture, interiors, and furniture.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutMeSection />
    </main>
  );
}
