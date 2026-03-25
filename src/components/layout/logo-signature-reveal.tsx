"use client";

import { cn } from "@/lib/utils";

interface LogoSignatureRevealProps {
  className?: string;
  initialHidden?: boolean;
}

const WORDMARK = "DS RENDERS";

export function LogoSignatureReveal({
  className,
  initialHidden = true,
}: LogoSignatureRevealProps) {
  const colors = {
    blockFill: "var(--logo-block-fill)",
    blockStroke: "var(--logo-block-stroke)",
    centerFill: "var(--logo-center-fill)",
    outerStroke: "var(--logo-outer-stroke)",
    drawStroke: "var(--logo-block-fill)",
    subtle: "var(--primary)",
    rule: "#5c5c5c",
  };


  return (
    <div
      id="intro-signature-wrap"
      className={cn(
        "inline-flex items-center gap-4 sm:gap-6",
        initialHidden && "opacity-0",
        className,
      )}
    >
      <div id="intro-signature-mark-wrap" className="relative">
        <svg
          id="intro-signature-mark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="44 74 46 60"
          preserveAspectRatio="xMinYMid meet"
          className="h-[88px] w-auto overflow-visible sm:h-[102px]"
          aria-hidden="true"
        >
          <polygon
            id="intro-signature-outline-trace"
            points="88.67 23.68 88.67 121.32 45.94 92.53 77.09 72.56 77.09 35.18 88.67 23.68"
            fill="none"
            stroke={colors.drawStroke}
            strokeWidth="2.1"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />

          <polygon
            id="intro-signature-fill"
            points="88.67 23.68 88.67 121.32 45.94 92.53 77.09 72.56 77.09 35.18 88.67 23.68"
            fill={colors.blockFill}
            stroke={colors.outerStroke}
            strokeWidth="0"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />

          <polygon
            id="intro-signature-shard"
            points="55.74 92.2 74.9 79.2 68.78 97.02"
            fill={colors.centerFill}
            stroke={colors.blockStroke}
            strokeWidth="0"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />

          <polygon
            id="intro-signature-edge"
            points="68.78 97.02 89.67 122.32 89.67 122.04 68.78 97.02"
            fill={colors.blockFill}
            stroke={colors.blockStroke}
            strokeWidth="0.55"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />

          <polygon
            id="intro-signature-spine"
            points="74.9 80.2 76.21 72.65 75.87 74.71 74.9 79.2"
            fill={colors.blockFill}
            stroke={colors.blockStroke}
            strokeWidth="0.55"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />

          <polygon
            id="intro-signature-base"
            points="55.74 92.14 44.99 92.5 46.63 92.09 55.74 92.14"
            fill={colors.blockFill}
            stroke={colors.blockStroke}
            strokeWidth="0.55"
            strokeLinejoin="round"
            className={cn(initialHidden && "opacity-0")}
          />
        </svg>
      </div>

      <div className="flex flex-col items-start">
        <div
          id="intro-signature-wordmark"
          className="leading-none tracking-[0.06em]"
          style={{
            fontFamily: "var(--font-logo), Bruno Ace SC, sans-serif",
            color: colors.subtle,
            fontSize: "clamp(20px, 3vw, 32px)",
          }}
        >
          {WORDMARK.split("").map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={cn(
                "intro-signature-char inline-block",
                initialHidden && "translate-y-2 opacity-0",
              )}
              style={{
                fontFamily: "var(--font-logo), Bruno Ace SC, sans-serif",
                color: colors.subtle,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <svg
          id="intro-signature-rule-svg"
          className={cn(
            "mt-1 h-[4px] w-[min(43vw,180px)] sm:w-[300px]",
            initialHidden && "opacity-0",
          )}
          viewBox="0 0 300 4"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            id="intro-signature-rule-line"
            x1="0"
            y1="2"
            x2="300"
            y2="2"
            stroke={colors.rule}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div
          id="intro-signature-tagline"
          className={cn(
            "mt-1 text-[8px] ml-6 tracking-[0.16em] sm:text-[12px]",
            initialHidden && "opacity-0",
          )}
          style={{
            fontFamily: "var(--font-logo), Bruno Ace SC, sans-serif",
            color: colors.subtle,
          }}
        >
          PRECISION IN EVERY LINE
        </div>
      </div>
    </div>
  );
}
