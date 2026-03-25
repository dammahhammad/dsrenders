"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatedLogo } from "@/components/layout/animated-logo";
import { Button } from "../ui/button";

const ContactDialog = dynamic(
  () => import("@/components/forms/contact-dialog"),
  {
    ssr: false,
  },
);

const navItems = [
  { name: "Architecture", href: "/architecture" },
  { name: "Interiors", href: "/interiors" },
  { name: "Furniture", href: "/furniture" },
];

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong py-3 sm:py-4"
            : "bg-transparent py-4 sm:py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div
                id="header-logo"
                className="inline-block origin-left scale-[1.28] sm:scale-[1.36]"
              >
                <AnimatedLogo idPrefix="header" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} name={item.name} />
              ))}
            </div>

            {/* Desktop Actions */}
            <Button
              className="px-4 py-2 bg-transparent hover:bg-transparent text-primary-foreground font-mono text-sm transition-all duration-300 hover:cursor-pointer"
              onClick={() => setIsContactOpen(true)}
            >
              <div className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">
                  Contact Me
                </span>
              </div>
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 w-10 h-10 flex items-center justify-center text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <IconX size={24} />
                ) : (
                  <IconMenu2 size={24} />
                )}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onContactClick={() => {
          setIsMobileMenuOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* Contact Dialog */}
      {isContactOpen ? (
        <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
      ) : null}
    </>
  );
}

interface NavLinkProps {
  href: string;
  name: string;
}

function NavLink({ href, name }: NavLinkProps) {
  return (
    <Link href={href} className="group relative py-2">
      <span className="text-sm font-body text-muted-foreground hover:bg-primary/10 hover:p-2 hover:rounded-xl hover:shadow-md group-hover:text-foreground transition-colors text-primary dark:text-white/80">
        {name}
      </span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-px bg-accent origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

function MobileMenu({ isOpen, onClose, onContactClick }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 lg:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { visibility: "visible" as const },
        closed: { visibility: "hidden" as const, transition: { delay: 0.5 } },
      }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Menu Content */}
      <motion.nav
        className="relative h-full flex flex-col justify-center px-8"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
      >
        <div className="space-y-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.1 + index * 0.1 },
                },
                closed: { opacity: 0, x: -20 },
              }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-4xl sm:text-5xl font-display font-bold text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          variants={{
            open: { opacity: 1, y: 0, transition: { delay: 0.4 } },
            closed: { opacity: 0, y: 20 },
          }}
        >
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-body font-medium text-base"
          >
            <span>Contact Us</span>
            <span>→</span>
          </button>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
