"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/motion-primitives";
import { IconMail, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import {
    IconPalette,
    IconBuildingSkyscraper,
    IconSofa,
    Icon3dCubeSphere
} from "@tabler/icons-react";

interface Skill {
    name: string;
    icon: React.ReactNode;
    description: string;
}

const skills: Skill[] = [
    {
        name: "2D Architecture Drafting",
        icon: <IconBuildingSkyscraper size={28} />,
        description: "Detailed architectural plans and elevations for precise construction documentation"
    },
    {
        name: "2D Interior Drafting",
        icon: <IconSofa size={28} />,
        description: "Comprehensive interior layouts and details for residential and commercial spaces"
    },
    {
        name: "3D Modeling",
        icon: <Icon3dCubeSphere size={28} />,
        description: "Accurate 3D models for architectural and interior design projects, ready for rendering and visualization"
    },
    {
        name: "AI Renders",
        icon: <IconPalette size={28} />,
        description: "High-quality AI-generated renders that bring architectural and interior designs to life with stunning realism"
    }
];

const profileInfo = {
    name: "Daniyal S.",
    role: "Architect & 3D Visualization Artist",
    tagline: "Transforming visions into breathtaking reality",
    bio: "With over a decade of experience in architecture and 3D visualization, I bring creative visions to life through stunning renders and innovative designs. My work spans residential, commercial, and conceptual projects across the globe.",
    image: "https://images.dsrenders.com/Daniyal_Siddiqui.webp",
    stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Projects Completed", value: "50+" },
        { label: "Happy Clients", value: "50+" },
    ],
    socials: {
        instagram: "https://www.instagram.com/dsrenders_official",
        email: "contact@dsrenders.com",
        whatsapp: "+919219683383",
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
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl hover:-translate-y-2 transition-transform duration-500">
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        // src={profileInfo.image}
                                        src="/image.png"
                                        alt={profileInfo.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Name & Role Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
                                            {profileInfo.name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-secondary-foreground font-body">
                                            {profileInfo.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="p-4 sm:p-6 flex items-center justify-center gap-3 sm:gap-4">
                                    {profileInfo.socials.instagram && (
                                        <SocialButton href={profileInfo.socials.instagram} icon={<IconBrandInstagram color="#E4405F" size={20} />} />
                                    )}
                                    {profileInfo.socials.email && (
                                        <SocialButton href={`mailto:${profileInfo.socials.email}`} icon={<IconMail color="#EA4335" size={20} />} />
                                    )}
                                    {profileInfo.socials.whatsapp && (
                                        <SocialButton href={`https://wa.me/${profileInfo.socials.whatsapp}`} icon={<IconBrandWhatsapp color="#25D366" size={20} />} />
                                    )}
                                </div>
                            </div>

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
                                    <div
                                        key={stat.label}
                                        className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 animate-fade-in-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-muted-foreground font-body mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Skills */}
                        <FadeIn>
                            <h4 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-4 sm:mb-6">
                                Expertise & Skills
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="animate-fade-in-up"
                                        style={{ animationDelay: `${index * 80}ms` }}
                                    >
                                        <SkillCard skill={skill} />
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* CTA Button */}
                        <FadeIn>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm sm:text-base shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                            >
                                <span>Let&apos;s Work Together</span>
                                <span>→</span>
                            </a>
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
        <div className="group relative p-4 sm:p-5 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
            <div className="text-accent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
            </div>
            <h5 className="text-sm sm:text-base font-display font-semibold text-foreground mb-1">
                {skill.name}
            </h5>
            <p className="text-xs text-muted-foreground font-body line-clamp-2 hidden sm:block">
                {skill.description}
            </p>
        </div>
    );
}

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
}

function SocialButton({ href, icon }: SocialButtonProps) {
    return (
        <a
            href={href}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/40 flex items-center justify-center text-accent hover:bg-accent/20 hover:scale-110 active:scale-95 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
}
