import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interiors",
  description:
    "Explore interior design projects by DS Renders with contemporary aesthetics, material-driven spaces, and lifestyle-focused planning.",
  alternates: {
    canonical: "/drawings-colors",
  },
  openGraph: {
    title: "Drawings (Color) | DS Renders",
    description:
      "Explore interior design projects by DS Renders with contemporary aesthetics and material-driven spaces.",
    url: "https://dsrenders.com/drawings-colors",
    images: ["/home_animation/drawings-colors.jpg"],
  },
};

export default function InteriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
