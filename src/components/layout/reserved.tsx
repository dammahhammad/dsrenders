"use client";

import {
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Reserved() {
    const socialLinks = [
        { icon: IconBrandInstagram, href: "https://www.instagram.com/dsrenders_official", label: "Instagram", color: "hover:text-[#E1306C]" },
        { icon: IconMail, href: "mailto:contact@dsrenders.com", label: "Email", color: "hover:text-[#EA4335]" },
        { icon: IconBrandWhatsapp, href: "https://wa.me/+919219683383", label: "WhatsApp", color: "hover:text-[#25D366]" },
    ];

    return (
        <div className="bg-card border-t border-border/10 relative z-0 sticky">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 py-3">
                <div className="flex gap-3">
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
                                <social.icon size={20} stroke={1.5} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-body text-center md:text-right">
                    © {new Date().getFullYear()} DsRenders. All rights reserved.
                </p>
            </div>
        </div>
    );
}