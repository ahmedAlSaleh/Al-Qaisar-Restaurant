"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroParticlesCanvas } from "@/components/three/hero-particles-canvas";
import { ArrowRight, Sparkles } from "lucide-react";
import { GOLD_BLUR_DATA_URL } from "@/lib/utils";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  // 3D Tilt on mouse move for the central luxury emblem
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { damping: 20, stiffness: 200 });
  const springY = useSpring(tiltY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    setIsDesktop(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth - 0.5) * 16;
    const yPct = (clientY / innerHeight - 0.5) * 16;
    tiltX.set(yPct);
    tiltY.set(-xPct);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 1. Aceternity Spotlight: Conical golden beam from top */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#D4AF37"
      />

      {/* 2. Three.js Interactive Particle Field */}
      <HeroParticlesCanvas />

      {/* 3. Hero Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=75&auto=format&fit=crop"
          alt="أجواء فاخرة وراقية في قاعة طعام مطعم القيصر بفندق فور سيزونز"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={GOLD_BLUR_DATA_URL}
          className="object-cover brightness-[0.20] scale-105 transition-transform duration-[15000ms] ease-out hover:scale-100"
        />
        {/* Radial vignette mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.5)_55%,rgba(8,8,8,0.98)_100%)]" />
      </div>

      {/* 4. Aceternity Background Beams (Atmospheric luminous rays) */}
      <BackgroundBeams className="opacity-40 z-[2] pointer-events-none" />

      {/* 5. Hero Content Layer */}
      <div className="relative z-[10] text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow badge with BlurFade */}
        <BlurFade delay={0.1} direction="down" blur="0px">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-medium">
              Four Seasons &middot; Fine Dining &middot; Est. 1994
            </span>
          </div>
        </BlurFade>

        {/* 3D Tilted Headline Container */}
        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
            transformPerspective: 1000,
          }}
          className="will-change-transform"
        >
          <BlurFade delay={0.2} direction="up" blur="0px">
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] text-[#F5F0E8] mb-6 select-none">
              <em className="font-script text-[1.15em] block font-normal">
                <AnimatedGradientText
                  speed={2}
                  colorFrom="#F5F0E8"
                  colorTo="#C9A84C"
                  className="font-script font-normal"
                >
                  Al-Qaisar
                </AnimatedGradientText>
              </em>
              <span className="block text-xs sm:text-sm tracking-[0.45em] text-[#C9A84C]/80 font-sans uppercase mt-3">
                Fine Dining Experience &middot; Four Seasons
              </span>
            </h1>
          </BlurFade>
        </motion.div>

        {/* Subtitle with BlurFade */}
        <BlurFade delay={0.3} direction="up" blur="0px">
          <p className="text-xs sm:text-sm tracking-[0.32em] text-[#F5F0E8]/65 uppercase max-w-2xl mb-10 font-light leading-relaxed">
            Where Culinary Artistry Meets Architectural Magnificence
          </p>
        </BlurFade>

        {/* CTA Buttons: Magic UI Shimmer Button + Motion Primitives Magnetic Button */}
        <BlurFade delay={0.4} direction="up" blur="0px">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {/* Primary CTA: Magic UI Shimmer Button with Gold specular highlight */}
            <ShimmerButton
              shimmerColor="#F5F0E8"
              background="linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)"
              borderRadius="8px"
              className="px-8 py-3.5 text-black font-semibold text-xs tracking-[0.25em] uppercase shadow-[0_12px_36px_rgba(201,168,76,0.38)] hover:shadow-[0_16px_48px_rgba(201,168,76,0.55)]"
              onClick={() => scrollTo("reserve")}
            >
              <span className="flex items-center gap-2 text-black font-sans">
                Reserve Your Table
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </ShimmerButton>

            {/* Secondary CTA: Motion Primitives Magnetic */}
            <Magnetic intensity={0.35} range={90}>
              <button
                onClick={() => scrollTo("signature")}
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9A84C]/50 px-7 py-3 text-xs uppercase tracking-[0.25em] font-medium text-[#C9A84C] bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 active:scale-[0.98]"
              >
                Explore the Menu
              </button>
            </Magnetic>
          </div>
        </BlurFade>
      </div>

      {/* 6. Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2 pointer-events-none">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#C9A84C]/60 font-medium">
          Scroll to discover
        </p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C]/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
