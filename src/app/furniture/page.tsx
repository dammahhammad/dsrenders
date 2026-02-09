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
            {/* Fullscreen Hero Section */}
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

            {/* Content Section */}
            <motion.div
                ref={contentRef}
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative bg-background rounded-t-[2rem] -mt-8 z-20"
            >
                {/* Design Philosophy */}
                <section className="section-padding relative">
                    <div className="container-custom">
                        <FadeIn>
                            <div className="text-center mb-12 sm:mb-16">
                                <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                                    Philosophy
                                </span>
                                <h2 className="font-display font-bold text-foreground">
                                    Design Principles
                                </h2>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                            {designPhilosophy.map((item, index) => (
                                <StaggerItem key={index}>
                                    <motion.div
                                        className="text-center p-6 sm:p-8"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-base sm:text-lg font-display font-semibold text-foreground mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground font-body">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* Design Portfolio Grid */}
                <section className="section-padding pt-0">
                    <div className="container-custom">
                        <FadeIn>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-16">
                                <div>
                                    <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                                        Portfolio
                                    </span>
                                    <h2 className="font-display font-bold text-foreground">
                                        Design Collection
                                    </h2>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Grid Layout */}
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {designItems.map((item, index) => (
                                <StaggerItem key={item.id}>
                                    <DesignCard
                                        item={item}
                                        index={index}
                                        onClick={() => setSelectedItem(item)}
                                        onViewImages={() => setGalleryItem(item)}
                                    />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-foreground">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <FadeIn>
                                <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-background/60 mb-2 block">
                                    Commission
                                </span>
                                <h2 className="font-display font-bold text-background mb-4 sm:mb-6">
                                    Custom Design Service
                                </h2>
                                <p className="text-base sm:text-lg text-background/70 font-body leading-relaxed mb-6 sm:mb-8">
                                    Have a vision for your space? I work directly with clients
                                    to create bespoke furniture pieces tailored to your exact specifications.
                                </p>
                                <ul className="space-y-3 sm:space-y-4 mb-8">
                                    {["Design consultation", "Technical drawings & 3D visualization", "Material selection", "Fabrication oversight"].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center gap-3 text-sm sm:text-base text-background/80 font-body"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-foreground rounded-full font-body font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Start Your Project</span>
                                    <span>→</span>
                                </motion.a>
                            </FadeIn>

                            <FadeIn direction="left" delay={0.2}>
                                <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden bg-background/5">
                                    <Image
                                        src="/woods/modern-sofa.png"
                                        alt="Custom furniture design"
                                        fill
                                        className="object-contain p-8"
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

// Design Card Component
interface DesignCardProps {
    item: DesignItem;
    index: number;
    onClick: () => void;
    onViewImages: () => void;
}

function DesignCard({ item, onClick, onViewImages }: DesignCardProps) {
    return (
        <motion.div
            className="group relative cursor-pointer"
            onClick={onClick}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* Card */}
            <FollowerPointerCard title={item.name}>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors">
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-secondary/20">
                        {/* Blueprint Grid Overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.04] pointer-events-none"
                            style={{
                                backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                            `,
                                backgroundSize: "20px 20px",
                            }}
                        />

                        <motion.div
                            className="relative h-full w-full p-6 sm:p-8"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain z-10"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </motion.div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 text-[10px] sm:text-xs font-body tracking-wider uppercase bg-background/90 backdrop-blur-sm rounded-full text-foreground">
                                {item.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-base sm:text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {item.name}
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-body line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        {/* Materials Preview */}
                        <div className="flex items-center gap-2 mt-3 sm:mt-4">
                            <span className="text-[10px] sm:text-xs text-muted-foreground font-body uppercase tracking-wider">
                                Materials:
                            </span>
                            <div className="flex gap-1.5">
                                {item.materials.slice(0, 3).map((material, idx) => (
                                    <div
                                        key={idx}
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-border/50"
                                        style={{ backgroundColor: material.color }}
                                        title={material.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-4 flex items-center gap-3">
                            {/* View Details */}
                            <motion.div
                                className="flex items-center gap-2 text-xs sm:text-sm font-body text-muted-foreground group-hover:text-accent transition-colors cursor-none"
                                whileHover={{ x: 5 }}
                            >
                                <span>View Details</span>
                                <span>→</span>
                            </motion.div>

                            {/* Separator */}
                            <span className="text-border">|</span>

                            {/* View Images */}
                            <motion.button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onViewImages();
                                }}
                                className="flex items-center gap-1.5 text-xs sm:text-sm font-body text-muted-foreground hover:text-accent transition-colors cursor-none"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconPhoto size={14} />
                                <span>Images</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
        </motion.div>
    );
}

// Design Detail Sheet Component
interface DesignDetailSheetProps {
    item: DesignItem | null;
    onClose: () => void;
}

function DesignDetailSheet({ item, onClose }: DesignDetailSheetProps) {
    return (
        <Sheet open={!!item} onOpenChange={(open) => !open && onClose()}>
            <SheetContent
                side="right"
                className="w-full sm:w-[540px] lg:w-[600px] min-w-[40vw] overflow-y-auto p-0"
            >
                {item && (
                    <div className="flex flex-col h-full">
                        {/* Image Section */}
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

                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-8"
                                sizes="600px"
                            />

                            {/* Scale indicator */}
                            {item.scale && (
                                <div className="absolute bottom-4 right-4 z-20">
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