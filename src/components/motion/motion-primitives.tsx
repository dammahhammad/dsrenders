"use client";

import { motion, useInView, useScroll, useTransform, Variants } from "motion/react";
import { useRef, ReactNode } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// FADE IN ON SCROLL
// ═══════════════════════════════════════════════════════════════════════════
interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
    threshold?: number;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 30,
    once = true,
    threshold = 0.2,
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance };
            case "down":
                return { y: -distance };
            case "left":
                return { x: distance };
            case "right":
                return { x: -distance };
            default:
                return {};
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...getInitialPosition() }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// STAGGER CONTAINER
// ═══════════════════════════════════════════════════════════════════════════
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    delayChildren = 0.1,
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren,
                    },
                },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// STAGGER ITEM
// ═══════════════════════════════════════════════════════════════════════════
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// PARALLAX IMAGE
// ═══════════════════════════════════════════════════════════════════════════
interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
    scale?: number;
}

export function ParallaxImage({
    src,
    alt,
    className = "",
    speed = 0.3,
    scale = 1.1,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
    const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale: scaleValue }}
                className="h-full w-full object-cover"
            />
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// TEXT REVEAL
// ═══════════════════════════════════════════════════════════════════════════
interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function TextReveal({
    text,
    className = "",
    delay = 0,
    staggerDelay = 0.03,
}: TextRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-[0.25em]">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            className="inline-block"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.5,
                                delay: delay + (wordIndex * word.length + charIndex) * staggerDelay,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE REVEAL
// ═══════════════════════════════════════════════════════════════════════════
interface SlideRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    duration?: number;
}

export function SlideReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.8,
}: SlideRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const clipPaths = {
        left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" },
        right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0%)" },
        up: { hidden: "inset(100% 0 0 0)", visible: "inset(0% 0 0 0)" },
        down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0% 0)" },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ clipPath: clipPaths[direction].hidden }}
            animate={isInView ? { clipPath: clipPaths[direction].visible } : { clipPath: clipPaths[direction].hidden }}
            transition={{
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAGNETIC HOVER
// ═══════════════════════════════════════════════════════════════════════════
interface MagneticProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export function Magnetic({ children, className = "", strength = 0.3 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0, 0)";
    };

    return (
        <motion.div
            ref={ref}
            className={`transition-transform duration-300 ease-out ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// SCALE ON HOVER
// ═══════════════════════════════════════════════════════════════════════════
interface ScaleOnHoverProps {
    children: ReactNode;
    className?: string;
    scale?: number;
}

export function ScaleOnHover({ children, className = "", scale = 1.05 }: ScaleOnHoverProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            whileTap={{ scale: scale * 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════════════════════════════════════════════
interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

export function Counter({
    from = 0,
    to,
    duration = 2,
    className = "",
    suffix = "",
    prefix = "",
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {prefix}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
                {isInView ? (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CounterValue from={from} to={to} duration={duration} />
                    </motion.span>
                ) : (
                    from
                )}
            </motion.span>
            {suffix}
        </motion.span>
    );
}

function CounterValue({ from, to, duration }: { from: number; to: number; duration: number }) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
            const currentCount = Math.floor(from + (to - from) * easeProgress);
            setCount(currentCount);

            if (now < endTime) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(to);
            }
        };

        requestAnimationFrame(updateCount);
    }, [from, to, duration]);

    return <>{count}</>;
}

import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL INDICATOR
// ═══════════════════════════════════════════════════════════════════════════
interface ScrollIndicatorProps {
    className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
    return (
        <motion.div
            className={`flex flex-col items-center gap-2 ${className}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
        >
            <span className="text-sm font-body tracking-widest uppercase text-muted-foreground">
                Scroll
            </span>
            <motion.div
                className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
                animate={{ scaleY: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
    );
}
