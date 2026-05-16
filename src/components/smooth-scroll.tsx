"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Reset scroll on route change
    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <>{children}</>;
}
