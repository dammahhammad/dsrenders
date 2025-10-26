"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import ContactDialog from "@/components/forms/contact-dialog";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

export function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    {
      name: "Architecture",
      link: "architecture",
    },
    {
      name: "Interiors",
      link: "interiors",
    },
    {
      name: "Woods",
      link: "furniture",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
            <Button
              className="px-4 py-2 bg-transparent hover:bg-transparent text-primary-foreground font-mono text-sm transition-all duration-300 hover:cursor-pointer"
              onClick={() => setIsContactOpen(true)}
            >
              <div className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black">Contact Us</span>
              </div>
            </Button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <AnimatedThemeToggler />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={`/${item.link}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <ContactDialog isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}
