"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamMember {
    name: string;
    role: string;
    avatar: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Sarah Chen",
        role: "Principal Architect",
        avatar: "/avatars/sarah.png"
    },
    {
        name: "Marcus Rodriguez",
        role: "Lead Interior Designer",
        avatar: "/avatars/marcus.png"
    },
    {
        name: "Elena Kowalski",
        role: "Senior Landscape Architect",
        avatar: "/avatars/elena.png"
    },
    {
        name: "David Park",
        role: "Director of Engineering",
        avatar: "/avatars/marcus.png"
    }
];

export const TeamSection: React.FC = () => {
    return (
        <section className="py-20 px-16 text-zinc-800 dark:text-white relative overflow-hidden bg-[#F7F8FA] dark:bg-black">

            <div className="mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-zinc-800 dark:text-white">
                                Built by a world-class team of architectural experts
                            </h2>
                        </div>
                        <div className="lg:w-1/2 lg:pl-8">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl font-bold text-gray-400 dark:text-zinc-600">04</span>
                                <p className="text-lg leading-relaxed text-gary-400 dark:text-zinc-600">
                                    Our architectural team, comprised of over 40 designers, engineers, and consultants,
                                    continuously pushes the boundaries of design through cutting-edge innovation,
                                    sustainable practices, and collaborative excellence—sharing insights through
                                    our design research publications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Leadership Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 dark:text-zinc-600 mb-12">
                            ARCHITECTURAL TEAM LEADERSHIP
                        </h3>
                    </div>

                    {/* Team Grid with Corner Brackets */}
                    <div className="relative">
                        {/* Corner Brackets - All Four Corners */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-zinc-800 dark:border-white opacity-30"></div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-r-2 border-t-2 border-zinc-800 dark:border-white opacity-30"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-zinc-800 dark:border-white opacity-30"></div>
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-zinc-800 dark:border-white opacity-30"></div>

                        {/* Team Grid */}
                        <div className="relative">
                            {/* Grid Pattern Background - Behind Images */}
                            <div
                                className={cn(
                                    "absolute inset-0 z-0 opacity-40 py-8",
                                    "[background-size:20px_20px]",
                                    "[background-image:linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)]",
                                    "dark:[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
                                )}
                            />

                             {/* Team Grid Content */}
                             <div className="relative z-10 py-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                 {teamMembers.map((member, index) => (
                                     <div key={index} className="group">
                                         <div className="text-center transform group-hover:scale-110 transition-all duration-300 ease-out">
                                             {/* Avatar */}
                                             <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 dark:border-zinc-300 group-hover:border-blue-500 transition-colors duration-300">
                                                 <Image
                                                     src={member.avatar}
                                                     alt={member.name}
                                                     width={96}
                                                     height={96}
                                                     className="w-full h-full object-cover"
                                                 />
                                             </div>

                                             {/* Name */}
                                             <h4 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                                 {member.name}
                                             </h4>

                                             {/* Role */}
                                             <p className="text-sm text-gray-400 dark:text-zinc-600 group-hover:text-gray-600 dark:group-hover:text-zinc-400 transition-colors duration-300">
                                                 {member.role}
                                             </p>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
