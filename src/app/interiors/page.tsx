"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { Footer } from "@/components/footer";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { IconChevronLeft, IconChevronRight, IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

// Project Data
interface InteriorProject {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  longDescription?: string;
  images: string[];
  features?: string[];
  icon?: string;
}

const projects: InteriorProject[] = [
  {
    id: "1",
    title: "Serene Living Space",
    category: "Living Room",
    location: "Mumbai, India",
    year: "2024",
    description: "A contemporary living room that balances warmth with minimalist design principles.",
    longDescription: "This living space explores the dialogue between natural materials and contemporary form. The softly contoured furniture carries an organic presence, allowing light to move gently across surfaces and revealing the natural grain and tactile depth of the wood. Neither rigid nor overtly expressive, the form finds its strength in restraint – sculptural without becoming dominant.",
    images: [
      "/home_animation/building-2.png",
      "/home_animation/building-3.png",
      "/home_animation/building-4.png",
    ],
    features: ["Custom millwork", "Natural materials", "Ambient lighting"],
    icon: "◉",
  },
  {
    id: "2",
    title: "Modern Kitchen Studio",
    category: "Kitchen",
    location: "Delhi, India",
    year: "2024",
    description: "Functional culinary space designed for the modern lifestyle with clean lines.",
    longDescription: "Sharing the DNA of minimalist Scandinavian design, this kitchen explores balance through subtle variation. Angled surfaces are joined by a low apron that runs close to the floor, creating a composed yet dynamic foundation that anchors the piece in the space. The softly contoured countertops carry an organic presence, revealing the natural grain and tactile depth of the stone.",
    images: [
      "/home_animation/building-5.png",
      "/home_animation/building-6.png",
      "/home_animation/building-7.png",
    ],
    features: ["Integrated appliances", "Marble countertops", "Hidden storage"],
    icon: "◈",
  },
  {
    id: "3",
    title: "Tranquil Bedroom Retreat",
    category: "Bedroom",
    location: "Bangalore, India",
    year: "2023",
    description: "A serene retreat crafted for rest and rejuvenation with soft textures.",
    longDescription: "This bedroom embodies the principles of calm and restoration. Every element serves the purpose of creating an environment conducive to rest. The material palette focuses on natural textiles and muted tones, while carefully positioned lighting creates intimate pockets of warmth throughout the space.",
    images: [
      "/home_animation/building-8.png",
      "/home_animation/building-1.png",
      "/home_animation/building-2.png",
    ],
    features: ["Automated blinds", "Natural fabrics", "Mood lighting"],
    icon: "◇",
  },
  {
    id: "4",
    title: "Urban Loft Design",
    category: "Living Room",
    location: "Pune, India",
    year: "2023",
    description: "Industrial meets contemporary in this open-concept urban dwelling.",
    longDescription: "An exploration of contrasts – raw industrial elements meet refined contemporary design. Exposed brick and steel are softened by warm wood tones and plush textiles. The open floor plan encourages fluid movement while designated zones provide intimate spaces for work and relaxation.",
    images: [
      "/home_animation/building-3.png",
      "/home_animation/building-4.png",
      "/home_animation/building-5.png",
    ],
    features: ["Open floor plan", "Industrial accents", "Smart home integration"],
    icon: "⬡",
  },
  {
    id: "5",
    title: "Coastal Dining Room",
    category: "Dining",
    location: "Goa, India",
    year: "2024",
    description: "Elegant dining space inspired by coastal serenity and natural light.",
    longDescription: "Drawing inspiration from the nearby coastline, this dining space captures the essence of seaside living. Light floods through expansive windows, playing across textured surfaces that evoke sand and sea. The dining table becomes a gathering point where memories are made and stories are shared.",
    images: [
      "/home_animation/building-6.png",
      "/home_animation/building-7.png",
      "/home_animation/building-8.png",
    ],
    features: ["Bay windows", "Custom dining table", "Coastal palette"],
    icon: "◎",
  },
];

const philosophy = [
  {
    title: "Form Follows Function",
    description: "Every element serves a purpose while contributing to aesthetic harmony.",
  },
  {
    title: "Material Authenticity",
    description: "We celebrate natural materials, allowing their inherent beauty to shine.",
  },
  {
    title: "Light as Design Element",
    description: "Natural and artificial lighting work together to create atmosphere.",
  },
  {
    title: "Timeless Over Trendy",
    description: "Designs that transcend fleeting trends for enduring elegance.",
  },
];

