"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ArchitecturePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Hero image parallax and fade
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  // Content slide up animation - starts immediately with scroll
  const contentY = useTransform(scrollYProgress, [0, 0.3, 1], ["100vh", "0vh", "0vh"]);
  
  // Content width animation - starts at 80% and expands to full width by 50% scroll
  const contentWidth = useTransform(scrollYProgress, [0, 0.15], ["80%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Full Screen Hero Image */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="fixed inset-0 z-10 h-screen w-full"
      >
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(/home_animation/building-1.png)` 
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          
          {/* Hero Content */}
          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <h1 className="text-6xl font-bold text-white lg:text-8xl tracking-tight leading-tight">
                  70 years of designing for people and
                </h1>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-8"
                >
                  <span className="text-6xl font-bold text-white lg:text-8xl tracking-tight">
                    communities
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sliding Content Section */}
      <motion.div
        style={{ y: contentY, width: contentWidth }}
        className="relative z-20 min-h-screen bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-16">
          {/* Mission Statement */}
          <div className="max-w-4xl">
            <p className="text-2xl leading-relaxed text-gray-700 lg:text-3xl">
              Our practice connects communities and is committed to the stewardship of people, place, and the environment.
            </p>
            
            <div className="mt-12">
              <a 
                href="#" 
                className="group inline-flex items-center text-xl font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                Learn about us
                <div className="ml-2 h-0.5 w-16 bg-red-600 group-hover:w-20 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="mt-32">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Project 1 */}
              <div className="group">
                <div 
                  className="h-96 w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                  style={{ backgroundImage: `url(/home_animation/building-2.png)` }}
                >
                  <div className="flex h-full items-end">
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white lg:text-4xl">
                        Train Like a Raven
                      </h3>
                      <p className="mt-2 text-lg text-white/90 lg:text-xl">
                        Baltimore Ravens, Under Armour Performance Center Renovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div 
                  className="h-96 w-full overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                  style={{ backgroundImage: `url(/home_animation/building-3.png)` }}
                >
                  <div className="flex h-full items-end">
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white lg:text-4xl">
                        Sustainable Innovation
                      </h3>
                      <p className="mt-2 text-lg text-white/90 lg:text-xl">
                        Green Building Technologies and Environmental Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-32">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-900">70+</h4>
                <p className="mt-2 text-lg text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-900">500+</h4>
                <p className="mt-2 text-lg text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-gray-900">50+</h4>
                <p className="mt-2 text-lg text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer to ensure proper scroll behavior */}
      <div className="h-screen" />
    </div>
  );
};

export default ArchitecturePage;