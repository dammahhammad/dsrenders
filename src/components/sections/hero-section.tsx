"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, TextReveal, ScrollIndicator } from "@/components/motion/motion-primitives";
import Link from "next/link";

const categories = [
    { name: "Architecture", href: "/architecture" },
    { name: "Interiors", href: "/interiors" },
    { name: "Furniture", href: "/furniture" },
];

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section
            ref={containerRef}
            className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale, opacity }}
            >
                <Image
                    src="/home_animation/building-1.png"
                    alt="Modern architecture"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Noise Texture */}
            <div className="absolute inset-0 z-[1] opacity-30 mix-blend-overlay pointer-events-none noise" />

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 lg:pb-28"
                style={{ y }}
            >
                <div className="container-custom">
                    {/* Main Headline */}
                    <div className="max-w-4xl lg:max-w-5xl">
                        <FadeIn delay={0.2} duration={1}>
                            <span className="inline-block text-xs sm:text-sm font-body tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6">
                                Architecture • Interiors • Design
                            </span>
                        </FadeIn>

                        <h1 className="font-display font-bold text-white leading-[0.95] tracking-tight">
                            <FadeIn delay={0.4} duration={0.8}>
                                <span className="block">Crafting Spaces</span>
                            </FadeIn>
                            <FadeIn delay={0.6} duration={0.8}>
                                <span className="block">That Inspire</span>
                            </FadeIn>
                            <FadeIn delay={0.8} duration={0.8}>
                                <span className="block text-gradient">Generations</span>
                            </FadeIn>
                        </h1>

                        <FadeIn delay={1} duration={0.8}>
                            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg lg:text-xl text-white/80 font-body leading-relaxed">
                                Award-winning architecture studio blending innovation with timeless design.
                                From concept to creation, we shape environments that define the future.
                            </p>
                        </FadeIn>

                        {/* Category Links */}
                        <FadeIn delay={1.2} duration={0.8}>
                            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                                {categories.map((category, index) => (
                                    <Link
                                        key={category.name}
                                        href={category.href}
                                        className="group relative"
                                    >
                                        <motion.div
                                            className="px-4 sm:px-6 py-2 sm:py-3 border border-white/30 rounded-full backdrop-blur-sm bg-white/5 text-white text-sm sm:text-base font-body transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.3 + index * 0.1 }}
                                        >
                                            {category.name}
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Stats Bar - Mobile Hidden, Desktop Shown */}
                    <FadeIn delay={1.5} duration={0.8}>
                        <div className="hidden lg:flex mt-16 gap-12 border-t border-white/20 pt-8">
                            <div>
                                <span className="block text-4xl font-display font-bold text-white">70+</span>
                                <span className="text-sm text-white/60 font-body">Years of Excellence</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-display font-bold text-white">500+</span>
                                <span className="text-sm text-white/60 font-body">Projects Completed</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-display font-bold text-white">12</span>
                                <span className="text-sm text-white/60 font-body">Global Offices</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-display font-bold text-white">50+</span>
                                <span className="text-sm text-white/60 font-body">Awards Won</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
                    <ScrollIndicator />
                </div>
            </motion.div>

            {/* Side Accent Line */}
            <motion.div
                className="absolute top-0 left-4 sm:left-8 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent z-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </section>
    );
}
