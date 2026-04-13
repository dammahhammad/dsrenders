"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { IconRuler, IconPencil, IconPalette, IconChevronLeft, IconChevronRight, IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

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

const toSlug = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

export default function FurniturePage() {
    const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://dsrenders.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Furniture",
                item: "https://dsrenders.com/furniture",
            },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Furniture Design",
        provider: {
            "@type": "Organization",
            name: "DS Renders",
            url: "https://dsrenders.com",
        },
        areaServed: "Worldwide",
        url: "https://dsrenders.com/furniture",
    };

    const openItem = (item: DesignItem, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
    };

    const goToPrevItem = () => {
        const newIndex = selectedIndex === 0 ? designItems.length - 1 : selectedIndex - 1;
        setSelectedIndex(newIndex);
        setSelectedItem(designItems[newIndex]);
    };

    const goToNextItem = () => {
        const newIndex = selectedIndex === designItems.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(newIndex);
        setSelectedItem(designItems[newIndex]);
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <main>
            {/* Fullscreen Hero Section - KEPT AS IS */}
            <section className="relative h-[100svh] min-h-[700px] z-10 top-0 sticky">
                <motion.div className="absolute inset-0">
                    <Image
                        src="/woods/hero-woods.png"
                        alt="Bespoke furniture craftsmanship"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
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

            {/* Philosophy Section - Consistent with Interiors/Architecture */}
            <section className="philosophy relative lg:sticky lg:top-0 z-20 bg-background">
                <div className="container-custom py-20 sm:py-32">
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
            <section className="py-16 sm:py-24 bg-background border-t border-border/40 relative z-30">
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
                                    onClick={() => openItem(item, index)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 sm:py-32 bg-background text-background relative z-40 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <FadeIn>
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-accent mb-4 block">
                                Commission
                            </span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-accent mb-6 leading-tight">
                                DS <br />
                                <span className="text-accent/80">Renders</span>
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

            {/* Design Detail Sheet */}
            <DesignDetailSheet
                item={selectedItem}
                itemIndex={selectedIndex}
                totalItems={designItems.length}
                onClose={() => setSelectedItem(null)}
                onPrev={goToPrevItem}
                onNext={goToNextItem}
            />
            </main>
        </>
    );
}

// Furniture Row Component (Vertical Scroll Style)
interface FurnitureRowProps {
    item: DesignItem;
    index: number;
    onClick: () => void;
}

function FurnitureRow({ item, index, onClick }: FurnitureRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ["start end", "end start"],
    });
    const productHref = `/furniture/${toSlug(item.name)}`;

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
                    <Link
                        href={productHref}
                        onClick={(event) => event.stopPropagation()}
                        className="hover:underline underline-offset-4"
                    >
                        {item.name}
                    </Link>
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
                        <Link href={productHref} onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2">
                            <span>View Details</span>
                        </Link>
                        <span>→</span>
                    </motion.div>
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
    itemIndex: number;
    totalItems: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

function DesignDetailSheet({ item, itemIndex, totalItems, onClose, onPrev, onNext }: DesignDetailSheetProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [item?.id]);

    const images = item?.images || [];

    const goToPrevImage = () => {
        setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const goToNextImage = () => {
        setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    };

    return (
        <Sheet open={!!item} onOpenChange={(open) => { if (!open) onClose(); }}>
            <SheetContent
                side="bottom"
                className="h-[100vh] w-full p-0 border-t border-border rounded-t-3xl"
            >
                {item && (
                    <div className="flex flex-col h-full">
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">
                            <div className="relative bg-secondary/20 h-[280px] sm:h-[350px] lg:h-full overflow-hidden">
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
                                            className="object-cover"
                                            sizes="50vw"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {images.length > 1 && (
                                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 z-10">
                                        <motion.button
                                            onClick={goToPrevImage}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IconChevronLeft size={20} />
                                        </motion.button>
                                        <motion.button
                                            onClick={goToNextImage}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <IconChevronRight size={20} />
                                        </motion.button>
                                    </div>
                                )}

                                {images.length > 1 && (
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === idx
                                                    ? "bg-white w-6"
                                                    : "bg-white/40 w-1.5 hover:bg-white/60"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}

                                {item.scale && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-3 py-1.5 text-xs font-mono bg-background/90 backdrop-blur-sm rounded text-foreground border border-border/50">
                                            Scale: {item.scale}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 sm:p-8 lg:p-10 flex-1 overflow-y-auto">
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

                                <div className="mb-6 sm:mb-8">
                                    <h4 className="text-sm font-display font-semibold text-foreground mb-3 uppercase tracking-wider">
                                        Dimensions
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-mono bg-secondary/30 px-4 py-3 rounded-lg border border-border/50">
                                        {item.dimensions}
                                    </p>
                                </div>

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

                                <motion.a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-body font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Request This Design</span>
                                    <span>→</span>
                                </motion.a>
                            </div>
                        </div>

                        <div className="shrink-0 border-t border-border bg-background px-4 sm:px-8 py-4 sm:py-5">
                            <div className="flex items-center justify-between max-w-7xl mx-auto">
                                <motion.button
                                    onClick={onPrev}
                                    className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                                    whileHover={{ x: -3 }}
                                >
                                    <IconArrowLeft size={18} />
                                    <span className="hidden sm:inline uppercase tracking-wider text-xs">Prev</span>
                                </motion.button>

                                <div className="text-center">
                                    <p className="text-xs sm:text-sm font-body text-foreground">
                                        <span className="hidden md:inline">{item.name}</span>
                                        <span className="hidden md:inline text-muted-foreground"> — </span>
                                        <span className="text-muted-foreground">{item.category}</span>
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-1 tracking-wider">
                                        {itemIndex + 1} / {totalItems}
                                    </p>
                                </div>

                                <motion.button
                                    onClick={onNext}
                                    className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                                    whileHover={{ x: 3 }}
                                >
                                    <span className="hidden sm:inline uppercase tracking-wider text-xs">Next</span>
                                    <IconArrowRight size={18} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
