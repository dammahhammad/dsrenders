"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FadeIn, Counter } from "@/components/motion/motion-primitives";
import { WorldMapComponent } from "@/components/world-map";

const offices = [
  { city: "New York", country: "USA", projects: 120 },
  { city: "London", country: "UK", projects: 85 },
  { city: "Dubai", country: "UAE", projects: 95 },
  { city: "Singapore", country: "SG", projects: 70 },
  { city: "Tokyo", country: "Japan", projects: 55 },
  { city: "Sydney", country: "Australia", projects: 45 },
];

export function GlobalReachSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const totalProjects = offices.reduce(
    (acc, office) => acc + office.projects,
    0,
  );

  return (
    <section
      ref={ref}
      className="relative z-25 overflow-hidden bg-background pb-8"
    >
      <div className="container-custom relative z-10 bg-background">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 block text-[11px] font-body uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
              Global Presence
            </span>
            <h2 className="font-display font-bold">Designing Across Continents</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              We operate as one connected studio across time zones—local
              insight, global execution, and a consistent design language in
              every market.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card/20 sm:mt-10">
            <div className="relative h-[360px] sm:h-[460px] lg:h-[560px]">
              <WorldMapComponent />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/35" />

              <div className="absolute left-3 top-3 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 backdrop-blur-md sm:left-5 sm:top-5 sm:px-3 sm:py-1.5">
                <span className="text-[10px] font-body uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                  DS Renders Network
                </span>
              </div>

              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 backdrop-blur-md sm:right-5 sm:top-5 sm:gap-2 sm:px-3 sm:py-1.5">
                <span className="h-2 w-2 rounded-full bg-foreground/80" />
                <span className="text-[10px] font-body uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
                  Live Reach
                </span>
              </div>

              <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:inset-x-5 sm:bottom-5 sm:gap-2.5">
                {[
                  { label: "Projects", value: totalProjects },
                  { label: "Cities", value: offices.length },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-border/70 bg-background/75 p-2 text-center backdrop-blur-md sm:p-3"
                    initial={{ opacity: 0, y: 16 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                    }
                    transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-sm font-display font-bold sm:text-lg">
                      <Counter to={stat.value} duration={2} />+
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-2.5">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-xs"
                initial={{ opacity: 0, y: 14 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
                }
                transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
              >
                <span className="font-medium text-foreground">{office.city}</span>
                <span className="mx-2 text-muted-foreground/60">•</span>
                <span>{office.country}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
