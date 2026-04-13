export interface InteriorProjectContent {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
}

export const interiorProjects: InteriorProjectContent[] = [
  {
    slug: "serene-living-space",
    title: "Serene Living Space",
    category: "Living Room",
    location: "Mumbai, India",
    year: "2024",
    description:
      "A contemporary living room that balances warmth with minimalist design principles.",
    longDescription:
      "This living space explores the dialogue between natural materials and contemporary form. The softly contoured furniture carries an organic presence, allowing light to move gently across surfaces and revealing the natural grain and tactile depth of the wood. Neither rigid nor overtly expressive, the form finds its strength in restraint – sculptural without becoming dominant.",
    images: [
      "/home_animation/building-2.png",
      "/home_animation/building-3.png",
      "/home_animation/building-4.png",
    ],
    features: ["Custom millwork", "Natural materials", "Ambient lighting"],
  },
  {
    slug: "modern-kitchen-studio",
    title: "Modern Kitchen Studio",
    category: "Kitchen",
    location: "Delhi, India",
    year: "2024",
    description:
      "Functional culinary space designed for the modern lifestyle with clean lines.",
    longDescription:
      "Sharing the DNA of minimalist Scandinavian design, this kitchen explores balance through subtle variation. Angled surfaces are joined by a low apron that runs close to the floor, creating a composed yet dynamic foundation that anchors the piece in the space. The softly contoured countertops carry an organic presence, revealing the natural grain and tactile depth of the stone.",
    images: [
      "/home_animation/building-5.png",
      "/home_animation/building-6.png",
      "/home_animation/building-7.png",
    ],
    features: ["Integrated appliances", "Marble countertops", "Hidden storage"],
  },
  {
    slug: "tranquil-bedroom-retreat",
    title: "Tranquil Bedroom Retreat",
    category: "Bedroom",
    location: "Bangalore, India",
    year: "2023",
    description:
      "A serene retreat crafted for rest and rejuvenation with soft textures.",
    longDescription:
      "This bedroom embodies the principles of calm and restoration. Every element serves the purpose of creating an environment conducive to rest. The material palette focuses on natural textiles and muted tones, while carefully positioned lighting creates intimate pockets of warmth throughout the space.",
    images: [
      "/home_animation/building-8.png",
      "/home_animation/building-1.png",
      "/home_animation/building-2.png",
    ],
    features: ["Automated blinds", "Natural fabrics", "Mood lighting"],
  },
  {
    slug: "urban-loft-design",
    title: "Urban Loft Design",
    category: "Living Room",
    location: "Pune, India",
    year: "2023",
    description:
      "Industrial meets contemporary in this open-concept urban dwelling.",
    longDescription:
      "An exploration of contrasts – raw industrial elements meet refined contemporary design. Exposed brick and steel are softened by warm wood tones and plush textiles. The open floor plan encourages fluid movement while designated zones provide intimate spaces for work and relaxation.",
    images: [
      "/home_animation/building-3.png",
      "/home_animation/building-4.png",
      "/home_animation/building-5.png",
    ],
    features: ["Open floor plan", "Industrial accents", "Smart home integration"],
  },
  {
    slug: "coastal-dining-room",
    title: "Coastal Dining Room",
    category: "Dining",
    location: "Goa, India",
    year: "2024",
    description:
      "Elegant dining space inspired by coastal serenity and natural light.",
    longDescription:
      "Drawing inspiration from the nearby coastline, this dining space captures the essence of seaside living. Light floods through expansive windows, playing across textured surfaces that evoke sand and sea. The dining table becomes a gathering point where memories are made and stories are shared.",
    images: [
      "/home_animation/building-6.png",
      "/home_animation/building-7.png",
      "/home_animation/building-8.png",
    ],
    features: ["Bay windows", "Custom dining table", "Coastal palette"],
  },
];
