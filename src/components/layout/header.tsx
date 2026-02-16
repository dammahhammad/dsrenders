"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import ContactDialog from "@/components/forms/contact-dialog";
import ModeSwitch from "@/components/mode-switch";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useIntro } from "@/context/intro-context";

const navItems = [
  { name: "Architecture", href: "/architecture" },
  { name: "Interiors", href: "/interiors" },
  { name: "Furniture", href: "/furniture" }
];

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isIntroComplete } = useIntro();
  const isHome = pathname === "/";

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
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
              <motion.span
                id="header-logo"
                className="text-xl sm:text-2xl font-display font-bold text-foreground inline-block"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: !isHome || isIntroComplete ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                Ds<span className="text-accent">Renders</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} name={item.name} />
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <ModeSwitch />
              <motion.button
                onClick={() => setIsContactOpen(true)}
                className="group relative px-5 py-2.5 overflow-hidden rounded-full font-body text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background */}
                <span className="absolute inset-0 bg-foreground rounded-full transition-transform duration-300 group-hover:scale-105" />
                {/* Shine Effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
                {/* Text */}
                <span className="relative text-background">Contact Us</span>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <ModeSwitch />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 w-10 h-10 flex items-center justify-center text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
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
      <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
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
      <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
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
