"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Daniel Smithson",
        role: "Founder & Principal Architect",
        bio: "30+ years transforming visions into landmark structures across continents.",
        image: "/avatars/avatar-1.jpg",
        socials: { linkedin: "#", twitter: "#", email: "daniel@dsrenders.com" },
    },
    {
        id: "2",
        name: "Sarah Chen",
        role: "Design Director",
        bio: "Award-winning designer specializing in sustainable residential architecture.",
        image: "/avatars/avatar-2.jpg",
        socials: { linkedin: "#", email: "sarah@dsrenders.com" },
    },
    {
        id: "3",
        name: "Marcus Williams",
        role: "Head of Interiors",
        bio: "Crafting immersive interior experiences that blend form with function.",
        image: "/avatars/avatar-3.jpg",
        socials: { linkedin: "#", twitter: "#" },
    },
    {
        id: "4",
        name: "Elena Rodriguez",
        role: "Landscape Architect",
        bio: "Creating harmonious outdoor spaces that connect people with nature.",
        image: "/avatars/avatar-4.jpg",
        socials: { linkedin: "#", email: "elena@dsrenders.com" },
    },
];

export function TeamSection() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
                        <div className="max-w-2xl">
                            <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                                Our Team
                            </span>
                            <h2 className="font-display font-bold text-foreground mb-3 sm:mb-4">
                                The Minds Behind the Vision
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed">
                                A collective of visionaries, designers, and innovators united by
                                a passion for creating extraordinary spaces.
                            </p>
                        </div>

                        <motion.a
                            href="/about"
                            className="group inline-flex items-center gap-2 text-sm sm:text-base font-body font-medium text-foreground whitespace-nowrap"
                            whileHover={{ x: 5 }}
                        >
                            <span className="link-underline">Meet the full team</span>
                            <span>→</span>
                        </motion.a>
                    </div>
                </FadeIn>

                {/* Team Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {teamMembers.map((member) => (
                        <StaggerItem key={member.id}>
                            <TeamCard member={member} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

interface TeamCardProps {
    member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border/50 h-[380px] sm:h-[420px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* Image */}
            <div className="relative h-2/3 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </motion.div>

                {/* Hover Overlay with Socials */}
                <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 sm:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {member.socials.linkedin && (
                        <SocialButton href={member.socials.linkedin} icon={<IconBrandLinkedin size={18} />} />
                    )}
                    {member.socials.twitter && (
                        <SocialButton href={member.socials.twitter} icon={<IconBrandTwitter size={18} />} />
                    )}
                    {member.socials.email && (
                        <SocialButton href={`mailto:${member.socials.email}`} icon={<IconMail size={18} />} />
                    )}
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 h-1/3 flex flex-col justify-center">
                <h4 className="text-base sm:text-lg font-display font-semibold text-foreground">
                    {member.name}
                </h4>
                <span className="text-xs sm:text-sm text-accent font-body mt-0.5">
                    {member.role}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground font-body mt-2 line-clamp-2">
                    {member.bio}
                </p>
            </div>

            {/* Accent Border on Hover */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
}

function SocialButton({ href, icon }: SocialButtonProps) {
    return (
        <motion.a
            href={href}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </motion.a>
    );
}
