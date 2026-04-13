export interface FurnitureItemContent {
  slug: string;
  name: string;
  image: string;
  images: string[];
  category: string;
  description: string;
  materials: { name: string; color: string }[];
  dimensions: string;
  designNotes: string[];
  scale?: string;
}

export const furnitureItems: FurnitureItemContent[] = [
  {
    slug: "meridian-chair",
    name: "Meridian Chair",
    image: "/home_animation/test.jpeg",
    images: ["/home_animation/test.jpeg", "/woods/chair.png", "/woods/black-chair.png"],
    category: "Seating",
    description:
      "A sculptural masterpiece that redefines comfort. The Meridian Chair features an organically curved backrest that cradles the body while making a bold design statement.",
    materials: [
      { name: "Solid Walnut", color: "#5D4037" },
      { name: "Premium Leather", color: "#8D6E63" },
      { name: "Brass Accents", color: "#D4AF37" },
    ],
    dimensions: "W 28\" × D 32\" × H 34\"",
    designNotes: [
      "Inspired by principles of MINIMALISM - simplicity, utility, and harmony",
      "The curved backrest adds softness to the geometric structure",
      "Contrasting materials bring warmth and character",
    ],
    scale: "1\" = 1'-0\"",
  },
  {
    slug: "horizon-table",
    name: "Horizon Table",
    image: "/woods/table.png",
    images: ["/woods/table.png", "/woods/hero-woods.png"],
    category: "Tables",
    description:
      "Clean lines meet exceptional craftsmanship. The Horizon Table showcases the natural beauty of reclaimed oak with a live edge that celebrates imperfection.",
    materials: [
      { name: "Walnut Wood", color: "#5D4037" },
      { name: "Skimming Stone", color: "#D5D0C8" },
    ],
    dimensions: "W 84\" × D 42\" × H 30\"",
    designNotes: [
      "Rounded drawer module adds softness to geometric structure",
      "Contrasting wood top brings warmth and character",
      "Seamless finish with rounded edges throughout",
    ],
    scale: "3\" = 1'-0\"",
  },
  {
    slug: "solace-sofa",
    name: "Solace Sofa",
    image: "/woods/sofa.png",
    images: ["/woods/sofa.png", "/woods/modern-sofa.png"],
    category: "Seating",
    description:
      "Sink into pure luxury. The Solace Sofa combines cloud-like comfort with modern minimalism, featuring deep seats and precisely tailored cushions.",
    materials: [
      { name: "Italian Bouclé", color: "#F5F5DC" },
      { name: "Kiln-dried Hardwood", color: "#A1887F" },
      { name: "Down Fill", color: "#FFFEF0" },
    ],
    dimensions: "W 96\" × D 42\" × H 32\"",
    designNotes: [
      "Low-profile silhouette for contemporary spaces",
      "Modular design allows for custom configurations",
      "Hidden joinery for seamless appearance",
    ],
    scale: "1\" = 1'-0\"",
  },
  {
    slug: "modern-sofa",
    name: "Modern Sofa",
    image: "/woods/modern-sofa.png",
    images: ["/woods/modern-sofa.png", "/woods/sofa.png"],
    category: "Seating",
    description:
      "Contemporary elegance at its finest. Low-profile design meets plush comfort in this statement piece designed for the modern living space.",
    materials: [
      { name: "Velvet Upholstery", color: "#4A4A4A" },
      { name: "Oak Legs", color: "#DEB887" },
    ],
    dimensions: "W 88\" × D 38\" × H 28\"",
    designNotes: [
      "Streamlined form emphasizes horizontal lines",
      "Generous seating depth for maximum comfort",
      "Tapered legs elevate the visual weight",
    ],
    scale: "1\" = 1'-0\"",
  },
  {
    slug: "studio-chair",
    name: "Studio Chair",
    image: "/woods/studio-chair.png",
    images: ["/woods/studio-chair.png", "/woods/chair.png", "/woods/modern-chair.png"],
    category: "Seating",
    description:
      "The perfect balance of form and function. Designed for the creative professional who demands both beauty and ergonomic support.",
    materials: [
      { name: "Molded Plywood", color: "#C4A484" },
      { name: "Leather Cushion", color: "#2C2C2C" },
      { name: "Chrome Base", color: "#C0C0C0" },
    ],
    dimensions: "W 24\" × D 26\" × H 36\"",
    designNotes: [
      "Ergonomic contours support natural posture",
      "Swivel mechanism for fluid movement",
      "Adjustable height for workspace flexibility",
    ],
    scale: "1\" = 1'-0\"",
  },
  {
    slug: "aura-lamps",
    name: "Aura Lamps",
    image: "/woods/lamps.png",
    images: ["/woods/lamps.png", "/woods/hero-woods.png"],
    category: "Lighting",
    description:
      "Ambient lighting elevated to art form. These sculptural lamps cast a warm, diffused glow that transforms any room into a sanctuary.",
    materials: [
      { name: "Hand-blown Glass", color: "#FAFAFA" },
      { name: "Brushed Brass", color: "#D4AF37" },
      { name: "Marble Base", color: "#F5F5F5" },
    ],
    dimensions: "Ø 12\" × H 24\"",
    designNotes: [
      "Organic glass forms create unique light patterns",
      "Warm temperature LED for cozy ambiance",
      "Weighted base ensures stability",
    ],
    scale: "1\" = 1'-0\"",
  },
];
