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

// function LegacyOrbitIntroAnimation() {
//   const { setIntroComplete } = useIntro();
//   const comp = useRef<HTMLDivElement>(null);
//   const [isVisible, setIsVisible] = useState(true);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       const orbitItems = [
//         { selector: "#intro-tool-compass", offset: 0, tilt: -10 },
//         { selector: "#intro-tool-pen", offset: 60, tilt: -3 },
//         { selector: "#intro-tool-protractor", offset: 120, tilt: 6 },
//         { selector: "#intro-tool-ruler", offset: 180, tilt: 10 },
//         { selector: "#intro-tool-setsquare", offset: 240, tilt: 3 },
//         { selector: "#intro-tool-geometry", offset: 300, tilt: -6 },
//       ];

//       const orbitState = { phase: -90 };
//       const orbitConfig = {
//         radiusX: 0,
//         radiusY: 0,
//         minScale: 0.55,
//         maxScale: 1.16,
//         minOpacity: 0.32,
//         maxOpacity: 1,
//         depthStrength: 0.2,
//         globalScale: 0.24,
//         globalAlpha: 0,
//       };

//       const updateOrbit = () => {
//         const rySafe = Math.max(orbitConfig.radiusY, 1);

//         orbitItems.forEach((item) => {
//           const angle = ((orbitState.phase + item.offset) * Math.PI) / 180;
//           const x = Math.cos(angle) * orbitConfig.radiusX;
//           const y = Math.sin(angle) * orbitConfig.radiusY;

//           const rawDepth = (y / rySafe + 1) / 2;
//           const depth = 0.5 + (rawDepth - 0.5) * orbitConfig.depthStrength;
//           const scale =
//             (orbitConfig.minScale +
//               (orbitConfig.maxScale - orbitConfig.minScale) * depth) *
//             orbitConfig.globalScale;
//           const opacity =
//             (orbitConfig.minOpacity +
//               (orbitConfig.maxOpacity - orbitConfig.minOpacity) * depth) *
//             orbitConfig.globalAlpha;

//           gsap.set(item.selector, {
//             x,
//             y,
//             scale,
//             autoAlpha: opacity,
//             rotation: item.tilt - x * 0.03,
//             zIndex: Math.round(10 + depth * 100),
//           });
//         });
//       };

//       const blackHoleSpin = gsap.to("#intro-blackhole", {
//         rotation: 360,
//         duration: 8,
//         repeat: -1,
//         ease: "none",
//         transformOrigin: "50% 50%",
//       });

//       const orbitLoop = gsap.to(orbitState, {
//         phase: "+=360",
//         duration: 0.52,
//         repeat: -1,
//         ease: "none",
//         paused: true,
//         onUpdate: updateOrbit,
//       });

//       orbitLoop.timeScale(0.9);

//       const t1 = gsap.timeline({
//         onComplete: () => {
//           blackHoleSpin.kill();
//           orbitLoop.kill();
//           setIntroComplete(true);
//           setIsVisible(false);
//         },
//       });

//       gsap.set("#intro-blackhole", { autoAlpha: 0, scale: 0.7 });
//       gsap.set("#intro-tools-ring", { perspective: 900, transformStyle: "preserve-3d" });
//       gsap.set(
//         [
//           "#intro-tool-compass",
//           "#intro-tool-pen",
//           "#intro-tool-protractor",
//           "#intro-tool-ruler",
//           "#intro-tool-setsquare",
//           "#intro-tool-geometry",
//         ],
//         {
//           autoAlpha: 0,
//           x: 0,
//           y: 0,
//           scale: 0.24,
//         },
//       );
//       gsap.set(["#intro-magic-core", "#intro-magic-ring", "#intro-magic-ring-2"], {
//         autoAlpha: 0,
//       });
//       gsap.set("#intro-magic-core", { scale: 0.3 });
//       gsap.set("#intro-magic-ring", { scale: 0.52, rotation: -18 });
//       gsap.set("#intro-magic-ring-2", { scale: 0.42, rotation: 22 });
//       gsap.set(
//         [
//           "#intro-spark-1",
//           "#intro-spark-2",
//           "#intro-spark-3",
//           "#intro-spark-4",
//           "#intro-spark-5",
//           "#intro-spark-6",
//         ],
//         {
//           autoAlpha: 0,
//           x: 0,
//           y: 0,
//           scale: 0,
//         },
//       );
//       gsap.set("#intro-final-logo", { autoAlpha: 0, scale: 0.72, y: 16, filter: "blur(8px)" });

//       updateOrbit();

