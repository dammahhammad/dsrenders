"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface LogoSignatureIntroProps {
  onComplete?: () => void;
  className?: string;
}

const INTRO_VIDEO = { src: "/logo-reveal.mp4", type: "video/mp4" };

export function LogoSignatureIntro({ onComplete, className }: LogoSignatureIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);

  const finishIntro = useCallback(() => {
    onComplete?.();
    setVisible(false);
  }, [onComplete]);

  useEffect(() => {
    if (!visible) return;

    const video = videoRef.current;
    if (!video) {
      finishIntro();
      return;
    }

    const handleEnded = () => finishIntro();
    const handleError = () => finishIntro();

    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    const fallbackTimeout = window.setTimeout(() => {
      finishIntro();
    }, 12000);

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        finishIntro();
      });
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
      window.clearTimeout(fallbackTimeout);
    };
  }, [finishIntro, visible]);

  if (!visible) return null;

  return (
    <div
      id="logo-signature-scene"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background ${className ?? ""}`}
    >
      <video
        ref={videoRef}
        className="h-auto w-[min(94vw,740px)] object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
          <source key={INTRO_VIDEO.src} src={INTRO_VIDEO.src} type={INTRO_VIDEO.type} />
      </video>
    </div>
  );
}
