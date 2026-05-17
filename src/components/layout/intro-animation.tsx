"use client";

import { useCallback } from "react";
import gsap from "gsap";
import { useIntro } from "@/context/intro-context";
import { useGSAP } from "@gsap/react";
import { LogoSignatureIntro } from "@/components/layout/logo-signature-intro";

gsap.registerPlugin(useGSAP);

export function IntroAnimation() {
  const { setIntroComplete } = useIntro();

  const handleComplete = useCallback(() => {
    setIntroComplete(true);
  }, [setIntroComplete]);

  return <LogoSignatureIntro onComplete={handleComplete} />;
}
