"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { IconArrowUp } from "@tabler/icons-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { PrimaryFlowButton } from "../ui/flow-button";

const ContactDialog = dynamic(
  () => import("@/components/forms/contact-dialog"),
);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
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
    { name: "Furniture", href: "/furniture" },
  ];

  return (
    <footer className="bg-background border-t border-border relative z-5 sticky bottom-0">
      <div className="container-custom py-7 sm:py-8">
        <div className="flex flex-col gap-12">
          {/* Top Section: Brand & Massive CTA */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-accent leading-[0.95] tracking-tight">
                Ready to build <br />
                <span className="text-foreground">extraordinary?</span>
              </h2>
            </div>

            <PrimaryFlowButton onClick={() => setIsContactOpen(true)}>Contact us</PrimaryFlowButton>
          </div>

          {/* Middle Section: Navigation */}
          <nav className="flex flex-col gap-1.5">
            {mainNav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group block py-1.5 border-b border-border/30 last:border-0 hover:border-border transition-colors duration-500"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-lg sm:text-xl text-muted-foreground group-hover:text-foreground opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
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
          className={`pointer-events-auto w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-foreground transition-all duration-300 ${showScrollTop ? "cursor-pointer" : ""}`}
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} />
        </button>
      </motion.div>

      {/* Contact Dialog */}
      {isContactOpen && (
        <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
      )}
    </footer>
  );
}

export default Footer;
