"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
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
import {
  DrawingsColor,
  drawingsColorProjects,
} from "@/lib/content/drawings-colors-projects";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function InteriorsPage() {
  const [selectedProject, setSelectedProject] = useState<DrawingsColor | null>(
    null,
  );
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
        item: "https://dsrenders.com/drawings-colors",
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
    url: "https://dsrenders.com/drawings-colors",
  };

  const openProject = useCallback((project: DrawingsColor, index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  }, []);

  const goToPrevProject = useCallback(() => {
    const newIndex =
      selectedIndex === 0
        ? drawingsColorProjects.length - 1
        : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedProject(drawingsColorProjects[newIndex]);
  }, [selectedIndex]);

  const goToNextProject = useCallback(() => {
    const newIndex =
      selectedIndex === drawingsColorProjects.length - 1
        ? 0
        : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedProject(drawingsColorProjects[newIndex]);
  }, [selectedIndex]);

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
        <section className="relative h-[100svh] min-h-[700px] z-10">
          <div className="absolute inset-0  bg-black/20">
            <Image
              src="https://images.dsrenders.com/background/ai-new.webp"
              alt="Luxurious interior space"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <FadeIn delay={0.3}>
                    <span className="text-[10px] sm:text-xs font-body tracking-[0.4em] uppercase text-white/60 mb-4 sm:mb-6 block">
                      2D Drafting & 3D Modeling Studio
                    </span>
                  </FadeIn>

                  <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                    <FadeIn delay={0.5}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                        Precision
                      </span>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                        Plans,
                      </span>
                    </FadeIn>
                    <FadeIn delay={0.9}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl italic text-[#eec49e]">
                        Powerful
                      </span>
                    </FadeIn>
                    <FadeIn delay={1.0}>
                      <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl italic text-[#eec49e]">
                        Designs
                      </span>
                    </FadeIn>
                  </h1>
                </div>

                {/* Right: Description */}
                <FadeIn delay={1.1}>
                  <div className="lg:pl-8">
                    <p className="text-base sm:text-lg lg:text-xl text-white font-body leading-relaxed max-w-lg">
                      We deliver accurate 2D drawings and high-quality 3D models that bring your visions to life with clarity, precision, and detail.
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center gap-3 text-white/50">
                      <span className="w-8 h-px bg-white" />
                      <span className="text-white font-body tracking-widest uppercase">
                        Scroll to explore
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="main bg-background relative z-30">
          <div className="container-custom">
            {/* Projects List */}
            <div className="space-y-0">
              {drawingsColorProjects.map(
                (project: DrawingsColor, index: number) => (
                  <div key={project.id}>
                    <ProjectRow
                      project={project}
                      index={index}
                      onClick={() => openProject(project, index)}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Fullscreen Project Sheet */}
      <ProjectDetailSheet
        project={selectedProject}
        projectIndex={selectedIndex}
        totalProjects={drawingsColorProjects.length}
        onClose={() => setSelectedProject(null)}
        onPrev={goToPrevProject}
        onNext={goToNextProject}
      />
    </>
  );
}

// Project Row Component - BIG Style with enhanced visuals
interface ProjectRowProps {
  project: DrawingsColor;
  index: number;
  onClick: () => void;
}

function ProjectRow({ project, index, onClick }: ProjectRowProps) {
  const projectHref = `/drawings-colors/${toSlug(project.title)}`;

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 lg:gap-16 py-10 sm:py-14 border-b border-border/20 cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 550px" }}
    >
      {/* Left: Project Info */}
      <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
        {/* Icon */}
        <span className="text-3xl sm:text-4xl mb-4 text-accent/40 group-hover:text-accent group-hover:rotate-90 transition-all duration-500">
          {project.icon}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground group-hover:text-[#eec49e] transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Location & Year */}
        <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm font-body text-muted-foreground">
          <p className="text-sm text-muted-foreground font-body leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* Category Tag */}
        <div className="mt-6">
          <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-body uppercase tracking-wider border border-border rounded-full text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors duration-300">
            {project.category}
          </span>
        </div>

        {/* View indicator - Desktop */}
        <div className="hidden lg:flex mt-8 items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-[#eec49e] group-hover:translate-x-1 transition-all duration-300">
          <Link
            href={projectHref}
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2"
          >
            <span>View Project</span>
          </Link>
          <span className="text-lg">→</span>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg sm:rounded-xl">
        <div className="absolute inset-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20">
          <div className="absolute top-0 right-0 w-full h-px bg-accent/0 group-hover:bg-accent transition-colors duration-500" />
          <div className="absolute top-0 right-0 h-full w-px bg-accent/0 group-hover:bg-accent transition-colors duration-500" />
        </div>

        {/* View indicator - Mobile */}
        <div className="lg:hidden absolute bottom-4 right-4 px-4 py-2 bg-background/95 rounded-full">
          <span className="text-xs sm:text-sm font-body text-foreground">
            View →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Fullscreen Project Detail Sheet
interface ProjectDetailSheetProps {
  project: DrawingsColor | null;
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
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation Arrows */}
                {images.length > 1 && (
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-10">
                    <button
                      onClick={goToPrevImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background hover:scale-110 active:scale-90 transition-all duration-200"
                    >
                      <IconChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goToNextImage}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background hover:scale-110 active:scale-90 transition-all duration-200"
                    >
                      <IconChevronRight size={20} />
                    </button>
                  </div>
                )}

                {/* Image Dots */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_i: string, idx: number) => (
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
                        {project.features.map((feature: string, idx: number) => (
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
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full font-body font-medium text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                  >
                    <span>Discuss This Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="shrink-0 border-t border-border bg-background px-4 sm:px-8 py-4 sm:py-5">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Prev Button */}
                <button
                  onClick={onPrev}
                  className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground hover:-translate-x-0.5 transition-all duration-200"
                >
                  <IconArrowLeft size={18} />
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">
                    Prev
                  </span>
                </button>

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
                <button
                  onClick={onNext}
                  className="flex items-center gap-2 sm:gap-3 text-sm font-body text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all duration-200"
                >
                  <span className="hidden sm:inline uppercase tracking-wider text-xs">
                    Next
                  </span>
                  <IconArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
