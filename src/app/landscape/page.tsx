"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion/motion-primitives";
import { Footer } from "@/components/footer";

const projects = [
    {
        title: "Serenity Gardens",
        location: "Malibu, California",
        type: "Residential Estate",
        description: "A 5-acre coastal retreat integrating native California flora with sustainable water features.",
        image: "/home_animation/building-5.png",
        stats: [
            { value: 5, label: "Acres" },
            { value: 2000, suffix: "+", label: "Plants" },
        ],
    },
    {
        title: "Urban Oasis Park",
        location: "Singapore",
        type: "Public Space",
        description: "Transforming a concrete jungle into a biodiverse sanctuary in the heart of the city.",
        image: "/home_animation/building-6.png",
        stats: [
            { value: 12, label: "Hectares" },
            { value: 50, suffix: "+", label: "Species" },
        ],
    },
    {
        title: "Zen Corporate Campus",
        location: "Tokyo, Japan",
        type: "Commercial",
        description: "Mindfulness-inspired outdoor spaces fostering creativity and well-being for 5,000 employees.",
        image: "/home_animation/building-7.png",
        stats: [
            { value: 8, label: "Gardens" },
            { value: 100, suffix: "%", label: "Renewable" },
        ],
    },
];

const services = [
    {
        title: "Garden Design",
        description: "From intimate courtyard gardens to expansive estate landscapes.",
        icon: "🌿",
    },
    {
        title: "Sustainable Landscapes",
        description: "Native plantings and water-wise designs that thrive naturally.",
        icon: "♻️",
    },
    {
        title: "Water Features",
        description: "Ponds, streams, and fountains that create tranquil atmospheres.",
        icon: "💧",
    },
    {
        title: "Hardscape Integration",
        description: "Patios, pathways, and structures that complement the natural environment.",
        icon: "🪨",
    },
];

const philosophy = [
    "Design in harmony with nature",
    "Create habitats for biodiversity",
    "Minimize environmental footprint",
    "Build for climate resilience",
];

export default function LandscapePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <>
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[100svh] min-h-[600px] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Image
                        src="/home_animation/landscape.jpg"
                        alt="Beautiful landscape design"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                </motion.div>

                <motion.div
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
                    style={{ y: textY }}
                >
                    <FadeIn delay={0.3}>
                        <span className="text-xs sm:text-sm font-body tracking-[0.3em] uppercase text-white/70 mb-4">
                            Landscape Architecture
                        </span>
                    </FadeIn>

                    <h1 className="font-display font-bold text-white leading-tight max-w-4xl">
                        <FadeIn delay={0.5}>
                            <span className="block">Where Nature</span>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                            <span className="block">Meets <span className="text-gradient">Design</span></span>
                        </FadeIn>
                    </h1>

                    <FadeIn delay={0.9}>
                        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-white/80 font-body">
                            We design landscapes that connect people with nature,
                            creating harmony between built form and environment.
                        </p>
                    </FadeIn>

                    <FadeIn delay={1.1}>
                        <motion.a
                            href="/contact"
                            className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-body"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Start a Project</span>
                            <span>→</span>
                        </motion.a>
                    </FadeIn>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-xs font-body tracking-widest uppercase">Explore</span>
                    <motion.div
                        className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
                        animate={{ scaleY: [1, 0.6, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                                What We Do
                            </span>
                            <h2 className="font-display font-bold text-foreground mb-4">
                                Our Services
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground font-body">
                                Comprehensive landscape design services from concept to completion.
                            </p>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 h-full text-center"
                                    whileHover={{ y: -5, borderColor: "var(--accent)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-3xl sm:text-4xl mb-4 block">{service.icon}</span>
                                    <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-body">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <FadeIn>
                        <div className="mb-12 sm:mb-16">
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                                Portfolio
                            </span>
                            <h2 className="font-display font-bold text-foreground">
                                Featured Landscapes
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-16 sm:space-y-24">
                        {projects.map((project, index) => (
                            <ProjectShowcase key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding bg-foreground overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <FadeIn>
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-background/60 mb-2 block">
                                Our Approach
                            </span>
                            <h2 className="font-display font-bold text-background mb-6">
                                Sustainable by Design
                            </h2>
                            <p className="text-base sm:text-lg text-background/70 font-body leading-relaxed mb-8">
                                Every landscape we create is a commitment to environmental stewardship.
                                We believe the most beautiful gardens are those that work with nature,
                                not against it.
                            </p>

                            <ul className="space-y-4">
                                {philosophy.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center gap-4 text-background/80 font-body"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">
                                            ✓
                                        </span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
                                <Image
                                    src="/home_animation/building-3.png"
                                    alt="Sustainable landscape"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

interface ProjectShowcaseProps {
    project: typeof projects[0];
    index: number;
}

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Image */}
            <div className={`relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex gap-6 sm:gap-8">
                    {project.stats.map((stat, i) => (
                        <div key={i} className="text-white">
                            <span className="block text-2xl sm:text-3xl font-display font-bold">
                                <Counter to={stat.value} suffix={stat.suffix || ""} duration={2} />
                            </span>
                            <span className="text-xs sm:text-sm text-white/70 font-body">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className={isEven ? "" : "lg:order-1"}>
                <span className="text-xs sm:text-sm font-body tracking-wider text-accent uppercase mb-2 block">
                    {project.type}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                    {project.title}
                </h3>
                <span className="text-sm text-muted-foreground font-body mb-4 block">
                    {project.location}
                </span>
                <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed mb-6">
                    {project.description}
                </p>
                <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-foreground"
                    whileHover={{ x: 5 }}
                >
                    <span className="link-underline">View case study</span>
                    <span>→</span>
                </motion.a>
            </div>
        </motion.div>
    );
}
