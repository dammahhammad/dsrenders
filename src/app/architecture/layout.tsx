import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Discover DS Renders architecture portfolio featuring residential, commercial, and cultural projects designed for timeless impact.",
  alternates: {
    canonical: "/architecture",
  },
  openGraph: {
    title: "Architecture Projects | DS Renders",
    description:
      "Discover DS Renders architecture portfolio featuring residential, commercial, and cultural projects.",
    url: "https://dsrenders.com/architecture",
    images: ["/home_animation/building-1.png"],
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
