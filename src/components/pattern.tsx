'use client';

import { useTheme } from 'next-themes';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function PatternBackground({ children }: Props) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const darkGrid = 'rgba(255, 255, 255, 0.05)';
    const darkDot = 'rgba(255, 255, 255, 0.08)';

    const lightGrid = 'rgba(75, 85, 99, 0.08)';
    const lightDot = 'rgba(55, 65, 81, 0.12)';

    return (
        <div>
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 19px, ${isDark ? darkGrid : lightGrid} 19px, ${isDark ? darkGrid : lightGrid} 20px, transparent 20px, transparent 39px, ${isDark ? darkGrid : lightGrid} 39px, ${isDark ? darkGrid : lightGrid} 40px),
                        repeating-linear-gradient(90deg, transparent, transparent 19px, ${isDark ? darkGrid : lightGrid} 19px, ${isDark ? darkGrid : lightGrid} 20px, transparent 20px, transparent 39px, ${isDark ? darkGrid : lightGrid} 39px, ${isDark ? darkGrid : lightGrid} 40px),
                        radial-gradient(circle at 20px 20px, ${isDark ? darkDot : lightDot} 2px, transparent 2px),
                        radial-gradient(circle at 40px 40px, ${isDark ? darkDot : lightDot} 2px, transparent 2px)
                    `,
                    backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                }}
            />
            {children}
        </div>
    );
}