//       t1.fromTo(
//         "#intro-blackhole",
//         {
//           autoAlpha: 0,
//           scale: 0.7,
//         },
//         {
//           autoAlpha: 1,
//           scale: 1,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//       )
//         .to(
//           "#intro-blackhole",
//           {
//             scale: 1.06,
//             duration: 0.45,
//             ease: "sine.inOut",
//             yoyo: true,
//             repeat: 1,
//           },
//           ">-0.08",
//         )
//         .to(
//           orbitConfig,
//           {
//             radiusX: 110,
//             radiusY: 110,
//             depthStrength: 0.2,
//             globalScale: 0.95,
//             globalAlpha: 1,
//             duration: 0.62,
//             ease: "back.out(1.6)",
//             onUpdate: updateOrbit,
//           },
//           "<+0.1",
//         )
//         .to(
//           {},
//           {
//             duration: 0.35,
//           },
//         )
//         .to(
//           orbitConfig,
//           {
//             radiusX: 155,
//             radiusY: 38,
//             depthStrength: 1,
//             globalScale: 1,
//             globalAlpha: 1,
//             duration: 1,
//             ease: "power1.inOut",
//             onUpdate: updateOrbit,
//           },
//           ">",
//         )
//         .to(
//           orbitState,
//           {
//             phase: "+=140",
//             duration: 1,
//             ease: "none",
//             onUpdate: updateOrbit,
//           },
//           "<",
//         )
//         .to(
//           "#intro-blackhole",
//           {
//             autoAlpha: 0,
//             scale: 0.82,
//             duration: 0.32,
//             ease: "power2.inOut",
//           },
//           ">-0.04",
//         )
//         .call(() => {
//           orbitLoop.play();
//         }, undefined, "<")
//         .to(
//           orbitLoop,
//           {
//             timeScale: 1.2,
//             duration: 0.3,
//             ease: "power2.out",
//           },
//           "<+0.02",
//         )
//         .to(
//           {},
//           {
//             duration: 0.95,
//           },
//         )
//         .to(
//           orbitConfig,
//           {
//             radiusX: 0,
//             radiusY: 0,
//             globalScale: 0.24,
//             globalAlpha: 0,
//             duration: 0.92,
//             ease: "power3.in",
//             onUpdate: updateOrbit,
//           },
//           "<",
//         )
//         .call(() => {
//           orbitLoop.pause();
//         }, undefined, "<+0.86")
//         .fromTo(
//           "#intro-magic-core",
//           {
//             autoAlpha: 0,
//             scale: 0.32,
//           },
//           {
//             autoAlpha: 0.95,
//             scale: 1.18,
//             duration: 0.7,
//             ease: "power2.out",
//           },
//           "<+0.1",
//         )
//         .fromTo(
//           "#intro-magic-ring",
//           {
//             autoAlpha: 0,
//             scale: 0.52,
//             rotation: -18,
//           },
//           {
//             autoAlpha: 0.8,
//             scale: 1.2,
//             rotation: 26,
//             duration: 0.82,
//             ease: "power2.out",
//           },
//           "<",
//         )
//         .fromTo(
//           "#intro-magic-ring-2",
//           {
//             autoAlpha: 0,
//             scale: 0.42,
//             rotation: 24,
//           },
//           {
//             autoAlpha: 0.7,
//             scale: 1.08,
//             rotation: -22,
//             duration: 0.82,
//             ease: "power2.out",
//           },
//           "<+0.05",
//         )
//         .to(
//           [
//             "#intro-spark-1",
//             "#intro-spark-2",
//             "#intro-spark-3",
//             "#intro-spark-4",
//             "#intro-spark-5",
//             "#intro-spark-6",
//           ],
//           {
//             autoAlpha: 1,
//             scale: 1,
//             duration: 0.16,
//             stagger: 0.03,
//             ease: "power1.out",
//           },
//           "<+0.08",
//         )
//         .to(
//           "#intro-spark-1",
//           { x: -118, y: -42, scale: 0.1, autoAlpha: 0, duration: 0.58, ease: "power2.out" },
//           "<",
//         )
//         .to(
//           "#intro-spark-2",
//           { x: -38, y: -96, scale: 0.1, autoAlpha: 0, duration: 0.62, ease: "power2.out" },
//           "<+0.01",
//         )
//         .to(
//           "#intro-spark-3",
//           { x: 104, y: -58, scale: 0.1, autoAlpha: 0, duration: 0.56, ease: "power2.out" },
//           "<+0.01",
//         )
//         .to(
//           "#intro-spark-4",
//           { x: 122, y: 32, scale: 0.1, autoAlpha: 0, duration: 0.58, ease: "power2.out" },
//           "<+0.01",
//         )
//         .to(
//           "#intro-spark-5",
//           { x: 24, y: 106, scale: 0.1, autoAlpha: 0, duration: 0.6, ease: "power2.out" },
//           "<+0.01",
//         )
//         .to(
//           "#intro-spark-6",
//           { x: -100, y: 68, scale: 0.1, autoAlpha: 0, duration: 0.6, ease: "power2.out" },
//           "<+0.01",
//         )
//         .to(
//           ["#intro-magic-core", "#intro-magic-ring", "#intro-magic-ring-2"],
//           {
//             autoAlpha: 0,
//             scale: 1.35,
//             duration: 0.56,
//             ease: "power2.inOut",
//           },
//           "<+0.22",
//         )
//         .fromTo(
//           "#intro-final-logo",
//           {
//             autoAlpha: 0,
//             scale: 0.72,
//             y: 16,
//             filter: "blur(8px)",
//           },
//           {
//             autoAlpha: 1,
//             scale: 1,
//             y: 0,
//             filter: "blur(0px)",
//             duration: 0.86,
//             ease: "power3.out",
//           },
//           ">-0.04",
//         );

