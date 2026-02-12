"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring, useMotionValue, useAnimationFrame } from "motion/react";
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


  // Scroll scale effect for gallery similar to Interiors
  const scale = useScrollScale();

  return (
    <>
      <div ref={containerRef} className="relative">
        {/* Hero Section with Video Background - KEPT AS IS */}
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

        {/* Philosophy Section - Consistent with Interiors */}
        <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="container-custom relative">
            <FadeIn>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
                <div className="max-w-2xl">
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                    Our Approach
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                    Building the <br className="hidden sm:block" />
                    <span className="text-muted-foreground">Future</span>
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground font-body max-w-md lg:text-right">
                  Our practice connects communities through design, committed to the stewardship of people, place, and environment.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <StaggerItem key={index} className="h-full">
                  <motion.div
                    className="relative p-6 sm:p-8 lg:p-10 bg-secondary/20 border border-border/50 h-full group hover:bg-secondary/40 hover:border-accent/30 transition-all duration-500 rounded-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground group-hover:text-accent transition-colors duration-500 mb-4 block">
                        <Counter to={stat.value} suffix={stat.suffix} duration={2} />
                      </span>

                      <div>
                        <h4 className="text-sm font-body font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">
                          {stat.label}
                        </h4>
                        <div className="mt-4 h-0.5 w-12 bg-border group-hover:bg-accent transition-colors duration-500" />
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Selected Projects - Vertical Scroll Gallery style */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Section Header */}
            <FadeIn className="mb-16 sm:mb-20">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-border pb-8">
                <div>
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                    Design Excellence
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    Selected Works
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground font-body max-w-sm">
                  A curated selection of our architectural achievements, defining skylines globally.
                </p>
              </div>
            </FadeIn>

            {/* Projects List */}
            <div className="space-y-0">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  style={{ scale }}
                  className="origin-center will-change-transform"
                >
                  <ProjectRow
                    project={project}
                    index={index}
                    onClick={() => { }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Project Sheet would go here, needing similar implementation to interiors but adapted for these projects */}
      {/* For now we can assume we need to bring in the Sheet component or adapt the ProjectCard to open one */}
    </>
  );
}

// Helper hook for scroll scale (copied from interiors)
function useScrollScale() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  const scale = useMotionValue(1);

  useAnimationFrame(() => {
    const velocity = Math.abs(smoothVelocity.get());
    const targetScale = Math.max(0.94, 1 - velocity / 20000);
    const currentScale = scale.get();
    scale.set(currentScale + (targetScale - currentScale) * 0.08);
  });

  return useSpring(scale, { damping: 40, stiffness: 300 });
}

interface ProjectRowProps {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}

function ProjectRow({ project, index, onClick }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div
      ref={rowRef}
      className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-16 py-10 sm:py-14 border-b border-border/20 cursor-pointer group"
      onClick={onClick}
      style={{ opacity }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
        <span className="text-3xl sm:text-4xl mb-4 text-accent/40 group-hover:text-accent transition-colors duration-500">
          {/* Icon placeholder if needed, or just number */}
          0{index + 1}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm font-body text-muted-foreground">
          <span className="uppercase tracking-wider">{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{project.year}</span>
        </div>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
        </div>
        <motion.div
          className="hidden lg:flex mt-8 items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-accent transition-colors duration-300"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span>View Project</span>
          <span className="text-lg">→</span>
        </motion.div>
      </div>

      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
    </motion.div>
  );
}
