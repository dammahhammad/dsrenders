"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

interface StickyScrollContent {
  title: string;
  description: string;
  content?: React.ReactNode;
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
    "/home_animation/building-1.png",
    "/home_animation/building-2.png",
    "/home_animation/building-3.png",
    "/home_animation/building-4.png",
    "/home_animation/building-5.png",
    "/home_animation/building-6.png",
    "/home_animation/building-7.png",
    "/home_animation/building-8.png",
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-24 px-6 py-20 lg:px-16">
          {/* Sticky Image - Left Side */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-24">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className={cn(
                  "h-[75vh] w-full overflow-hidden rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat relative",
                  contentClassName
                )}
                style={{ backgroundImage: `url(${buildingImages[activeCard % buildingImages.length]})`}}
              >
                {/* Subtle overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Scrolling Content - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-56">
              {content.map((item, index) => (
                <div 
                  key={item.title + index} 
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="min-h-[70vh] flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    <motion.h2
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                        scale: activeCard === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 1 }}
                      className="text-3xl font-bold lg:text-4xl tracking-tight leading-tight"
                    >
                      {item.title}
                    </motion.h2>
                    
                    <motion.p
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.4 }}
                      className="mt-8 text-xl leading-relaxed lg:text-xl text-gray-600 max-w-2xl"
                    >
                      {item.description}
                    </motion.p>

                    {/* Mobile Image */}
                    <div className="mt-12 lg:hidden">
                      <div 
                        className="h-80 w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl"
                        style={{ backgroundImage: `url(${buildingImages[index % buildingImages.length]})` }}
                      >
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* Extra spacing at the end */}
              <div className="h-[20vh]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};