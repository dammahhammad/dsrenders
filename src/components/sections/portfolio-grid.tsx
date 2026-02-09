"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";

interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    href: string;
    size?: "large" | "medium" | "small";
}

const projects: Project[] = [
    {
        id: "1",
        title: "Urban Sanctuary",
        category: "Architecture",
        location: "Dubai, UAE",
        year: "2024",
        image: "/home_animation/building-1.png",
        href: "/architecture",
        size: "large",
    },
    {
        id: "2",
        title: "Minimalist Haven",
        category: "Interiors",
        location: "Singapore",
        year: "2024",
        image: "/home_animation/building-2.png",
        href: "/interiors",
        size: "medium",
    },
    {
        id: "3",
        title: "Eco Residence",
        category: "Architecture",
        location: "Copenhagen",
        year: "2023",
        image: "/home_animation/building-3.png",
        href: "/architecture",
        size: "medium",
    },
    {
        id: "4",
        title: "Nordic Comfort",
        category: "Furniture",
        location: "Stockholm",
        year: "2024",
        image: "/home_animation/building-4.png",
        href: "/furniture",
        size: "small",
    },
    {
        id: "5",
        title: "Zen Gardens",
        category: "Architecture",
        location: "Kyoto, Japan",
        year: "2023",
        image: "/home_animation/building-5.png",
        href: "/architecture",
        size: "small",
    },
    {
        id: "6",
        title: "Glass Pavilion",
        category: "Architecture",
        location: "California",
        year: "2024",
        image: "/home_animation/building-6.png",
        href: "/architecture",
        size: "medium",
    },
];

const categories = ["All", "Architecture", "Interiors", "Furniture"];

export function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
                        <div>
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                                Selected Works
                            </span>
                            <h2 className="font-display font-bold text-foreground">
                                Our Portfolio
                            </h2>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-body rounded-full transition-all duration-300 ${activeCategory === category
                                        ? "bg-foreground text-background"
                                        : "bg-secondary text-muted-foreground hover:bg-muted"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Projects Grid - Bento Layout */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProjects.map((project, index) => (
                        <StaggerItem
                            key={project.id}
                            className={`${project.size === "large"
                                ? "sm:col-span-2 sm:row-span-2"
                                : project.size === "medium"
                                    ? "sm:row-span-2"
                                    : ""
                                }`}
                        >
                            <ProjectCard project={project} index={index} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* View All Link */}
                <FadeIn delay={0.5}>
                    <div className="mt-12 sm:mt-16 text-center">
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 text-base sm:text-lg font-body font-medium text-foreground"
                        >
                            <span className="link-underline">View All Projects</span>
                            <motion.span
                                className="inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={project.href}
            className="group block relative overflow-hidden rounded-xl sm:rounded-2xl bg-card h-[280px] sm:h-[320px] lg:h-full lg:min-h-[320px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <motion.div
                className="absolute inset-0"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover Overlay */}
            <motion.div
                className="absolute inset-0 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                {/* Category Tag */}
                <motion.span
                    className="inline-block self-start px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-body tracking-wider uppercase bg-white/10 backdrop-blur-sm text-white rounded-full mb-2 sm:mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    {project.category}
                </motion.span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
                    {project.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-2 sm:gap-3 mt-2 text-xs sm:text-sm text-white/70 font-body">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span>{project.year}</span>
                </div>

                {/* Hover Arrow */}
                <motion.div
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-black text-lg sm:text-xl">→</span>
                </motion.div>
            </div>

            {/* Border Glow on Hover */}
            <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                style={{
                    boxShadow: "inset 0 0 0 1px rgba(201, 169, 97, 0.3)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </Link>
    );
}
