"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface IntroContextType {
    isIntroComplete: boolean;
    setIntroComplete: (completed: boolean) => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export function IntroProvider({ children }: { children: ReactNode }) {
    const [isIntroComplete, setIntroComplete] = useState(false);

    return (
        <IntroContext.Provider value={{ isIntroComplete, setIntroComplete }}>
            {children}
        </IntroContext.Provider>
    );
}

export function useIntro() {
    const context = useContext(IntroContext);
    if (context === undefined) {
        throw new Error("useIntro must be used within an IntroProvider");
    }
    return context;
}
