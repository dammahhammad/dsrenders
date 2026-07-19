"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 120, damping: 30 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 50]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="z-10 pb-20 sm:pb-40 overflow-hidden antialiased bg-background relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header products={products} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden sm:block"
      >
        {/* First Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-10 md:space-x-20 mb-10 md:mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              priority={index === 0}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse sm:space-x-10 md:space-x-20 mb-10 md:mb-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const navItems = [
  { name: "Architecture", href: "/drawings-bw" },
  { name: "Interiors", href: "/drawings-colors" },
  { name: "Furniture", href: "/ai-renders" },
];

export const Header = ({
  products,
}: {
  products?: { title: string; link: string; thumbnail: string }[];
}) => {
  return (
    <div className="max-w-7xl relative mx-auto min-h-[72svh] sm:min-h-[78svh] md:min-h-[82svh] flex flex-col justify-center pt-24 sm:pt-0 px-4 sm:px-6 w-full left-0 top-0">
      <motion.h1
        className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-foreground leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Crafting Spaces <br className="hidden sm:block" />
        That <span className="text-gradient">Inspire</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl text-base sm:text-lg md:text-xl mt-6 sm:mt-8 text-muted-foreground font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        I&apos;m Daniyal Siddiqui — an architect and 3D visualization artist. I
        turn concepts into construction-ready drawings, precise 3D models, and
        photoreal renders for architects, builders, and designers worldwide.
      </motion.p>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-4 py-2 rounded-full border border-border/50 text-sm font-body text-muted-foreground hover:bg-foreground hover:text-background hover:border-transparent transition-all duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Showcase — appears below hero text on small screens */}
      {products && products.length > 0 && (
        <div className="block sm:hidden mt-10">
          <MobileHeroShowcase products={products} />
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MOBILE HERO SHOWCASE
// A cinematic, auto-playing horizontal card carousel with snap-scroll,
// architectural index indicator, and smooth parallax-inspired animations.
// ═══════════════════════════════════════════════════════════════════════════

function MobileHeroShowcase({
  products,
}: {
  products: { title: string; link: string; thumbnail: string }[];
}) {
  const showcaseItems = products.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isUserScrolling = useRef(false);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const cardWidth = scrollRef.current.scrollWidth / showcaseItems.length;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    },
    [showcaseItems.length],
  );

  // Auto-play logic
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isUserScrolling.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % showcaseItems.length;
        scrollToIndex(next);
        return next;
      });
    }, 3500);
  }, [showcaseItems.length, scrollToIndex]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  // Handle manual scroll / snap detection
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.scrollWidth / showcaseItems.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const handleTouchStart = () => {
    isUserScrolling.current = true;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleTouchEnd = () => {
    isUserScrolling.current = false;
    // Restart autoplay after user stops interacting
    setTimeout(() => startAutoPlay(), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Architectural line accent */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground/60">
          Featured Projects
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-border/60 to-transparent" />
      </div>

      {/* Horizontal snap-scroll carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {showcaseItems.map((product, index) => (
          <MobileShowcaseCard
            key={product.title}
            product={product}
            index={index}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* Index indicator bar */}
      <div className="flex items-center gap-2 mt-4">
        {/* Progress dots */}
        <div className="flex gap-1.5 flex-1">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                scrollToIndex(index);
                isUserScrolling.current = true;
                if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                setTimeout(() => {
                  isUserScrolling.current = false;
                  startAutoPlay();
                }, 4000);
              }}
              className="relative h-[3px] flex-1 rounded-full overflow-hidden bg-border/30"
            >
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-foreground"
                initial={{ width: "0%" }}
                animate={{
                  width:
                    index === activeIndex
                      ? "100%"
                      : index < activeIndex
                        ? "100%"
                        : "0%",
                }}
                transition={{
                  duration: index === activeIndex ? 3.5 : 0.3,
                  ease: index === activeIndex ? "linear" : "easeOut",
                }}
              />
            </button>
          ))}
        </div>

        {/* Counter badge */}
        <div className="flex items-baseline gap-0.5 font-body tabular-nums">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              className="text-sm font-medium text-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] text-muted-foreground/50">/</span>
          <span className="text-[10px] text-muted-foreground/50">
            {String(showcaseItems.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MOBILE SHOWCASE CARD
// Individual card with parallax-inspired layered reveal and gradient overlay
// ═══════════════════════════════════════════════════════════════════════════

function MobileShowcaseCard({
  product,
  index,
  isActive,
}: {
  product: { title: string; link: string; thumbnail: string };
  index: number;
  isActive: boolean;
}) {
  return (
    <Link
      href={product.link}
      className="relative snap-center shrink-0 group"
      style={{ width: "78vw" }}
    >
      <motion.div
        className="relative h-[220px] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: 1,
          scale: isActive ? 1 : 0.95,
        }}
        transition={{
          delay: 0.1 * index,
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Image with subtle zoom on active */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isActive ? 1.05 : 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
            sizes="80vw"
            priority={index === 0}
          />
        </motion.div>

        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Top-left architectural accent lines */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <motion.div
            className="w-5 h-px bg-white/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="w-px h-5 bg-white/40 mt-0"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isActive ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <motion.h3
            className="text-lg font-display font-bold text-white leading-tight"
            animate={{ y: isActive ? 0 : 4, opacity: isActive ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {product.title}
          </motion.h3>

          {/* Animated underline accent */}
          <motion.div
            className="h-px bg-white/50 mt-2"
            initial={{ width: 0 }}
            animate={{ width: isActive ? 40 : 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Subtle border on active */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DESKTOP PRODUCT CARD (unchanged)
// ═══════════════════════════════════════════════════════════════════════════

export const ProductCard = ({
  product,
  translate,
  priority = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  priority?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-48 w-60 sm:h-64 sm:w-80 md:h-96 md:w-[30rem] relative shrink-0 rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <Link
        href={product.link}
        className="relative block group-hover/product:shadow-2xl h-full w-full"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 480px"
          className="object-center"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h2 className="text-white font-display font-semibold text-lg">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
