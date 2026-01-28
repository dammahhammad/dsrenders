"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

interface StickyScrollContent {
  title: string;
  description: string;
  content?: React.ReactNode;
  link?: string;
}

interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;

      contentRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const elementTop = ref.offsetTop + containerTop;
        const elementMiddle = elementTop + ref.offsetHeight / 3;

        if (scrollTop >= elementMiddle - window.innerHeight / 2) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  const buildingImages = [
    "/home_animation/architecture.jpg",
    "/home_animation/interior.jpg",
    "/home_animation/furniture.jpg",
    "/home_animation/landscape.jpg",
  ];

  const serviceLinks = ["/architecture", "/interiors", "/furniture", "/landscape"];

  return (
    <div
      ref={containerRef}
      className="relative w-full dark:bg-black bg-[#F7F8FA] px-4 sm:px-8 lg:px-12"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight max-w-4xl">
            Our Services
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 px-2 sm:px-6 py-12 lg:py-20 lg:px-16">
        {/* Sticky Image - Left Side */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="sticky top-24">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "h-[70vh] xl:h-[80vh] w-full xl:w-[90%] overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat relative",
                contentClassName
              )}
              style={{ backgroundImage: `url(${buildingImages[activeCard % buildingImages.length]})` }}
            >
              {/* Subtle overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scrolling Content - Right Side */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-24 sm:space-y-32 lg:space-y-48 xl:space-y-56">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Service Number */}
                  <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500 mb-4 block">
                    0{index + 1}
                  </span>

                  <motion.h2
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                      scale: activeCard === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-white"
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-zinc-400 max-w-xl"
                  >
                    {item.description}
                  </motion.p>

                  {/* Learn More Link */}
                  <motion.div
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-6 sm:mt-8"
                  >
                    <Link
                      href={serviceLinks[index] || "#"}
                      className="group inline-flex items-center text-sm sm:text-base font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Mobile Image */}
                  <div className="mt-8 sm:mt-12 lg:hidden">
                    <div
                      className="h-56 sm:h-72 md:h-80 w-full overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat shadow-xl"
                      style={{ backgroundImage: `url(${buildingImages[index % buildingImages.length]})` }}
                    >
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            {/* Extra spacing at the end */}
            <div className="h-[10vh] lg:h-[20vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};