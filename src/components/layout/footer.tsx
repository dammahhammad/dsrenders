"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { IconArrowUp } from "@tabler/icons-react";
import { useState } from "react";

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setShowScrollTop(latest > 400);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const mainNav = [
        { name: "Architecture", href: "/architecture" },
        { name: "Interiors", href: "/interiors" },
        { name: "Furniture", href: "/furniture" }
    ];

    return (
        <footer className="bg-card border-t border-border relative z-5 sticky bottom-0">
            <div className="container-custom py-10">
                <div className="flex flex-col gap-8">

                    {/* Top Section: Brand & Massive CTA */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <Link href="/" className="inline-block">
                                <span className="text-2xl font-display font-bold text-foreground">
                                    Ds<span className="text-accent">Renders</span>
                                </span>
                            </Link>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[0.9] tracking-tight">
                                Ready to build <br />
                                <span className="text-accent">extraordinary?</span>
                            </h2>
                        </div>

                        <motion.a
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-body font-medium text-lg hover:bg-accent hover:text-foreground transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Start a Project</span>
                            <motion.span
                                className="ml-2"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </div>

                    {/* Middle Section: Navigation */}
                    <nav className="flex flex-col gap-2">
                        {mainNav.map((link) => (
                            <Link key={link.name} href={link.href} className="group block py-2 border-b border-border/30 last:border-0 hover:border-border transition-colors duration-500">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                                        {link.name}
                                    </span>
                                    <span className="text-xl sm:text-2xl text-muted-foreground group-hover:text-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                        ↗
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Floating Scroll To Top Button */}
            <motion.div
                className="fixed bottom-12 right-4 pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    onClick={scrollToTop}
                    className={`pointer-events-auto w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-foreground transition-all duration-300 ${showScrollTop ? 'cursor-pointer' : ''}`}
                    aria-label="Scroll to top"
                >
                    <IconArrowUp size={20} />
                </button>
            </motion.div>
        </footer>
    );
}

export default Footer;