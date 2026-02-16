"use client";

import { useTheme } from "next-themes";
import { useCallback, useRef, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export default function ModeSwitch({ className }: { className?: string }) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const switchRef = useRef<HTMLButtonElement>(null);

    useEffect(() => setMounted(true), []);

    const isDark = resolvedTheme === "dark";

    const toggleTheme = useCallback(async () => {
        if (!switchRef.current) return;

        const newTheme = isDark ? "light" : "dark";

        // Use View Transition API if available for the circular reveal effect
        if (document.startViewTransition) {
            await document.startViewTransition(() => {
                flushSync(() => {
                    setTheme(newTheme);
                });
            }).ready;

            const { top, left, width, height } =
                switchRef.current.getBoundingClientRect();
            const x = left + width / 2;
            const y = top + height / 2;
            const maxRadius = Math.hypot(
                Math.max(left, window.innerWidth - left),
                Math.max(top, window.innerHeight - top)
            );

            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${maxRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        } else {
            setTheme(newTheme);
        }
    }, [isDark, setTheme]);

    // Avoid hydration mismatch
    if (!mounted) {
        return (
            <div
                className={cn(
                    "h-8 w-16 rounded-full bg-muted animate-pulse",
                    className
                )}
            />
        );
    }

    return (
        <button
            ref={switchRef}
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className={cn(
                "relative inline-flex h-7 w-16 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-500 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden",
                isDark
                    ? "bg-gradient-to-r from-[#041326] to-[#0E314C]"
                    : "bg-gradient-to-r from-[#77C2D0] to-[#3D91A7]",
                className
            )}
        >
            {/* Stars (Night background decoration) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    src="/Star.svg"
                    alt=""
                    aria-hidden="true"
                    className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
                        isDark
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-2 scale-75"
                    )}
                />
            </div>

            {/* Clouds (Day background decoration) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                    src="/Cloud%20a.svg"
                    alt=""
                    aria-hidden="true"
                    className={cn(
                        "absolute right-[2%] top-[10%] h-3 w-auto transition-all duration-500 ease-out delay-[150ms]",
                        isDark
                            ? "opacity-0 translate-y-3"
                            : "opacity-90 translate-y-0"
                    )}
                />
                <img
                    src="/Cloud%20b.svg"
                    alt=""
                    aria-hidden="true"
                    className={cn(
                        "absolute right-[28%] bottom-[8%] h-2.5 w-auto transition-all duration-500 ease-out delay-[250ms]",
                        isDark
                            ? "opacity-0 translate-y-3"
                            : "opacity-80 translate-y-0"
                    )}
                />
                <img
                    src="/Cloud%20c.svg"
                    alt=""
                    aria-hidden="true"
                    className={cn(
                        "absolute right-[52%] top-[18%] h-2 w-auto transition-all duration-500 ease-out delay-[350ms]",
                        isDark
                            ? "opacity-0 translate-y-3"
                            : "opacity-60 translate-y-0"
                    )}
                />
            </div>

            {/* Thumb (Sun / Moon) */}
            <span
                className={cn(
                    "pointer-events-none relative z-10 inline-block h-7 w-7 rounded-full transition-transform duration-500 ease-in-out",
                    isDark ? "translate-x-[34px]" : "translate-x-[2px]"
                )}
            >
                {/* Sun */}
                <img
                    src="/Sun.svg"
                    alt="Light mode"
                    className={cn(
                        "absolute inset-0 h-full w-full object-contain transition-all duration-500 drop-shadow-[0_0_6px_rgba(255,245,0,0.6)]",
                        isDark
                            ? "opacity-0 scale-50 rotate-90"
                            : "opacity-100 scale-100 rotate-0"
                    )}
                />
                {/* Moon */}
                <img
                    src="/moon.svg"
                    alt="Dark mode"
                    className={cn(
                        "absolute inset-0 h-full w-full object-contain transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
                        isDark
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-50 -rotate-90"
                    )}
                />
            </span>
        </button>
    );
}