// Custom hook for detecting scroll velocity and applying scale
function useScrollScale() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  const scale = useMotionValue(1);

  useAnimationFrame(() => {
    const velocity = Math.abs(smoothVelocity.get());
    // Map velocity to scale: faster scroll = smaller scale
    // Velocity range: 0-2000, Scale range: 1-0.94
    const targetScale = Math.max(0.94, 1 - velocity / 20000);
    const currentScale = scale.get();
    // Smooth interpolation
    scale.set(currentScale + (targetScale - currentScale) * 0.08);
  });

  return useSpring(scale, { damping: 40, stiffness: 300 });
}

export default function InteriorsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<InteriorProject | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const scale = useScrollScale();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const openProject = (project: InteriorProject, index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  const goToPrevProject = () => {
    const newIndex = selectedIndex === 0 ? projects.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const goToNextProject = () => {
    const newIndex = selectedIndex === projects.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[700px] overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <Image
            src="/home_animation/interior.jpg"
            alt="Luxurious interior space"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay for editorial feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        </motion.div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10" />
          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/10" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28 px-4 sm:px-8 lg:px-16"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              {/* Left: Title */}
              <div>
                <FadeIn delay={0.3}>
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.4em] uppercase text-white/60 mb-4 sm:mb-6 block">
                    Interior Design Studio
                  </span>
                </FadeIn>

                <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                  <FadeIn delay={0.5}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">Spaces</span>
                  </FadeIn>
                  <FadeIn delay={0.7}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/60">That Tell</span>
                  </FadeIn>
                  <FadeIn delay={0.9}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl italic font-light text-accent">Stories</span>
                  </FadeIn>
                </h1>
              </div>

              {/* Right: Description */}
              <FadeIn delay={1.1}>
                <div className="lg:pl-8 lg:border-l lg:border-white/20">
                  <p className="text-base sm:text-lg lg:text-xl text-white/70 font-body leading-relaxed max-w-lg">
                    We craft interiors that reflect individuality and comfort,
                    blending aesthetics, material, and light into environments
                    that feel both elegant and livable.
                  </p>
                  <motion.div
                    className="mt-6 sm:mt-8 flex items-center gap-3 text-white/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <span className="w-8 h-px bg-white/30" />
                    <span className="text-xs font-body tracking-widest uppercase">Scroll to explore</span>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section - Refined Grid */}
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
                  Our Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                  Design Principles <br className="hidden sm:block" />
                  <span className="text-muted-foreground">That Guide Us</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-body max-w-md lg:text-right">
                Every space we create is rooted in these fundamental beliefs about what makes design truly resonate.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {philosophy.map((item, index) => (
              <StaggerItem key={index} className="h-full">
                <motion.div
                  className="relative p-6 sm:p-8 lg:p-10 bg-secondary/20 border border-border/50 h-full group hover:bg-secondary/40 hover:border-accent/30 transition-all duration-500 rounded-xl overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <span className="text-4xl sm:text-5xl font-display font-bold text-accent/80 group-hover:text-accent transition-colors duration-500 mb-6 block">
                        0{index + 1}
                      </span>
                      <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground group-hover:text-foreground/90 transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Vertical Scroll Gallery - BIG Architects Style */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-border pb-8">
              <div>
                <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                  Selected Work
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Interior Projects
                </h2>
              </div>
              <p className="text-sm text-muted-foreground font-body max-w-sm">
                A curated selection of our interior design projects, each crafted with intention and care.
              </p>
            </div>
          </FadeIn>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{ scale }}
                className="origin-center will-change-transform"
              >
                <ProjectRow
                  project={project}
                  index={index}
                  onClick={() => openProject(project, index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dramatic */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-background" />

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[20%] top-0 bottom-0 w-px bg-background/5" />
          <div className="absolute right-[20%] top-0 bottom-0 w-px bg-background/5" />
          <div className="absolute top-[50%] left-0 right-0 h-px bg-background/5" />
        </div>

        <div className="container-custom relative text-center">
          <FadeIn>
            <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent/60 mb-6 block">
              Start Your Project
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-accent mb-6 sm:mb-8 leading-tight">
              Transform <br className="sm:hidden" />
              Your Space
            </h2>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-accent/60 font-body mb-10 sm:mb-12">
              Ready to create an interior that reflects your vision?
              Let&apos;s start the conversation.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-accent text-foreground rounded-full font-body font-medium text-sm sm:text-base group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book a Consultation</span>
              <motion.span
                className="text-lg"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
          </FadeIn>
        </div>
      </section>

      <Footer />

      {/* Fullscreen Project Sheet */}
      <ProjectDetailSheet
        project={selectedProject}
        projectIndex={selectedIndex}
        totalProjects={projects.length}
        onClose={() => setSelectedProject(null)}
        onPrev={goToPrevProject}
        onNext={goToNextProject}
      />
    </>
  );
}

// Project Row Component - BIG Style with enhanced visuals
interface ProjectRowProps {
  project: InteriorProject;
  index: number;
  onClick: () => void;
}

function ProjectRow({ project, onClick }: ProjectRowProps) {
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
      {/* Left: Project Info */}
      <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
        {/* Icon */}
        <motion.span
          className="text-3xl sm:text-4xl mb-4 text-accent/40 group-hover:text-accent transition-colors duration-500"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.5 }}
        >
          {project.icon}
        </motion.span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Location & Year */}
        <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm font-body text-muted-foreground">
          <span className="uppercase tracking-wider">{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{project.year}</span>
        </div>

        {/* Category Tag */}
        <div className="mt-6">
          <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-body uppercase tracking-wider border border-border rounded-full text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors duration-300">
            {project.category}
          </span>
        </div>

        {/* View indicator - Desktop */}
        <motion.div
          className="hidden lg:flex mt-8 items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-accent transition-colors duration-300"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span>View Project</span>
          <span className="text-lg">→</span>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </motion.div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20">
          <div className="absolute top-0 right-0 w-full h-px bg-accent/0 group-hover:bg-accent transition-colors duration-500" />
          <div className="absolute top-0 right-0 h-full w-px bg-accent/0 group-hover:bg-accent transition-colors duration-500" />
        </div>

        {/* View indicator - Mobile */}
        <motion.div
          className="lg:hidden absolute bottom-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full"
        >
          <span className="text-xs sm:text-sm font-body text-foreground">
            View →
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Fullscreen Project Detail Sheet
interface ProjectDetailSheetProps {
  project: InteriorProject | null;
  projectIndex: number;
  totalProjects: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function ProjectDetailSheet({ project, projectIndex, totalProjects, onClose, onPrev, onNext }: ProjectDetailSheetProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  const images = project?.images || [];

  const goToPrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <Sheet open={!!project} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="h-[95vh] sm:h-[92vh] w-full p-0 border-t border-border rounded-t-3xl"
      >
        {project && (
          <div className="flex flex-col h-full">
            {/* Main Content - 50/50 Split */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">
              {/* Left Side - Image Carousel */}
              <div className="relative bg-secondary/20 h-[280px] sm:h-[350px] lg:h-full overflow-hidden">
                {/* Images with AnimatePresence for smooth transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation Arrows */}
                {images.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10">
                    <motion.button
                      onClick={goToPrevImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconChevronLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={goToNextImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconChevronRight size={20} />
                    </motion.button>
                  </div>
                )}

                {/* Image Dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx
                          ? "bg-white w-8"
                          : "bg-white/40 w-2 hover:bg-white/60"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side - Project Details */}
              <div className="flex flex-col p-6 sm:p-10 lg:p-14 overflow-y-auto">
                {/* Category & Title */}
                <div className="mb-6 sm:mb-8">
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="px-3 sm:px-4 py-1.5 text-xs font-body bg-secondary rounded-full text-foreground">
                    {project.location}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 text-xs font-body bg-secondary rounded-full text-foreground">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-base sm:text-lg lg:text-xl text-foreground font-body leading-relaxed mb-6">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                      {project.longDescription}
                    </p>
                  )}

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mt-8 sm:mt-10">
                      <h4 className="text-xs font-display font-semibold text-muted-foreground mb-4 uppercase tracking-[0.2em]">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 sm:px-4 py-1.5 text-xs font-body border border-border rounded-full text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-10">
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full font-body font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Discuss This Project</span>
                    <span>→</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="shrink-0 border-t border-border bg-background px-4 sm:px-8 py-4 sm:py-5">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Prev Button */}
                <motion.button
                  onClick={onPrev}
                  className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: -3 }}
                >
                  <IconArrowLeft size={18} />
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">Prev</span>
                </motion.button>

                {/* Center Info */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-body text-foreground">
                    <span className="hidden md:inline">{project.title}</span>
                    <span className="hidden md:inline text-muted-foreground"> — </span>
                    <span className="text-muted-foreground">{project.location}</span>
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-1 tracking-wider">
                    {projectIndex + 1} / {totalProjects}
                  </p>
                </div>

                {/* Next Button */}
                <motion.button
                  onClick={onNext}
                  className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">Next</span>
                  <IconArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}