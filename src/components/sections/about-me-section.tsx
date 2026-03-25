"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-primitives";
import { IconBrandLinkedin, IconMail, IconBrandBehance, IconBrandInstagram } from "@tabler/icons-react";
import {
    IconPalette,
    IconBuildingSkyscraper,
    IconSofa,
    Icon3dCubeSphere,
    IconDeviceDesktop
} from "@tabler/icons-react";

interface Skill {
    name: string;
    icon: React.ReactNode;
    description: string;
}

const skills: Skill[] = [
    {
        name: "Architecture Design",
        icon: <IconBuildingSkyscraper size={28} />,
        description: "Creating innovative and sustainable architectural designs"
    },
    {
        name: "Interior Design",
        icon: <IconSofa size={28} />,
        description: "Crafting beautiful and functional interior spaces"
    },
    {
        name: "3D Visualization",
        icon: <Icon3dCubeSphere size={28} />,
        description: "Photorealistic 3D renders and architectural visualization"
    },
    {
        name: "Furniture Design",
        icon: <IconPalette size={28} />,
        description: "Bespoke furniture and product design"
    },
    {
        name: "Digital Art",
        icon: <IconDeviceDesktop size={28} />,
        description: "Creative digital artwork and visual concepts"
    },
];

const profileInfo = {
    name: "Daniyal Siddiqui",
    role: "Architect & 3D Visualization Artist",
    tagline: "Transforming visions into breathtaking reality",
    bio: "With over a decade of experience in architecture and 3D visualization, I bring creative visions to life through stunning renders and innovative designs. My work spans residential, commercial, and conceptual projects across the globe.",
    image: "/avatars/Daniyal.png",
    stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Projects Completed", value: "250+" },
        { label: "Happy Clients", value: "150+" },
    ],
    socials: {
        linkedin: "#",
        instagram: "#",
        github: "#",
        behance: "#",
        email: "dani@dsrenders.com",
    },
};

export function AboutMeSection() {
    return (
        <section className="section-padding bg-background relative overflow-hidden z-20">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/3 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-xs sm:text-sm font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 sm:mb-3 block">
                            About Me
                        </span>
                        <h2 className="font-display font-bold text-foreground">
                            The Creative Behind the Renders
                        </h2>
                    </div>
                </FadeIn>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column - Profile Card */}
                    <FadeIn className="lg:col-span-5">
                        <div className="relative">
                            {/* Profile Image Card */}
                            <motion.div
                                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={profileInfo.image}
                                        alt={profileInfo.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Name & Role Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <motion.h3
                                            className="text-2xl sm:text-3xl font-display font-bold text-white mb-1"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {profileInfo.name}
                                        </motion.h3>
                                        <motion.p
                                            className="text-sm sm:text-base text-secondary-foreground font-body"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {profileInfo.role}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="p-4 sm:p-6 flex items-center justify-center gap-3 sm:gap-4">
                                    {profileInfo.socials.instagram && (
                                        <SocialButton href={profileInfo.socials.instagram} hoverColor="#C13584" icon={<IconBrandInstagram size={20} />} />
                                    )}
                                    {profileInfo.socials.behance && (
                                        <SocialButton href={profileInfo.socials.behance} hoverColor="#1769FF" icon={<IconBrandBehance size={20} />} />
                                    )}
                                    {profileInfo.socials.email && (
                                        <SocialButton href={`mailto:${profileInfo.socials.email}`} hoverColor="#EA4335" icon={<IconMail size={20} />} />
                                    )}
                                    {profileInfo.socials.linkedin && (
                                        <SocialButton href={profileInfo.socials.linkedin} hoverColor="#0077B5" icon={<IconBrandLinkedin size={20} />} />
                                    )}
                                </div>
                            </motion.div>

                            {/* Decorative Element */}
                            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 border-accent/20" />
                        </div>
                    </FadeIn>

                    {/* Right Column - Bio & Skills */}
                    <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                        {/* Bio */}
                        <FadeIn>
                            <div>
                                <p className="text-xl sm:text-2xl font-display text-foreground mb-4 leading-relaxed">
                                    &ldquo;{profileInfo.tagline}&rdquo;
                                </p>
                                <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed">
                                    {profileInfo.bio}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Stats */}
                        <FadeIn>
                            <div className="grid grid-cols-3 gap-4 sm:gap-6">
                                {profileInfo.stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-muted-foreground font-body mt-1">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Skills */}
                        <div>
                            <FadeIn>
                                <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-4 sm:mb-6">
                                    Expertise & Skills
                                </h4>
                            </FadeIn>

                            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {skills.map((skill) => (
                                    <StaggerItem key={skill.name}>
                                        <SkillCard skill={skill} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* CTA Button */}
                        <FadeIn>
                            <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm sm:text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-shadow"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Let&apos;s Work Together</span>
                                <span>→</span>
                            </motion.a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface SkillCardProps {
    skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div
            className="group relative p-4 sm:p-5 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-accent mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
            </div>
            <h5 className="text-sm sm:text-base font-display font-semibold text-foreground mb-1">
                {skill.name}
            </h5>
            <p className="text-xs text-muted-foreground font-body line-clamp-2 hidden sm:block">
                {skill.description}
            </p>
        </motion.div>
    );
}

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
    hoverColor?: string;
}

function SocialButton({ href, icon, hoverColor = "var(--accent)" }: SocialButtonProps) {
    return (
        <motion.a
            href={href}
            style={{ "--social-color": hoverColor } as React.CSSProperties}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/40 flex items-center justify-center text-[var(--social-color)] hover:bg-accent/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </motion.a>
    );
}
