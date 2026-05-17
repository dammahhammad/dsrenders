"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Counter,
} from "@/components/motion/motion-primitives";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface ArchitectureProject {
  title: string;
  location: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
}

const projects: ArchitectureProject[] = [
  {
    title: "Urban Sanctuary Tower",
    location: "Dubai, UAE",
    year: "2024",
    description:
      "A 52-story mixed-use development redefining luxury living in the heart of Dubai.",
    longDescription:
      "An exploration of vertical urbanism where residential, retail, and hospitality programs stack seamlessly into one continuous ecosystem. The tower is shaped to optimize daylight and views while reducing solar gain through calibrated façade articulation.",
    image: "/home_animation/building-1.png",
    images: [
      "/home_animation/building-1.png",
      "/home_animation/building-2.png",
      "/home_animation/building-4.png",
    ],
  },
  {
    title: "Eco Residence Complex",
    location: "Copenhagen, Denmark",
    year: "2023",
    description:
      "Net-zero residential community setting new standards for sustainable urban living.",
    longDescription:
      "Designed as a climate-positive neighborhood, the complex combines passive design strategies, recycled materials, and renewable systems to achieve near self-sufficiency. Shared green courts and walkable circulation reinforce a socially connected living environment.",
    image: "/home_animation/building-2.png",
    images: [
      "/home_animation/building-2.png",
      "/home_animation/building-3.png",
      "/home_animation/building-6.png",
    ],
  },
  {
    title: "Glass Pavilion",
    location: "California, USA",
    year: "2024",
    description:
      "Minimalist retreat blending seamlessly with its natural surroundings.",
    longDescription:
      "A restrained architectural language allows landscape to become the primary visual event. Carefully framed vistas, recessed structural details, and seamless thresholds blur the boundaries between interior and exterior experience.",
    image: "/home_animation/building-3.png",
    images: [
      "/home_animation/building-3.png",
      "/home_animation/building-5.png",
      "/home_animation/building-8.png",
    ],
  },
  {
    title: "Cultural Arts Center",
    location: "Singapore",
    year: "2023",
    description:
      "Dynamic performing arts venue celebrating Asian heritage through modern design.",
    longDescription:
      "The center is organized as a sequence of civic rooms that host performance, exhibition, and public gathering. The tectonic expression merges contemporary geometry with local material references, creating a culturally rooted yet forward-looking landmark.",
    image: "/home_animation/building-4.png",
    images: [
      "/home_animation/building-4.png",
      "/home_animation/building-7.png",
      "/home_animation/building-1.png",
    ],
  },
];

const stats = [
  { value: 70, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Design Awards" },
  { value: 12, suffix: "", label: "Global Offices" },
];

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ArchitecturePage() {
  const [selectedProject, setSelectedProject] =
    useState<ArchitectureProject | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        name: "Architecture",
        item: "https://dsrenders.com/drawings-bw",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architecture Design",
    provider: {
      "@type": "Organization",
      name: "DS Renders",
      url: "https://dsrenders.com",
    },
    areaServed: "Worldwide",
    url: "https://dsrenders.com/drawings-bw",
  };

  const openProject = (project: ArchitectureProject, index: number) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  };

  const goToPrevProject = () => {
    const newIndex =
      selectedIndex === 0 ? projects.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const goToNextProject = () => {
    const newIndex =
      selectedIndex === projects.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section with Video Background - KEPT AS IS */}
      <section className="relative h-[100svh] min-h-[700px] z-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.dsrenders.com/background/b%26w%20background.png"
            alt="Luxurious interior space"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              <div>
                <FadeIn delay={0.3}>
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.4em] uppercase text-white/60 mb-4 sm:mb-6 block">
                    Architectural Excellence
                  </span>
                </FadeIn>

                <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                  <FadeIn delay={0.5}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                      Designing for
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.7}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/60">
                      People &
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.9}>
                    <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl italic font-light text-accent">
                      Communities
                    </span>
                  </FadeIn>
                </h1>
              </div>

              <FadeIn delay={1.1}>
                <div className="lg:pl-8 lg:border-l lg:border-white/20">
                  <p className="text-base sm:text-lg lg:text-xl text-white/70 font-body leading-relaxed max-w-lg">
                    70 years of transforming visions into landmark structures
                    that define skylines and enrich lives across continents.
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
      <section className="philosophy relative lg:sticky lg:top-0 z-20 bg-background">
        <div className="container-custom py-20 sm:py-32">
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
                Our practice connects communities through design, committed to
                the stewardship of people, place, and environment.
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
                      <Counter
                        to={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
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
      <section className="py-16 sm:py-24 bg-background z-20 relative">
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
                A curated selection of our architectural achievements, defining
                skylines globally.
              </p>
            </div>
          </FadeIn>

          {/* Projects List */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={index}
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

      <ArchitectureDetailSheet
        project={selectedProject}
        projectIndex={selectedIndex}
        totalProjects={projects.length}
        onClose={() => setSelectedProject(null)}
        onPrev={goToPrevProject}
        onNext={goToNextProject}
      />
    </div>
  );
}

interface ProjectRowProps {
  project: ArchitectureProject;
  index: number;
  onClick: () => void;
}

function ProjectRow({ project, index, onClick }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const projectHref = `/drawings-bw/${toSlug(project.title)}`;

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
      <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
        <span className="text-3xl sm:text-4xl mb-4 text-accent/40 group-hover:text-accent transition-colors duration-500">
          {/* Icon placeholder if needed, or just number */}0{index + 1}
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
          <Link
            href={projectHref}
            onClick={(event) => event.stopPropagation()}
            className="hover:underline underline-offset-4"
          >
            {project.title}
          </Link>
        </h3>
        <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm font-body text-muted-foreground">
          <span className="uppercase tracking-wider">{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{project.year}</span>
        </div>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>
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

interface ArchitectureDetailSheetProps {
  project: ArchitectureProject | null;
  projectIndex: number;
  totalProjects: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function ArchitectureDetailSheet({
  project,
  projectIndex,
  totalProjects,
  onClose,
  onPrev,
  onNext,
}: ArchitectureDetailSheetProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.title]);

  const images = project?.images ?? [];

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
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-0">
              <div className="relative bg-secondary/20 h-[280px] sm:h-[350px] lg:h-full overflow-hidden">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />

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
              </div>

              <div className="flex flex-col p-6 sm:p-10 lg:p-14 overflow-y-auto">
                <div className="mb-6 sm:mb-8">
                  <span className="text-[10px] sm:text-xs font-body tracking-[0.3em] uppercase text-accent mb-3 block">
                    Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground leading-tight">
                    {project.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="px-3 sm:px-4 py-1.5 text-xs font-body bg-secondary rounded-full text-foreground">
                    {project.location}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 text-xs font-body bg-secondary rounded-full text-foreground">
                    {project.year}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-base sm:text-lg lg:text-xl text-foreground font-body leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

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

            <div className="shrink-0 border-t border-border bg-background px-4 sm:px-8 py-4 sm:py-5">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
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
