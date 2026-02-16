"use client";

import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandPinterest,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Reserved() {
    const socialLinks = [
        { icon: IconBrandInstagram, href: "#", label: "Instagram", color: "hover:text-[#E1306C]" },
        { icon: IconBrandLinkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077B5]" },
        { icon: IconBrandTwitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
        { icon: IconBrandFacebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2]" },
        { icon: IconBrandPinterest, href: "#", label: "Pinterest", color: "hover:text-[#BD081C]" },
    ];

    return (
        <div className="bg-card border-t border-border/10 relative z-0 sticky">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 py-4">
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <motion.div
                            key={social.label}
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={social.href}
                                aria-label={social.label}
                                className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                            >
                                <social.icon size={24} stroke={1.5} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground font-body text-center md:text-right">
                    © {new Date().getFullYear()} DsRenders. All rights reserved.
                </p>
            </div>
        </div>
    );
}