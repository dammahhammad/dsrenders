"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion/motion-primitives";
import { Footer } from "@/components/footer";

const projects = [
  {
    title: "Urban Sanctuary Tower",
    location: "Dubai, UAE",
    year: "2024",
    description: "A 52-story mixed-use development redefining luxury living in the heart of Dubai.",
    image: "/home_animation/building-1.png",
  },
  {
    title: "Eco Residence Complex",
    location: "Copenhagen, Denmark",
    year: "2023",
    description: "Net-zero residential community setting new standards for sustainable urban living.",
    image: "/home_animation/building-2.png",
  },
  {
    title: "Glass Pavilion",
    location: "California, USA",
    year: "2024",
    description: "Minimalist retreat blending seamlessly with its natural surroundings.",
    image: "/home_animation/building-3.png",
  },
  {
    title: "Cultural Arts Center",
    location: "Singapore",
    year: "2023",
    description: "Dynamic performing arts venue celebrating Asian heritage through modern design.",
    image: "/home_animation/building-4.png",
  },
];

const stats = [
  { value: 70, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Design Awards" },
  { value: 12, suffix: "", label: "Global Offices" },
];

export default function ArchitecturePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <>
      <div ref={containerRef} className="relative">
        {/* Hero Section with Video Background */}
        <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/architecture-hero.mp4" type="video/mp4" />
              {/* Fallback image if video doesn't load */}
              <Image
                src="/home_animation/building-1.png"
                alt="Architectural masterpiece"
                fill
                className="object-cover"
                priority
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-24 lg:pb-32">
            <div className="container-custom">
              <FadeIn delay={0.3}>
                <span className="inline-block text-xs sm:text-sm font-body tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6">
                  Architectural Excellence
                </span>
              </FadeIn>

              <h1 className="font-display font-bold text-white leading-[0.95]">
                <FadeIn delay={0.4}>
                  <span className="block">Designing for</span>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <span className="block">People &</span>
                </FadeIn>
                <FadeIn delay={0.8}>
                  <span className="block text-gradient">Communities</span>
                </FadeIn>
              </h1>

              <FadeIn delay={1}>
                <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg lg:text-xl text-white/80 font-body leading-relaxed">
                  70 years of transforming visions into landmark structures that
                  define skylines and enrich lives across continents.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Scroll Line */}
          <motion.div
            className="absolute top-0 left-4 sm:left-8 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent z-20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-background border-b border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                      <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                    </span>
                    <span className="mt-1 sm:mt-2 block text-xs sm:text-sm text-muted-foreground font-body">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <FadeIn>
              <div className="max-w-4xl">
                <h2 className="font-display font-bold text-foreground mb-6 sm:mb-8">
                  Our Approach
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                  Our architectural practice connects communities through design,
                  committed to the stewardship of people, place, and environment.
                  We believe that exceptional architecture emerges from a deep
                  understanding of context, culture, and human experience.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-16">
                <div>
                  <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                    Featured Projects
                  </span>
                  <h2 className="font-display font-bold text-foreground">
                    Selected Works
                  </h2>
                </div>
                <motion.a
                  href="/projects"
                  className="self-start sm:self-end inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-foreground"
                  whileHover={{ x: 5 }}
                >
                  <span className="link-underline">View all projects</span>
                  <span>→</span>
                </motion.a>
              </div>
            </FadeIn>

            <StaggerContainer className="grid gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <ProjectCard project={project} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`group grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"
        }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-2xl h-[280px] sm:h-[400px] ${isEven ? "" : "lg:order-2"}`}>
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={`${isEven ? "" : "lg:order-1"}`}>
        <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground font-body mb-2 sm:mb-3">
          <span>{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>{project.year}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-foreground"
          whileHover={{ x: 5 }}
        >
          <span className="link-underline">View project</span>
          <span>→</span>
        </motion.a>
      </div>
    </motion.div>
  );
}