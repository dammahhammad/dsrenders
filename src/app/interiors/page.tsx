"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { Footer } from "@/components/footer";

const galleries = [
  {
    id: "living",
    title: "Living Spaces",
    description: "Contemporary living rooms that balance comfort with sophistication.",
    images: [
      "/home_animation/building-2.png",
      "/home_animation/building-3.png",
      "/home_animation/building-4.png",
    ],
  },
  {
    id: "kitchen",
    title: "Kitchens",
    description: "Functional culinary spaces designed for modern lifestyles.",
    images: [
      "/home_animation/building-5.png",
      "/home_animation/building-6.png",
      "/home_animation/building-7.png",
    ],
  },
  {
    id: "bedroom",
    title: "Bedrooms",
    description: "Serene retreats crafted for rest and rejuvenation.",
    images: [
      "/home_animation/building-8.png",
      "/home_animation/building-1.png",
      "/home_animation/building-2.png",
    ],
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

export default function InteriorsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[600px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <Image
            src="/home_animation/interior.jpg"
            alt="Luxurious interior space"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <FadeIn delay={0.3}>
            <span className="text-xs sm:text-sm font-body tracking-[0.3em] uppercase text-white/70 mb-4">
              Interior Design
            </span>
          </FadeIn>

          <h1 className="font-display font-bold text-white leading-tight max-w-4xl">
            <FadeIn delay={0.5}>
              <span className="block">Spaces That</span>
            </FadeIn>
            <FadeIn delay={0.7}>
              <span className="block text-gradient">Tell Stories</span>
            </FadeIn>
          </h1>

          <FadeIn delay={0.9}>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-white/80 font-body">
              We craft interiors that reflect individuality and comfort,
              blending aesthetics, material, and light into environments
              that feel both elegant and livable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Our Philosophy
              </span>
              <h2 className="font-display font-bold text-foreground">
                Design Principles
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {philosophy.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 h-full"
                  whileHover={{ y: -5, borderColor: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl sm:text-5xl font-display font-bold text-accent/30">
                    0{index + 1}
                  </span>
                  <h4 className="mt-4 text-lg sm:text-xl font-display font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground font-body">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleries.map((gallery, index) => (
        <GallerySection key={gallery.id} gallery={gallery} index={index} />
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-background mb-4 sm:mb-6">
              Transform Your Space
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-background/70 font-body mb-8 sm:mb-10">
              Ready to create an interior that reflects your vision?
              Let&apos;s start the conversation.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-background text-foreground rounded-full font-body font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Book a Consultation</span>
              <span>→</span>
            </motion.a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

interface GallerySectionProps {
  gallery: typeof galleries[0];
  index: number;
}

function GallerySection({ gallery, index }: GallerySectionProps) {
  const [activeImage, setActiveImage] = useState(0);
  const isEven = index % 2 === 0;

  return (
    <section className={`section-padding ${isEven ? "bg-secondary/30" : "bg-background"}`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* Images */}
          <div className={`relative ${isEven ? "" : "lg:order-2"}`}>
            <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
              {gallery.images.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: activeImage === imgIndex ? 1 : 0,
                    scale: activeImage === imgIndex ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={img}
                    alt={`${gallery.title} ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>

            {/* Image Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {gallery.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setActiveImage(imgIndex)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${activeImage === imgIndex
                    ? "bg-accent w-6 sm:w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`View image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <FadeIn direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:order-1"}>
            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              0{index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
              {gallery.title}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed mb-6 sm:mb-8">
              {gallery.description}
            </p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-foreground"
              whileHover={{ x: 5 }}
            >
              <span className="link-underline">Explore gallery</span>
              <span>→</span>
            </motion.a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}