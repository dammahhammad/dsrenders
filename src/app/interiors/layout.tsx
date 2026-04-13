import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interiors",
  description:
    "Explore interior design projects by DS Renders with contemporary aesthetics, material-driven spaces, and lifestyle-focused planning.",
  alternates: {
    canonical: "/interiors",
  },
  openGraph: {
    title: "Interior Design Portfolio | DS Renders",
    description:
      "Explore interior design projects by DS Renders with contemporary aesthetics and material-driven spaces.",
    url: "https://dsrenders.com/interiors",
    images: ["/home_animation/interior.jpg"],
  },
};

export default function InteriorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
