"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LogoSignatureReveal } from "@/components/layout/logo-signature-reveal";

interface LogoSignatureIntroProps {
  onComplete?: () => void;
  className?: string;
}

export function LogoSignatureIntro({ onComplete, className }: LogoSignatureIntroProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("#logo-signature-scene", { autoAlpha: 1 });
      gsap.set("#intro-signature-wrap", { autoAlpha: 0, scale: 0.92, y: 10 });
      gsap.set("#intro-signature-fill", { autoAlpha: 0 });
      gsap.set(["#intro-signature-shard", "#intro-signature-spine", "#intro-signature-base"], {
        autoAlpha: 0,
      });
      gsap.set("#intro-signature-rule-svg", { autoAlpha: 0 });
      gsap.set("#intro-signature-tagline", { autoAlpha: 0, y: 6 });
      gsap.set(".intro-signature-char", { autoAlpha: 0, y: 8 });
      gsap.set("#intro-signature-mark", { filter: "drop-shadow(0 0 0 rgba(255,255,255,0))" });

      const outline = document.querySelector<SVGGeometryElement>("#intro-signature-outline-trace");
      if (outline) {
        const outlineLength = outline.getTotalLength();
        gsap.set("#intro-signature-outline-trace", {
          autoAlpha: 1,
          strokeDasharray: outlineLength,
          strokeDashoffset: outlineLength,
        });
      }

      const ruleLine = document.querySelector<SVGGeometryElement>("#intro-signature-rule-line");
      if (ruleLine) {
        const ruleLength = ruleLine.getTotalLength();
        gsap.set("#intro-signature-rule-line", {
          strokeDasharray: ruleLength,
          strokeDashoffset: ruleLength,
        });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
          setVisible(false);
        },
      });

      tl.fromTo(
        "#intro-signature-wrap",
        {
          autoAlpha: 0,
          scale: 0.92,
          y: 10,
        },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.44,
          ease: "power2.out",
        },
      )
        .to(
          "#intro-signature-outline-trace",
          {
            strokeDashoffset: 0,
            duration: 0.72,
            ease: "power2.out",
          },
          ">-0.06",
        )
        .to(
          ["#intro-signature-fill", "#intro-signature-shard", "#intro-signature-spine", "#intro-signature-base"],
          {
            autoAlpha: 1,
            duration: 0.32,
            ease: "power1.out",
          },
          ">-0.12",
        )
        .to(
          ".intro-signature-char",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
            stagger: 0.06,
          },
          "<+0.06",
        )
        .to(
          "#intro-signature-rule-svg",
          {
            autoAlpha: 1,
            duration: 0.01,
            ease: "none",
          },
          ">-0.03",
        )
        .to(
          "#intro-signature-rule-line",
          {
            strokeDashoffset: 0,
            duration: 0.36,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          "#intro-signature-tagline",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          },
          "<+0.15",
        )
        .to(
          "#intro-signature-mark",
          {
            scale: 1.04,
            duration: 0.34,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          },
          ">+0.08",
        )
        .to(
          "#intro-signature-mark",
          {
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.55)) drop-shadow(0 0 18px rgba(167,139,250,0.4))",
            duration: 0.17,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          },
          "<+0.05",
        )
        .to(
          "#logo-signature-scene",
          {
            autoAlpha: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          ">-0.02",
        );
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      id="logo-signature-scene"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background ${className ?? ""}`}
    >
      <LogoSignatureReveal className="scale-[0.86] sm:scale-100" />
    </div>
  );
}
