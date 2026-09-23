"use client";

import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  const activeScale = shouldReduceMotion ? scrollYProgress : scaleX;

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[9999] h-[2.5px]">
      {/* Base gradient bar */}
      <motion.div
        aria-hidden="true"
        className="h-full w-full bg-gradient-to-r from-[#8B6914] via-[#D4AF37] to-[#F5F0E8] origin-left"
        style={{ scaleX: activeScale }}
      />

      {/* Pulsing soft glow overlay that breathes as progress grows */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? { opacity: 0.5 }
            : {
                opacity: [0.3, 0.85, 0.3],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#FFF2B2] to-[#D4AF37] origin-left shadow-[0_0_14px_rgba(212,175,55,0.75),0_0_24px_rgba(212,175,55,0.35)]"
        style={{ scaleX: activeScale }}
      />
    </div>
  );
}
