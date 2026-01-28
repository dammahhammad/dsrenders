"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Urban Sanctuary",
        category: "Architecture",
        image: "/home_animation/building-1.png",
        description: "Modern residential complex with sustainable design",
    },
    {
        id: 2,
        title: "Glass Haven",
        category: "Architecture",
        image: "/home_animation/building-2.png",
        description: "Contemporary office tower with panoramic views",
    },
    {
        id: 3,
        title: "Minimalist Living",
        category: "Interiors",
        image: "/home_animation/building-3.png",
        description: "Elegant interior spaces with clean lines",
    },
    {
        id: 4,
        title: "Timber Craft",
        category: "Furniture",
        image: "/home_animation/building-4.png",
        description: "Bespoke wooden furniture collection",
    },
    {
        id: 5,
        title: "Zen Garden",
        category: "Landscape",
        image: "/home_animation/building-5.png",
        description: "Tranquil garden design with water features",
    },
    {
        id: 6,
        title: "Skyline Tower",
        category: "Architecture",
        image: "/home_animation/building-6.png",
        description: "Iconic skyscraper redefining city skylines",
    },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className={`group relative overflow-hidden cursor-pointer ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
        >
            <div className="relative h-64 sm:h-80 md:h-full min-h-[280px] md:min-h-[320px] lg:min-h-[380px] w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full">
                        {project.category}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.description}
                    </p>

                    {/* View Button */}
                    <motion.div
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                        <span className="inline-flex items-center text-white text-sm font-medium group/btn">
                            View Project
                            <svg
                                className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export const PortfolioGrid = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="portfolio"
            className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 bg-[#F7F8FA] dark:bg-black"
            ref={sectionRef}
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto mb-12 sm:mb-16"
            >
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
                    <div className="lg:w-2/3">
                        <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-4 block">
                            Selected Works
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                            Our Portfolio of<br className="hidden sm:block" /> Exceptional Design
                        </h2>
                    </div>
                    <div className="lg:w-1/3">
                        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Explore our curated collection of architectural masterpieces, interior transformations, and landscape innovations.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Portfolio Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="max-w-7xl mx-auto mt-12 sm:mt-16 text-center"
            >
                <a
                    href="/architecture"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-medium border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-300"
                >
                    View All Projects
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
};
