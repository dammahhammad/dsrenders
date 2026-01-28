"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export const WhyUsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform for text block movement on scroll
    const textBlockY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="relative px-4 sm:px-8 lg:px-16 xl:px-32 min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen bg-[#F7F8FA] dark:bg-black py-12 lg:py-0 flex items-center justify-center">
            <div ref={containerRef} className="relative overflow-visible h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full lg:w-[70%] mx-auto">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/home_animation/landscape.jpg"
                        alt="Landscape"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Text Block - Responsive positioning */}
                <motion.div
                    style={{ y: textBlockY }}
                    className="absolute bottom-4 left-4 right-4 sm:bottom-auto sm:left-auto sm:top-8 sm:right-[-10%] lg:top-12 lg:right-[-25%] w-auto sm:w-[60%] lg:w-[50%] z-20"
                >
                    <div className="bg-black p-4 sm:p-6 lg:p-8">
                        {/* Title */}
                        <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-4 leading-tight uppercase">
                            BUILT TO EVOLVE: HOW WE ARE ARCHITECTING THE FUTURE
                        </h2>

                        {/* Description */}
                        <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-6">
                            We are using the latest technologies and techniques to create spaces that are not only functional but also sustainable and efficient.
                        </p>

                        {/* Call to Action */}
                        <div className="flex flex-col">
                            <a
                                href="#team"
                                className="text-white hover:text-white/80 transition-colors duration-300 text-sm font-normal underline"
                            >
                                Read story
                            </a>
                            <div className="w-8 h-px bg-white mt-1"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};
