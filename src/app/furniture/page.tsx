"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { Footer } from "@/components/footer";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Lens } from "@/components/ui/lens";
import { IconRuler, IconPencil, IconPalette, IconPhoto, IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { FollowerPointerCard, FollowPointer } from "@/components/ui/following-pointer";

interface DesignItem {
    id: string;
    name: string;
    image: string;
    images: string[];  // Array of images for gallery
    category: string;
    description: string;
    materials: { name: string; color: string }[];
    dimensions: string;
    designNotes: string[];
    scale?: string;
}

const designItems: DesignItem[] = [
    {
        id: "1",
        name: "Meridian Chair",
        image: "/home_animation/test.jpeg",
        images: ["/home_animation/test.jpeg", "/woods/chair.png", "/woods/black-chair.png"],
        category: "Seating",
        description: "A sculptural masterpiece that redefines comfort. The Meridian Chair features an organically curved backrest that cradles the body while making a bold design statement.",
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
        id: "2",
        name: "Horizon Table",
        image: "/woods/table.png",
        images: ["/woods/table.png", "/woods/hero-woods.png"],
        category: "Tables",
        description: "Clean lines meet exceptional craftsmanship. The Horizon Table showcases the natural beauty of reclaimed oak with a live edge that celebrates imperfection.",
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
        id: "3",
        name: "Solace Sofa",
        image: "/woods/sofa.png",
        images: ["/woods/sofa.png", "/woods/modern-sofa.png"],
        category: "Seating",
        description: "Sink into pure luxury. The Solace Sofa combines cloud-like comfort with modern minimalism, featuring deep seats and precisely tailored cushions.",
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
        id: "4",
        name: "Modern Sofa",
        image: "/woods/modern-sofa.png",
        images: ["/woods/modern-sofa.png", "/woods/sofa.png"],
        category: "Seating",
        description: "Contemporary elegance at its finest. Low-profile design meets plush comfort in this statement piece designed for the modern living space.",
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
        id: "5",
        name: "Studio Chair",
        image: "/woods/studio-chair.png",
        images: ["/woods/studio-chair.png", "/woods/chair.png", "/woods/modern-chair.png"],
        category: "Seating",
        description: "The perfect balance of form and function. Designed for the creative professional who demands both beauty and ergonomic support.",
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
        id: "6",
        name: "Aura Lamps",
        image: "/woods/lamps.png",
        images: ["/woods/lamps.png", "/woods/hero-woods.png"],
        category: "Lighting",
        description: "Ambient lighting elevated to art form. These sculptural lamps cast a warm, diffused glow that transforms any room into a sanctuary.",
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

const designPhilosophy = [
    {
        icon: <IconPencil size={24} />,
        title: "Thoughtful Design",
        description: "Every line is intentional, every curve serves a purpose.",
    },
    {
        icon: <IconPalette size={24} />,
        title: "Material Honesty",
        description: "We celebrate the authentic character of each material.",
    },
    {
        icon: <IconRuler size={24} />,
        title: "Precision Craft",
        description: "Technical excellence meets artistic expression.",
    },
];

export default function FurniturePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
    const [galleryItem, setGalleryItem] = useState<DesignItem | null>(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: contentProgress } = useScroll({
        target: contentRef,
        offset: ["start end", "start start"],
    });

    const springConfig = { stiffness: 100, damping: 30 };

    const heroScale = useSpring(
        useTransform(heroProgress, [0, 1], [1, 1.2]),
        springConfig
    );
    const heroOpacity = useSpring(
        useTransform(heroProgress, [0, 0.6], [1, 0]),
        springConfig
    );

    const contentY = useSpring(
        useTransform(contentProgress, [0, 1], [100, 0]),
        springConfig
    );
    const contentOpacity = useSpring(
        useTransform(contentProgress, [0, 0.5], [0, 1]),
        springConfig
    );

    return (
        <>
            {/* Fullscreen Hero Section - KEPT AS IS */}
            <section ref={heroRef} className="relative h-[100svh] min-h-[600px] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Image
                        src="/woods/hero-woods.png"
                        alt="Bespoke furniture craftsmanship"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <FadeIn delay={0.3}>
                        <span className="text-xs sm:text-sm font-body tracking-[0.3em] uppercase text-white/70 mb-4 block">
                            Design Portfolio
                        </span>
                    </FadeIn>

                    <h1 className="font-display font-bold text-white leading-tight max-w-4xl">
                        <FadeIn delay={0.5}>
                            <span className="block">From Concept</span>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                            <span className="block text-gradient">to Creation</span>
                        </FadeIn>
                    </h1>

                    <FadeIn delay={0.9}>
                        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-white/80 font-body">
                            Bespoke furniture designed with precision,
                            crafted with purpose, built to last generations.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section - Updated Structure */}
            <motion.div
                ref={contentRef}
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative bg-background rounded-t-[2rem] -mt-8 z-20"
            >
                {/* Philosophy Section - Consistent with Interiors/Architecture */}
                <section className="py-20 sm:py-32 relative overflow-hidden">
                    <div className="container-custom relative">
                        <FadeIn>
                            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
                                <div className="max-w-2xl">
                                    <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                                        Philosophy
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                                        Crafted with <br className="hidden sm:block" />
                                        <span className="text-muted-foreground">Intention</span>
                                    </h2>
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground font-body max-w-md lg:text-right">
                                    We believe that furniture should be more than functional objects—they are the touchpoints of our daily lives.
                                </p>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {designPhilosophy.map((item, index) => (
                                <StaggerItem key={index} className="h-full">
                                    <motion.div
                                        className="relative p-8 sm:p-10 bg-card border border-border/50 h-full group hover:border-accent/40 hover:shadow-lg transition-all duration-500 rounded-2xl overflow-hidden flex flex-col items-center text-center"
                                        whileHover={{ y: -8 }}
                                    >
                                        <div className="mb-6 p-5 rounded-full bg-accent/80 text-foreground group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Design Portfolio - Vertical Scroll Gallery Style */}
                <section className="py-16 sm:py-24 bg-background border-t border-border/40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
                        <FadeIn className="mb-16 sm:mb-20">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-border pb-8">
                                <div>
                                    <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-accent mb-2 block">
                                        Collection
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                                        Signature Pieces
                                    </h2>
                                </div>
                            </div>
                        </FadeIn>

                        <div className="space-y-0">
                            {designItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <FurnitureRow
                                        item={item}
                                        index={index}
                                        onClick={() => setSelectedItem(item)}
                                        onViewImages={() => setGalleryItem(item)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 sm:py-32 bg-background text-background relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 pointer-events-none" />

                    <div className="container-custom relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <FadeIn>
                                <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-accent mb-4 block">
                                    Commission
                                </span>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-accent mb-6 leading-tight">
                                    Bespoke <br />
                                    <span className="text-accent/80">Creations</span>
                                </h2>
                                <p className="text-lg text-white/70 font-body leading-relaxed mb-8 max-w-md">
                                    Collaborate with us to create furniture that is uniquely yours. From initial sketch to final installation.
                                </p>

                                <ul className="space-y-4 mb-10">
                                    {["Design consultation", "Technical drawings & 3D", "Material curation", "Artisan fabrication"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-white/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    href="/contact"
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-background text-foreground rounded-full font-body font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Start Your Project</span>
                                    <span>→</span>
                                </motion.a>
                            </FadeIn>

                            <FadeIn direction="left" delay={0.2}>
                                <div className="relative h-[400px] sm:h-[500px] w-full bg-white/10 rounded-2xl overflow-hidden glass border-white/10 border">
                                    <Image
                                        src="/woods/modern-sofa.png"
                                        alt="Custom furniture design"
                                        fill
                                        className="object-contain p-12"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                <Footer />
            </motion.div>

            {/* Design Detail Sheet */}
            <DesignDetailSheet
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
            />

            {/* Image Gallery Modal */}
            <ImageGalleryModal
                item={galleryItem}
                onClose={() => setGalleryItem(null)}
            />
        </>
    );
}

// Furniture Row Component (Vertical Scroll Style)
interface FurnitureRowProps {
    item: DesignItem;
    index: number;
    onClick: () => void;
    onViewImages: () => void;
}

function FurnitureRow({ item, index, onClick, onViewImages }: FurnitureRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

    return (
        <motion.div
            ref={rowRef}
            className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] gap-8 lg:gap-16 py-12 border-b border-border/10 cursor-pointer group"
            onClick={onClick}
            style={{ opacity }}
        >
            {/* Left: Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent">
                        {item.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground/60">
                        0{index + 1}
                    </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-6">
                    {item.name}
                </h3>

                <p className="text-base text-muted-foreground font-body leading-relaxed max-w-xl mb-8">
                    {item.description}
                </p>

                {/* Materials Preview */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex -space-x-3">
                        {item.materials.slice(0, 3).map((material, idx) => (
                            <div
                                key={idx}
                                className="w-10 h-10 rounded-full border-2 border-background ring-1 ring-border shadow-sm"
                                style={{ backgroundColor: material.color }}
                                title={material.name}
                            />
                        ))}
                    </div>
                    {item.materials.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{item.materials.length - 3} more</span>
                    )}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                    <motion.div
                        className="flex items-center gap-2 text-sm font-body text-foreground border-b border-foreground/30 pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors"
                        whileHover={{ x: 5 }}
                    >
                        <span>View Details</span>
                        <span>→</span>
                    </motion.div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewImages();
                        }}
                        className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <IconPhoto size={16} />
                        <span>Gallery ({item.images.length})</span>
                    </button>
                </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[300px] sm:h-[350px] overflow-hidden rounded-2xl bg-secondary/5 order-1 lg:order-2">
                <motion.div className="absolute inset-0 flex items-center justify-center p-8" style={{ y: imageY }}>
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                    />
                </motion.div>

                <div className="absolute top-4 right-4 z-20">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        <IconChevronRight size={16} />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

// Design Detail Sheet Component
interface DesignDetailSheetProps {
    item: DesignItem | null;
    onClose: () => void;
}

function DesignDetailSheet({ item, onClose }: DesignDetailSheetProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when item changes
    const images = item?.images || [];

    const goToPrevImage = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    };

    return (
        <Sheet open={!!item} onOpenChange={(open) => { if (!open) { setCurrentImageIndex(0); onClose(); } }}>
            <SheetContent
                side="right"
                className="w-full sm:w-[540px] lg:w-[600px] min-w-[40vw] overflow-y-auto p-0"
            >
                {item && (
                    <div className="flex flex-col h-full">
                        {/* Image Carousel Section */}
                        <div className="relative h-[300px] sm:h-[350px] bg-secondary/20 shrink-0">
                            {/* Blueprint Grid */}
                            <div
                                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(to right, currentColor 1px, transparent 1px),
                                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                                    `,
                                    backgroundSize: "30px 30px",
                                }}
                            />

                            {/* Images with smooth transition */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Image
                                        src={images[currentImageIndex] || item.image}
                                        alt={`${item.name} - Image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-contain p-8"
                                        sizes="(max-width: 640px) 100vw, 600px"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 z-10">
                                    <motion.button
                                        onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
                                        className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-sm"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IconChevronLeft size={18} />
                                    </motion.button>
                                    <motion.button
                                        onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                                        className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-sm"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IconChevronRight size={18} />
                                    </motion.button>
                                </div>
                            )}

                            {/* Image Dots */}
                            {images.length > 1 && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === idx
                                                ? "bg-foreground w-6"
                                                : "bg-foreground/30 w-1.5 hover:bg-foreground/50"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Scale indicator */}
                            {item.scale && (
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1.5 text-xs font-mono bg-background/90 backdrop-blur-sm rounded text-foreground border border-border/50">
                                        Scale: {item.scale}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
                            <SheetHeader className="text-left mb-6">
                                <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-1 block">
                                    {item.category}
                                </span>
                                <SheetTitle className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                                    {item.name}
                                </SheetTitle>
                                <SheetDescription className="mt-3 text-base text-muted-foreground font-body leading-relaxed">
                                    {item.description}
                                </SheetDescription>
                            </SheetHeader>

                            {/* Materials Section */}
                            <div className="mb-6 sm:mb-8">
                                <h4 className="text-sm font-display font-semibold text-foreground mb-4 uppercase tracking-wider">
                                    Materials
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {item.materials.map((material, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50"
                                        >
                                            <div
                                                className="w-5 h-5 rounded-full border border-border"
                                                style={{ backgroundColor: material.color }}
                                            />
                                            <span className="text-sm font-body text-foreground">
                                                {material.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dimensions */}
                            <div className="mb-6 sm:mb-8">
                                <h4 className="text-sm font-display font-semibold text-foreground mb-3 uppercase tracking-wider">
                                    Dimensions
                                </h4>
                                <p className="text-sm text-muted-foreground font-mono bg-secondary/30 px-4 py-3 rounded-lg border border-border/50">
                                    {item.dimensions}
                                </p>
                            </div>

                            {/* Design Notes */}
                            <div className="mb-8">
                                <h4 className="text-sm font-display font-semibold text-foreground mb-4 uppercase tracking-wider">
                                    Design Notes
                                </h4>
                                <ul className="space-y-3">
                                    {item.designNotes.map((note, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-3 text-sm text-muted-foreground font-body"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                            <span>{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <motion.a
                                href="/contact"
                                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-body font-medium text-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Request This Design</span>
                                <span>→</span>
                            </motion.a>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

// Image Gallery Modal Component with Lens Zoom
interface ImageGalleryModalProps {
    item: DesignItem | null;
    onClose: () => void;
}

function ImageGalleryModal({ item, onClose }: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when modal opens
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
            setCurrentIndex(0);
        }
    };

    const images = item?.images || [];
    const hasMultipleImages = images.length > 1;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Dialog open={!!item} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden bg-background border-border">
                <AnimatePresence mode="wait">
                    {item && (
                        <motion.div
                            key="gallery-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border shrink-0">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-body">
                                        {images.length} images • Hover to zoom
                                    </p>
                                </div>
                            </div>

                            {/* Image Container with Lens */}
                            <div className="flex-1 relative bg-secondary/10 min-h-0">
                                {/* Blueprint Grid */}
                                <div
                                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(to right, currentColor 1px, transparent 1px),
                                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                                        `,
                                        backgroundSize: "40px 40px",
                                    }}
                                />

                                {/* Main Image with Lens */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
                                    >
                                        <Lens zoomFactor={2} lensSize={200}>
                                            <Image
                                                src={images[currentIndex]}
                                                alt={`${item.name} - Image ${currentIndex + 1}`}
                                                width={600}
                                                height={450}
                                                className="object-contain max-w-full max-h-[450px] w-auto h-auto"
                                                priority
                                            />
                                        </Lens>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Arrows */}
                                {hasMultipleImages && (
                                    <>
                                        <motion.button
                                            onClick={goToPrevious}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IconChevronLeft size={20} />
                                        </motion.button>
                                        <motion.button
                                            onClick={goToNext}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IconChevronRight size={20} />
                                        </motion.button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {hasMultipleImages && (
                                <div className="p-4 sm:p-6 border-t border-border bg-background shrink-0">
                                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                                        {images.map((img, idx) => (
                                            <motion.button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === idx
                                                    ? "border-accent shadow-lg"
                                                    : "border-border/50 hover:border-border opacity-60 hover:opacity-100"
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="64px"
                                                />
                                            </motion.button>
                                        ))}
                                    </div>
                                    {/* Image Counter */}
                                    <p className="text-center mt-3 text-xs sm:text-sm text-muted-foreground font-body">
                                        {currentIndex + 1} of {images.length}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent>
        </Dialog>
    );
}