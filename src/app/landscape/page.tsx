"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import Image from "next/image";
import Footer from "@/components/footer";

const projects = [
    {
        title: "Zen Garden Retreat",
        description: "Japanese-inspired garden with water features and stone pathways",
        image: "/home_animation/building-1.png",
    },
    {
        title: "Urban Rooftop Oasis",
        description: "Modern rooftop garden design for city living",
        image: "/home_animation/building-2.png",
    },
    {
        title: "Coastal Landscape",
        description: "Native planting design for beachfront properties",
        image: "/home_animation/building-3.png",
    },
    {
        title: "Mediterranean Courtyard",
        description: "Warm climate garden with olive trees and terracotta",
        image: "/home_animation/building-4.png",
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            className="group"
        >
            <div
                className="h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                <div className="flex h-full items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                            {project.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function LandscapePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Hero image parallax and fade
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    // Content slide up animation - starts immediately with scroll
    const contentY = useTransform(scrollYProgress, [0, 0.3, 1], ["100vh", "0vh", "0vh"]);

    // Content width animation - starts at 80% and expands to full width
    const contentWidth = useTransform(scrollYProgress, [0, 0.15], ["80%", "100%"]);

    return (
        <div ref={containerRef} className="relative">
            {/* Full Screen Hero Image */}
            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="fixed inset-0 z-10 h-screen w-full"
            >
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(/home_animation/landscape.jpg)`
                    }}
                >
                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

                    {/* Hero Content */}
                    <div className="relative z-10 flex h-full items-end">
                        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-16 pb-16 sm:pb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="max-w-4xl"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                                    Landscapes that
                                </h1>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="mt-4 sm:mt-6 lg:mt-8"
                                >
                                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight">
                                        inspire wonder
                                    </span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Sliding Content Section */}
            <motion.div
                style={{ y: contentY, width: contentWidth }}
                className="relative z-20 min-h-screen bg-[#F7F8FA] dark:bg-black mx-auto"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-16 sm:py-24 lg:py-32">
                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700 dark:text-white">
                            We design landscapes that connect people with nature — integrating greenery, water,
                            and space to create harmony between built form and environment.
                        </p>

                        <div className="mt-8 sm:mt-12">
                            <a
                                href="#projects"
                                className="group inline-flex items-center text-base sm:text-lg md:text-xl font-semibold text-black dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                            >
                                Explore our gardens
                                <div className="ml-2 h-0.5 w-12 sm:w-16 bg-black dark:bg-white group-hover:w-16 sm:group-hover:w-20 transition-all duration-300" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Project Showcase */}
                    <div id="projects" className="mt-20 sm:mt-28 lg:mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 sm:mb-16"
                        >
                            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-4 block">
                                Featured Projects
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                Our Landscape Work
                            </h2>
                        </motion.div>

                        <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-20 sm:mt-28 lg:mt-32"
                    >
                        <div className="grid gap-8 sm:gap-12 grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">200+</h4>
                                <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-zinc-400">Gardens Designed</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">15</h4>
                                <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-zinc-400">Countries</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">50+</h4>
                                <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-zinc-400">Awards Won</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">100%</h4>
                                <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-zinc-400">Sustainable</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Footer />
            </motion.div>

            {/* Spacer to ensure proper scroll behavior */}
            <div className="h-screen" />
        </div>
    );
}
