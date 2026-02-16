"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useIntro } from "@/context/intro-context";

export function IntroAnimation() {
    const { setIntroComplete } = useIntro();
    const comp = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                onComplete: () => {
                    setIntroComplete(true);
                    setIsVisible(false); // Remove from DOM after animation
                },
            });

            // Part 1: Initial appearance (Fade in and slight scale up)
            t1.from("#intro-logo", {
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "power3.out",
            })
                .to("#intro-logo", {
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.inOut",
                }); // Stay for a bit

            // Part 2: Move to header position
            // We need to calculate where the header logo is.
            // Since we can't easily get the rect of a hidden element in another component without
            // exposing refs via context (which is complex), or querying the DOM (which is side-effecty but okay here),
            // we will query the header logo placeholder.

            // Ideally, the header logo should be present but invisible (opacity 0).
            // Let's assume the header logo has id="header-logo"

            const target = document.querySelector("#header-logo");
            const start = document.querySelector("#intro-logo");

            if (target && start) {
                const targetRect = target.getBoundingClientRect();
                const startRect = start.getBoundingClientRect();

                const xMove = targetRect.left - startRect.left;
                const yMove = targetRect.top - startRect.top;

                const scaleX = targetRect.width / startRect.width;
                const scaleY = targetRect.height / startRect.height;
                const scale = Math.min(scaleX, scaleY); // Keep aspect ratio

                t1.to("#intro-logo", {
                    x: xMove,
                    y: yMove,
                    scale: scale,
                    opacity: 0,
                    duration: 1,
                    ease: "expo.inOut",
                });
            } else {
                // Fallback if target not found (e.g. mobile menu open or different layout)
                t1.to("#intro-wrapper", {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power3.in",
                });
            }

        }, comp);

        return () => ctx.revert();
    }, [setIntroComplete]);

    if (!isVisible) return null;

    return (
        <div
            ref={comp}
            id="intro-wrapper"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
            <div id="intro-logo" className="relative">
                <span className="text-4xl sm:text-6xl font-display font-bold text-foreground">
                    Ds<span className="text-accent">Renders</span>
                </span>
            </div>
        </div>
    );
}
