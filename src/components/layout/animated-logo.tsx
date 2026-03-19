"use client";

import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  idPrefix: string;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}

export function AnimatedLogo({
  idPrefix,
  className,
  markClassName,
  wordmarkClassName,
}: AnimatedLogoProps) {
  const colors = {
    primary: "var(--primary)",
    accent: "var(--primary-foreground)",
    subtle: "var(--primary)",
    rule: "#5c5c5c",
  };

  return (
    <div className={cn("inline-flex items-center gap-2 sm:gap-3", className)}>
      <svg
        id={`${idPrefix}-svg`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="30 10 180 110"
        preserveAspectRatio="xMinYMid meet"
        style={{ overflow: "visible" }}
        className={cn("h-9 w-auto sm:h-11 md:h-12", markClassName)}
        aria-hidden="true"
      >
        <path
          id={`${idPrefix}-d-seed`}
          d="M52 24 V121 M52 24 C84 24 92 42 92 72 C92 102 84 121 52 121"
          fill="none"
          stroke={colors.primary}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
        />

        <path
          id={`${idPrefix}-d-target`}
          d="M88.67 23.68 L88.67 121.32 L45.94 92.53 L77.09 72.56 L77.09 35.18 Z"
          fill="none"
          opacity="0"
        />

        <polygon
          id={`${idPrefix}-mark-outline`}
          points="88.67 23.68 88.67 121.32 45.94 92.53 77.09 72.56 77.09 35.18 88.67 23.68"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="1"
          strokeLinejoin="round"
        />

        <path
          id={`${idPrefix}-mark-shard`}
          d="M55.74 92.2 L74.9 79.2 L68.78 97.02 Z"
          fill={colors.accent}
          stroke={colors.accent}
          strokeWidth="0.4"
          strokeLinejoin="round"
        />

        <path
          id={`${idPrefix}-mark-shard-target`}
          d="M55.74 92.2 C63 79, 73.5 82.5, 68.78 97.02 C62 95.2, 58 94, 55.74 92.2 Z"
          fill={colors.accent}
          opacity="0"
        />

        <polygon
          points="68.78 97.02 88.67 121.32 88.67 120.04 68.78 97.02"
          fill={colors.accent}
          stroke={colors.accent}
          strokeWidth="0.4"
          strokeLinejoin="round"
        />

        <polygon
          id={`${idPrefix}-mark-spine`}
          points="74.9 79.2 76.71 72.65 76.47 72.71 74.9 79.2"
          fill="none"
          stroke={colors.primary}
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polygon
          id={`${idPrefix}-mark-base`}
          points="55.74 92.14 45.99 92.5 46.63 92.09 55.74 92.14"
          fill="none"
          stroke={colors.primary}
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text
          id={`${idPrefix}-wordmark`}
          x="97.94"
          y="97.94"
          fill={colors.primary}
          fontSize="18"
          fontFamily="var(--font-logo), Bruno Ace SC, sans-serif"
          className={cn("tracking-tight", wordmarkClassName)}
        >
          DS RENDERS
        </text>

        <text
          id={`${idPrefix}-tagline`}
          x="102.74"
          y="112.3"
          fill={colors.subtle}
          fontSize="8.5"
          fontFamily="var(--font-logo), Bruno Ace SC, sans-serif"
        >
          PRECISION IN EVERY LINE
        </text>

        <rect
          id={`${idPrefix}-rule`}
          x="92.53"
          y="100.96"
          width="160.68"
          height="2.08"
          fill={colors.rule}
        />
      </svg>
    </div>
  );
}
