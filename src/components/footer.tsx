"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/motion-primitives";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandPinterest,
    IconArrowUp,
} from "@tabler/icons-react";

const footerLinks = {
    services: [
        { name: "Architecture", href: "/architecture" },
        { name: "Interiors", href: "/interiors" },
        { name: "Furniture", href: "/furniture" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ],
};

const socialLinks = [
    { icon: IconBrandInstagram, href: "#", label: "Instagram" },
    { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
    { icon: IconBrandTwitter, href: "#", label: "Twitter" },
    { icon: IconBrandFacebook, href: "#", label: "Facebook" },
    { icon: IconBrandPinterest, href: "#", label: "Pinterest" },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-card border-t border-border">
            {/* CTA Section */}
            <div className="section-padding border-b border-border">
                <div className="container-custom">
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="font-display font-bold text-foreground mb-3 sm:mb-4">
                                    Ready to Build Something Extraordinary?
                                </h2>
                                <p className="text-base sm:text-lg text-muted-foreground font-body">
                                    Let&apos;s discuss your vision and create spaces that inspire.
                                </p>
                            </div>
                            <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full font-body font-medium text-sm sm:text-base self-start lg:self-center"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Start a Project</span>
                                <span>→</span>
                            </motion.a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="py-12 sm:py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                            <Link href="/" className="inline-block">
                                <span className="text-xl sm:text-2xl font-display font-bold text-foreground">
                                    Ds<span className="text-accent">Renders</span>
                                </span>
                            </Link>
                            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
                                Award-winning architecture studio crafting timeless spaces since 1954.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-6">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="text-sm font-body font-semibold text-foreground mb-4 tracking-wider uppercase">
                                Services
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors link-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="text-sm font-body font-semibold text-foreground mb-4 tracking-wider uppercase">
                                Company
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors link-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h4 className="text-sm font-body font-semibold text-foreground mb-4 tracking-wider uppercase">
                                Resources
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors link-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter - Desktop Only */}
                        <div className="col-span-2 sm:col-span-4 lg:col-span-1">
                            <h4 className="text-sm font-body font-semibold text-foreground mb-4 tracking-wider uppercase">
                                Newsletter
                            </h4>
                            <p className="text-sm text-muted-foreground font-body mb-4">
                                Get design insights delivered to your inbox.
                            </p>
                            <form
                                className="flex gap-2"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 sm:px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-body font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    →
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border py-6 sm:py-8">
                <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-muted-foreground font-body text-center sm:text-left">
                        © {new Date().getFullYear()} DsRenders. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground font-body">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                        <motion.button
                            onClick={scrollToTop}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Scroll to top"
                        >
                            <IconArrowUp size={16} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;