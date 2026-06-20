"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, Counter } from "@/components/motion/motion-primitives";

const milestones = [
    { year: "1954", title: "Foundation", description: "Established as a small architectural practice" },
    { year: "1970", title: "Expansion", description: "Opened our first international office" },
    { year: "1995", title: "Innovation", description: "Pioneered sustainable design practices" },
    { year: "2010", title: "Recognition", description: "Won our 25th design excellence award" },
    { year: "2024", title: "Today", description: "Global leaders in architectural innovation" },
];

const stats = [
    { value: 70, suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 12, suffix: "", label: "Global Offices" },
    { value: 150, suffix: "+", label: "Team Members" },
];

export function CompanyStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="section-padding bg-secondary/30 relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <FadeIn>
                    <div className="max-w-3xl mb-12 sm:mb-20">
                        <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                            Our Story
                        </span>
                        <h2 className="font-display font-bold text-foreground mb-4 sm:mb-6">
                            Seven Decades of Shaping Skylines
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
                            From a modest studio to a global design powerhouse, our journey has been defined
                            by an unwavering commitment to crafting spaces that honor both human experience
                            and environmental stewardship.
                        </p>
                    </div>
                </FadeIn>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left: Image with Parallax */}
                    <FadeIn direction="right">
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                            <motion.div className="absolute inset-0" style={{ y: imageY }}>
                                <Image
                                    src="https://images.dsrenders.com/logo.svg"
                                    alt="Our architectural legacy"
                                    fill
                                    className="object-cover scale-110"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </motion.div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                            {/* Quote Badge */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 glass rounded-xl">
                                <blockquote className="text-sm sm:text-base lg:text-lg font-display italic text-white leading-relaxed">
                                    &ldquo;Architecture is not just about building structures; it&apos;s about
                                    creating spaces where life unfolds beautifully.&rdquo;
                                </blockquote>
                                <cite className="mt-3 sm:mt-4 block text-xs sm:text-sm text-white/70 font-body not-italic">
                                    — Daniel Smithson, Founder
                                </cite>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Timeline */}
                    <div className="space-y-0">
                        {milestones.map((milestone, index) => (
                            <FadeIn key={milestone.year} delay={index * 0.1}>
                                <TimelineItem
                                    year={milestone.year}
                                    title={milestone.title}
                                    description={milestone.description}
                                    isLast={index === milestones.length - 1}
                                />
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Stats Grid */}
                <FadeIn delay={0.3}>
                    <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border/50"
                            >
                                <span className="block text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                                    <Counter to={stat.value} suffix={stat.suffix} duration={2 + index * 0.2} />
                                </span>
                                <span className="mt-1 sm:mt-2 block text-xs sm:text-sm text-muted-foreground font-body">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    isLast?: boolean;
}

function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
    return (
        <div className="relative flex gap-4 sm:gap-6 pb-8 sm:pb-10">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-px bg-border" />
            )}

            {/* Year Circle */}
            <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground" />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-0.5 sm:pt-1">
                <span className="text-xs sm:text-sm font-body text-muted-foreground tracking-wider">
                    {year}
                </span>
                <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mt-0.5 sm:mt-1">
                    {title}
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground font-body mt-1 sm:mt-2 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
