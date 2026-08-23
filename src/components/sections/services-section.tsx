"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeIn } from "@/components/motion/motion-primitives";
import {
    IconBuildingSkyscraper,
    IconSofa,
    Icon3dCubeSphere,
    IconPalette,
    IconArrowRight,
} from "@tabler/icons-react";

interface Service {
    name: string;
    icon: React.ReactNode;
    description: string;
    deliverables: string[];
    href: string;
}

const services: Service[] = [
    {
        name: "2D Architecture Drafting",
        icon: <IconBuildingSkyscraper size={28} />,
        description:
            "Construction-ready CAD plans, elevations, and sections drawn to your standards and ready for the site.",
        deliverables: ["Floor plans", "Elevations & sections", "Construction documentation"],
        href: "/drawings-bw",
    },
    {
        name: "2D Interior Drafting",
        icon: <IconSofa size={28} />,
        description:
            "Detailed, coloured interior layouts and drawings that give build teams and clients total clarity.",
        deliverables: ["Interior layouts", "Detailing & finishes", "Presentation drawings"],
        href: "/drawings-colors",
    },
    {
        name: "3D Modeling",
        icon: <Icon3dCubeSphere size={28} />,
        description:
            "Accurate, render-ready 3D models built from your drawings — a clean base for visualization and review.",
        deliverables: ["Architectural models", "Interior models", "Render-ready geometry"],
        href: "/ai-renders",
    },
    {
        name: "AI Renders",
        icon: <IconPalette size={28} />,
        description:
            "Photoreal AI-assisted renders that bring a design to life and help you win the client's approval.",
        deliverables: ["Photoreal visuals", "Concept exploration", "Fast turnaround"],
        href: "/ai-renders",
    },
];

export function ServicesSection() {
    return (
        <section
            id="services"
            className="section-padding bg-background relative overflow-hidden z-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent/3 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="max-w-3xl mb-12 sm:mb-16">
                        <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                            What I Do
                        </span>
                        <h2 className="font-display font-bold text-foreground">
                            Services Built for Interior Designers
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground font-body leading-relaxed">
                            From construction-ready drawings to photoreal renders, I help
                            interior designers move projects from concept
                            to reality — accurate, on time, and ready to build.
                        </p>
                    </div>
                </FadeIn>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <FadeIn key={service.name} delay={index * 0.08}>
                            <ServiceCard service={service} />
                        </FadeIn>
                    ))}
                </div>

                {/* CTA */}
                <FadeIn delay={0.3}>
                    <div className="mt-10 sm:mt-14 text-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm sm:text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            <span>Discuss Your Project</span>
                            <span>→</span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

interface ServiceCardProps {
    service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link
            href={service.href}
            className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">
                {service.name}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-4">
                {service.description}
            </p>

            {/* Deliverables */}
            <ul className="flex flex-wrap gap-2 mb-6">
                {service.deliverables.map((item) => (
                    <li
                        key={item}
                        className="text-[11px] sm:text-xs font-body text-muted-foreground rounded-full border border-border/50 bg-background/50 px-2.5 py-1"
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {/* Link affordance */}
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-body font-medium text-accent">
                View work
                <motion.span
                    className="inline-flex"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                >
                    <IconArrowRight size={16} />
                </motion.span>
            </span>
        </Link>
    );
}
