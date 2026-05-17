export interface DrawingsColor {
  id?: string;
  title: string;
  category: string;
  location?: string;
  year?: string;
  description: string;
  longDescription?: string;
  images: string[];
  features: string[];
  icon?: string;
  slug: string;
}

export const drawingsColorProjects: DrawingsColor[] = [
  {
    id: "1",
    slug: "the-sagewood-kitchen",
    title: "The Sagewood Kitchen",
    category: "Kitchen",
    description: "Sage cabinetry meets marble elegance in a warm, sculptural culinary space.",
    longDescription: "The Sagewood Kitchen blends timeless craftsmanship with a refined modern aesthetic, creating a warm and inviting culinary space. Soft sage cabinetry is paired with rich oak wood accents and elegant reeded glass details, bringing depth and texture to the composition. The marble waterfall island serves as the focal point of the design, offering both functional workspace and casual seating while enhancing the kitchen's sculptural presence. Balanced by classic tilework, layered materials, and clean architectural lines, the space feels sophisticated, calm, and effortlessly livable.",
    images: [
      "https://images.dsrenders.com/drawings_color/01_kitchen_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/01_KITCHEN_2_Page_2.webp",
    ],
    features: ["Custom millwork", "Natural materials", "Ambient lighting"],
    icon: "◉",
  },
  {
    id: "2",
    slug: "midnight-cove-mudroom",
    title: "Midnight Cove Mudroom",
    category: "Mudroom",
    description: "Deep navy tones and fluted panels transform an entryway into quiet luxury.",
    longDescription: "The Midnight Cove Mudroom transforms a functional entryway into a refined architectural moment through rich color, texture, and thoughtful detailing. Deep navy cabinetry is paired with vertically fluted wall panels to create depth and visual rhythm, while warm brass accents and a sculptural pendant light introduce softness and contrast. Integrated seating, concealed storage, and open shelving provide practical everyday organization without compromising the elevated aesthetic. Anchored by bold geometric floor tile, the space feels sophisticated, welcoming, and quietly luxurious.",
    images: [
      "https://images.dsrenders.com/drawings_color/02_MODERN%20MUDROOM_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/02_MODERN%20MUDROOM_2_Page_2.webp",
    ],
    features: ["Integrated seating", "Fluted panels", "Hidden storage"],
    icon: "◈",
  },
  {
    id: "3",
    slug: "the-bordeaux-coffee-bar",
    title: "The Bordeaux Coffee Bar",
    category: "Coffee Bar",
    description: "Burgundy millwork and Calacatta marble elevate the daily coffee ritual.",
    longDescription: "The Bordeaux Coffee Bar combines rich materiality with timeless detailing to create a warm and sophisticated beverage station. Deep burgundy millwork is paired with softly illuminated oak shelving, fluted glass cabinetry, and elegant Calacatta marble surfaces, establishing a refined balance between contrast and warmth. The arched composition introduces a sense of architectural softness, while integrated lighting enhances depth and ambiance throughout the space. Designed for both functionality and display, the coffee bar transforms a simple daily ritual into an elevated experience.",
    images: [
      "https://images.dsrenders.com/drawings_color/03_COFFEE%20BAR%20LAYOUT.webp",
    ],
    features: ["Fluted glass", "Oak shelving", "Mood lighting"],
    icon: "◇",
  },
  {
    id: "6",
    slug: "maison-rouge-powder-room",
    title: "Maison Rouge Powder Room",
    category: "Powder Room",
    description: "Bold Parisian red and black marble create an intimate, moody statement.",
    longDescription: "The Maison Rouge Powder Room embraces bold sophistication through a carefully balanced palette of deep Parisian red, terrazzo textures, and dramatic black marble surfaces. The rich monochromatic walls create an intimate and moody atmosphere, while warm brass fixtures and sculptural lighting introduce elegance and visual contrast. A floating fluted vanity paired with a softly arched mirror adds architectural refinement, enhancing both the functionality and sculptural presence of the space. Layered with texture, warmth, and ambient lighting, the design transforms a compact powder room into a luxurious statement interior.",
    images: [
      "https://images.dsrenders.com/drawings_color/06_POWDER%20ROOM_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/06_POWDER%20ROOM_2_Page_2.webp",
    ],
    features: ["Fluted vanity", "Brass fixtures", "Arched mirror"],
    icon: "◎",
  },
  {
    id: "7",
    slug: "the-hearthwood-lounge",
    title: "The Hearthwood Lounge",
    category: "Living Room",
    description: "A sculptural fireplace wall anchors this warm, walnut-framed living space.",
    longDescription: "The Hearthwood Lounge blends modern minimalism with warm natural textures to create a refined and inviting living environment. A sculptural fireplace wall anchors the composition, framed by rich walnut shelving that introduces depth, balance, and curated display opportunities. Soft neutral furnishings and layered textures enhance the calming atmosphere, while the linear fireplace adds warmth and subtle ambient movement to the space. Clean architectural lines, integrated lighting, and organic material tones come together to create a living area that feels both sophisticated and effortlessly comfortable.",
    images: [
      "https://images.dsrenders.com/drawings_color/07_FIREPLACE_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/07_FIREPLACE_2_Page_2.webp",
    ],
    features: ["Linear fireplace", "Walnut shelving", "Ambient lighting"],
    icon: "◎",
  },
  {
    id: "8",
    slug: "the-aure-desk",
    title: "The Aure Desk",
    category: "Furniture",
    description: "Walnut and stone geometry merge into a calm, minimal workspace.",
    longDescription: "The Aure Desk embraces modern minimalism through soft geometry, clean architectural lines, and a carefully balanced material palette. A warm walnut wood surface contrasts elegantly against the smooth stone-toned structure, creating a composition that feels both refined and inviting. The rounded drawer module introduces sculptural softness to the otherwise linear form, while concealed storage maintains a seamless and uncluttered appearance. Designed with simplicity, utility, and visual harmony in mind, the desk creates a calm and sophisticated workspace suited for contemporary interiors.",
    images: [
      "https://images.dsrenders.com/drawings_color/08_TABLE.webp",
    ],
    features: ["Clean geometry", "Concealed storage", "Walnut surface"],
    icon: "◎",
  },
  {
    id: "4",
    slug: "the-solara-fauteuil",
    title: "The Solara Fauteuil",
    category: "Furniture",
    description: "A sculptural lounge chair blending tropical modernism with organic comfort.",
    longDescription: "The Solara Fauteuil blends natural craftsmanship with contemporary minimalism to create a lounge chair that feels both sculptural and inviting. Defined by its gently curved backrest and open slatted framework, the design introduces a sense of lightness while maintaining structural strength and ergonomic comfort. Crafted in warm timber tones and paired with soft linen upholstery, the chair embraces a calm organic aesthetic inspired by tropical modernism and nature-driven design. The result is a timeless statement piece that balances elegance, comfort, and everyday functionality.",
    images: [
      "https://images.dsrenders.com/drawings_color/04_CAROLINE%20FAUTEUIL.webp",
    ],
    features: ["Curved backrest", "Slatted framework", "Linen upholstery"],
    icon: "⬡",
  },
  {
    id: "5",
    slug: "the-atelier-chaise",
    title: "The Atelier Chaise",
    category: "Furniture",
    description: "Mid-century teak and woven wicker unite in an artisan dining chair.",
    longDescription: "The Atelier Chaise combines timeless craftsmanship with a refined mid-century silhouette, creating a dining chair that feels both elegant and approachable. Warm teak wood framing is paired with woven wicker detailing on the seat and backrest, introducing natural texture and artisanal character to the composition. The gently curved rear legs and clean linear structure create a balanced visual softness while maintaining durability and ergonomic comfort. Lightweight in appearance yet structurally grounded, the chair embodies a calm, organic aesthetic suited for both contemporary and classic interiors.",
    images: [
      "https://images.dsrenders.com/drawings_color/05_CECILE%20chaise.webp",
    ],
    features: ["Teak framing", "Woven wicker", "Ergonomic design"],
    icon: "◎",
  },
  {
    id: "9",
    slug: "the-alabaster-living-room",
    title: "The Alabaster Living Room",
    category: "Living Room",
    description: "Soft minimalism and sculptural shelving create a timeless, airy retreat.",
    longDescription: "The Alabaster Living Room embraces soft minimalism through a carefully balanced composition of warm wood tones, textured finishes, and sculptural forms. A custom open shelving feature wall introduces rhythm and visual depth while serving as both functional storage and curated display. The curved lounge chairs soften the architectural geometry of the space, creating an inviting conversational setting layered with warmth and comfort. Natural light, muted textures, and restrained material contrasts come together to establish a serene environment that feels timeless, airy, and refined.",
    images: [
      "https://images.dsrenders.com/drawings_color/09_WALL%20DESIGN_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/09_WALL%20DESIGN_2_Page_2.webp",
    ],
    features: ["Open shelving", "Curved furniture", "Natural light"],
    icon: "◎",
  },
  {
    id: "10",
    slug: "the-evergreen-living-kitchen",
    title: "The Evergreen Living Kitchen",
    category: "Outdoor",
    description: "An open-air patio designed for relaxed living under golden light.",
    longDescription: "The Evergreen Living Kitchen blends modern simplicity with nature-inspired warmth to create a calm and inviting open-concept interior. Soft green cabinetry, light oak flooring, and textured neutral finishes establish a balanced material palette that feels both fresh and timeless. The kitchen, dining, and lounge areas flow seamlessly together, encouraging connection and everyday comfort while maintaining a refined architectural composition. Sculptural lighting, curated wall niches, and layered organic textures add depth and personality, while expansive natural light enhances the airy and serene atmosphere throughout the space.",
    images: [
      "https://images.dsrenders.com/drawings_color/10_KITCHEN%20%26%20LIVING_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/10_KITCHEN%20%26%20LIVING_2_Page_2.webp",
      "https://images.dsrenders.com/drawings_color/10_KITCHEN%20%26%20LIVING_3_Page_3.webp"
    ],
    features: ["Natural stone", "Lush greenery", "Open-air design"],
    icon: "◎",
  },
  {
    id: "11",
    slug: "the-moonshadow-carrier",
    title: "The Moonshadow Carrier",
    category: "Kitchen & Living",
    description: "A cinematic travel chest fusing Japanese fantasy with traditional craft.",
    longDescription: "The Moonshadow Carrier reinterprets the iconic traveling box through a detailed blend of traditional craftsmanship and stylized fantasy aesthetics. Constructed with rich wood textures, reinforced metal framing, and ornamental corner detailing, the design balances durability with visual character. Functional strap systems and articulated hinges emphasize portability and practicality, while the compact vertical proportions create a strong sculptural presence. Inspired by Japanese anime storytelling and historical transport chests, the piece captures a cinematic atmosphere that feels both protective and symbolic.",
    images: [
      "https://images.dsrenders.com/drawings_color/11_NEZUKO'S%20BOX.webp",
    ],
    features: ["Metal framing", "Articulated hinges", "Ornamental detailing"],
    icon: "◎",
  },
  {
    id: "12",
    slug: "the-forma-vanity",
    title: "The Forma Vanity",
    category: "Furniture",
    description: "Clean geometry and seamless drawer pulls define this minimalist vanity.",
    longDescription: "The Forma Vanity embraces minimalist design through clean geometry, precise detailing, and functional simplicity. Defined by its seamless drawer composition and soft neutral finish, the piece creates a refined architectural presence while maintaining practical everyday usability. Integrated cutout pulls preserve the uninterrupted visual flow of the form, while the layered drawer configuration introduces depth and proportion to the overall silhouette. Designed with clarity and restraint, the vanity balances utility, craftsmanship, and contemporary elegance.",
    images: [
      "https://images.dsrenders.com/drawings_color/12_VANITY.webp",
    ],
    features: ["Cutout pulls", "Layered drawers", "Neutral finish"],
    icon: "◎",
  },
  {
    id: "13",
    slug: "the-olive-grove-bedroom",
    title: "The Olive Grove Bedroom",
    category: "Bedroom",
    description: "Bohemian warmth meets tropical murals in this nature-inspired sanctuary.",
    longDescription: "The Olive Grove Bedroom embraces a soft bohemian aesthetic through layered natural textures, earthy tones, and botanical-inspired detailing. Deep olive accents, warm oak flooring, and tropical mural wallpaper create a calming connection to nature while establishing a rich and immersive atmosphere. Floating wooden ledges, woven textures, and curated greenery introduce warmth and personality throughout the space, balancing simplicity with visual depth. Soft ambient lighting and organic forms complete the composition, resulting in a serene retreat that feels intimate, grounded, and effortlessly inviting.",
    images: [
      "https://images.dsrenders.com/drawings_color/13_BEDROOM_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/13_BEDROOM_2_Page_2.webp",
    ],
    features: ["Tropical murals", "Olive accents", "Woven textures"],
    icon: "◎",
  },
  {
    id: "14",
    slug: "the-noirwood-office",
    title: "The Noirwood Office",
    category: "Office",
    description: "Oak millwork and a marble desk craft a focused, quietly elegant workspace.",
    longDescription: "The Noirwood Office combines contemporary minimalism with rich materiality to create a workspace that feels both sophisticated and inviting. Warm oak millwork and deep wood flooring establish a grounded architectural presence, while the dramatic marble desk surface introduces contrast and refinement. Integrated shelving with ambient lighting provides curated display and functional storage, adding depth and visual rhythm to the composition. Soft neutral wall finishes and controlled lighting complete the atmosphere, resulting in a calm and focused environment designed for productivity and quiet elegance.",
    images: [
      "https://images.dsrenders.com/drawings_color/14_OFFICE_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/14_OFFICE_2_Page_2.webp",
    ],
    features: ["Marble desk", "Integrated shelving", "Ambient lighting"],
    icon: "◎",
  },
  {
    id: "15",
    slug: "terracotta-breeze",
    title: "Terracotta Breeze",
    category: "Bedroom",
    description: "Mediterranean brick and arched windows bathe this retreat in warm daylight.",
    longDescription: "Terracotta Breeze is a warm Mediterranean-inspired retreat designed around natural textures, earthy materials, and soft daylight. Rich terracotta brick walls introduce depth and character, while large arched French windows flood the interior with natural light, creating an airy and tranquil atmosphere. Warm oak finishes, woven rattan details, and layered textiles soften the architectural composition and enhance the room's relaxed elegance. Balanced by textured beige walls and polished concrete flooring, the space feels grounded, inviting, and effortlessly timeless.",
    images: [
      "https://images.dsrenders.com/drawings_color/15_BNB_1_Page_1.webp",
      "https://images.dsrenders.com/drawings_color/15_BNB_2_Page_2.webp",
      "https://images.dsrenders.com/drawings_color/15_BNB_3_Page_3.webp",
    ],
    features: ["Terracotta brick", "Arched windows", "Rattan details"],
    icon: "◎",
  },
  {
    id: "16",
    slug: "the-blooming-arcade",
    title: "The Blooming Arcade",
    category: "Outdoor",
    description: "Moroccan tiles and cascading bougainvillea define this courtyard escape.",
    longDescription: "The Blooming Arcade is a Mediterranean-inspired courtyard designed to celebrate light, texture, and lush greenery through a refined architectural composition. Patterned Moroccan tiles establish a vibrant visual rhythm across the patio floor, while cascading bougainvillea softens the structured geometry with natural movement and color. Arched decorative niches, textured plaster walls, woven rattan furnishings, and warm oak accents create a serene outdoor retreat that feels both timeless and inviting. The open arcade and expansive glazing allow natural light to filter through the space, enhancing its airy, tranquil atmosphere.",
    images: [
        "https://images.dsrenders.com/drawings_color/16_PATIO_1_Page_1.webp",
        "https://images.dsrenders.com/drawings_color/16_PATIO_2_Page_2.webp",
    ],
    features: ["Moroccan tiles", "Bougainvillea", "Arched niches"],
    icon: "◎",
  }
];
