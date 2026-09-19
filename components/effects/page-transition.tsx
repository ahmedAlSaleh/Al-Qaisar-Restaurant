"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Preserve scroll-to-top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  if (shouldReduceMotion) {
    return <main className="relative w-full">{children}</main>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          y: -10,
          transition: {
            duration: 0.25,
            ease: "easeOut",
          },
        }}
        className="relative w-full"
      >
        {/* Subtle golden route sweep overlay indicator (200ms) */}
        <motion.div
          key={`sweep-${pathname}`}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          style={{ originX: 0 }}
          className="pointer-events-none fixed top-0 left-0 right-0 z-[99999] h-[2px] bg-gradient-to-r from-[#C9A84C] via-[#F5E4A8] to-[#C9A84C] shadow-[0_0_10px_rgba(201,168,76,0.8)]"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
