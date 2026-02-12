"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeIn, Counter } from "@/components/motion/motion-primitives";
import { WorldMapComponent } from "@/components/world-map";

const offices = [
    { city: "New York", country: "USA", projects: 120 },
    { city: "London", country: "UK", projects: 85 },
    { city: "Dubai", country: "UAE", projects: 95 },
    { city: "Singapore", country: "SG", projects: 70 },
    { city: "Tokyo", country: "Japan", projects: 55 },
    { city: "Sydney", country: "Australia", projects: 45 },
];

export function GlobalReachSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <FadeIn>
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase mb-2 sm:mb-3 block">
                                Global Presence
                            </span>
                            <h2 className="font-display font-bold mb-4 sm:mb-6">
                                Designing Across Continents
                            </h2>
                            <p className="text-base sm:text-lg font-body leading-relaxed mb-8 sm:mb-10">
                                With offices spanning six continents, we bring local insight and
                                global perspective to every project. Our network enables us to deliver
                                world-class design, wherever inspiration leads.
                            </p>
                        </FadeIn>

                        {/* Office List */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={office.city}
                                    className="p-3 sm:p-4 rounded-lg border"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <h4 className="text-sm sm:text-base font-display font-semibold">
                                        {office.city}
                                    </h4>
                                    <span className="text-xs font-body">
                                        {office.country}
                                    </span>
                                    <div className="mt-2 sm:mt-3">
                                        <span className="text-lg sm:text-xl font-display font-bold text-accent">
                                            <Counter to={office.projects} duration={2} />+
                                        </span>
                                        <span className="text-[10px] sm:text-xs font-body block">
                                            Projects
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <FadeIn delay={0.5}>
                            <div className="mt-8 sm:mt-10">
                                <motion.a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent rounded-full font-body font-medium text-sm sm:text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Find an office near you</span>
                                    <span>→</span>
                                </motion.a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: World Map */}
                    <FadeIn direction="left" delay={0.3}>
                        <div className="relative h-[400px] sm:h-[500px] lg:h-[650px]">
                            <WorldMapComponent />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
