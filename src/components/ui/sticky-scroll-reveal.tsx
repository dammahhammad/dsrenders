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

  const linearGradients = [
    "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)", // cyan
    "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)", // pink to purple
    "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", // orange to red
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-16 px-6 py-20 lg:px-12">
          {/* Sticky Image - Left Side */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-24">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={cn(
                  "h-[70vh] w-full overflow-hidden rounded-3xl shadow-2xl",
                  contentClassName
                )}
                style={{ 
                  background: linearGradients[activeCard % linearGradients.length],
                }}
              >
                <div className="flex h-full w-full items-center justify-center p-8">
                  {content[activeCard].content ?? (
                    <div className="text-center">
                      <h3 className="text-3xl font-bold">{content[activeCard].title}</h3>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Content - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-48">
              {content.map((item, index) => (
                <div 
                  key={item.title + index} 
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="min-h-[60vh] flex flex-col justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.h2
                      animate={{
                        opacity: activeCard === index ? 1 : 0.4,
                        scale: activeCard === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-4xl font-bold lg:text-5xl"
                    >
                      {item.title}
                    </motion.h2>
                    
                    <motion.p
                      animate={{
                        opacity: activeCard === index ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 text-lg leading-relaxed lg:text-xl"
                    >
                      {item.description}
                    </motion.p>

                    {/* Mobile Image */}
                    <div className="mt-8 lg:hidden">
                      <div 
                        className="h-64 w-full overflow-hidden rounded-2xl"
                        style={{ background: linearGradients[index % linearGradients.length] }}
                      >
                        <div className="flex h-full items-center justify-center p-6">
                          {item.content ?? (
                            <div className="text-center">
                              <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* Extra spacing at the end */}
              <div className="h-[15vh]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};