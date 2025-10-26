"use client";
import React, {  useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Footer from "@/components/footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Carousel from "@/components/ui/carousel";

interface FurnitureItem {
    id: number;
    category: 'sofa' | 'lamp' | 'chair';
    title: string;
    price: string;
    image: string;
    isNew?: boolean;
}

export default function FurniturePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const [galleryOpen, setGalleryOpen] = useState(false);

    // Hero image parallax and fade
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    // Content slide up animation - starts immediately with scroll
    const contentY = useTransform(scrollYProgress, [0, 0.3, 1], ["100vh", "0vh", "0vh"]);

    // Content width animation - starts at 80% and expands to full width by 50% scroll
    const contentWidth = useTransform(scrollYProgress, [0, 0.15], ["80%", "100%"]);

    const furnitureItems: FurnitureItem[] = [
        { id: 1, category: 'chair', title: 'BLACK CHAIR', price: '$199.00 USD', image: '/woods/black-chair.png' },
        { id: 2, category: 'chair', title: 'VELVET CHAIR', price: '$349.00 USD', image: '/woods/chair.png' },
        { id: 3, category: 'lamp', title: 'ELEGANT LAMP', price: '$129.00 USD', image: '/woods/lamps.png' },
        { id: 4, category: 'chair', title: 'MODERN CHAIR', price: '$249.00 USD', image: '/woods/modern-chair.png', isNew: true },
        { id: 5, category: 'sofa', title: 'COMFORT SOFA', price: '$799.00 USD', image: '/woods/modern-sofa.png' },
        { id: 6, category: 'sofa', title: 'COMFORT SOFA', price: '$799.00 USD', image: '/woods/sofa.png' },
        { id: 7, category: 'chair', title: 'QUILTED CHAIR', price: '$399.00 USD', image: '/woods/studio-chair.png' },
        { id: 8, category: 'sofa', title: 'QUILTED CHAIR', price: '$399.00 USD', image: '/woods/table.png' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredItems = selectedCategory === 'all'
        ? furnitureItems
        : furnitureItems.filter(item => item.category === selectedCategory);

    const openGallery = () => {
        setGalleryOpen(true);
    };

    return (
        <div ref={containerRef} className="relative">
            {/* Full Screen Hero Image */}
            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="fixed inset-0 z-10 w-full"
            >
                <div
                    className="h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(/woods/hero-woods.png)`
                    }}
                >
                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

                    {/* Hero Content */}
                    <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-16">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <h1 className="text-5xl text-white lg:text-8xl font-cinzel font-semibold tracking-tight">
                                    DESIGNING FURNITURE
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Sliding Content Section */}
            <motion.div
                style={{ y: contentY, width: contentWidth }}
                className="relative z-20 min-h-screen bg-[#F7F8FA] dark:bg-black"
            >
                <section className="bg-white dark:bg-gray-900 py-20">
                    <div className="mx-auto max-w-6xl px-6 lg:px-16">
                        {/* Tabs */}
                        <div className="mb-12 flex justify-center">
                            <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v)}>
                                <TabsList className="bg-transparent gap-4">
                                    <TabsTrigger
                                        value="all"
                                        className="font-cinzel data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white"
                                    >
                                        ALL
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="sofa"
                                        className="font-cinzel data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white"
                                    >
                                        SOFA
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="lamp"
                                        className="font-cinzel data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white"
                                    >
                                        LAMP
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="chair"
                                        className="font-cinzel data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white"
                                    >
                                        CHAIR
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                    onClick={openGallery}
                                >
                                    <div className="relative overflow-hidden rounded-full">
                                        <div className="aspect-[3/5] relative max-w-xl">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110 max-w-xl"
                                                loading="lazy"
                                            />
                                        </div>
                                        {item.isNew && (
                                            <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                NEW
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="font-cinzel text-lg font-semibold text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="font-cinzel text-sm text-gray-600 dark:text-gray-400">
                                            {item.price}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Modal */}
                    <AnimatePresence>
                        {galleryOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                                onClick={() => setGalleryOpen(false)}
                            >
                                <div onClick={(e) => e.stopPropagation()} className="w-full max-w-6xl">
                                    <Carousel
                                        slides={filteredItems.map(item => ({
                                            title: item.title,
                                            src: item.image
                                        }))}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
                <Footer />
            </motion.div>


        </div>
    );
}