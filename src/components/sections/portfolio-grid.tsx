"use client";

import { motion } from "motion/react";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/motion-primitives";

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
    size?: "large" | "medium" | "small";
}


const projects: Project[] = [
    {
        id: "3",
        title: "The Hearthwood Lounge",
        category: "Drawings (Color)",
        image: "https://images.dsrenders.com/drawings_color/07_FIREPLACE_1_Page_1.webp",
        size: "large",
        link: "/drawings-bw/the-hearthwood-lounge",
    },
    {
        id: "4",
        title: "The Sagewood Kitchen",
        category: "Drawings (Color)",
        image: "https://images.dsrenders.com/drawings_color/01_kitchen_1_Page_1.webp",
        size: "medium",
        link: "/drawings-colors/the-sagewood-kitchen",
    },
    {
        id: "5",
        title: "Midnight Cove Mudroom",
        category: "Drawings (Color)",
        image: "https://images.dsrenders.com/drawings_color/02_MODERN%20MUDROOM_1_Page_1.webp",
        size: "small",
        link: "/drawings-colors/midnight-cove-mudroom",
    },
    {
        id: "6",
        title: "The Bordeaux Coffee Bar",
        category: "Drawings (Color)",
        image: "https://images.dsrenders.com/drawings_color/03_COFFEE%20BAR%20LAYOUT.webp",
        size: "large",
        link: "/drawings-colors/the-bordeaux-coffee-bar",
    },
    {
        id: "7",
        title: "The Olive Grove Bedroom",
        category: "AI Renders",
        image: "https://images.dsrenders.com/ai_renders/B1.webp",
        size: "medium",
        link: "/ai-renders/olive-grove-bedroom",
    },
    {
        id: "8",
        title: "Terracotta Breeze",
        category: "AI Renders",
        image: "https://images.dsrenders.com/ai_renders/BNB_1.webp",
        size: "small",
        link: "/ai-renders/terracotta-breeze",
    },
    {
        id: "9",
        title: "The Hearthwood Lounge",
        category: "AI Renders",
        image: "https://images.dsrenders.com/ai_renders/FIREPLACE.webp",
        size: "medium",
        link: "/ai-renders/hearthwood-lounge",
    },
    {
        id: "1",
        title: "The Butler's Pantry",
        category: "Drawings (B&W)",
        image: "https://images.dsrenders.com/drawings_bw/CAD_page-0001.webp",
        size: "large",
        link: "/drawings-bw/the-butlers-pantry",
    },
    {
        id: "2",
        title: "The Powder Sanctuary",
        category: "Drawings (B&W)",
        image: "https://images.dsrenders.com/drawings_bw/CAD_page-0002.webp",
        size: "small",
        link: "/drawings-bw/the-powder-sanctuary",
    },
];

const categories = ["All", "Drawings (Color)", "Drawings (B&W)", "AI Renders"];

export function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(
        () => activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory),
        [activeCategory]
    );

    return (
        <section className="bg-background relative overflow-hidden z-15">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`animate-fade-in-up ${project.size === "large"
                                ? "sm:col-span-2 sm:row-span-2"
                                : project.size === "medium"
                                    ? "sm:row-span-2"
                                    : ""
                                }`}
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

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
    return (
        <Link
            href={project.link}
            className="group block relative overflow-hidden rounded-xl sm:rounded-2xl bg-card h-[280px] sm:h-[320px] lg:h-full lg:min-h-[320px]"
        >
            {/* Image */}
            <div className="absolute inset-0 transition-transform duration-600 ease-out group-hover:scale-105">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                {/* Category Tag */}
                <span className="inline-block self-start px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-body tracking-wider uppercase bg-white/10 backdrop-blur-sm text-white rounded-full mb-2 sm:mb-3">
                    {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
                    {project.title}
                </h3>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <span className="text-black text-lg sm:text-xl">→</span>
                </div>
            </div>

            {/* Border Glow on Hover */}
            <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "inset 0 0 0 1px rgba(201, 169, 97, 0.3)" }}
            />
        </Link>
    );
}
