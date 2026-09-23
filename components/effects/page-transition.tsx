"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const EASE_QUINT = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Preserve scroll-to-top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 20,
          scale: shouldReduceMotion ? 1 : 0.99,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: shouldReduceMotion ? 0.2 : 0.45,
            ease: EASE_QUINT,
          },
        }}
        exit={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : -15,
          scale: shouldReduceMotion ? 1 : 0.995,
          transition: {
            duration: shouldReduceMotion ? 0.15 : 0.25,
            ease: EASE_QUINT,
          },
        }}
        className="relative w-full"
      >
        {/* Animated Gold Sweep Line across the top during transition */}
        <motion.div
          key={`sweep-${pathname}`}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          transition={{
            duration: shouldReduceMotion ? 0.25 : 0.45,
            ease: EASE_QUINT,
          }}
          style={{ originX: 0 }}
          className="pointer-events-none fixed top-0 left-0 right-0 z-[99999] h-[2.5px] bg-gradient-to-r from-[#8B6914] via-[#F5E4A8] to-[#C9A84C] shadow-[0_0_16px_rgba(201,168,76,0.9)]"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
