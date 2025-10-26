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
        <div className="relative p-32 h-screen bg-[#F7F8FA] dark:bg-black py-12 flex items-center justify-center">
             <div ref={containerRef} className="relative overflow-visible h-[70vh] w-[70%] mx-auto">
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

                 {/* Text Block - Top Right Corner - 30% on image, 70% outside */}
                 <motion.div
                     style={{ y: textBlockY }}
                     className="absolute top-12 right-[-80%] lg:top-16 lg:right-[-25%] w-[50%] z-20"
                 >
                    <div className="bg-black p-6 lg:p-8">
                        {/* Title */}
                        <h2 className="text-lg lg:text-xl font-bold text-white mb-4 leading-tight uppercase">
                            BUILT TO EVOLVE: HOW WE ARE ARCHITECTING THE FUTURE
                        </h2>

                        {/* Description */}
                        <p className="text-white text-sm lg:text-base leading-relaxed mb-6">
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
