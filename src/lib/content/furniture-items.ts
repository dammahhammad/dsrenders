export interface FurnitureItem {
  id: string;
  slug: string;
  name: string;
  images: string[];
  category: string;
  description: string;
  designNotes: string[];
}

export const furnitureItems: FurnitureItem[] = [
  {
    id: "1",
    slug: "olive-grove-bedroom",
    name: "The Olive Grove Bedroom",
    images: [
      "https://images.dsrenders.com/ai_renders/B1.webp",
      "https://images.dsrenders.com/ai_renders/B2.webp",
    ],
    category: "Seating",
    description:
      "The Olive Grove Bedroom embraces a soft bohemian aesthetic through layered natural textures, earthy tones, and botanical-inspired detailing. Deep olive accents, warm oak flooring, and tropical mural wallpaper create a calming connection to nature while establishing a rich and immersive atmosphere. Floating wooden ledges, woven textures, and curated greenery introduce warmth and personality throughout the space, balancing simplicity with visual depth. Soft ambient lighting and organic forms complete the composition, resulting in a serene retreat that feels intimate, grounded, and effortlessly inviting.",
    designNotes: [
      "Layered natural textures and earthy tones create a bohemian warmth",
      "Tropical mural wallpaper establishes an immersive connection to nature",
      "Floating wooden ledges and woven textures balance simplicity with depth",
    ],
  },
  {
    id: "2",
    slug: "terracotta-breeze",
    name: "Terracotta Breeze",
    images: [
      "https://images.dsrenders.com/ai_renders/BNB_1.webp",
      "https://images.dsrenders.com/ai_renders/BNB_2.webp",
      "https://images.dsrenders.com/ai_renders/BNB_3.webp",
    ],
    category: "Tables",
    description:
      "Terracotta Breeze is a warm Mediterranean-inspired retreat designed around natural textures, earthy materials, and soft daylight. Rich terracotta brick walls introduce depth and character, while large arched French windows flood the interior with natural light, creating an airy and tranquil atmosphere. Warm oak finishes, woven rattan details, and layered textiles soften the architectural composition and enhance the room’s relaxed elegance. Balanced by textured beige walls and polished concrete flooring, the space feels grounded, inviting, and effortlessly timeless.",
    designNotes: [
      "Rich terracotta brick walls introduce depth and Mediterranean character",
      "Arched French windows flood the space with natural light",
      "Woven rattan details and layered textiles soften the composition",
    ],
  },
  {
    id: "3",
    slug: "bordeaux-coffee-bar",
    name: "The Bordeaux Coffee Bar",
    images: [
      "https://images.dsrenders.com/ai_renders/COFFEE_BAR_1.webp",
      "https://images.dsrenders.com/ai_renders/COFFEE_BAR_2.webp",
    ],
    category: "Lighting",
    description:
      "The Bordeaux Coffee Bar combines rich materiality with timeless detailing to create a warm and sophisticated beverage station. Deep burgundy millwork is paired with softly illuminated oak shelving, fluted glass cabinetry, and elegant Calacatta marble surfaces, establishing a refined balance between contrast and warmth. The arched composition introduces a sense of architectural softness, while integrated lighting enhances depth and ambiance throughout the space. Designed for both functionality and display, the coffee bar transforms a simple daily ritual into an elevated experience.",
    designNotes: [
      "Deep burgundy millwork paired with fluted glass cabinetry",
      "Arched composition introduces architectural softness",
      "Calacatta marble surfaces establish refined contrast and warmth",
    ],
  },
  {
    id: "4",
    slug: "hearthwood-lounge",
    name: "The Hearthwood Lounge",
    images: ["https://images.dsrenders.com/ai_renders/FIREPLACE.webp"],
    category: "Seating",
    description:
      "The Hearthwood Lounge blends modern minimalism with warm natural textures to create a refined and inviting living environment. A sculptural fireplace wall anchors the composition, framed by rich walnut shelving that introduces depth, balance, and curated display opportunities. Soft neutral furnishings and layered textures enhance the calming atmosphere, while the linear fireplace adds warmth and subtle ambient movement to the space. Clean architectural lines, integrated lighting, and organic material tones come together to create a living area that feels both sophisticated and effortlessly comfortable.",
    designNotes: [
      "Sculptural fireplace wall anchors the entire composition",
      "Rich walnut shelving introduces depth and curated display",
      "Linear fireplace adds warmth and subtle ambient movement",
    ],
  },
  {
    id: "5",
    slug: "evergreen-living-kitchen",
    name: "The Evergreen Living Kitchen",
    images: [
      "https://images.dsrenders.com/ai_renders/kitchen.webp",
    ],
    category: "Seating",
    description:"The Evergreen Living Kitchen blends modern simplicity with nature-inspired warmth to create a calm and inviting open-concept interior. Soft green cabinetry, light oak flooring, and textured neutral finishes establish a balanced material palette that feels both fresh and timeless. The kitchen, dining, and lounge areas flow seamlessly together, encouraging connection and everyday comfort while maintaining a refined architectural composition. Sculptural lighting, curated wall niches, and layered organic textures add depth and personality, while expansive natural light enhances the airy and serene atmosphere throughout the space.",
    designNotes: [
      "Soft green cabinetry paired with light oak for a fresh palette",
      "Seamless open-concept flow between kitchen, dining, and lounge",
      "Sculptural lighting and wall niches add personality and depth",
    ],
  },
  {
    id: "6",
    slug: "sagewood-kitchen",
    name: "The Sagewood Kitchen",
    images: ["https://images.dsrenders.com/ai_renders/kitchen_1.webp"],
    category: "Seating",
    description: "The Sagewood Kitchen blends timeless craftsmanship with a refined modern aesthetic, creating a warm and inviting culinary space. Soft sage cabinetry is paired with rich oak wood accents and elegant reeded glass details, bringing depth and texture to the composition. The marble waterfall island serves as the focal point of the design, offering both functional workspace and casual seating while enhancing the kitchen’s sculptural presence. Balanced by classic tilework, layered materials, and clean architectural lines, the space feels sophisticated, calm, and effortlessly livable.",
    designNotes: [
      "Sage cabinetry with rich oak accents and reeded glass details",
      "Marble waterfall island serves as sculptural focal point",
      "Classic tilework and layered materials create timeless sophistication",
    ],
  },
  {
    id: "7",
    slug: "midnight-cove-mudroom",
    name: "Midnight Cove Mudroom",
    images: [
      "https://images.dsrenders.com/ai_renders/MUDROOM_VIEW.webp",
    ],
    category: "Seating",
    description: "The Midnight Cove Mudroom transforms a functional entryway into a refined architectural moment through rich color, texture, and thoughtful detailing. Deep navy cabinetry is paired with vertically fluted wall panels to create depth and visual rhythm, while warm brass accents and a sculptural pendant light introduce softness and contrast. Integrated seating, concealed storage, and open shelving provide practical everyday organization without compromising the elevated aesthetic. Anchored by bold geometric floor tile, the space feels sophisticated, welcoming, and quietly luxurious.",
    designNotes: [
      "Deep navy cabinetry with vertically fluted wall panels",
      "Warm brass accents and sculptural pendant introduce contrast",
      "Bold geometric floor tile anchors the elevated aesthetic",
    ],
  },
  {
    id: "8",
    slug: "the-noirwood-office",
    name: "The Noirwood Office",
    images: [
      "https://images.dsrenders.com/ai_renders/OFFICE_1.webp",
      "https://images.dsrenders.com/ai_renders/OFFICE_2.webp",
    ],
    category: "Seating",
    description: "The Noirwood Office combines contemporary minimalism with rich materiality to create a workspace that feels both sophisticated and inviting. Warm oak millwork and deep wood flooring establish a grounded architectural presence, while the dramatic marble desk surface introduces contrast and refinement. Integrated shelving with ambient lighting provides curated display and functional storage, adding depth and visual rhythm to the composition. Soft neutral wall finishes and controlled lighting complete the atmosphere, resulting in a calm and focused environment designed for productivity and quiet elegance.",
    designNotes: [
      "Warm oak millwork with dramatic marble desk surface",
      "Integrated shelving with ambient lighting for curated display",
      "Controlled lighting creates a calm, focused atmosphere",
    ],
  },
  {
    id: "9",
    slug: "the-blooming-arcade",
    name: "The Blooming Arcade",
    images: ["https://images.dsrenders.com/ai_renders/PATIO.webp"],
    category: "Lighting",
    description: "The Blooming Arcade is a Mediterranean-inspired courtyard designed to celebrate light, texture, and lush greenery through a refined architectural composition. Patterned Moroccan tiles establish a vibrant visual rhythm across the patio floor, while cascading bougainvillea softens the structured geometry with natural movement and color. Arched decorative niches, textured plaster walls, woven rattan furnishings, and warm oak accents create a serene outdoor retreat that feels both timeless and inviting. The open arcade and expansive glazing allow natural light to filter through the space, enhancing its airy, tranquil atmosphere.",
    designNotes: [
      "Patterned Moroccan tiles establish vibrant visual rhythm",
      "Cascading bougainvillea softens structured geometry with color",
      "Arched niches and textured plaster walls create serene depth",
    ],
  },
  {
    id: "10",
    slug: "the-alabaster-living-room",
    name: "The Alabaster Living Room",
    images: [
      "https://images.dsrenders.com/ai_renders/WALL_DESIGN.webp",
    ],
    category: "Lighting",
    description: "The Alabaster Living Room embraces soft minimalism through a carefully balanced composition of warm wood tones, textured finishes, and sculptural forms. A custom open shelving feature wall introduces rhythm and visual depth while serving as both functional storage and curated display. The curved lounge chairs soften the architectural geometry of the space, creating an inviting conversational setting layered with warmth and comfort. Natural light, muted textures, and restrained material contrasts come together to establish a serene environment that feels timeless, airy, and refined.",
    designNotes: [
      "Custom open shelving wall introduces rhythm and visual depth",
      "Curved lounge chairs soften the architectural geometry",
      "Restrained material contrasts create a serene, airy environment",
    ],
  },
];

