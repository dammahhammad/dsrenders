import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture",
  description:
    "Browse DS Renders furniture collection with bespoke seating, tables, and lighting crafted for performance, elegance, and longevity.",
  alternates: {
    canonical: "/furniture",
  },
  openGraph: {
    title: "Furniture Design Collection | DS Renders",
    description:
      "Browse DS Renders furniture collection with bespoke seating, tables, and lighting.",
    url: "https://dsrenders.com/furniture",
    images: ["/woods/hero-woods.png"],
  },
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
