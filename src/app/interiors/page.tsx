"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/motion-primitives";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";
import { InteriorProject, interiorProjects } from "@/lib/content/interior-projects";

const philosophy = [
  {
    title: "Form Follows Function",
    description:
      "Every element serves a purpose while contributing to aesthetic harmony.",
  },
  {
    title: "Material Authenticity",
    description:
      "We celebrate natural materials, allowing their inherent beauty to shine.",
  },
  {
    title: "Light as Design Element",
    description:
      "Natural and artificial lighting work together to create atmosphere.",
  },
  {
    title: "Timeless Over Trendy",
    description:
      "Designs that transcend fleeting trends for enduring elegance.",
  },
];

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function InteriorsPage() {
  const [selectedProject, setSelectedProject] = useState<InteriorProject | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dsrenders.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Interiors",
        item: "https://dsrenders.com/interiors",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Design",
    provider: {
      "@type": "Organization",
      name: "DS Renders",
      url: "https://dsrenders.com",
    },
    areaServed: "Worldwide",
    url: "https://dsrenders.com/interiors",
  };

  const openProject = (project: InteriorProject, index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  const goToPrevProject = () => {
    const newIndex =
      selectedIndex === 0 ? interiorProjects.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedProject(interiorProjects[newIndex]);
  };

  const goToNextProject = () => {
    const newIndex =
      selectedIndex === interiorProjects.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedProject(interiorProjects[newIndex]);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        <section className="relative h-[100svh] min-h-[700px] z-10 top-0 sticky">
          <motion.div className="absolute inset-0">
            <Image
              src="/home_animation/interior.jpg"
              alt="Luxurious interior space"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>

          <motion.div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                <div>
                  <FadeIn delay={0.3}>
                    <span className="text-[10px] sm:text-xs font-body tracking-[0.4em] uppercase text-white/60 mb-4 sm:mb-6 block">
                      Interior Design Studio
                    </span>
                  </FadeIn>

                  <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                    <FadeIn delay={0.5}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                        Spaces
                      </span>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/60">
                        That Tell
                      </span>
                    </FadeIn>
                    <FadeIn delay={0.9}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl italic font-light text-accent">
                        Stories
                      </span>
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
                      <span className="text-xs font-body tracking-widest uppercase">
                        Scroll to explore
                      </span>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="philosophy relative lg:sticky lg:top-0 z-20 bg-background">
          <div className="container-custom py-20 sm:py-32">
            <FadeIn>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 sm:mb-20">
                <div className="max-w-2xl">
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                    Our Philosophy
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                    Design Principles <br className="hidden sm:block" />
                    <span className="text-accent">That Guide Us</span>
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground font-body max-w-md lg:text-right">
                  Every space we create is rooted in these fundamental beliefs
                  about what makes design truly resonate.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophy.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 sm:p-8 lg:p-10 bg-secondary/20 border border-border/50 h-full group hover:bg-secondary/40 hover:border-accent/30 transition-all duration-500 rounded-xl"
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
              ))}
            </div>
          </div>
        </section>

        <section className="main bg-background relative z-30">
          <div className="container-custom">
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
                  A curated selection of our interior design projects, each
                  crafted with intention and care.
                </p>
              </div>
            </FadeIn>

            {/* Projects List */}
            <div className="space-y-0">
              {interiorProjects.map((project, index) => (
                <motion.div key={project.id} className="origin-center">
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
      </main>

      {/* Fullscreen Project Sheet */}
      <ProjectDetailSheet
        project={selectedProject}
        projectIndex={selectedIndex}
        totalProjects={interiorProjects.length}
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
  const projectHref = `/interiors/${toSlug(project.title)}`;

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4],
  );

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
          <Link
            href={projectHref}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2"
          >
            <span>View Project</span>
          </Link>
          <span className="text-lg">→</span>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
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
        <motion.div className="lg:hidden absolute bottom-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full">
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

function ProjectDetailSheet({
  project,
  projectIndex,
  totalProjects,
  onClose,
  onPrev,
  onNext,
}: ProjectDetailSheetProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  const images = project?.images || [];

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Sheet open={!!project} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        className="h-[100vh] w-full p-0 border-t border-border rounded-t-3xl"
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
                      className="object-contain"
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
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === idx
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
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">
                    Prev
                  </span>
                </motion.button>

                {/* Center Info */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-body text-foreground">
                    <span className="hidden md:inline">{project.title}</span>
                    <span className="hidden md:inline text-muted-foreground">
                      {" "}
                      —{" "}
                    </span>
                    <span className="text-muted-foreground">
                      {project.location}
                    </span>
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
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">
                    Next
                  </span>
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