//       t1.to(
//         "#intro-final-logo",
//         {
//           scale: 1.04,
//           duration: 0.34,
//           yoyo: true,
//           repeat: 1,
//           ease: "sine.inOut",
//         },
//         ">+0.08",
//       )
//         .to(
//           "#intro-magic-layer",
//           {
//             autoAlpha: 0,
//             duration: 0.22,
//             ease: "power1.out",
//           },
//           "<",
//         )
//         .to(
//           "#intro-logo",
//           {
//             scale: 0.96,
//             filter: "blur(1px)",
//             duration: 0.45,
//             ease: "power2.inOut",
//           },
//           ">-0.05",
//         )
//         .to(
//           "#intro-wrapper",
//           {
//             autoAlpha: 0,
//             duration: 0.55,
//             ease: "power2.inOut",
//           },
//           "<+0.1",
//         );
//     }, comp);

//     return () => ctx.revert();
//   }, [setIntroComplete]);

//   if (!isVisible) return null;

//   return (
//     <div
//       ref={comp}
//       id="intro-wrapper"
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
//     >
//       <div
//         id="intro-logo"
//         className="relative flex h-[360px] w-[min(86vw,460px)] items-center justify-center"
//       >
//         <div id="intro-blackhole" className="absolute opacity-0">
//           <Image
//             src={blackHoleSvg}
//             alt=""
//             width={250}
//             height={250}
//             priority
//             className="h-[220px] w-[220px] select-none object-contain sm:h-[250px] sm:w-[250px]"
//           />
//         </div>

//         <div id="intro-tools-ring" className="absolute inset-0">
//           <div id="intro-tool-compass" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={compassSvg}
//               alt=""
//               width={102}
//               height={102}
//               priority
//               className="h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[92px] sm:w-[92px]"
//             />
//           </div>

//           <div id="intro-tool-pen" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={penSvg}
//               alt=""
//               width={100}
//               height={100}
//               priority
//               className="h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[90px] sm:w-[90px]"
//             />
//           </div>

//           <div id="intro-tool-protractor" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={protractorSvg}
//               alt=""
//               width={104}
//               height={104}
//               priority
//               className="h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[94px] sm:w-[94px]"
//             />
//           </div>

//           <div id="intro-tool-ruler" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={rulerSvg}
//               alt=""
//               width={106}
//               height={106}
//               priority
//               className="h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[92px] sm:w-[92px]"
//             />
//           </div>

//           <div id="intro-tool-setsquare" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={setSquareSvg}
//               alt=""
//               width={104}
//               height={104}
//               priority
//               className="h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[90px] sm:w-[90px]"
//             />
//           </div>

//           <div id="intro-tool-geometry" className="absolute left-1/2 top-1/2 opacity-0">
//             <Image
//               src={geometrySvg}
//               alt=""
//               width={104}
//               height={104}
//               priority
//               className="h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 select-none object-contain sm:h-[90px] sm:w-[90px]"
//             />
//           </div>
//         </div>

//         <div id="intro-magic-layer" className="pointer-events-none absolute inset-0">
//           <div
//             id="intro-magic-core"
//             className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-300/80 via-violet-300/70 to-cyan-300/70 opacity-0 blur-md sm:h-28 sm:w-28"
//           />
//           <div
//             id="intro-magic-ring"
//             className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/80 opacity-0 shadow-[0_0_30px_rgba(168,85,247,0.45)] sm:h-40 sm:w-40"
//           />
//           <div
//             id="intro-magic-ring-2"
//             className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80 opacity-0 shadow-[0_0_26px_rgba(34,211,238,0.38)] sm:h-32 sm:w-32"
//           />

//           <div id="intro-spark-1" className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300 opacity-0 shadow-[0_0_12px_rgba(196,181,253,0.85)]" />
//           <div id="intro-spark-2" className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 opacity-0 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
//           <div id="intro-spark-3" className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300 opacity-0 shadow-[0_0_10px_rgba(244,114,182,0.75)]" />
//           <div id="intro-spark-4" className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300 opacity-0 shadow-[0_0_12px_rgba(125,211,252,0.8)]" />
//           <div id="intro-spark-5" className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200 opacity-0 shadow-[0_0_10px_rgba(221,214,254,0.8)]" />
//           <div id="intro-spark-6" className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 opacity-0 shadow-[0_0_12px_rgba(165,243,252,0.85)]" />
//         </div>

//         <div id="intro-final-logo" className="absolute opacity-0">
//           <Image
//             src={animatedLogoSvg}
//             alt="DS Renders"
//             width={260}
//             height={148}
//             priority
//             className="h-auto w-[190px] object-contain sm:w-[230px]"
//           />
//         </div>
//       </div>

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,hsl(var(--background))_100%)]" />
//       </div>
//     </div>
//   );
// }
