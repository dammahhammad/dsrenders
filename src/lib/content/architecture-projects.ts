export interface ArchitectureProjectContent {
  slug: string;
  title: string;
  location: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
}

export const architectureProjects: ArchitectureProjectContent[] = [
  {
    slug: "urban-sanctuary-tower",
    title: "Urban Sanctuary Tower",
    location: "Dubai, UAE",
    year: "2024",
    description:
      "A 52-story mixed-use development redefining luxury living in the heart of Dubai.",
    longDescription:
      "An exploration of vertical urbanism where residential, retail, and hospitality programs stack seamlessly into one continuous ecosystem. The tower is shaped to optimize daylight and views while reducing solar gain through calibrated façade articulation.",
    image: "/home_animation/building-1.png",
    images: [
      "/home_animation/building-1.png",
      "/home_animation/building-2.png",
      "/home_animation/building-4.png",
    ],
  },
  {
    slug: "eco-residence-complex",
    title: "Eco Residence Complex",
    location: "Copenhagen, Denmark",
    year: "2023",
    description:
      "Net-zero residential community setting new standards for sustainable urban living.",
    longDescription:
      "Designed as a climate-positive neighborhood, the complex combines passive design strategies, recycled materials, and renewable systems to achieve near self-sufficiency. Shared green courts and walkable circulation reinforce a socially connected living environment.",
    image: "/home_animation/building-2.png",
    images: [
      "/home_animation/building-2.png",
      "/home_animation/building-3.png",
      "/home_animation/building-6.png",
    ],
  },
  {
    slug: "glass-pavilion",
    title: "Glass Pavilion",
    location: "California, USA",
    year: "2024",
    description:
      "Minimalist retreat blending seamlessly with its natural surroundings.",
    longDescription:
      "A restrained architectural language allows landscape to become the primary visual event. Carefully framed vistas, recessed structural details, and seamless thresholds blur the boundaries between interior and exterior experience.",
    image: "/home_animation/building-3.png",
    images: [
      "/home_animation/building-3.png",
      "/home_animation/building-5.png",
      "/home_animation/building-8.png",
    ],
  },
  {
    slug: "cultural-arts-center",
    title: "Cultural Arts Center",
    location: "Singapore",
    year: "2023",
    description:
      "Dynamic performing arts venue celebrating Asian heritage through modern design.",
    longDescription:
      "The center is organized as a sequence of civic rooms that host performance, exhibition, and public gathering. The tectonic expression merges contemporary geometry with local material references, creating a culturally rooted yet forward-looking landmark.",
    image: "/home_animation/building-4.png",
    images: [
      "/home_animation/building-4.png",
      "/home_animation/building-7.png",
      "/home_animation/building-1.png",
    ],
  },
];
